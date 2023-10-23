import { TestBed } from '@angular/core/testing';
import { MediaService } from './media.service';
import { HttpClientModule } from '@angular/common/http';

describe('MediaService', () => {
	
	let service: MediaService;

	beforeEach(() => {

		TestBed.configureTestingModule({
			imports: [HttpClientModule],
		});
		service = TestBed.inject(MediaService);
	});

	it('Should be created', () => {

		expect(service).toBeTruthy();
	});
});


