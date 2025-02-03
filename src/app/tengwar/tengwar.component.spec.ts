import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TengwarComponent } from './tengwar.component';

describe('TengwarComponent', () => {
  let component: TengwarComponent;
  let fixture: ComponentFixture<TengwarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TengwarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TengwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
