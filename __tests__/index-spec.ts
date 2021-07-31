import * as index from '../src/index';

test('Should have simdjson available', () => {
  expect(index.simdjson).toBeTruthy();
});
