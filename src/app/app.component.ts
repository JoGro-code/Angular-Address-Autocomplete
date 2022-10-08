import { Component, Input } from '@angular/core';
//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>GooglePlaces</h1>
      <input
        ngx-google-places-autocomplete
        #placesRef="ngx-places"
        (onAddressChange)="handleAddressChange($event)"
      />
      <p></p>
      <button class="btn btn-primary" (click)="onSearch()">Suchen</button>
    </div>
  `,
})
export class AppComponent {
  title = 'auto-complete';

  onSearch() {
    alert('suche!');
  }
  public handleAddressChange(address: any) {
    alert(address);
  }
}
