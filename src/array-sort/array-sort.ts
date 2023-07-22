import { CompareFn } from '../types';

export function sortArray<T>(
  array: readonly T[],
  compareFn: CompareFn<T>,
): readonly T[] {
  return [...array].sort(compareFn);
}
