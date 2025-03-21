import {Component, OnInit, TemplateRef} from '@angular/core';
import {NbDialogService, NbIconLibraries} from '@nebular/theme';

// import {$} from "protractor";
@Component({
    selector: 'ngx-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {

    constructor(iconsLibrary: NbIconLibraries, private dialogService: NbDialogService) {
        iconsLibrary.registerFontPack('ion', {iconClassPrefix: 'ion'});
    }

    // displayStyle = "none";
    pdfType = 1;
    videoType = 2;
    url: any;
    data = [{
        type: this.pdfType,
        name: 'Manual de Usuario',
        'url': 'https://inspektor.datalaft.com:448/ManualUsuario.pdf',
        icon: 'document',
    }, {
        type: this.videoType,
        name: 'Política de tratamiento de datos',
        'url': 'https://inspektor.datalaft.com:448/PoliticaTratamiento.pdf',
        icon: 'document',
    }, {
        type: this.videoType,
        name: 'Listas y Colorimetría',
        'url': 'https://inspektor.datalaft.com:448/LISTADOS_Y_COLORIMETRIA_%20INSPEKTOR.pdf',
        icon: 'document',
    }, {
        type: this.videoType,
        name: 'Preguntas y Respuestas Rama Judicial',
        'url': 'https://inspektor.datalaft.com:448/preguntas_respuestas_rama_judicial.pdf',
        icon: 'document',
    }, {
        type: this.videoType,
        name: 'Tutorial inspektor',
        'url': 'https://inspektor.datalaft.com:448/Inspektor_Vr5.0_Tutorial.mp3',
        icon: 'social-youtube',
    }, {
        type: this.videoType,
        name: 'Nuevas Funcionalidades',
        'url': 'https://inspektor.datalaft.com:448/Inspektor_Vr5.0_NuevasFuncionalidades.mp3',
        icon: 'social-youtube',
    }, {
        type: this.videoType,
        name: 'Cambios anteriores',
        'url': 'https://inspektor.datalaft.com:448/Inspektor_Vr5.0_RecientesFuncionalidades.mp3',
        icon: 'social-youtube',
    }];

    ngOnInit(): void {
    }

    openModal(dialog: TemplateRef<any>, url) {

        this.url = url;
        // this.displayStyle = "block";
        // $("#myModal").modal('show');
        this.dialogService.open(
            dialog,
            {context: 'this is some additional data passed to dialog', dialogClass: 'model-full'});
    }

}
