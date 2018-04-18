import { TOKEN_LINKEDIN } from './type'

export const setTokenLinkedin = (token) => {
  return {
    type: TOKEN_LINKEDIN,
    payload: token
  }
}
