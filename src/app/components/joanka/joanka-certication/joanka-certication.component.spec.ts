import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoankaCerticationComponent } from './joanka-certication.component';

describe('JoankaCerticationComponent', () => {
  let component: JoankaCerticationComponent;
  let fixture: ComponentFixture<JoankaCerticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoankaCerticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoankaCerticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
