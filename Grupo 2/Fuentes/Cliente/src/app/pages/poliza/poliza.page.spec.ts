import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolizaPage } from './poliza.page';

describe('PolizaPage', () => {
  let component: PolizaPage;
  let fixture: ComponentFixture<PolizaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolizaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
