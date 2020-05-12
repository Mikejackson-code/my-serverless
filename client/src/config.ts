// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = "fq0awvjb1j"
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-0hz4le1t.auth0.com',            // Auth0 domain
  clientId: 'wNZuQ9uZtUYmxvA4Q45j039WHcx3Mra2',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}