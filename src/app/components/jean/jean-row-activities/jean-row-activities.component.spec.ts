import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanRowActivitiesComponent } from './jean-row-activities.component';

describe('JeanRowActivitiesComponent', () => {
  let component: JeanRowActivitiesComponent;
  let fixture: ComponentFixture<JeanRowActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeanRowActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeanRowActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
