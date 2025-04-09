import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'https://oauthbam.barid.ma/auth', // your Keycloak base URL
  realm: 'EcomAmana',
  clientId: 'EcomAuth',
});

export default keycloak;
