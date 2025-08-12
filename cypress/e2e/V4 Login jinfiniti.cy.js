describe('Jinfiniti V4 - Login Page', () => {
  const baseUrl = 'https://dev-lb-ui.jinfiniti.com/';

  beforeEach(() => {
    cy.visit(`${baseUrl}/login`);
  });
    
  // Negative test case
  it('should display error for invalid credentials', () => {
    https://dev-lb-ui.jinfiniti.com/dashboard
    cy.get('input[name="username"]').type('invalid');
    cy.wait(2000)
    cy.get('input[name="password"]').type('wrongpassword');
    cy.wait(2000)
    cy.get('button[type="submit"]').click();
    cy.wait(2000)
    // Assert error message appears
    cy.contains('Invalid username or password').should('be.visible');
  
  
  });
  
  //.then((response) => {
    //expect(response.status).to.eq(400);
    //expect(response.body).to.have.property('message', 'Invalid username or password');
  //});
  
  it('should login successfully with valid credentials', () => {
    cy.get('input[name="username"]').type('V4Jinfiniti');
    cy.wait(2000)
    cy.get('input[name="password"]').type('V4jin@12');
    cy.wait(2000)
    cy.get('button[type="submit"]').click();

  });

  });

