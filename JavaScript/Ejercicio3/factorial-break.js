let factorial = 1;
let contador = 10;

while(true) {
  factorial *= contador;
  contador--;
  if(contador <= 0) {
    break;
  }
}
console.log(factorial);