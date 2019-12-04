/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pruebapoliformismo;

/**
 *
 * @author Williams
 */
public class Alumno {
    private String Nombre;
    private String Apellido;
    private String Matricula;

    public Alumno() {
        this.Nombre="";
        this.Apellido="";
        this.Matricula="";
    }

    public Alumno(String Nombre, String Apellido, String Matricula) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Matricula = Matricula;
    }
    
    

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String Nombre) {
        this.Nombre = Nombre;
    }

    public String getApellido() {
        return Apellido;
    }

    public void setApellido(String Apellido) {
        this.Apellido = Apellido;
    }

    public String getMatricula() {
        return Matricula;
    }

    public void setMatricula(String Matricula) {
        this.Matricula = Matricula;
    }
    
    public void inscripcion(){
         System.out.println("El alumno se encuentra inscrito");
    }
    
    @Override
    public String toString(){
      String cadena;
      cadena="El nombre del alumno es "+ this.Nombre 
              + " "+this.Apellido+
              " la matricula es: " + this.Matricula;
      return cadena;
    }
    
}