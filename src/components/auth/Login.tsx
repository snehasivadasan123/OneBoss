
const Login = () => {
  const CLIENT_ID = import.meta.env.VITE_API_CLIENT_ID
  const REDIRECT_URI = import.meta.env.VITE_API_REDIRECT_URI
  const AUTH_SERVER = import.meta.env.VITE_API_AUTH_SERVER_URL

  const handleLogin = () => {
    const state = crypto.randomUUID();
    const scope = 'openid profile email';
    const authUrl = `${AUTH_SERVER}/auth?` +
      `client_id=${encodeURIComponent(CLIENT_ID)}` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
      `&response_type=code` +
      `&scope=${encodeURIComponent(scope)}` +
      `&state=${encodeURIComponent(state)}` +
      `&prompt=login`
    window.location.href = authUrl;

  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-lg font-medium"
        onClick={handleLogin}
      >
        🔐 Login with OneBoss
      </button>
    </div>
  )
}

export default Login