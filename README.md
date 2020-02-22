# useNavigatorPermissions React Hook 🔗 🗺️
This is a React hook which checks to see if the user has provided the appropriate permissions for a given navigator API.

## Getting Started
You can install this hook `yarn` or `npm`.

```sh
yarn add react-use-navigator-permissions
```

It can be used like so:

```javascript
const permissions = useNavigatorPermissions('geolocation')
```

The value of `permissions` will depend on the status of the API. You can use the information returned to determine if the user should be prompted, or if you should display an error message in your application. This hook will not request permissions for you.
