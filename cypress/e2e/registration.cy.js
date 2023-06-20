import user from "../fixtures/user.json";
import {faker} from '@faker-js/faker';
import {login} from '../support/helpers/helper.js';

user.username = faker.internet.userName();
user.firstName = faker.person.firstName('male');
user.lastName = faker.person.lastName('male');
user.email = faker.internet.email();
user.password = faker.internet.password({ length: 10 });

  it('Registration', () => {
    cy.visit('/');
  
    cy.get('.topnavbar [data-id="menu_account"]').click();
  
    cy.get('#accountFrm button').click();
  
    cy.get('#AccountFrm_firstname').type(user.firstName);
    cy.get('#AccountFrm_lastname').type(user.lastName);
    cy.get('#AccountFrm_email').type(user.email);
  
    cy.get('#AccountFrm_address_1').type(user.address);
    cy.get('#AccountFrm_city').type(user.city);
  
    cy.get('#AccountFrm_postcode').type(user.postCode);
    cy.get('#AccountFrm_country_id').select(user.countryId);
  
    cy.get('#AccountFrm_loginname').type(user.username);
    cy.get('#AccountFrm_password').type(user.password);
    cy.get('#AccountFrm_confirm').type(user.password);
  
    cy.get('#AccountFrm_zone_id').select(user.zone);
  
    cy.get('#AccountFrm_newsletter0').check();
    cy.get('#AccountFrm_agree').check();
  
    cy.get('button[title="Continue"]').click();
  
    cy.get('#maincontainer').contains(user.firstName).should('exist');

    cy.clearCookies();

 //   login(user);
    cy.login(user);
  
  })
  
  it.skip('Authorization', () => {
  
    cy.log('Open website login page');
    cy.visit('/index.php?rt=account/login');
  
    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');
  
    cy.log('Authorize user');
    cy.get('#loginFrm_loginname').type(user.username);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('button[type="submit"]').contains('Login').click();
  })