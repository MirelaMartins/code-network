import { mocked } from 'ts-jest/utils';
import { userPostService } from '../../../src/service/User';
import { IUsuario } from '../../../src/model/Usuario';
import { postUserDB } from '../../../src/repository/Usuario';

const postUserDBMock = mocked(postUserDB, true);

jest.mock('../../../src/repository/Usuario');

describe('userPostService', () => {
  describe('Should return 1 when ', () => {
    it('a user was created ', async () => {
      postUserDBMock.mockResolvedValueOnce(null);
      const data = await userPostService('ok' as unknown as IUsuario);

      expect(data).toBe(1);
    });
  });

  describe('Should return 0 when ', () => {
    it('a user was not created ', async () => {
      postUserDBMock.mockRejectedValueOnce('error');
      const data = await userPostService('ok' as unknown as IUsuario);

      expect(data).toBe(0);
    });
  });
});
