# Foundation & Domain 1 study notes

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-11. Confirmed exam booking: 5 December 2026 (provided by learner).

## How to use this workbook

Read, explain without notes, work examples on paper, then answer the lesson checks. These notes require no coding. They are a complete first-domain sample of our proposed curriculum, not a claim to cover every possible official expert-level objective.

## Start from zero: the essential primer

### AI, ML, and a model

Artificial intelligence (AI) is the broad idea of building systems that perform tasks associated with intelligence, such as recognizing patterns or generating language. Machine learning (ML) is one approach: rather than writing every decision rule by hand, we fit a model using examples. Deep learning uses neural networks with multiple layers. Generative AI produces outputs such as text or images; it is not a synonym for all AI.

A model is a learned mapping from inputs to outputs. A spam model might map an email to a score. A prediction is not proof: a model can be wrong, and a confident output can still be wrong. A simple rule may be better than ML when requirements are fixed and data is scarce.

### Data vocabulary

A dataset is a collection of examples. In a table, one row might represent one past delivery. Features are inputs, such as distance and traffic at departure. A label is the answer we want to learn to predict, such as the actual journey time. Not all datasets have labels.

Numerical values measure quantities; categorical values describe groups. A city name is categorical even if someone assigns each city a numeric ID. Text and images need a suitable representation before most models can process them.

### The only mathematics you need to start

A fraction is a part divided by a whole. If 8 out of 10 predictions are correct, the fraction is 8/10 = 0.8 = 80%. Multiply a fraction by 100 to express it as a percentage. Distinguish percentage points from relative change: 80% to 90% is a 10-percentage-point increase.

The mean is the sum divided by the count. For 2, 3, and 10, the mean is 15/3 = 5. The median is the middle of the sorted values: 3. The large value pulls the mean upward. Variance describes spread using squared distances from the mean; standard deviation brings that spread back to the original units. You need their meaning before memorizing formulas.

An absolute value ignores the sign: |−4| = 4. Squaring multiplies a number by itself: 4² = 16. A square root reverses squaring: √16 = 4. These operations help measure prediction errors without positive and negative errors cancelling.

### The model lifecycle

Define the problem → collect and check data → split the data → prepare inputs → train → choose using validation → evaluate on a reserved test → deploy → monitor. Real projects iterate, but the boundary protecting the test data must remain intact.

Training adjusts learned parameters using examples. Inference uses the trained model on a new input. Evaluation compares outputs with evidence of what happened. Deployment makes the system available to users. Monitoring checks whether its behavior remains acceptable afterward. A good offline score is necessary evidence, not a guarantee of a safe production system.

### How to study without coding

Read one lesson, close it, and explain the idea in your own words. Work the numeric examples with paper or a calculator. Answer the lesson quiz, then explain why each wrong option is wrong. Revisit the idea the next day and again a week later.

For scenarios, identify the decision time, the available evidence, the cost of mistakes, and the constraints. Choose the best action under those conditions, not the option with the most technical vocabulary. Marking a lesson complete tracks your study activity; it does not certify mastery.

## Lesson 1: Frame the problem & understand the data

**Learning objectives**

- Distinguish classification, regression, clustering, and reinforcement learning.
- Identify features, labels, and the moment a prediction must be made.
- Explain sampling, basic statistics, and correlation without assuming causation.

### Start with a decision, not an algorithm

Suppose a delivery company wants to reduce late arrivals. First ask what decision a prediction will support. Predicting journey time at departure is different from predicting whether a package will arrive late after most of its journey. Define the prediction unit (one delivery), the decision time (departure), and the outcome (actual duration). This prevents the team from selecting features that will not exist when the model is used.

A useful success criterion combines model behavior and a business decision. For example, reduce scheduling errors compared with the current route estimate without making delivery promises unrealistic. More data or a complex model does not fix an undefined problem.

### Four learning settings

Supervised learning learns from examples with known answers. Classification predicts a category: late versus on time, or one of several document types. Regression predicts a numerical quantity: journey minutes or electricity demand. The word regression here does not mean that performance is getting worse.

Unsupervised learning seeks structure without target labels. Clustering might group customers by similar behavior; the groups are not automatically meaningful business categories. Reinforcement learning concerns an agent choosing actions and receiving rewards over time. It is not simply another name for retraining from corrected labels.

- Predict tomorrow's temperature: regression.
- Route a support message to billing, technical support, or cancellation: classification.
- Discover similar purchasing groups with no group labels: clustering.
- Learn a sequence of warehouse-robot actions from rewards: reinforcement learning.

### Features, labels, and representations

For a house-price model, floor area and neighborhood are possible features; sale price is the label. A feature can be available but still inappropriate, such as a unique row ID that mostly encourages memorization. Derived features can summarize useful information, such as distance per planned stop, provided they are computable at prediction time.

Labels can be delayed or noisy. A support issue marked resolved may only mean someone closed the ticket, not that the customer was satisfied. Check whether the label represents the desired outcome and whether different annotators apply the same definition.

### Statistics for judging a dataset

The mean describes an average but is sensitive to extreme values. The median is often more representative when a small number of deliveries take unusually long. Spread matters too: two routes may have the same average duration but different variability. A histogram shows where values concentrate; counts by category show which groups are underrepresented.

A sample is the subset you observe; the population is the wider group you care about. If your data includes only daytime urban deliveries, a test drawn from the same sample tells you little about nighttime rural routes. More examples of the same biased sample do not necessarily repair that coverage gap.

Correlation means two variables move together. It does not show that changing one causes the other. Sales and advertising may rise together because both increase during holidays. A causal business claim needs an appropriate experimental or causal design, not just a predictive model.

### Worked example: labels and timing

At 08:00 a dispatcher needs a delivery-duration estimate. Departure location, destination, and the weather forecast issued before 08:00 are eligible inputs. The recorded arrival time and the driver's end-of-trip rating are not: they occur after the decision. Duration is the numerical label, so this is supervised regression.

For observed durations of 20, 25, and 90 minutes, the mean is (20 + 25 + 90)/3 = 45 minutes; the median is 25 minutes. The difference suggests an unusually long journey, but investigate before deleting it. It could be a valid high-risk case rather than a data error.

**Remember:** Define the output, decision time, data population, and error costs before choosing a model.

### Common exam traps

- A number used as an ID is not necessarily a numerical quantity.
- High correlation is not evidence that an intervention will work.
- A feature must exist at prediction time, not just in the historical database.

### Explain without notes

- Why is predicting demand regression but assigning a demand category classification?
- Give one label that could be misleading and explain how you would check it.

### Learning references

- Google Machine Learning glossary: https://developers.google.com/machine-learning/glossary

## Lesson 2: Prepare data without creating new problems

**Learning objectives**

- Select sensible handling for missing values, categories, and outliers.
- Explain scaling and why learned preparation must use training data only.
- Recognize imbalance and sampling mistakes.

### Audit before transforming

Check types, ranges, units, duplicates, missingness, label consistency, and the origin of each field. A temperature value of 310 might be wrong in Celsius but valid in Kelvin. Two records may be duplicates or two genuine separate events. A surprising value needs investigation, not automatic removal.

Track what changed and why so preparation is reproducible. Compare subgroup coverage: a model serving many regions should not silently learn almost exclusively from one region. Privacy and permission constraints also apply before training; not every accessible field should be used.

### Missing values

Imputation means filling missing values according to a chosen rule, such as the training-set median for a numerical field. A separate missingness indicator can preserve the information that the original value was absent. Deleting incomplete rows may be appropriate in some cases, but it can shrink the sample or remove an important group disproportionately.

Never assume a missing value means zero. Missing income is not the same as no income. The reason for missingness matters: one branch may lack an integration, or users with a particular characteristic may avoid a question. A preparation choice can therefore affect both prediction and fairness.

### Represent categories and numerical ranges

One-hot encoding gives a category its own indicator, such as is_Riyadh and is_Jeddah. Arbitrarily numbering unordered cities 1, 2, and 3 can suggest a nonexistent order or distance to some algorithms. Very large category vocabularies may need other approaches; there is no universally best encoding.

Standardization commonly subtracts the training mean and divides by the training standard deviation. Min-max scaling commonly maps values using training minima and maxima. Distance-based models can be dominated by large-scale features: an income measured in thousands may outweigh an age measured in tens. Scaling is often helpful for nearest neighbors and many gradient-based models; decision trees generally do not need it for the same reason.

Fit any learned imputer, scaler, or encoder on the training partition, then reuse it unchanged on validation, test, and new inputs. During cross-validation, fit it inside each training fold. Rules that do not learn from the data, such as a known unit conversion, are different from estimating a mean from all rows.

### Imbalance and resampling

If 1% of transactions are fraudulent, predicting not fraudulent every time yields 99% accuracy while detecting no fraud. Preserve a representative validation and test distribution so evaluation reflects the intended use. Class weighting or training-set over/undersampling can help learning, but neither automatically fixes evaluation or calibration.

Split first, then apply training resampling within each training fold. Oversampling before splitting can put copies or close synthetic relatives on both sides, contaminating the assessment. Synthetic examples cannot create evidence about entirely missing populations.

### Worked example: the preprocessing boundary

Training journey distances are 10, 20, and 30 km. Their mean is 20 km. A missing distance can be filled using a training-derived rule; a validation journey of 100 km must not change that rule. Including it would make validation influence preparation.

When a new input exceeds the training range, min-max scaling can produce values outside 0–1 unless you explicitly clip them. The mathematical transform is not a guarantee that future inputs remain within the original range. Unexpected categories and ranges need defined handling.

**Remember:** Audit the data, split it, then learn preparation from training data only.

### Common exam traps

- Filling all blanks with zero changes the meaning of many fields.
- Removing all outliers can erase valid but important cases.
- Resampling before splitting can leak information and distort test prevalence.

### Explain without notes

- Why should a validation value not change the training mean?
- When could dropping missing rows introduce bias?

### Learning references

- Google ML Crash Course — Dividing the original dataset: https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets
- Google Machine Learning glossary: https://developers.google.com/machine-learning/glossary

## Lesson 3: Protect evaluation: splits, leakage & validation

**Learning objectives**

- Assign the correct roles to training, validation, and test sets.
- Choose random, stratified, grouped, or chronological splits.
- Identify leakage and explain cross-validation.

### Three different jobs

Training data adjusts the model's learned parameters. Validation data informs choices such as model family, feature set, regularization, or decision threshold. The test set is reserved for the final assessment of the selected process. If the team repeatedly chooses models based on test scores, that set has become a tuning set regardless of what it is called.

A 70/15/15 split is an example, not a rule or an official exam requirement. Enough representative examples are needed to estimate performance; rare outcomes may need many observations. Reserving more evaluation data means less training data, so design the allocation for the data size and risk.

### Choose a split that resembles the intended use

Random splitting is often appropriate for approximately independent examples drawn from the same population. Stratification preserves category proportions across partitions where feasible; it does not remove leakage or guarantee fairness.

A grouped split keeps all records from one entity, such as a patient or customer, in a single partition when you need to assess performance on unseen entities. If images from the same patient appear in both training and test, the model may recognize the patient rather than generalize to new people.

For a forecast, train on earlier periods and validate/test on later periods. A random time split can let future patterns inform a past prediction. Rolling or expanding-window validation tests performance across multiple successive time periods. The appropriate split depends on whether deployment concerns new entities, future observations of known entities, or both.

### Leakage is an information-boundary failure

Target leakage occurs when an input contains the answer or information created after it. A repayment-status field is not valid when deciding whether to approve a loan. Train-test contamination occurs when evaluation information influences fitting or selection, such as fitting a scaler on all rows or leaving duplicate examples across partitions.

Suspiciously high scores are a reason to audit, not proof of fraud or proof of a perfect model. Check timestamps, feature definitions, duplicates, joins, group boundaries, and preprocessing. Feature engineering using labels, such as target-based category encoding, needs especially careful out-of-fold handling.

### Cross-validation

In five-fold cross-validation, divide the development data into five parts. Train on four and validate on the fifth, repeating so each part is used for validation once. Average the validation results and inspect their variation. Each fold requires fresh fitting, including any learned preprocessing.

Use stratified, grouped, or time-aware folds when the data requires them. Cross-validation is not permission to reuse the final test for tuning. When extensive hyperparameter selection makes performance estimation optimistic, nested cross-validation can separate inner selection from outer evaluation. You only need the conceptual boundary here, not code.

### Worked example: customers and future demand

A dataset has 100 customers, each with 10 purchases. To assess predictions on new customers, keep each customer's 10 rows together. Randomly distributing all 1,000 rows lets familiar customers appear in the test set and answers a different question.

For next-month demand prediction using three years of data, use an earlier interval for training, a later interval for validation, and the latest reserved interval for testing. Do not compute a feature using next month's total demand. Even with a good split, that feature directly leaks future information.

**Remember:** Your evaluation is only as honest as its information boundaries and deployment resemblance.

### Common exam traps

- Stratification does not prevent records of the same patient crossing partitions.
- Repeated test-driven choices contaminate the final assessment.
- Cross-validation must refit preprocessing and respect groups or time.

### Explain without notes

- What question does a grouped split answer that a row-level random split may not?
- How does a test set become a validation set in practice?

### Learning references

- Google ML Crash Course — Dividing the original dataset: https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets
- Google Machine Learning glossary: https://developers.google.com/machine-learning/glossary

## Lesson 4: Baselines, model families & generalization

**Learning objectives**

- Compare common model families at a conceptual level.
- Distinguish parameters, hyperparameters, and loss.
- Diagnose underfitting and overfitting from training/validation evidence.

### Earn complexity by beating a baseline

A baseline is a simple reference: the current business rule, a majority-class classifier, or a sensible constant prediction. For regression, a training mean is a natural squared-error baseline and a training median is a natural absolute-error baseline. A model that cannot beat a relevant baseline has not demonstrated added value.

Compare candidates under the same data split and metric. A complex model with a slightly better score might be worse once latency, cost, stability, or interpretability constraints are included. Model selection is a constrained decision, not a competition for the largest number.

### A practical map of algorithms

Linear regression predicts a numerical output from a weighted combination of inputs. It can be useful and interpretable but a simple form may miss nonlinear structure. Logistic regression is commonly a classification model: despite its name, its score can represent a probability of a class.

A decision tree asks a sequence of feature-based questions. Trees handle nonlinear relationships but a deep tree can memorize training quirks. A random forest combines many randomized trees, typically reducing variance. Gradient boosting builds successive models that correct shortcomings of the existing ensemble; powerful performance still requires tuning and honest validation.

Nearest-neighbor methods predict using similar examples, making feature scaling and distance definitions important. Support vector machines seek a decision boundary with a margin and can use kernels for nonlinear separation. Naive Bayes uses probability with a simplifying conditional-independence assumption; it can be a useful baseline even when that assumption is imperfect.

Clustering methods such as k-means group points by similarity rather than predict known labels. K-means needs a chosen number of clusters and a suitable distance representation. A cluster is not automatically a ground-truth segment. Neural networks are another model family; deeper coverage belongs to Domain 2.

### Training language

Parameters are learned during training, such as linear-model weights. Hyperparameters are choices made around that process, such as tree depth, learning rate, or regularization strength. Loss measures how undesirable predictions are during fitting; it is not always the final business-facing evaluation metric.

Gradient descent repeatedly changes parameters in a direction intended to reduce loss. The learning rate controls update size. Too large can make training unstable; too small can make progress slow. You do not need to implement the optimizer to recognize why training can fail.

### Underfitting and overfitting

Underfitting occurs when the model fails to capture useful structure. High training and validation error can suggest insufficient capacity, weak features, or inadequate training, although data and label problems can cause similar symptoms. Overfitting occurs when the model fits training specifics that do not generalize: low training error but substantially higher validation error is a common signal.

Increasing capacity may reduce underfitting but worsen overfitting. Regularization penalizes or restricts complexity; early stopping halts training based on validation behavior; more representative data can help generalization. None of these is a universal fix. First exclude leakage and an inappropriate split.

The bias–variance tradeoff describes two sources of predictive error: systematic simplification and sensitivity to the particular training sample. It is not the same as social or demographic bias. Learning curves, showing performance against data size or training progress, help diagnose whether collecting more examples is likely to help.

### Worked example: choose the next action

A tree has 1% training error and 22% validation error on a verified representative split. Making the tree deeper is unlikely to solve the generalization gap. Try limiting depth or another regularized approach, tune on validation, and compare against the baseline.

A simpler model has 24% training error and 25% validation error. The small gap does not make it good: both errors are high. Investigate features, labels, optimization, and capacity. An evaluation must consider absolute performance as well as the gap.

**Remember:** Beat a relevant baseline, diagnose the failure, and only then choose the remedy.

### Common exam traps

- Logistic regression is not ordinary numerical regression just because of its name.
- A tiny training/validation gap can still describe an unusable model.
- Regularization does not repair a leaking evaluation.

### Explain without notes

- Explain one parameter and one hyperparameter without code.
- Why might a simpler model be the better engineering choice?

### Learning references

- Google ML Crash Course — Regression loss: https://developers.google.com/machine-learning/crash-course/linear-regression/loss
- Google Machine Learning glossary: https://developers.google.com/machine-learning/glossary

## Lesson 5: Classification metrics & decision thresholds

**Learning objectives**

- Build a confusion matrix and compute accuracy, precision, recall, and F1.
- Relate metric choice to false-positive and false-negative costs.
- Explain threshold tradeoffs without assuming precision always rises.

### Define positive before counting

In a fraud detector, let positive mean fraudulent. A true positive (TP) is actual fraud correctly flagged. A false positive (FP) is a legitimate transaction flagged as fraud. A false negative (FN) is fraud missed by the detector. A true negative (TN) is a legitimate transaction correctly allowed. Positive means the designated event, not something morally good.

A confusion matrix compares predicted classes with actual classes. Check which axis is actual and which is predicted instead of assuming every table uses the same layout. Changing the definition of positive changes precision and recall.

### Four metrics, four questions

Accuracy = (TP + TN)/(TP + TN + FP + FN). It asks what fraction of all decisions were correct. Precision = TP/(TP + FP). It asks what fraction of the alerts were genuine. Recall = TP/(TP + FN). It asks what fraction of all actual positives were detected.

F1 = 2 × precision × recall/(precision + recall), or 2TP/(2TP + FP + FN). It is a harmonic mean, emphasizing the weaker of precision and recall. It does not incorporate true negatives or automatically reflect business error costs. Specificity = TN/(TN + FP); false-positive rate = FP/(FP + TN).

If a denominator is zero, the metric is mathematically undefined; implementations may apply a chosen convention. A classifier that never raises an alert does not earn perfect operational performance because precision cannot be calculated. Always report relevant counts as well as rates.

### Worked example: compute before interpreting

Of 100 transactions, 20 are fraudulent. The detector flags 25: 15 are fraud and 10 legitimate. It misses 5 frauds and correctly allows 70 legitimate transactions. Therefore TP = 15, FP = 10, FN = 5, TN = 70.

Accuracy = (15 + 70)/100 = 85%. Precision = 15/25 = 60%. Recall = 15/20 = 75%. F1 = 30/(30 + 10 + 5) ≈ 66.7%. The model finds most frauds, but 40% of alerts are false alarms. Whether this is acceptable depends on review capacity and the cost of missed fraud.

Confusion matrix: actual outcomes are rows; predictions are columns

| Actual / predicted | Flagged as fraud | Allowed as legitimate |
| --- | --- | --- |
| Actual fraud (20) | TP = 15 | FN = 5 |
| Actual legitimate (80) | FP = 10 | TN = 70 |

### Choose metrics from consequences

If missing a dangerous fault is much more costly than inspecting a false alarm, prioritize recall subject to an acceptable false-alarm burden. If an alert automatically blocks an important legitimate payment, precision and false-positive consequences need close attention. Often you need constraints on several metrics rather than a single maximum.

With rare positives, accuracy is especially misleading. A no-alert baseline might achieve 99% accuracy while recall is zero. In multiclass problems, per-class metrics show whether a small class is ignored. Macro averaging gives classes equal weight; support-weighted averaging weights them by their number of examples. An overall average can hide failures.

### Scores become decisions through a threshold

A classifier may output a score between 0 and 1. A threshold of 0.5 flags scores at or above 0.5, but 0.5 is not universally appropriate. Choose the threshold on validation data using costs, constraints, and review capacity—not on the final test.

For the same fixed scores, lowering the threshold increases or preserves the number flagged: recall cannot decrease and false-positive count cannot decrease. Precision often falls but need not change monotonically; the added examples might have different label proportions. Increasing the threshold often trades fewer false alarms for more misses. A threshold does not improve the underlying ranking.

**Remember:** Precision checks your alerts; recall checks the actual positives you found. Choose the tradeoff from consequences.

### Common exam traps

- 99% accuracy can coexist with zero detection of a rare event.
- Precision and recall use different denominators.
- F1 is not an automatic substitute for business costs or safety constraints.

### Explain without notes

- Describe a case where a false positive is more costly than a false negative.
- Calculate precision and recall when TP = 12, FP = 3, and FN = 8.

### Learning references

- Google ML Crash Course — Accuracy, recall, precision, and related metrics: https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall

## Lesson 6: Regression, ranking & defensible model selection

**Learning objectives**

- Calculate MAE, MSE, and RMSE and explain their units.
- Distinguish ranking quality, threshold decisions, and probability calibration.
- Interpret slices and uncertainty, then recommend an evidence-based release decision.

### Errors for numerical predictions

A residual is the difference between actual and predicted values; state your sign convention. Mean absolute error (MAE) averages the absolute residuals. Mean squared error (MSE) averages squared residuals. Root mean squared error (RMSE) is the square root of MSE. Lower values are better when comparing the same target, data, and units.

MAE and RMSE have the same units as the target. MSE has squared units. RMSE emphasizes larger mistakes more than MAE because of the squaring step. MAE is often easier to explain as average absolute error. Neither says whether the errors occur in the most critical cases.

R² compares squared error with predicting the evaluation-set mean: 1 − model squared-error sum / total squared deviation from that mean. On held-out data it can be negative if the model performs worse than that constant reference. It is not a percentage of predictions that are correct. Percentage error metrics can be problematic when actual values are zero or near zero.

### Worked example: different penalties

Actual delivery times are 10, 20, and 30 minutes; predictions are 12, 18, and 36. Residuals (actual − predicted) are −2, 2, and −6. Absolute errors are 2, 2, and 6, so MAE = 10/3 ≈ 3.33 minutes.

Squared errors are 4, 4, and 36, so MSE = 44/3 ≈ 14.67 minutes². RMSE = √14.67 ≈ 3.83 minutes. The six-minute mistake contributes most of the squared error. You should choose a metric that matches the operational consequence, not whichever makes the score look smaller.

### Ranking is not calibration

ROC plots true-positive rate against false-positive rate over thresholds. ROC-AUC measures ranking discrimination: how often a randomly selected positive receives a higher score than a negative, with a tie convention. An AUC around 0.5 suggests chance-level ranking; 1.0 is perfect separation on the evaluated examples. A high AUC does not specify a deployment threshold.

Precision-recall curves emphasize positive detections and alert quality; they are often particularly informative when positives are rare. Their baseline depends on class prevalence. Comparing scores across datasets with very different prevalence requires care.

Calibration asks whether predicted probabilities match observed frequencies. Among examples assigned about 80% probability, do roughly 80% have the event? A model can rank cases well but be overconfident. Reliability diagrams compare predicted and observed rates in bins; Brier score measures mean squared error of probability predictions. Calibration procedures must also respect training/validation boundaries.

### Look beyond one average

Evaluate meaningful slices, such as region, device, document type, or customer segment. A 92% overall result can conceal poor performance on a small but important group. A slice with only five examples cannot support a confident conclusion; collect more representative evidence and quantify uncertainty where possible.

Confidence intervals communicate uncertainty around a measured statistic, not a promise about each future prediction. Differences of a fraction of a percentage point may not justify a new model, especially with small or highly correlated samples. When comparing models, use the same appropriate evaluation examples and inspect paired outcomes where suitable.

### A complete selection argument

Define the baseline, primary metric, error-cost constraints, acceptable slices, and operational requirements before comparing candidates. Select the model and threshold using validation. Lock the process, then evaluate the reserved test once for a final estimate; if you redesign based on that result, acknowledge that the set informed development and obtain fresh final evidence.

Suppose candidate A has slightly better validation recall but exceeds the review team's daily capacity. Candidate B meets the recall minimum and alert budget. B can be the better choice. If both fail badly on one required region, neither is ready merely because its overall score is high.

Write down the data version, split rationale, preparation steps, chosen settings, metrics with counts, important limitations, and release recommendation. Production monitoring is still needed because data and behavior can change; deeper deployment coverage follows in Domain 4.

**Remember:** A defensible evaluation combines correct metrics, protected data, representative slices, uncertainty, and real constraints.

### Common exam traps

- ROC-AUC does not prove that an 80% score is an 80% probability.
- RMSE is not in squared target units; MSE is.
- A good global average is not a release guarantee for every subgroup.

### Explain without notes

- Why might a high-AUC model still be unsafe for probability-based decisions?
- What evidence would you request before accepting a small improvement on a tiny slice?

### Learning references

- Google ML Crash Course — Regression loss: https://developers.google.com/machine-learning/crash-course/linear-regression/loss
- Google ML Crash Course — ROC and AUC: https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc
- Google ML Crash Course — Accuracy, recall, precision, and related metrics: https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall
- Google ML Crash Course — Dividing the original dataset: https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets

## Domain 1 revision sheet

- **Task:** Category → classification; numerical quantity → regression; unlabeled similarity groups → clustering.
- **Information boundary:** Only use features available at prediction time. Fit learned preprocessing inside training partitions.
- **Partition roles:** Train learns; validation chooses; reserved test estimates the locked process.
- **Split design:** Independent rows → random; label balance → stratified; unseen entities → grouped; forecasting → chronological.
- **Fitting:** Low train error + high validation error suggests overfitting. Both high can suggest underfitting; investigate data too.
- **Accuracy:** (TP + TN)/(TP + TN + FP + FN). Compare with a relevant baseline, especially with imbalance.
- **Precision:** TP/(TP + FP): of the alerts, how many were real?
- **Recall:** TP/(TP + FN): of the actual positives, how many were found?
- **F1:** 2TP/(2TP + FP + FN). Balances precision and recall, not arbitrary business costs.
- **Regression:** MAE = mean absolute error; MSE = mean squared error; RMSE = square root of MSE.
- **Ranking vs probability:** AUC describes ranking; calibration describes probability reliability.
- **Selection:** Consider costs, constraints, slices, counts, uncertainty, and operational requirements—not one average.

## Glossary

- **AI:** Artificial intelligence: the broad field of systems performing tasks associated with intelligence.
- **ML:** Machine learning: fitting patterns or decision functions from examples.
- **Feature:** An input used by a model; it must be appropriate and available at prediction time.
- **Label:** The known outcome used as the target in supervised learning.
- **Inference:** Using a trained model to produce an output for an input.
- **Classification:** Predicting a category or class.
- **Regression:** Predicting a numerical quantity.
- **Clustering:** Grouping examples by similarity without predefined target labels.
- **Imputation:** Filling missing values using a defined rule.
- **One-hot encoding:** Representing categories with separate indicator features.
- **Standardization:** Commonly subtracting a training mean and dividing by a training standard deviation.
- **Leakage:** Information crossing a boundary that makes evaluation unrealistically favorable.
- **Cross-validation:** Repeated development-data splits to assess candidate choices; not a substitute for a protected final assessment.
- **Baseline:** A simple or current approach used as a performance reference.
- **Parameter:** A value learned during model fitting.
- **Hyperparameter:** A configuration choice such as tree depth or learning rate.
- **Loss:** A measure of undesirable predictions used during fitting.
- **Regularization:** Penalizing or restricting complexity to help generalization.
- **Overfitting:** Learning training-specific patterns that do not generalize well.
- **Underfitting:** Failing to capture useful structure even in training data.
- **TP / FP / FN / TN:** True positive / false positive / false negative / true negative, relative to the designated positive class.
- **Precision:** TP divided by TP + FP; the proportion of alerts that are genuine positives.
- **Recall:** TP divided by TP + FN; the proportion of actual positives detected.
- **F1:** The harmonic mean of precision and recall.
- **MAE / MSE / RMSE:** Mean absolute error / mean squared error / root mean squared error.
- **ROC-AUC:** Area under the receiver operating characteristic curve: a ranking-discrimination measure across thresholds.
- **Calibration:** Agreement between predicted probabilities and observed outcome frequencies.
- **Slice:** A meaningful subset of evaluation examples, such as a region or device category.
- **MLOps / LLMOps:** Operational practices for ML systems / large-language-model systems; covered in the planned Domain 4.
- **RAG:** Retrieval-augmented generation: using retrieved information to support generation; planned Domain 2.
- **PDPL:** Saudi Personal Data Protection Law; current legal requirements need official verification in planned Domain 6.

## Lesson checks — questions

These 18 questions are separate from the 24-question domain paper. Answer before opening the explanations below.

### Frame the problem & understand the data

### 1. A service estimates how many minutes a bus journey will take. Which task is this?

A. Clustering

B. Classification

C. Regression

D. Reinforcement learning

### 2. At loan application time, which input most clearly leaks future information?

A. Whether the loan was repaid six months later

B. The requested loan amount

C. Declared employment status

D. The application date

### 3. For values 4, 5, and 30, which statement is correct?

A. The mean and median are both 5

B. The median is 5 and the mean is 13

C. The median is 13 and the mean is 5

D. 30 must be deleted first

### Prepare data without creating new problems

### 1. An unordered city field is stored as Riyadh = 1, Jeddah = 2, Dammam = 3. What is the main concern?

A. Every city field must be deleted

B. Dammam is three times larger than Riyadh

C. One-hot encoding creates a future label

D. Some models may infer a false order or distance

### 2. When should a scaler learn its mean during five-fold cross-validation?

A. Once from all data, including the final test

B. Separately from each fold's training portion

C. Only from the validation fold

D. From whichever fold gives the best final test score

### 3. Why can replacing every missing income with zero be harmful?

A. Unknown income and no income have different meanings

B. Models can never accept zero

C. Median imputation is always illegal

D. Every affected record automatically becomes an outlier

### Protect evaluation: splits, leakage & validation

### 1. Which partition should guide selection of tree depth?

A. The final reserved test set

B. Private production records without permission

C. The validation set

D. No data; always choose the deepest tree

### 2. A dataset has several scans per patient. Deployment will serve new patients. Which split best respects that goal?

A. Keep each patient's scans in one partition

B. Scatter each patient's scans across all partitions

C. Put every abnormal scan in training

D. Duplicate every scan before splitting

### 3. A model forecasts next week's demand. Which validation design is most appropriate?

A. Train on the latest week and validate on an earlier week

B. Mix all weeks so future examples inform earlier predictions

C. Evaluate only the training rows

D. Train on earlier periods and validate on later periods

### Baselines, model families & generalization

### 1. What does logistic regression commonly predict?

A. An unlabeled similarity cluster

B. A class probability used for classification

C. Only a continuous journey duration

D. A sequence of rewarded actions

### 2. On a verified split, training error is 2% and validation error is 28%. What is the clearest concern?

A. The validation model is necessarily perfect

B. The model must be too simple

C. Overfitting

D. There is no need for a baseline

### 3. Which item is a hyperparameter rather than a learned linear-model parameter?

A. A fitted feature weight

B. The fitted intercept

C. A learned coefficient for distance

D. The chosen regularization strength

### Classification metrics & decision thresholds

### 1. A detector has TP = 12, FP = 3, and FN = 8. What are precision and recall?

A. Precision 80%; recall 60%

B. Precision 60%; recall 80%

C. Both 80%

D. Both 60%

### 2. Only 1% of cases have a fault. A system always predicts no fault. What is true?

A. It detects 99% of faults

B. Its recall is 100%

C. Its accuracy is 99%, but fault recall is zero

D. Fault detection is solved

### 3. For fixed classifier scores, lowering the decision threshold has which guaranteed effect?

A. Precision always increases

B. The number of positive predictions cannot decrease

C. The score ranking improves

D. False-negative count must increase

### Regression, ranking & defensible model selection

### 1. For absolute errors of 1, 2, and 6 minutes, what is MAE?

A. 9 minutes

B. 41 minutes²

C. √3 minutes

D. 3 minutes

### 2. A classifier has excellent ROC-AUC, but its 90% predictions are correct only about 60% of the time. What is the main distinction?

A. Ranking can be strong while probabilities are poorly calibrated

B. AUC and calibration are identical

C. A higher threshold calibrates all probabilities

D. The test must contain no positives

### 3. Overall accuracy is 94%, but an important region has 60% accuracy on only five cases. What should the team do?

A. Ignore the region because the average is high

B. Claim the region's true accuracy is exactly 60%

C. Investigate the slice and collect more representative evidence

D. Tune on the final test until the region looks good

## Lesson checks — explanations (spoilers)

### Frame the problem & understand the data

#### Check 1: A service estimates how many minutes a bus journey will take. Which task is this?

**Correct answer: C.**

- **A. Clustering:** Clustering discovers similarity groups without duration labels.
- **B. Classification:** Classification predicts categories, not numerical durations.
- **C. Regression — correct:** Minutes are a numerical quantity, so predicting them is regression.
- **D. Reinforcement learning:** No sequence of rewarded actions is described.

#### Check 2: At loan application time, which input most clearly leaks future information?

**Correct answer: A.**

- **A. Whether the loan was repaid six months later — correct:** This future outcome is unavailable at application time and reveals the target.
- **B. The requested loan amount:** The amount is available when the application is submitted.
- **C. Declared employment status:** This needs quality checks but is available at application time.
- **D. The application date:** The date exists at the decision time and does not inherently reveal repayment.

#### Check 3: For values 4, 5, and 30, which statement is correct?

**Correct answer: B.**

- **A. The mean and median are both 5:** Only the median is 5; the mean includes all values.
- **B. The median is 5 and the mean is 13 — correct:** The middle value is 5; (4 + 5 + 30)/3 = 13.
- **C. The median is 13 and the mean is 5:** This reverses the correct values.
- **D. 30 must be deleted first:** An extreme value can be valid; investigate before deleting it.

### Prepare data without creating new problems

#### Check 1: An unordered city field is stored as Riyadh = 1, Jeddah = 2, Dammam = 3. What is the main concern?

**Correct answer: D.**

- **A. Every city field must be deleted:** Categories can be useful; deletion is not universally required.
- **B. Dammam is three times larger than Riyadh:** These codes do not measure city size.
- **C. One-hot encoding creates a future label:** Category indicators represent inputs, not future outcomes.
- **D. Some models may infer a false order or distance — correct:** Numeric IDs can suggest relationships the categories do not possess.

#### Check 2: When should a scaler learn its mean during five-fold cross-validation?

**Correct answer: B.**

- **A. Once from all data, including the final test:** Evaluation data would influence preparation.
- **B. Separately from each fold's training portion — correct:** The held-out fold must not influence learned preprocessing.
- **C. Only from the validation fold:** That would fit preparation using the data being evaluated.
- **D. From whichever fold gives the best final test score:** Test-driven selection contaminates final assessment.

#### Check 3: Why can replacing every missing income with zero be harmful?

**Correct answer: A.**

- **A. Unknown income and no income have different meanings — correct:** A zero implies observed absence, not necessarily missing information.
- **B. Models can never accept zero:** Zero is a valid value in many models and fields.
- **C. Median imputation is always illegal:** There is no such universal rule; legality depends on context.
- **D. Every affected record automatically becomes an outlier:** The effect depends on the distribution; the meaning change is the core issue.

### Protect evaluation: splits, leakage & validation

#### Check 1: Which partition should guide selection of tree depth?

**Correct answer: C.**

- **A. The final reserved test set:** Using it to choose depth turns it into tuning data.
- **B. Private production records without permission:** Permission and a sound evaluation design are required.
- **C. The validation set — correct:** Validation guides hyperparameter selection while preserving the final test.
- **D. No data; always choose the deepest tree:** No depth is universally optimal; deep trees can overfit.

#### Check 2: A dataset has several scans per patient. Deployment will serve new patients. Which split best respects that goal?

**Correct answer: A.**

- **A. Keep each patient's scans in one partition — correct:** A patient-grouped split tests unseen-person generalization.
- **B. Scatter each patient's scans across all partitions:** Patient-specific patterns can cross boundaries and inflate scores.
- **C. Put every abnormal scan in training:** The test would not represent the target task.
- **D. Duplicate every scan before splitting:** Copies across partitions contaminate evaluation.

#### Check 3: A model forecasts next week's demand. Which validation design is most appropriate?

**Correct answer: D.**

- **A. Train on the latest week and validate on an earlier week:** This reverses the deployment time direction.
- **B. Mix all weeks so future examples inform earlier predictions:** Future information can create unrealistic results.
- **C. Evaluate only the training rows:** This does not measure future generalization.
- **D. Train on earlier periods and validate on later periods — correct:** A chronological design resembles forecasting future demand.

### Baselines, model families & generalization

#### Check 1: What does logistic regression commonly predict?

**Correct answer: B.**

- **A. An unlabeled similarity cluster:** Logistic regression is usually supervised classification.
- **B. A class probability used for classification — correct:** Despite its name, logistic regression commonly supports classification.
- **C. Only a continuous journey duration:** Linear regression is a more direct example of continuous prediction.
- **D. A sequence of rewarded actions:** That describes reinforcement learning.

#### Check 2: On a verified split, training error is 2% and validation error is 28%. What is the clearest concern?

**Correct answer: C.**

- **A. The validation model is necessarily perfect:** A 28% error rate does not establish perfection.
- **B. The model must be too simple:** The large generalization gap is not a typical underfitting pattern.
- **C. Overfitting — correct:** Training examples are fitted much better than unseen validation examples.
- **D. There is no need for a baseline:** A baseline is still needed to interpret usefulness.

#### Check 3: Which item is a hyperparameter rather than a learned linear-model parameter?

**Correct answer: D.**

- **A. A fitted feature weight:** This is learned during fitting.
- **B. The fitted intercept:** The intercept is a learned parameter.
- **C. A learned coefficient for distance:** This coefficient is a fitted parameter.
- **D. The chosen regularization strength — correct:** This configures fitting and is usually selected using validation.

### Classification metrics & decision thresholds

#### Check 1: A detector has TP = 12, FP = 3, and FN = 8. What are precision and recall?

**Correct answer: A.**

- **A. Precision 80%; recall 60% — correct:** Precision = 12/15 = 80%; recall = 12/20 = 60%.
- **B. Precision 60%; recall 80%:** This swaps the two denominators.
- **C. Both 80%:** Recall includes eight misses, giving 60%.
- **D. Both 60%:** Precision includes three false alerts, giving 80%.

#### Check 2: Only 1% of cases have a fault. A system always predicts no fault. What is true?

**Correct answer: C.**

- **A. It detects 99% of faults:** It detects none; accuracy is not fault recall.
- **B. Its recall is 100%:** No actual positives are detected, so recall is zero.
- **C. Its accuracy is 99%, but fault recall is zero — correct:** A majority baseline can look accurate while missing the event completely.
- **D. Fault detection is solved:** The system never performs the required detection.

#### Check 3: For fixed classifier scores, lowering the decision threshold has which guaranteed effect?

**Correct answer: B.**

- **A. Precision always increases:** Precision depends on the label mix of newly admitted alerts.
- **B. The number of positive predictions cannot decrease — correct:** A lower cutoff includes existing positives and possibly additional examples.
- **C. The score ranking improves:** Threshold changes do not alter score ordering.
- **D. False-negative count must increase:** On fixed examples a lower cutoff cannot increase missed positives.

### Regression, ranking & defensible model selection

#### Check 1: For absolute errors of 1, 2, and 6 minutes, what is MAE?

**Correct answer: D.**

- **A. 9 minutes:** Nine is the sum, not the mean.
- **B. 41 minutes²:** 41 is the squared-error sum, not MAE.
- **C. √3 minutes:** MAE does not take a square root.
- **D. 3 minutes — correct:** (1 + 2 + 6)/3 = 3 minutes.

#### Check 2: A classifier has excellent ROC-AUC, but its 90% predictions are correct only about 60% of the time. What is the main distinction?

**Correct answer: A.**

- **A. Ranking can be strong while probabilities are poorly calibrated — correct:** AUC describes ordering; calibration describes probability reliability.
- **B. AUC and calibration are identical:** They measure different properties.
- **C. A higher threshold calibrates all probabilities:** Thresholding changes decisions, not the probability estimates.
- **D. The test must contain no positives:** The results do not imply an absence of positives.

#### Check 3: Overall accuracy is 94%, but an important region has 60% accuracy on only five cases. What should the team do?

**Correct answer: C.**

- **A. Ignore the region because the average is high:** Averages can hide critical failures.
- **B. Claim the region's true accuracy is exactly 60%:** Five cases give an uncertain estimate, not an exact population rate.
- **C. Investigate the slice and collect more representative evidence — correct:** The warning matters, and uncertainty calls for better evidence.
- **D. Tune on the final test until the region looks good:** This contaminates evaluation instead of resolving the evidence gap.

## Sources

- **User-supplied SDAIA AI Engineer Badge image** (Domain names and weights): ../AI%20Engineer%20Badge.png
  Supplied locally by the learner; not independently retrieved from SDAIA.
- **Athka X — AI Engineer Badge** (Official assessment methodology): https://athkax.sdaia.gov.sa/badges/61af22d9-2e3e-4412-9675-e8b4504a7d20
  Read in the rendered public page on 11 October 2026.
- **Google ML Crash Course — Dividing the original dataset** (Learning reference): https://developers.google.com/machine-learning/crash-course/overfitting/dividing-datasets
  Training, validation, testing, representative samples, and duplicate leakage.
- **Google ML Crash Course — Accuracy, recall, precision, and related metrics** (Learning reference): https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall
  Metric definitions, class imbalance, and error-cost tradeoffs.
- **Google ML Crash Course — ROC and AUC** (Learning reference): https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc
  Ranking across thresholds and precision-recall curves.
- **Google ML Crash Course — Regression loss** (Learning reference): https://developers.google.com/machine-learning/crash-course/linear-regression/loss
  MAE, MSE, RMSE, and sensitivity to large errors.
- **Google Machine Learning glossary** (Further reading): https://developers.google.com/machine-learning/glossary
  A supplementary glossary, not an official SDAIA syllabus.
