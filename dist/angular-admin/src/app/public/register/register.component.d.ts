import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
export declare class RegisterComponent implements OnInit {
    private router;
    private authService;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
    constructor(router: Router, authService: AuthService);
    ngOnInit(): void;
    submit(): void;
}
