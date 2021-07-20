import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoSiniestroPage } from './nuevo-siniestro.page';

describe('NuevoSiniestroPage', () => {
  let component: NuevoSiniestroPage;
  let fixture: ComponentFixture<NuevoSiniestroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoSiniestroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoSiniestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
