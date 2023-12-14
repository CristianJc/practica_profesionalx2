import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalExamenValoracionComponent } from './pages/principal-examen-valoracion/principal-examen-valoracion.component';
import { SolicitudExamenComponent } from './components/solicitud-examen/solicitud-examen.component';
const routes: Routes = [
    {
        path: '',
        component: PrincipalExamenValoracionComponent,
        children: [
            {
                path: '',
                component: SolicitudExamenComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExamenValoracionRoutingModule {}
