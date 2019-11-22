/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persona;
import java.text.DecimalFormat;
import java.math.RoundingMode;
/**
 *
 * @author Luis
 */
public class personaDatos {
    private String sexo, nombre;
    private double peso, estatura;
    private int edad;
    
    private static DecimalFormat df2 = new DecimalFormat("#.##");

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public String getEstatura() {
        return df2.format(estatura);
    }

    public void setEstatura(double estatura) {
        this.estatura = estatura;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }
    
    public String Imc(){
        this.peso = this.peso / (Math.pow(this.estatura, 2));
        df2.setRoundingMode(RoundingMode.UP);
        return df2.format(this.peso);
    }
    
    public String mayorEdad(){
        if(this.edad >= 18){
            return "Si";
        }
        else{
            return "No";
        }
    }
    
    public String genero(){
        if(null == this.sexo){
            return "Otro";
        }
        else switch (this.sexo) {
            case "M":
            case "m":
                return "Hombre";
            case "F":
            case "f":
                return "Mujer";
            default:
                return "Otro";
        }
    }
}
