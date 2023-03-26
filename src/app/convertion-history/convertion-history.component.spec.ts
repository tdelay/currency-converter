import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertionHistoryComponent } from './convertion-history.component';

describe('ConvertionHistoryComponent', () => {
  let component: ConvertionHistoryComponent;
  let fixture: ComponentFixture<ConvertionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertionHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
