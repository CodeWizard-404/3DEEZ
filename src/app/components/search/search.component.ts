import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder, private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });
  }

  search(): void {
    const searchTerm = this.searchForm.get('searchTerm')?.value;
    console.log('Search Term:', searchTerm);
    this.searchService.setSearchTerm(searchTerm);
  }
}
