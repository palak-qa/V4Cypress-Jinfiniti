// describe('Jinfiniti V4 - Samples Search and Form Update', () => {
//   const baseUrl = 'https://dev-lb-ui.jinfiniti.com/';

//   beforeEach(() => {
//     // Custom login command (should be defined in commands.js)
//     cy.login('V4Jinfiniti', 'V4jin@12');
//     cy.wait(10000);
    
//     cy.visit('https://dev-lb-ui.jinfiniti.com/sample/list')

//   });
//         // Samples module in search sample ID
//         it('TC-01 Search field', () => {
      
//         // Searching Sample Type
//         cy.get('[placeholder="Search"]').type('BS1682');
//         cy.wait(5000);
//         cy.get('[class="ri-search-line"]').click();
//         cy.wait(10000);

//           //Filter buttton
//             cy.get('[class="tdesign-filter-clear"]').click();

//         // // Searching Patient/ Provider name
//         // cy.get('[placeholder="Search"]').type('Mitch Bettis');
//         // cy.wait(5000);
//         // cy.get('[class="ri-search-line"]').click();
//         // cy.wait(10000);
      
//         //     //Filter buttton
//         //     cy.get('[class="tdesign-filter-clear"]').click();
    
//          });

        //  describe('POST request for Kit Activation using Cypress', function () {
        //     it('Test case for Kit Activation', function () {

          
        //       cy.request({
        //         method: 'POST',
        //         url: 'https://dev-lb.jinfiniti.com/api/v1/samples/wp/kit-activate/',
        //         headers: {
        //           'x-api-key': 'umjmkkqqsfbeofyxdqrvdfjhqdunpbgfjmnjukjylsfse',
        //           'Content-Type': 'application/json'
        //         },
        //         body: {
        //           "public_key": "012345678910",
        //           "kit_code": "BS1682-31b7-ddd9",
        //           "first_name": "Name",
        //           "last_name": "Update",
        //           "email": "nameupdate@yopmail.com"
                
        //         }
        //       }).then((response) => {

        //         cy.log(response);
        //         expect(response.status).to.eq(409);
        //         expect(response.body).to.have.property('message', 'You have already activated the kit.');
        //       });
        //     })  
        //   });

        
        
        //activated Kit show popup message
      

describe('POST request for Kit Activation using Cypress', function () {
  it('Test case for activated Kit (expecting 200)', function () {


    cy.request({
      method: 'POST',
      url: 'https://dev-lb.jinfiniti.com/api/v1/samples/wp/kit-activate/',
      failOnStatusCode: false,
      headers: {
        'x-api-key': 'umjmkkqqsfbeofyxdqrvdfjhqdunpbgfjmnjukjylsfse',
        'Content-Type': 'application/json'
      },

    
      body: {
        "public_key": "6f287b76-f5ab-431e-a889-b35c4b96de3c",
        "kit_code": "CL3018-124509", 
        "first_name": "Patient",
        "last_name": "19",
        "email": "rtm3363379003@yopmail.com"
      }
    }).then((response) => {
      console.log("Full Response:", response);
      cy.log(JSON.stringify(response.body));

      // ✅ Expected success
      // expect(response.status).to.eq(200);
      // expect(response.body.data.message).to.eq('Kit is activated successfully.');
    });
  });
});


  
        // already activated Kit show error message
        describe('POST request for Kit Activation using Cypress', function () {
  it('Test case for already activated Kit (expecting 409)', function () {

    cy.request({
      method: 'POST',
      url: 'https://dev-lb.jinfiniti.com/api/v1/samples/wp/kit-activate/',
      failOnStatusCode: false, // prevent Cypress from failing on non-2xx status
      headers: {
        'x-api-key': 'umjmkkqqsfbeofyxdqrvdfjhqdunpbgfjmnjukjylsfse',
        'Content-Type': 'application/json'
      },
      body: {
        "public_key": "012345678910",
        "kit_code": "BS1682-31b7-ddd9",
        "first_name": "Name",
        "last_name": "Update",
        "email": "nameupdate@yopmail.com"
      }
    }).then((response) => {
      // Log the full response
      console.log("Full Response:", response);
      cy.log(JSON.stringify(response.body));

      // Assert the expected 409 status and error message
      expect(response.status).to.eq(409);
      expect(response.body.error.message).to.eq('You have already activated the kit.');
    });
  });
});
