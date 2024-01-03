// cypress/integration/bmiCalculator.spec.js

describe('BMI Rechner Tests', () => {
  
  it('wird erfolgreich geladen', () => {
    cy.visit('/index.html');
  });

  it('zeigt den Titel "BMI Rechner" an', () => {
    cy.contains('BMI Rechner').should('be.visible');
  });

  it('soll das Klicken auf Eingabefelder ermöglichen', () => {
    cy.get('#weight').click().should('have.focus');
    cy.get('#height').click().should('have.focus');
  });

  it('soll Texteingabe ermöglichen', () => {
    cy.get('#weight').type('70').should('have.value', '70');
    cy.get('#height').type('170').should('have.value', '170');
  });

  it('soll klickbar sein', () => {
    cy.get('#calculateButton').click();
    cy.get('#result').should('exist'); // Überprüfen Sie, ob das Ergebnisfeld nach dem Klicken auf den Button existiert
  });

  it('soll leere Eingaben behandeln und eine Fehlermeldung anzeigen', () => {
    cy.get('#calculateButton').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Bitte geben Sie Gewicht und Größe ein.');
    });
  });

  it('soll BMI korrekt berechnen und anzeigen', () => {
    cy.get('#weight').type('70');
    cy.get('#height').type('170');
    cy.get('#calculateButton').click();

    // Erwarteten BMI berechnen
    const expectedBMI = Math.round(70 / ((170 / 100) * (170 / 100)));

    // Überprüfen, ob das angezeigte Ergebnis den erwarteten BMI enthält
    cy.get('#result').should('contain', `BMI: ${expectedBMI}`);
  });
});
