describe('Jinfiniti V4 - Samples Search and Form Update', () => {
  const baseUrl = 'https://dev-lb-ui.jinfiniti.com/';

  beforeEach(() => {
    // Custom login command (should be defined in commands.js)
    cy.login('V4Jinfiniti', 'V4jin@12');
    cy.wait(10000);
    
    cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv')
    cy.wait(5000);

  });

 it('Uploads a new sample CSV file and verifies the flow', () => {
  // 1. Visit upload page
  cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv');

  // 2. Wait for page to fully load
  cy.wait(3000);

  // 3. Click the "New Samples" radio or dropzone (optional)
  cy.get('.dropzone_text', { timeout: 10000 }).click();

  // 4. Select file using force:true since input is hidden
  cy.get('input[type="file"]', { timeout: 10000 }).selectFile('C:\\Users\\Admin\\Downloads\\CL_csv_test_11_07.csv', { force: true });

  // 5. Wait for upload button to be enabled, then click it
  cy.wait(2000);
 cy.get('.MuiGrid-grid-md-4 > .MuiButtonBase-root').click();

  // 6. Wait for page to refresh and check URL
  cy.url({ timeout: 10000 }).should('include', '/upload-csv');

  // 7. Click "Verify & Upload" button (update selector if needed)
  cy.contains('Verify & Upload', { timeout: 10000 }).click();

  // 8. Verify redirection to Sample Report page
  cy.url({ timeout: 15000 }).should('include', '/sample-report/list');

  // 9. Confirm sample report loaded
  // cy.contains('Sample Report List').should('be.visible');

 });

      // Negative case (Upload New result in uploaded reuploaded CSV) in apper error id true or false
      // Negative to positive
      it('Uploads a new sample CSV file and verifies the flow', () => {
        // 1. Visit upload page
        cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv');

        // 2. Wait for page to fully load
        cy.wait(3000);

        // 3. Click the "New Samples" radio or dropzone (optional)
        cy.get('.dropzone_text', { timeout: 10000 }).click();

        // 4. Select file using force:true since input is hidden
        cy.get('input[type="file"]', { timeout: 10000 }).selectFile("C:\\Users\\Admin\\Downloads\\CL_Reupload_Header_03_07.csv", { force: true });

        // 5. Wait for upload button to be enabled, then click it
        cy.wait(2000);
      cy.get('.MuiGrid-grid-md-4 > .MuiButtonBase-root').click();

        // 6. Wait for page to refresh and check URL
        cy.url({ timeout: 10000 }).should('include', '/upload-csv');

        // 7. Click "Verify & Upload" button (update selector if needed)
        cy.contains('Verify & Upload', { timeout: 10000 }).click();

        // // 8. Verify redirection to Sample Report page
        // cy.url({ timeout: 15000 }).should('include', '/sample-report/list');
        // 6. Verify one or more expected error messages
        cy.contains('DOB and Gender are mandatory for sample CL4961 to calculate the EGFR.').should('be.visible');
        cy.contains('Please enter Customer Name. Invalid data for sample CL4961.').should('be.visible');
        cy.contains('Date is mandatory. Please enter sample date for sample CL4961.').should('be.visible');
        cy.contains('Receiving date is mandatory. Please enter receiving date for sample CL4961.').should('be.visible');

      });

});
  





