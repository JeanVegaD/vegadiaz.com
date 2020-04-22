import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanRowAcademicActivitiesComponent } from './jean-row-academic-activities.component';

describe('JeanRowAcademicActivitiesComponent', () => {
  let component: JeanRowAcademicActivitiesComponent;
  let fixture: ComponentFixture<JeanRowAcademicActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeanRowAcademicActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeanRowAcademicActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
