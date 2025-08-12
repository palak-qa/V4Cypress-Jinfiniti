describe('Jinfiniti V4 - Samples Search and Form Update', () => {
  const baseUrl = 'https://dev-lb-ui.jinfiniti.com/';

  beforeEach(() => {
    // Custom login command (should be defined in commands.js)
    cy.login('V4Jinfiniti', 'V4jin@12');
    cy.wait(10000);
    
    cy.visit('https://dev-lb-ui.jinfiniti.com/sample/list')

  });

     it('TC-01 Search field', () => {
      
        // Searching Sample Type
        cy.get('[placeholder="Search"]').type('CL1071');
        cy.wait(5000);
        cy.get('[class="ri-search-line"]').click();
        cy.wait(10000);

          //Filter buttton
            cy.get('[class="tdesign-filter-clear"]').click();

        // Searching Patient/ Provider name
        cy.get('[placeholder="Search"]').type('Mitch Bettis');
        cy.wait(5000);
        cy.get('[class="ri-search-line"]').click();
        cy.wait(10000);
      
            //Filter buttton
            cy.get('[class="tdesign-filter-clear"]').click();
    
         });

    //  it('TC-01 Select sample status', () => {

    //     cy.get('[placeholder="Sample Status"]');
    //     cy.get('[class="ri-arrow-down-s-line"]').eq(0).click();
    //     cy.wait(2000)
    //     cy.get('[aria-autocomplete="list"]').eq(0).click()
         
    //     cy.get('li.MuiAutocomplete-option').contains('Waiting for Sample').click();
    //      cy.select('[value="Waiting for Sample"]').eq(0).click();

    //  });

     it('TC-2 Selects "Waiting for Sample" from the Sample Status autocomplete', () => {
      // Step 1: Click and type into the Autocomplete field
      cy.wait(5000)
      cy.get('[aria-autocomplete="list"]').first() // or .eq(0)
      .click({ force: true })
      .clear()
      .type('Waiting for Sample', { delay: 100 });

      // Step 2: Wait for the dropdown list and select the desired option
      cy.get('ul[role="listbox"] li') // target dropdown option
      .contains('Waiting for Sample')
      .should('be.visible')
      .click({ force: true });

        cy.wait(10000);

      //Filter buttton
            cy.get('[class="tdesign-filter-clear"]').click();

      });

      it('TC-3 Selects "Processing" from Sample Status dropdown', () => {
  // Step 1: Click and type into the MUI autocomplete input
  cy.get('[aria-autocomplete="list"]') // Use .eq(n) if multiple fields
    .first()
    .click({ force: true })
    .clear()
    .type('Processing', { delay: 100 });

  // Step 2: Wait for the dropdown options to load and select "Processing"
  cy.get('ul[role="listbox"] li', { timeout: 10000 })
    .should('contain.text', 'Processing')
    .click({ force: true });
        cy.wait(10000);
    //Filter buttton
            cy.get('[class="tdesign-filter-clear"]').click();
            cy.wait(3000);
  
  });

    it('TC-4 Selects "Report Ready" from Sample Status dropdown', () => {
  // Step 1: Click and type into the autocomplete input field
  cy.get('[aria-autocomplete="list"]')
    .first()
    .click({ force: true })
    .clear()
    .type('Report Ready', { delay: 100 });

  // Step 2: Wait for and select the "Report Ready" option
  cy.get('ul[role="listbox"] li', { timeout: 10000 })
    .should('contain.text', 'Report Ready')
    .click({ force: true });
      cy.wait(10000);
    //Filter buttton
            cy.get('[class="tdesign-filter-clear"]').click();

  });

      it('TC-1 Selects "CL" from Sample Type dropdown', () => {
      // Step 1: Click and type into the Sample Type autocomplete input
      cy.get('[aria-autocomplete="list"]')
      .eq(1) // Change index based on which input is "Sample Type"
      .click({ force: true })
      .clear()
      .type('CL', { delay: 100 });

  // Step 2: Wait and click on the "CL" option
      cy.get('ul[role="listbox"] li', { timeout: 10000 })
      .should('contain.text', 'CL')
      .click({ force: true });
      
    });

    it('TC-2 Selects "BS" from Sample Type dropdown', () => {
    // Step 1: Click and type into the Sample Type autocomplete input
    cy.get('[aria-autocomplete="list"]')
    .eq(1) // Adjust index if Sample Type is at a different position
    .click({ force: true })
    .clear()
    .type('BS', { delay: 100 });

    // Step 2: Wait and click on the "BS" option
    cy.get('ul[role="listbox"] li', { timeout: 10000 })
    .should('contain.text', 'BS')
    .click({ force: true });
});


// it.only('Selects 25 rows per page from pagination dropdown', () => {
//   // Step 1: Click the "Rows per page" dropdown trigger
//   cy.contains('Rows per page')
//     .parent()
//     .find('button[aria-haspopup="listbox"]') // specifically target the dropdown button
//     .first() // make sure only 1 element is clicked
//     .click({ force: true });

//   // Step 2: Wait for the dropdown list to appear and click "25"
//   cy.get('ul[role="listbox"]', { timeout: 10000 })
//     .should('be.visible')
//     .within(() => {
//       cy.contains(/^25$/).click({ force: true });
//     });

//   // Step 3: Verify "25" is now selected
//   cy.contains('Rows per page')
//     .parent()
//     .should('contain', '25');
// });

        it('Sets row per page to 50', () => {
                      // Wait for pagination to load
                      cy.wait(5000);
                      
                      cy.get('[aria-label="rows per page"]').click();
                      // Click the pagination dropdown (use button with label 10, 25, etc.)
                      cy.get('.MuiTablePagination-selectLabel') // label near dropdown
                        .invoke('text')
                        .then((text) => {
                          // Log current state
                          cy.log('Current row label:', text);
                        });

                      // Find the dropdown button (usually next to label)
                      cy.get('div.MuiTablePagination-actions')
                        .parent()
                        .find('input')
                        .click({ force: true });

                      // Or: try clicking the button that contains the current number like '10'
                      cy.get('div').contains(/^10$|^25$|^100$/).click({ force: true }); // fallback to number match

                      // Click the "50" option from dropdown
                      cy.contains('li','50').click({ force: true });

                      // Optionally confirm
                      cy.get('.MuiTablePagination-displayedRows').should('contain','1–50');
                    });



  }); 
