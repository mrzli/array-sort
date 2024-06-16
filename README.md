# Array Sort

This library contains a simple function for sorting arrays.

Previously, this library contained more than this, but at the moment, this is only a wrapper around the `Array.prototype.sort` method.

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
import { sortArray } from '@gmjs/array-sort';
import { compareNumberDesc } from '@gmjs/comparers';

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
