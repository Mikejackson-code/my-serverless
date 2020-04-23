import 'source-map-support/register';

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import * as middy from 'middy';
import { cors } from 'middy/middlewares';

import { generateUploadUrl } from '../../businessLogic/todos';
import { createLogger } from '../../utils/logger';

const logger = createLogger ('Generate Upload URLs')

export const handler = middy(
    async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
      try {
        const todoId = event.pathParameters.todoId
  
        const uploadUrl = await generateUploadUrl(todoId)
  
        return {
          statusCode: 200,
          body: JSON.stringify({
            uploadUrl
          })
        }
      } catch (e) {
        logger.error('Error: ' + e.message)
  
        return {
          statusCode: 500,
          body: e.message
        }
      }
    }
  )
  
  handler.use(
    cors({
      credentials: true
    })
  )