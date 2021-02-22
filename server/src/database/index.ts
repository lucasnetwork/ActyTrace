import "reflect-metadata";
import {createConnection} from 'typeorm'
import Student from '~/database/entities/Student'

export default createConnection({
    type:'postgres',
    host:'',
    port:3306,
    username:'root',
    password:'admin',
    database:'test',
    entities:[Student],
    synchronize:true,
    logging:false
})