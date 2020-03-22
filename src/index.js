module.exports = function towelSort (matrix) {
var dir = 'LR';
var res = [];
if (matrix == [] || matrix === undefined) return [];
  for (let i = 0; i < matrix.length; i++) {
    if (dir == 'LR') {
      for (let j = 0; j < matrix[i].length; j++) {
       res.push(matrix[i][j]);
    }
      dir = 'RL';
    }
    else if (dir == 'RL') {
      matrix[i].reverse();
      for (let k = 0; k < matrix[i].length; k++) {
       res.push(matrix[i][k]);
      }
    dir = 'LR';
  }
  }
return res;
}
