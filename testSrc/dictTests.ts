import { expect } from 'chai';
import { toStringDict, toNumberDict } from '../src';
import { noValue } from './noValue';

const length = 30000000;
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

  function populate(obj: any, src: number[]): void {
    for (let i of src) {
      obj[i] = 1;
    }
  }

  // it('should parform faster than hasOwnProperty', async function (): Promise<void> {
  //   // arrange
  //   const src = [];
  //   for (let i = 1; i < length; i++) {
  //     src.push(i);
  //   }
  //   const obj = {};



  //   //    act2
  //   const map = toNumberDict(src, s => s, s => 1);
  //   const start1 = new Date().getTime();
  //   let count1 = 0;
  //   for (let i = 1; i < length; i++) {
  //     count1 += map[i] || 0;
  //   }
  //   const finish1 = new Date().getTime() - start1;
  //   console.log(finish1);

  //   //    act1
  //   populate(obj, src);
  //   const start2 = new Date().getTime();
  //   let count2 = 0;
  //   for (let i = 1; i < length; i++) {
  //     count2 += obj.hasOwnProperty(i) && obj[i] || 0;
  //   }
  //   const finish2 = new Date().getTime() - start2;
  //   console.log(finish2);



  //   // assert
  //   // expect(count1).to.be.equal(count2);
  //   // expect(finish2 >= finish1).to.be.equal(true);
  // });

});

