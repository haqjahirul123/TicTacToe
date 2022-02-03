const describe = require('describe');

 //const winner = require('../src/main');
 //import winner from '../src/main';
 const chai = require('chai')
 const expect = chai.expect



function winnerTest(a,b,c){
    return a&&b&&c
    

}
var result= winnerTest(true,true,true)

//console.log(winner())

describe('winner', () => {
  it('player winner', () => {
  //  const result=winnerTest(true,true,true)
  //     assert.equal(winner,result)
    expect(winner(true,true,true)).to.deep.equal(result)
   
  })
})

