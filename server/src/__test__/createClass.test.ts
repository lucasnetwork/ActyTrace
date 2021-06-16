import superTest from 'supertest';
import { getConnection } from 'typeorm';
import createConnection from '../database';
import app from '../app';

describe('Subject test', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
    await superTest(app).post('/user').send({
      email: 'test@gmail.com',
      password: '12345678',
      name: 'test',
      type: 'admin32312',
    });
  });
  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });
  it('Create class with nothing token', async () => {
    const response = await superTest(app).post('/class').send({
      name: 'test',
      description: 'saude',
    });
    expect(response.status).toBe(403);
  });
  it('Create class with token', async () => {
    const token = await superTest(app).post('/session').send({
      email: 'test@gmail.com',
      password: '12345678',
    });
    const teacher = await superTest(app).post('/user').send({
      email: 'teater@gmail.com',
      password: '12345678',
      name: 'test',
      type: 'teacher',
    });
    const subject = await superTest(app)
      .post('/subject')
      .send({
        name: 'test',
        description: 'saude',
      })
      .set({ Authorization: `Bearer ${token.body.token}` });

    const response = await superTest(app)
      .post('/class')
      .send({
        name: 'biologia',
        idSubject: subject.body.id,
        idTeacher: teacher.body.id,
      })
      .set({ Authorization: `Bearer ${token.body.token}` });
    expect(response.status).toBe(201);
  });
});
