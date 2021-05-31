import { format } from 'numerable';

// `numerable` doesn't export `NumerableFormatNumberOptions` type
// `format` uses `NumerableFormatNumberOptions` as one of its parameters so we can extract it ourselves
// Also `format` has 3 overloads
// so we can create a tuple of its call signatures
// and then map `Parameters<T>` over that tuple
// see https://stackoverflow.com/a/59538756/10049787

type NumerableFormatOverloads<T> = T extends {
  (...args: infer A1): infer R1;
  (...args: infer A2): infer R2;
  (...args: infer A3): infer R3;
}
  ? [(...args: A1) => R1, (...args: A2) => R2, (...args: A3) => R3]
  : T extends {
      (...args: infer A1): infer R1;
      (...args: infer A2): infer R2;
    }
  ? [(...args: A1) => R1, (...args: A2) => R2]
  : T extends {
      (...args: infer A1): infer R1;
    }
  ? [(...args: A1) => R1]
  : any; // eslint-disable-line @typescript-eslint/no-explicit-any

type OverloadedParameters<T> = NumerableFormatOverloads<T> extends infer O
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { [K in keyof O]: Parameters<Extract<O[K], (...args: any) => any>> }
  : never;

type NumerableFormatParams = OverloadedParameters<typeof format>;

type NumerableFormatNumberOptions = NumerableFormatParams[0][2];

export type NumerableFormatOptions = NonNullable<NumerableFormatNumberOptions>;
