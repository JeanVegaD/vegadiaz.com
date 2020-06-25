import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoankaBannerPrincipalComponent } from './joanka-banner-principal.component';

describe('JoankaBannerPrincipalComponent', () => {
  let component: JoankaBannerPrincipalComponent;
  let fixture: ComponentFixture<JoankaBannerPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoankaBannerPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoankaBannerPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
