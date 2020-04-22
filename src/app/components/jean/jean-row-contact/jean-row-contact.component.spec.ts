import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanRowContactComponent } from './jean-row-contact.component';

describe('JeanRowContactComponent', () => {
  let component: JeanRowContactComponent;
  let fixture: ComponentFixture<JeanRowContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeanRowContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeanRowContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
