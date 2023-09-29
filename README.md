# TDD practice

This project is a TDD practice that consists in implementing a function that
sums the numbers in a string.

It exports a function `add` that takes a string of numbers separated by a
delimiter character and returns the sum of them. For instance, evaluating
the string `'1,2,3'` should return `6`.

The default delimiter characters are `,` and `\n`, but you can define your own
delimiter if the input string begins like this `'//<delimiter>\n<numbers>'`.
For instance, evaluating the string `'//;\n1;2;3'` should return `6`.

## Scripts

- `yarn build`
- `yarn test`
- `yarn format`
- `yarn build`
- `yarn clean`
