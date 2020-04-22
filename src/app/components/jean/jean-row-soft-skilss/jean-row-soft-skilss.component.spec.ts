import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanRowSoftSkilssComponent } from './jean-row-soft-skilss.component';

describe('JeanRowSoftSkilssComponent', () => {
  let component: JeanRowSoftSkilssComponent;
  let fixture: ComponentFixture<JeanRowSoftSkilssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeanRowSoftSkilssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeanRowSoftSkilssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
