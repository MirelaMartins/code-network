import { mocked } from 'ts-jest/utils';
import NotCreated from '@/errors/NotCreated';
import { userPostService } from '../../../src/services/User';
import { IUser } from '../../../src/models/User';
import { postUserDB } from '../../../src/repositories/User';

const postUserDBMock = mocked(postUserDB, true);

jest.mock('../../../src/repository/User');

describe('userPostService', () => {
  describe('Should be void ', () => {
    it('a user was created ', async () => {
      postUserDBMock.mockResolvedValueOnce('ok' as unknown as IUser);
      const data = await userPostService('ok' as unknown as IUser);

      expect(data).toBe(undefined);
    });
  });

  describe('Should throw NotCreated when ', () => {
    it('a user was not created ', async () => {
      postUserDBMock.mockResolvedValueOnce(null);
      try {
        await userPostService('ok' as unknown as IUser);
      } catch (error) {
        expect(error).toBeInstanceOf(NotCreated);
      }
    });
  });
});
