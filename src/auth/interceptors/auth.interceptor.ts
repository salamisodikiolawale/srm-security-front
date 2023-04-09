import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("PASS");
       
        const token = localStorage.getItem('linking-jwt');
        if( token ) {
            
            //Cloner la requête sortant
            const authReq = req.clone({
                headers: req.headers.set('authorization', token)
            });
            return next.handle(authReq);
        } else {

            return next.handle(req);
        }
    }
}
