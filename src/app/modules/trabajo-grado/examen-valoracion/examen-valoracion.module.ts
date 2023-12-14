import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimenNgModule } from '../../primen-ng/primen-ng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { ExamenValoracionRoutingModule } from './examen-valoracion-routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SolicitudExamenComponent } from '../examen-valoracion/components/solicitud-examen/solicitud-examen.component';
import { PrincipalExamenValoracionComponent } from './pages/principal-examen-valoracion/principal-examen-valoracion.component';
@NgModule({
    declarations: [
        SolicitudExamenComponent,
        PrincipalExamenValoracionComponent,
    ],
    imports: [
        CommonModule,
        PrimenNgModule,
        SharedModule,
        ExamenValoracionRoutingModule,
        ReactiveFormsModule,
    ],
    providers: [MessageService, ConfirmationService, DialogService],
})
export class ExamenValoracionModule {}
