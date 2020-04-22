// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'pksye2u9k1'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/Dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-8hd7xefk.auth0.com',            // Auth0 domain
  clientId: 'a0vw5Q9Zjx0rbVUbiqjHZ4KrBNZeqKBD',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
