

export default class InstaApi{
  constructor()
  {

  }
  static say()
  {
    console.log("say - " + this.code);
  }
  static client_id;
  static secret;
  static code;
  static init(client_id, secret, code)
  {
    this.client_id = client_id;
    this.secret = secret;
    this.code = code;
    console.log("init " + this.code);
  }

  static self(func)
  {
    var url ='https://api.instagram.com/v1/users/self/?access_token=';
    url += this.code;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        func(responseJson);
      })
      .catch((error) => {
        func(null, error);
      });
  }
};
