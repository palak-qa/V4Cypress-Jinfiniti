
describe('Jinfiniti V4 - Patient Search and Form Update', () => {
  const baseUrl = 'https://dev-lb-ui.jinfiniti.com/';

  beforeEach(() => {
    // Custom login command (should be defined in commands.js)
    cy.login('V4Jinfiniti', 'V4jin@12');
    cy.wait(10000);
    

     cy.visit('https://dev-lb-ui.jinfiniti.com/patient/list')

  });
       
    // Search field in searching Email/patients name
   it('TC-01 Search field', () => {
    
        cy.get('[href="/patient/list"]').eq(0).click();
      
            // it('TC-01: Search patient and update Ethnicity and Public Key fields', () => {
            // Step 1: Go to Patient List
          cy.get('[href="/patient/list"]').eq(0).click();

              // Step 2: Search by patient email
          cy.get('[placeholder="Search"]').type('mbettis@abpg.com');
          cy.wait(2000);
          cy.get('[type="button"]').eq(1).click();
          cy.wait(20000);
          cy.get('[class="tdesign-filter-clear"]').click();

              // Step 3: Wait for results k
          cy.wait(10000);

      });

      it('TC-02 Ethnicity', () => {

              // Step 4: Click on the first patient's first name or row to open the edit form
            cy.get('table tbody tr').first().click();

              // Step 5: Select "White" as Ethnicity
              
            cy.get('input[placeholder="Ethnicity"]').click().type('White');
                // Wait for the dropdown option to appear and click it
            cy.get('li.MuiAutocomplete-option').contains('White').click();

                // cy.get('select[name="pageSize"]').select('100');
            cy.get('[role="combobox"]').eq(3).click();
            cy.wait(10000);
                  // cy.get('[tabindex="-1"]').eq(0).click();
            cy.get('[class="MuiList-root MuiList-padding MuiMenu-list mui-r8u8y9"]').select('5').click();

                  //cy.get(class="MuiList-root MuiList-padding MuiMenu-list mui-r8u8y9").select('[data-value="5"]').click();

                  // it(`should set page size to ${5}`, () => {
            cy.get('button[aria-haspopup="listbox"]').first().click({ force: true });

            cy.get('ul[role="listbox"]').contains('li', 5).click({ force: true });

                      cy.get('[aria-label="Go to next page"]').click();

     
      });

      //  it('TC-01 Has Public Key', () => {
          //  Step 6: Select "Yes" for Has Public Key
            // cy.get('select[name="hasPublicKey"]').select('Yes');

                        // cy.get('table tbody tr').first().click();

                        // cy.get('input[placeholder="Has Public Key"]').click().type('Yes');

                        //  cy.get('li.MuiAutocomplete-option').contains('Yes').click();


          it('Selects Has Public Key as Yes and No', () => {
    // Open dropdown
    cy.get('table tbody tr')
      
          cy.wait(5000)
            .contains('list')
      .parents('[role="button"]')
      .click({ force: true });

    // Select 'Yes'
    cy.get('li').contains('Yes').click({ force: true });
    cy.wait(2000);

    // Again open dropdown
    cy.get('label')
      .contains('Has Public Key')
      .parents('[role="button"]')
      .click({ force: true });

    // Select 'No'
    cy.get('li').contains('No').click({ force: true });
    cy.wait(2000);


  });

   // Row Per Page = 50
  

it('Sets rows per page to 50', () => {
  // Step 1: Wait for table to load
  cy.wait(3000);

  // Step 2: Click the dropdown trigger (this is usually the input that shows current rows per page like "10", "25", etc.)
  cy.get('input[role="combobox"]').first().click({ force: true });

  // Step 3: Wait for dropdown to open
  cy.get('ul[role="listbox"] li', { timeout: 5000 }).should('be.visible');

  // Step 4: Click on the "50" option
  cy.get('ul[role="listbox"] li').contains(/^50$/).click({ force: true });

  // Step 5: Optional - Verify the result in pagination summary
  cy.get('.MuiTablePagination-displayedRows', { timeout: 9000 }).should('contain', '1–50');
});

    
  
  });
 



