import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {UserService} from '../../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
member: User;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.getMember();
  }
  getMember() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getuser(id).subscribe(p => this.member = p);
  }
}
