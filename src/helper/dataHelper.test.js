import { concatName } from './dataHelper';

it('should concat a first and last name to a full name', () => {
  expect(concatName("Alex", "Rolfe")).toBe("Alex Rolfe");
})
