import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanBannerPrincipalComponent } from './jean-banner-principal.component';

describe('JeanBannerPrincipalComponent', () => {
  let component: JeanBannerPrincipalComponent;
  let fixture: ComponentFixture<JeanBannerPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeanBannerPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeanBannerPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
