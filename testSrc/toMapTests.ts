import { expect } from 'chai';
import { toNumberMap, toStringLookup } from '../src';

describe('toNumberMap', function (): void {
  it('should return map with needed values', async function (): Promise<void> {
    // arrange
    const src = [{ id: 1 }, { id: 2 }];

    // act
    const map = toNumberMap(src, item => item.id);

    // assert
    expect(map[1]).to.be.equal(src[0]);
    expect(map[2]).to.be.equal(src[1]);
    expect(map[3]).to.be.equal(undefined);
  });
});

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

});
