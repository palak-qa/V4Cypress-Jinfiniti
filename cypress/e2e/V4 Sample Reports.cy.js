describe('Jinfiniti V4 - Samples Search and Form Update', () => {
  const baseUrl = 'https://dev-lb-ui.jinfiniti.com/';

  beforeEach(() => {
    // Custom login command (should be defined in commands.js)
    cy.login('V4Jinfiniti', 'V4jin@12');
    cy.wait(10000);
    
    cy.visit('https://dev-lb-ui.jinfiniti.com/sample-report/list')

  });

        //"Sample Id" Search
        it('Searches for BS1682 and clicks the filter button', () => {
      // Type 'BS1682' in the search field
      cy.get('[placeholder="Search"]').click().type('BS1682');

      cy.wait(9000);

      // Click the search icon
      cy.get('[class="ri-search-line"]').click();

      // Wait 20 seconds
          cy.wait(9000);

      // Click the filter button
      cy.get('.tdesign-filter-clear').click();
    });

          // "Patient Name" Search
          it('Searches for BS1682 and clicks the filter button', () => {
          // Type 'BS1682' in the search field
          cy.get('[placeholder="Search"]').click().type('Elaine Purnell');

          cy.wait(9000);

          // Click the search icon
          cy.get('[class="ri-search-line"]').click();

          // Wait 20 seconds
          cy.wait(9000);

          // Click the filter button
          cy.get('.tdesign-filter-clear').click();
        });

                  // "Provider Name" Search
                  it('Searches for BS1682 and clicks the filter button', () => {
                  // Type 'BS1682' in the search field
                  cy.get('[placeholder="Search"]').click().type('Bond AI');

                  cy.wait(9000);
                  // Click the search icon
                  cy.get('[class="ri-search-line"]').click();

                  // Wait 20 seconds
                 cy.wait(9000);

                 // Click the filter button
                  cy.get('.tdesign-filter-clear').click();
                  });

                              // "Email" Search
                                it('Searches for BS1682 and clicks the filter button', () => {
                                // Type 'BS1682' in the search field 
                                cy.get('[placeholder="Search"]').click().type('elaine.purnell@yopmail.com');

                                cy.wait(9000);

                                // Click the search icon
                                cy.get('[class="ri-search-line"]').click();

                                // Wait 20 seconds
                                cy.wait(9000);

                                // Click the filter button
                                cy.get('.tdesign-filter-clear').click();
                              });
    
    
    //  Search Sample Types
          // CL Sample type
       it('Selects CL sample type and performs a search', () => {
      // Navigate to Sample List page (already done in beforeEach)
      
      // Open the Sample Type dropdown
      cy.get('[placeholder="Sample Type"]').click();

      // Select "CL" from the dropdown options
      cy.get('li').contains(/^CL$/).click(); // ^CL$ ensures exact match

      // Click the search icon
      cy.get('.ri-search-line').click();

      // Optionally verify the results contain CL
      cy.wait(5000);
      cy.contains('CL').should('be.visible');
    
    });

                // BS Sample type
                it('Selects BS sample type and performs a search', () => {
                  // Navigate to Sample List page (already done in beforeEach)
                  
                  // Open the Sample Type dropdown
                  cy.get('[placeholder="Sample Type"]').click();

                  // Select "CL" from the dropdown options
                  cy.get('li').contains(/^BS$/).click(); // ^BS$ ensures exact match

                  // Click the search icon
                  cy.get('.ri-search-line').click();

                  // Optionally verify the results contain CL
                  cy.wait(5000);
                  cy.contains('BS').should('be.visible');

                  // cy.get('#\:r0\:').eq(2).click();

                  // cy.get('[<input aria-invalid="false" aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput mui-1k3x8v3" value="25">]').click();
                
                });

      // Provider Search Dropdown field 
    // Step 1: Click on Provider dropdown
    it('Searches for Provider Demo Healthcare from dropdown and clicks filter', () => {
      cy.get('[class="MuiTypography-root MuiTypography-subtitle1 mui-1ubfpu8"]').eq(0).click();
      cy.wait(5000);

      // Step 2: In the dropdown's internal search field, type 'Demo Healthcare'
      // cy.get('input[placeholder="Search"]').type('Demo Healthcare');
      cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputTypeSearch MuiInputBase-inputSizeSmall mui-su0xqu"]').click();

      cy.wait(5000);
      cy.get('[type="search"]').type('Test Provider').click();
      // Step 3: Wait 10 seconds (for dropdown options to load)
      cy.wait(5000);
      cy.get('.infinite-scroll-component > :nth-child(1) > .MuiTypography-root').click();

      cy.wait(10000);

      // Step 4: Click the Filter button
      cy.get('.tdesign-filter-clear').click();

      
  });


    // Kit Satus field
    // Activated Select
            it('Selects "Activated" from Kit Status dropdown', () => {
            // Step 1: Click on the Kit Status field (dropdown trigger)
            cy.get('[placeholder="Kit Status"]').click();

            // Step 2: Wait for dropdown to appear
            cy.get('ul[role="listbox"]', { timeout: 5000 }).should('be.visible');

            // Step 3: Select the "Activated" option
            cy.get('ul[role="listbox"] li').contains('Activated').click({ force: true });

            // Optional: Assert that "Activated" is selected in the input
            cy.get('[placeholder="Kit Status"]').should('have.value', 'Activated');
          });
  
                  // Not Activated select
                  it('Selects "Not Activated" from Kit Status dropdown', () => {
                    // Step 1: Click on the Kit Status field to open dropdown
                    cy.get('[placeholder="Kit Status"]').click({ force: true });

                    // Step 2: Wait for the dropdown to become visible
                    cy.get('ul[role="listbox"]').should('be.visible');

                    // Step 3: Select the "Not Activated" option
                    cy.get('ul[role="listbox"] li')
                      .contains('Not Activated')
                      .click({ force: true });

                    // Step 4: Optionally assert that it is selected
                    cy.get('[placeholder="Kit Status"]').should('have.value', 'Not Activated');
                  });

              // Row Per Page = 50
             // Set row per page in replace value in 50 

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

                  // Set row per page in replace value in 100 
                  it('Sets row per page to 100', () => {
                      // Wait for pagination to load
                      cy.wait(5000);

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
                      cy.get('div').contains(/^10$|^25$|^50$/).click({ force: true }); // fallback to number match

                      // Click the "100" option from dropdown
                      cy.contains('li', '100').click({ force: true });

                      // Optionally confirm
                      cy.get('.MuiTablePagination-displayedRows').should('contain', '1–100');
                    });



  });



