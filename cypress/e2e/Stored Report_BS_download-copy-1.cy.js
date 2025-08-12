describe('Sample Report - Download Stored Reports for BS Type', () => {
  const baseUrl = 'https://dev-lb-ui.jinfiniti.com/';

  beforeEach(() => {
    // Login and navigate to the sample report page
    cy.login('test', 'test12'); // Assumes a custom login command is defined
    cy.wait(10000);
    cy.visit(`${baseUrl}sample-report/list`);
  });

  it('Filters CL samples and downloads stored reports for 15 samples', () => {
    // Step 1: Open sample type dropdown and select 'CL'
    cy.get('[placeholder="Sample Type"]').click(); // Adjust selector if needed
    cy.contains('BS').click();

      cy.get('[aria-label="rows per page"]').click();
                      // Click the pagination dropdown (use button with label 10, 50, etc.)
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
                      cy.get('div').contains(/^10$|^50$|^100$/).click({ force: true }); // fallback to number match

                      // Click the "50" option from dropdown
                      cy.contains('li','25').click({ force: true });

                      // Optionally confirm
                      cy.get('.MuiTablePagination-displayedRows').should('contain','1–25');
                      cy.wait(10000);
                    
                      // Click the bulk download or real-time report button (adjust selector/text as needed)
    // cy.contains('Real-Time Report').click({ force: true });

    // // Optionally, confirm download started (e.g. success toast or alert appears)
    // cy.contains('Download started').should('be.visible');
  // cy.get(':nth-child(1) > :nth-child(11) > .text-blue-500 > .ri-download-2-line').click();
  cy.get(':nth-child(1) > :nth-child(14) > .text-blue-500 > .ri-download-2-line').click();
  cy.get(':nth-child(2) > :nth-child(14) > .text-blue-500 > .ri-download-2-line').click();
  cy.get(':nth-child(3) > :nth-child(14) > .text-blue-500 > .ri-download-2-line').click();
  cy.get(':nth-child(4) > :nth-child(14) > .text-blue-500 > .ri-download-2-line').click();
  cy.get(':nth-child(5) > :nth-child(14) > .text-blue-500 > .ri-download-2-line').click();
  cy.get(':nth-child(6) > :nth-child(14) > .text-blue-500 > .ri-download-2-line').click();
                      
   });
  
});
       