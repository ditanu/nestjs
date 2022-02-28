import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
export declare class LoginComponent implements OnInit {
    private formBuilder;
    private router;
    private authService;
    form: FormGroup;
    constructor(formBuilder: FormBuilder, router: Router, authService: AuthService);
    ngOnInit(): void;
    submit(): void;
}
