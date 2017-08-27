import { expect } from 'chai';
import { toNumberMap, toStringLookup, defaultSelector } from '../src';

describe('toStringLookup', function (): void {
  it('should return map with needed arrays', async function (): Promise<void> {
    // arrange
    const src = [{ type: 'list' }, { type: 'list' }, { type: 'item' }];

    // act
    const map = toStringLookup(src, item => item.type, item => item);

    // assert
    expect(map['list']).to.be.deep.equal([src[0], src[1]]);
    expect(map['item']).to.be.deep.equal([src[2]]);
    expect(map['constructor']).to.be.equal(undefined);
  });

  it('should with default selector', async function (): Promise<void> {
    // arrange
    const src = [{ type: 'list' }, { type: 'list' }, { type: 'item' }];

    // act
    const map = toStringLookup(src, item => item.type, defaultSelector);

    // assert
    expect(map['list']).to.be.deep.equal([src[0], src[1]]);
    expect(map['item']).to.be.deep.equal([src[2]]);
    expect(map['constructor']).to.be.equal(undefined);
  });

});
