/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package personasmaestro;

/**
 *
 * @author luis
 */
public class personillas {
    private String nombre;
    private int edad;
    private double peso;
    private double estatura;
    private char sexo;
    
    public personillas(){
        this.nombre = "";
        this.edad = 0;
        this.peso = 0.0;
        this.estatura = 0.0;
        this.sexo = ' ';
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public double getEstatura() {
        return estatura;
    }

    public void setEstatura(double estatura) {
        this.estatura = estatura;
    }

    public char getSexo() {
        return sexo;
    }

    public void setSexo(char sexo) {
        this.sexo = sexo;
    }
    
    public Double IMC(){
        Double imc;
        imc = this.peso / Math.pow(this.estatura, 2);
        return imc;
    }
    
    public String esMayordeedad(){
        if(this.edad >= 18){
            return "Es Mayor de Edad";
        }
        else{
            return "Es Menor de Edad";
        }
    }
    
    public boolean adultoMenor(){
        return this.edad < 18;
    }
    
    public String Genero(){
        if(this.sexo == 'H'){
            return "Hombre";
        }
        else{
            return "Mujer";
        }
    }
    
    @Override
    public String toString(){
        String cadena = "Su nombre es " + this.nombre
                         + "\nEl paciente es " + this.Genero()
                         + "\nSu indice de masa corporal es: " + String.valueOf(this.IMC())
                         + "\n" + this.esMayordeedad();
        return cadena;
    }
}
