import { renderHook, cleanup } from '@testing-library/react-hooks';
import useNavigatorPermission from '../src';


afterEach(cleanup);

describe('it', () => {
  it('correctly returns an error when navigator is not available', () => {
    const { result } = renderHook(() => useNavigatorPermission('geolocation'));

    expect(result.current).toStrictEqual({ error: true, status: '' });
  });

  // it('correctly returns the permission status', () => {

  //   const {result} = renderHook(() => useNavigatorPermission('geolocation'))


  //   expect(result.current).toStrictEqual({ error: false, status: 'permdadadaditted' });
  // });
});
