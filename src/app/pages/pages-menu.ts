/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesMenu {

  getMenu(): Observable<NbMenuItem[]> {


    const menu: NbMenuItem[] = [
      {
        title: 'MENU',
        group: true,
      },
      {
        title: 'Configuración',
        icon: 'settings-2',
        children: [

          {
            title:'Logo Empresa',
            link: '/pages/setting/companylogo',
          },
          {
            title: 'Cambiar contraseña',
            link: '/pages/setting/password-change',
          },
        ],
      },
      {
        title: 'Administracion',
        icon: 'layers',
        children: [
          {
            icon: 'book-outline',
            title: 'Tipo Terceros',
            link: '/pages/management/thirdpartymanage',
          },
          {
            icon: 'clipboard-outline',
            title:'Tipos Lista por Consulta',
            link: '/pages/management/companytypelist',
          },
          {
            icon: 'compass-outline',
            title:'Procuraduria',
            link: '/pages/management/manageprocuracy',
          },
          {
            icon: 'people-outline',
            title: 'Usuarios',
            link: '/pages/management/users',
          }
        ]
      },
      {
        title: 'Notificaciones',
        icon: 'bell',
        children: [
          {
            title: 'Configuración',
            link: '/pages/notifications/settings',
          },
          {
            title: 'Enviadas',
            link: '/pages/notifications/sent',
          },
          {
            title: 'Monitoreo',
            link: '/pages/notifications/monitoring',
          },
        ]
      },
      {
        title: 'Consultas',
        icon: 'search-outline',
        children: [
          {
            title: 'Individual',
            link: '/pages/queries/individual',
          },
          {
            title: 'Masiva',
            link: '/pages/queries/bulk',
          }
        ]
      },
      {
        title: 'Listas Propias',
        icon: 'file-text-outline',
        children: [
          {
            icon: 'clipboard-outline',
            title: 'Tipo',
            link: '/pages/own-lists/type',
          },
          {
            icon: 'list-outline',
            title: 'Administrar',
            link: '/pages/own-lists/manage',
          }
        ]
      },
      {
        title: 'Reportes',
        icon: 'pie-chart',
        children: [
          {
            title: 'Consulta Reporte Historico',
            link: '/pages/reports/historical-query',
          },
          {
            title: 'Consultar Log',
            link: '/pages/reports/get-log',
          },
          {
            title: 'Consultas y Coincidencias',
            link: '/pages/reports/queries-and-matches',
          },
          {
            title: 'Detallado de Coincidencias',
            link: '/pages/reports/matches-details',
          },
          {
            title: 'Ver Consultas Realizadas',
            link: '/pages/reports/queries-made',
          },
          {
            title: 'Certificación Actualizacion\nListas',
            link: '/pages/reports/lists-update-certification',
          },

        ],
      },
      {
        title: 'Perfilamiento de Terceros',
        icon:  'people-outline',
        children: [
          {
            title: 'Parametrizar variables y\n categorías',
            link: '/pages/third-party-profiling/parameterize-variables/risk-profile-variables',
          },
        ],
      },
      {
        title: 'Extras',
        icon:  'expand',
        children: [
          {
            title: 'Noticias',
            icon:  'film',
            link: '/pages/extras/news',
          },
          {
            title: 'Registrar ROI/Denuncia',
            link: '/pages/extras/register-roi',
          },
        ],
      },
      {
        title: 'extra',
        icon: 'pie-chart',
        children: [
          {
            title: 'FAQs',
            link: '/pages/extra/faqs',
          },
          {
            title: 'señales de alerta',
            link: '/pages/extra/warning-signs',
          }
        ]
      },

      {
        title: 'Layout',
        icon: 'layout-outline',
        children: [
          {
            title: 'Stepper',
            link: '/pages/layout/stepper',
          },
          {
            title: 'List',
            link: '/pages/layout/list',
          },
          {
            title: 'Infinite List',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'Accordion',
            link: '/pages/layout/accordion',
          },
          {
            title: 'Tabs',
            pathMatch: 'prefix',
            link: '/pages/layout/tabs',
          },
        ],
      },
      {
        title: 'Forms',
        icon: 'edit-2-outline',
        children: [
          {
            title: 'Form Inputs',
            link: '/pages/forms/inputs',
          },
          {
            title: 'Form Layouts',
            link: '/pages/forms/layouts',
          },
          {
            title: 'Buttons',
            link: '/pages/forms/buttons',
          },
          {
            title: 'Datepicker',
            link: '/pages/forms/datepicker',
          },
        ],
      },
      {
        title: 'UI Features',
        icon: 'keypad-outline',
        link: '/pages/ui-features',
        children: [
          {
            title: 'Grid',
            link: '/pages/ui-features/grid',
          },
          {
            title: 'Icons',
            link: '/pages/ui-features/icons',
          },
          {
            title: 'Typography',
            link: '/pages/ui-features/typography',
          },
          {
            title: 'Animated Searches',
            link: '/pages/ui-features/search-fields',
          },
        ],
      },
      {
        title: 'Modal & Overlays',
        icon: 'browser-outline',
        children: [
          {
            title: 'Dialog',
            link: '/pages/modal-overlays/dialog',
          },
          {
            title: 'Window',
            link: '/pages/modal-overlays/window',
          },
          {
            title: 'Popover',
            link: '/pages/modal-overlays/popover',
          },
          {
            title: 'Toastr',
            link: '/pages/modal-overlays/toastr',
          },
          {
            title: 'Tooltip',
            link: '/pages/modal-overlays/tooltip',
          },
        ],
      },
      {
        title: 'Extra Components',
        icon: 'message-circle-outline',
        children: [
          {
            title: 'Calendar',
            link: '/pages/extra-components/calendar',
          },
          {
            title: 'Progress Bar',
            link: '/pages/extra-components/progress-bar',
          },
          {
            title: 'Spinner',
            link: '/pages/extra-components/spinner',
          },
          {
            title: 'Alert',
            link: '/pages/extra-components/alert',
          },
          {
            title: 'Calendar Kit',
            link: '/pages/extra-components/calendar-kit',
          },
          {
            title: 'Chat',
            link: '/pages/extra-components/chat',
          },
        ],
      },
      {
        title: 'Maps',
        icon: 'map-outline',
        children: [
          {
            title: 'Google Maps',
            link: '/pages/maps/gmaps',
          },
          {
            title: 'Leaflet Maps',
            link: '/pages/maps/leaflet',
          },
          {
            title: 'Bubble Maps',
            link: '/pages/maps/bubble',
          },
          {
            title: 'Search Maps',
            link: '/pages/maps/searchmap',
          },
        ],
      },
      {
        title: 'Charts',
        icon: 'pie-chart-outline',
        children: [
          {
            title: 'Echarts',
            link: '/pages/charts/echarts',
          },
          {
            title: 'Charts.js',
            link: '/pages/charts/chartjs',
          },
          {
            title: 'D3',
            link: '/pages/charts/d3',
          },
        ],
      },
      {
        title: 'Editors',
        icon: 'text-outline',
        children: [
          {
            title: 'TinyMCE',
            link: '/pages/editors/tinymce',
          },
          {
            title: 'CKEditor',
            link: '/pages/editors/ckeditor',
          },
        ],
      },
      {
        title: 'Tables & Data',
        icon: 'grid-outline',
        children: [
          {
            title: 'Smart Table',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Tree Grid',
            link: '/pages/tables/tree-grid',
          },
        ],
      },
      {
        title: 'Miscellaneous',
        icon: 'shuffle-2-outline',
        children: [
          {
            title: '404',
            link: '/pages/miscellaneous/404',
          },
        ],
      },
      {
        title: 'Auth',
        icon: 'lock-outline',
        children: [
          {
            title: 'Login',
            link: '/auth/login',
          },
          {
            title: 'Register',
            link: '/auth/register',
          },
          {
            title: 'Request Password',
            link: '/auth/request-password',
          },
          {
            title: 'Reset Password',
            link: '/auth/reset-password',
          },
        ],
      },
    ];

    return of([...menu]);
  }
}
