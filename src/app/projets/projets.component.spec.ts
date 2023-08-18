import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarificationComponent } from './projets.component';

describe('TarificationComponent', () => {
  let component: TarificationComponent;
  let fixture: ComponentFixture<TarificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarificationComponent]
    });
    fixture = TestBed.createComponent(TarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
