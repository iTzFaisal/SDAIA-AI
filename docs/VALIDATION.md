# Validation

## Domain 4 expansion — 12 October 2026

- `npm run build`: 26 downloadable documents generated from shared content. Domain 4 adds Markdown notes, a separate 24-question paper/key, and three printable HTML equivalents. Existing download URLs remain stable; printable prerequisite links now derive from earlier available domains.
- `npm test`: all 12 unit tests passed. Coverage includes 24 substantial lessons, 168 unique questions, 18 quiz and 24 reserved paper questions per available domain, every option's explanation, original-index grading, absolute deadlines, valid Domain 4 attempts, mixed-domain rejection against each prior domain, legacy Domain 1 attempts, per-version error rates, mature-label coverage, request error budgets, answer-rate denominators, generated paper/key separation, prerequisites, learning sources, and classic offline script wiring.
- Attached Chrome smoke suite: 231 checks passed over local HTTP with no JavaScript page errors. It exercises all six Domain 4 lesson routes, domain-local navigation and rail selection, prerequisites, continued planned status for Domain 5, Domain 4 quiz/bookmark persistence, earlier-domain progress, legacy attempt resumption, isolated timed papers for all four available domains, reload-preserved deadlines/answers/flags, Domain 4 expiry, all 26 downloads, mobile routes at 390px, and printable controls. Prior kit progress was restored.
- Domain 4 desktop/mobile overview and a desktop lesson view were visually reviewed. The full desktop capture had a stitching artifact; a viewport capture and DOM counts confirmed one heading and one study rail. No layout redesign, dependencies, remote assets, runtime imports, or runtime requests were introduced.
- A comparison against the pre-expansion Git content confirmed all 18 Domain 1–3 lessons and all 126 prior questions are unchanged, including IDs, original answer indexes, and explanations. Prior papers and keys remain unchanged; shared glossary/source/release copy regenerated their workbooks.
- General ML operations and SRE references were reviewed on 12 October 2026. The new lessons remain English-only, beginner-oriented, and concept-focused with worked paper examples and no programming exercises. The 45-minute paper default and reliability targets are illustrative choices, not official SDAIA requirements. Official assessment facts were not newly verified; Domains 5–7 and full weighted mocks remain planned.
- The temporary test server was stopped afterward. Changes were not committed, pushed, or deployed as part of this request; use `npm start` for manual review at `http://127.0.0.1:4173/#domain/d4`.

## Domain 3 expansion — 12 October 2026

- `npm run build`: 20 downloadable documents generated from shared content. Domain 3 adds Markdown notes, a separate paper/key, and three printable HTML equivalents. Domain 1–2 download URLs remain stable.
- `npm test`: 12 unit tests passed. Checks cover 18 substantial lessons, 126 unique questions, 18 quiz and 24 reserved paper questions per available domain, option explanations, grading with original indexes, absolute deadlines, isolated exam attempts, legacy Domain 1 attempts, valid Domain 2–3 attempts, retry/deadline arithmetic, generated answer-key separation, prerequisite copy, source links, and classic offline script wiring.
- Attached Chrome smoke suite: 177 checks passed over local HTTP, with no JavaScript page errors. It exercises all six Domain 3 lesson routes, domain-local navigation and rail selection, prerequisites, continued planned status for Domain 4, Domain 3 quiz/bookmark persistence, earlier-domain progress, legacy attempt resumption, isolated timed papers for all three available domains, reload-preserved deadlines/answers/flags, Domain 3 expiry, all 20 downloads, mobile routes at 390px, and printable controls.
- Domain 3 desktop and mobile layouts were visually reviewed, including an additional desktop lesson view. Browser tests restore the kit's prior progress. No dependencies, remote assets, runtime imports, or runtime requests were added.
- Comparison against the pre-expansion Git content confirmed all 12 Domain 1–2 lessons and all 84 existing questions are unchanged, including IDs, original option indexes, and explanations. Shared source/glossary/release updates regenerated the existing workbooks.
- General engineering references were reviewed on 12 October 2026; official assessment facts were not newly verified. The lessons remain English-only and concept-focused, without programming exercises. Domain 3's paper is not a full mock, and its 45-minute default is an unofficial practice choice.
- The temporary local test server was stopped afterward; use `npm start` for manual review. Changes were not committed, pushed, or deployed as part of this request.

## Domain 2 expansion — 12 October 2026

- `npm run build`: 14 downloadable documents generated from shared content, including separate Domain 2 Markdown notes, paper, key, and printable HTML equivalents. Existing Domain 1 download URLs remain unchanged.
- `npm test`: 11 unit tests passed. Coverage includes 12 substantial lessons, 84 unique questions, separate quiz/paper coverage per lesson, per-domain paper selection, rejection of mixed-domain exam attempts, compatibility with saved Domain 1 attempts without domain metadata, arithmetic examples, and separation of generated papers from answer keys.
- Attached Chrome smoke suite: 123 checks passed over local HTTP. In addition to the original behaviors below, it checks every Domain 2 lesson route, domain-local numbering/navigation, the Domain 2 rail selection, continued planned status for Domain 3, Domain 2 bookmarks and quizzes, preserved Domain 1 progress and legacy attempt deadlines/answers, isolated 24-question timed papers for both domains, correct shuffled grading, all 14 downloads, Domain 2 mobile layouts, and printable workbook controls. No JavaScript page errors were reported.
- Domain 2 desktop/mobile screenshots were visually reviewed. The workbook design and offline assets were preserved; no new fonts, libraries, runtime requests, or remote media were introduced.
- A comparison against the pre-expansion Git content confirmed that all six Domain 1 lessons and all 42 Domain 1 questions are unchanged, including persisted IDs and original option indexes.
- The temporary local test server was stopped afterward. Start it with `npm start` for manual review.

## Original release — 11 October 2026

Validated on 11 October 2026 using Node.js 24 and the user's attached Chrome browser.

- `npm run build`: eight downloadable documents generated from the shared content.
- `npm test`: 10 unit tests passed. Checks cover published weights, release availability, lesson and question coverage, unique questions, option explanations, shuffle integrity, grading, deadline handling, saved-attempt validation, calculation cases, and separation of the practice paper from its key.
- Browser smoke suite: 66 checks passed over the local HTTP server. Covers navigation, keyboard skip link, glossary search, lesson bookmarks, saved reading progress, learning feedback, locked checked answers, shuffled grading, hidden timed answers, saved deadlines and flags, expiry submission, downloadable-file availability, responsive layouts at 390px, print controls, corrupted saved data, unavailable storage, and absence of JavaScript page errors.
- Desktop and mobile screenshots were visually reviewed. Temporary screenshots are not part of the shared kit.

Browser smoke script: `tests/browser-smoke.js`. It uses an attached Playwright CLI session and restores the kit's pre-existing progress after tests. Native confirmation dialogs are stubbed in this automation; actual native download delivery was not part of the final smoke suite, which checks successful file responses and the download attribute instead.

Direct `file://` opening is supported by design through classic local scripts and no runtime fetch/import dependencies, but could not be runtime-verified through the attached-browser automation: the extension rejected navigation to a local-file URL. Local HTTP use is the verified launch path. No standalone browser was launched to bypass that limitation.

These are software/content-structure checks, not independent psychometric validation or a guarantee of SDAIA exam alignment. Topic coverage remains our interpreted domain curriculum, not an official exhaustive syllabus. No real exam questions or confidential materials were used.
