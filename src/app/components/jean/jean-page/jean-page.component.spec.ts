import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanPageComponent } from './jean-page.component';

describe('JeanPageComponent', () => {
  let component: JeanPageComponent;
  let fixture: ComponentFixture<JeanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
