/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calculadora.clima;
import java.util.Scanner;

/**
 *
 * @author Luis
 */
public class Calculadora {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner read = new Scanner(System.in);
        Conversiones conversion = new Conversiones();
        float grades = 0;
        int option = 0;
        
        System.out.println("Bienvenido a la calculadora de conversiones");
        
        while(option != 7){

        System.out.println("Selecciona una opcion\n 1.Celcius a Fahrenheit\n 2.Fahrenheit a Celcius\n 3.Celcius a Kelvin\n 4.Kelvin a Celcius\n 5.Fahrenheit a Kelvin\n 6.Kelvin a Fahrenheit\n 7.Salir");
        option = read.nextInt();
        
        if(option != 7 & option < 7 & option > 0){
            System.out.println("Ingresa los grados");
            grades = read.nextFloat();
        }
        
        switch(option){
            case 1:
                System.out.println("Celcius a Fahrenheit\nTus grados Fahrenheit son:");
                System.out.println(conversion.ctf(grades));
                break;
            case 2:
                System.out.println("Fahrenheit a Celcius\nTus grados Celcius son:");
                System.out.println(conversion.ftc(grades));
                break;
            case 3:
                System.out.println("Celcius a Kelvin\nTus grados Kelvin son:");
                System.out.println(conversion.ctk(grades));
                break;
            case 4:
                System.out.println("Kelvin a Celcius\nTus grados Celcius son:");
                System.out.println(conversion.ktc(grades));
                break;
            case 5:
                System.out.println("Fahrenheit a Kelvin\nTus grados Kelvin son:");
                System.out.println(conversion.ftk(grades));
                break;
            case 6:
                System.out.println("Kelvin a Fahrenheit\nTus grados Fahrenheit son:");
                System.out.println(conversion.ktf(grades));
                break;
            case 7:
                System.out.println("Hasta pronto");
                break;
            default:
                System.out.println("Opcion invalida intenta de nuevo por favor");
                break;
        }
      }
    }
}
