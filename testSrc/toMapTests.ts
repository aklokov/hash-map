import { expect } from 'chai';
import { toNumberMap, toStringLookup } from '../src';
import { noValue } from './noValue';

describe('toNumberMap', function (): void {
  it('should return map with needed values', async function (): Promise<void> {
    // arrange
    const src = [{ id: 1 }, { id: 2 }];

    // act
    const map = toNumberMap(src, item => item.id);

    // assert
    expect(map[1]).to.be.equal(src[0]);
    expect(map[2]).to.be.equal(src[1]);
    expect(noValue(map[3])).to.be.equal(true);
  });

  it('should not throw for null', async function (): Promise<void> {
    // act
    const map = toNumberMap<number>(null, item => item);
  });
});
