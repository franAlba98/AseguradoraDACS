import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoturaCristalesComponent } from './rotura-cristales.component';

describe('RoturaCristalesComponent', () => {
  let component: RoturaCristalesComponent;
  let fixture: ComponentFixture<RoturaCristalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoturaCristalesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoturaCristalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
