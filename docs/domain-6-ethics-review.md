# Domain 6 comparison with AI Ethics Principles

Reviewed 12 October 2026 against the learner-supplied `ai-principles.pdf`, including the supplied page images. Page references below are the PDF's page numbers.

## Outcome

The existing seven-principle list and fairness, oversight, privacy, security, and governance explanations were broadly consistent. The source citation was for September 2023, while the supplied PDF identifies **May 2025, SDAIA-P114E, version 1**, document type **Regulatory Documents**, classification **General** (page 50). This is not a claim that the document is version 2 or that every addition below is a newly introduced 2025 requirement: this review compares the supplied edition with the kit, not two complete source editions.

The citation now links to [SDAIA's official publication location](https://sdaia.gov.sa/en/SDAIA/about/Documents/ai-principles.pdf). The reviewed content comes from the supplied copy; the link is not a byte-identity claim or verification that no later instruments exist. The original supplied PDF is left untouched and is not a new deployed asset.

## Coverage and updates

| PDF coverage | Existing material | Update in shared content |
| --- | --- | --- |
| Definitions and scope, pp. 6–9 | Principles and general governance; scope implicit | Explicit stakeholder scope within KSA; developer, owner, assessor distinguished from PDPL roles |
| Four risk tiers, p. 9 | Impact and residual risk explained; tiers not taught | Little/no, limited, high, unacceptable; high-risk pre/post conformity assessments and unacceptable uses, with statutory boundaries |
| Four equally important lifecycle stages, pp. 10–11 | Lifecycle mentioned generically | Exact stage names, activities, signed-off data/model evidence, assigned monitoring alerts |
| Fairness controls, pp. 12–15 | Strong proxy, label, denominator, tradeoff and workflow discussion | Early metrics/thresholds, sensitive attributes/proxies and justified exceptions, champion assessment, production deviation review |
| Privacy/security controls, pp. 15–18 | Detailed PDPL and defensive security treatment | Classification-led protection, authorized read/write/update, combined-data reidentification tests and repeated impact assessments |
| Humanity and social/environmental benefits, pp. 18–21 | Brief mentions | Distinct human choice/rights/cultural-value and sustainability/resource-impact checks |
| Reliability/safety, pp. 22–23 | Engineering reliability and real oversight | Distinguish consistency from absence of harm; stress tests/sign-offs; explicit final human determination for irreversible or life-and-death decisions; social scoring/mass-surveillance restriction |
| Transparency/accountability, pp. 24–28 | Strong explanation fidelity, redress, ownership and record guidance | Third-party ethics due diligence, UI/UX risk, signed-off datasets/UAT, periodic reports and owned alerts |
| National/entity roles, pp. 28–31 | Role names only | National duties and role table: Head/CDO, CCO/CO strategic lead, RAIO operational lead, Assessor audit responsibilities |
| Registration/compliance/badges, pp. 31–32 | Not explained | Optional registration/reporting and entity/product motivational badges separated from law and AI Engineer exam awards |
| Annexure A tools, pp. 33–39 | Generic cards, assessments and registers | Ten tool categories and their purposes, sense–plan–act architecture, protection methods and limitations |
| Annexure B, p. 40 | Not covered | Ten-row lifecycle mapping transcribed from the visible dots in the supplied page image |
| Annexure C, pp. 41–48 | Generic controls | Phase codes and selected evidence checks, including Yes/No examples from “Binding for Third-party,” disclosure, fairness, fallback, UAT and redress |

Changes are in `content/kit.js`, its source-notes generator, and selected existing question explanations. Lessons 1–3 and 6 have longer suggested reading times. All question stems, option text, correct indexes, pools and IDs remain unchanged; additional explain-without-notes prompts cover the new concepts. The existing paper is still 24 questions, not exhaustive coverage of every annex item. Rebuilt Markdown and printable downloads share the same content as the site.

## Interpretation safeguards

- The framework uses normative controls and says unacceptable-risk systems are not allowed. Do not flatten it into either “everything is optional” or a complete standalone AI statute/enforcement regime. Verify applicable legal and sector requirements separately.
- Optional registration/reporting is not optional PDPL compliance. Ethics-framework staffing is not automatically a legally required privacy-role appointment.
- A **No** in “Binding for Third-party” does not remove the adopting entity's principle or legal responsibilities.
- Annexure B marks Fairness Assessment at Build and Validate only; the main controls still require fairness monitoring in production (p. 15). Blank annex cells do not prohibit additional use.
- The ethics glossary and broad Annexure A protection descriptions are not substituted for the separately reviewed PDPL definitions. Masking, codes, tokens, hashes and encryption do not automatically prove anonymity or remove privacy duties.
- Annexure A's software/standard examples are not blanket mandates. The p. 34 table repeats a NIST AI RMF label beside a cybersecurity-framework URL; the kit keeps its separately identified NIST AI RMF reference rather than propagating that link/label ambiguity.
- Conditional authority notification, separate subject notification, processing-record retention, and transfer limitations remain unchanged. The supplied ethics PDF does not establish new PDPL deadlines, transfer routes or exam thresholds.
- Representative Annexure C checks are summarized, not a transcription of the entire checklist or an independent compliance assessment.
