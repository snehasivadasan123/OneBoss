// src/auth/tokenService.ts
export const exchangeCodeForToken = async (code: string): Promise<void> => {
  console.log('Mock exchange for code:', code)

  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate token storage (like saving to localStorage)
      localStorage.setItem('access_token', 'mock_access_token_abc123')
      resolve()
    }, 1000)
  })
}
