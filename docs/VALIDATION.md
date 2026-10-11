# Validation

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
