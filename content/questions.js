(() => {
  const q = (id, lesson, pool, difficulty, stem, answer, choices) => ({
    id, domain: "d1", lesson, pool, difficulty, stem, answer,
    options: choices.map(([text, explanation]) => ({ text, explanation }))
  });
  globalThis.STUDY_KIT.questions = [
    q("l1-q1", "d1-l1", "quiz", "Foundation", "A service estimates how many minutes a bus journey will take. Which task is this?", 2, [
      ["Clustering", "Clustering discovers similarity groups without duration labels."],
      ["Classification", "Classification predicts categories, not numerical durations."],
      ["Regression", "Minutes are a numerical quantity, so predicting them is regression."],
      ["Reinforcement learning", "No sequence of rewarded actions is described."]
    ]),
    q("l1-q2", "d1-l1", "quiz", "Applied", "At loan application time, which input most clearly leaks future information?", 0, [
      ["Whether the loan was repaid six months later", "This future outcome is unavailable at application time and reveals the target."],
      ["The requested loan amount", "The amount is available when the application is submitted."],
      ["Declared employment status", "This needs quality checks but is available at application time."],
      ["The application date", "The date exists at the decision time and does not inherently reveal repayment."]
    ]),
    q("l1-q3", "d1-l1", "quiz", "Foundation", "For values 4, 5, and 30, which statement is correct?", 1, [
      ["The mean and median are both 5", "Only the median is 5; the mean includes all values."],
      ["The median is 5 and the mean is 13", "The middle value is 5; (4 + 5 + 30)/3 = 13."],
      ["The median is 13 and the mean is 5", "This reverses the correct values."],
      ["30 must be deleted first", "An extreme value can be valid; investigate before deleting it."]
    ]),
    q("l2-q1", "d1-l2", "quiz", "Foundation", "An unordered city field is stored as Riyadh = 1, Jeddah = 2, Dammam = 3. What is the main concern?", 3, [
      ["Every city field must be deleted", "Categories can be useful; deletion is not universally required."],
      ["Dammam is three times larger than Riyadh", "These codes do not measure city size."],
      ["One-hot encoding creates a future label", "Category indicators represent inputs, not future outcomes."],
      ["Some models may infer a false order or distance", "Numeric IDs can suggest relationships the categories do not possess."]
    ]),
    q("l2-q2", "d1-l2", "quiz", "Applied", "When should a scaler learn its mean during five-fold cross-validation?", 1, [
      ["Once from all data, including the final test", "Evaluation data would influence preparation."],
      ["Separately from each fold's training portion", "The held-out fold must not influence learned preprocessing."],
      ["Only from the validation fold", "That would fit preparation using the data being evaluated."],
      ["From whichever fold gives the best final test score", "Test-driven selection contaminates final assessment."]
    ]),
    q("l2-q3", "d1-l2", "quiz", "Applied", "Why can replacing every missing income with zero be harmful?", 0, [
      ["Unknown income and no income have different meanings", "A zero implies observed absence, not necessarily missing information."],
      ["Models can never accept zero", "Zero is a valid value in many models and fields."],
      ["Median imputation is always illegal", "There is no such universal rule; legality depends on context."],
      ["Every affected record automatically becomes an outlier", "The effect depends on the distribution; the meaning change is the core issue."]
    ]),
    q("l3-q1", "d1-l3", "quiz", "Foundation", "Which partition should guide selection of tree depth?", 2, [
      ["The final reserved test set", "Using it to choose depth turns it into tuning data."],
      ["Private production records without permission", "Permission and a sound evaluation design are required."],
      ["The validation set", "Validation guides hyperparameter selection while preserving the final test."],
      ["No data; always choose the deepest tree", "No depth is universally optimal; deep trees can overfit."]
    ]),
    q("l3-q2", "d1-l3", "quiz", "Applied", "A dataset has several scans per patient. Deployment will serve new patients. Which split best respects that goal?", 0, [
      ["Keep each patient's scans in one partition", "A patient-grouped split tests unseen-person generalization."],
      ["Scatter each patient's scans across all partitions", "Patient-specific patterns can cross boundaries and inflate scores."],
      ["Put every abnormal scan in training", "The test would not represent the target task."],
      ["Duplicate every scan before splitting", "Copies across partitions contaminate evaluation."]
    ]),
    q("l3-q3", "d1-l3", "quiz", "Applied", "A model forecasts next week's demand. Which validation design is most appropriate?", 3, [
      ["Train on the latest week and validate on an earlier week", "This reverses the deployment time direction."],
      ["Mix all weeks so future examples inform earlier predictions", "Future information can create unrealistic results."],
      ["Evaluate only the training rows", "This does not measure future generalization."],
      ["Train on earlier periods and validate on later periods", "A chronological design resembles forecasting future demand."]
    ]),
    q("l4-q1", "d1-l4", "quiz", "Foundation", "What does logistic regression commonly predict?", 1, [
      ["An unlabeled similarity cluster", "Logistic regression is usually supervised classification."],
      ["A class probability used for classification", "Despite its name, logistic regression commonly supports classification."],
      ["Only a continuous journey duration", "Linear regression is a more direct example of continuous prediction."],
      ["A sequence of rewarded actions", "That describes reinforcement learning."]
    ]),
    q("l4-q2", "d1-l4", "quiz", "Applied", "On a verified split, training error is 2% and validation error is 28%. What is the clearest concern?", 2, [
      ["The validation model is necessarily perfect", "A 28% error rate does not establish perfection."],
      ["The model must be too simple", "The large generalization gap is not a typical underfitting pattern."],
      ["Overfitting", "Training examples are fitted much better than unseen validation examples."],
      ["There is no need for a baseline", "A baseline is still needed to interpret usefulness."]
    ]),
    q("l4-q3", "d1-l4", "quiz", "Foundation", "Which item is a hyperparameter rather than a learned linear-model parameter?", 3, [
      ["A fitted feature weight", "This is learned during fitting."],
      ["The fitted intercept", "The intercept is a learned parameter."],
      ["A learned coefficient for distance", "This coefficient is a fitted parameter."],
      ["The chosen regularization strength", "This configures fitting and is usually selected using validation."]
    ]),
    q("l5-q1", "d1-l5", "quiz", "Foundation", "A detector has TP = 12, FP = 3, and FN = 8. What are precision and recall?", 0, [
      ["Precision 80%; recall 60%", "Precision = 12/15 = 80%; recall = 12/20 = 60%."],
      ["Precision 60%; recall 80%", "This swaps the two denominators."],
      ["Both 80%", "Recall includes eight misses, giving 60%."],
      ["Both 60%", "Precision includes three false alerts, giving 80%."]
    ]),
    q("l5-q2", "d1-l5", "quiz", "Applied", "Only 1% of cases have a fault. A system always predicts no fault. What is true?", 2, [
      ["It detects 99% of faults", "It detects none; accuracy is not fault recall."],
      ["Its recall is 100%", "No actual positives are detected, so recall is zero."],
      ["Its accuracy is 99%, but fault recall is zero", "A majority baseline can look accurate while missing the event completely."],
      ["Fault detection is solved", "The system never performs the required detection."]
    ]),
    q("l5-q3", "d1-l5", "quiz", "Applied", "For fixed classifier scores, lowering the decision threshold has which guaranteed effect?", 1, [
      ["Precision always increases", "Precision depends on the label mix of newly admitted alerts."],
      ["The number of positive predictions cannot decrease", "A lower cutoff includes existing positives and possibly additional examples."],
      ["The score ranking improves", "Threshold changes do not alter score ordering."],
      ["False-negative count must increase", "On fixed examples a lower cutoff cannot increase missed positives."]
    ]),
    q("l6-q1", "d1-l6", "quiz", "Foundation", "For absolute errors of 1, 2, and 6 minutes, what is MAE?", 3, [
      ["9 minutes", "Nine is the sum, not the mean."],
      ["41 minutes²", "41 is the squared-error sum, not MAE."],
      ["√3 minutes", "MAE does not take a square root."],
      ["3 minutes", "(1 + 2 + 6)/3 = 3 minutes."]
    ]),
    q("l6-q2", "d1-l6", "quiz", "Stretch", "A classifier has excellent ROC-AUC, but its 90% predictions are correct only about 60% of the time. What is the main distinction?", 0, [
      ["Ranking can be strong while probabilities are poorly calibrated", "AUC describes ordering; calibration describes probability reliability."],
      ["AUC and calibration are identical", "They measure different properties."],
      ["A higher threshold calibrates all probabilities", "Thresholding changes decisions, not the probability estimates."],
      ["The test must contain no positives", "The results do not imply an absence of positives."]
    ]),
    q("l6-q3", "d1-l6", "quiz", "Applied", "Overall accuracy is 94%, but an important region has 60% accuracy on only five cases. What should the team do?", 2, [
      ["Ignore the region because the average is high", "Averages can hide critical failures."],
      ["Claim the region's true accuracy is exactly 60%", "Five cases give an uncertain estimate, not an exact population rate."],
      ["Investigate the slice and collect more representative evidence", "The warning matters, and uncertainty calls for better evidence."],
      ["Tune on the final test until the region looks good", "This contaminates evaluation instead of resolving the evidence gap."]
    ]),
    // Reserved domain paper: never reused in lesson quizzes.
    q("e01", "d1-l1", "exam", "Foundation", "A team assigns applications to one of five known service categories using labeled historical examples. Which task fits?", 1, [
      ["Unsupervised clustering", "The categories are predefined and labels exist."],
      ["Supervised multiclass classification", "The task learns to predict one of five known categories."],
      ["Continuous regression", "The output is categorical, not a numerical quantity."],
      ["Reinforcement learning", "No sequence of actions and rewards is described."]
    ]),
    q("e02", "d1-l1", "exam", "Foundation", "In a model estimating electricity consumption, which item is the label?", 3, [
      ["Building floor area", "This is a potential input feature."],
      ["A forecast available before prediction", "This is an eligible input, not the consumption outcome."],
      ["Building type", "This is a categorical input."],
      ["Observed consumption for the target period", "This is the outcome the model learns to predict."]
    ]),
    q("e03", "d1-l1", "exam", "Applied", "A nationwide service's development data contains only central-city weekday users. What is the strongest concern?", 0, [
      ["The sample may not represent the deployment population", "Even honest splits cannot establish performance for missing populations."],
      ["A larger model guarantees national coverage", "Capacity does not supply missing evidence."],
      ["Random splitting creates rural observations", "Splitting cannot invent absent groups."],
      ["A mean cannot be calculated", "A mean can be computed; coverage is the issue."]
    ]),
    q("e04", "d1-l1", "exam", "Stretch", "Customers receiving reminders pay sooner, but reminders mainly go to historically prompt payers. Does this establish that reminders cause earlier payment?", 2, [
      ["Yes; correlation always establishes causation", "An association does not identify a causal effect."],
      ["Yes; increasing classifier depth removes selection bias", "Model capacity does not automatically resolve confounding."],
      ["No; selection differences require a causal or experimental design", "The groups differ before the intervention; the difference alone is insufficient."],
      ["No; payment time cannot be measured", "Time is measurable; identifying its cause is the issue."]
    ]),
    q("e05", "d1-l2", "exam", "Foundation", "A numerical field has missing values. Which is a defensible starting approach?", 2, [
      ["Assume every missing value is zero", "Unknown and zero may mean different things."],
      ["Delete records without inspecting affected groups", "Deletion can bias the sample."],
      ["Investigate missingness, then fit a suitable rule on training data", "The reason and the information boundary guide preparation."],
      ["Use final test labels to fill the gaps", "This contaminates development with evaluation outcomes."]
    ]),
    q("e06", "d1-l2", "exam", "Applied", "Nearest neighbors uses salary in riyals and age in years without scaling. Why might scaling help?", 1, [
      ["It removes the need for labels", "Supervised learning still needs target evidence."],
      ["Salary magnitudes may dominate the distance", "Unequal scales can distort distance-based similarity."],
      ["It proves salary causes the outcome", "Scaling establishes no causal relation."],
      ["Every future input must then be within 0–1", "Not all scaling is min-max, and future values can exceed training ranges."]
    ]),
    q("e07", "d1-l2", "exam", "Stretch", "Rare-positive examples were duplicated to balance data before random splitting. Why is the test score questionable?", 3, [
      ["All metrics become impossible to calculate", "Metrics remain calculable but may mislead."],
      ["Duplicates always lower the score", "Overlap often makes evaluation optimistic, not necessarily worse."],
      ["Stratification guarantees independent examples", "Preserved proportions do not eliminate overlap."],
      ["Copies may cross partitions and changed prevalence may distort evaluation", "Split first; resample training only and keep representative evaluation data."]
    ]),
    q("e08", "d1-l2", "exam", "Stretch", "Category-specific average target values are computed using all rows before cross-validation. What is the best correction?", 0, [
      ["Compute target encoding without using each validation fold's labels", "Target-derived preparation must not expose validation outcomes to their own inputs."],
      ["Keep it because preparation happened before training", "Preparation can leak information too."],
      ["Add final test labels to stabilize the averages", "This increases leakage."],
      ["Rename the model but retain the encodings", "Renaming cannot restore information boundaries."]
    ]),
    q("e09", "d1-l3", "exam", "Foundation", "What is the purpose of a final reserved test set?", 0, [
      ["Estimate performance of the selected, locked process", "It supplies final evidence without guiding development choices."],
      ["Repeatedly choose candidate settings", "That is validation's role."],
      ["Replace all training examples", "Fitting and final assessment serve different purposes."],
      ["Guarantee permanent reliability", "Evaluation is evidence, not a guarantee against future change."]
    ]),
    q("e10", "d1-l3", "exam", "Applied", "Data has many records per device, but deployment serves previously unseen devices. Which split fits?", 2, [
      ["Include each device in every partition", "This tests familiar-device behavior instead."],
      ["Split only by record number", "Record numbering need not protect entity boundaries."],
      ["Use device-grouped partitions", "Each device stays in one partition, testing unseen entities."],
      ["Choose whichever split gives the highest test score", "Test-driven selection introduces optimistic bias."]
    ]),
    q("e11", "d1-l3", "exam", "Applied", "In five-fold cross-validation of independent examples, what happens each round?", 1, [
      ["Fit on the validation fold and report training performance", "The held-out fold must not fit the model that evaluates it."],
      ["Fit on four folds and evaluate on the remaining fold", "Each fold serves as validation once, with fresh fitting each round."],
      ["Train on the final test five times", "Final assessment data remains outside development."],
      ["Reuse one fitted model unchanged across training folds", "Each round requires fitting on its designated training portion."]
    ]),
    q("e12", "d1-l3", "exam", "Stretch", "A team selected the best of 200 configurations using the same 'final test'. What should it acknowledge?", 3, [
      ["The score is unbiased because the rows never fitted parameters", "Selection can overfit evaluation without direct fitting."],
      ["Calling it final preserves independence", "Names do not protect information boundaries."],
      ["More tested configurations prove generalization", "More test-driven choices increase optimistic selection opportunities."],
      ["The set informed selection; fresh final evaluation is needed", "It effectively became tuning data and is no longer untouched."]
    ]),
    q("e13", "d1-l4", "exam", "Foundation", "Which statement correctly distinguishes a parameter from a hyperparameter?", 3, [
      ["Both are learned from the final test", "Final evaluation must not fit or tune the model."],
      ["Tree depth is a fitted linear coefficient", "Depth is a configuration, not a linear coefficient."],
      ["A feature name is a learned weight", "A name identifies an input; it is not its fitted weight."],
      ["A fitted linear weight is a parameter; chosen depth is a hyperparameter", "Parameters are learned in fitting; hyperparameters configure it."]
    ]),
    q("e14", "d1-l4", "exam", "Applied", "A deep tree has tiny training error but much worse validation error on an audited split. Which next step is most justified?", 0, [
      ["Limit complexity and compare using validation", "Reduced depth or regularization can address overfitting."],
      ["Increase depth until training error is zero", "This pursues memorization rather than the observed generalization gap."],
      ["Train on validation and retain its old evaluation role", "That invalidates the claimed validation boundary."],
      ["Declare readiness from training performance alone", "Training fit alone does not establish generalization."]
    ]),
    q("e15", "d1-l4", "exam", "Applied", "Training and validation errors are both high and close. What is the most reasonable interpretation?", 1, [
      ["The small gap proves quality", "Absolute performance can be unacceptable despite a small gap."],
      ["Investigate underfitting, weak inputs, labels, and training adequacy", "Several problems can produce poor performance on both sets."],
      ["Leakage is necessarily the only cause", "The pattern does not uniquely identify leakage."],
      ["Adding duplicates must solve the problem", "Duplicates need not add useful information or remedy it."]
    ]),
    q("e16", "d1-l4", "exam", "Stretch", "Two models meet validation quality. One has a negligible improvement but violates the latency budget. Which recommendation is strongest?", 2, [
      ["Choose it because quality is the only requirement", "Latency is explicitly a requirement too."],
      ["Evaluate latency only after irreversible release", "Known constraints should inform selection before release."],
      ["Prefer the model meeting quality and latency, then verify the locked process", "Selection must consider the full requirement set."],
      ["Ignore both and skip the baseline", "Baseline comparisons and stated constraints remain relevant."]
    ]),
    q("e17", "d1-l5", "exam", "Foundation", "A detector has TP = 24, FP = 6, FN = 16, and TN = 54. What is recall?", 2, [
      ["80%", "24/(24 + 6) is precision."],
      ["78%", "(24 + 54)/100 is accuracy."],
      ["60%", "Recall = 24/(24 + 16) = 60%."],
      ["40%", "16/40 is the missed-positive fraction, not recall."]
    ]),
    q("e18", "d1-l5", "exam", "Applied", "A safety screen sends alerts to cheap manual inspection. Missing hazards is much costlier than false alarms. What should guide threshold choice?", 3, [
      ["Maximize accuracy and ignore hazards", "Accuracy can hide missed rare events."],
      ["Eliminate all alerts with an unreachable threshold", "That sacrifices the expensive detection task."],
      ["Maximize precision regardless of missed hazards", "Precision alone can sacrifice needed recall."],
      ["Prioritize recall within a feasible inspection workload", "Detection matters most here, but capacity is still a real constraint."]
    ]),
    q("e19", "d1-l5", "exam", "Stretch", "Two thresholds have equal F1 but one misses more high-cost positives. Are they equally suitable?", 1, [
      ["Yes; equal F1 means identical consequences", "Different precision/recall combinations can produce equal F1."],
      ["No; compare counts, costs, and constraints", "F1 does not encode arbitrary safety or business costs."],
      ["Yes; F1 includes every true negative", "True negatives are absent from its formula."],
      ["No; always select the highest threshold", "No threshold is universally optimal."]
    ]),
    q("e20", "d1-l5", "exam", "Stretch", "A three-class model has strong support-weighted recall but poor recall on a small important class. What additional report helps most?", 0, [
      ["Per-class recall and counts, plus a macro summary", "Per-class reporting exposes failure; macro averaging gives classes equal weight."],
      ["Only the largest class's accuracy", "That hides the important small class."],
      ["Only training loss", "Training loss cannot characterize held-out class-specific recall."],
      ["The same weighted score with extra decimal places", "Precision of an average does not reveal hidden subgroup failure."]
    ]),
    q("e21", "d1-l6", "exam", "Foundation", "Absolute prediction errors are 2 and 8 kilowatts. What are MAE and MSE?", 1, [
      ["MAE 10 kW; MSE 68 kW²", "These are sums; divide each by two examples."],
      ["MAE 5 kW; MSE 34 kW²", "(2 + 8)/2 = 5; (4 + 64)/2 = 34."],
      ["MAE 34 kW²; MSE 5 kW", "The formulas and units are reversed."],
      ["Both 5 kW", "Squaring changes both the value and the units for MSE."]
    ]),
    q("e22", "d1-l6", "exam", "Applied", "A metric should emphasize occasional large numerical errors but remain in target units. Which fits?", 0, [
      ["RMSE", "Squaring emphasizes large errors; the square root restores target units."],
      ["Accuracy", "Ordinary classification accuracy is not this regression-error measure."],
      ["MSE", "It emphasizes large errors but remains in squared units."],
      ["Signed average residual alone", "Opposite-signed errors can cancel and hide mistakes."]
    ]),
    q("e23", "d1-l6", "exam", "Applied", "A classifier has ROC-AUC 0.96. Which conclusion is justified without further evidence?", 3, [
      ["Deployment accuracy is necessarily 96%", "AUC is not accuracy at a chosen threshold."],
      ["Probabilities are perfectly calibrated", "Strong ordering does not establish probability reliability."],
      ["Every region performs equally well", "Aggregate AUC gives no region-level guarantee."],
      ["Ranking discrimination is strong on the evaluated data", "AUC supports a ranking claim; calibration, slices, and threshold quality require other evidence."]
    ]),
    q("e24", "d1-l6", "exam", "Stretch", "A model improves a critical slice by one correct case out of ten. The team calls it a proven stable production gain. What is the best response?", 2, [
      ["Accept; ten cases remove uncertainty", "Small samples can have substantial uncertainty."],
      ["Abandon all slice evaluation", "Slice evaluation matters; strengthen the evidence instead."],
      ["Request more representative paired evidence and quantify uncertainty", "A small observed difference does not establish a stable real-world gain."],
      ["Tune on those final-test cases until all are correct", "That overfits the evaluation instead of demonstrating generalization."]
    ])
  ];
})();
