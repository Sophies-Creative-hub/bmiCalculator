import { calculateBMI } from './frontend/main';

test('Berechnung des BMI', () => {
  expect(calculateBMI(70, 175)).toBe(24.49);
  expect(calculateBMI(85, 190)).toBe(23.55);
  expect(calculateBMI(65, 160)).toBe(25.39);
});
