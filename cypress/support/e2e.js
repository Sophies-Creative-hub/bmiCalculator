beforeEach(() => {
    cy.log('I run before every test in every spec file')
    cy.visit('index.html'); // Stelle sicher, dass deine HTML-Datei korrekt verlinkt ist
})