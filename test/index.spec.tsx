import { renderHook, cleanup, act } from '@testing-library/react-hooks';
import useNavigatorPermission from '../src';

export interface Global {
  document: Document;
  window: Window | undefined;
  navigator: any;
}

declare const global: Global;

const mockPermissions = {
  query: jest
    .fn()
    .mockImplementationOnce(() => Promise.resolve({ state: 'permitted' })),
};

afterEach(cleanup);

describe('useNavigatorPermissions', () => {
  it('correctly returns an error when navigator is not available', () => {
    const { result } = renderHook(() => useNavigatorPermission('geolocation'));

    expect(result.current).toStrictEqual({ error: true, status: '' });
  });

  it('correctly returns the permission status', async () => {
    act(() => {
      global.navigator.permissions = mockPermissions;
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useNavigatorPermission('geolocation')
    );

    await waitForNextUpdate();

    expect(result.current).toStrictEqual({
      error: false,
      status: 'permitted',
    });
  });
});
