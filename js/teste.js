// var array1 = [1,2,3];
// var array2 = [1,2,3];

// for(let i = 0; i < array1.length; i++){
//   // console.log(array1[i] === array2[i]);
// }


// function arraysContainSame(a, b) {
//   a = Array.isArray(a) ? a : [];
//   console.log(a);
//   b = Array.isArray(b) ? b : [];
//   return a.length === b.length && a.every(el => b.includes(el));
// }

// console.log(arraysContainSame([1,2], [1,2,3]));


// console.log([1,2,3].every(item => array1.includes(item)));


// var array1 = [1,2,3,4,5,6,7,8,9];


// for(let i = 0; i < array1.length; i++){
//   console.log(array1[i]);
// }




const arrayVitoria = [1,4,5,9];
const arrayPossibilidades = [
  [1,4,7],[7,4,1],[2,5,8],[8,5,2],[3,6,9],[9,6,3],[1,5,9],[9,5,1],
  [7,5,3],[3,5,7],[1,2,3],[3,2,1],[6,5,4],[4,5,6],[7,8,9],[9,8,7]
];


// arrayPossibilidades.forEach((array) => {
//   array.forEach((num, index) => {
//       arrayVitoria.forEach(item => {
//         console.log('Primeiro: ', item);
//         // console.log('Ultimo: ', num, ' index: ', index);
//     })
//   })
// })


let arrayProvisoria = [1,2,3,4,5,7];

arrayProvisoria.splice(0, 8);

// arrayProvisoria.forEach(() => {
//   arrayProvisoria.shift();
//   console.log('a');
// })

console.log(arrayProvisoria);