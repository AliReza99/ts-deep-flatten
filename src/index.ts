import type { DeepRequired } from 'utility-types';

type DeepFlattenBase<T, Prefix extends string = ''> = T extends (infer U)[]
  ? {
      [K in keyof U]: `${Prefix & string}${K & string}${U[K] extends object ? '.' : ''}${DeepFlattenBase<U[K], ''>}`;
    }[keyof U]
  : T extends object
    ? {
        [K in keyof T]: `${Prefix & string}${K & string}${T[K] extends object ? '.' : ''}${DeepFlattenBase<T[K], ''>}`;
      }[keyof T]
    : Prefix;

/**
 * Flattens a deeply nested object type into a dot-separated union.
 * it also consider all of the optional keys are required
 * @example
 * // Example usage:
 * type NestedObject = {
 *   a: {
 *     b: {
 *       c: number;
 *     };
 *     d: string;
 *   };
 *   e: boolean;
 * };
 *
 * const paths: DeepFlatten<NestedObject> = "e" | "a.d" | "a.b.c"
 */
export type DeepFlatten<T> = DeepFlattenBase<DeepRequired<T>>;
