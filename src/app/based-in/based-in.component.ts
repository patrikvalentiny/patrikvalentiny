import { Component } from '@angular/core';

@Component({
  selector: 'app-based-in',
  template: `
      <div class="flex flex-col w-full h-full p-10 bg-base-200 rounded-3xl gap-6 justify-center">
          <p class="text-5xl text-left font-normal font-sans text-balance">
              Based in <br/> <span class="text-orange-600">Esbjerg, <br/> Denmark</span> <br/><span class="font-light text-base-content/50">GMT+1</span><br/>
          </p>
      </div>
  `,
  styleUrl: './based-in.component.css'
})
export class BasedInComponent {

}
