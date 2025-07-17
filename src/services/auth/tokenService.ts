// src/auth/tokenService.ts
export const exchangeCodeForToken = async (code: string): Promise<void> => {
  console.log(' code is:', code)
  const tokenUrl = import.meta.env.VITE_API_AUTH_SERVER_URL + "/token"
  const userInfoUrl = import.meta.env.VITE_API_AUTH_SERVER_URL + "/userinfo"

  const clientId = import.meta.env.VITE_API_CLIENT_ID
  const clientSecret = import.meta.env.VITE_API_CLIENT_SECRET
  const redirectUri = import.meta.env.VITE_API_REDIRECT_URI
  const basicAuth = btoa(`${clientId}:${clientSecret}`)

  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', redirectUri)
  console.log('Params for token exchange:', params.toString());
  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${basicAuth}`,
      },
      body: params.toString(),
    });
    console.log('Token request response:', response);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Token exchange failed: ${errorText}`);
    }
    const tokenData = await response.json();
    console.log('Token response:', tokenData);


    localStorage.setItem('access_token', tokenData.access_token);
    localStorage.setItem('refresh_token', tokenData.refresh_token)
    const userInfoData = await fetch(userInfoUrl, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
      }
    })
    const userInfo = await userInfoData.json();
    console.log('User info:', userInfo);


  } catch (error) {
    console.error('Error exchanging code for token:', error);
    throw error;
  }
}
