import axios, { AxiosResponse } from 'axios'
import { GetAllUsers, GetUserById, User } from './types'

export const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getAllUsers: GetAllUsers = async () => {
  const { data } = (await instance.get('/users')) as AxiosResponse<User[], any>
  return data
}

export const getUserById: GetUserById = async (id) => {
  const { data } = (await instance.get(`/users/${id}`)) as AxiosResponse<
    User,
    any
  >

  return data
}
