import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparetorComponent } from './separetor.component';

describe('SeparetorComponent', () => {
  let component: SeparetorComponent;
  let fixture: ComponentFixture<SeparetorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparetorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
