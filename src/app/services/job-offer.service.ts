import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobOffer } from '../interfaces/job-offer.interface';
import { specialities } from '../utils/specialities';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  constructor(private httpClient: HttpClient) { }

  //ToDo: Récupération de la liste des offres d'emploi depuis le back et retourner un observable de liste d'offre
  getJobOffert():JobOffer[]{
    return [
      {
        id:1,
        salary: 200,
        title: "Agent de sécurité H/F secteur cosmetique",
        startingDate: "12/02/2023",
        contractType: "CDI",
        benefits: "Heure sup, Disponible le week-end",
        workingHours: "Temps plein",
        requireProfile: "Nous recherchons un profil expérimenté",
        learningCenterName: "Secutitas",
        learningCenterImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTXa-FU3iaQCGDsJYhbW7I-8dpAY5B2xpNFOMO5H8rdWB781UHSay9dEsN4tiPy20G2g&usqp=CAU",
        specialities: "Cynophile"
      },
      {
        id:2,
        title: "Agent de sécurité H/F secteur du luxe",
        salary: 200,
        startingDate: "12/02/2023",
        contractType: "CDI",
        benefits: "Heure sup, Disponible le week-end",
        workingHours: "Temps plein",
        requireProfile: "Nous recherchons un profil expérimenté",
        learningCenterName: "BOMSECURITE",
        learningCenterImage: "https://www.luxantgroup.com/wp-content/uploads/2013/12/luxant-group-e1406624116529.jpg",
        specialities: "Surété"
      },
      {
        id:3,
        title: "Agent de sécurité H/F secteur du luxe",
        salary: 200,
        startingDate: "12/02/2023",
        contractType: "CDI",
        benefits: "Heure sup, Disponible le week-end",
        workingHours: "Temps plein",
        requireProfile: "Nous recherchons un profil expérimenté",
        learningCenterName: "BOMSECURITE",
        learningCenterImage: "https://www.luxantgroup.com/wp-content/uploads/2013/12/luxant-group-e1406624116529.jpg",
        specialities: "Surété"
      },
      {
        id:4,
        title: "Agent de sécurité H/F secteur du luxe",
        salary: 200,
        startingDate: "12/02/2023",
        contractType: "CDI",
        benefits: "Heure sup, Disponible le week-end",
        workingHours: "Temps plein",
        requireProfile: "Nous recherchons un profil expérimenté",
        learningCenterName: "Secutitas",
        learningCenterImage: "https://www.luxantgroup.com/wp-content/uploads/2013/12/luxant-group-e1406624116529.jpg",
        specialities: "Aéroportuaire"
      },
      {
        id:5,
        title: "Agent de sécurité H/F secteur du luxe",
        salary: 200,
        startingDate: "12/02/2023",
        contractType: "CDI",
        benefits: "Heure sup, Disponible le week-end",
        workingHours: "Temps partiel",
        requireProfile: "Nous recherchons un profil expérimenté",
        learningCenterName: "Secutitas",
        learningCenterImage: "https://www.luxantgroup.com/wp-content/uploads/2013/12/luxant-group-e1406624116529.jpg",
        specialities: "Aéroportuaire"
      },
      {
        id:6,
        title: "Agent de sécurité H/F secteur du luxe",
        salary: 200,
        startingDate: "12/02/2023",
        contractType: "CDD",
        benefits: "Heure sup, Disponible le week-end",
        workingHours: "Temps plein",
        requireProfile: "Nous recherchons un profil expérimenté",
        learningCenterName: "Secutitas",
        learningCenterImage: "https://www.luxantgroup.com/wp-content/uploads/2013/12/luxant-group-e1406624116529.jpg",
        specialities: "Cynophile"
      }

    ]
  }
}
