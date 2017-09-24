import { expect } from 'chai';
import { stringMap } from '../src';
import { noValue } from './noValue';

describe('stringMap', function (): void {
  it('should return no value for prototype property', async function (): Promise<void> {
    // arrange
    const map = stringMap();

    // act
    const ctor = map['constructor'];

    // assert
    expect(noValue(ctor)).to.be.equal(true);
  });

  it('should return previously put value', async function (): Promise<void> {
    // arrange
    const map = stringMap();
    map['123'] = '234';

    // act
    const val = map['123'];

    // assert
    expect(val).to.be.equal('234');
  });

  it('should return no value for prototype property after serialize/deserialize action', async function (): Promise<void> {
    // arrange
    const map = stringMap();

    // act
    const deserialized = JSON.parse(JSON.stringify(map));
    const ctor = deserialized['constructor'];

    // assert
    expect(noValue(ctor)).to.be.equal(true);
  });
});

