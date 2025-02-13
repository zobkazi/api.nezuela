import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { AuthService } from '../../src/auth/auth.service';

describe('Authentication System (e2e)', () => {
  jest.setTimeout(30000); // Increase timeout to 30 seconds
  let app: INestApplication;
  let authService: AuthService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    authService = moduleFixture.get<AuthService>(AuthService);
    await app.init();
  });

  describe('POST /auth/login', () => {
    it('should return 401 for invalid credentials', () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'nonexistent@example.com',
          password: 'wrongpassword',
        })
        .expect(401)
        .expect(res => {
          expect(res.body).toHaveProperty('message');
          expect(res.body.message).toContain('Invalid credentials');
        });
    });

    it('should return 400 for missing credentials', () => {
      return request(app.getHttpServer())
        .post('/auth/login')
        .send({})
        .expect(400)
        .expect(res => {
          expect(res.body).toHaveProperty('message');
          expect(res.body.message).toContain('Validation failed');
        });
    });

    it('should return JWT token for valid credentials', async () => {
      const validCredentials = {
        email: 'test@example.com',
        password: 'password123',
      };

      return request(app.getHttpServer())
        .post('/auth/login')
        .send(validCredentials)
        .expect(200)
        .expect(res => {
          expect(res.body).toHaveProperty('access_token');
          expect(typeof res.body.access_token).toBe('string');
        });
    });
  });

  afterAll(async () => {
    await app.close();
  });
});