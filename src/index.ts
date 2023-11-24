export interface Display {
  show: (message: string) => void;
}

export function formatSum(operands: number[], result: number): string {
  const operandsString = operands.join(' + ');

  return `${operandsString} = ${result}`;
}

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

export function add(inputString: string, display?: Display): number {
  const { delimiter, numbersString } = parseInputString(inputString);

  const numbersAsString = numbersString.split(delimiter);
  const numbers = numbersAsString.map(Number);

  const thereAreNegativeNumbers = numbers.some((number) => number < 0);
  if (thereAreNegativeNumbers) {
    throw new Error('Negative numbers are not allowed');
  }

  const sum = numbers.reduce((sum, number) => sum + number, 0);

  const formattedSum = formatSum(numbers, sum);

  display?.show(formattedSum);

  return sum;
}
