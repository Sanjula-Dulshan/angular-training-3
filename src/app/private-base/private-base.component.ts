import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-private-base',
  templateUrl: './private-base.component.html',
  styleUrls: ['./private-base.component.scss'],
})
export class PrivateBaseComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  goToAddStudent(): void {
    this.router.navigate(['add-student'], { relativeTo: this.route });
  }

  goToShowStudent(): void {
    this.router.navigate(['add-student'], { relativeTo: this.route });
  }
  goToEditStudent(): void {
    this.router.navigate(['add-student'], { relativeTo: this.route });
  }
  goToAddCourse(): void {
    this.router.navigate(['add-student'], { relativeTo: this.route });
  }
  goToShowCourse(): void {
    this.router.navigate(['add-student'], { relativeTo: this.route });
  }
  goToEditCourse(): void {
    this.router.navigate(['add-student'], { relativeTo: this.route });
  }
}
