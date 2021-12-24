import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.models';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  // Evento
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Nova transferência solicitada!');
    const ValorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(ValorEmitir).subscribe((result) => {
      console.log(result),
      (e) => console.error(e),
      this.router.navigateByUrl('extrato')
      // this.router.navigate(['rotas'])
    });
  }

  LimparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
