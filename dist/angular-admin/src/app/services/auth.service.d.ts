import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class AuthService {
    protected http: HttpClient;
    constructor(http: HttpClient);
    login(data: any): Observable<any>;
    register(data: any): Observable<any>;
}
