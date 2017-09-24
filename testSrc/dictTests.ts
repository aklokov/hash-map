import { expect } from 'chai';
import { toStringDict } from '../src';
import { noValue } from './noValue';

describe('toStringDict', function (): void {
  it('should return dictionary with flags', async function (): Promise<void> {
    // arrange
    const src = ['a', 'b'];


    // act
    const map = toStringDict(src, s => s, s => true);

    // assert
    expect(map['a']).to.be.equal(true);
    expect(map['b']).to.be.equal(true);
    expect(noValue(map['c'])).to.be.equal(true);
    expect(noValue(map['constructor'])).to.be.equal(true);
  });

});

