import { CompareFn } from '../types';
import { sign } from './util';

export type CompareStringSensivity = 'base' | 'accent' | 'case' | 'variant';
export type CompareStringCaseFirst = 'upper' | 'lower' | 'none';

export interface CompareStringOptions {
  readonly locale?: string;
  readonly sensitivity?: CompareStringSensivity;
  readonly caseFirst?: CompareStringCaseFirst;
}

export function compareStringAsc(
  options?: CompareStringOptions,
): CompareFn<string> {
  const finalOptions = toFinalOptions(options);
  const collatorOptions = toCollatorOptions(finalOptions);
  return (item1: string, item2: string): number => {
    const diff = item1.localeCompare(
      item2,
      finalOptions.locale,
      collatorOptions,
    );
    return sign(diff);
  };
}

export function compareStringDesc(
  options?: CompareStringOptions,
): CompareFn<string> {
  const finalOptions = toFinalOptions(options);
  const collatorOptions = toCollatorOptions(finalOptions);
  return (item1: string, item2: string): number => {
    const diff = -item1.localeCompare(
      item2,
      finalOptions.locale,
      collatorOptions,
    );
    return sign(diff);
  };
}

function toFinalOptions(
  options: CompareStringOptions | undefined,
): Required<CompareStringOptions> {
  if (!options) {
    return DEFAULT_OPTIONS;
  }

  const { locale, sensitivity, caseFirst } = options;

  return {
    locale: locale ?? DEFAULT_OPTIONS.locale,
    sensitivity: sensitivity ?? DEFAULT_OPTIONS.sensitivity,
    caseFirst: caseFirst ?? DEFAULT_OPTIONS.caseFirst,
  };
}

function toCollatorOptions(
  options: Required<CompareStringOptions>,
): Intl.CollatorOptions {
  const { sensitivity, caseFirst } = options;
  return {
    sensitivity,
    caseFirst: caseFirst === 'none' ? undefined : caseFirst,
  };
}

const DEFAULT_OPTIONS: Required<CompareStringOptions> = {
  locale: 'en',
  sensitivity: 'case',
  caseFirst: 'upper',
};
