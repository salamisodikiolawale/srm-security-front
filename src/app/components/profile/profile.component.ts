import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import User from 'src/auth/interfaces/user.interface';
import { UserService } from 'src/auth/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  currentUser$!: Observable<User|null>;

  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    
    this.currentUser$ = this.userService.getCurrentUser();
  }
}
