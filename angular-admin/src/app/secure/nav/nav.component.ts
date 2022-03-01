import { Component, OnInit, Input } from '@angular/core';
import { Auth } from 'src/app/classes/auth';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input('user') user!: User;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    Auth.userEmitter.subscribe(user => this.user = user);
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      console.log('succes');
    })
  }
}
