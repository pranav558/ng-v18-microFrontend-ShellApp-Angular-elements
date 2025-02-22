import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

interface Mfe1Details {
  name: string;
  email: string;
}
interface Mfe2Data {
  msg: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  mfe1Details = toSignal(fromEvent<CustomEvent<Mfe1Details>>(window, 'mfe1:reactiveFormData'), {
    initialValue: new CustomEvent<Mfe1Details>('mfe1:reactiveFormData', {
      detail: { name: '', email: '' }
    })
  });
  mfe2Details = toSignal(fromEvent<CustomEvent<Mfe2Data>>(window, 'mfe2:data'), {
    initialValue: new CustomEvent<Mfe2Data>('mfe2:data', { detail : { msg : '' }})
  });
}
