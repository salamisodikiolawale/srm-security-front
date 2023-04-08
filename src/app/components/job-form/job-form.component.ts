import { Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobOffer } from 'src/app/interfaces/job-offer.interface';
import { JobOfferService } from 'src/app/services/job-offer.service';
import User from 'src/auth/interfaces/user.interface';
import { UserService } from 'src/auth/services/user.service';
import { tap } from 'rxjs/operators';
import { JobOfferError } from 'src/app/interfaces/errors/job-offer-error.interface';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})

export class JobFormComponent implements OnInit{
  
  form!: FormGroup<any>;
  lastJobCreated!:JobOffer|null;
  currentUser!: User|null;

  errorOblect:JobOfferError = {
    title: '',
    salary: '',
    startingDate: '',
    contractType: '',
    description: '',
    benefits: '',
    workingHours: '',
    requireProfile: '',
    image:''
  }
  
  constructor(private jobservice: JobOfferService, 
    private toastr: ToastrService,
    private router:Router,
    private userService: UserService){}
  
  ngOnInit() {
    
    this.form = this.jobservice.buildCreateForm();
    this.userService.getCurrentUser().subscribe(user => this.currentUser = user);
  }

  submitForm() {

    this.form.get('centerId')?.patchValue(this.currentUser?.currentUserDatas?._id)
    this.jobservice.createJob(this.form).subscribe({
      
      next: (job:JobOffer|null) => { 

        this.lastJobCreated = job
        this.toastr.success('La création de l\'offre à été un succès!');
        this.router.navigate(['/dashbord']);
      },
      complete: () => {},
      error: (error) => {
        console.log(error.error.errors)
        const er = JSON.stringify(error.error.errors);
        if(er.includes("title")){
          // this.errorOblect.title = 'Le titre de l\'offre est obligatoire'
          this.toastr.error('Le titre de l\'offre est obligatoire');
        }
        if(er.includes("benefits")){
          // this.errorOblect.benefits = 'Le titre de l\'offre est obligatoire'
          this.toastr.error('Le titre de l\'offre est obligatoire');
        }
        if(er.includes("contractType")){
          // this.errorOblect.contractType = 'Le contrat de l\'offre est obligatoire'
          this.toastr.error('Le contrat de l\'offre est obligatoire');
        }
        if(er.includes("description")){
          // this.errorOblect.description = 'Le description de l\'offre est obligatoire'
          this.toastr.error('Le description de l\'offre est obligatoire');
        }
        if(er.includes("requireProfile")){
          // this.errorOblect.requireProfile = 'Le niveau de l\'offre est obligatoire'
          this.toastr.error('Le niveau de l\'offre est obligatoire');
        }
        if(er.includes("salary")){
          // this.errorOblect.salary = 'Le salaire de l\'offre est obligatoire'
          this.toastr.error('Le salaire de l\'offre est obligatoire');
        }
        if(er.includes("startingDate")){
          // this.errorOblect.startingDate = 'La date est obligatoire'
          this.toastr.error('La date est obligatoire');
        }
        if(er.includes("workingHours")){
          // this.errorOblect.workingHours = 'L\' heure de l\'offre est obligatoire'
          this.toastr.error('L\' heure de l\'offre est obligatoire');
        }
        this.toastr.error('Veuillez renseigner les champs obligatoires');
      }
    });
  }

}
