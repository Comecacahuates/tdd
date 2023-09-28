export function parseInputString(inputString: string) {
  let delimiter: string | RegExp = /,|\n/;
  let numbersString = inputString;

  if (inputString.startsWith('//')) {
    const lines = inputString.split('\n');
    delimiter = lines[0]!.substring(2);
    numbersString = lines[1]!;
  }

  return { delimiter, numbersString };
}

export function add(inputString: string): number {
  let result: number;

  const { delimiter, numbersString } = parseInputString(inputString);

  if (numbersString === '') {
    result = 0;
  } else {
    const numbers = numbersString.split(delimiter).map(Number);
    result = numbers.reduce((sum, number) => sum + number);
  }

  return result;
}
