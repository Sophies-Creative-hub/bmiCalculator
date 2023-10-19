import { calculateBMI } from '../server';
import { app, server } from '../server';


test('Berechnung des BMI', () => {
  expect(calculateBMI(70, 175)).toBeCloseTo(22.86, 2);
  expect(calculateBMI(85, 190)).toBeCloseTo(23.55, 2);
  expect(calculateBMI(65, 160)).toBeCloseTo(25.39, 2);
});


afterAll((done) => {
    app.close(() => {
      done();
    });
  });