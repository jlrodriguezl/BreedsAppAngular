import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaRazasService } from '../../Services/consulta-razas.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'detalle-raza',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">{{nombreRaza | uppercase}}</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
    </button>
</div>
    <div class="modal-body">
    <div *ngFor="let img of imagenes">
      <img src="{{img}}" class="lista-fotos">
    </div>
</div>
    <div class="modal-footer">
    <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
</div>
  `
})
export class DetalleRazaModal implements OnInit{
  @Input() nombreRaza;

  private imagenes: string[];

  constructor(
    private consultaRazasService: ConsultaRazasService,
    public activeModal: NgbActiveModal) {}

    async ngOnInit(){
      await this.consultaFotos();
    }

    async consultaFotos(){
      this.imagenes = [];
      var result = await this.consultaRazasService.getFotos(this.nombreRaza);
      this.imagenes = result.message;
    }
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private consulta: boolean = false;
  private razas: string[];

  constructor(
      private route: ActivatedRoute,
      private consultaRazasService: ConsultaRazasService,
      private modalService: NgbModal
      ) { }

  async ngOnInit() {
    let tipoUsuario = this.route.snapshot.paramMap.get('id');
    if(tipoUsuario == '1'){
      this.razas = [];
      await this.consultaRazas();
      this.consulta = true;
    }
  }

  async consultaRazas(){
  var result:any = await this.consultaRazasService.getRazas();
  this.razas = Object.keys(result.message);
  }
  
  verImagenes(raza: string){
    const modalRef = this.modalService.open(DetalleRazaModal);
    modalRef.componentInstance.nombreRaza = raza;
    
  }
}
