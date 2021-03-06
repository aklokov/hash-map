import { expect } from 'chai';
import { lookup } from '../src';
import { noValue } from './noValue';

describe('Map/lookup', function (): void {
  it('should return map with needed arrays', async function (): Promise<void> {
    // arrange
    const src = [{ type: 'list' }, { type: 'list' }, { type: 'item' }];

    // act
    const map = lookup(src, item => item.type, item => item);

    // assert
    expect(map.get('list')).to.be.deep.equal([src[0], src[1]]);
    expect(map.get('item')).to.be.deep.equal([src[2]]);
  });

  it('should with default selector', async function (): Promise<void> {
    // arrange
    const src = [{ type: 'list' }, { type: 'list' }, { type: 'item' }];

    // act
    const map = lookup(src, item => item.type);

    // assert
    expect(map.get('list')).to.be.deep.equal([src[0], src[1]]);
    expect(map.get('item')).to.be.deep.equal([src[2]]);
  });

});
