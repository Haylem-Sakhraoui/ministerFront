import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../../model/claim';
import { ClaimService } from '../../Services/Claim/claim.service';
import { ClaimRequest } from '../../model/claimRequest';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  claims: Claim[] = []; // Initialize claims as an empty array

  claimRequest: ClaimRequest = {}; // Initialize claimRequest object

  constructor(private claimService: ClaimService) {}

  ngOnInit(): void {
    this.loadClaims();
  }

  loadClaims(): void {
    this.claimService.getAllClaims().subscribe(
      (data: Claim[]) => {
        this.claims = data;
      },
      (error) => {
        console.error('Error fetching claims', error);
      }
    );
  }

  addClaim(): void {
    this.claimService.addClaim(this.claimRequest).subscribe(
      (newClaim: Claim) => {
        console.log('New Claim added:', newClaim);
        // Optionally, reload claims after adding a new one
        this.loadClaims();
      },
      (error) => {
        console.error('Error adding claim:', error);
        // Handle error as needed
      }
    );
  }

  deleteClaim(id: number): void {
    this.claimService.deleteClaim(id).subscribe(
      () => {
        console.log('Claim deleted successfully');
        // Optionally, reload claims after deletion
        this.loadClaims();
      },
      (error) => {
        console.error('Error deleting claim:', error);
        // Handle error as needed
      }
    );
  }
}
