import { Component } from '@angular/core';

@Component({
  selector: 'app-get-in-touch',
  template: `
      <div class="flex flex-col w-full h-full p-10 bg-base-200 rounded-3xl gap-6 justify-center">

          <p class="text-5xl text-center font-normal font-sans text-balance">
              Have a project in mind ?
          </p>
          <button class="btn btn-primary btn-lg bg-orange-600 rounded-full text-3xl">Get in touch</button>
      </div>
  `,
  styleUrl: './get-in-touch.component.css'
})
export class GetInTouchComponent {

}
