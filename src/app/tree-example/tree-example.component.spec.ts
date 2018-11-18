import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeExampleComponent } from './tree-example.component';

describe('TreeExampleComponent', () => {
  let component: TreeExampleComponent;
  let fixture: ComponentFixture<TreeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
