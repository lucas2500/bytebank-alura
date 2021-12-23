import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private ListaTransferencia: any[];

  constructor() {
    this.ListaTransferencia = [];
  }

  get transferencias() {
    return this.ListaTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.ListaTransferencia.push(transferencia);
  }

  hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
