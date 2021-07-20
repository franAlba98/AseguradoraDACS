import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BandejaEntradaPage } from './bandeja-entrada.page';

describe('BandejaEntradaPage', () => {
  let component: BandejaEntradaPage;
  let fixture: ComponentFixture<BandejaEntradaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandejaEntradaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BandejaEntradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
