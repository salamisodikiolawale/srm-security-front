import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Learning } from '../interfaces/learning.interface';
import { specialities } from '../utils/specialities';



@Injectable({
  providedIn: 'root'
})
export class LearningService {

  constructor(private httpClient: HttpClient) { }
  getLearning():Learning[]{
    return [
      {
        id:1,
        title:"Formation ",
        description: "description",
        type: "type",
        attribute: "attribute",
        specialities:  "Cynophile",
        module: "module",
        learningCenterName: "Secutitas",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTXa-FU3iaQCGDsJYhbW7I-8dpAY5B2xpNFOMO5H8rdWB781UHSay9dEsN4tiPy20G2g&usqp=CAU"
      },
      {
        id:2,
        title:"Formation ",
        description: "description",
        type: "type",
        attribute: "attribute",
        specialities:  "Sécurité",
        module: "module",
        learningCenterName: "Secutitas",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTXa-FU3iaQCGDsJYhbW7I-8dpAY5B2xpNFOMO5H8rdWB781UHSay9dEsN4tiPy20G2g&usqp=CAU"
      },
      {
        id:3,
        title:"Formation ",
        description: "description",
        type: "type",
        attribute: "attribute",
        specialities:  "Synotechnie",
        module: "module",
        learningCenterName: "Secutitas",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTXa-FU3iaQCGDsJYhbW7I-8dpAY5B2xpNFOMO5H8rdWB781UHSay9dEsN4tiPy20G2g&usqp=CAU"
      },
      {
        id:4,
        title:"Formation ",
        description: "description",
        type: "type",
        attribute: "attribute",
        specialities:  "Aéroportuaire",
        module: "module",
        learningCenterName: "Secutitas",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTXa-FU3iaQCGDsJYhbW7I-8dpAY5B2xpNFOMO5H8rdWB781UHSay9dEsN4tiPy20G2g&usqp=CAU"
      },
      {
        id:5,
        title:"Formation ",
        description: "description",
        type: "type",
        attribute: "attribute",
        specialities:  "Secourisme",
        module: "module",
        learningCenterName: "Secutitas",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTXa-FU3iaQCGDsJYhbW7I-8dpAY5B2xpNFOMO5H8rdWB781UHSay9dEsN4tiPy20G2g&usqp=CAU"
      },
      {
        id:6,
        title:"Formation ",
        description: "description",
        type: "type",
        attribute: "attribute",
        specialities:  "Incendie",
        module: "module",
        learningCenterName: "Secutitas",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTXa-FU3iaQCGDsJYhbW7I-8dpAY5B2xpNFOMO5H8rdWB781UHSay9dEsN4tiPy20G2g&usqp=CAU"
      }
    ]
  }
}
