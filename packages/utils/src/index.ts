export const namespaced = (namespace: string): (kv: Record<string, any>) => Record<string, any> => (kv) =>
  Object.entries(kv).reduce(
    (state, [key, value]) => ({ ...state, [`${namespace}/${key}`]: value }),
    {}
  )

export const mapKeys = (kv: Record<string, Array<string | [string, ...any[]]>>): Record<string, any> =>
  Object.entries(kv).reduce(
    (state1, [key1, value1]) =>
      value1.reduce(
        (state2, value2) => (
          Array.isArray(value2)
            ? { ...state2, [value2[0]]: value2.length > 1 ? [key1, ...value2.slice(1)] : key1 }
            : { ...state2, [value2]: key1 }
        ),
        state1
      ),
    {}
  )