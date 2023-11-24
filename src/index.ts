export function parseInputString(inputString: string): {
  delimiter: string | RegExp;
  numbersString: string;
} {
  let delimiter: string | RegExp = /,|\n/;
  let numbersString = inputString;
  const hasCustomDelimiter = inputString.startsWith('//');

  if (hasCustomDelimiter) {
    const inputStringLines = inputString.split('\n');
    const [delimiterLine, numbersStringLine] = inputStringLines;

    delimiter = delimiterLine!.replace('//', '');
    numbersString = numbersStringLine || '';
  }

  return { delimiter, numbersString };
}

export function add(inputString: string): number {
  const { delimiter, numbersString } = parseInputString(inputString);

  const numbersAsString = numbersString.split(delimiter);
  const numbers = numbersAsString.map(Number);

  const thereAreNegativeNumbers = numbers.some((number) => number < 0);
  if (thereAreNegativeNumbers) {
    throw new Error('Negative numbers are not allowed');
  }

  const sum = numbers.reduce((sum, number) => sum + number, 0);

  return sum;
}
