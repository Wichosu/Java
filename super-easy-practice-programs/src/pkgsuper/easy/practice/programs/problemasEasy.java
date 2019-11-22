/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pkgsuper.easy.practice.programs;

/**
 *
 * @author Luis
 */
public class problemasEasy {
     public static String problemaI(){
        //Problema 1
        return("Hola mundo!!!");
    }
    
    public static String problemaII() {
        //Problema 2
        String text[] = {"Hello World", "Crusader kings III Deus vult"};
        int nums[] = {1, 2};
        float fnums[] = {1.5f, 2.2f};
        boolean arr[] = {true, false};
        int i;
        String returnn = "0";
        for(i = 0; i <= 2; i++){
            String save = returnn;
            returnn = text[i] + " " + nums[i] + " " + fnums[i] + " " + arr[i] + " ";
            returnn = save + returnn;
            return(returnn);
        }
        return(returnn);
    }
}
