package Ejercicio4;

public class ejercicio4 {
  public static void main(String args[]) {
    /*Usando un if, crear una condición que compare
     si la variable numeroIf es positivo, negativo, o 0. */
    int numeroIf = -2;

    if(numeroIf > 0) {
      System.out.println(numeroIf + " Es un numero positivo");
    }
    else if(numeroIf < 0) {
      System.out.println(numeroIf + " Es un numero negativo");
    }
    else {
      System.out.println(numeroIf + " Es igual a 0");
    }

    /*Crea un bucle While, este bucle tendrá que tener como condición
     que la variable numeroWhile sea inferior a 3, el bloque de código
     que tendrá el bucle deberá:

        Incrementar el valor de la variable en uno cada vez que se ejecute.

        Mostrarlo por pantalla cada vez que se ejecute. */

    int numeroWhile = 0;
    
    while(numeroWhile < 3) {
      System.out.println(numeroWhile);
      numeroWhile++;
    }

    /*Con el bucle Do While */

    do{
      System.out.println(numeroWhile);
      numeroWhile++;
    }while(numeroWhile < 3);

    /*Bucle For */
    for(int numeroFor = 0; numeroFor <= 3; numeroFor++) {
      System.out.println(numeroFor);
    }

    /*Switch */
    String estacion = "Otoño";

    switch(estacion) {
      case "Primavera":
        System.out.println("La estación es primavera");
        break;
      case "Verano":
        System.out.println("La estación es verano");
        break;
      case "Otoño":
        System.out.println("La estación es otoño");
        break;
      case "Invierno":
        System.out.println("La estación es invierno");
        break;
      default:
        System.out.println("La variable no es una estación");
        break;
    }

  }
}
