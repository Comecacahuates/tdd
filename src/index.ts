export function add(inputString: string): number {
  let result: number;

  let numbersString = inputString;
  let delimiter: string | RegExp = /,|\n/;

  if (inputString.startsWith('//')) {
    const lines = inputString.split('\n');
    delimiter = lines[0]!.substring(2);
    numbersString = lines[1]!;
  }

  if (numbersString === '') {
    result = 0;
  } else {
    const numbers = numbersString.split(delimiter).map(Number);
    result = numbers.reduce((sum, number) => sum + number);
  }

  return result;
}
