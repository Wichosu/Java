let lista = [];
function fibonacci(num) {
  if (num <= 1) return num;
  lista = [...[(parseInt(fibonacci(num-1)) + parseInt(fibonacci(num-2)))]];
  return lista;
}
  
let fibo = fibonacci(6);

let array = [1, 2 ,3];

let numero = 2

let otro = 4

let algo = [...[numero], otro];

console.log([...array]);