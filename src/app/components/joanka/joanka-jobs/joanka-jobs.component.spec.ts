import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoankaJobsComponent } from './joanka-jobs.component';

describe('JoankaJobsComponent', () => {
  let component: JoankaJobsComponent;
  let fixture: ComponentFixture<JoankaJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoankaJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoankaJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
