import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserManagementService} from '../../backend/common/services/user-management.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EMAIL_PATTERN} from '../../../../@auth/components';
import {Location} from '@angular/common';
import {User} from '../../models/user';
import {NbToastrService} from "@nebular/theme";
import {RoleUserDTO} from '../../models/RoleUserDTO';
import {AccessService} from '../../backend/common/services/access.service';

@Component({
    selector: 'ngx-user-management-form',
    templateUrl: './user-management-form.component.html',
    styleUrls: ['./user-management-form.component.scss'],
})
export class UserManagementFormComponent implements OnInit {

    public userForm: FormGroup;
    public secondForm: FormGroup;
    public thirdForm: FormGroup;
    public headerTitle = 'Crear usuario';
    public BtnResetPassword: boolean = false;
    public emailError = null;
    public loginError = null;
    public accessrol = [];
    public identificationError = null;
    public selectedAccessDefault;
    public editAdd = "1";
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
                private router: Router,
                private route: ActivatedRoute,
                private accessService:AccessService,
                private location: Location,
                protected toastrService: NbToastrService,
                private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.initUserForm();
        this.initsecondform();
        this.inithirdform();
        this.loadUser();
        this.getAllAccess();

        console.log('inicio', this.editAdd);
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

    inithirdform(){
        this.thirdForm = this.fb.group({
            thirdCtrl: ['', Validators.required],
        });
    }

    loadUser() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id != null) {
            this.headerTitle = 'Actualizar usuario';
            this.BtnResetPassword = true;
            this.editAdd = "0";

            this.userManagementService.get(+id)
                .subscribe(response => {
                    const user = response.data;
                    this.userForm.setValue({
                        id: user.id ? user.id : '',
                        identification: user.identification ? user.identification : '',
                        name: user.name ? user.name : '',
                        lastName: user.lastName ? user.lastName : '',
                        login: user.login ? user.login : '',
                        email: user.email,
                        isActive: user.isActive,
                    });
                    this.getPermissionsByUser(id);
                }, error => {
                    this.toastrService.danger('', 'Usuario no econtrado', {
                        icon: '',
                    });
                });
        }
    }

    ResetPassword(){
        const user: User = this.userForm.value;
        let id = null ;
        this.route.snapshot.paramMap.get('id') ? id = this.route.snapshot.paramMap.get('id') : delete user.id;
        
        if(id != null){
            this.userManagementService.ResetPassword(id, user).subscribe((user) => {
                
                this.toastrService.success('', '¡Reinicio de Contraseña Exitoso!', {
                    icon: '',
                });
                this.router.navigate([`/pages/management/users`]);
                this.clearErrors();
            }, errorResponse => {
                this.setupErrorResponse(errorResponse);
            });
        }
    }

    save() {
        let y = JSON.parse(JSON.stringify(this.secondForm.value));        
        Object.keys(y).map(function(key, index) {
            y[key] = [{status:y[key],id:index+1}];
        });
        console.log(y);
        let rolesuser:RoleUserDTO = y;
        
        const user: User = this.userForm.value;
        let id = null ;
        this.route.snapshot.paramMap.get('id') ? id = this.route.snapshot.paramMap.get('id') : delete user.id;

        if (id == null) {
            this.userManagementService.create(user).subscribe((user:any) => {
                this.userForm.reset();
                rolesuser.user = user.data.id;
                this.userManagementService.createRolesUser(rolesuser).subscribe(()=>{
                });
                this.toastrService.success('', '¡Registro exitoso!', {
                    icon: '',
                });
                this.clearErrors();                                  
                this.router.navigate([`/pages/management/users`]);
            }, errorResponse => {
                this.toastrService.warning('', 'El usuario ya se encuentra registrado o se a registrado con un correo ya existente', {
                    icon: '',
                });
                this.userForm.controls['email'].setValue('');
                this.setupErrorResponse(errorResponse);
            });

        } else {
            this.userManagementService.update(+id, user).subscribe((user) => {
                rolesuser.user =  parseInt(id);
                this.userManagementService.createRolesUser(rolesuser).subscribe(()=>{
                    this.toastrService.success('', '¡Actualizacion Exitosa!', {
                        icon: '',
                    });
                    this.router.navigate([`/pages/management/users`]);

                });
                // this.router.navigate([`/pages/management/users`]);
                this.clearErrors();
            }, errorResponse => {
                this.setupErrorResponse(errorResponse);
            });
        }
    }

    ngOnDestroy(): void {

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

    public onFirstSubmit() {
        this.userForm.markAsDirty();
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

    public getAllAccess(){
        this.accessService.getByCompany().subscribe((result)=>{
            this.accessrol = result;
            console.log('roles', this.accessrol);
            
            this.selectedAccessDefault = this.accessrol.filter(x => x.name == "Personalizar");
            this.selectedAccessDefault = this.selectedAccessDefault[0].id
        });        
    }

    public changeaccess(e){

    this.accessService.getPermissionsByAccessId(e).subscribe((result)=>{
        //console.log(result);
        delete result.accessId
        delete result.nameAccess
        this.secondForm.setValue(result)
        
    })

    }
    

}
