import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePlayerComponent } from './online-player.component';

describe('OnlinePlayerComponent', () => {
  let component: OnlinePlayerComponent;
  let fixture: ComponentFixture<OnlinePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
