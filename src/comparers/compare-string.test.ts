import { describe, expect, it } from '@jest/globals';
import {
  CompareStringOptions,
  compareStringAsc,
  compareStringDesc,
} from './compare-string';
import { CompareFn } from '../types';

describe('compare-string', () => {
  describe('compareStringAsc()', () => {
    const EXAMPLES: readonly Example[] = [
      {
        input: {
          item1: '',
          item2: '',
          options: undefined,
        },
        expected: 0,
      },
      {
        input: {
          item1: '',
          item2: 'a',
          options: undefined,
        },
        expected: -1,
      },
      {
        input: {
          item1: 'a',
          item2: '',
          options: undefined,
        },
        expected: 1,
      },
      {
        input: {
          item1: 'a',
          item2: 'b',
          options: undefined,
        },
        expected: -1,
      },
      {
        input: {
          item1: 'b',
          item2: 'a',
          options: undefined,
        },
        expected: 1,
      },
      {
        input: {
          item1: 'A',
          item2: 'a',
          options: undefined,
        },
        expected: -1,
      },
      {
        input: {
          item1: ' b',
          item2: 'a',
          options: undefined,
        },
        expected: -1,
      },
      {
        input: {
          item1: 'aa',
          item2: 'ab',
          options: undefined,
        },
        expected: -1,
      },
      {
        input: {
          item1: 'A',
          item2: 'a',
          options: {
            sensitivity: 'base',
          },
        },
        expected: 0,
      },
      {
        input: {
          item1: 'á',
          item2: 'a',
          options: {
            sensitivity: 'base',
          },
        },
        expected: 0,
      },
      {
        input: {
          item1: 'A',
          item2: 'a',
          options: {
            sensitivity: 'accent',
          },
        },
        expected: 0,
      },
      {
        input: {
          item1: 'á',
          item2: 'a',
          options: {
            sensitivity: 'accent',
          },
        },
        expected: 1,
      },
      {
        input: {
          item1: 'A',
          item2: 'a',
          options: {
            sensitivity: 'variant',
          },
        },
        expected: -1,
      },
      {
        input: {
          item1: 'á',
          item2: 'a',
          options: {
            sensitivity: 'variant',
          },
        },
        expected: 1,
      },
      {
        input: {
          item1: 'A',
          item2: 'a',
          options: {
            caseFirst: 'lower',
          },
        },
        expected: 1,
      },
      {
        input: {
          item1: 'A',
          item2: 'a',
          options: {
            caseFirst: 'none',
          },
        },
        expected: 1,
      },
    ];

    for (const example of EXAMPLES) {
      doTest(example, compareStringAsc(example.input.options));
    }
  });

  describe('compareStringDesc()', () => {
    const EXAMPLES: readonly Example[] = [
      {
        input: {
          item1: '',
          item2: '',
          options: undefined,
        },
        expected: 0,
      },
      {
        input: {
          item1: '',
          item2: 'a',
          options: undefined,
        },
        expected: 1,
      },
      {
        input: {
          item1: 'a',
          item2: '',
          options: undefined,
        },
        expected: -1,
      },
      {
        input: {
          item1: 'a',
          item2: 'b',
          options: undefined,
        },
        expected: 1,
      },
      {
        input: {
          item1: 'b',
          item2: 'a',
          options: undefined,
        },
        expected: -1,
      },
      {
        input: {
          item1: 'A',
          item2: 'a',
          options: undefined,
        },
        expected: 1,
      },
      {
        input: {
          item1: ' b',
          item2: 'a',
          options: undefined,
        },
        expected: 1,
      },
      {
        input: {
          item1: 'aa',
          item2: 'ab',
          options: undefined,
        },
        expected: 1,
      },
      {
        input: {
          item1: 'A',
          item2: 'a',
          options: {
            sensitivity: 'base',
          },
        },
        expected: 0,
      },
      {
        input: {
          item1: 'á',
          item2: 'a',
          options: {
            sensitivity: 'base',
          },
        },
        expected: 0,
      },
      {
        input: {
          item1: 'A',
          item2: 'a',
          options: {
            sensitivity: 'accent',
          },
        },
        expected: 0,
      },
      {
        input: {
          item1: 'á',
          item2: 'a',
          options: {
            sensitivity: 'accent',
          },
        },
        expected: -1,
      },
      {
        input: {
          item1: 'A',
          item2: 'a',
          options: {
            sensitivity: 'variant',
          },
        },
        expected: 1,
      },
      {
        input: {
          item1: 'á',
          item2: 'a',
          options: {
            sensitivity: 'variant',
          },
        },
        expected: -1,
      },
      {
        input: {
          item1: 'A',
          item2: 'a',
          options: {
            caseFirst: 'lower',
          },
        },
        expected: -1,
      },
      {
        input: {
          item1: 'A',
          item2: 'a',
          options: {
            caseFirst: 'none',
          },
        },
        expected: -1,
      },
    ];

    for (const example of EXAMPLES) {
      doTest(example, compareStringDesc(example.input.options));
    }
  });
});

interface Example {
  readonly input: {
    readonly item1: string;
    readonly item2: string;
    readonly options: CompareStringOptions | undefined;
  };
  readonly expected: number;
}

function doTest(example: Example, compareFn: CompareFn<string>): void {
  it(JSON.stringify(example), () => {
    const actual = compareFn(example.input.item1, example.input.item2);
    expect(actual).toEqual(example.expected);
  });
}
