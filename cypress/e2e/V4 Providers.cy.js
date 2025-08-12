describe('Jinfiniti V4 - Samples Search and Form Update', () => {
  const baseUrl = 'https://dev-lb-ui.jinfiniti.com/';

  beforeEach(() => {
    // Custom login command (should be defined in commands.js)
    cy.login('V4Jinfiniti', 'V4jin@12');
    cy.wait(10000);
    
    cy.visit('https://dev-lb-ui.jinfiniti.com/providers/list')

  });
 
    //Search Provider Name
    it('Searches for Demo Healthcare and clicks filter button', () => {
          // Type "Demo Healthcare" into the search field
          cy.get('[placeholder="Search"]').type('Demo Healthcare');
              
          cy.wait(5000);

          // Click on the search icon (if needed)
          cy.get('[class="ri-search-line"]').click();

          // Wait 10 seconds
          cy.wait(20000);

          // Click on the Filter button
          cy.get('[class="tdesign-filter-clear"]').click();
    });

    // Search Providers Email
     it('Searches for Demo Healthcare and clicks filter button', () => {
          // Type "Demo Healthcare" into the search field
          cy.get('[placeholder="Search"]').type('fimy@mailinator.com');
              
           cy.wait(5000);

          // Click on the search icon (if needed)
          cy.get('[class="ri-search-line"]').click();

          // Wait 10 seconds
          cy.wait(20000);

          // Click on the Filter button
          cy.get('[class="tdesign-filter-clear"]').click();
     });

    // Add Provider
     it('Adds a new provider and verifies it in the list', () => {
          // Click the Add Provider button
          cy.get('[href="/providers/new"]').click();

          cy.wait(10000)

          // Fill in the required fields

          cy.get('#public_key').type('123456789025');
          cy.get('#first_name').type('Palak01');
          cy.get('#last_name').type('test02');
          cy.get('#provider_name').type('Palak01 test02');
          cy.get('#email').type('palaktest01@gamil.com');

          // Click Save button
          cy.get('button').contains('Save').click();

          // Wait for save to process (adjust time as needed)
          cy.wait(5000);

          // Verify the provider appears in the provider list
          cy.get('[placeholder="Search"]').type('Palak01 test02');
          
          cy.get('.ri-search-line').click();

          // // Assert the result appears
          // cy.contains('Palak01 test02').should('be.visible');
        
               // Select the first checkbox in the list
              cy.get('input[type="checkbox"]').eq(1).check({ force: true });

              // Click the Action input to open dropdown
              cy.get('input[placeholder="Action"]').click().type('Delete');

              // Wait for dropdown to appear and select the "Delete" option
              cy.get('li').contains('Delete').click({ force: true });

              // Click the Go button
              cy.contains('button', 'Go').click();

              // Confirm popup
              cy.contains('button', 'Yes').click();

              // // Optional: Verify provider is deleted
              // cy.wait(3000);
              // cy.get('[placeholder="Search"]').clear().type('Palak01 test02');
              // cy.get('.ri-search-line').click();
              // cy.contains('No Data').should('be.visible'); // Replace 'No Data' if your app shows a different message
        
        
        });

// This Delete 
//Delete Provider Action 
      it('Selects Delete from Action dropdown and confirms deletion', () => {
        // Search for the provider name
        cy.get('[placeholder="Search"]').type('Palak01 test02');
        cy.wait(10000);
        cy.get('.ri-search-line').click();
        cy.wait(10000);

        // Select the first checkbox in the list
        cy.get('input[type="checkbox"]').eq(1).check({ force: true });

        // Click the Action input to open dropdown
        cy.get('input[placeholder="Action"]').click().type('Delete');

        // Wait for dropdown to appear and select the "Delete" option
        cy.get('li').contains('Delete').click({ force: true });

        // Click the Go button
        cy.contains('button', 'Go').click();

        // Confirm popup
        cy.contains('button', 'Yes').click();

        // Optional: Verify provider is deleted
        cy.wait(3000);
        cy.get('[placeholder="Search"]').clear().type('Palak01 test02');
        cy.get('.ri-search-line').click();
        cy.contains('No Data').should('be.visible'); // Replace 'No Data' if your app shows a different message
      });

        // Row per page field 
//           it('Sets row per page to 100', () => {
//   // Wait for pagination and table to load
//   cy.wait(5000);

//   // Click the dropdown to change row count — targeting button or input that shows current row value
//   cy.get('input[role="combobox"]').first().click({ force: true });

//   // Wait for dropdown options to appear
//   cy.wait(1000);

//   // Select the "100" option
//   cy.get('li').contains(/^100$/).click({ force: true });

//   // Optional: Verify the setting is applied
//   cy.get('.MuiTablePagination-displayedRows')
//     .invoke('text')
//     .should('match', /1–100/);
// });

    

 });


