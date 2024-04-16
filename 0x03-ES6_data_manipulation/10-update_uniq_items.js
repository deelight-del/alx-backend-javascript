export default function updateUniqueItems(argMap) {
  if (!(argMap instanceof Map)) { throw Error('Cannot process'); }
  argMap.forEach((value, key, map) => {
    if (value === 1) { map.set(key, 100); }
  });
}
