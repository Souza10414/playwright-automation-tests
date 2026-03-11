export class LoginPage {

  constructor(page){
    this.page = page
    this.username = '#user-name'
    this.password = '#password'
    this.loginButton = '#login-button'
  }

  async acessarSite(){
    await this.page.goto('https://www.saucedemo.com/')
  }

  async fazerLogin(usuario, senha){
    await this.page.fill(this.username, usuario)
    await this.page.fill(this.password, senha)
    await this.page.click(this.loginButton)
  }

}