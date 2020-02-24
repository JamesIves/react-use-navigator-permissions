# useNavigatorPermissions Hook 🔗 🗺️

This [React Hook](https://reactjs.org/docs/hooks-overview.html) allows you to query to see if a user has either accepted or denied permissions to a given navigator api.

## Getting Started ✈️
You can install this hook using Yarn.

```
yarn add react-use-navigator-permissions
```

It can then be included in your project like so.

```javascript
import useNavigatorPermissions from 'react-use-navigator-permissions'

const Component = () => {
  const { status } = useNavigatorPermissions('geolocation')

  return (
    <div>{status}</div>
  )
}
```

The first argument accepts the api name, and the second accepts a series of [configuration parameters](https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query).

## Browser Compatibility 📣

This hook utilizes `window.navigator.permissions` which is not widely supported by all browsers. For information on what browser supports what [please refer to the documentation](https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query).

