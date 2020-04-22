import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnPageComponent } from './turn-page.component';

describe('TurnPageComponent', () => {
  let component: TurnPageComponent;
  let fixture: ComponentFixture<TurnPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
