import { Component, Input } from '@angular/core';
//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
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
