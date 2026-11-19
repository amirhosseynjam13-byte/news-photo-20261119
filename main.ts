// News-image entry for make.fun's 19 November 2026 daily contest.
// The entry is the poster in entry.png beside this file: a front page that
// sums up the day's world news. The program's whole job is to deliver those
// exact bytes to the grader, so it copies the file, unchanged, to the output
// directory. Node 22, standard library only, no network, deterministic:
// run it any number of times and the output is byte for byte the same.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for the grader's /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
