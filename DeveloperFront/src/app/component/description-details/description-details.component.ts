import {Component, Input} from '@angular/core';
import {Description} from "../../models/description";
import {DescriptionService} from "../../services/description.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-description-details',
  templateUrl: './description-details.component.html',
  styleUrls: ['./description-details.component.css']
})
export class DescriptionDetailsComponent {


  @Input() viewMode = false;

  @Input() description: Description = {
    title: '',
    description: ''
  };

  message = '';


  constructor(
    private descriptionService: DescriptionService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getDescription(this.route.snapshot.params["id"]);
    }
  }

  // getting Description
  getDescription(id: string): void {
    this.descriptionService.get(id)
      .subscribe({
        next: (data) => {
          this.description = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // updating Description
  updateDescription(): void {
    this.message = '';

    this.descriptionService.update(this.description.id, this.description)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This description was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  // deleting Description
  deleteDescription(): void {
    this.descriptionService.delete(this.description.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/description']);
        },
        error: (e) => console.error(e)
      });
  }


}
