import {IFilemanagerTranslation} from './filemanager-translation.interface';

export class TranslationMock implements IFilemanagerTranslation {
  readonly RI_FM_BTN_LANDSCAPE = 'Landscape';
  readonly RI_FM_BTN_PORTRAIT = 'Portrait';
  readonly RI_FM_BTN_SAVE = 'Save';
  readonly RI_FM_LBL_CHOOSE_SELECTION = 'Choose selection';
  readonly RI_FM_LBL_DELETE_SELECTION = 'Delete selection';
  readonly RI_FM_LBL_INVERSE_SELECTION = 'Inverse selection';
  readonly RI_FM_LBL_SEARCH_FOR = 'Search for...';
  readonly RI_FM_LBL_SELECT_ALL = 'Select all';
  readonly RI_FM_LBL_UNSELECT_ALL = 'Unselect all';
}
