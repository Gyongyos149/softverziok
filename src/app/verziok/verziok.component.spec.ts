import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerziokComponent } from './verziok.component';

describe('VerziokComponent', () => {
  let component: VerziokComponent;
  let fixture: ComponentFixture<VerziokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerziokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerziokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
