import { expect } from 'chai';
import { stringMap } from '../src';

describe('stringMap', function (): void {
  it('should return undefined for prototype property', async function (): Promise<void> {
    // arrange
    const map = stringMap();

    // act
    const ctor = map['constructor'];

    // assert
    expect(ctor).to.be.equal(undefined);
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
});

