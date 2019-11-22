/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persona;

import java.util.Scanner;

/**
 *
 * @author Luis
 */
public class Persona {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner read = new Scanner(System.in);
        personaDatos datos = new personaDatos();
        int option = 0;
        while(option != 2){
            
        System.out.println("1.-Ingresar datos\n2.-Salir");
        option = read.nextInt();
        if(option == 1){
            System.out.println("Ingresa los siguientes datos");
            System.out.println("Nombre: (Solo escribe tu primer nombre)");
            datos.setNombre(read.next());
            System.out.println("Sexo: (M o F)");
            datos.setSexo(read.next());
            System.out.println("Edad:");
            datos.setEdad(read.nextInt());
            System.out.println("Estatura: (Mtrs)");
            datos.setEstatura(read.nextFloat());
            System.out.println("Peso: (Kg)");
            datos.setPeso(read.nextFloat());
        
            System.out.println("Nombre: " + datos.getNombre());
            System.out.println("Sexo: " + datos.getSexo());
            System.out.println("Edad: " + datos.getEdad());
            System.out.println("Estatura: " + datos.getEstatura());
            System.out.println("Peso: " + datos.getPeso());
            System.out.println("IMC: " + datos.Imc());
            System.out.println("Mayor de Edad: " + datos.mayorEdad());
            System.out.println("Sexo: " + datos.genero());
        }
        else if(option != 1 && option != 2){
            System.out.println("Opcion incorrecta, selecciona 1 o 2\n");
        }
      }
    }
    
}
