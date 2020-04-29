// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
//const apiId =  '5mca9ekrjj'
const apiId = "xwutfduzp3"
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-5gla19j7.auth0.com',            // Auth0 domain
  clientId: 'PlEynvDyrFSfBVTDCFIkLmm1ahwU4D1K',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
