import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { MinisterService } from '../../Services/Minister/minister.service';
import { AuthService } from '../../Services/auth/auth.service';
import { Minister } from '../../model/minister';

@Component({
  selector: 'app-minister',
  templateUrl: './minister.component.html',
  styleUrls: ['./minister.component.css']
})
export class MinisterComponent implements OnInit {

  ministers: Minister[] = [];
  isLoggedIn = false; // Initialize isLoggedIn as boolean

  constructor(private ministerService: MinisterService, private authService: AuthService) { }

  ngOnInit(): void {
    this.checkLoggedIn(); // Check logged in status on component initialization
    this.loadMinisters();
  }

  checkLoggedIn() {
    this.authService.isAuthenticated()
      .pipe(take(1)) // Take only the first emitted value and then complete
      .subscribe((loggedIn: boolean) => {
        this.isLoggedIn = loggedIn; // Assign the value to isLoggedIn
      });
  }

  loadMinisters() {
    if (this.isLoggedIn) {
      this.ministerService.getAllMinisters().subscribe(
        (data: Minister[]) => {
          this.ministers = data;
        },
        (error) => {
          console.log('Error fetching ministers:', error);
        }
      );
    } else {
      console.log('User is not logged in.'); // Optionally handle this case
    }
  }

  }

