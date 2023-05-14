import { Component } from '@angular/core';
import {Description} from "../../models/description";
import {DescriptionService} from "../../services/description.service";

@Component({
  selector: 'app-add-description',
  templateUrl: './add-description.component.html',
  styleUrls: ['./add-description.component.css']
})
export class AddDescriptionComponent {


  description: Description = {
    title: '',
    description: ''
  };
  submitted = false;

  constructor(private descriptionService: DescriptionService) { }

  // saving Description
  saveDescription(): void {
    const data = {
      title: this.description.title,
      description: this.description.description
    };

    this.descriptionService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newDescription(): void {
    this.submitted = false;
    this.description = {
      title: '',
      description: '',
    };
  }

}
