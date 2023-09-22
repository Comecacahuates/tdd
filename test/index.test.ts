import { describe, it, expect } from '@jest/globals';
import { add } from '../src/index';

describe('add', () => {
  it('should return 0 for empty string', () => {
    expect(add('')).toBe(0);
  });
});
