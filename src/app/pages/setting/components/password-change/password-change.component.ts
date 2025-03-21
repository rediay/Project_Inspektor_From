import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {UsersPasswordService} from '../../backend/common/services/users-password.service';
import {Password} from '../../models/password';
import {NbToastrService} from '@nebular/theme';
import {getDeepFromObject} from '../../../../@auth/helpers';
import {NB_AUTH_OPTIONS} from '@nebular/auth';
import {UserData} from "../../../../@core/interfaces/common/users";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs/Subject";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ngx-password-change',
    templateUrl: './password-change.component.html',
    styleUrls: ['./password-change.component.scss'],
})
export class PasswordChangeComponent implements OnInit {
    protected readonly unsubscribe$ = new Subject<void>();
    minLength: number = this.getConfigValue('forms.validation.password.minLength');
    maxLength: number = this.getConfigValue('forms.validation.password.maxLength');
    passwordForm: FormGroup;
    submitted = false;
    hasPasswordError = false;
    hasPasswordReset = false;

    get currentPassword() {
        return this.passwordForm.get('currentPassword');
    }

    get newPassword() {
        return this.passwordForm.get('newPassword');
    }

    get confirmPassword() {
        return this.passwordForm.get('confirmPassword');
    }

    constructor(
        @Inject(NB_AUTH_OPTIONS) protected options = {},
        protected fb: FormBuilder,
        protected usersPasswordService: UsersPasswordService,
        protected toastrService: NbToastrService,
        private userData: UserData,
        protected location: Location) {
    }

    ngOnInit(): void {
        this.initPasswordForm();
        this.getCurrentUser();

    }

    getCurrentUser(): void {
        this.userData.refreshInfoCurrentUser().pipe(takeUntil(this.unsubscribe$)).subscribe(user => {
            console.log()
            this.hasPasswordReset = user.hasResetPassword
            console.log("hasPasswordReset", this.hasPasswordReset)
        })
    }

    initPasswordForm() {
        const passwordValidators = [
            Validators.required,
            Validators.minLength(this.minLength),
            Validators.maxLength(this.maxLength),
        ];

        this.passwordForm = this.fb.group({
            currentPassword: this.fb.control('', [...passwordValidators]),
            newPassword: this.fb.control('', [...passwordValidators]),
            confirmPassword: this.fb.control('', [...passwordValidators]),
        });
    }

    updatePassword() {
        this.submitted = true;
        this.hasPasswordError = false;
        const password: Password = this.passwordForm.value;
        this.usersPasswordService.update(password).subscribe(() => {
            this.getCurrentUser();
            this.submitted = false;
            this.passwordForm.reset();
            this.toastrService.success('', '¡Registro exitoso!', {
                icon: '',
            });
        }, () => {
            this.submitted = false;
            this.hasPasswordError = true;
        });
    }

    getConfigValue(key: string): any {
        return getDeepFromObject(this.options, key, null);
    }

    back($event: MouseEvent) {
        $event.preventDefault();
        this.location.back();
    }
}
