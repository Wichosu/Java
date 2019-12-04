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
public class adulto extends personillas{
    
    @Override
    public String esMayordeedad(){
        if(this.getEdad() >= 60){
            return "Adulto Mayor";
        }
        else{
            return "Joven Adulto";
        }
    }
}
