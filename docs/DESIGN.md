# Design direction

An independent study workbook, not an official SDAIA portal. The badge's blue technical setting informs the palette; SDAIA logos and the badge artwork are not used as branding.

- Palette: deep sea `#173b55`, paper `#ffffff`, cool desk `#edf4f8`, ink `#193348`, teal `#087e83`, muted gold `#a36d17`.
- Themes: the header has one icon button that flips between a moon (switch to dark) and a sun (switch to light), with an accessible name and tooltip matching the action. Without an explicit choice, the theme follows the system and updates live. Dark mode keeps the blue study rail with night desk `#101e2a`, blue paper `#192b3a`, pale ink `#e1edf4`, and teal `#65d0d5`. Typography and workbook layout stay unchanged; feedback retains distinct correct/incorrect treatments. Explicit preferences are stored separately from progress; printed lessons stay light.
- Type: locally available Avenir Next / Trebuchet MS for navigation and headings; Georgia for long-form explanations. No downloaded fonts, so sharing and offline reading remain simple.
- Layout: a blue study rail beside a left-aligned workbook. The syllabus is a set of weighted horizontal rows, not seven interchangeable dashboard cards. Lessons have a narrow reading measure, generous paragraphs, and a distinct worked-example treatment. The exam screen prioritizes the question and answer controls.

```text
Study rail          Workbook
Exam date           Heading + honest availability note
Navigation          Learning sequence / domain-weight rows
Local progress      Current lesson or one exam question
                    Revision / downloadable material
```

The memorable element is the domain-weight syllabus: its bars encode the published exam weights and its availability labels prevent planned content from looking complete. Numbering is reserved for the actual domain and lesson sequence. No decorative gradients, auto-animation, fake badges, or predicted pass probabilities.

Review against the brief: a generic SaaS dashboard would obscure reading and imply a mature platform. Replace it with workbook hierarchy, explicit partial-release status, meaningful instructional diagrams, and quiet controls. Mobile navigation wraps; question controls remain keyboard accessible; reduced motion is honored.
