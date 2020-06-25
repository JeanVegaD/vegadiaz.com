import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoankaContactComponent } from './joanka-contact.component';

describe('JoankaContactComponent', () => {
  let component: JoankaContactComponent;
  let fixture: ComponentFixture<JoankaContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoankaContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoankaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
