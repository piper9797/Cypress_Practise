
describe("UI Login Test",()=>{

beforeEach(()=>{
    cy.visit("http://localhost:3000/")
});

it("should load the login page correctly",()=>{

cy.get("[data-cy=login]").should("be.visible");
})

it("should not login when username is not provided",()=>{
    cy.get("[data-cy=password]").type("123321");
    cy.get("[data-cy=signInBtn]").click();
    cy.get("[data-cy=login]").should("be.visible");
})

it("should not login when password is not provided",()=>{
    cy.get("[data-cy=email]").type("piper@gmail.com");
    cy.get("[data-cy=signInBtn]").click();
    cy.get("[data-cy=login]").should("be.visible");
})

it("should login to the homepage with valid credis",()=>{
    cy.get("[data-cy=email]").type("piper@gmail.com");
    cy.get("[data-cy=email]").should("have.value","piper@gmail.com");
    cy.get("[data-cy=password]").type("123321");
    cy.get("[data-cy=signInBtn]").click();
    cy.get("[data-cy=logout]").should("be.visible");
})

it("should log out successfully",()=>{
    cy.get("[data-cy=email]").type("piper@gmail.com");
    cy.get("[data-cy=email]").should("have.value","piper@gmail.com");
    cy.get("[data-cy=password]").type("123321");
    cy.get("[data-cy=signInBtn]").click();
    cy.get("[data-cy=logout]").should("be.visible");
    cy.get("[data-cy=logout]").should("be.visible");
})
})