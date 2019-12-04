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
public class PruebaPoliformismo {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
           AlumnoIngSist Alumno1 = new AlumnoIngSist();
           Alumno1.inscripcion();
           
           AlumnoMerca Alumno2 = new AlumnoMerca();
           Alumno2.inscripcion();
           String nombre, apellido, matricula;
           nombre = "Williams";
           apellido = "San Martin";
           matricula = "SAMW790812";
           Alumno Alumno3 = new Alumno(nombre,apellido,matricula);
           Alumno3.inscripcion();
           Alumno1.setNombre("Andrea");
           Alumno2.setNombre("Luis");
           System.out.println(Alumno1.toString());
          System.out.println(Alumno2.toString()); 
           System.out.println(Alumno3.toString());
           
    }
    
}
