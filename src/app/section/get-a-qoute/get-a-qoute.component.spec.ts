import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAQouteComponent } from './get-a-qoute.component';

describe('GetAQouteComponent', () => {
  let component: GetAQouteComponent;
  let fixture: ComponentFixture<GetAQouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAQouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAQouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
