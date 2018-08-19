import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketLauncherComponent } from './rocket-launcher.component';

describe('RocketLauncherComponent', () => {
  let component: RocketLauncherComponent;
  let fixture: ComponentFixture<RocketLauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketLauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
