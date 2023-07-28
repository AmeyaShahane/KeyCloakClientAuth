import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/admin',
  realm: 'ashahane',
  clientId: 'myclient',
  redirectUri: "http://localhost:3001",
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;

