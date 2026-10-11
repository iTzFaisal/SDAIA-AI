# Domain 1 practice paper

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-11. Confirmed exam booking: 5 December 2026 (provided by learner).

24 original questions; one best answer each. Suggested practice time: 45 minutes, an unofficial training choice. Write your answers separately. Unanswered questions count as incorrect. The answer key is in a separate file. This is not a full seven-domain mock.

### 1. A team assigns applications to one of five known service categories using labeled historical examples. Which task fits?

A. Unsupervised clustering

B. Supervised multiclass classification

C. Continuous regression

D. Reinforcement learning

### 2. In a model estimating electricity consumption, which item is the label?

A. Building floor area

B. A forecast available before prediction

C. Building type

D. Observed consumption for the target period

### 3. A nationwide service's development data contains only central-city weekday users. What is the strongest concern?

A. The sample may not represent the deployment population

B. A larger model guarantees national coverage

C. Random splitting creates rural observations

D. A mean cannot be calculated

### 4. Customers receiving reminders pay sooner, but reminders mainly go to historically prompt payers. Does this establish that reminders cause earlier payment?

A. Yes; correlation always establishes causation

B. Yes; increasing classifier depth removes selection bias

C. No; selection differences require a causal or experimental design

D. No; payment time cannot be measured

### 5. A numerical field has missing values. Which is a defensible starting approach?

A. Assume every missing value is zero

B. Delete records without inspecting affected groups

C. Investigate missingness, then fit a suitable rule on training data

D. Use final test labels to fill the gaps

### 6. Nearest neighbors uses salary in riyals and age in years without scaling. Why might scaling help?

A. It removes the need for labels

B. Salary magnitudes may dominate the distance

C. It proves salary causes the outcome

D. Every future input must then be within 0–1

### 7. Rare-positive examples were duplicated to balance data before random splitting. Why is the test score questionable?

A. All metrics become impossible to calculate

B. Duplicates always lower the score

C. Stratification guarantees independent examples

D. Copies may cross partitions and changed prevalence may distort evaluation

### 8. Category-specific average target values are computed using all rows before cross-validation. What is the best correction?

A. Compute target encoding without using each validation fold's labels

B. Keep it because preparation happened before training

C. Add final test labels to stabilize the averages

D. Rename the model but retain the encodings

### 9. What is the purpose of a final reserved test set?

A. Estimate performance of the selected, locked process

B. Repeatedly choose candidate settings

C. Replace all training examples

D. Guarantee permanent reliability

### 10. Data has many records per device, but deployment serves previously unseen devices. Which split fits?

A. Include each device in every partition

B. Split only by record number

C. Use device-grouped partitions

D. Choose whichever split gives the highest test score

### 11. In five-fold cross-validation of independent examples, what happens each round?

A. Fit on the validation fold and report training performance

B. Fit on four folds and evaluate on the remaining fold

C. Train on the final test five times

D. Reuse one fitted model unchanged across training folds

### 12. A team selected the best of 200 configurations using the same 'final test'. What should it acknowledge?

A. The score is unbiased because the rows never fitted parameters

B. Calling it final preserves independence

C. More tested configurations prove generalization

D. The set informed selection; fresh final evaluation is needed

### 13. Which statement correctly distinguishes a parameter from a hyperparameter?

A. Both are learned from the final test

B. Tree depth is a fitted linear coefficient

C. A feature name is a learned weight

D. A fitted linear weight is a parameter; chosen depth is a hyperparameter

### 14. A deep tree has tiny training error but much worse validation error on an audited split. Which next step is most justified?

A. Limit complexity and compare using validation

B. Increase depth until training error is zero

C. Train on validation and retain its old evaluation role

D. Declare readiness from training performance alone

### 15. Training and validation errors are both high and close. What is the most reasonable interpretation?

A. The small gap proves quality

B. Investigate underfitting, weak inputs, labels, and training adequacy

C. Leakage is necessarily the only cause

D. Adding duplicates must solve the problem

### 16. Two models meet validation quality. One has a negligible improvement but violates the latency budget. Which recommendation is strongest?

A. Choose it because quality is the only requirement

B. Evaluate latency only after irreversible release

C. Prefer the model meeting quality and latency, then verify the locked process

D. Ignore both and skip the baseline

### 17. A detector has TP = 24, FP = 6, FN = 16, and TN = 54. What is recall?

A. 80%

B. 78%

C. 60%

D. 40%

### 18. A safety screen sends alerts to cheap manual inspection. Missing hazards is much costlier than false alarms. What should guide threshold choice?

A. Maximize accuracy and ignore hazards

B. Eliminate all alerts with an unreachable threshold

C. Maximize precision regardless of missed hazards

D. Prioritize recall within a feasible inspection workload

### 19. Two thresholds have equal F1 but one misses more high-cost positives. Are they equally suitable?

A. Yes; equal F1 means identical consequences

B. No; compare counts, costs, and constraints

C. Yes; F1 includes every true negative

D. No; always select the highest threshold

### 20. A three-class model has strong support-weighted recall but poor recall on a small important class. What additional report helps most?

A. Per-class recall and counts, plus a macro summary

B. Only the largest class's accuracy

C. Only training loss

D. The same weighted score with extra decimal places

### 21. Absolute prediction errors are 2 and 8 kilowatts. What are MAE and MSE?

A. MAE 10 kW; MSE 68 kW²

B. MAE 5 kW; MSE 34 kW²

C. MAE 34 kW²; MSE 5 kW

D. Both 5 kW

### 22. A metric should emphasize occasional large numerical errors but remain in target units. Which fits?

A. RMSE

B. Accuracy

C. MSE

D. Signed average residual alone

### 23. A classifier has ROC-AUC 0.96. Which conclusion is justified without further evidence?

A. Deployment accuracy is necessarily 96%

B. Probabilities are perfectly calibrated

C. Every region performs equally well

D. Ranking discrimination is strong on the evaluated data

### 24. A model improves a critical slice by one correct case out of ten. The team calls it a proven stable production gain. What is the best response?

A. Accept; ten cases remove uncertainty

B. Abandon all slice evaluation

C. Request more representative paired evidence and quantify uncertainty

D. Tune on those final-test cases until all are correct

## Answer grid

1. ____

2. ____

3. ____

4. ____

5. ____

6. ____

7. ____

8. ____

9. ____

10. ____

11. ____

12. ____

13. ____

14. ____

15. ____

16. ____

17. ____

18. ____

19. ____

20. ____

21. ____

22. ____

23. ____

24. ____
