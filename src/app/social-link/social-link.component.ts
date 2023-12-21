import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-social-link',
  template: `
      <a href="{{link}}" target="_blank">
          <div class="flex flex-row items-center justify-center py-1 px-2 h-12 bg-base-200 w-full rounded-full">
              <img alt="" ngSrc="{{iconLink}}" height="20" width="20"/>
              <p class="ml-2 text-lg font-bold">{{ title }}</p>
          </div>
      </a>
  `,
  styleUrl: './social-link.component.css'
})
export class SocialLinkComponent {
  @Input() iconLink:string = "";
  @Input() link:string = "";
  @Input() title:string = "";

}
