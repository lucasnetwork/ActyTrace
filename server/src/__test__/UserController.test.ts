import superTest from 'supertest';
import { getConnection } from 'typeorm';
// import jest from 'jest';
import createConnection from '../database';
import app from '../app';

describe('sample test', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });
  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });
  it('Create user', async () => {
    const response = await superTest(app).post('/user').send({
      email: 'test@gmail.com',
      password: '12345678',
      name: 'test',
      type: 'admin32312',
    });
    expect(response.status).toBe(201);
  });
  it('Get informations of user', async () => {
    const token = await superTest(app).post('/session').send({
      email: 'test@gmail.com',
      password: '12345678',
    });

    const user = await superTest(app)
      .get('/user')
      .set({ Authorization: `Bearer ${token.body.token}` });

    expect(user.status).toBe(200);
  });
});
