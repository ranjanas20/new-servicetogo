import { Injectable, Inject } from "@angular/core";
import { Environment } from "./environment.service";

import {HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import { CarServiceRequestTrackerModel } from "./careervicerequesttracker.model";
import { ResponseModel } from "./response.model";

@Injectable()
export class RequestCrudService{
    constructor(private env:Environment, private http: HttpClient ){ }
    newRequest(request: CarServiceRequestTrackerModel){
        const cheaders = new HttpHeaders({'Content-Type':'application/json'});
       return  this.http.post<ResponseModel>(this.env.REST_URL+'/requestForm',
                                request,
                                {headers: cheaders}
                                );
       
    }
    updateRequest(request: CarServiceRequestTrackerModel){
        const cheaders = new HttpHeaders({'Content-Type':'application/json'});
       return  this.http.put<ResponseModel>(this.env.REST_URL+'/requestForm/'+request.requestId,
                                request,
                                {headers: cheaders}
                                );
       
    }
    getRequest(requestId: number){
       return  this.http.get<ResponseModel>(this.env.REST_URL+'/request/'+requestId)
            .map(
                    (response: ResponseModel)=>{
                        const data = response.data;
                        return data;
                    }
                ).catch((error: Response)=>{
                    console.log(error);
                    return Observable.throw("Something went wrong");
                    
                });;
       
    }
}