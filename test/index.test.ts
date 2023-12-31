import { describe, it, expect, jest } from '@jest/globals';
import { add, parseInputString } from '../src/index';

describe('add', () => {
  describe('parsing input string', () => {
    it('should return default delimiter if no custom delimiter is specified', () => {
      const { delimiter } = parseInputString('1,2');
      expect(delimiter).toEqual(/,|\n/);
    });

    it('should return custom delimiter if specified', () => {
      const { delimiter } = parseInputString('//;\n1;2');
      expect(delimiter).toEqual(';');
    });

    it('should return numbers string if no custom delimiter is specified', () => {
      const { numbersString } = parseInputString('1,2');
      expect(numbersString).toEqual('1,2');
    });

    it('should return numbers string if custom delimiter is specified', () => {
      const { numbersString } = parseInputString('//;\n1;2');
      expect(numbersString).toEqual('1;2');
    });

    it('should return empty string if no numbers are specified and no custom delimiter is specified', () => {
      const { numbersString } = parseInputString('');
      expect(numbersString).toEqual('');
    });

    it('should return empty string if no numbers are specified and custom delimiter is specified', () => {
      const { numbersString } = parseInputString('//;\n');
      expect(numbersString).toEqual('');
    });

    it('should return empty numbers string if custom delimiter is specified but no new line', () => {
      const { numbersString } = parseInputString('//;');
      expect(numbersString).toEqual('');
    });
  });

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

  describe('Handling negative numbers', () => {
    it.each([['1,-2'], ['1,-2,-3']])(
      'should throw error if input string has negative numbers: %s',
      (inputString: string) => {
        expect(() => add(inputString)).toThrow(Error);
      },
    );
  });

  describe('Displaying input numbers and result', () => {
    it('should display formatted input numbers and result', () => {
      const mockDisplay = {
        show: jest.fn(),
      };

      add('1,2', mockDisplay);

      expect(mockDisplay.show).toHaveBeenCalledWith('1 + 2 = 3');
    });
  });
});
