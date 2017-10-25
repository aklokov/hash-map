# hash-map
"object as hash map" toolset.
Solves following issue:
```js
let a = {
  'myKey': 'myValue'
}
let key = 'constructor'; // comes from outside source
let b = a[key] || 'defaultValue';
expect(b).to.be.equal('defaultValue'); // fails
```

Does not make any wrappers around objects, therefore no usage overhead is implied. It just hides all underlying object properties with null value

# Alternative
As an alternative, object without prototype can be used.
```js
 const map = Object.create(null);
```

But if you want to use 'object spread' feauture, like the following, it will break the testcase again. And you have to write some long and ugly expression instead of this to avoid the issue.
```js
const newMap = {
  ...map,
  newKey: newValue
};
```
Object spread is useful for functional style coding, i.e. when you do not want to mutate existing object and rather want to create new object with changed props, for instance if you are writing a reducer for redux.

Proposed solution, i.e. shielding the props, survives not only 'object spread' operator, it will even survive serialize/deserialize flow.
As a tradeoff it increases the size of serialized json, as all shielded fields will be present there with 'null' value.

# Usage

map with string as a key
```js
// 1. method to create empty string-to-type storage
// 2. method to convert array to string-to-type storage
// 3. string-to-type interface to use in typescript
import { stringMap, toStringMap, StringMap } from 'hash-map'; 

// create empty string to number key-value storage
const emptyMap: StringMap<number> = stringMap<number>(); 


const objects: MyObj[] = [{ id: '1' }, { id: '2' }];
// creates following object { '1':{ id: '1' }, '2': { id: '2' }];
const objMap: StringMap<MyObj> = toStringMap(objects, obj => obj.id); 
```

There are also following methods available:
```js
// number-to-type methods and interface
import { numberMap, toNumberMap, NumberMap } from 'hash-map';

// methods and interface for string-to-string storage
import { map, toMap, Map } from 'hash-map';  
```

And couple more complex methods
```js
import { toStringDict, toStringLookup, Map, StringMap } from 'hash-map';

const src = [{ key: '1', value: '2' }, { key: '3', value: '4'}, { key: '1', value: '5' }];
// produces this object: { '1': ['2', '5'], '3': ['4'] }
const map: StringMap<string[]> = toStringLookup(src, item => item.key, item => item.value);

const src = [{ key: '1', value: '2' }, { key: '3', value: '4'}];
//produces this object: { '1': '2', '3': '4' }
const map: Map = toStringDict(src, item => item.key, item => item.value);
```