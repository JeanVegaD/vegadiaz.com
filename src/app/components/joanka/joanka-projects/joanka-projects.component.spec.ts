import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoankaProjectsComponent } from './joanka-projects.component';

describe('JoankaProjectsComponent', () => {
  let component: JoankaProjectsComponent;
  let fixture: ComponentFixture<JoankaProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoankaProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoankaProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
