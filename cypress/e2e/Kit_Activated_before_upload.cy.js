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
        cy.get('input[type="file"]', { timeout: 10000 }).selectFile('c:\\Users\\Admin\\Downloads\\Kit_activate_before_upload_CSV.csv', { force: true });

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

        cy.visit('https://dev-lb-ui.jinfiniti.com/sample-report/list')

            cy.get('[placeholder="Search"]').click().type('CL6023');

            cy.wait(10000);

            // Click the search icon
            cy.get('[class="ri-search-line"]').click();

            // Wait 20 seconds
            cy.wait(8000);

            // Click the filter button
            // cy.get('.tdesign-filter-clear').click(); //Filter to clear all searching field

                        //  Step:2 = "Select Sample type"

                                //  cy.get('[placeholder="Sample Type"]').click();

                                //   // Select "CL" from the dropdown options
                                //   cy.get('li').contains(/^CL$/).click(); // ^BS$ ensures exact match
                                //   cy.wait(3000);

                                //   // Click the search icon
                                //   cy.get('.ri-search-line').click();

                                //   // Optionally verify the results contain CL
                                //   cy.wait(5000);
                                //   cy.contains('CL').should('be.visible');
                                //   cy.wait(2000);
          
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
                          cy.wait(1000);


                          cy.get(':nth-child(1) > :nth-child(7) > .MuiButtonBase-root').click();
                          cy.wait(2000);
                        cy.get('[style="margin-top: 1rem;"] > .MuiStack-root > .MuiBox-root > .MuiTypography-root').click();
                          cy.wait(1000);
                          cy.get('[placeholder="Type to search"]').type('Elaine Purnell');
                          cy.wait(1000);
                          //  cy.contains('p', 'Elaine Purnell').should('be.visible').click();
                          cy.get('p.MuiTypography-body2').then(($els) => {
                            const target = [...$els].find(el => el.textContent.trim() === 'Elaine Purnell');
                            if (target) {
                              cy.wrap(target).click();
                            } else {
                              cy.wait(5000);
                              throw new Error('Element with text "Elaine Purnell" not found');
                            }
                          });
                          
                          cy.wait(2000);
                          // cy.get('.MuiButtonBase-root > .MuiTypography-root')
                          cy.get('.MuiDialogActions-root > .MuiButton-contained')
                        cy.wait(1000);

                        // Step 4: Click on Save button
                        cy.contains('button', 'Save').click();
                        cy.wait(9000);
                        cy.get('.mui-1fgd7fz > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained').click();
                        cy.wait(3000);
                        
                        cy.contains('Kit is activated successfully.').should('be.visible'); // toaster message apper
          
                      //  cy.get('.dropzone_text', { timeout: 10000 }).click();

                      cy.wait(10000);

      
      
      cy.get(':nth-child(3) > .ts-menu-button > .ts-menu-label').click();
      cy.wait(8000);

      cy.get('[placeholder="Search"]').type('CL6023');
        cy.wait(5000);
        cy.get('[class="ri-search-line"]').click();
        cy.wait(10000);

      cy.get('[class="ri-search-line"]').click();
      cy.wait(8000);
        // cy.get('[class="hover:underline"]').click();
       cy.get('[style="width: 50px;"]').eq(0).click();
        cy.wait(6000);


       cy.get('.PrivateSwitchBase-input').click();
        cy.wait(7000);
      
         });


// Already activated kit in show error message, it's positive case(Case 2 for alredy activated kit)

      // it.only('Uploads a new sample CSV file and verifies the flow', () => {
      //   // 1. Visit upload page
      //   cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv');

      //   // 2. Wait for page to fully load
      //   cy.wait(3000);

      //   // 3. Click the "New Samples" radio or dropzone (optional)
      //   cy.get('.dropzone_text', { timeout: 10000 }).click();

      //   // 4. Select file using force:true since input is hidden
      //   cy.get('input[type="file"]', { timeout: 10000 }).selectFile('c:\\Users\\Admin\\Downloads\\Kit_notactivate_before_upload_CSV.csv', { force: true });

      //   // 5. Wait for upload button to be enabled, then click it
      //   cy.wait(2000);
      // cy.get('.MuiGrid-grid-md-4 > .MuiButtonBase-root').click();

      //   // 6. Wait for page to refresh and check URL
      //   cy.url({ timeout: 10000 }).should('include', '/upload-csv');
                                                                   
      //   // 7. Click "Verify & Upload" button (update selector if needed)
      //   cy.contains('Verify & Upload', { timeout: 10000 }).click();

      //   // 8. Verify redirection to Sample Report page
      //   cy.url({ timeout: 15000 }).should('include', '/sample-report/list');

      //   // 9. Confirm sample report loaded
      //   // cy.contains('Sample Report List').should('be.visible');

      //   cy.visit('https://dev-lb-ui.jinfiniti.com/sample-report/list')

      //       cy.get('[placeholder="Search"]').click().type('BS3359');

      //       cy.wait(10000);

      //       // Click the search icon
      //       cy.get('[class="ri-search-line"]').click();

      //       // Wait 20 seconds
      //       cy.wait(8000);

      //       // Click the filter button
          
          
      //         // Step:3 = "Select Kit Status (Activated)" 
           
      //         cy.get('[placeholder="Kit Status"]').click({ force: true });

      //                     // Step 2: Wait for the dropdown to become visible
      //                     cy.get('ul[role="listbox"]').should('be.visible');

      //                     // Step 3: Select the "Not Activated" option
      //                     cy.get('ul[role="listbox"] li')
      //                       .contains('Activated')
      //                       .click({ force: true });

      //                     // Step 4: Optionally assert that it is selected
      //                     cy.get('[placeholder="Kit Status"]').should('have.value', 'Activated');
      //                     cy.wait(1000);


      //                     cy.get(':nth-child(1) > :nth-child(7) > .MuiButtonBase-root').click();
      //                     cy.wait(2000);
      //                   cy.get('[style="margin-top: 1rem;"] > .MuiStack-root > .MuiBox-root > .MuiTypography-root').click();
      //                     cy.wait(1000);
      //                     cy.get('[placeholder="Type to search"]').type('Elaine Purnell');
      //                     cy.wait(1000);
      //                     //  cy.contains('p', 'Elaine Purnell').should('be.visible').click();
      //                     cy.get('p.MuiTypography-body2').then(($els) => {
      //                       const target = [...$els].find(el => el.textContent.trim() === 'Elaine Purnell');
      //                       if (target) {
      //                         cy.wrap(target).click();
      //                       } else {
      //                         throw new Error('Element with text "Elaine Purnell" not found');
      //                       }
      //                     });
                          
      //                     cy.wait(2000);
      //                     cy.get('.MuiDialogActions-root > .MuiButton-contained').click();
                          
      //                   cy.wait(1000);

      //                // Step 4: Click on Save button
      //                   cy.contains('button', 'Save').click();
      //                   cy.wait(12000);
      //                   // cy.get('.mui-1fgd7fz > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained').click();
                        
      //                  cy.get('.mui-1fgd7fz > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained').click();
      //                   cy.wait(5000);

      //                   cy.contains('You have already activated the kit.').should('be.visible'); // toaster message apper
          
      //                 //  cy.get('.dropzone_text', { timeout: 10000 }).click();

      //                 cy.wait(9000);
    
                
      //               });

             it('Uploads a new sample CSV file and verifies the flow', () => {
                // Visit upload page
                cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv');
                cy.wait(3000);

                // Click dropzone
                cy.get('.dropzone_text', { timeout: 10000 }).click();

                // Upload CSV file
                cy.get('input[type="file"]', { timeout: 10000 })
                  .selectFile('c:\\Users\\Admin\\Downloads\\Kit_notactivate_before_upload_CSV.csv', { force: true });

                // Click upload button
                cy.wait(2000);
                cy.get('.MuiGrid-grid-md-4 > .MuiButtonBase-root').click();

                // Check URL
                cy.url({ timeout: 10000 }).should('include', '/upload-csv');

                // Verify & Upload
                cy.contains('Verify & Upload', { timeout: 10000 }).click();

                // Confirm redirection
                cy.url({ timeout: 15000 }).should('include', '/sample-report/list');

                // Search for sample
                cy.get('[placeholder="Search"]').click().type('BS3359');
                cy.wait(1000);
                cy.get('.ri-search-line').click();
                cy.wait(3000);

                // Select kit status: Activated
                cy.get('[placeholder="Kit Status"]').click({ force: true });
                cy.get('ul[role="listbox"]').should('be.visible');
                cy.contains('li', 'Activated').click({ force: true });
                cy.get('[placeholder="Kit Status"]').should('have.value', 'Activated');

                // Click action button
                cy.get(':nth-child(1) > :nth-child(7) > .MuiButtonBase-root').click();
                cy.wait(1000);

                // Open patient selection modal
                cy.get('[style="margin-top: 1rem;"] .MuiTypography-root').click();
                cy.wait(500);

                // Search patient
                cy.get('[placeholder="Type to search"]').type('Elaine Purnell');
                cy.wait(500);
                cy.contains('p.MuiTypography-body2', 'Elaine Purnell').click({ force: true });

                cy.wait(500);

                // Click Save button only after it becomes visible & clickable
                cy.contains('button', 'Save').should('be.visible').should('not.be.disabled').click({ force: true });

                // Wait for "Confirm Activation" modal
                cy.contains('button', 'Yes', { timeout: 10000 })
                  .should('be.visible')
                  .click({ force: true });

                // Verify toaster message
                cy.contains('Kit is activated successfully.', { timeout: 10000 }).should('be.visible');

                cy.wait(2000);
              });

    
  
    
    });



      