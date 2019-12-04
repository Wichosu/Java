/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calculadoramaestro;

import java.util.Scanner;

/**
 *
 * @author luis
 */
public class CalculadoraMaestro {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        calculadora Calc = new calculadora();
        Scanner leer = new Scanner (System.in);
        int opcion = 0;
        while(opcion!=5){
            System.out.println("Bienvenido a la calculadora de clima");
            System.out.println("1.- de grados C a grados F");
            System.out.println("2.- de grados f a grados C");
            System.out.println("3.- de grados C a grados K");
            System.out.println("4.- de grados K a grados C");
            System.out.println("5.- Salida");
            System.out.println("Escoge la opcion deseada");
            opcion = leer.nextInt();
            switch(opcion){
                case 1:
                    System.out.println("Ingresa los Grados C:");
                    Calc.setGradosEntrada(leer.nextFloat());
                    System.out.println("Grados F: " + Calc.deCaF());
                    break;
                case 2:
                    System.out.println("Ingresa los grados F:");
                    Calc.setGradosEntrada(leer.nextFloat());
                    System.out.println("Grados C " + Calc.deFaC());
                    break;
                case 3:
                    System.out.println("Ingresa los Grados C:");
                    Calc.setGradosEntrada(leer.nextFloat());
                    System.out.println("Grados K: " + Calc.deCaK());
                    break;
                case 4:
                    System.out.println("Ingresa los Grados K:");
                    Calc.setGradosEntrada(leer.nextFloat());
                    System.out.println("Grados C: " + Calc.deKaC());
                    break;
                case 5:
                    break;
                default:
                    System.out.println("Las opciones son del 1 al 5");
                    break;
            }
        }
     
        
    }
    
}
