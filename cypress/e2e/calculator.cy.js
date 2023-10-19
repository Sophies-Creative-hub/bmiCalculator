describe('BMI Rechner', () => {
    it('zeigt den Titel "BMI Rechner" an', () => {
      cy.contains('BMI Rechner').should('be.visible');
    });
});

describe('BMI Rechner', () => {
  it('berechnet den BMI korrekt und zeigt ihn an', () => {
    // Eingabe: Simuliere die Eingabe von Gewicht und Größe
    cy.get('#weight').type('70'); // Eingabe für Gewicht
    cy.get('#height').type('175'); // Eingabe für Größe

    // Berechnung: Klicken auf die Schaltfläche zur Berechnung
    cy.get('#calculate-button').click();

    // Warte auf das Ergebnis und Überprüfung
    cy.get('#result').should('be.visible');

    // Überprüfe, ob der angezeigte BMI-Wert korrekt ist (angepasst an deine Berechnungen)
    cy.get('#result').should('contain', 'BMI: 22.86');
  });
});