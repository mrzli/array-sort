import { describe, expect, it } from '@jest/globals';
import { sortArray } from './array-sort';
import { CompareFn } from '../types';

describe('array-sort', () => {
  describe('sortArray()', () => {
    describe('number', () => {
      interface Example {
        readonly input: {
          readonly array: readonly number[];
          compareFn: CompareFn<number>;
        };
        readonly expected: {
          updated: readonly number[];
          original: readonly number[];
        };
      }

      const COMPARE_FN_NUMBER_ASC = (item1: number, item2: number): number =>
        item1 - item2;

      const COMPARE_FN_NUMBER_DESC = (item1: number, item2: number): number =>
        item2 - item1;

      const EXAMPLES: readonly Example[] = [
        {
          input: {
            array: [],
            compareFn: COMPARE_FN_NUMBER_ASC,
          },
          expected: {
            updated: [],
            original: [],
          },
        },
        {
          input: {
            array: [1],
            compareFn: COMPARE_FN_NUMBER_ASC,
          },
          expected: {
            updated: [1],
            original: [1],
          },
        },
        {
          input: {
            array: [1, 2],
            compareFn: COMPARE_FN_NUMBER_ASC,
          },
          expected: {
            updated: [1, 2],
            original: [1, 2],
          },
        },
        {
          input: {
            array: [3, 1, 2],
            compareFn: COMPARE_FN_NUMBER_ASC,
          },
          expected: {
            updated: [1, 2, 3],
            original: [3, 1, 2],
          },
        },
        {
          input: {
            array: [3, 1, 2],
            compareFn: COMPARE_FN_NUMBER_DESC,
          },
          expected: {
            updated: [3, 2, 1],
            original: [3, 1, 2],
          },
        },
      ];

      for (const example of EXAMPLES) {
        it(JSON.stringify(example), () => {
          const original = example.input.array;
          const actual = sortArray(original, example.input.compareFn);
          expect(original).toEqual(example.expected.original);
          expect(actual).toEqual(example.expected.updated);
        });
      }
    });
  });
});
