import {
  animate,
  animateChild,
  AnimationTriggerMetadata,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation: AnimationTriggerMetadata = trigger(
  'routeAnimations',
  [
    // transition('Login => Register', [
    //   style({ position: 'relative', height: '100%', overflow: 'hidden' }),
    //   query(
    //     ':enter, :leave',
    //     [
    //       style({
    //         position: 'absolute',
    //         top: 0,
    //         left: 0,
    //         width: '100%',
    //         height: '100%',
    //       }),
    //     ],
    //     { optional: true }
    //   ),
    //   query(
    //     ':enter',
    //     [style({ left: '100%', height: '100%', overflow: 'hidden' })],
    //     {
    //       optional: true,
    //     }
    //   ),
    //   query(':leave', animateChild(), { optional: true }),
    //   group([
    //     query(
    //       ':leave',
    //       [
    //         animate(
    //           '300ms ease-out',
    //           style({ left: '-100%', height: '100%', overflow: 'hidden' })
    //         ),
    //       ],
    //       {
    //         optional: true,
    //       }
    //     ),
    //     query(
    //       ':enter',
    //       [
    //         animate(
    //           '300ms ease-out',
    //           style({ left: '0%', height: '100%', overflow: 'hidden' })
    //         ),
    //       ],
    //       {
    //         optional: true,
    //       }
    //     ),
    //   ]),
    //   query(':enter', animateChild(), { optional: true }),
    // ]),

    // transition('Register => Login', [
    //   style({ position: 'relative', height: '100%', overflow: 'hidden' }),
    //   query(
    //     ':enter, :leave',
    //     [
    //       style({
    //         position: 'absolute',
    //         top: 0,
    //         left: 0,
    //         width: '100%',
    //         height: '100%',
    //         overflow: 'hidden',
    //       }),
    //     ],
    //     { optional: true }
    //   ),
    //   query(
    //     ':enter',
    //     [style({ left: '-100%', height: '100%', overflow: 'hidden' })],
    //     {
    //       optional: true,
    //     }
    //   ),
    //   query(':leave', animateChild(), { optional: true }),
    //   group([
    //     query(
    //       ':leave',
    //       [
    //         animate(
    //           '300ms ease-out',
    //           style({ left: '100%', height: '100%', overflow: 'hidden' })
    //         ),
    //       ],
    //       {
    //         optional: true,
    //       }
    //     ),
    //     query(
    //       ':enter',
    //       [
    //         animate(
    //           '300ms ease-out',
    //           style({ left: '0%', height: '100%', overflow: 'hidden' })
    //         ),
    //       ],
    //       {
    //         optional: true,
    //       }
    //     ),
    //   ]),
    //   query(':enter', animateChild(), { optional: true }),
    // ]),
    transition('* <=> *', [
      style({ position: 'relative', overflow: 'hidden' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }),
        ],
        { optional: true }
      ),
      query(':enter', [style({ top: '100vh' })], {
        optional: true,
      }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('500ms ease-out', style({ top: '100vh' }))], {
          optional: true,
        }),
        query(':enter', [animate('500ms 500ms ease-out', style({ top: 0 }))], {
          optional: true,
        }),
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
  ]
);
