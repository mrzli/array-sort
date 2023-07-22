# Array Sort

This library contains a simple function for sorting arrays, and some comparison functions (or comparison function creators).

## Installation

```bash
npm install --save @gmjs/array-sort
```

## Usage

`sortArray` will create a sorted copy of an array, leaving the original array unchanged.

```ts
import { sortArray } from '@gmjs/array-sort';

const array = [3, 1, 2];
const sortedArray = sortArray(arr, (i1: mumber, i2: number) => i1 - i2);
console.log(sortedArray);
// [1, 2, 3]
```

```ts
import { sortArray, compareNumberAsc } from '@gmjs/array-sort';

const array = [3, 1, 2];
const sortedArray = sortArray(arr, compareNumberAsc());
console.log(sortedArray);
// [1, 2, 3]
```

## API

### Sort Function

#### `sortArray`

This function returns a sorted copy of the array, leaving the original array unchanged.

The first parameter is the array to be sorted.

The second parameter is a comparison function. The comparison function should return a negative number if the first parameter is less than the second parameter, a positive number if the first parameter is greater than the second parameter, and zero if the two parameters are equal.

You can pass in any function that satisfies this requirement, or you can use one of the comparison functions (comparison function creators) provided by this library.

```ts
const array = [3, 1, 2];
const sortedArray = sortArray(arr, (i1: mumber, i2: number) => i1 - i2);
console.log(array);
// [3, 1, 2]
console.log(sortedArray);
// [1, 2, 3]
```

### Comparison Functions

#### `compareNumberAsc`

This comparer will allow you to sort an array of numbers in ascending order.

```ts
const array = [3, 1, 2];
const sortedArray = sortArray(arr, compareNumberAsc());
console.log(sortedArray);
// [1, 2, 3]
```

#### `compareNumberDesc`

This comparer will allow you to sort an array of numbers in descending order.

```ts
const array = [3, 1, 2];
const sortedArray = sortArray(arr, compareNumberDesc());
console.log(sortedArray);
// [3, 2, 1]
```

#### `compareStringAsc`

This comparer will allow you to sort an array of strings in ascending order.

```ts
const array = ['c', 'a', 'b'];
const sortedArray = sortArray(arr, compareStringAsc());
console.log(sortedArray);
// ['a', 'b', 'c']
```

##### `CompareStringOptions`

The `compareStringAsc` function takes an optional parameter of type `CompareStringOptions`.

```ts
export type CompareStringSensivity = 'base' | 'accent' | 'case' | 'variant';
export type CompareStringCaseFirst = 'upper' | 'lower' | 'none';

export interface CompareStringOptions {
  readonly locale?: string;
  readonly sensitivity?: CompareStringSensivity;
  readonly caseFirst?: CompareStringCaseFirst;
}
```

If any option is not specified, by default the following will be used:

```ts
{
  locale: 'en',
  sensitivity: 'case',
  caseFirst: 'upper',
}
```

`sensitivity` option defines case and accent sensitivity of comparison. Check out [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) link for more information.

`caseFirst` option defines whether upper case or lower case letters should be sorted first. Check out [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) link for more information. `none` option is converted to `undefined`.

#### `compareStringDesc`

This comparer will allow you to sort an array of strings in descending order.

```ts
const array = ['c', 'a', 'b'];
const sortedArray = sortArray(arr, compareStringDesc());
console.log(sortedArray);
// ['c', 'b', 'a']
```

It uses the exact same comparison options as `compareStringAsc`, see [here](#comparestringoptions).
