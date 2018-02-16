import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuickAccessComponent } from './card-quick-access.component';

describe('CardQuickAccessComponent', () => {
  let component: CardQuickAccessComponent;
  let fixture: ComponentFixture<CardQuickAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardQuickAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardQuickAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
