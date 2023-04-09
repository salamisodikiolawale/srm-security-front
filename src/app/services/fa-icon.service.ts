import { Injectable } from '@angular/core';
import {  faInbox, faPen, faRemove} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';




@Injectable({
  providedIn: 'root'
})
export class FaIconService {

  constructor() { }

  getIconList() {
    return {
      facebook: faFacebook,
      twitter: faTwitter,
      instagram: faInstagram,
      inbox: faInbox,
      google: faGoogle,
      linkedin: faLinkedin,
      pen: faPen,
      remove: faRemove,

    };
  }

}
