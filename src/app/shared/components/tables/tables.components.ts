import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './tables.component.html'
})
export class TableComponent {
  @Input() headers: string[] | undefined = [];
  @Input() data: any[] | undefined = [];
}
