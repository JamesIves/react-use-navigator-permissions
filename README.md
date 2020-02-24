# useNavigatorPermissions Hook 🔗 🗺️
[![Build Status](https://github.com/JamesIves/react-use-navigator-permissions/workflows/unit-tests/badge.svg)](https://github.com/JamesIves/react-use-navigator-permissions/actions) [![Codecov Coverage](https://codecov.io/gh/JamesIves/react-use-navigator-permissions/branch/master/graph/badge.svg)](https://codecov.io/gh/JamesIves/react-use-navigator-permissions/branch/master)

This [React Hook](https://reactjs.org/docs/hooks-overview.html) allows you to make a query to see if a user has either accepted or denied permissions to a given [navigator api](https://developer.mozilla.org/en-US/docs/Web/API/Navigator).

## Getting Started ✈️
You can install this hook using Yarn.

```
yarn add react-use-navigator-permissions
```

It can then be included in your project like so.

```javascript
import useNavigatorPermissions from 'react-use-navigator-permissions'

const Component = () => {
  const { status, error } = useNavigatorPermissions('geolocation')

  return (
    <div>{status}</div>
  )
}
```

The first argument accepts the api name, and the second accepts a series of [configuration parameters](https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query).

## Browser Compatibility 📣

This hook utilizes `window.navigator.permissions` which is not widely supported by all browsers. For information on what browser supports what [please refer to the documentation](https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query).

