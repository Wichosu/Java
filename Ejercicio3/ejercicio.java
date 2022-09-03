package Ejercicio3;

public class ejercicio{

  public static void main(String args[]) {
    coche miCoche = new coche();

    miCoche.masPuertas();

    System.out.println("Numero de puertas:" + miCoche.puertas);

    System.out.print(suma(2, 2, 4));

  }

  public static int suma(int a, int b, int c) {
    return a + b + c;
  }

  public static class coche {
    public int puertas = 0;

    public void masPuertas() {
      this.puertas++;
    }
  }
}