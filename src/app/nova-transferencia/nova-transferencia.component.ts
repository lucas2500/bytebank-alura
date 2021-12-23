import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

    // Evento
    @Output() aoTransferir = new EventEmitter<any>();

    valor: number;
    destino: number;

    transferir() {
        console.log('Nova transferência solicitada!');
        const ValorEmitir = { valor: this.valor, destino: this.destino };
        this.aoTransferir.emit(ValorEmitir);
        this.LimparCampos();
    }

    LimparCampos() {
        this.valor = 0;
        this.destino = 0;
    }
}