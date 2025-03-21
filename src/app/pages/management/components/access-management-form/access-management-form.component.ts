import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserManagementService} from '../../backend/common/services/user-management.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EMAIL_PATTERN} from '../../../../@auth/components';
import {Location} from '@angular/common';
import {NbToastrService} from "@nebular/theme";
import {AccessService} from '../../backend/common/services/access.service';

@Component({
    selector: 'ngx-access-management-form',
    templateUrl: './access-management-form.component.html',
    styleUrls: ['./access-management-form.component.scss'],
})
export class AccessManagementFormComponent implements OnInit {

    userForm: FormGroup;
    secondForm: FormGroup;
    thirdForm: FormGroup;
    headerTitle = 'Crear_usuario';
    emailError = null;
    loginError = null;
    identificationError = null;
    public id;

    get identification() {
        return this.userForm.get('identification');
    }

    get name() {
        return this.userForm.get('name');
    }

    get lastName() {
        return this.userForm.get('lastName');
    }

    get login() {
        return this.userForm.get('login');
    }

    get email() {
        return this.userForm.get('email');
    }

    get isActive() {
        return this.userForm.get('isActive');
    }

    constructor(private userManagementService: UserManagementService,
                private accessService:AccessService,
                private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                protected toastrService: NbToastrService,
                private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.initUserForm();
        this.initsecondform();
        this.loadUser();
    }

    initUserForm() {
        this.userForm = this.fb.group({
            id: this.fb.control(''),
            identification: this.fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
            name: this.fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
            lastName: this.fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
            login: this.fb.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
            isActive: this.fb.control(true, [Validators.required]),
            email: this.fb.control('', [
                Validators.required,
                Validators.pattern(EMAIL_PATTERN),
            ]),
        });
    }

    initsecondform(){
        this.secondForm = this.fb.group({
            nameAccess: ['', Validators.required],
            logoempresa: [false, Validators.required],
            changepassword:[false, Validators.required],
            thirdparties:[false, Validators.required],
            typeslistbyquery:[false, Validators.required],
            procurator:[false, Validators.required],
            users:[false, Validators.required],
            access:[false, Validators.required],
            setting:[false, Validators.required],
            sentto:[false, Validators.required],
            monitoring:[false, Validators.required],
            individual:[false, Validators.required],
            massive:[false, Validators.required],
            type:[false, Validators.required],
            manager:[false, Validators.required],
            historyreport:[false, Validators.required],
            getlog:[false, Validators.required],
            queriesandmatches:[false, Validators.required],
            coincidencedetailing:[false, Validators.required],
            viewpastconsultations:[false, Validators.required],
            certificationlistupdates:[false, Validators.required],
            parameterscategory:[false, Validators.required],
            news:[false, Validators.required],
            roi:[false, Validators.required],
            faqs:[false, Validators.required],
            signal:[false, Validators.required],
        });
    }



    loadUser() {
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id  != null) {
            this.headerTitle = 'Actualizar_usuario';

            this.accessService.getPermissionsByAccessId(this.id)
                .subscribe(response => {
                    let access = response;
                    delete access.accessId;
                    console.log(access);
                    this.secondForm.setValue(access)
                    this.secondForm.get('nameAccess').disable();
                }, error => {
                    this.toastrService.danger('', 'Usuario no econtrado', {
                        icon: '',
                    });
                });
        }
    }

    save() {
        console.log(this.secondForm.value);
        if(this.id == null){
            this.accessService.createAccessByCompany(this.secondForm.value).subscribe(()=>{
                //console.log("enviado");
                this.router.navigate([`/pages/management/access/`]);
            })
        }
        else{
            let data = {...this.secondForm.value,accessId:this.id}
            this.accessService.updateAccess(data).subscribe(()=>{
                //console.log("enviado");
                this.router.navigate([`/pages/management/access/`]);
            })
        }
    }


    back($event: MouseEvent) {
        $event.preventDefault();
        this.location.back();
    }

    private setupErrorResponse(errorResponse) {
        const errorObj = errorResponse.error.errors;
        if (errorObj.hasOwnProperty('email'))
            this.emailError = errorObj.email;

        if (errorObj.hasOwnProperty('login'))
            this.loginError = errorObj.login;

        if (errorObj.hasOwnProperty('identification'))
            this.identificationError = errorObj.identification;
    }

    private clearErrors() {
        this.emailError = null;
        this.loginError = null;
        this.identificationError = null;
    }


    public  onSecondSubmit() {
        this.secondForm.markAsDirty();
    }

    public getPermissionsByUser(id : string){

        this.userManagementService.getPermissionsByUser(id).subscribe( roles => {
        //Se escoge unicamente el objeto que nos interesa el atributo status
        Object.keys(roles).map(function(key, index) {
            if(key!="user")
            roles[key] = roles[key][0]['status'];
        });
        //se elimina el atributo user debido a que no corresponde al modelo del secondform y asi utilizar la propiedad setvalue de formgroup
        delete roles.user;
        this.secondForm.setValue(roles)
        console.log(roles);
        
        });
    } 

    

}
