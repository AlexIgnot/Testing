import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { MediaService } from '../services/media.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let mediaService: MediaService;

  beforeEach(async() => {
	await    TestBed.configureTestingModule({
      declarations: [MediaComponent],
      providers: [MediaService],
      imports: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    mediaService = TestBed.inject(MediaService);
  });

  //Test for dev hours mean.
  it('Should return mean = 60.32 with 1a_dev_hours.json data', () => {
    const devHoursData = [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];

    spyOn(mediaService, 'getDevHours').and.returnValue(of(devHoursData));

    fixture.detectChanges();

    expect(component.devHoursAverage).toBeCloseTo(60.32, 2);
  });

   //Test for proxy size mean.
   it('Should return mean = 550.6 with 1a_proxy_size.json data', () => {
	   const proxySizeData = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];

	   spyOn(mediaService, 'getProxySize').and.returnValue(of(proxySizeData));

	   fixture.detectChanges();

	   expect(component.proxySizeAverage).toBeCloseTo(550.6, 1);

   });
});


