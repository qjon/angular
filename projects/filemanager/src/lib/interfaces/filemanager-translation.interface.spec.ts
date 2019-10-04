import {IFilemanagerTranslation} from './filemanager-translation.interface';

export class TranslationMock implements IFilemanagerTranslation {
  readonly RI_TREE_LBL_ADD_NODE = 'Add data';
  readonly RI_TREE_LBL_EDIT_NODE = 'Edit data';
  readonly RI_TREE_LBL_REMOVE_NODE = 'Delete data';
  readonly RI_TREE_LBL_DROP_ZONE = 'Drop here to move data to root level';
  readonly RI_FM_BTN_LANDSCAPE = 'Landscape';
  readonly RI_FM_BTN_PORTRAIT = 'Portrait';
  readonly RI_FM_BTN_SAVE = 'Save';
  readonly RI_FM_BTN_DELETE_YES = 'Yes';
  readonly RI_FM_BTN_DELETE_NO = 'No';
  readonly RI_FM_LBL_CHOOSE_SELECTION = 'Choose selection';
  readonly RI_FM_LBL_DELETE_SELECTION = 'Delete selection';
  readonly RI_FM_LBL_INVERSE_SELECTION = 'Inverse selection';
  readonly RI_FM_LBL_REMOVE_TITLE = 'Remove file';
  readonly RI_FM_LBL_SEARCH_FOR = 'Search for...';
  readonly RI_FM_LBL_SELECT_ALL = 'Select all';
  readonly RI_FM_LBL_UNSELECT_ALL = 'Unselect all';
  readonly RI_FM_MSG_REMOVE_QUESTION = 'You are try to delete ${FILENAME}. Are you sure?';
}
