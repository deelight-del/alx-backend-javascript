export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  weakMap.has(endpoint)
    ? weakMap.set(endpoint, weakMap.get(endpoint) + 1)
    : weakMap.set(endpoint, 1);
  if (weakMap.get(endpoint) >= 5) { throw Error('Endpoint load is high'); }
}
