import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-sign-in',
    standalone: true,
    imports: [RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, ReactiveFormsModule, NgIf],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

    // isToggled
    isToggled = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        public themeService: CustomizerSettingsService
    ) {
        this.authForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    // Password Hide
    hide = true;

    // Form
    authForm: FormGroup;
    
    onSubmit() {
        if (this.authForm.valid) {
            this.router.navigate(['/']);
        } else {
            console.log('Form is invalid. Please check the fields.');
        }
    }

}