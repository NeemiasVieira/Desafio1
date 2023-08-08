class log {
  email;
  tentativa;
  dataDaTentativa;

  constructor(email, tentativa) {
    this.email = email;
    this.tentativa = tentativa;
    this.dataDaTentativa = new Date();
  }
}
