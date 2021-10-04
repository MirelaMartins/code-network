import { mocked } from 'ts-jest/utils';
import NotCreated from '@/errors/NotCreated';
import { userPostService } from '../../../src/service/User';
import { IUsuario } from '../../../src/model/Usuario';
import { postUserDB } from '../../../src/repository/Usuario';

const postUserDBMock = mocked(postUserDB, true);

jest.mock('../../../src/repository/Usuario');

describe('userPostService', () => {
  describe('Should be void ', () => {
    it('a user was created ', async () => {
      postUserDBMock.mockResolvedValueOnce('ok' as unknown as IUsuario);
      const data = await userPostService('ok' as unknown as IUsuario);

      expect(data).toBe(undefined);
    });
  });

  describe('Should throw NotCreated when ', () => {
    it('a user was not created ', async () => {
      postUserDBMock.mockResolvedValueOnce(null);
      try {
        await userPostService('ok' as unknown as IUsuario);
      } catch (error) {
        expect(error).toBeInstanceOf(NotCreated);
      }
    });
  });
});
