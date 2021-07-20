import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BandejaSalidaPage } from './bandeja-salida.page';

describe('BandejaSalidaPage', () => {
  let component: BandejaSalidaPage;
  let fixture: ComponentFixture<BandejaSalidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandejaSalidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BandejaSalidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
