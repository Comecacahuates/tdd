export function add(numbersString: string): number {
  let result: number;

  if (numbersString === '') {
    result = 0;
  } else {
    const numbers = numbersString.split(',').map(Number);
    result = numbers.reduce((sum, number) => sum + number);
  }

  return result;
}
