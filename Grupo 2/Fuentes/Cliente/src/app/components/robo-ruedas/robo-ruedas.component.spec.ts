import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoboRuedasComponent } from './robo-ruedas.component';

describe('RoboRuedasComponent', () => {
  let component: RoboRuedasComponent;
  let fixture: ComponentFixture<RoboRuedasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboRuedasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoboRuedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
