import "reflect-metadata";
import {createConnection,Connection} from 'typeorm'
import Student from '~/database/entities/Student'
import User from '~/database/entities/User'

export default () :Promise<Connection> =>{
    return createConnection({
    database:'./src/database/database.sqlite',
})}