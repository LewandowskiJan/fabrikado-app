import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const sideContextMenuForSelectionAnimation: AnimationTriggerMetadata =
  trigger('openClose', [
    state(
      'open',
      style({
        left: '0',
      })
    ),
    state(
      'closed',
      style({
        left: '-20vw',
      })
    ),

    transition('* => closed', [animate('0.3s')]),
    transition('* => open', [animate('0.3s')]),
  ]);

export const sideContextMenuForSelectionChangeAnimation: AnimationTriggerMetadata =
  trigger('change', [
    state('change', style({ opacity: 0.9 })),
    transition('* => change', [animate('0.3s')]),
    transition('change => *', [animate('0.3s')]),
  ]);
