import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
    selector: 'app-clients',
    templateUrl: './client.html',
    styleUrls: ['./client.component.css'],
    standalone: false
})
export class ClientComponent {
  clients: any[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients()
      .subscribe(data => {
        this.clients = data;
      });
  }
}
