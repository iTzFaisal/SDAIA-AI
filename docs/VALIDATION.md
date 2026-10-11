# First-release validation

Validated on 11 October 2026 using Node.js 24 and the user's attached Chrome browser.

- `npm run build`: eight downloadable documents generated from the shared content.
- `npm test`: 10 unit tests passed. Checks cover published weights, release availability, lesson and question coverage, unique questions, option explanations, shuffle integrity, grading, deadline handling, saved-attempt validation, calculation cases, and separation of the practice paper from its key.
- Browser smoke suite: 66 checks passed over the local HTTP server. Covers navigation, keyboard skip link, glossary search, lesson bookmarks, saved reading progress, learning feedback, locked checked answers, shuffled grading, hidden timed answers, saved deadlines and flags, expiry submission, downloadable-file availability, responsive layouts at 390px, print controls, corrupted saved data, unavailable storage, and absence of JavaScript page errors.
- Desktop and mobile screenshots were visually reviewed. Temporary screenshots are not part of the shared kit.

Browser smoke script: `tests/browser-smoke.js`. It uses an attached Playwright CLI session and restores the kit's pre-existing progress after tests. Native confirmation dialogs are stubbed in this automation; actual native download delivery was not part of the final smoke suite, which checks successful file responses and the download attribute instead.

Direct `file://` opening is supported by design through classic local scripts and no runtime fetch/import dependencies, but could not be runtime-verified through the attached-browser automation: the extension rejected navigation to a local-file URL. Local HTTP use is the verified launch path. No standalone browser was launched to bypass that limitation.

These are software/content-structure checks, not independent psychometric validation or a guarantee of SDAIA exam alignment. Topic coverage remains an interpreted first-domain sample, not an official exhaustive syllabus. No real exam questions or confidential materials were used.
