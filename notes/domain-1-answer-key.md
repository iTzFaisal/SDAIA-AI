# Domain 1 answer key — spoilers

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-11. Confirmed exam booking: 5 December 2026 (provided by learner).

Use only after completing the separate practice paper. Letters refer to the fixed order in the downloadable paper; the website shuffles options.

## 1. A team assigns applications to one of five known service categories using labeled historical examples. Which task fits?

Topic: Frame the problem & understand the data. Practice difficulty: Foundation (not an official question level).

**Correct answer: B.**

- **A. Unsupervised clustering:** The categories are predefined and labels exist.
- **B. Supervised multiclass classification — correct:** The task learns to predict one of five known categories.
- **C. Continuous regression:** The output is categorical, not a numerical quantity.
- **D. Reinforcement learning:** No sequence of actions and rewards is described.

## 2. In a model estimating electricity consumption, which item is the label?

Topic: Frame the problem & understand the data. Practice difficulty: Foundation (not an official question level).

**Correct answer: D.**

- **A. Building floor area:** This is a potential input feature.
- **B. A forecast available before prediction:** This is an eligible input, not the consumption outcome.
- **C. Building type:** This is a categorical input.
- **D. Observed consumption for the target period — correct:** This is the outcome the model learns to predict.

## 3. A nationwide service's development data contains only central-city weekday users. What is the strongest concern?

Topic: Frame the problem & understand the data. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. The sample may not represent the deployment population — correct:** Even honest splits cannot establish performance for missing populations.
- **B. A larger model guarantees national coverage:** Capacity does not supply missing evidence.
- **C. Random splitting creates rural observations:** Splitting cannot invent absent groups.
- **D. A mean cannot be calculated:** A mean can be computed; coverage is the issue.

## 4. Customers receiving reminders pay sooner, but reminders mainly go to historically prompt payers. Does this establish that reminders cause earlier payment?

Topic: Frame the problem & understand the data. Practice difficulty: Stretch (not an official question level).

**Correct answer: C.**

- **A. Yes; correlation always establishes causation:** An association does not identify a causal effect.
- **B. Yes; increasing classifier depth removes selection bias:** Model capacity does not automatically resolve confounding.
- **C. No; selection differences require a causal or experimental design — correct:** The groups differ before the intervention; the difference alone is insufficient.
- **D. No; payment time cannot be measured:** Time is measurable; identifying its cause is the issue.

## 5. A numerical field has missing values. Which is a defensible starting approach?

Topic: Prepare data without creating new problems. Practice difficulty: Foundation (not an official question level).

**Correct answer: C.**

- **A. Assume every missing value is zero:** Unknown and zero may mean different things.
- **B. Delete records without inspecting affected groups:** Deletion can bias the sample.
- **C. Investigate missingness, then fit a suitable rule on training data — correct:** The reason and the information boundary guide preparation.
- **D. Use final test labels to fill the gaps:** This contaminates development with evaluation outcomes.

## 6. Nearest neighbors uses salary in riyals and age in years without scaling. Why might scaling help?

Topic: Prepare data without creating new problems. Practice difficulty: Applied (not an official question level).

**Correct answer: B.**

- **A. It removes the need for labels:** Supervised learning still needs target evidence.
- **B. Salary magnitudes may dominate the distance — correct:** Unequal scales can distort distance-based similarity.
- **C. It proves salary causes the outcome:** Scaling establishes no causal relation.
- **D. Every future input must then be within 0–1:** Not all scaling is min-max, and future values can exceed training ranges.

## 7. Rare-positive examples were duplicated to balance data before random splitting. Why is the test score questionable?

Topic: Prepare data without creating new problems. Practice difficulty: Stretch (not an official question level).

**Correct answer: D.**

- **A. All metrics become impossible to calculate:** Metrics remain calculable but may mislead.
- **B. Duplicates always lower the score:** Overlap often makes evaluation optimistic, not necessarily worse.
- **C. Stratification guarantees independent examples:** Preserved proportions do not eliminate overlap.
- **D. Copies may cross partitions and changed prevalence may distort evaluation — correct:** Split first; resample training only and keep representative evaluation data.

## 8. Category-specific average target values are computed using all rows before cross-validation. What is the best correction?

Topic: Prepare data without creating new problems. Practice difficulty: Stretch (not an official question level).

**Correct answer: A.**

- **A. Compute target encoding without using each validation fold's labels — correct:** Target-derived preparation must not expose validation outcomes to their own inputs.
- **B. Keep it because preparation happened before training:** Preparation can leak information too.
- **C. Add final test labels to stabilize the averages:** This increases leakage.
- **D. Rename the model but retain the encodings:** Renaming cannot restore information boundaries.

## 9. What is the purpose of a final reserved test set?

Topic: Protect evaluation: splits, leakage & validation. Practice difficulty: Foundation (not an official question level).

**Correct answer: A.**

- **A. Estimate performance of the selected, locked process — correct:** It supplies final evidence without guiding development choices.
- **B. Repeatedly choose candidate settings:** That is validation's role.
- **C. Replace all training examples:** Fitting and final assessment serve different purposes.
- **D. Guarantee permanent reliability:** Evaluation is evidence, not a guarantee against future change.

## 10. Data has many records per device, but deployment serves previously unseen devices. Which split fits?

Topic: Protect evaluation: splits, leakage & validation. Practice difficulty: Applied (not an official question level).

**Correct answer: C.**

- **A. Include each device in every partition:** This tests familiar-device behavior instead.
- **B. Split only by record number:** Record numbering need not protect entity boundaries.
- **C. Use device-grouped partitions — correct:** Each device stays in one partition, testing unseen entities.
- **D. Choose whichever split gives the highest test score:** Test-driven selection introduces optimistic bias.

## 11. In five-fold cross-validation of independent examples, what happens each round?

Topic: Protect evaluation: splits, leakage & validation. Practice difficulty: Applied (not an official question level).

**Correct answer: B.**

- **A. Fit on the validation fold and report training performance:** The held-out fold must not fit the model that evaluates it.
- **B. Fit on four folds and evaluate on the remaining fold — correct:** Each fold serves as validation once, with fresh fitting each round.
- **C. Train on the final test five times:** Final assessment data remains outside development.
- **D. Reuse one fitted model unchanged across training folds:** Each round requires fitting on its designated training portion.

## 12. A team selected the best of 200 configurations using the same 'final test'. What should it acknowledge?

Topic: Protect evaluation: splits, leakage & validation. Practice difficulty: Stretch (not an official question level).

**Correct answer: D.**

- **A. The score is unbiased because the rows never fitted parameters:** Selection can overfit evaluation without direct fitting.
- **B. Calling it final preserves independence:** Names do not protect information boundaries.
- **C. More tested configurations prove generalization:** More test-driven choices increase optimistic selection opportunities.
- **D. The set informed selection; fresh final evaluation is needed — correct:** It effectively became tuning data and is no longer untouched.

## 13. Which statement correctly distinguishes a parameter from a hyperparameter?

Topic: Baselines, model families & generalization. Practice difficulty: Foundation (not an official question level).

**Correct answer: D.**

- **A. Both are learned from the final test:** Final evaluation must not fit or tune the model.
- **B. Tree depth is a fitted linear coefficient:** Depth is a configuration, not a linear coefficient.
- **C. A feature name is a learned weight:** A name identifies an input; it is not its fitted weight.
- **D. A fitted linear weight is a parameter; chosen depth is a hyperparameter — correct:** Parameters are learned in fitting; hyperparameters configure it.

## 14. A deep tree has tiny training error but much worse validation error on an audited split. Which next step is most justified?

Topic: Baselines, model families & generalization. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. Limit complexity and compare using validation — correct:** Reduced depth or regularization can address overfitting.
- **B. Increase depth until training error is zero:** This pursues memorization rather than the observed generalization gap.
- **C. Train on validation and retain its old evaluation role:** That invalidates the claimed validation boundary.
- **D. Declare readiness from training performance alone:** Training fit alone does not establish generalization.

## 15. Training and validation errors are both high and close. What is the most reasonable interpretation?

Topic: Baselines, model families & generalization. Practice difficulty: Applied (not an official question level).

**Correct answer: B.**

- **A. The small gap proves quality:** Absolute performance can be unacceptable despite a small gap.
- **B. Investigate underfitting, weak inputs, labels, and training adequacy — correct:** Several problems can produce poor performance on both sets.
- **C. Leakage is necessarily the only cause:** The pattern does not uniquely identify leakage.
- **D. Adding duplicates must solve the problem:** Duplicates need not add useful information or remedy it.

## 16. Two models meet validation quality. One has a negligible improvement but violates the latency budget. Which recommendation is strongest?

Topic: Baselines, model families & generalization. Practice difficulty: Stretch (not an official question level).

**Correct answer: C.**

- **A. Choose it because quality is the only requirement:** Latency is explicitly a requirement too.
- **B. Evaluate latency only after irreversible release:** Known constraints should inform selection before release.
- **C. Prefer the model meeting quality and latency, then verify the locked process — correct:** Selection must consider the full requirement set.
- **D. Ignore both and skip the baseline:** Baseline comparisons and stated constraints remain relevant.

## 17. A detector has TP = 24, FP = 6, FN = 16, and TN = 54. What is recall?

Topic: Classification metrics & decision thresholds. Practice difficulty: Foundation (not an official question level).

**Correct answer: C.**

- **A. 80%:** 24/(24 + 6) is precision.
- **B. 78%:** (24 + 54)/100 is accuracy.
- **C. 60% — correct:** Recall = 24/(24 + 16) = 60%.
- **D. 40%:** 16/40 is the missed-positive fraction, not recall.

## 18. A safety screen sends alerts to cheap manual inspection. Missing hazards is much costlier than false alarms. What should guide threshold choice?

Topic: Classification metrics & decision thresholds. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. Maximize accuracy and ignore hazards:** Accuracy can hide missed rare events.
- **B. Eliminate all alerts with an unreachable threshold:** That sacrifices the expensive detection task.
- **C. Maximize precision regardless of missed hazards:** Precision alone can sacrifice needed recall.
- **D. Prioritize recall within a feasible inspection workload — correct:** Detection matters most here, but capacity is still a real constraint.

## 19. Two thresholds have equal F1 but one misses more high-cost positives. Are they equally suitable?

Topic: Classification metrics & decision thresholds. Practice difficulty: Stretch (not an official question level).

**Correct answer: B.**

- **A. Yes; equal F1 means identical consequences:** Different precision/recall combinations can produce equal F1.
- **B. No; compare counts, costs, and constraints — correct:** F1 does not encode arbitrary safety or business costs.
- **C. Yes; F1 includes every true negative:** True negatives are absent from its formula.
- **D. No; always select the highest threshold:** No threshold is universally optimal.

## 20. A three-class model has strong support-weighted recall but poor recall on a small important class. What additional report helps most?

Topic: Classification metrics & decision thresholds. Practice difficulty: Stretch (not an official question level).

**Correct answer: A.**

- **A. Per-class recall and counts, plus a macro summary — correct:** Per-class reporting exposes failure; macro averaging gives classes equal weight.
- **B. Only the largest class's accuracy:** That hides the important small class.
- **C. Only training loss:** Training loss cannot characterize held-out class-specific recall.
- **D. The same weighted score with extra decimal places:** Precision of an average does not reveal hidden subgroup failure.

## 21. Absolute prediction errors are 2 and 8 kilowatts. What are MAE and MSE?

Topic: Regression, ranking & defensible model selection. Practice difficulty: Foundation (not an official question level).

**Correct answer: B.**

- **A. MAE 10 kW; MSE 68 kW²:** These are sums; divide each by two examples.
- **B. MAE 5 kW; MSE 34 kW² — correct:** (2 + 8)/2 = 5; (4 + 64)/2 = 34.
- **C. MAE 34 kW²; MSE 5 kW:** The formulas and units are reversed.
- **D. Both 5 kW:** Squaring changes both the value and the units for MSE.

## 22. A metric should emphasize occasional large numerical errors but remain in target units. Which fits?

Topic: Regression, ranking & defensible model selection. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. RMSE — correct:** Squaring emphasizes large errors; the square root restores target units.
- **B. Accuracy:** Ordinary classification accuracy is not this regression-error measure.
- **C. MSE:** It emphasizes large errors but remains in squared units.
- **D. Signed average residual alone:** Opposite-signed errors can cancel and hide mistakes.

## 23. A classifier has ROC-AUC 0.96. Which conclusion is justified without further evidence?

Topic: Regression, ranking & defensible model selection. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. Deployment accuracy is necessarily 96%:** AUC is not accuracy at a chosen threshold.
- **B. Probabilities are perfectly calibrated:** Strong ordering does not establish probability reliability.
- **C. Every region performs equally well:** Aggregate AUC gives no region-level guarantee.
- **D. Ranking discrimination is strong on the evaluated data — correct:** AUC supports a ranking claim; calibration, slices, and threshold quality require other evidence.

## 24. A model improves a critical slice by one correct case out of ten. The team calls it a proven stable production gain. What is the best response?

Topic: Regression, ranking & defensible model selection. Practice difficulty: Stretch (not an official question level).

**Correct answer: C.**

- **A. Accept; ten cases remove uncertainty:** Small samples can have substantial uncertainty.
- **B. Abandon all slice evaluation:** Slice evaluation matters; strengthen the evidence instead.
- **C. Request more representative paired evidence and quantify uncertainty — correct:** A small observed difference does not establish a stable real-world gain.
- **D. Tune on those final-test cases until all are correct:** That overfits the evaluation instead of demonstrating generalization.

## Scoring

Score = correct answers / 24 × 100%. This does not classify an official badge level. Group missed questions by the lesson named above and revisit the worked example.
