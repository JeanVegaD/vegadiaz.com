import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleRowComponent } from './title-row.component';

describe('TitleRowComponent', () => {
  let component: TitleRowComponent;
  let fixture: ComponentFixture<TitleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
