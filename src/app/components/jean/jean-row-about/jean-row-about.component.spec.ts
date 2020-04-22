import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanRowAboutComponent } from './jean-row-about.component';

describe('JeanRowAboutComponent', () => {
  let component: JeanRowAboutComponent;
  let fixture: ComponentFixture<JeanRowAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeanRowAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeanRowAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
