import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectHereComponent } from './redirect-here.component';

describe('RedirectHereComponent', () => {
  let component: RedirectHereComponent;
  let fixture: ComponentFixture<RedirectHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectHereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
