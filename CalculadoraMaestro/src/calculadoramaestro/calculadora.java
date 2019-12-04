/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calculadoramaestro;

/**
 *
 * @author luis
 */
public class calculadora {
    private float GradosEntrada;
    private float GradosSalida;

    public calculadora() {
        this.GradosEntrada = 0;
        this.GradosSalida = 0;
    }

    public float getGradosEntrada() {
        return GradosEntrada;
    }

    public void setGradosEntrada(float GradosEntrada) {
        this.GradosEntrada = GradosEntrada;
    }

    public float getGradosSalida() {
        return GradosSalida;
    }

    public void setGradosSalida(float GradosSalida) {
        this.GradosSalida = GradosSalida;
    }
    
    public float deCaF(){
        this.GradosSalida = (this.GradosEntrada * (float) 1.8) + 32;
        return this.GradosSalida;
    }
    
    public float deFaC(){
        this.GradosSalida = (this.GradosEntrada - 32) / (float) 1.8;
        return this.GradosSalida;
    }
    
    public float deCaK(){
        this.GradosSalida = (this.GradosEntrada + (float) 273.15);
        return this.GradosSalida;
    }
    
    public float deKaC(){
        this.GradosSalida = (this.GradosEntrada = (float) 273.15);
        return this.GradosSalida;
    }
}
