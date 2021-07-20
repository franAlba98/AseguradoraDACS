import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarSiniestroPage } from './editar-siniestro.page';

describe('EditarSiniestroPage', () => {
  let component: EditarSiniestroPage;
  let fixture: ComponentFixture<EditarSiniestroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSiniestroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarSiniestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
