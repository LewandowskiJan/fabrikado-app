import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Source } from 'src/app/models/source';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss'],
})
export class ResourceComponent implements OnInit {
  public data$: Observable<Source> | undefined;

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.fetchSources();
    this.data$ = this.socketService.onFetchSources();
  }
}
