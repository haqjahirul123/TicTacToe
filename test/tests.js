//const describe = require('describe');

 //import { winnerSelectY } from '../src/main'
 //import main from '../src/main';
//  import expect from 'chai'
 const chai = window.chai
const expect = chai.expect

var x_Winner=parseInt(localStorage.getItem("scoreX"))
var o_Winner=parseInt(localStorage.getItem("scoreO"))
console.log(o_Winner)

describe('winnerO', () => {
  it('Check how many time "O"player winner', () => {
   
     
        expect(o_Winner).to.deep.equal(parseInt(1))
        //expect(o_Winner).to.deep.equal(parseInt(2))
      
   
  })
})

describe('winnerX', () => {
  it('Check how many time "X"player winner', () => {
   
        expect(x_Winner).to.deep.equal(parseInt(3))
        //expect(x_Winner).to.deep.equal(parseInt(2))
   
  })
})
