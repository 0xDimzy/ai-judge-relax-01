// ai-judge-relax-01 entry (Node 22, standard library only): writes one fixed text,
// one unbroken image — a single leaf held on still water, from first light to
// the next morning — to /output/entry.txt.
// The program runs twice with no network, and both runs must write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'One leaf is on the water. It is yellow, and it is the only one. The pond is so still that the leaf has a twin underneath it, and the two of them do not move. A cloud goes over, and the light changes, and the leaf is gold for a moment, and then it is yellow again. The water is dark at the edges and clear in the middle, and under the leaf there is a stone, and under the stone there is mud, and the mud has been there longer than the pond. The leaf turns, very slowly, a fraction of a circle, as if it were thinking. It does not sink. It does not hurry. The pond holds it the way a hand holds a coin, without closing. Somewhere a bird calls once, and the sound goes across the water and does not disturb it. The leaf is still there. It will be there when the sun goes down, and the pond will keep it, and the night will come, and the leaf will still be there in the morning.',
].join('\n\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
