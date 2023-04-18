import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobOffer } from '../interfaces/job-offer.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { environment } from 'src/environment/environment';
import User from 'src/auth/interfaces/user.interface';
import { UserService } from 'src/auth/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {
  
  lastJobCreated:BehaviorSubject<JobOffer|null> = new BehaviorSubject<JobOffer|null>(null);
  currentUser$!: Observable<User|null>;

  constructor(private http: HttpClient, private fb:FormBuilder, private userService: UserService) { }


  //ToDo: Récupération de la liste des offres d'emploi depuis le back et retourner un observable de liste d'offre
  // {
  //   id:1,
  //   salary: 200,
  //   title: "Agent de sécurité H/F secteur cosmetique",
  //   startingDate: "12/02/2023",
  //   contractType: "CDI",
  //   benefits: "Heure sup, Disponible le week-end",
  //   workingHours: "Temps plein",
  //   requireProfile: "Nous recherchons un profil expérimenté",
  //   learningCenterName: "Secutitas",
  //   learningCenterImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTXa-FU3iaQCGDsJYhbW7I-8dpAY5B2xpNFOMO5H8rdWB781UHSay9dEsN4tiPy20G2g&usqp=CAU",
  //   specialities: "Cynophile"
  // },

  getJobByCenter(): Observable<JobOffer[]>{
    return this.http.get<JobOffer[]>(`${environment.baseUrl}:${environment.apiPort}/api/jobs/center/jobs`);
  }
  
  getJobsList(): Observable<JobOffer[]>{
    
    return this.http.get<JobOffer[]>(`${environment.baseUrl}:${environment.apiPort}/api/jobs/`);
  }
  
  buildCreateForm(): FormGroup<any> {

    return this.fb.group({
      centerId: ['', Validators.required],
      title: ['', Validators.required],
      salary: ['', Validators.required],
      startingDate: ['', Validators.required],
      contractType: ['', Validators.required],
      description: ['', Validators.required],
      benefits: ['', Validators.required],
      workingHours: ['', Validators.required],
      requireProfile: ['', Validators.required],
      image: [''],
    });
  }

  createJob(form: FormGroup<any>): Observable<JobOffer|null> {

    return this.http.post<any>(`${environment.baseUrl}:${environment.apiPort}/api/jobs/create`, form.value).pipe(

      tap( (job: JobOffer) => {

        this.lastJobCreated.next(job);
      }),
      switchMap( () => {

        return this.lastJobCreated;
      })
    );
  }

  updateJob(job: JobOffer) {

    return this.http.put<any>(`${environment.baseUrl}:${environment.apiPort}/api/jobs/update`, job)
  }

  removeJob(jobId:string):Observable<any>{
    return this.http.delete<any>(`${environment.baseUrl}:${environment.apiPort}/api/jobs/delete/${jobId}`);
  }
}