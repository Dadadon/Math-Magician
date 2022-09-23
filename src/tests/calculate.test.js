import calculate from '../components/logic/calculate';

  test('Test the calculator logic', () => {
    const data = {
      total: 2,
      next: 4,
      operation: null,
    };
    const value = { total: 4, next: null, operation: '+' };
    expect(calculate(data, '+')).toEqual(value);
});
  
