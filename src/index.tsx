import { useState, useEffect } from 'react';

type useNavigatorPermissionsInterface = {
  /** The permission status. This will be an empty string if it's still fetching. */
  status: string;
  /** Returns true if the navigator api encounters an issue. */
  error: boolean;
};

const useNavigatorPermissions = (
  /** The name of the API you'd like to query. */
  name: PermissionName,
  /** Reference: https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query */
  configuration?: object
): useNavigatorPermissionsInterface => {
  const [error, setError] = useState(false);
  const [permitted, setPermitted] = useState('');

  useEffect(() => {
    if (window && window.navigator && window.navigator.permissions) {
      window.navigator.permissions
        .query({ name, ...configuration })
        .then(status => {
          setPermitted(status.state);
        });
    } else {
      setError(true);
    }
  }, [name, configuration]);

  return { status: permitted, error };
};

export default useNavigatorPermissions;
