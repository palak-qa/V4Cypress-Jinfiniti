describe('Jinfiniti V4 - Samples Search and Form Update', () => {
  const baseUrl = 'https://dev-lb-ui.jinfiniti.com/';

  beforeEach(() => {
    // Custom login command (should be defined in commands.js)
    cy.login('V4Jinfiniti', 'V4jin@12');
    cy.wait(10000);
    
    cy.visit('https://dev-lb-ui.jinfiniti.com/sample-report/list')

  });
        
       // Test Case: Positive
        //Step:1 = "Sample Id" Search
        it('Searches for CL6022 and clicks the filter button', () => {
      // Type 'BS1682' in the search field
      cy.get('[placeholder="Search"]').click().type('V4 test demo49');

      cy.wait(10000);

      // Click the search icon
      cy.get('[class="ri-search-line"]').click();

      // Wait 20 seconds
      cy.wait(10000);

      // Click the filter button
      // cy.get('.tdesign-filter-clear').click(); //Filter to clear all searching field

                //Step:2 = "Select Sample type"

                 cy.get('[placeholder="Sample Type"]').click();

                  // Select "CL" from the dropdown options
                  cy.get('li').contains(/^CL$/).click(); // ^BS$ ensures exact match
                  cy.wait(3000);

                  // Click the search icon
                  cy.get('.ri-search-line').click();

                  // Optionally verify the results contain CL
                  cy.wait(5000);
                  cy.contains('CL').should('be.visible');
                  cy.wait(2000);
    
         // Step:3 = "Select Kit Status (Not Activated)" 
         
         cy.get('[placeholder="Kit Status"]').click({ force: true });

                    // Step 2: Wait for the dropdown to become visible
                    cy.get('ul[role="listbox"]').should('be.visible');

                    // Step 3: Select the "Not Activated" option
                    cy.get('ul[role="listbox"] li')
                      .contains('Not Activated')
                      .click({ force: true });

                    // Step 4: Optionally assert that it is selected
                    cy.get('[placeholder="Kit Status"]').should('have.value', 'Not Activated');
                    cy.wait(9000);


                     cy.get(':nth-child(1) > :nth-child(7) > .MuiButtonBase-root').click();
                     cy.wait(2000);
                   cy.get('[style="margin-top: 1rem;"] > .MuiStack-root > .MuiBox-root > .MuiTypography-root').click();
                    cy.wait(1000);
                    cy.get('[placeholder="Type to search"]').type('V4 test demo49');
                    cy.wait(1000);
                    //  cy.contains('p', 'V4 test demo49').should('be.visible').click();

                      cy.get('p.MuiTypography-body2').then(($els) => {
                            const target = [...$els].find(el => el.textContent.trim() === 'V4 test demo49');
                            if (target) {
                              cy.wrap(target).click();
                            } else {
                              throw new Error('Element with text "V4 test demo49" not found');
                            }
                          });
                    
                    cy.get('.MuiButtonBase-root > .MuiTypography-root')
                    
                   cy.wait(5000);

                  // Step 4: Click on Save button
                  cy.contains('button', 'Save').click();
                  cy.wait(8000);
                  cy.get('.mui-1fgd7fz > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained').click();
                  cy.wait(2000);
                  
                  cy.contains('Kit is activated successfully.').should('be.visible'); // toaster message apper
     
                
                //  cy.get('.dropzone_text', { timeout: 10000 }).click();

                 cy.wait(9000);

          //Upload CSV before activated kit after upoad CSV
                
                

  //  it.only('Uploads a new sample CSV file and verifies the flow', () => {
  // 1. Visit upload page
  cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv');

  // 2. Wait for page to fully load
  cy.wait(3000);

  // 3. Click the "New Samples" radio or dropzone (optional)
  cy.get('.dropzone_text', { timeout: 10000 }).click();

  // 4. Select file using force:true since input is hidden
  cy.get('input[type="file"]', { timeout: 10000 }).selectFile('c:\\Users\\Admin\\Downloads\\Kit_activate_after_upload_CSV.csv', { force: true });

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

  


  // Test Case: Negative (Kit Already activated in creat again activat in show error message)


  //Step:1 = "Sample Id" Search
        it('Searches for BS1682 and clicks the filter button', () => {
      // Type 'BS1682' in the search field
      cy.get('[placeholder="Search"]').click().type('Holistic Medicine');

      cy.wait(10000);

      // Click the search icon
      cy.get('[class="ri-search-line"]').click();

      // Wait 20 seconds
      cy.wait(10000);

      // Click the filter button
      // cy.get('.tdesign-filter-clear').click(); //Filter to clear all searching field

                // //Step:2 = "Select Sample type"

                 cy.get('[placeholder="Sample Type"]').click();

                  // Select "CL" from the dropdown options
                  cy.get('li').contains(/^BS$/).click(); // ^BS$ ensures exact match

                  // Click the search icon
                  cy.get('.ri-search-line').click();

                  // Optionally verify the results contain CL
                  cy.wait(5000);
                  cy.contains('BS').should('be.visible');
                  cy.wait(2000);
    
         // Step:1 = "Select Kit Status (Activated)" 
         
         cy.get('[placeholder="Kit Status"]').click();

            // Step 2: Wait for dropdown to appear
            cy.get('ul[role="listbox"]', { timeout: 5000 }).should('be.visible');

            // Step 3: Select the "Activated" option
            cy.get('ul[role="listbox"] li').contains('Activated').click({ force: true });

            // Optional: Assert that "Activated" is selected in the input
            cy.get('[placeholder="Kit Status"]').should('have.value', 'Activated');
          
                    cy.wait(10000);


                     cy.get(':nth-child(1) > :nth-child(7) > .MuiButtonBase-root').click();
                     cy.wait(2000);
                    cy.get('[style="margin-top: 1rem;"] > .MuiStack-root > .MuiBox-root > .MuiTypography-root').click();
                    cy.wait(1000);
                    cy.get('[placeholder="Type to search"]').type('Test 10');
                    cy.wait(1000);
                     cy.contains('p', 'Test 10').should('be.visible').click();
                    
                   cy.wait(1000);

                  // Step 4: Click on Save button
                  cy.contains('button', 'Save').click();
                  cy.wait(10000);
                  cy.get('.mui-1fgd7fz > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained').click();
   
                  cy.contains('Kit is already activate by other customer.').should('be.visible'); // toaster message apper
     
                });
  
              });