export function parseInputString(inputString: string) {
  let delimiter: string | RegExp = /,|\n/;
  let numbersString = inputString;
  const hasCustomDelimiter = inputString.startsWith('//');

  if (hasCustomDelimiter) {
    const inputStringLines = inputString.split('\n');
    const [delimiterLine, numbersStringLine] = inputStringLines;

    delimiter = delimiterLine!.replace('//', '');
    numbersString = numbersStringLine!;
  }

  return { delimiter, numbersString };
}

export function add(inputString: string): number {
  let sum = 0;
  const { delimiter, numbersString } = parseInputString(inputString);

  const numbersAsString = numbersString.split(delimiter);
  const numbers = numbersAsString.map(Number);
  sum = numbers.reduce((sum, number) => sum + number, 0);

  return sum;
}
