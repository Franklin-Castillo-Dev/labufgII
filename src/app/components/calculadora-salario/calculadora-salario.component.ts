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
  
}
