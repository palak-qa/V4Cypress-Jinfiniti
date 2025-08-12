

// This Case is Use in Open latest top (first) CSV batch || Show Selected CSV samples 

describe('Sample Report - Download Stored Reports for CL Type', () => {
  const baseUrl = 'https://dev-lb-ui.jinfiniti.com/';

  // manual log statement
    // cy.task('logToFile', 'Login || Select CSV Batch || Show first(Latest) CSV');

  beforeEach(() => {
    // Login and navigate to the sample report page
    cy.login('test', 'test12'); // Assumes a custom login command is defined
    cy.wait(10000);
    cy.visit(`${baseUrl}sample-report/list`);
  });

  it('Selects the first CSV Batch from the dropdown', () => {
  // Wait for the page and dropdown to load
  cy.wait(5000);

  // Step 1: Click the CSV Batch dropdown
  cy.get(':nth-child(5) > .MuiStack-root > .MuiBox-root > .MuiTypography-root') // Adjust this selector if needed
    .click({ force: true });

    cy.wait(5000);
   // Step 2: Wait for the dropdown list to appear and select the first option
  // cy.get('ul[role="listbox"] li') // MUI-style dropdown
  cy.get('.infinite-scroll-component > :nth-child(1) > .MuiTypography-root')
    .first()
    .click({ force: true });

  // Optional: Assert that selection was successful
  // cy.get('[placeholder="CSV Batch"]').should('not.have.text', 'BS #REPORT_queue_test.csv'); // adjust based on your UI
});

   });
