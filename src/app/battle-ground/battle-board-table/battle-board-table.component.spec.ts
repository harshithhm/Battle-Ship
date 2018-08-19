import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleBoardTableComponent } from './battle-board-table.component';

describe('BattleBoardTableComponent', () => {
  let component: BattleBoardTableComponent;
  let fixture: ComponentFixture<BattleBoardTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleBoardTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleBoardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
