import { describe, it, expect } from '@jest/globals';
import { add } from '../src/index';

describe('add', () => {
  it('should return 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

  it('should return the same number for string with single number', () => {
    expect(add('2')).toBe(2);
  });
});
