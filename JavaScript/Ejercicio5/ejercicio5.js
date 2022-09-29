//Una variable que contenga tu altura en centímetros (entero)
let centimetros = 175;
//Una variable que contenga tu altura en metros (número de coma flotante)
let metros = centimetros/100;
//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let kilogramos = 72.22;
//Una variable que contenga tu altura en metros redondeada hacia arriba
let metrosRedondeado = Math.ceil(parseFloat(metros));
//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let kilogramosRedondeado = Math.floor(kilogramos);
//Una variable que contenga si "el máximo valor que se
//uede obtener en Javascript + 1" es igual al máximo valor que 
//se puede obtener en Javascript
let maximo = (Number.MAX_VALUE+1)===Number.MAX_VALUE;

console.log(maximo);