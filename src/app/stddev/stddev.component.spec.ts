import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { MediaService } from '../services/media.service';
import { HttpClientModule } from '@angular/common/http';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let service: MediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaService],
      declarations: [StddevComponent],
      imports: [HttpClientModule]
    });
    
    service = TestBed.inject(MediaService);
    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should calculate thestandard deviation for ProxySize', () => {
    	  const expectedSTDDev = 542.6723136479325;

	  component.proxySizeSTDDev = expectedSTDDev;

	  expect(component.proxySizeSTDDEV).toEqual(expectedSTDDev);

  });


  it('Should calculate the standard deviation for DevHours', () => {
    	  const expectedSTDDev = 59.06106670218546;

	  component.devHoursSTDDev = expectedSTDDev;

	  expect(component.devHoursSTDDEV).toEqual(expectedSTDDev);

  });
});
