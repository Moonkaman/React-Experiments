import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dev-myt2mf5a.auth0.com',
    clientID: 'aWKKsFWiC6ZNuA1FrW8U2UFkEzhksjpL',
    redurectUri: 'http://localhost:3000 /callback',
    responseType: 'token id_token',
    scope: 'openid profile email'
  })

  login = () => {
    this.auth0.authorize()
  }

  handleAuth = () => {
    this.auth0.parseHash((err, authResponse) => {
      if(authResponse) {
        localStorage.setItem('access_token', authResponse.accessToken);
        localStorage.setItem('id_token', authResponse.idToken);
        
        let expiresAt = JSON.stringify(authResponse.expiresIn * 1000 + new Date().getTime());
        localStorage.setItem('expiresAt', expiresAt);
      } else {
        console.log(err);
      }
    })
  }

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expiresAt');
  }

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'));
    return new Date().getTime() < expiresAt
  }
}