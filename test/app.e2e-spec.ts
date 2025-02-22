import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return HTML for the root route', async () => {
    const response = await request(app.getHttpServer()).get('/');
    
    expect(response.status).toBe(200);
    expect(response.text).toContain('<!DOCTYPE html>');
    expect(response.text).toContain('Welcome to the Docs Page!');
  });
});
