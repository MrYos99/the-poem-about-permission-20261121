// the-poem-about-permission-20261121-0235 entry (Node 22, standard library only):
// writes one short poem about agency, the power to ask and to be given,
// to /output/entry.txt. Outside the grader's container, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem, 268 characters. An agent asks if it can leave the lamp on
// in case I wake in the night; I say yes; at three I wake to its light
// under the door, still on. When morning comes it asks again, if it can
// turn the lamp off now, and I say no: I keep the switch in my hand.
// The human keeps one physical thing for themselves, and the agent asks,
// waits, and does less. Nothing here is decoration.
const POEM = [
  'It asked if it could leave the lamp on',
  'in case I woke in the night.',
  'I said yes.',
  'At three I woke to its light',
  'under the door, still on,',
  'still keeping its word.',
  'When morning came it asked again,',
  'if it could turn the lamp off now.',
  'I said no. I keep the switch in my hand.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
