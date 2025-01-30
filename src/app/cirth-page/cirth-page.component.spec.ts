import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirthPageComponent } from './cirth-page.component';

describe('CirthPageComponent', () => {
  let component: CirthPageComponent;
  let fixture: ComponentFixture<CirthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirthPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
