import auth from '../auth';

describe('Auth method check if token is saved in local stirage and parse it', () => {
  test('should return false if toeken is not found', () => {
    const testAuth = auth('localhost.me/');

    localStorage.clear();
    expect(testAuth).not.toBeFalsy();
  });
});
