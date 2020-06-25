import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoankaPageComponent } from './joanka-page.component';

describe('JoankaPageComponent', () => {
  let component: JoankaPageComponent;
  let fixture: ComponentFixture<JoankaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoankaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoankaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
