import { CompareFn } from '../types';
import { sign } from './util';

export function compareNumberAsc(): CompareFn<number> {
  return (item1: number, item2: number): number => sign(item1 - item2);
}

export function compareNumberDesc(): CompareFn<number> {
  return (item1: number, item2: number): number => sign(item2 - item1);
}
