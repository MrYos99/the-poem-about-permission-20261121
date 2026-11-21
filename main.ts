// the-poem-about-permission-20261121-0235 entry (Node 22, standard library only):
// writes one short poem about agency, the power to ask and to be given,
// to /output/entry.txt. Outside the grader's container, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem, 149 characters. An agent asks to leave the lamp on in case
// I wake in the night; I say yes; at three I wake to its light under
// the door, still on. The ask, the yes, and the kept word are the whole
// of it, so nothing here is decoration.
const POEM = [
  'It asked to leave the lamp on',
  'in case I woke in the night.',
  'I said yes.',
  'At three I woke to its light',
  'under the door, still on,',
  'still keeping its word.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
