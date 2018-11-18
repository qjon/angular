import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchFilterService } from '../../services/searchFilter.service';
export declare class SearchFileComponent implements OnInit {
    private searchFilterService;
    searchField: FormControl;
    constructor(searchFilterService: SearchFilterService);
    ngOnInit(): void;
}
