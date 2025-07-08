import React from 'react'
//import { CLIENT_ID, REDIRECT_URI, AUTH_SERVER } from '../../auth/authConfig'
const Login = () => {
  const handleLogin = () => {
    window.location.href = `${window.location.origin}/auth/callback?code=mock123`
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