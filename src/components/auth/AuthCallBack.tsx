// src/pages/AuthCallback.tsx
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { exchangeCodeForToken } from '../../services/auth/tokenService'

const AuthCallback = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    console.log('AuthCallback code:', code)
    if (code) {
      exchangeCodeForToken(code)
        .then(() => navigate('/dashboard'))
        .catch(err => console.error('Token exchange failed', err))
    }
  }, [])

  return <div>Processing login...</div>
}

export default AuthCallback
