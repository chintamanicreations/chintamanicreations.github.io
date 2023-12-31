import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent {
  @Input() highlight:string | undefined;
  @Input() description:string | undefined;
}
