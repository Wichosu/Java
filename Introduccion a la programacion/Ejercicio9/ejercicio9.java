package Ejercicio9;

public class ejercicio9 {
  public static void main(String args[]) {
    Cliente cliente = new Cliente();
    Trabajador trabajador = new Trabajador();
    
    cliente.setEdad(20);
    cliente.setNombre("Luis");
    cliente.setTelefono("+52 2281805528");
    cliente.setCredito(2499.99);

    System.out.println("Cliente edad: " + cliente.getEdad());
    System.out.println("Cliente nombre: " + cliente.getNombre());
    System.out.println("Cliente telefono: " + cliente.getTelefono());
    System.out.println("Cleinte credito: " + cliente.getCredito());

    trabajador.setEdad(27);
    trabajador.setNombre("Jorge");
    trabajador.setTelefono("+52 2281590667");
    trabajador.setSalario(10000.99);

    System.out.println("Trabajador edad: " + trabajador.getEdad());
    System.out.println("Trabajador nombre: " + trabajador.getNombre());
    System.out.println("Trabajador telefono: " + trabajador.getTelefono());
    System.out.println("Trabajador salario: " + trabajador.getSalario());

  }
}

class Persona {
  private int edad;
  private String nombre;
  private String telefono;

  public void setEdad(int edad) {
    this.edad = edad;
  }

  public int getEdad() {
    return this.edad;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public String getNombre() {
    return this.nombre;
  }

  public void setTelefono(String telefono) {
    this.telefono = telefono;
  }

  public String getTelefono() {
    return this.telefono;
  }
}

class Cliente extends Persona {
  private double credito;

  public void setCredito(double credito) {
    this.credito = credito;
  }

  public double getCredito() {
    return this.credito;
  }
}

class Trabajador extends Persona {
  private double salario;

  public void setSalario(double salario) {
    this.salario = salario;
  }

  public double getSalario() {
    return this.salario;
  }
}
