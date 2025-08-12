

describe('Jinfiniti V4 - Samples Search and Form Update', () => {
  const baseUrl = 'https://dev-lb-ui.jinfiniti.com/';

  beforeEach(() => {
    // Custom login command (should be defined in commands.js)
    cy.login('V4Jinfiniti', 'V4jin@12');
    cy.wait(10000);
    
    cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv')
    cy.wait(5000);

  });

      // CL
      // CL CSV Positive case to upload quick result csv
      it('Uploads updated sample result for new samples', () => {
      // 1. Visit the page
      cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv');

      // 2. Select second radio button
      cy.get('input[type="radio"]', { timeout: 5000 }).eq(2).check({ force: true });

      // 3. Click the "Choose File" area
      // cy.get('.dropzone_text', { timeout: 5000 }).click();
      cy.get('.ag-row-first > .ag-column-first').type('CL4961')
      cy.get('.ag-row-focus > [col-id="ALP"]').type('50')
      cy.get('.ag-row-focus > [col-id="CK"]').type('20')
      cy.get('.ag-row-focus > [col-id="Hcy"]').type('100')
      cy.get('.mui-1xeiufl > .MuiButtonBase-root').click();

      // cy.get('.tabulator-table > :nth-child(1) > .tabulator-frozen').type('CL4961')
        
    });

    // CL Negative case
    it('Uploads updated sample result for new samples', () => {
      // 1. Visit the page
      cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv');

      // 2. Select second radio button
      cy.get('input[type="radio"]', { timeout: 5000 }).eq(2).check({ force: true });

      // 3. Click the "Choose File" area
      // cy.get('.dropzone_text', { timeout: 5000 }).click();
      cy.get('.ag-row-first > .ag-column-first').type('CL4961')
      cy.get('.ag-row-focus > [col-id="ALP"]').type(' ')

      // 4. Verify one or more expected error messages
      cy.get('.mui-1xeiufl > .MuiButtonBase-root').click();
      cy.contains('There must be at least one result for sample CL4961.').should('be.visible');

    });

    // BS
    // BS Positive Case
     it('Uploads updated sample result for new samples', () => {
      // 1. Visit the page
      cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv');

      // 2. Select second radio button
      cy.get('input[type="radio"]', { timeout: 5000 }).eq(2).check({ force: true });

      // 3. Click the "Choose File" area
      // cy.get('.dropzone_text', { timeout: 5000 }).click();
      cy.get('.ag-row-first > .ag-column-first').type('BS1682')
      cy.get('.ag-row-focus > [col-id="ic-nad"]').type('50')
      cy.get('.mui-1xeiufl > .MuiButtonBase-root').click();
        
    });

    // BS
    // BS Negative Case (error message apper it's call)
     it('Uploads updated sample result for new samples', () => {
      // 1. Visit the page
      cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv');

      // 2. Select second radio button
      cy.get('input[type="radio"]', { timeout: 5000 }).eq(2).check({ force: true });

      // 3. Click the "Choose File" area
      // cy.get('.dropzone_text', { timeout: 5000 }).click();
      cy.get('.ag-row-first > .ag-column-first').type('BS1682')
      cy.get('.ag-row-focus > [col-id="ic-nad"]').type(' ')
      
      cy.get('.mui-1xeiufl > .MuiButtonBase-root').click();
      cy.contains("The value for 'ic-nad' must not be blank for sample BS1682.").should('be.visible');
    });

    // BS
    // BS Negative Case
     it('Uploads updated sample result for new samples', () => {
      // 1. Visit the page
      cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv');

      // 2. Select second radio button
      cy.get('input[type="radio"]', { timeout: 5000 }).eq(2).check({ force: true });

      // 3. Click the "Choose File" area
      // cy.get('.dropzone_text', { timeout: 5000 }).click();
      cy.get('.ag-row-first > .ag-column-first').type('BS1682')
      cy.get('.ag-row-focus > [col-id="VitD"]').type(' ')
      cy.wait(5000);
      cy.get('.ag-row-focus > [col-id="HDL"]').type('50')


      
      cy.get('.mui-1xeiufl > .MuiButtonBase-root').click();
      cy.contains("The value for 'ic-nad' must not be blank for sample BS1682.").should('be.visible');
      cy.contains("You can only add a value for 'ic-nad' for sample BS1682.").should('be.visible');

    });

    // BS Negative Case
     it('Uploads updated sample result for new samples', () => {
      // 1. Visit the page
      cy.visit('https://dev-lb-ui.jinfiniti.com/upload-csv');

      // 2. Select second radio button
      cy.get('input[type="radio"]', { timeout: 5000 }).eq(2).check({ force: true });

      // 3. Click the "Choose File" area
      // cy.get('.dropzone_text', { timeout: 5000 }).click();
      cy.get('.ag-row-first > .ag-column-first').type('BS1682')
      cy.get('.ag-row-focus > [col-id="ic-nad"]').type('120')
      cy.wait(5000);
      cy.get('.ag-row-focus > [col-id="HDL"]').type('50')


      
      cy.get('.mui-1xeiufl > .MuiButtonBase-root').click();

      cy.contains("You can only add a value for 'ic-nad' for sample BS1682.").should('be.visible');
      // cy.contains("You can only add a value for 'ic-nad' for sample BS1682.").should('be.visible');

    });


    });

