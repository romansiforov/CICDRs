class LoginPage{
    visit(){
     cy.log('Open website login page');
     cy.visit('https://automationteststore.com/index.php?rt=account/login');
    }

    getLoginField(){
        return cy.get('#loginFrm_loginname').type('Reid_Jacobi48');
    }
    getPasswordField(){
        return cy.get('#loginFrm_password').type('TestPassword');
    }
    getSubmitButton(){
        return cy.get('button[title="Login"]').contains('Login').click();
    }

    submitLoginForm(username, password){
        cy.log(`Auth user with username ${username} and password ${password}`)
        this.getLoginField().type(username);
        this.getPasswordField().type(password);
        this.getSubmitButton().click();
    }

}

export default new LoginPage();


