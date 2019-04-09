import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  users: User[];
  name: string;
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),

  });
  constructor(private userservice: UserService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.user = {
      id: 0,
      firstName: this.profileForm.get('firstName').value,
      lastName: this.profileForm.get('lastName').value,
      email: this.profileForm.get('email').value,
    };
    this.userservice.addUser(this.user).subscribe(op => this.users = op);
  }

}
