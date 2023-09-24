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
      this.datos.renta = '0.00';

      this.datos.liquido = (this.datos.salario - (+this.datos.isss + +this.datos.afp + +this.datos.renta)).toFixed(2);
    }

  }

}
