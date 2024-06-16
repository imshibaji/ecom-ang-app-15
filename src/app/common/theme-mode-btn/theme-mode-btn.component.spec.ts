import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeModeBtnComponent } from './theme-mode-btn.component';

describe('ThemeModeBtnComponent', () => {
  let component: ThemeModeBtnComponent;
  let fixture: ComponentFixture<ThemeModeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeModeBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeModeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
