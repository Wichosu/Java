/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package personasmaestro;

import java.util.Scanner;


/**
 *
 * @author luis
 */
public class PersonasMaestro {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        personillas elgordito = new personillas();
        menor ninos = new menor();
        adulto senior = new adulto();
        System.out.println("Que tan gordo estas?");
        System.out.println("Cual es tu nombre?");
        elgordito.setNombre(lector.nextLine());
        ninos.setNombre(elgordito.getNombre());
        senior.setNombre(elgordito.getNombre());
        System.out.println("Cual es tu edad?");
        elgordito.setEdad(lector.nextInt());
        ninos.setEdad(elgordito.getEdad());
        senior.setEdad(elgordito.getEdad());
        System.out.println("Cual es tu sexo?");
        elgordito.setSexo(lector.next().charAt(0));
        ninos.setSexo(elgordito.getSexo());
        senior.setSexo(elgordito.getSexo());
        System.out.println("Cual es tu estatura?");
        elgordito.setEstatura(lector.nextDouble());
        ninos.setEstatura(elgordito.getEstatura());
        senior.setEstatura(elgordito.getEstatura());
        System.out.println("Cual es tu peso?");
        elgordito.setPeso(lector.nextDouble());
        ninos.setPeso(elgordito.getPeso());
        senior.setPeso(elgordito.getPeso());
        if(elgordito.adultoMenor()){
            System.out.println(ninos.toString());
        }
        else{ 
            System.out.println(senior.toString());
        }
    }
    
}
