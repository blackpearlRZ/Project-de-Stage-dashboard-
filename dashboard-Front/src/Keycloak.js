import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'HTTP_LINK', // your Keycloak base URL
  realm: 'REALM',
  clientId: 'CLIENT_ID',
});

export default keycloak;
