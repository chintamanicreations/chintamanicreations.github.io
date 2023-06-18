import { Component } from '@angular/core';
import { HighlightsComponent } from '../highlights/highlights.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  highlights: Highlight[] = [{
    highlight: 'Creativity',
    description: " Ignite your brand's creativity with our innovative design studio. Our talented team pushes boundaries, delivering captivating and unique designs that differentiate your brand in a competitive landscape. Unleash your brand's potential today!"}, {
    highlight: 'Priortize Your Vision',
    description: "We prioritize your goals, actively listen, and collaborate to bring your vision to life. With effective communication, we create impactful designs that deeply resonate with your audience, helping you achieve your objectives. Experience the power of our client-centric approach."
  }, {
    highlight: 'Attention to Detail and Quality',
    description: "We prioritize quality, ensuring every design detail is meticulously crafted. Our dedicated team and commitment to excellence guarantee exceptional designs that surpass your expectations, leaving a lasting impression on your audience."}, {
    highlight: 'On Time Completion',
    description: " Experience the power of on-time delivery. Our graphic design studio is committed to meeting deadlines with precision and maintaining exceptional quality. With our efficient workflows and dedicated team, we guarantee that your projects will be delivered on schedule"},
  ];

  isMobile : boolean = (window.screen.width < 430); 
}


class Highlight {
  highlight: string | undefined;
  description: string | undefined;
}