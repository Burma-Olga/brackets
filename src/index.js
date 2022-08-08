module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.join('').replace(/,/g, '');
  let res = [];
for (let bracket of str) {
      let bracketsIndex = brackets.indexOf(bracket)

      if (bracketsIndex % 2 === 0) {
          
          if (bracket === brackets[bracketsIndex + 1] && res[res.length - 1] === bracketsIndex){
              res.pop();
          } else if (bracket === brackets[bracketsIndex + 1] && res[res.length - 1] !== bracketsIndex) {
              res.push(bracketsIndex)
          }
          else{
              res.push(bracketsIndex)
          }
      } 
      else {
          if (res.pop() !== bracketsIndex-1){
              return false;
          }
      }
      
  }
  return res.length === 0
}
