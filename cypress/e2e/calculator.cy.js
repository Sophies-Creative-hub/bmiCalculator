describe('BMI Rechner', () => {
    it('zeigt den Titel "BMI Rechner" an', () => {
      cy.contains('BMI Rechner').should('be.visible');
    });
});