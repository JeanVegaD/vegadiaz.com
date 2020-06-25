import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoankaEducationComponent } from './joanka-education.component';

describe('JoankaEducationComponent', () => {
  let component: JoankaEducationComponent;
  let fixture: ComponentFixture<JoankaEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoankaEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoankaEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
