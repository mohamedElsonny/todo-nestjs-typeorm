import {
  Equal,
  ILike,
  In,
  LessThan,
  LessThanOrEqual,
  Like,
  MoreThan,
  MoreThanOrEqual,
  Not,
} from 'typeorm';

export interface SimpleSearchOptions {
  _eq?: string;
  _neq?: string;
  _ilike?: string;
  _like?: string;
  _lt?: number | string;
  _lte?: number | string;
  _gt?: number | string;
  _gte?: number | string;
  _in?: string[];
  _nin?: string[];
}

export type SearchOptions = Partial<
  {
    _and?: Partial<Record<string, SimpleSearchOptions>>[];
    _or?: Partial<Record<string, SimpleSearchOptions>>[];
    _not?: Partial<Record<string, SimpleSearchOptions>>[];
  } & Record<string, SimpleSearchOptions>
>;
export function formatSearchInput(input: SearchOptions, not = false) {
  console.dir({ input }, { depth: null });
  const result = Object.entries(input).reduce((acc, [key, value]) => {
    switch (key) {
      case '_and': {
        return input[key].reduce((prev, item) => {
          const searchOpts = formatSearchInput(item, not);
          prev = { ...prev, ...searchOpts };
          return prev;
        }, {});
      }
      case '_or': {
        return input[key].map((item) => {
          return formatSearchInput(item, not);
        });
      }
      case '_not': {
        return input[key].reduce((prev, item) => {
          const searchOpts = formatSearchInput(item, true);
          prev = { ...prev, ...searchOpts };
          return prev;
        }, {});
      }
      default: {
        const inverse = not ? Not : undefined;
        acc[key] = getOperatorFromOptions(value, inverse);
        return acc;
      }
    }
  }, {});
  console.log({ result });
  return result;
}

function getOperatorFromOptions(value, fun = (val) => val) {
  if ('_eq' in value) return fun(Equal(value._eq));
  if ('_neq' in value) return fun(Not(Equal(value._neq)));
  if ('_in' in value) return fun(In(value._in));
  if ('_nin' in value) return fun(Not(In(value._nin)));
  if ('_like' in value) return fun(Like(value._like));
  if ('_ilike' in value) return fun(ILike(value._ilike));
  if ('_lt' in value) return fun(LessThan(value._lt));
  if ('_lte' in value) return fun(LessThanOrEqual(value._lte));
  if ('_gt' in value) return fun(MoreThan(value._gt));
  if ('_gte' in value) return fun(MoreThanOrEqual(value._gte));
}
