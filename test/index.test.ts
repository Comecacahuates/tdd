import { describe, it, expect } from '@jest/globals';
import { add } from '../src/index';

describe('add', () => {
  it('should return 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

  it('should return the same number for string with single number', () => {
    expect(add('2')).toBe(2);
  });

  it('should return the sum of two numbers', () => {
    expect(add('2,3')).toBe(5);
  });

  it('should handle new line as delimiter', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  it('should handle custom delimiter', () => {
    expect(add('//;\n1;2')).toBe(3);
  });
});
