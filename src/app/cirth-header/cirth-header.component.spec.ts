import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirthHeaderComponent } from './cirth-header.component';

describe('CirthHeaderComponent', () => {
  let component: CirthHeaderComponent;
  let fixture: ComponentFixture<CirthHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirthHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
