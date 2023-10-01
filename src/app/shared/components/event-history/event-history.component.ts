import { Component, Input } from '@angular/core';
import { EventInfo } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-event-history',
  templateUrl: './event-history.component.html',
  styleUrls: ['./event-history.component.scss']
})
export class EventHistoryComponent {
  @Input() eventHistory: EventInfo[] | undefined = [];

  constructor() { }
}
