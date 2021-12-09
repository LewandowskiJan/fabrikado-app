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

// TodoPage;
// WelcomePage;
// CosmosPage;

export const slideInAnimation: AnimationTriggerMetadata = trigger(
  'routeAnimations',
  [
    transition('CosmosPage => TodoPage', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      query(':enter', [style({ left: '100%' })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('300ms ease-out', style({ left: '-100%' }))], {
          optional: true,
        }),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),

    transition('TodoPage => CosmosPage', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      query(':enter', [style({ left: '-100%' })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], {
          optional: true,
        }),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
    transition('WelcomePage => TodoPage', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      query(':enter', [style({ left: '-100%' })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], {
          optional: true,
        }),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),

    transition('TodoPage => WelcomePage', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      query(':enter', [style({ left: '100%' })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('300ms ease-out', style({ left: '-100%' }))], {
          optional: true,
        }),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }),
        ],
        { optional: true }
      ),
      query(':enter', [style({ left: '-100%' })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], {
          optional: true,
        }),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
          optional: true,
        }),
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),
  ]
);
