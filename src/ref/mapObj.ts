const mapObj = createMap();
function createMap(): any {
  const result = {};
  for (var prop of Object.getOwnPropertyNames(Object.prototype)) {
    result[prop] = null;
  }

  return result;
}

export function createMapObj(): any {
  return { ...mapObj };
}
