import { describe, expect, it } from '@jest/globals';
import { compareNumberAsc, compareNumberDesc } from './compare-number';
import { CompareFn } from '../types';

describe('compare-number', () => {
  describe('compareNumberAsc()', () => {
    const EXAMPLES: readonly Example[] = [
      {
        input: {
          item1: 0,
          item2: 0,
        },
        expected: 0,
      },
      {
        input: {
          item1: 1,
          item2: 1,
        },
        expected: 0,
      },
      {
        input: {
          item1: 1,
          item2: 2,
        },
        expected: -1,
      },
      {
        input: {
          item1: 2,
          item2: 1,
        },
        expected: 1,
      },
      {
        input: {
          item1: -1,
          item2: 0,
        },
        expected: -1,
      },
    ];

    for (const example of EXAMPLES) {
      doTest(example, compareNumberAsc());
    }
  });

  describe('compareNumberDesc()', () => {
    const EXAMPLES: readonly Example[] = [
      {
        input: {
          item1: 0,
          item2: 0,
        },
        expected: 0,
      },
      {
        input: {
          item1: 1,
          item2: 1,
        },
        expected: 0,
      },
      {
        input: {
          item1: 1,
          item2: 2,
        },
        expected: 1,
      },
      {
        input: {
          item1: 2,
          item2: 1,
        },
        expected: -1,
      },
      {
        input: {
          item1: -1,
          item2: 0,
        },
        expected: 1,
      },
    ];

    for (const example of EXAMPLES) {
      doTest(example, compareNumberDesc());
    }
  });
});

interface Example {
  readonly input: {
    readonly item1: number;
    readonly item2: number;
  };
  readonly expected: number;
}

function doTest(example: Example, compareFn: CompareFn<number>): void {
  it(JSON.stringify(example), () => {
    const actual = compareFn(example.input.item1, example.input.item2);
    expect(actual).toEqual(example.expected);
  });
}
