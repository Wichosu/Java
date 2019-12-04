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
public class menor extends personillas{
    @Override
    public String Genero(){
        if(this.getSexo() == 'H'){
            return "Es Niño";
        }
        else{
            return "Es Niña";
        }
    }
}
