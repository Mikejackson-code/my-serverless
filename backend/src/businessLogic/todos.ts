import * as uuid from 'uuid'

import { TodoItem } from '../models/TodoItem'
import { TodoAccess } from '../dataLayer/TodoAccess'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { parseUserId } from '../auth/utils'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
import { createLogger } from '../utils/logger'

const todoAccess = new TodoAccess()

const logger = createLogger('todos')

export const getAllTodos = async (jwtToken: string): Promise<TodoItem[]> => {
  const userId = parseUserId(jwtToken);

  return await todoAccess.getAllTodos(userId);
}

export const createTodo = async (
    createTodoRequest: CreateTodoRequest,jwtToken: string): Promise<TodoItem> => {
    logger.info('In createTodo() function')
  
    const itemId = uuid.v4()
    const userId = parseUserId(jwtToken)

    return await todoAccess.createTodo({
        todoId: itemId,
        userId: userId,
        name: createTodoRequest.name,
        dueDate: createTodoRequest.dueDate,
        createdAt: new Date().toISOString(),
        done: false,
    })
}

export const updateTodo = async (todoId: string,updateTodoRequest:UpdateTodoRequest,jwtToken:string): Promise<TodoItem> => {
    logger.info('In updateTodo() function')

    const userId = parseUserId(jwtToken);
    logger.info('User Id: ' + userId)

    return await todoAccess.updateTodo({
        todoId,
        userId,
        name: updateTodoRequest.name,
        dueDate: updateTodoRequest.dueDate,
        done: updateTodoRequest.done,
        createdAt: new Date().toISOString()
      })
    }
  export const deleteTodo = async (todoId:string,jwtToken:string): Promise<string> => {
    logger.info('In deleteTodo() function')
  
    const userId = parseUserId(jwtToken)
    logger.info('User Id: ' + userId)
  
    return await todoAccess.deleteTodo(todoId, userId)
  }
  
  export const generateUploadUrl = async (todoId: string): Promise<string> => {
    logger.info('In generateUploadUrl() function')
  
    return await todoAccess.generateUploadUrl(todoId)
  }    

