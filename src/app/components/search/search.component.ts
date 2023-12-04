import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm: string = '';

  constructor(private searchService: SearchService) {}

  onSearch(): void {
    this.searchService.setSearchTerm(this.searchTerm);
  }

  onInputChange(): void {
    this.searchService.setSearchTerm(this.searchTerm);
  }
}
