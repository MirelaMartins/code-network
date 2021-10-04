import NotCreated from '@/errors/NotCreated';
import { IUsuario } from '@/model/Usuario';
import { postUserDB } from '@/repository/Usuario';
import request from 'supertest';
import { mocked } from 'ts-jest/utils';
import app from '../../../src/app';

const postUserDBMock = mocked(postUserDB, true);

jest.mock('../../../src/repository/Usuario');

describe('userPost Route', () => {
  describe('Should return 201 when ', () => {
    it('a user was created ', async () => {
      postUserDBMock.mockResolvedValueOnce('ok' as unknown as IUsuario);
      const { status } = await request(app)
        .post('/api/user')
        .send({ data: 'ok' });

      expect(status).toBe(201);
    });
  });

  describe('Should return 424 when ', () => {
    it('a user was not created ', async () => {
      postUserDBMock.mockResolvedValueOnce(null);
      try {
        await request(app)
          .post('/api/user')
          .send({ data: 'ok' });
      } catch (error) {
        expect(error).toBeInstanceOf(NotCreated);
      }
    });
  });
});
