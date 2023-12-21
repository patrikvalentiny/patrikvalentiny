import { Component } from '@angular/core';

@Component({
  selector: 'app-social-links-container',
  templateUrl: './social-links-container.component.html',
  styleUrl: './social-links-container.component.css'
})
export class SocialLinksContainerComponent {
  linkedInIconLink: string = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png";
  instagramIconLink: string = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png";
  vimeoIconLink: string = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/vimeo-white-icon.png";
}
