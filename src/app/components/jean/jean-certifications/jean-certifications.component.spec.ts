import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanCertificationsComponent } from './jean-certifications.component';

describe('JeanCertificationsComponent', () => {
  let component: JeanCertificationsComponent;
  let fixture: ComponentFixture<JeanCertificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeanCertificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeanCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
