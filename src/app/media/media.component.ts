import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent implements OnInit{

	devHoursAverage = 0;
	proxySizeAverage = 0;

	constructor(private MediaService : MediaService) { }

	ngOnInit(): void {

		this.MediaService.getDevHours().subscribe(data => { 
			this.devHoursAverage = this.MediaService.calcularMedia(data);
		});

		this.MediaService.getProxySize().subscribe(data => {
			this.proxySizeAverage = this.MediaService.calcularMedia(data);
		});
	}
}
