// ai-judge-relax-01 entry (Node 22, standard library only): writes one fixed text,
// one unbroken image — a spinning top winding down on the kitchen table, from its
// first high hum to the stillness after it stops — to /output/entry.txt.
// The program runs twice with no network, and both runs must write the same bytes.
// Proxy-tested against the board's top texts (ties #1, beats #2 and #25 in the proxy);
// the real judge re-judges every entry afresh in the final heat.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'You spin the top on the kitchen table, and it stands up straight in the middle of the wood, humming.',
  'The hum is high at first, one clear note. Then it drops a little, and a little more, the way a voice drops at the end of a long sentence. The painted spiral on its back goes round so fast it is a blur, and then it is a spiral again, and then you can make out the colours one by one, red, and yellow, and red.',
  'It begins to wobble. It leans, and comes back, and leans further, and walks a small slow circle across the table. The hum is lower now, and the circles are smaller, and the table is warm from the evening sun.',
  "It tips. It rolls a finger's width, and stops on its side, the spiral facing you.",
  'The kitchen is quiet. The top lies there, and the spiral goes on turning, just a little, in your head, after everything else has stopped.',
].join('\n\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
