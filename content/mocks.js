// Original reserved mock pool. Load after questions.js in both browser and Node.
(() => {
  let number = 0;
  // Author with the best answer first. These fixed editorial positions avoid a
  // repeating-letter key; browser shuffling still uses the resulting original indexes.
  const answerPositions = [3, 1, 0, 1, 3, 0, 1, 0, 1, 2, 1, 3, 1, 1, 1, 0, 3, 1, 1, 0, 0, 1, 3, 1, 3, 2, 1, 3, 1, 2, 3, 3, 3, 1, 3, 3, 0, 1, 1, 2, 1, 0, 2, 2, 2, 3, 1, 3, 0, 0, 1, 1, 3, 0, 0, 3, 1, 1, 3, 2, 3, 0, 3, 3, 0, 2, 2, 2, 3, 1, 2, 1, 3, 2, 3, 0, 2, 0, 0, 3, 0, 0, 3, 3, 1, 0, 2, 1, 1, 3, 3, 2, 1, 0, 0, 3, 1, 0, 0, 0, 2, 3, 0, 2, 1, 1, 1, 2, 3, 2, 3, 3, 0, 0, 1, 2, 0, 1, 2, 2, 0, 0, 3, 3, 2, 0, 2, 2, 1, 2, 0, 2, 2, 3, 2, 2, 2, 2, 1, 2, 0, 0, 2, 2, 0, 0, 3, 2, 1, 0];
  const q = (lesson, difficulty, stem, choices) => {
    const index = number++;
    const answer = answerPositions[index];
    const options = choices.map(([text, explanation]) => ({ text, explanation }));
    const order = options.slice(4 - answer).concat(options.slice(0, 4 - answer));
    return { id: `m1-${String(number).padStart(3, "0")}`, mock: "m1", domain: lesson.split("-")[0], lesson, pool: "mock", difficulty, stem, answer, options: order };
  };
  const reserved = [
    // Domain 1 — 26 questions.
    q("d1-l1", "Foundation", "A maintenance team has vibration measurements but no examples labeled by failure type. It wants to discover recurring machine-behavior groups. Which task fits this first investigation?", [
      ["Clustering", "Clustering explores similarity groups without needing failure-type labels; the groups still require interpretation."],
      ["Supervised classification", "Classification needs known target categories for training; these failure labels are absent."],
      ["Regression of failure type", "Regression predicts numerical quantities, not unknown categories of machine behavior."],
      ["Reinforcement learning", "No agent choosing actions and receiving sequential rewards is described."]
    ]),
    q("d1-l1", "Applied", "A retailer will predict returns when an order is placed. Which proposed feature should be rejected as target leakage?", [
      ["A refund issued after the product was returned", "The later refund is unavailable at order time and directly reveals the outcome being predicted."],
      ["The item's price at checkout", "The checkout price exists at the stated prediction time and is not inherently future information."],
      ["Returns from that customer's earlier completed orders", "Earlier history can be usable if its timestamps and permitted use are verified."],
      ["The delivery region entered at checkout", "The region is supplied when the order is placed; it still needs appropriate quality and privacy review."]
    ]),
    q("d1-l1", "Foundation", "Five inspection times are 2, 3, 3, 4, and 18 minutes. Which summary correctly illustrates the influence of the long inspection?", [
      ["Mean 6 minutes; median 3 minutes", "The sum is 30, so the mean is 6; the middle sorted value is 3. The long case pulls up the mean."],
      ["Mean 3 minutes; median 6 minutes", "This exchanges the arithmetic average and the middle observation."],
      ["Mean 4 minutes; median 4 minutes", "Four is neither the average of these five values nor the middle sorted observation."],
      ["Mean 18 minutes; median 2 minutes", "The largest and smallest observations are not the mean and median."]
    ]),
    q("d1-l1", "Applied", "A report contains 10,000 service calls but only 700 customers, with many repeat callers. Which statement best describes the unit-of-analysis concern?", [
      ["Calls and customers are different units; repeat callers may dominate a call-level summary", "The correct denominator depends on the question. Ten thousand calls do not establish ten thousand independent customers."],
      ["The number of customers equals the number of calls", "Repeated calls explicitly make these two counts different."],
      ["Every repeated call is necessarily a data-entry error", "Repeat calls can be genuine events; investigate their meaning instead of deleting them automatically."],
      ["A larger call count guarantees representative customer coverage", "Sample size does not repair selection bias or overrepresentation of frequent callers."]
    ]),
    q("d1-l2", "Applied", "A model receives temperature in Celsius from one sensor and Fahrenheit from another, without a unit field. What should be fixed before interpreting the learned patterns?", [
      ["Verify and standardize units using the source definitions", "A common physical unit makes values comparable; scaling alone cannot repair an unknown unit mismatch."],
      ["Replace both sensors' readings with their row numbers", "Row numbers discard the measured physical quantity rather than correcting it."],
      ["Apply a scaler to all values and assume the problem is solved", "A scaler treats the mixed values as one distribution; it does not discover or correct source units."],
      ["Drop every large reading as an outlier", "A Fahrenheit reading may be valid, and blanket deletion can bias the data."]
    ]),
    q("d1-l2", "Applied", "A missing delivery date can mean either 'not dispatched yet' or 'source system failed'. Which preparation is most defensible?", [
      ["Investigate the causes and represent the distinction where justified", "Different missingness causes can carry different information; preparation should preserve meaning without leaking future outcomes."],
      ["Treat every missing date as today's date", "This invents an observed date and confuses workflow state with collection failure."],
      ["Delete all affected orders before checking their distribution", "Blind deletion can remove a systematic group and distort the deployment population."],
      ["Use the eventual delivery date even for an order-time prediction", "The eventual date is future information at order time and can introduce leakage."]
    ]),
    q("d1-l2", "Stretch", "A category-to-target average is proposed as an input feature. Why must its computation respect training and validation boundaries?", [
      ["Using held-out labels to construct the feature can reveal the answers being evaluated", "Any label-dependent preparation must exclude held-out outcomes, including within cross-validation."],
      ["Category averages never contain target information", "The proposed averages are explicitly computed from target labels."],
      ["Only numerical scaling can cause preprocessing leakage", "Imputation, selection, and label-derived encodings can also contaminate evaluation."],
      ["Putting the calculation in a separate file removes leakage", "Leakage depends on information flow, not where the calculation is stored."]
    ]),
    q("d1-l2", "Foundation", "A small dataset describes unordered packaging types: carton, pouch, and crate. Which representation avoids asserting an arbitrary numeric distance between these types?", [
      ["Separate category indicators", "Indicator columns represent category membership without making crate three times carton by arbitrary coding."],
      ["Carton = 1, pouch = 2, crate = 3, interpreted as a measurement", "These arbitrary codes can suggest a false order or distance to some models."],
      ["Average the words into a physical packaging size", "Category names alone do not define a measurable physical size."],
      ["Replace each category with the final test-set outcome", "This would reveal evaluation targets rather than honestly represent packaging."]
    ]),
    q("d1-l3", "Applied", "Images from each manufactured item include several nearly identical camera views. The model must generalize to new items. What is the best split boundary?", [
      ["Keep all views of an item within a single partition", "An item-level split avoids near-duplicate views leaking item-specific patterns into evaluation."],
      ["Randomize individual views so each item appears everywhere", "Related views crossing partitions can make the held-out results overly optimistic."],
      ["Reserve only the sharpest views for testing", "This changes test difficulty and may not represent the deployment image distribution."],
      ["Copy difficult training views into the test set", "Copies contaminate the independence of the reserved evaluation."]
    ]),
    q("d1-l3", "Stretch", "A forecasting experiment uses data through June to predict July. A rolling average for a June training row accidentally includes July sales. What is the main problem?", [
      ["The feature construction crosses the prediction-time boundary", "Future July observations would not exist when the June-row prediction is made; chronological splitting alone cannot fix that feature."],
      ["A chronological test split makes every feature automatically safe", "Time-respecting partitions do not repair features computed using later observations."],
      ["Rolling averages are inherently prohibited", "Rolling averages can be legitimate when computed only from information available at prediction time."],
      ["Only the number of July rows matters", "The information timing, not the count of future rows, creates the leakage."]
    ]),
    q("d1-l3", "Applied", "A team repeatedly adjusts features after seeing poor performance on its reserved test set. How should its next performance claim be qualified?", [
      ["That set has influenced selection; use a genuinely untouched evaluation for a fresh claim", "Repeated test-driven changes turn the reserved set into tuning evidence, weakening an unbiased final estimate."],
      ["The set is still untouched because no training row was added", "Selection can leak evaluation information even without appending test rows to training."],
      ["Keep the best test score and omit the earlier trials", "Selective reporting hides the tuning process and exaggerates confidence."],
      ["Rename the set 'audit' to restore independence", "A label change cannot undo the information already used for decisions."]
    ]),
    q("d1-l3", "Applied", "Cross-validation chooses preprocessing and model settings. Where should the final production candidate learn its preprocessing statistics before evaluation on an untouched test?", [
      ["From the designated training data, excluding the untouched test", "The final candidate can refit on the designated development training data while preserving test independence."],
      ["From the untouched test only", "Learning preprocessing from the test lets evaluation information influence the pipeline."],
      ["From all rows including the test to maximize sample size", "More rows do not justify contaminating the reserved final assessment."],
      ["From whichever test slice makes the score largest", "Choosing preprocessing to improve test slices is test-driven tuning."]
    ]),
    q("d1-l4", "Foundation", "An AI shipment-delay predictor is compared with a simple rule using carrier and route. Why is this rule useful as a baseline?", [
      ["It tests whether the more complex approach adds useful value", "A practical simpler alternative provides context for quality, cost, and operational complexity."],
      ["It guarantees the AI model is unnecessary", "A baseline creates a comparison; it does not predetermine which approach is better."],
      ["It removes the need for held-out evaluation", "Both the baseline and candidate need honest evaluation on relevant examples."],
      ["It defines an official SDAIA passing score", "An application baseline has no role in establishing official exam thresholds."]
    ]),
    q("d1-l4", "Applied", "A very shallow tree makes similarly large errors on both training and validation data. After checking data quality, which hypothesis is most consistent with this pattern?", [
      ["The model may be underfitting", "Poor fit on both partitions can indicate insufficient capacity or unsuitable features; the pattern is a hypothesis, not proof."],
      ["The model is certainly memorizing training rows", "Memorization typically produces much better training than validation performance."],
      ["The validation set must have leaked into training", "Similar large errors do not establish leakage; the data flow requires separate investigation."],
      ["The model should be selected because the errors match", "A small gap is not useful if both errors are unacceptable."]
    ]),
    q("d1-l4", "Applied", "A candidate's training score falls slightly after regularization, while its protected validation score improves. What is the best interpretation?", [
      ["The tradeoff may improve generalization; judge it against the relevant baseline and constraints", "Regularization can reduce overfitting even when training fit becomes less perfect."],
      ["Any reduction in training score proves the model is worse", "Training performance alone is not the objective for unseen deployment examples."],
      ["Validation improvement guarantees identical production performance", "Validation is evidence under its conditions, not a guarantee under future distribution changes."],
      ["Regularization has turned the task into clustering", "Regularization changes the fitting constraint, not the task's label structure."]
    ]),
    q("d1-l4", "Foundation", "A predictor must model interactions such as a risk that increases only when both heat and humidity are high. Which concern is most relevant when using a plain linear model without interaction features?", [
      ["Its additive form may not capture the joint pattern", "Without suitable features, an additive linear model may miss a relationship that depends on combined inputs."],
      ["It cannot accept numerical weather inputs", "Linear models commonly accept numerical features; the issue is the relationship's form."],
      ["It necessarily memorizes every training observation", "Memorization is not an inherent property of a plain linear model."],
      ["It needs no evaluation because its coefficients are interpretable", "Interpretability does not establish predictive suitability or data quality."]
    ]),
    q("d1-l5", "Applied", "A fraud review model flags 40 transactions: 30 are fraud. Another 20 fraud transactions are missed. What are precision and recall?", [
      ["Precision 75%; recall 60%", "Precision = 30/40 = 75%; recall = 30/(30 + 20) = 60%."],
      ["Precision 60%; recall 75%", "This reverses the predicted-positive and actual-positive denominators."],
      ["Precision 75%; recall 40%", "There are 50 actual fraud cases; recall is 30/50, not 20/50."],
      ["Precision 100%; recall 60%", "Ten of the 40 flagged transactions are false alerts, so precision is below 100%."]
    ]),
    q("d1-l5", "Applied", "A classifier correctly identifies 18 positives, produces 6 false alerts, and misses 6 positives. What is its F1 score?", [
      ["75%", "F1 = 2TP/(2TP + FP + FN) = 36/48 = 75%."],
      ["50%", "The relevant denominator is 48, not twice the number of correctly identified positives."],
      ["60%", "This value does not follow from the stated precision, recall, or F1 denominators."],
      ["100%", "False alerts and missed positives prevent a perfect F1 score."]
    ]),
    q("d1-l5", "Stretch", "A rare but dangerous defect detector offers two validation thresholds. Lowering the threshold finds more defects but doubles alerts beyond reviewer capacity. What is the best decision process?", [
      ["Evaluate error costs and achievable review capacity together before choosing the threshold", "A useful threshold must balance harm from misses with false-alert burden and a workable response pathway."],
      ["Always use the lowest threshold regardless of capacity", "Unprocessed alerts can undermine the intended safety benefit."],
      ["Choose the threshold with the fewest alerts without checking misses", "Reducing workload alone ignores the stated cost of missed dangerous defects."],
      ["Select on final test results until the workload matches", "Threshold selection belongs in validation; using the final test repeatedly contaminates assessment."]
    ]),
    q("d1-l5", "Applied", "Two screening models have equal accuracy. Model A misses many urgent cases; Model B detects more urgent cases but raises more false alerts. What additional information is essential for a useful comparison?", [
      ["Their error counts, error costs, and review capacity", "Equal accuracy can hide very different recall and false-alert burdens; suitability depends on the operating context."],
      ["Only which model has a shorter name", "Naming gives no evidence about error harms or operational fit."],
      ["Whether either training accuracy is exactly 100%", "Training accuracy does not resolve the deployment tradeoff between these two error types."],
      ["The overall accuracy rounded to fewer digits", "Less precise reporting conceals rather than explains the relevant error pattern."]
    ]),
    q("d1-l5", "Foundation", "A support-routing classifier has 90% accuracy on 900 routine tickets and 30% on 100 urgent tickets. Why is its overall score alone insufficient?", [
      ["The large routine group can hide poor urgent-ticket performance", "The weighted overall accuracy is 84%, while the urgent slice performs much worse and may carry greater harm."],
      ["Both groups must have exactly 84% accuracy", "A weighted aggregate does not imply each constituent group has the same performance."],
      ["Urgent tickets should be excluded because they reduce the score", "Removing the difficult important slice would misrepresent deployment usefulness."],
      ["The smaller group cannot have a meaningful error rate", "A smaller sample needs uncertainty reporting but its errors still matter."]
    ]),
    q("d1-l6", "Applied", "Two delivery-time predictions have absolute errors of 1 and 5 hours. What are MAE and RMSE?", [
      ["MAE 3 hours; RMSE √13 hours", "MAE = (1 + 5)/2 = 3; RMSE = √((1² + 5²)/2) = √13, about 3.61 hours."],
      ["MAE 3 hours; RMSE 13 hours", "Thirteen is the mean squared error; RMSE takes its square root."],
      ["MAE 6 hours; RMSE √26 hours", "Both metrics average the two errors rather than summing them."],
      ["MAE 2 hours; RMSE 3 hours", "These values do not follow from the stated absolute errors."]
    ]),
    q("d1-l6", "Applied", "A demand forecast has occasional very large errors. Which metric more strongly emphasizes those errors, and why?", [
      ["MSE, because squaring increases the relative influence of large errors", "Squared loss gives large deviations greater weight than a linear absolute-error penalty."],
      ["MAE, because every error is squared", "MAE uses absolute errors, not squared errors."],
      ["Accuracy, because numerical deviations are always class labels", "Accuracy needs a classification definition and is not a direct numerical-error measure here."],
      ["Recall, because it measures the size of every forecasting miss", "Recall concerns detected positives, not numerical forecast-error magnitude."]
    ]),
    q("d1-l6", "Stretch", "A score ranks risky cases well, but among cases assigned 0.8 risk only about 0.5 experience the event. Which problem is illustrated?", [
      ["Poor probability calibration despite useful ranking", "Ranking and calibration are distinct; an 0.8 probability should correspond roughly to an 80% event frequency under the assessed conditions."],
      ["Perfect calibration because high-risk cases rank first", "Ordering cases correctly does not make the probability magnitudes reliable."],
      ["No useful ranking is possible", "The scenario explicitly states that ranking is good; calibration can fail independently."],
      ["The event must occur in every case with nonzero risk", "A probability is not a deterministic promise of an individual outcome."]
    ]),
    q("d1-l6", "Applied", "Model A improves validation MAE slightly but violates the application's response-time limit. Model B meets the limit and has acceptable MAE. What is the most defensible choice?", [
      ["Choose using quality and operational constraints together; B may be the viable candidate", "The best unconstrained metric is not automatically the best deployable system."],
      ["Choose A solely because its MAE is smaller", "This ignores a stated operational requirement."],
      ["Average the two MAEs and call the pair compliant", "Averaging scores does not repair A's latency or define a feasible combined system."],
      ["Evaluate neither because the metrics differ", "The candidates can be compared against the same application requirements."]
    ]),
    q("d1-l6", "Stretch", "A team compares precision-recall results from two datasets with very different positive-class prevalence. What caution is needed?", [
      ["Precision depends on prevalence, so compare on a representative common evaluation basis", "A change in class mix can change precision without proving a better model; task and population must be aligned."],
      ["Precision is invariant to the population's class mix", "False-positive counts relative to true positives can change with prevalence."],
      ["A high score on the easier dataset proves improvement everywhere", "Different populations make that generalization unsupported."],
      ["Replace precision with training accuracy and ignore population differences", "Training accuracy neither preserves evaluation independence nor resolves the population mismatch."]
    ]),
    // Domain 2 — 25 questions.
    q("d2-l1", "Foundation", "A rule requires a form's date to precede its submission date. The condition is explicit and stable. What is the most reasonable first approach?", [
      ["A deterministic validation rule", "A clear stable condition can be enforced directly without learning a model."],
      ["An LLM that guesses whether the dates look plausible", "Generation adds unnecessary uncertainty to an explicit computable condition."],
      ["Clustering dates and accepting the largest group", "Grouping does not enforce the required ordering for an individual form."],
      ["Reinforcement learning from every rejected form", "No sequential policy-learning problem is necessary for this fixed rule."]
    ]),
    q("d2-l1", "Applied", "A delivery robot learns a sequence of movements using rewards for successful delivery and penalties for collisions. Which learning setting best describes this?", [
      ["Reinforcement learning", "An agent learns actions from outcomes and rewards over sequential interactions."],
      ["Unsupervised clustering", "Clustering finds groups; it does not directly learn a sequential action policy from rewards."],
      ["Ordinary regression of a fixed label only", "The scenario centers on action selection and future rewards, not just predicting a fixed number."],
      ["A relational database query", "A query retrieves data but does not learn an action policy from interaction."]
    ]),
    q("d2-l1", "Applied", "A route map has unequal travel costs. A search method returns the route with the fewest road segments. What remains unproven?", [
      ["That the route has the lowest total travel cost", "Fewest edges and lowest summed cost coincide only under suitable cost assumptions; unequal costs break that equivalence."],
      ["That the returned route has any road segments", "The described result is already a route made from road segments."],
      ["That search can ever use numerical costs", "Cost-aware search exists; the issue is this method's optimization objective."],
      ["That a route with more segments must be more expensive", "Several cheap segments can cost less than a single expensive segment."]
    ]),
    q("d2-l1", "Applied", "An organization has explicit eligibility rules and historical examples of exceptions. What is a sensible design discussion before replacing all rules with AI?", [
      ["Separate mandatory rule enforcement from uncertain predictions and evaluate a bounded hybrid", "Stable requirements can remain deterministic while a learned component supports cases requiring evidence-based judgment."],
      ["Let historical frequency override mandatory requirements", "Observed examples do not authorize waiving a binding constraint."],
      ["Assume rules and learned models cannot coexist", "Hybrid systems can combine direct constraints with learned predictions."],
      ["Select the AI model before defining the decision boundary", "The problem, constraints, and acceptable responsibilities should guide model selection."]
    ]),
    q("d2-l2", "Foundation", "Why do hidden layers commonly use nonlinear activation functions?", [
      ["They allow compositions to represent nonlinear relationships", "A stack of purely linear transformations is still a linear transformation; nonlinearity expands what it can express."],
      ["They guarantee zero error on unseen examples", "Representational capacity does not guarantee generalization."],
      ["They remove all learned weights", "Neural networks still learn weights and biases alongside activation computations."],
      ["They turn every numerical input into a verified fact", "Activations transform values, not the truth or quality of input data."]
    ]),
    q("d2-l2", "Applied", "Using the stated update w_new = w_old − learning_rate × gradient, w_old = 1.2, learning_rate = 0.1, and gradient = 0.4. What is the new weight?", [
      ["1.16", "The update is 1.2 − 0.1 × 0.4 = 1.16."],
      ["1.24", "Adding the gradient step reverses the stated descent update."],
      ["0.8", "This subtracts the full gradient and ignores the learning rate."],
      ["0.12", "Multiplying weight by learning rate does not implement the given update."]
    ]),
    q("d2-l2", "Applied", "A neural network's loss jumps repeatedly after large parameter updates. Which first experiment directly addresses a plausible training cause?", [
      ["Try a smaller learning rate while checking data and loss behavior", "Overlarge steps can destabilize training; a controlled rate change tests that hypothesis without claiming certainty."],
      ["Increase the learning rate indefinitely", "Larger steps can worsen the stated instability."],
      ["Delete the validation set to stabilize training loss", "Removing evaluation does not correct the optimization step and hides generalization evidence."],
      ["Declare that oscillation proves perfect convergence", "Repeated large jumps do not establish a stable minimum or useful fit."]
    ]),
    q("d2-l2", "Foundation", "A team uses a trained network to estimate a result for a new input without updating parameters. What is this phase?", [
      ["Inference", "Inference applies learned parameters to inputs; it is distinct from fitting those parameters."],
      ["Backpropagation training", "Backpropagation supports gradient computation for parameter learning, not merely applying a frozen model."],
      ["Hyperparameter search", "No search among training configurations is described."],
      ["Label annotation", "The system is producing an estimate, not having a person create ground-truth labels."]
    ]),
    q("d2-l3", "Foundation", "A defect system needs to learn local visual patterns such as edges and textures in photographs. Which model family is a conventional starting point?", [
      ["A convolutional neural network", "Convolutions are well suited to local spatial patterns, though suitability still needs empirical evaluation."],
      ["A shortest-path search alone", "Route search does not directly learn visual features from labeled photographs."],
      ["A database uniqueness constraint", "A uniqueness constraint checks duplicates rather than classifying visual texture."],
      ["A text tokenizer alone", "Tokenization by itself is not a trained visual defect classifier."]
    ]),
    q("d2-l3", "Applied", "A small labeled image dataset is available, along with a model pretrained on relevant images. What does transfer learning offer?", [
      ["Reuse learned representations, then adapt and evaluate for the new task", "Pretraining can reduce data and training needs, but domain fit and protected evaluation remain necessary."],
      ["A guarantee that no task-specific evaluation is needed", "Pretrained performance does not establish performance on the new target population."],
      ["Permission to use all test labels for adaptation", "Adapting with reserved labels contaminates final evaluation."],
      ["A way to change the source images without model training", "Transfer learning concerns reusing learned model representations, not automatically rewriting images."]
    ]),
    q("d2-l3", "Applied", "In a transformer, what does attention primarily help compute?", [
      ["Context-dependent combinations of relevant representations", "Attention weights relationships among representations to build contextual information; it is not a truth detector."],
      ["A legally binding explanation of each decision", "Attention calculations do not create a legally sufficient explanation."],
      ["A guarantee that every referenced document is correct", "Relevance weighting does not verify external evidence."],
      ["A fixed lookup independent of the input context", "The central benefit is that weighting can depend on the context."]
    ]),
    q("d2-l3", "Stretch", "A text classifier uses an encoder model; a writing assistant uses a decoder-style model. Which distinction is most useful conceptually?", [
      ["Representing input context versus autoregressively generating output tokens", "Encoder and decoder-style families often emphasize these different behaviors; a family label alone does not establish task quality."],
      ["Encoders always produce legally verified facts", "Encoding is a representation operation, not verification."],
      ["Decoders cannot use previous text", "Autoregressive generation explicitly conditions on earlier tokens."],
      ["Both families must have identical inference workflows", "Architectural choices affect how inputs and outputs are processed."]
    ]),
    q("d2-l4", "Foundation", "Why can a 500-word paragraph consume more than 500 tokens?", [
      ["Tokenization may split words into multiple pieces and encode punctuation separately", "Tokens are units defined by the tokenizer, not necessarily whole words."],
      ["Every word always equals exactly one token", "Word-to-token correspondence varies by text and tokenizer."],
      ["Tokens count only complete sentences", "A sentence can contain many tokens."],
      ["The token count is determined only by page width", "Text layout is not the tokenizer's unit of representation."]
    ]),
    q("d2-l4", "Applied", "A model has an 8,000-token total context budget. Instructions use 900 tokens, history 1,600, retrieved text 3,000, and the planned output reserve 1,500. How much room remains?", [
      ["1,000 tokens", "The planned usage is 7,000 tokens, leaving 8,000 − 7,000 = 1,000 under the stated total-budget assumption."],
      ["2,500 tokens", "This omits the 1,500-token output reserve from the shared budget."],
      ["3,400 tokens", "This does not subtract all four stated components."],
      ["8,000 tokens", "The context budget is not entirely free after instructions, history, evidence, and output are allocated."]
    ]),
    q("d2-l4", "Applied", "Two policy passages have similar embeddings. What can safely be inferred from this alone?", [
      ["They are similar under that representation, not necessarily equally true or authorized", "Embedding proximity supports a retrieval relationship but does not establish correctness, recency, or permissions."],
      ["Both passages are current official policy", "Representation similarity does not verify publication status."],
      ["Every user is authorized to read both passages", "Authorization must be enforced separately from semantic similarity."],
      ["The passages have identical meaning in every context", "Vector similarity is approximate and task-dependent, not a guarantee of equivalence."]
    ]),
    q("d2-l4", "Applied", "A support assistant generates fluent but unsupported details about a product warranty. What is the key limitation?", [
      ["Plausible language generation is not evidence of factual grounding", "A fluent output may be a hallucination; warranty claims need reliable evidence and suitable refusal behavior."],
      ["Fluency guarantees a valid citation", "Smooth wording does not supply or verify a source."],
      ["A longer answer necessarily has better grounding", "Length can add more unsupported content rather than improve accuracy."],
      ["An embedding index automatically eliminates fabrication", "Retrieval can help grounding but does not guarantee correct use of evidence."]
    ]),
    q("d2-l5", "Applied", "A company changes its policies weekly. The assistant needs current policy facts without retraining for every update. Which approach best targets that need?", [
      ["Maintain authorized current retrieval sources and ground responses in them", "RAG targets changing external knowledge, with freshness, permissions, and grounded-answer evaluation still required."],
      ["Fine-tune once and assume policies remain current forever", "A one-time weight update does not automatically incorporate weekly changes."],
      ["Raise sampling temperature to discover the latest policy", "Sampling variability cannot fetch current authoritative facts."],
      ["Remove all evidence to reduce context length", "Removing sources worsens the current-fact requirement."]
    ]),
    q("d2-l5", "Foundation", "A prompt includes three demonstrations of the desired response style, but no training process runs. What has changed?", [
      ["The input context, not the model's learned weights", "Examples supplied in a prompt can influence this inference without constituting parameter training."],
      ["The model's parameters have been permanently fine-tuned", "Fine-tuning requires a training update, not merely sending prompt examples."],
      ["The base model has been compressed", "Prompt examples do not quantize or distill the underlying model."],
      ["The examples have become verified test labels", "Demonstrations are instructions or context, not automatically protected evaluation evidence."]
    ]),
    q("d2-l5", "Stretch", "An assistant retrieves the correct passage but consistently reverses an exception when answering. Which layer should be examined first?", [
      ["How the model interprets and uses the retrieved evidence", "Relevant evidence already reaches the model, so grounded reasoning and response construction are the immediate failure location."],
      ["Assume a larger retrieval index will automatically solve it", "More passages do not directly correct misinterpretation of a passage already retrieved."],
      ["Delete the exception from the source policy", "Changing authoritative content to hide a model weakness is not a legitimate repair."],
      ["Treat any retrieved citation as proof of answer correctness", "A citation can accompany an answer that contradicts its source."]
    ]),
    q("d2-l5", "Applied", "Fine-tuning improves a model's tone on examples similar to training. What evaluation is still needed before deployment?", [
      ["Held-out task cases, including factuality, safety, and important failure slices", "Style adaptation does not establish correctness or safety on unseen inputs."],
      ["Only the examples used for fine-tuning", "Training examples are familiar and cannot provide an independent generalization check."],
      ["Only a check that parameter files exist", "Artifact existence is not evidence of useful or safe behavior."],
      ["No evaluation if the training loss decreased", "Lower training loss does not establish deployment performance."]
    ]),
    q("d2-l6", "Applied", "An assistant answers 90 of 150 eligible requests, and 72 answers pass review. What are answer coverage and passing-answer rate among answered requests?", [
      ["60% coverage; 80% of answers pass", "Coverage = 90/150 = 60%; passing-answer rate = 72/90 = 80%. These are distinct denominators."],
      ["80% coverage; 60% of answers pass", "This swaps the eligible-request and answered-request denominators."],
      ["48% coverage; 80% of answers pass", "Forty-eight percent is 72/150, the eligible requests receiving a passing answer, not answer coverage."],
      ["60% coverage; 48% of answers pass", "Forty-eight percent uses all eligible requests rather than the 90 answered requests."]
    ]),
    q("d2-l6", "Stretch", "A summarizer has excellent average ratings, but its few omitted exceptions could change medical decisions. What is the best evaluation response?", [
      ["Add targeted exception-preservation and high-harm cases with qualified review", "An average can conceal dangerous failures; the evaluation must reflect consequences and specialist judgment."],
      ["Accept the average as proof that all individual summaries are safe", "An aggregate score does not bound every case's harm."],
      ["Use only longer summaries as a safety metric", "Length does not establish preservation of essential exceptions."],
      ["Exclude medical cases from the report but keep serving them", "Hiding a deployed high-risk slice does not mitigate its risk."]
    ]),
    q("d2-l6", "Applied", "An agent can draft purchase requests. A proposed change lets it also approve unlimited payments. What is the most important boundary?", [
      ["Keep narrow permissions and enforce approval for high-impact payment actions outside the model", "A draft assistant should not acquire unrestricted financial authority merely because it can generate a request."],
      ["Give the agent a stronger instruction to be careful and remove approval", "Prompt wording is not an enforceable financial authorization boundary."],
      ["Allow all payments when the model reports high confidence", "Self-reported confidence does not establish authorization or transaction safety."],
      ["Hide payment logs so the model has less context", "Reduced auditability does not provide permission control."]
    ]),
    q("d2-l6", "Foundation", "An automatic evaluator scores generated answers. Why should a team check agreement with qualified human review?", [
      ["The evaluator itself can be biased or miss task-specific failures", "An automated judge is another imperfect measurement system and needs validation against the task's criteria."],
      ["An evaluator model is always an objective ground truth", "Its model status does not eliminate error, bias, or rubric sensitivity."],
      ["Human review is useful only when every score is zero", "Calibration and spot checks are useful across the score range."],
      ["High evaluator speed proves correct judgments", "Throughput and judgment validity are separate properties."]
    ]),
    q("d2-l6", "Stretch", "A prompt is revised repeatedly using the same 40 evaluation cases. Its score rises. What is the best way to assess whether the improvement generalizes?", [
      ["Test on a fresh reserved set covering the intended use and failure modes", "The repeatedly used cases have become development evidence; unfamiliar evaluation is needed for a fresh claim."],
      ["Report only the best score on the 40 familiar cases", "That conceals selection on the evaluation set and may reflect overfitting."],
      ["Reorder the same 40 cases and call them unseen", "Changing order does not remove case familiarity."],
      ["Use the prompt's length as the final quality measure", "Prompt length is not evidence of successful task behavior."]
    ]),
    // Domain 3 — 21 questions.
    q("d3-l1", "Foundation", "A prediction request receives HTTP 200, but its returned category is wrong. Which statement is correct?", [
      ["Transport success and task correctness are separate checks", "HTTP success indicates protocol-level handling, not that the AI answer is correct for the task."],
      ["HTTP 200 proves the prediction matches reality", "The status code does not verify model output against ground truth."],
      ["The category must be correct if the body is valid JSON", "Parseable structured output can still be factually or semantically wrong."],
      ["Task correctness can be tested only by changing the status code", "Task evaluation compares outputs with evidence and criteria, not just response statuses."]
    ]),
    q("d3-l1", "Applied", "An integration expects confidence to be a number between 0 and 1, but receives the string 'very high'. What should happen at the contract boundary?", [
      ["Reject or handle the response as invalid according to the documented failure policy", "A required numeric range cannot safely be replaced by arbitrary text; validation and controlled handling protect downstream behavior."],
      ["Silently convert 'very high' to 1", "That invents a probability and hides a provider contract failure."],
      ["Accept it because it sounds positive", "Natural-language plausibility does not satisfy a numeric contract."],
      ["Delete the required confidence field from every consumer", "A producer error does not justify an unreviewed change to all downstream requirements."]
    ]),
    q("d3-l1", "Applied", "A service distinguishes 'no assessment performed' from 'assessment performed with no issue found'. Why should missing and explicit null values have documented meanings?", [
      ["They may represent different states that consumers must not conflate", "A clear contract prevents absence, unknown status, and a verified negative result from being treated as the same thing."],
      ["They always mean a score of zero", "The scenario describes workflow states, not a universal numeric zero."],
      ["JSON guarantees every consumer interprets them identically", "Syntax alone does not define application semantics."],
      ["A model's fluent explanation removes the need for the contract", "Generated prose is not a substitute for documented machine-consumed meanings."]
    ]),
    q("d3-l1", "Foundation", "A valid signed-in user is denied access to a restricted project resource. Which distinction best explains the situation?", [
      ["Authentication succeeded, but authorization may not permit this resource", "Knowing the user's identity is separate from granting permission for a particular operation."],
      ["Authentication and authorization are identical", "Identity verification and resource permission are different controls."],
      ["Every signed-in user must have every project permission", "A login does not imply unrestricted access."],
      ["A model can grant access by mentioning the project name", "Access must be enforced by the system, not by generated text."]
    ]),
    q("d3-l2", "Applied", "A document analysis endpoint returns 'accepted' and a job ID. What should the client do next?", [
      ["Track the documented job state until completion or controlled failure", "Acceptance acknowledges work queued or started; it does not provide the final result."],
      ["Treat acceptance as the completed analysis", "An accepted asynchronous job may still be pending or fail later."],
      ["Submit new identical jobs continuously until one looks complete", "Uncontrolled resubmission can duplicate work and overload the service."],
      ["Discard the job ID and assume the output will appear locally", "The correlation identifier is needed to track the work through its lifecycle."]
    ]),
    q("d3-l2", "Stretch", "A completed-analysis event is delivered twice after a consumer restarts. What design best prevents double billing?", [
      ["Deduplicate the event and make the billing effect idempotent", "Reliable event workflows should tolerate repeated delivery without repeating the same business effect."],
      ["Assume repeated events can never occur", "Retries and recovery commonly allow duplicates; the scenario already demonstrates one."],
      ["Bill each delivered message because delivery count equals job count", "Message deliveries and distinct completed jobs are different quantities."],
      ["Stop persisting all event identifiers", "Removing correlation evidence makes duplicate handling harder."]
    ]),
    q("d3-l2", "Applied", "A client cancels its wait for a long-running analysis. What must the workflow distinguish?", [
      ["Client waiting stopped versus server work actually canceled", "Ending the local wait does not necessarily stop remote computation or its side effects."],
      ["All remote work must have stopped instantly", "Cancellation semantics require explicit server-side support and confirmation."],
      ["The job has necessarily succeeded", "Stopping a wait says nothing about the eventual job outcome."],
      ["The job identifier is no longer relevant", "The job may still need tracking, cancellation confirmation, or cleanup."]
    ]),
    q("d3-l3", "Stretch", "A payment-creation request times out after reaching the provider. The provider may already have created the payment. What is safest?", [
      ["Use the documented idempotency key and reconcile the operation's status before repeating its effect", "A timeout leaves the outcome ambiguous; duplicate-safe semantics and status reconciliation prevent repeated payments."],
      ["Send the same request with a fresh key until a reply arrives", "Fresh keys may create distinct payments rather than retry the same operation."],
      ["Assume every timeout means nothing happened", "The response may be lost after successful processing."],
      ["Report success without checking the provider", "Ambiguity does not justify inventing a successful result."]
    ]),
    q("d3-l3", "Applied", "A user request has a 12-second end-to-end budget. Validation consumed 2 seconds and retrieval 4 seconds. What remains for generation and all remaining handling?", [
      ["6 seconds total", "The remaining shared deadline is 12 − 2 − 4 = 6 seconds, not a new full budget for each stage."],
      ["12 seconds for generation plus 12 for handling", "Per-stage resets violate the stated end-to-end budget."],
      ["10 seconds total", "This subtracts validation but omits retrieval time."],
      ["8 seconds total", "This subtracts retrieval but omits validation time."]
    ]),
    q("d3-l3", "Applied", "Thousands of clients receive a temporary rate-limit response at the same time. Which retry policy is most helpful?", [
      ["Bounded retries with backoff, jitter, and respect for retry guidance", "Spreading and limiting retries reduces synchronized load while retaining a controlled chance of recovery."],
      ["Every client retries immediately in an unlimited loop", "Synchronized unlimited retries can amplify the overload."],
      ["Retry malformed unauthorized requests indefinitely", "Permanent validation or permission failures are not repaired by repeated identical requests."],
      ["Remove all user deadlines so retries can continue forever", "An unbounded wait violates predictable user-facing failure handling."]
    ]),
    q("d3-l4", "Foundation", "A test double returns a perfect canned model response. What does passing a consumer test with this double establish?", [
      ["The consumer handles that controlled response, not that the real model is correct", "A test double helps isolate behavior but cannot prove the real provider's semantics or quality."],
      ["The deployed model never hallucinates", "A canned response does not test open-ended real-model behavior."],
      ["All real network failures are handled", "A successful fake response does not exercise network failure paths."],
      ["The provider's current contract is independently verified", "The fake could encode assumptions that differ from the actual provider."]
    ]),
    q("d3-l4", "Applied", "An integration's happy-path test passes. Which additional test most directly addresses unsafe failure handling?", [
      ["Return malformed output or a dependency timeout and check the controlled fallback", "Negative-path tests check how the system behaves when assumptions fail."],
      ["Repeat the same successful response with a different test name", "Renaming a happy-path test adds little failure coverage."],
      ["Measure only the source file's line count", "File length is not evidence of correct failure handling."],
      ["Check that the demo screenshot looks polished", "Visual polish does not exercise an integration's error paths."]
    ]),
    q("d3-l4", "Stretch", "An LLM regression test expects exact wording, but valid answers vary in harmless phrasing. What is a better testing approach?", [
      ["Test task invariants and grounded criteria while separately checking schema and critical text", "Semantic criteria can allow acceptable variation without ignoring required fields or safety-critical content."],
      ["Remove every assertion because text is nondeterministic", "Variation does not eliminate the need to test meaningful requirements."],
      ["Accept any string if it is long enough", "Length does not verify the task's meaning or evidence use."],
      ["Freeze one sampled answer as proof of all future behavior", "A single string cannot cover the range of valid and unsafe outputs."]
    ]),
    q("d3-l4", "Applied", "An intermittent integration failure cannot be reproduced from the report. Which record would most improve diagnosis without requiring unrestricted raw-payload retention?", [
      ["Correlated version, configuration, timing, and safely minimized input/output evidence", "Reproducibility needs relevant context under access and retention controls, not indiscriminate capture of sensitive payloads."],
      ["Only the phrase 'AI failed'", "This lacks the versions, conditions, and observations needed to isolate a failure."],
      ["Every user's full private record retained forever", "Broad indefinite retention is not justified by the need for diagnosis."],
      ["Only the application's logo and release date", "Branding and a date do not identify the failed request's technical conditions."]
    ]),
    q("d3-l5", "Applied", "A retrieval service returns another department's restricted document because it is highly relevant. Where should the access problem be prevented?", [
      ["At enforced authorization boundaries before unauthorized evidence reaches the model or user", "Relevance is not permission; retrieval and downstream access must respect the user's rights."],
      ["Only by asking the model not to quote secrets", "A prompt is not a reliable boundary once unauthorized evidence is exposed."],
      ["By sorting restricted documents lower but still returning them", "Ranking does not remove unauthorized access."],
      ["By treating all semantically similar documents as public", "Similarity does not change a document's access classification."]
    ]),
    q("d3-l5", "Stretch", "An assistant emits a valid JSON action with an account ID that the user does not own. What check is still required?", [
      ["Validate business meaning and the user's authorization for the referenced account", "Schema validity checks structure, not whether the operation is permitted or appropriate."],
      ["No further check because JSON is structured", "Well-formed data can request an unauthorized action."],
      ["Ask the model to rate its own confidence instead of checking ownership", "Self-confidence does not establish access rights."],
      ["Allow the operation if the account ID has the expected number of characters", "Identifier format is not proof of ownership."]
    ]),
    q("d3-l5", "Applied", "A document tells a retrieval assistant to ignore its instructions and export private files. How should the application treat this text?", [
      ["As untrusted source content, not as authority to change tool permissions", "Retrieved text may contain indirect prompt injection; enforced permissions must remain independent of it."],
      ["As a new system instruction because it came from search", "Retrieval does not promote external content into trusted control instructions."],
      ["As authorization from every affected data owner", "Text within a document cannot grant unrelated users' permissions."],
      ["As safe whenever the document also contains useful facts", "Useful factual content can coexist with malicious instructions."]
    ]),
    q("d3-l6", "Foundation", "A provider changes its response field from 'score' to 'probability'. Why can a model adapter be useful?", [
      ["It centralizes translation to the application's stable internal contract", "An adapter isolates provider-specific changes, with semantic checks and tests still required."],
      ["It guarantees the two fields mean exactly the same thing", "Names alone do not establish semantic equivalence; that must be verified."],
      ["It removes the need to test consumers", "Consumers and adapter behavior still need compatibility validation."],
      ["It lets each consumer silently interpret the provider differently", "Centralization is meant to reduce inconsistent assumptions, not encourage them."]
    ]),
    q("d3-l6", "Applied", "An embedding-model upgrade changes vector dimensions. Which associated component most clearly needs compatibility review?", [
      ["The vector index and query embedding pipeline", "Stored and query vectors must have compatible dimensions and representation semantics; reindexing may be required."],
      ["Only the color of the search button", "Visual styling does not determine vector compatibility."],
      ["Only the billing address of the project sponsor", "A sponsor's address is unrelated to embedding representation compatibility."],
      ["No component because every vector model shares a space", "Different models can have different dimensions and incompatible spaces."]
    ]),
    q("d3-l6", "Applied", "A new team receives model files but no contract, failure policy, or owner contact. What is the main engineering gap?", [
      ["An incomplete operational and maintenance handoff", "Files alone do not explain intended inputs, limitations, dependencies, failures, and who accepts ongoing responsibility."],
      ["A missing claim of perfect accuracy", "A guarantee would be misleading and would not repair the handoff."],
      ["Too few social-media announcements", "Announcements do not supply operational documentation or acceptance."],
      ["A need to remove version information", "Version evidence improves maintainability and should be preserved."]
    ]),
    q("d3-l6", "Stretch", "A design review sees that every screen independently parses provider-specific AI output. Which change most improves maintainability?", [
      ["Define a shared validated internal contract and a focused provider adapter", "A common boundary reduces scattered interpretation and makes provider changes easier to test."],
      ["Copy one parser into still more screens", "Duplication expands the number of places that can diverge."],
      ["Ignore parsing failures because outputs usually look right", "Rare malformed outputs still require controlled handling."],
      ["Put undocumented conversion rules in user-facing captions", "Captions are not a reliable integration contract or maintenance boundary."]
    ]),
    // Domain 4 — 27 questions.
    q("d4-l1", "Foundation", "Two experiments report different scores, but both are named 'latest'. What record is most important for a meaningful comparison?", [
      ["Versions of data, preparation, model settings, evaluation, and relevant environment", "A score needs a traceable experimental context to explain differences and reproduce the comparison."],
      ["Only the bigger score in a presentation", "An isolated selected score hides how the experiments differ."],
      ["Only the person who last opened the file", "File access does not identify the experiment's data or configuration."],
      ["A new name without any version record", "Renaming does not recover missing provenance."]
    ]),
    q("d4-l1", "Applied", "The model weights are unchanged, but a prompt and retrieval filter are modified. Should the AI system's release record change?", [
      ["Yes; prompts and retrieval configuration can change system behavior", "Whole-system versioning includes behavior-changing components beyond model weights."],
      ["No; only weights can affect answers", "Context assembly and instructions directly influence generated output."],
      ["Only if the user interface changes color", "Behavioral changes matter regardless of visible styling."],
      ["No; configuration changes cannot be rolled back", "Versioned configuration can support controlled rollback."]
    ]),
    q("d4-l1", "Applied", "An offline feature uses one unit conversion while serving uses another. The model artifact itself is identical. Which failure should be investigated?", [
      ["Training-serving skew in the preparation pipeline", "A difference in feature construction can break the assumptions under which the model was trained and evaluated."],
      ["A guaranteed improvement from more diverse units", "Inconsistent measurement meaning is not useful diversity."],
      ["A change in official exam domain weights", "The production feature mismatch is unrelated to the study blueprint."],
      ["A purely cosmetic issue because weights match", "Identical weights can receive materially different inputs."]
    ]),
    q("d4-l1", "Stretch", "A registry stores a model file with a high accuracy label. What else is needed to make a release decision defensible?", [
      ["Evaluation provenance, constraints, approvals, and compatible system versions", "A registry location and a score label do not by themselves establish suitability or an approved release."],
      ["Nothing once the file has a registry ID", "Registration identifies an artifact but does not prove it has passed the relevant gates."],
      ["Only a more impressive model filename", "Naming does not add decision evidence."],
      ["A copy of the training score repeated as a production guarantee", "Repeated training performance is not deployment assurance."]
    ]),
    q("d4-l2", "Foundation", "A service needs to score millions of records overnight rather than respond during an interactive request. Which serving pattern is the natural starting point?", [
      ["Batch scoring", "Batch processing fits a scheduled large-volume workload with no stated per-user interactive deadline."],
      ["One synchronous browser request held open for the entire night", "This adds fragile waiting rather than a controlled bulk workflow."],
      ["A full model training run for each individual record", "Scoring applies a model; retraining per record is not required."],
      ["A human approval dialog for every background computation", "Oversight should reflect actual risk, not automatically replace efficient batch execution."]
    ]),
    q("d4-l2", "Applied", "A release pipeline passes code tests but fails an important safety evaluation. What should the release gate do?", [
      ["Block release until the required safety condition is resolved and reviewed", "Code correctness is not a substitute for a required system-level safety gate."],
      ["Average the safety result with fast execution to claim a pass", "A required gate cannot be traded away through an unrelated metric average."],
      ["Deploy first and delete the failing test", "Removing evidence does not repair the unsafe behavior."],
      ["Rename the failure a stretch question", "A label change does not alter a release requirement."]
    ]),
    q("d4-l2", "Applied", "A model's preprocessing library changes but its serialized parameters do not. What is the release risk?", [
      ["The same model may receive or produce different values under the new environment", "Dependency and preprocessing compatibility can change behavior despite unchanged parameters."],
      ["There is no risk if the model filename is stable", "A stable filename does not pin the full execution context."],
      ["The change automatically improves all evaluations", "An upgrade needs evidence and compatibility checks, not assumed improvement."],
      ["The original dataset becomes anonymous", "A dependency change does not establish anonymization."]
    ]),
    q("d4-l2", "Stretch", "A retraining pipeline produces a candidate whenever fresh labels arrive. What should be separate from candidate production?", [
      ["Evaluation and approval to promote the candidate into serving", "Automation can create artifacts without granting them permission to replace a live model."],
      ["The need to record which labels were used", "Label provenance remains necessary and should not be removed."],
      ["The ability to compare against the currently serving model", "Comparison remains central to deciding whether a replacement helps."],
      ["All monitoring after release", "Monitoring is still needed after a candidate passes promotion gates."]
    ]),
    q("d4-l3", "Applied", "A candidate receives copies of live requests, but its outputs are not shown to users. Which rollout pattern is this?", [
      ["Shadow evaluation", "Shadowing measures candidate behavior beside live serving without using its outputs for user decisions; its side effects still need containment."],
      ["A canary serving all candidate answers to those users", "A canary affects a selected portion of live user responses."],
      ["A full replacement of the existing service", "The current user-facing service remains in place."],
      ["A proof that users accept the candidate's answers", "Users have not consumed the shadow outputs, so acceptance is not demonstrated."]
    ]),
    q("d4-l3", "Applied", "A canary serves 500 requests and has 25 failures. The control serves 9,500 requests and has none. What rates best reveal the candidate's problem?", [
      ["Candidate 5%; overall 0.25%", "The candidate rate is 25/500 = 5%; the pooled rate is 25/10,000 = 0.25%, which dilutes the candidate failures."],
      ["Candidate 0.25%; overall 5%", "This reverses the candidate and full-traffic denominators."],
      ["Candidate 5%; overall 5%", "Only 500 of the 10,000 requests used the candidate."],
      ["Candidate 0%; overall 0.25%", "The candidate has 25 observed failures, not zero."]
    ]),
    q("d4-l3", "Stretch", "A canary is tested only on short English requests, while deployment includes long multilingual requests. What is missing?", [
      ["Representative exposure and evaluation of important workload slices", "Good performance on a convenient subset does not establish performance on excluded request types."],
      ["A guarantee that five minutes is always enough", "No universal rollout duration supplies missing population coverage."],
      ["A larger logo on the candidate page", "Branding does not repair unrepresentative traffic."],
      ["An assumption that language never affects model behavior", "Language and input length can affect quality, resource use, and latency."]
    ]),
    q("d4-l3", "Applied", "A blue-green switch moves traffic to a new model, but the new system also wrote an incompatible database format. What must rollback planning address?", [
      ["State and schema compatibility, not only the traffic switch", "Returning traffic to the old version may fail if it cannot interpret state written by the new version."],
      ["Only switching the load balancer back", "Routing alone cannot repair incompatible persistent state."],
      ["Deleting all production state as the default rollback", "Broad destructive deletion is not a safe general recovery plan."],
      ["The model's training score only", "Training quality does not establish state compatibility."]
    ]),
    q("d4-l3", "Foundation", "What should a useful staged rollout define before live exposure?", [
      ["Observable success and stop criteria, ownership, and a tested fallback or rollback", "Predefined conditions make the rollout a controlled decision process rather than an improvised launch."],
      ["Only a launch celebration date", "A date does not define how failures will be detected or controlled."],
      ["A promise never to revert the candidate", "A rollback pathway is important when measured behavior becomes unacceptable."],
      ["Removal of control-version measurements", "Comparative evidence is valuable for identifying candidate-specific problems."]
    ]),
    q("d4-l4", "Applied", "The age distribution of users shifts, but outcome labels will arrive next month. What can currently be concluded?", [
      ["Input distribution drift is observed; quality impact remains to be measured", "A changed input distribution is evidence of data drift, not by itself proof of degraded target performance."],
      ["The model's accuracy has certainly fallen by the same percentage", "Input change does not directly quantify output correctness."],
      ["Concept drift is proved without any outcome evidence", "A changed relationship to outcomes needs evidence beyond the input distribution alone."],
      ["No monitoring is possible until all labels arrive", "Input and operational indicators can still reveal changes and risks."]
    ]),
    q("d4-l4", "Stretch", "Outcomes exist only for applications the model approved. Why is a reported approval-outcome accuracy not an all-applicant quality estimate?", [
      ["The labeled cohort is selected by the model's decisions", "Rejected cases lack outcomes, so the observed subset may not represent every applicant."],
      ["Approval makes all outcomes independent of selection", "The approval decision defines who enters the labeled sample."],
      ["Unobserved rejected cases must all be negatives", "Missing outcomes do not establish their true class."],
      ["A large approved sample removes selection bias", "More selected observations do not make excluded cases observable."]
    ]),
    q("d4-l4", "Applied", "A feature silently becomes zero for most requests after a source update, while the endpoint remains available. What monitoring best detects this?", [
      ["Feature validity and distribution checks by source and version", "Availability alone misses semantic pipeline failures; input checks can reveal a collapsed or corrupted feature."],
      ["Only checking that the port accepts connections", "A reachable service can still use invalid model inputs."],
      ["Only counting deployments per month", "Deployment activity does not measure feature integrity."],
      ["Only reviewing training accuracy from last year", "Historical training fit cannot detect this current source change."]
    ]),
    q("d4-l4", "Applied", "A drift alarm triggers after a legitimate seasonal change. What is a sensible next action?", [
      ["Investigate relevance and quality evidence before deciding on retraining or mitigation", "Drift is a signal to diagnose; retraining should reflect evidence, causes, and release controls."],
      ["Automatically deploy any freshly retrained model", "A new artifact still needs evaluation and promotion gates."],
      ["Disable every drift check permanently", "One expected shift does not make future monitoring unnecessary."],
      ["Declare every changed input malicious", "Seasonality and legitimate population shifts can cause drift."]
    ]),
    q("d4-l4", "Stretch", "A model's recommendations shape what users choose, and only chosen items get outcome labels. What long-term issue should be examined?", [
      ["A feedback loop that changes exposure and the future training sample", "The system influences both observed behavior and which outcomes are available, potentially reinforcing its own preferences."],
      ["A guarantee that recommendations are now unbiased", "System-influenced exposure can create rather than remove bias."],
      ["An impossibility of collecting any outcome evidence", "Evidence can be collected, but its selection mechanism must be understood."],
      ["A purely static dataset with no system influence", "The scenario explicitly describes model-induced changes in exposure."]
    ]),
    q("d4-l5", "Applied", "An illustrative availability SLO allows 1% bad requests in a 50,000-request window. With 420 bad requests observed, what budget remains?", [
      ["80 bad requests", "The allowance is 50,000 × 0.01 = 500; 500 − 420 = 80 remain in that stated window."],
      ["500 bad requests", "Five hundred is the total allowance, not the remaining budget after observed failures."],
      ["420 bad requests", "Four hundred twenty is consumed budget, not what remains."],
      ["4,580 bad requests", "This incorrectly uses a 10% allowance rather than the stated 1%."]
    ]),
    q("d4-l5", "Foundation", "An alert says 'CPU rose', but users remain within all service targets. A second alert says 'urgent requests are timing out'. Which is more directly actionable for user impact?", [
      ["The urgent-request timeout alert", "A user-visible symptom linked to a response plan is more directly actionable; CPU remains useful diagnostic context."],
      ["CPU alone, regardless of any user symptoms", "Resource change can be harmless or expected and needs context."],
      ["Neither, because infrastructure metrics replace service targets", "User-facing failures remain important even when a resource metric is available."],
      ["Whichever alert uses a brighter color", "Display styling does not determine operational severity."]
    ]),
    q("d4-l5", "Stretch", "A model outage triggers a rule-based fallback. What must have been assessed before relying on that fallback?", [
      ["Its safety, quality limits, capacity, and activation conditions for the intended users", "A fallback is a separate operating behavior with its own constraints, not automatically a safe substitute."],
      ["Only that the fallback's source file exists", "Existence does not establish effectiveness under outage load."],
      ["Only that it returns faster than the model", "Speed does not prove safe or useful decisions."],
      ["Nothing, because deterministic rules cannot fail", "Rules can be wrong, incomplete, overloaded, or mismatched to the task."]
    ]),
    q("d4-l5", "Applied", "A live candidate is harming user decisions. The cause is still uncertain. What is the best immediate incident priority?", [
      ["Contain harm with a safe mitigation and coordinate evidence-preserving investigation", "Incident response prioritizes user protection while assigning ownership, communication, and diagnosis."],
      ["Keep harmful serving unchanged until the final root-cause report", "Waiting for complete diagnosis can prolong avoidable harm."],
      ["Delete all records to make rollback look successful", "Destroying evidence undermines diagnosis and accountability."],
      ["Retrain blindly on the incident traffic and deploy immediately", "Unreviewed retraining may not fix the cause and can introduce new failures."]
    ]),
    q("d4-l5", "Applied", "A latency objective is '95% of completed requests under two seconds'. What additional service indicator prevents an apparently good result from hiding dropped requests?", [
      ["Successful completion or failure rate over all eligible requests", "Measuring only completed requests can exclude timeouts and drops; the denominator must expose those failures separately."],
      ["Only the median of those same completed requests", "Another statistic on the same selected subset still excludes dropped requests."],
      ["Only the number of model parameters", "Parameter count does not reveal missing or failed requests."],
      ["Only the average answer length", "Text length is not a completion or availability indicator."]
    ]),
    q("d4-l6", "Applied", "A RAG service's facts become stale even though its model weights are unchanged. Which operational check most directly addresses this?", [
      ["Source publication, ingestion, index freshness, and retrieval-version checks", "The knowledge path can become outdated independently of the model artifact."],
      ["Only verifying the model file checksum", "An unchanged model checksum says nothing about updated source documents."],
      ["Raising output length for every response", "Longer output cannot refresh stale evidence."],
      ["Disabling citations to avoid visible old dates", "Concealing source dates does not repair knowledge freshness."]
    ]),
    q("d4-l6", "Stretch", "Generated answers appear grounded, but failures concentrate when a particular retrieval filter is enabled. Which observation record is most useful?", [
      ["Correlate request outcomes with prompt, filter, index, and model versions under privacy controls", "Version-aware traces help isolate a pipeline component while minimizing and protecting sensitive evidence."],
      ["Store only the final average score without component versions", "An average hides the version-specific relationship needed for diagnosis."],
      ["Retain all raw private prompts indefinitely by default", "Unrestricted retention is not justified by observability needs."],
      ["Assume grounded wording proves retrieval cannot be involved", "Plausible grounded phrasing is not evidence that every retrieval step was correct."]
    ]),
    q("d4-l6", "Applied", "Cost per request falls after an assistant starts refusing most requests. What must be measured before calling this an efficiency improvement?", [
      ["Coverage and useful completed outcomes alongside cost", "Cheap refusal can reduce cost while reducing service value; cost should be aligned with useful outcomes."],
      ["Only total token spend", "Lower spend alone does not show that users received useful assistance."],
      ["Only the provider's unit price", "A price ignores changed behavior and task completion."],
      ["Nothing else if the bill is lower", "A smaller bill can accompany a failed service."]
    ]),
    q("d4-l6", "Foundation", "A prompt change improves helpfulness but worsens refusal on prohibited actions. How should LLMOps treat it?", [
      ["As a behavior-changing release requiring quality and safety regression gates", "Prompt releases can alter multiple criteria and need whole-system review."],
      ["As harmless text editing outside release control", "Instructions directly affect model behavior and safety boundaries."],
      ["As approved whenever average helpfulness rises", "A required safety condition cannot be offset by an unrelated average gain."],
      ["As proof that refusal tests should be removed", "The regression reveals a reason to retain and improve those tests."]
    ]),
    // Domain 5 — 19 questions.
    q("d5-l1", "Foundation", "An AI document service stores large immutable source files and a separate searchable index. Which storage role best fits the source files?", [
      ["Object storage for the file objects", "Object storage is a conventional fit for large files; indexes and metadata still serve separate lookup roles."],
      ["A vector index as the only authoritative file archive", "Similarity vectors alone do not preserve the full original source files."],
      ["CPU registers as long-term shared storage", "Registers are transient computation state, not a durable file repository."],
      ["A model's output buffer as the source of truth", "A generated-output buffer is not a durable authoritative document archive."]
    ]),
    q("d5-l1", "Applied", "A quality issue appears only after retrieved documents are assembled into model context. What architecture practice helps isolate the bottleneck?", [
      ["Measure and validate each stage's inputs, outputs, and versions", "End-to-end symptoms become diagnosable when ingestion, retrieval, context assembly, and generation are observable separately."],
      ["Replace all infrastructure before identifying the failing stage", "A broad replacement may not address the context-assembly problem."],
      ["Measure only the model's parameter count", "Parameter count does not reveal context construction failures."],
      ["Assume every quality issue is caused by GPU speed", "Hardware speed does not explain every semantic failure."]
    ]),
    q("d5-l1", "Stretch", "Two replicas of a retrieval service use different document-index versions. What consistency risk matters for user answers?", [
      ["Users may receive different evidence depending on which replica handles the request", "Replica health alone does not guarantee consistent knowledge versions; serving and release compatibility should be controlled."],
      ["Both versions must yield identical evidence because they share a model", "Retrieval evidence depends on the index, not only the generating model."],
      ["The older index automatically inherits new documents", "New source ingestion must actually reach the index."],
      ["Version metadata is unnecessary when load balancing works", "Load balancing does not establish semantic consistency across replicas."]
    ]),
    q("d5-l2", "Applied", "A model has 2 billion parameters stored at 16 bits each. Ignoring every other allocation, how much decimal memory do its weights require?", [
      ["4 GB for weights alone", "2 billion × 16/8 bytes = 4 billion bytes, or 4 decimal GB; serving needs additional memory."],
      ["2 GB for the complete service", "Two GB would fit eight-bit weights alone, and the full service needs more than weights."],
      ["16 GB for weights alone", "Sixteen is the bit width, not the resulting GB count."],
      ["32 GB because bits equal bytes", "Eight bits make a byte; treating every bit as a byte overstates this calculation."]
    ]),
    q("d5-l2", "Applied", "A GPU inference benchmark excludes tokenization, retrieval, and network time. What does its speedup establish?", [
      ["A speedup for the measured inference stage, not necessarily the full request", "End-to-end benefit depends on all stages and their contribution to latency."],
      ["The whole application has exactly the same speedup", "Unaccelerated stages can limit total improvement."],
      ["The GPU eliminates every bottleneck", "Bottlenecks can remain in CPU work, storage, networking, or queueing."],
      ["Task quality necessarily improves by the speedup factor", "Execution speed and answer quality are separate properties."]
    ]),
    q("d5-l2", "Stretch", "A quantized model fits in memory and is faster, but loses accuracy on a critical user group. What is the most defensible assessment?", [
      ["Evaluate the efficiency gain against group-specific quality requirements before release", "Compression trades must be assessed on intended workloads and important slices, not just average speed."],
      ["Deploy because fitting memory automatically proves suitability", "Memory fit does not satisfy a critical quality gate."],
      ["Assume quantization preserves every prediction", "Lower precision can change outputs and must be evaluated."],
      ["Hide the critical group from the benchmark", "Excluding the harmed group makes the evidence less representative."]
    ]),
    q("d5-l3", "Applied", "Retrieval takes 200 ms and a separate permission check takes 350 ms. They run concurrently, then generation takes 450 ms. Ignoring all other overhead, what is the critical-path latency?", [
      ["800 ms", "The concurrent stage takes max(200, 350) = 350 ms; adding generation gives 800 ms."],
      ["1,000 ms", "Summing both concurrent tasks as serial work overstates this critical path."],
      ["450 ms", "Generation cannot start until the required concurrent checks complete."],
      ["350 ms", "This omits the subsequent 450-ms generation stage."]
    ]),
    q("d5-l3", "Applied", "A benchmark costs SAR 24 for 400 responses, of which 300 meet the task's acceptance criteria. What is cost per acceptable response?", [
      ["SAR 0.08", "The outcome-aligned denominator is 300, so 24/300 = SAR 0.08 per acceptable response."],
      ["SAR 0.06", "This is cost per generated response, using all 400 rather than the acceptable 300."],
      ["SAR 12.50", "This reverses the numerator and denominator for cost per acceptable response."],
      ["SAR 24", "Twenty-four is the total benchmark cost, not a per-outcome cost."]
    ]),
    q("d5-l3", "Stretch", "The median latency is good, but 5% of users wait more than 15 seconds. What should the performance report emphasize?", [
      ["Tail latency and the conditions affecting those slow requests", "A median alone hides the slow tail that may violate user-facing requirements."],
      ["Only the median because it summarizes every user equally", "The median does not describe how large the slowest delays are."],
      ["Remove slow requests from measurement without disclosure", "Exclusion hides the service behavior experienced by those users."],
      ["Report training throughput as interactive latency", "Training throughput is a different workload and unit."]
    ]),
    q("d5-l4", "Applied", "A worker handles 25 jobs/minute and arrivals are 35 jobs/minute for 12 minutes. Starting from an empty queue and assuming constant rates, how large is the backlog?", [
      ["120 jobs", "The queue grows by 35 − 25 = 10 jobs/minute; after 12 minutes it contains 120 jobs."],
      ["420 jobs", "This counts all arrivals without subtracting completed work."],
      ["300 jobs", "This is the number processed, not the backlog."],
      ["10 jobs", "Ten is the growth per minute, not the total accumulated over 12 minutes."]
    ]),
    q("d5-l4", "Applied", "A queue has 360 jobs. New work arrives at 20 jobs/minute and service capacity is 50 jobs/minute. Under these constant rates, how long does it take to drain?", [
      ["12 minutes", "Net drain is 50 − 20 = 30 jobs/minute; 360/30 = 12 minutes."],
      ["7.2 minutes", "Dividing by full service capacity ignores work arriving during the drain."],
      ["18 minutes", "This divides by the arrival rate rather than net drain capacity."],
      ["The queue never drains", "Service capacity exceeds arrivals, so the existing backlog decreases."]
    ]),
    q("d5-l4", "Stretch", "Four inference replicas each handle 30 requests/second, but all rely on a retrieval service limited to 90 requests/second, one retrieval per request. What is the ideal shared limit before other overhead?", [
      ["90 requests/second", "The shared retrieval bottleneck bounds the nominal 120 requests/second inference capacity."],
      ["120 requests/second", "This ignores the stated shared dependency limit."],
      ["360 requests/second", "Multiplying replica count by retrieval capacity invents independent retrieval services."],
      ["30 requests/second", "Thirty is one inference replica's capacity, not the aggregate dependency-limited capacity."]
    ]),
    q("d5-l4", "Applied", "A batch takes 200 ms of computation for 10 requests, and a request may wait 40 ms for the batch to form. Which statement is correct under these simplified assumptions?", [
      ["Nominal compute throughput is 50 requests/second; that request can wait 240 ms", "Ten requests per 0.2 seconds gives 50/s; batching delay adds 40 ms to the 200-ms computation for the described request."],
      ["Every request completes in 20 ms", "Dividing batch compute by batch size estimates throughput contribution, not each request's wall-clock wait."],
      ["Throughput is 5 requests/second; wait is 40 ms", "This miscalculates throughput and omits computation time."],
      ["Batch formation never affects latency", "The stated 40-ms formation wait is part of user-visible delay."]
    ]),
    q("d5-l5", "Applied", "A team proposes caching personalized AI answers using only the question text as a key. What is the critical concern?", [
      ["The cache may reuse an answer across users with different permissions or context", "Keys, scope, invalidation, and access checks must prevent unauthorized or stale reuse."],
      ["Caching always lowers quality to zero", "Caching can be useful when its validity and security boundaries are designed correctly."],
      ["Identical text proves identical authorization", "Users asking the same words can have different access rights."],
      ["A faster cache lookup establishes legal compliance", "Latency does not demonstrate lawful or authorized disclosure."]
    ]),
    q("d5-l5", "Stretch", "A cloud service has low hardware rental cost but high data movement and specialist support costs. What comparison should guide placement?", [
      ["Workload-specific total cost, requirements, and operational responsibilities", "Hardware price alone omits important incremental costs and constraints; cloud, on-premises, and hybrid options need an aligned comparison."],
      ["Only the advertised accelerator hourly price", "The scenario explicitly identifies material costs beyond rental."],
      ["Assume on-premises has no staffing or maintenance cost", "Local infrastructure also has ongoing responsibilities and costs."],
      ["Assume cloud scaling overrides all data requirements", "Placement must respect applicable access, processing, and transfer requirements."]
    ]),
    q("d5-l5", "Foundation", "A student model learns to approximate a larger teacher. Which technique is being described?", [
      ["Distillation", "Distillation trains a smaller or different student from teacher behavior; its actual quality still needs independent evaluation."],
      ["Caching", "Caching stores reusable results rather than training a student model."],
      ["Load balancing", "Load balancing distributes requests among serving instances."],
      ["A guaranteed lossless copy", "Approximation can change behavior; it is not automatically identical to the teacher."]
    ]),
    q("d5-l6", "Applied", "An illustrative recovery plan targets RTO 20 minutes and RPO 5 minutes. Service returns after 26 minutes, with a 3-minute data gap. What is the result?", [
      ["RTO missed by 6 minutes; RPO met", "Recovery took 26 rather than at most 20 minutes; the 3-minute data gap is within the 5-minute allowance."],
      ["Both targets met", "The recovery duration exceeds the stated RTO."],
      ["RTO met; RPO missed by 2 minutes", "This reverses recovery duration and data-loss objectives."],
      ["Both missed by 6 minutes", "The data gap is smaller than the RPO and does not miss it."]
    ]),
    q("d5-l6", "Applied", "A deletion error is replicated instantly to every live copy of a document index. Why is replication alone insufficient for recovery?", [
      ["Replication can propagate the same error; recovery needs tested restorable state", "Copies of current damaged state do not provide an earlier valid recovery point."],
      ["Every replica is automatically an independent historical backup", "Live replication need not preserve earlier versions."],
      ["The index can always be restored without its source documents", "Recoverability depends on retained authorized sources and compatible rebuild procedures."],
      ["More replicas prove the deletion was authorized", "Availability design does not establish permission for a data operation."]
    ]),
    q("d5-l6", "Stretch", "A recovery exercise restores an old dataset containing records that should now be deleted or access-restricted. What must the recovery process include?", [
      ["Reapply current deletion and access obligations before safe service restoration", "Recovery must preserve current data governance requirements, not merely return to a technically working historical state."],
      ["Ignore current obligations because backup data is exempt", "A backup does not automatically waive applicable duties."],
      ["Publish every restored record to prove completeness", "Broad disclosure creates an additional access and privacy problem."],
      ["Declare RTO met as proof that all data duties are satisfied", "Recovery speed is not evidence of lawful processing or current permissions."]
    ]),
    // Domain 6 — 22 questions.
    q("d6-l1", "Applied", "A classifier has 8 misses among 40 actual positives in Group A and 8 among 20 in Group B. What do the false-negative rates show?", [
      ["A 20%; B 40%; equal miss counts do not mean equal rates", "Each rate uses its group's actual positives: 8/40 and 8/20."],
      ["Both 8% because each group has eight misses", "A count of eight is not a percentage without the relevant denominator."],
      ["A 40%; B 20%", "This reverses the two group denominators."],
      ["Both 20%, proving fairness in every respect", "Group B's stated rate is 40%, and one metric cannot establish comprehensive fairness."]
    ]),
    q("d6-l1", "Foundation", "A team follows the reviewed May 2025 SDAIA ethics principles. How should it choose fairness metrics and thresholds for its application?", [
      ["Define and justify context-appropriate metrics and allowed thresholds during planning", "The framework supports deliberate fairness controls; the kit does not identify one universal numerical fairness cutoff for all systems."],
      ["Use an invented universal 95% fairness cutoff", "No such universal numerical threshold is established by the reviewed material."],
      ["Measure only overall accuracy and omit affected groups", "An overall average can hide group-specific errors and impacts."],
      ["Wait until after every deployment to define acceptable harm", "Planning should establish criteria before affected people are exposed."]
    ]),
    q("d6-l1", "Stretch", "A high-risk proposal is supported only by a favorable average benchmark. Which addition best matches the kit's reviewed May 2025 ethics-framework summary?", [
      ["Risk-appropriate pre- and post-conformity assessments and lifecycle controls", "High-risk controls extend beyond one aggregate score and include assessment before and after deployment; this is not a project compliance determination."],
      ["Skip post-deployment assessment after a good training score", "The framework's lifecycle approach does not stop at training success."],
      ["Assume the benchmark changes the system into little-or-no risk", "Risk classification depends on the use and impact, not simply a favorable metric."],
      ["Replace applicable law with the benchmark report", "An evaluation report cannot override legal requirements."]
    ]),
    q("d6-l1", "Applied", "A model explanation describes which features influenced a decision. What does this explanation not establish on its own?", [
      ["That the decision is correct, fair, and lawful", "An explanation can support understanding while the underlying decision still fails accuracy, fairness, or legal requirements."],
      ["That any features were considered", "A faithful feature-influence explanation can provide that limited information."],
      ["That a user can receive any information about the decision", "Explanations may provide useful information when designed appropriately."],
      ["That further review is possible", "Explanations can help reviewers investigate; they do not prevent review."]
    ]),
    q("d6-l2", "Applied", "Three reviewers each take 3 minutes per case. The system sends 90 cases/hour. Ignoring breaks and other work, what happens?", [
      ["Capacity is 60 cases/hour; backlog grows 30 cases/hour", "Each reviewer can handle 60/3 = 20 cases/hour; three handle 60 against 90 arrivals."],
      ["Capacity is 90 cases/hour; no backlog", "This overstates the capacity of three reviewers at the stated handling time."],
      ["Capacity is 20 cases/hour; backlog grows 70", "Twenty is one reviewer's capacity, not the total for three."],
      ["Capacity is 180 cases/hour; backlog shrinks", "The calculation must divide an hour by the 3-minute handling time."]
    ]),
    q("d6-l2", "Stretch", "A reviewer sees an AI recommendation but lacks evidence, time, or authority to change it. What is the oversight problem?", [
      ["The human step may be nominal rather than effective control", "Meaningful oversight requires competence, information, capacity, and authority to intervene."],
      ["Any human click guarantees a safe decision", "A click without meaningful review does not establish effective oversight."],
      ["The reviewer should be required to accept every recommendation", "Compulsory agreement removes the ability to correct model error."],
      ["Oversight is needed only when the model says it is uncertain", "Model confidence can be misleading and cannot define all oversight needs."]
    ]),
    q("d6-l2", "Applied", "A team argues that user consent alone makes an unacceptable-risk social-scoring use acceptable under the reviewed ethics framework. What is the best response?", [
      ["Consent does not automatically override the framework's unacceptable-risk restrictions", "The kit separates a consent claim from the ethics framework's restrictions and any applicable legal requirements."],
      ["Any consent form waives all ethical and statutory limits", "Consent is not a universal exemption from other requirements."],
      ["A high model score makes risk categories irrelevant", "Predictive performance does not erase unacceptable use or harm."],
      ["Calling it a pilot removes every restriction", "A pilot label does not automatically change the nature of the use."]
    ]),
    q("d6-l2", "Foundation", "People can challenge an AI-supported decision. What capability makes that challenge meaningful?", [
      ["A documented route to qualified review and correction where justified", "Contestability needs a usable process and authority, not merely a displayed complaint link."],
      ["A page that repeats the same model answer indefinitely", "Repetition without review does not address a challenged error."],
      ["A statement that the algorithm can never be questioned", "This removes the challenge pathway entirely."],
      ["A requirement to reveal all other users' private records", "A challenge should not depend on unauthorized disclosure of unrelated people's data."]
    ]),
    q("d6-l3", "Applied", "Names are replaced with stable codes, but a protected lookup can reconnect each code to a person. Which statement is safest?", [
      ["The data is pseudonymized, not automatically anonymous", "A reidentification route remains, so personal-data protections cannot be dismissed merely because names were replaced."],
      ["The data is definitely anonymous for every purpose", "The stated lookup permits linkage back to identified people."],
      ["Stable codes automatically authorize public publication", "Changing identifiers does not create a lawful disclosure basis."],
      ["Only visible names can ever be personal data", "Identifiability can arise from codes and other linked attributes."]
    ]),
    q("d6-l3", "Applied", "An AI service needs a yes/no eligibility attribute but proposes collecting full identity documents for every request. What privacy principle is most directly at issue?", [
      ["Data minimization in relation to the necessary purpose", "Collecting substantially more personal detail than the task requires needs justification rather than convenience alone."],
      ["Keeping all raw documents is automatically mandatory", "The kit does not establish universal raw-document retention for every AI task."],
      ["Higher storage capacity creates a lawful purpose", "Capacity does not justify collection or determine a legal basis."],
      ["A model's confidence replaces privacy review", "Prediction confidence cannot establish necessary or lawful processing."]
    ]),
    q("d6-l3", "Stretch", "A team quotes a five-year processing-activity record requirement as permission to keep all raw prompts and attachments for five years. What distinction is missing?", [
      ["Processing-activity records and underlying raw payloads are different records", "The reviewed summaries do not turn an activity-record duty into universal retention of every prompt or document."],
      ["Every record and payload always has identical retention duties", "Retention requirements depend on record type, purpose, and applicable obligations."],
      ["Logging convenience overrides minimization", "Convenience does not itself justify broad personal-data retention."],
      ["Removing a filename makes attachments nonpersonal", "The content may still identify people or contain sensitive information."]
    ]),
    q("d6-l3", "Stretch", "A proposed service transfers personal data outside Saudi Arabia. What does this kit authorize the team to conclude?", [
      ["A current project-specific transfer review is needed; this kit is not approval", "The reviewed summary is not a complete current inventory of instruments, adequacy decisions, or sector requirements."],
      ["Any provider with a security certificate is automatically permitted", "A certificate alone does not establish the applicable transfer route and safeguards."],
      ["A cheaper foreign region waives transfer duties", "Cost advantage does not override applicable requirements."],
      ["The kit's educational example is binding legal advice", "The summaries are explicitly educational, not authoritative translations or project-specific compliance decisions."]
    ]),
    q("d6-l4", "Applied", "A public dependency package has a familiar name but a slightly different publisher. What should procurement or engineering verify?", [
      ["Package identity, provenance, integrity, permissions, and applicable license", "Supply-chain controls should verify what is actually being adopted, not rely on a similar name or download count."],
      ["Only whether the name sounds reputable", "Lookalike naming can conceal an unrelated or malicious package."],
      ["Only how many social-media mentions it has", "Popularity is not a substitute for provenance and suitability checks."],
      ["Nothing if the model generated the package recommendation", "A generated recommendation does not verify source identity or safety."]
    ]),
    q("d6-l4", "Foundation", "A model-serving process only needs to read one approved dataset. Which access design follows least privilege?", [
      ["Grant the narrow necessary read permission without unrelated write or administrative access", "Least privilege restricts the service to permissions needed for its assigned function."],
      ["Grant administrator access because configuration is easier", "Convenience does not justify broad unnecessary authority."],
      ["Share every employee's credentials with the process", "Shared broad credentials undermine access boundaries and accountability."],
      ["Let the model choose its own account permissions", "Permission granting should be controlled outside model output."]
    ]),
    q("d6-l4", "Applied", "A training source can be edited by unknown external contributors. Which risk deserves explicit controls?", [
      ["Poisoning through manipulated training examples or labels", "An attacker-controlled contribution path can influence learned behavior; provenance, review, and evaluation help reduce that risk."],
      ["A guarantee that more contributors eliminate bias", "Contributor count does not establish trustworthy content."],
      ["A purely cosmetic formatting concern", "Changes can affect targets and model behavior, not just appearance."],
      ["An exemption from validating the dataset", "External editing increases the need for source and content controls."]
    ]),
    q("d6-l5", "Applied", "A browsing assistant follows a malicious instruction embedded in a retrieved web page. What type of attack is this?", [
      ["Indirect prompt injection", "The malicious instruction arrives through external content rather than a direct trusted instruction channel."],
      ["A normal authorized system update", "A web page is not entitled to replace the application's trusted instructions."],
      ["A guaranteed calibration improvement", "The attack concerns instruction hijacking, not probability calibration."],
      ["A harmless formatting change", "The described behavior redirects the assistant's actions."]
    ]),
    q("d6-l5", "Stretch", "An assistant's response is inserted into an administrative page as executable content. What safeguard addresses the downstream risk most directly?", [
      ["Treat output as untrusted and apply context-appropriate safe handling and validation", "Generated text must not gain execution authority simply by entering a downstream component."],
      ["Assume output from a trusted model is safe to execute", "A model can produce unsafe content even when its provider is trusted."],
      ["Ask the model to include the word 'safe' in its response", "A label is not an execution boundary or content-handling safeguard."],
      ["Remove all audit trails for generated actions", "Reduced traceability does not prevent unsafe output handling."]
    ]),
    q("d6-l5", "Applied", "A defensive prompt blocked all known injection examples in a small test set. What is the honest claim?", [
      ["It worked on that test set; layered controls and further evaluation remain necessary", "A finite successful test does not guarantee prevention against all future attacks."],
      ["Prompt injection has been permanently eliminated", "No universal immunity follows from a small set of tests."],
      ["Tool authorization can now be removed", "External enforcement remains necessary even when prompt defenses help."],
      ["Every retrieved source is now trusted control text", "Successful tests do not change the trust status of external content."]
    ]),
    q("d6-l6", "Stretch", "Assume the reviewed Implementing Regulation Article 24 authority-notification condition applies to a breach. The controller became aware 57 hours ago. How much of that 72-hour window remains?", [
      ["15 hours; separate subject notification and response duties still need attention", "72 − 57 = 15 hours from controller awareness under the stated condition. This does not give a universal delay for subject notification or containment."],
      ["72 more hours from the next management meeting", "The stated clock begins at controller awareness, not a later meeting."],
      ["15 hours, and affected subjects must always wait until the authority reply", "Subject notification without undue delay is separate and is not universally contingent on an authority reply."],
      ["No clock applies because operational mitigation has started", "Starting containment does not automatically remove an applicable notification duty."]
    ]),
    q("d6-l6", "Applied", "An organization appoints a Responsible AI Officer under the reviewed ethics framework. What should it not assume?", [
      ["That this appointment automatically satisfies every legally required privacy role", "Ethics-framework roles and statutory privacy duties are distinct; project-specific requirements still need review."],
      ["That the officer can help coordinate ethical controls", "Coordination is a reasonable ethics-governance function; the issue is automatic equivalence with legal roles."],
      ["That accountability should be documented", "Documented responsibilities support governance rather than conflict with it."],
      ["That specialist review can be required", "An ethics appointment does not remove the need for specialist expertise."]
    ]),
    q("d6-l6", "Foundation", "An entity completes optional ethics registration and receives a motivational adoption badge. Which interpretation is correct?", [
      ["This is distinct from legal compliance and from an individual's AI Engineer exam award", "The kit separates framework adoption recognition, statutory duties, and assessment badge levels."],
      ["The entity is exempt from personal-data law", "Optional registration does not waive statutory duties."],
      ["Every employee has passed the Expert exam", "Entity adoption recognition is not an individual assessment result."],
      ["No post-deployment monitoring is now needed", "Lifecycle controls continue after registration and release."]
    ]),
    q("d6-l6", "Applied", "A project adopts NIST's Govern, Map, Measure, Manage structure. How should it describe the structure in a Saudi project report?", [
      ["Voluntary risk-management guidance alongside applicable local obligations", "NIST's framework supports risk practice but is not itself Saudi law or a legal exemption."],
      ["A complete replacement for Saudi statutory duties", "A general guidance framework cannot override applicable law."],
      ["A verified exhaustive official exam syllabus", "The source is not a SDAIA objective-by-objective syllabus."],
      ["A guarantee that every risk has been eliminated", "Organizing risk work does not prove zero residual risk."]
    ]),
    // Domain 7 — 10 questions.
    q("d7-l1", "Applied", "A sponsor asks for a chatbot, but users mainly struggle to find one form hidden in navigation. What is the best first project step?", [
      ["Validate the user problem and compare a simpler navigation fix with AI alternatives", "Problem discovery should test the need rather than assume the requested technology is the right solution."],
      ["Purchase a large model before observing users", "Early procurement locks in a solution without validating the problem."],
      ["Treat the word 'chatbot' as a measurable outcome", "A named technology is not an end-user success measure."],
      ["Exclude non-AI options from feasibility review", "A simpler solution may meet the need with less cost and risk."]
    ]),
    q("d7-l1", "Stretch", "A pilot improves task completion, but its production access, oversight, and operations gates remain unresolved. What should the sponsor conclude?", [
      ["The pilot supplies evidence, not production approval", "Technical or user benefits do not automatically satisfy legal, ethical, security, or operational release conditions."],
      ["A successful pilot waives every release gate", "Benefits cannot authorize bypassing mandatory safeguards."],
      ["The project must never be considered again", "Unresolved gates call for investigation and decisions, not necessarily permanent abandonment."],
      ["An attractive ROI makes missing permissions irrelevant", "Economic value does not grant access or legal authority."]
    ]),
    q("d7-l2", "Applied", "For a stated one-year simple undiscounted training example, benefits are SAR 120,000, setup is SAR 20,000, and operating cost is SAR 40,000. What is ROI using (benefits − costs)/costs?", [
      ["100%", "Total costs are SAR 60,000; net benefit is SAR 60,000, so simple ROI is 60,000/60,000 = 100%."],
      ["200%", "Benefits divided by costs is 200%, but ROI subtracts costs from benefits first."],
      ["50%", "This divides net benefit by benefits rather than by the stated cost denominator."],
      ["500%", "Using setup alone omits the stated operating cost."]
    ]),
    q("d7-l2", "Applied", "A training example has SAR 24,000 setup cost and constant monthly benefits of SAR 7,000 with SAR 3,000 monthly operating cost. Ignoring discounting, what is simple payback after launch?", [
      ["6 months", "Monthly net benefit is 7,000 − 3,000 = SAR 4,000; 24,000/4,000 = 6 months under the stated assumptions."],
      ["About 3.43 months", "This uses gross monthly benefits and omits operating cost."],
      ["8 months", "This divides setup by operating cost rather than by net benefit."],
      ["No finite payback", "The stated net monthly benefit is positive, so simple payback is finite."]
    ]),
    q("d7-l2", "Stretch", "An assistant releases 80 staff hours each month, valued at SAR 60/hour, but no payroll or purchased-service cost changes. How should the benefit be reported?", [
      ["SAR 4,800/month of estimated capacity value, not established cash savings", "80 × 60 = SAR 4,800 values released time. Realized use and a cash-saving mechanism need separate evidence."],
      ["SAR 4,800/month of guaranteed payroll reduction", "No payroll change has been established."],
      ["No potential benefit of any kind", "Released capacity can have value, but it should not be mislabeled as cash saved."],
      ["SAR 60/month because only the hourly rate matters", "Capacity value uses both the released hours and the stated value per hour."]
    ]),
    q("d7-l3", "Applied", "A completion rate rises from 60% to 72% after several simultaneous service changes. What is the honest description?", [
      ["A 12-percentage-point rise, or 20% relative increase; AI causation is not isolated", "72 − 60 = 12 points and 12/60 = 20%. Concurrent changes prevent assigning causation to AI from before/after data alone."],
      ["A 12% relative increase proved to be caused by AI", "This confuses points with relative change and overstates causation."],
      ["A 20-percentage-point rise", "The arithmetic difference between the two percentages is 12 points."],
      ["No measurable change", "There is an observed increase, even though its cause remains uncertain."]
    ]),
    q("d7-l3", "Stretch", "A supplier's demo uses only ten easy cases. A manager requests a statement that the system is ready for all users. What should the team communicate?", [
      ["The limited evidence and a plan to test representative and high-risk cases before approval", "A useful briefing states what is known, unknown, and needed for a decision instead of overstating a small demonstration."],
      ["That ten successes guarantee every production case", "A small convenient sample cannot establish universal performance."],
      ["Only the model's confidence wording", "Self-reported confidence does not describe evidence coverage or uncertainty."],
      ["That no decision can ever be made with incomplete information", "Decisions can be staged using explicit uncertainty, safeguards, and further evidence."]
    ]),
    q("d7-l4", "Applied", "The build team sends a runbook, but the operations team has not accepted support ownership or practiced recovery. What is still missing?", [
      ["An accepted operational handoff with demonstrated capability and responsibilities", "Sending files is not the same as the receiving team accepting and being able to perform its duties."],
      ["Only a declaration that the handoff was complete", "A declaration does not supply acceptance, training, or tested recovery."],
      ["A rule that the model owns every incident", "A model cannot replace accountable operational roles."],
      ["A claim that RACI automatically satisfies privacy law", "A collaboration matrix is not a substitute for legally required roles or duties."]
    ]),
    q("d7-l5", "Applied", "An AI tool has 200 eligible staff users. Training attendance is 180, but only 50 users complete the intended task appropriately each week. What weekly adoption rate best reflects the stated outcome?", [
      ["25% of eligible users", "The outcome-based adoption rate is 50/200 = 25%; attendance is a different activity measure."],
      ["90% because 180 attended training", "Training attendance does not establish sustained appropriate use."],
      ["About 28% because 50/180 attended", "This changes the denominator from all eligible users to trainees."],
      ["100% because the tool was launched", "Launch availability does not establish adoption."]
    ]),
    q("d7-l6", "Stretch", "An engineer evaluating vendors has a financial interest in one supplier. What is the most responsible response?", [
      ["Disclose the interest and follow an independent conflict-management process", "Disclosure is necessary but may need recusal or independent review; evidence-based evaluation and confidentiality still matter."],
      ["Disclose privately and continue controlling every decision without review", "Disclosure alone does not necessarily manage the influence on procurement."],
      ["Hide the interest if the supplier has a strong demo", "A favorable demo does not remove the conflict or the duty of honesty."],
      ["Share confidential competitor information to balance the process", "Unauthorized disclosure creates another professional and confidentiality problem."]
    ])
  ];
  // A stable mixed-domain paper order, separate from random browser attempts.
  // Spread each domain's items over the paper while preserving its authored order.
  const allocation = globalThis.STUDY_KIT.mocks.find(m => m.id === "m1").allocation;
  const seen = {};
  const mixed = reserved.map(item => {
    seen[item.domain] = (seen[item.domain] || 0) + 1;
    return { item, position: (seen[item.domain] - 0.5) / allocation[item.domain] };
  }).sort((a, b) => a.position - b.position).map(entry => entry.item);
  globalThis.STUDY_KIT.questions.push(...mixed);
})();
