import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoguerComponent } from './moguer.component';

describe('MoguerComponent', () => {
  let component: MoguerComponent;
  let fixture: ComponentFixture<MoguerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoguerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
