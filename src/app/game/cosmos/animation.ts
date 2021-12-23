import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeInAnimation: AnimationTriggerMetadata = trigger(
  'fadeInRouteNavigation',
  [
    transition('*<=>*', [
      style({ opacity: 0 }),
      animate('0.4s', style({ opacity: 1 })),
    ]),
  ]
);

export const fadeAnimation: AnimationTriggerMetadata = trigger(
  'fadeInRouteNavigation',
  [
    transition('*<=>*', [
      style({ opacity: 0.6 }),
      animate('0.4s', style({ opacity: 1 })),
    ]),
  ]
);
