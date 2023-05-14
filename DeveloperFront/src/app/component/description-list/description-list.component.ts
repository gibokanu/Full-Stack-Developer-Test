import { Component } from '@angular/core';
import {Description} from "../../models/description";
import {DescriptionService} from "../../services/description.service";

@Component({
  selector: 'app-description-list',
  templateUrl: './description-list.component.html',
  styleUrls: ['./description-list.component.css']
})
export class DescriptionListComponent {

  description?: Description[];
  currentDescription: {} = {};
  currentIndex = -1;
  title = '';

  constructor(private descriptionService: DescriptionService) { }

  ngOnInit(): void {
    this.retrieveDescription();
  }

  retrieveDescription(): void {
    this.descriptionService.getAll()
      .subscribe({
        next: (data) => {
          this.description = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveDescription();
    this.currentDescription = {};
    this.currentIndex = -1;
  }

  setActiveDescription(description: Description, index: number): void {
    this.currentDescription = description;
    this.currentIndex = index;
  }

  // Removing All Description
  removeAllDescription(): void {
    this.descriptionService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  // Search Title by description
  searchTitle(): void {
    this.currentDescription = {};
    this.currentIndex = -1;

    this.descriptionService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.description = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
