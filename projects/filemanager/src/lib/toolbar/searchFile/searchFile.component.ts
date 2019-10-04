import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SearchFilterService} from '../../services/searchFilter.service';
import {debounceTime} from 'rxjs/operators';
import {FILEMANAGER_TRANSLATION_TOKEN} from '../../services/filemanager-translation.token';
import {IFilemanagerTranslation} from '../../interfaces/filemanager-translation.interface';

@Component({
  selector: 'ri-search-file',
  templateUrl: './searchFile.component.html'
})

export class SearchFileComponent implements OnInit {

  public searchField = new FormControl();

  constructor(private searchFilterService: SearchFilterService,
              @Inject(FILEMANAGER_TRANSLATION_TOKEN) public filemanagerTranslations: IFilemanagerTranslation) {
  }

  ngOnInit() {
    this.searchField.valueChanges
      .pipe(
        debounceTime(250)
      )
      .subscribe((value: string) => this.searchFilterService.setValue(value));
  }
}
