function createMap(): any {
  const result = {};
  for (var prop of Object.getOwnPropertyNames(Object.prototype)) {
    result[prop] = undefined;
  }

  return result;
}

export const mapObj = createMap();
