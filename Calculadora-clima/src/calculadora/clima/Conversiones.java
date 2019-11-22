/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calculadora.clima;

/**
 *
 * @author Luis
 */
public class Conversiones {
    public static float ctf(float g){
        float f = 0;
        f = (float) ((g * 1.8) + 32);
        return(f);
    }
    
    public static float ftc(float g){
        float c = 0;
        c = (float) ((g - 32) * 0.55);
        return(c);
    }
    
    public static float ctk(float g){
        float k = 0;
        k = (float) (g + 273.15);
        return(k);
    }
    
    public static float ktc(float g){
        float c = 0;
        c = (float) (g - 273.15);
        return(c);
    }
    
    public static float ftk(float g){
        float k = 0;
        k = (float) (((g - 32) * 0.55) + 273.15);
        return(k);
    }
    
    public static float ktf(float g){
        float f = 0;
        f = (float) (((g - 273.15) * 9/5) + 32);
        return(f);
    }
}
