describe('Jinfiniti V4 - Samples Search and Form Update', () => {
  const baseUrl = 'https://dev-lb-ui.jinfiniti.com/';

  beforeEach(() => {
    // Custom login command (should be defined in commands.js)
    cy.login('V4Jinfiniti', 'V4jin@12');
    cy.wait(10000);
    
    cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv')
    cy.wait(5000);

  });

  it('Uploads updated sample result for new samples', () => {
  // 1. Visit the page
  cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv');

  // 2. Select second radio button
  cy.get('input[type="radio"]', { timeout: 5000 }).eq(1).check({ force: true });

  // 3. Click the "Choose File" area
  cy.get('.dropzone_text', { timeout: 5000 }).click();

  // 4. Select the CSV file
  cy.get('input[type="file"]', { timeout: 5000 })
    .selectFile("C:\\Users\\Admin\\Downloads\\CL_Reupload_Header_03_07.csv", { force: true }); // replace with actual file path

  // 5. Click the Upload button
  cy.wait(2000); 
  cy.get('.MuiGrid-grid-md-4 > .MuiButtonBase-root').click();

  // 6. Click "Verify & Upload" button if needed
  // cy.contains('Verify & Upload', { timeout: 13000 }).click();

  // 7. Confirm redirection to sample report page
  cy.url({ timeout: 15000 }).should('include', '/sample-report/list');
});


// Negative case
// Reupload result in send new upload result
it('Uploads updated sample result for new samples', () => {
  // 1. Visit the page
  cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv');

  // 2. Select second radio button
  cy.get('input[type="radio"]', { timeout: 5000 }).eq(1).check({ force: true });

  // 3. Click the "Choose File" area
  cy.get('.dropzone_text', { timeout: 5000 }).click();

  // 4. Select the CSV file
  cy.get('input[type="file"]', { timeout: 5000 })
    .selectFile('C:\\Users\\Admin\\Downloads\\CL_csv_test_11_07.csv', { force: true }); // replace with actual file path

  // 5. Click the Upload button
  cy.wait(2000); 
  cy.get('.MuiGrid-grid-md-4 > .MuiButtonBase-root').click();
  
  // 6. Verify one or more expected error messages
        cy.contains('Invalid header: Customer Name, Provider, Partner, Sample Date, Receiving Date, DOB, Gender, Ethnicity, Email, Note.').should('be.visible');
    
});


});