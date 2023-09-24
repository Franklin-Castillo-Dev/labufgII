import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-salario',
  templateUrl: './calculadora-salario.component.html',
  styleUrls: ['./calculadora-salario.component.css']
})
export class CalculadoraSalarioComponent {

  datos: any = {
    salario: 0,
    isss: '0.00',
    afp: '0.00',
    renta: '0.00',
    liquido: '0.00'
  }

  calcularSalarioLiquido(){
    console.log(this.datos);

    if(this.datos.salario > 0){
      this.datos.isss = (this.datos.salario * 0.03).toFixed(2);
      if(parseFloat(this.datos.isss) > 30){
        this.datos.isss = '30.00';
      }
      this.datos.afp = (this.datos.salario * 0.0725).toFixed(2);

      //Condicionales Renta
      let salarioGravado = (this.datos.salario - (+this.datos.isss + +this.datos.afp)).toFixed(2);

      if(parseFloat(salarioGravado) < 472.00){ // TRAMO I
        this.datos.renta = '0.00';
      }
      else if(parseFloat(salarioGravado) > 472.01 && parseFloat(salarioGravado) < 895.24){ // TRAMO II
        this.datos.renta = (((+salarioGravado - 472.00)*0.10) + 17.67).toFixed(2);
      } 
      else if(parseFloat(salarioGravado) > 895.25 && parseFloat(salarioGravado) < 2038.10){ // TRAMO III
        this.datos.renta = (((+salarioGravado - 895.24)*0.20) + 60.00).toFixed(2);
      }
      else if(parseFloat(salarioGravado) > 2038.11){ // TRAMO IV
        this.datos.renta = (((+salarioGravado - 2038.10)*0.30) + 288.57).toFixed(2);
      }      
      else{
        this.datos.renta = '0.00';
      }

      this.datos.liquido = (this.datos.salario - (+this.datos.isss + +this.datos.afp + +this.datos.renta)).toFixed(2);
    }

  }

}
