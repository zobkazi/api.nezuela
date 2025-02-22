import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { UsersModule } from 'src/users/users.module';

describe('UsersController (e2e)', () => {
  let app: INestApplication;
  let createdUserId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should create a user', async () => {
    const response = await request(app.getHttpServer())
      .post('/users')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123',
        confirmPassword: 'password123',
        profileImage: 'image_url',
        bio: 'Test user',
        link: 'https://example.com',
      });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.id).toBeDefined();
    createdUserId = response.body.data.id;
  });

  it('should retrieve all users', async () => {
    const response = await request(app.getHttpServer()).get('/users');
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('should retrieve a user by ID', async () => {
    const response = await request(app.getHttpServer()).get(`/users/${createdUserId}`);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.id).toBe(createdUserId);
  });

  it('should update a user', async () => {
    const response = await request(app.getHttpServer())
      .patch(`/users/${createdUserId}`)
      .send({ firstName: 'John Updated' });
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.firstName).toBe('John Updated');
  });

  it('should delete a user', async () => {
    const response = await request(app.getHttpServer()).delete(`/users/${createdUserId}`);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});
