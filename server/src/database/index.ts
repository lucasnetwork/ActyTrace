import {createConnection,Connection,getConnectionOptions} from 'typeorm'
import Student from '~/database/entities/Student'
import User from '~/database/entities/User'

export default async () :Promise<Connection> =>{
    const defaultOptions = await getConnectionOptions()
    return createConnection(defaultOptions)}