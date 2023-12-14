import { MenuItem } from 'primeng/api';

export const menuItems: MenuItem[] = [
    {
        label: 'INICIO',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
    },
    {
        label: 'GESTIÓN',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'ESTUDIANTES',
                icon: 'pi pi-user',
                routerLink: '/estudiantes',
            },
            {
                label: 'DOCENTES',
                icon: 'pi pi-user',
                routerLink: '/docentes',
            },
        ],
    },
    {
        label: 'MATRICULAS',
        icon: 'pi pi-fw pi-id-card',
    },
    {
        label: 'SOLICITUDES',
        icon: 'pi pi-fw pi-inbox',
    },
    {
        label: 'PRESUPUESTO',
        icon: 'pi pi-fw pi-chart-line',
    },
    { separator: true },
    {
        label: 'TRABAJOS DE GRADO',
        icon: 'pi pi-fw pi-book',
        items: [
            {
                label: 'EXAMEN DE VALORACION',
                icon: 'pi pi-user',
                routerLink: '/solicitud-examen-valoracion',
            },
            {
                label: 'GENERAR HOJA DE VIDA',
                icon: 'pi pi-user',
                routerLink: '/docentes',
            },
            {
                label: 'SEGUIMIENTO A EGRESADOS',
                icon: 'pi pi-user',
                routerLink: '/docentes',
            },
        ],
    },
];
