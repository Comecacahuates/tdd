export function add(numbers: string): number {
  let result: number;

  if (numbers === '') {
    result = 0;
  } else {
    result = Number(numbers);
  }

  return result;
}
