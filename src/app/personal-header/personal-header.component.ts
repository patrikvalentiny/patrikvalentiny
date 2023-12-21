import {Component} from '@angular/core';

@Component({
  selector: 'app-personal-header',
  template: `
      <div class="flex flex-col w-full h-fit p-10 bg-base-200 rounded-3xl gap-6">
          <img class="rounded-full" alt="socialIcon" ngSrc="https://avatars.githubusercontent.com/u/92812102?v=4"
               height="100" width="100"/>
          <p class="text-5xl font-light lowercase text-balance">
              <span class="font-bold text-orange-600">Patrik Valentiny,</span> <br/>
              <span class="font-semibold">computer science student,</span>
              <br/>currently developing for Siemens Gamesa.<br/>
          </p>
      </div>
  `,
  styleUrl: './personal-header.component.css'
})
export class PersonalHeaderComponent {

}
