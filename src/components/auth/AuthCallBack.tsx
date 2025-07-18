import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { exchangeCodeForToken } from '../../services/auth/tokenService'

const AuthCallback = () => {
  const navigate = useNavigate()
  const hasRun = useRef(false)
  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')

    if (code) {
      exchangeCodeForToken(code)
        .then(() => navigate('/dashboard'))
        .catch(err => {
          console.error('Token exchange failed', err)
          navigate('/login')
        })
    } else {
      console.error('No code found in URL.')
      navigate('/login')
    }
  }, [navigate])

  return <div>Processing login...</div>
}

export default AuthCallback
