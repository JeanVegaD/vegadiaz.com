import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanRowProjectsComponent } from './jean-row-projects.component';

describe('JeanRowProjectsComponent', () => {
  let component: JeanRowProjectsComponent;
  let fixture: ComponentFixture<JeanRowProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeanRowProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeanRowProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
