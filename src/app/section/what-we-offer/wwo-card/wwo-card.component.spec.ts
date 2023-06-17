import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwoCardComponent } from './wwo-card.component';

describe('WwoCardComponent', () => {
  let component: WwoCardComponent;
  let fixture: ComponentFixture<WwoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
