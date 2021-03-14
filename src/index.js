module.exports = function reverse (n) {

  if(n < 0){
    n *= (-1);
    return n.toString().split('').reverse().join('');
  }
  return n.toString().split('').reverse().join('');
}
