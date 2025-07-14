// src/auth/tokenService.ts
export const exchangeCodeForToken = async (code: string): Promise<void> => {
  console.log(' code is:', code)
  const tokenUrl = 'http://localhost:8080/realms/myrealm/protocol/openid-connect/token';
  const clientId = 'clientId123'
  const clientSecret = '02mPyr1m27RYlckOnIU4Td1eAN9tCDk2'
  const redirectUri = 'http://localhost:5173/auth/callback'; // same as Keycloak config
  const basicAuth = btoa(`${clientId}:${clientSecret}`);


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
    localStorage.setItem('refresh_token', tokenData.refresh_token);

  } catch (error) {
    console.error('Error exchanging code for token:', error);
    throw error;
  }
}
