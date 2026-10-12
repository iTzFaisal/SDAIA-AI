# Domain 2 study notes

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12. Confirmed exam booking: 5 December 2026 (provided by learner).

## How to use this workbook

Read, explain without notes, work examples on paper, then answer the lesson checks. These notes cover our proposed domain curriculum, not every possible official expert-level objective.

## Before you begin

Read the foundation primer and Domain 1, especially parameters, loss, validation, and leakage. No programming exercises are required.

## Lesson 1: Choose an AI approach: rules, search & learning

**Learning objectives**

- Distinguish rule-based reasoning, search, learning, and generation.
- Describe states, actions, goals, costs, and heuristics without code.
- Choose a simple defensible approach for a business scenario.

### AI is wider than a chatbot

Domain 1 taught models that learn from examples. AI also includes explicit rules, reasoning, search, and planning. A rule-based system follows human-written conditions: if a shipment exceeds a stated weight, apply a defined fee. This can be transparent and dependable when the rules are stable. It does not need to learn the fee from past invoices.

A learned classifier handles patterns that are difficult to enumerate, such as recognizing damaged packaging in photos. A generative model produces content, such as a draft explanation of a delay. These approaches can be combined, but they answer different questions. A fluent explanation is not a verified delivery plan or an authorized decision.

### Represent a search problem

Search explores possible choices to reach a goal. For a route, a state might be the vehicle's current location, an action is travelling along an allowed road, and the goal is reaching the destination. A transition describes what an action changes. A path cost adds costs along the route: minutes, distance, or another explicitly chosen measure.

The state must contain the information needed for decisions. If fuel or delivery deadlines constrain the route, location alone may be insufficient. A plan is a proposed sequence under that representation, not proof that the real world will cooperate. Incorrect maps or changing road conditions can invalidate an otherwise correct search result.

### Compare search strategies

Breadth-first search explores shallow paths before deeper ones. With equal positive cost per step, the fewest steps also give the lowest total cost. If roads have different travel times, the fewest roads need not give the fastest journey. Depth-first search follows a branch deeply before returning to alternatives; it does not generally guarantee the cheapest solution.

Uniform-cost search prioritizes accumulated path cost; on a finite graph with nonnegative costs and correct repeated-state handling it can find a least-cost route. A heuristic estimates remaining cost to guide informed search. A* combines accumulated cost g with estimated remaining cost h, giving f = g + h. Lowest-cost guarantees require conditions, such as an appropriate non-overestimating heuristic and correct handling of revisited states. A useful-looking guess is not automatically admissible.

### Learning actions is not the same as writing a plan

Reinforcement learning learns a policy, a rule for selecting actions, using rewards from interaction. It balances exploration of unfamiliar actions with exploitation of actions believed to work. A reward is the feedback being optimized, not necessarily the true business goal. Rewarding speed alone could encourage unsafe behavior or poor service.

Planning can use a known model of transitions to search for actions; reinforcement learning may be useful when behavior must be learned through experience. Neither is justified merely because a workflow has multiple steps. Many scheduling problems are better served by established optimization or explicit constraints. Ask what is known, what must be learned, and what mistakes would cost.

### Worked example: three needs, three methods

A courier needs to calculate a fixed parcel fee, find a low-time route, and predict journey duration under traffic. Apply explicit fee rules for the first, search over a road graph with time costs for the second, and a validated regression model for the third. A language model can summarize these results but should not replace the authoritative fee calculation.

Route A uses two roads taking 8 and 9 minutes: 17 minutes. Route B uses three roads taking 3, 4, and 5 minutes: 12 minutes. Fewest steps selects A, while lowest time selects B. State the objective before choosing the strategy. This example is conceptual practice, not an instruction to implement search.

**Remember:** Choose rules for explicit requirements, search for structured choices, and learning for patterns that need evidence.

### Common exam traps

- Not all AI learns from data, and not all AI generates text.
- Fewest steps means lowest cost only when step costs support that equivalence.
- A reward can be optimized while the real objective is harmed.

### Explain without notes

- Give a problem where explicit rules are preferable to an LLM.
- Why might a route search need more state than just location?

### Learning references

- UC Berkeley CS 188 — Uninformed search: https://inst.eecs.berkeley.edu/~cs188/textbook/search/uninformed.html
- Google Machine Learning glossary: https://developers.google.com/machine-learning/glossary

## Lesson 2: Neural networks: from a neuron to training

**Learning objectives**

- Explain weights, biases, hidden layers, and nonlinear activations.
- Separate forward computation, backpropagation, and optimizer updates.
- Interpret learning rate, epochs, batches, and training failures.

### A neuron is a calculation, not a tiny person

A simplified neuron takes numerical inputs, multiplies each by a learned weight, adds them, adds a learned bias, and applies an activation function. A weight controls how an input contributes; a bias shifts the calculation. This mathematical bias is not the same as demographic bias. Inputs and intermediate outputs can be organized into layers.

The input layer receives the representation, hidden layers transform it, and an output layer produces the task's output. Hidden means intermediate, not secret. Multiple layers can learn increasingly useful representations, but a particular neuron need not correspond to one human-readable concept. Deep learning does not remove the need for representative data, sound labels, or protected evaluation.

### Why activations matter

Stacking only linear transformations still yields a linear transformation. Nonlinear activations let networks model relationships that a simple weighted sum cannot capture. ReLU returns max(0, z): negative inputs become zero and positive inputs pass through. A sigmoid maps a number into the range 0–1 and is commonly used for binary-classification outputs.

Softmax converts a vector of scores into nonnegative values that sum to one, often for mutually exclusive classes. Those values are model estimates, not automatically calibrated probabilities or evidence that the correct class was available. For a numerical regression target, an output without a bounded activation may be appropriate. Choose the output to match the task rather than copying a classifier's structure.

### Follow one training cycle

First perform a forward pass: compute the outputs from the inputs. Next calculate loss by comparing outputs with the training targets. Backpropagation computes gradients, describing how changes to parameters affect that loss, working backward through the calculation. An optimizer then uses the gradients to update parameters. Backpropagation and the update are connected but distinct jobs.

In a simple gradient-descent update, new weight = old weight − learning rate × gradient. No calculus is required here; understand the direction and step size. Training repeats this cycle. During ordinary inference, the trained parameters are used without loss-based updates. Showing a chatbot an example in a prompt does not by itself perform another training cycle.

### Training controls and warning signs

A batch is a group of training examples used for a step. An epoch is one pass through the training dataset. With 120 examples and a batch size of 30, one complete epoch contains four batches if none are dropped. Learning rate controls the size of updates: very large updates may destabilize training, while very small ones can slow progress.

Vanishing gradients become too small to train some layers effectively; exploding gradients become excessively large and can make updates unstable. Architecture, initialization, normalization, or gradient clipping may help depending on the cause. Dropout randomly suppresses some activations during training to reduce overfitting; ordinary inference does not randomly discard units in the same way. Early stopping chooses a training point using validation evidence. None of these repairs leaked evaluation or systematically wrong labels.

### Worked example: forward and update

For inputs x1 = 2 and x2 = 1, weights w1 = 0.5 and w2 = −1, and bias b = 0.2, the weighted sum is z = (2 × 0.5) + (1 × −1) + 0.2 = 0.2. ReLU gives 0.2. If a different example gives z = −0.7, ReLU gives 0, not −0.7. The result is an intermediate activation unless this neuron is explicitly the output.

If a weight is 0.5, the gradient is 0.4, and the learning rate is 0.1, a simple update gives 0.5 − 0.1 × 0.4 = 0.46. This reduces the loss locally in the estimated descent direction; it does not promise that every future example improves. Check validation behavior and compare the full process with the Domain 1 baseline.

**Remember:** Forward passes produce outputs; backpropagation computes gradients; the optimizer changes learned parameters.

### Common exam traps

- Hidden layers with only linear transformations do not add nonlinear expressiveness.
- An epoch is a data pass, not necessarily one parameter update.
- A softmax score or confident output is not automatically calibrated.

### Explain without notes

- Explain training versus inference using a document classifier.
- Compute ReLU for −3 and 4, then explain why nonlinearity matters.

### Learning references

- Google ML Crash Course — Nodes and hidden layers: https://developers.google.com/machine-learning/crash-course/neural-networks/nodes-hidden-layers
- Google ML Crash Course — Training using backpropagation: https://developers.google.com/machine-learning/crash-course/neural-networks/backpropagation
- Google Machine Learning glossary: https://developers.google.com/machine-learning/glossary

## Lesson 3: Model families, attention & transfer learning

**Learning objectives**

- Compare CNNs, recurrent models, and transformer families.
- Explain attention, position information, and causal masking.
- Choose transfer learning and evaluate its limitations.

### Match structure to the input

A convolutional neural network (CNN) applies learned filters across local regions, such as neighboring image pixels. Sharing the same filter across locations lets it detect related patterns in different parts of an image. Early features may help represent edges or textures, with later layers combining them. This is a useful architectural tendency, not a promise that every trained filter has an intuitive meaning.

Pooling or strides can reduce spatial size, but can also lose fine detail. A CNN is a sensible candidate for image classification or detection, not the only possible choice: transformers can also handle images. For ordinary tabular data, a tree-based baseline may be more appropriate than a deep network. Input structure and deployment evidence matter more than fashionable model names.

### Sequence models remember through a state

A recurrent neural network (RNN) processes a sequence by updating a hidden state across steps. That state carries information from earlier elements. Language, sensor readings, and speech can be sequence tasks, but the order and time spacing must be represented appropriately. An RNN does not store a perfect copy of the entire history.

LSTM and GRU are gated recurrent families designed to help information persist and training remain useful across longer sequences. Long-range dependencies and sequential computation can still be challenging. Do not confuse recurrence in an architecture with repeating a chatbot call: a multi-call workflow need not use an RNN at all.

### Attention builds context-dependent representations

Attention computes relevance weights for combining information. Self-attention relates positions within a sequence, allowing a token's representation to depend on other allowed tokens. In 'the bank approved the loan' versus 'the boat reached the bank', neighboring words can change the interpretation of bank. Multiple attention heads can represent different relationships, though their weights are not a complete causal explanation of a decision.

A transformer uses attention alongside other learned transformations. Position information is needed to distinguish order; token content alone would not reliably separate 'customer paid supplier' from 'supplier paid customer'. In causal language modeling, a mask prevents a position from using future tokens during prediction. Otherwise training would reveal information unavailable when generating the next token. Transformers can process many training positions in parallel, while autoregressive generation still unfolds token by token.

### Encoder, decoder, and transfer choices

Encoder-style models are useful for contextual representations, classification, or embeddings; they can consider surrounding input context. Decoder-style language models generate continuations under a causal constraint. Encoder-decoder models encode an input and generate an output, as in some translation or summarization systems. Not every transformer contains both an encoder and a decoder, and no family guarantees success for every task.

Transfer learning reuses representations learned on another dataset or task. You may freeze a pretrained backbone and train a new output head, or adapt selected or all weights through fine-tuning. Freezing avoids updates to those backbone parameters; it does not mean no parameters anywhere are trained. Reuse can reduce data and compute needs, but domain mismatch, license restrictions, privacy, or weak coverage can make a pretrained model unsuitable. Validate on representative examples rather than assuming general-purpose means universal.

### Worked example: inspect parcels with little labeled data

A courier has 600 labeled parcel photos, not millions. A reasonable candidate is a pretrained vision backbone with a small classification head. First train the head with the backbone frozen and compare it with a simple baseline; consider careful fine-tuning if validation supports it. Keep photos from the same parcel together when evaluating unseen parcels, as Domain 1 taught.

Check dim warehouse images, different cameras, and damage types separately. A pretrained model's source data may not cover these conditions. If the model fails on low-light photos, buying a larger language model is not a diagnosis. Inspect the representation, data coverage, and imaging conditions before choosing the remedy.

**Remember:** Architecture offers useful structure; transfer offers a starting point. Neither replaces task-specific evidence.

### Common exam traps

- Not all transformers have both an encoder and a decoder.
- Attention weights are not proof of causality or a full explanation.
- Freezing a backbone still allows a new head to be trained.

### Explain without notes

- Why must causal language-model training hide future tokens?
- When could a pretrained vision model fail despite a strong public benchmark?

### Learning references

- Google ML Crash Course — What's a large language model?: https://developers.google.com/machine-learning/crash-course/llm/transformers
- Google ML Crash Course — Obtaining embeddings: https://developers.google.com/machine-learning/crash-course/embeddings/obtaining-embeddings
- Google Machine Learning glossary: https://developers.google.com/machine-learning/glossary

## Lesson 4: Tokens, embeddings & how generation behaves

**Learning objectives**

- Distinguish tokens, token IDs, and embedding vectors.
- Explain context windows, next-token generation, and sampling settings.
- Recognize different generative families and why fluency is not truth.

### Text becomes tokens, then numbers

A tokenizer divides text into units such as words, subwords, punctuation, or characters. A token is not always a whole word. Token IDs identify entries in a vocabulary; neighboring ID numbers do not imply similar meanings. The same text can have different token counts under different tokenizers, especially across languages, scripts, and unusual names.

An embedding is a numerical vector, a list of values representing an item in a learned space. Tokens, sentences, documents, and images can have embeddings. Similarity can support retrieval or clustering, but a vector is not a verified fact and its dimensions need not be human-readable. Contextual representations can distinguish different meanings of bank depending on the surrounding text. Static word embeddings assign the same representation regardless of that context.

### Similarity depends on the representation

A search system may compare vectors using cosine similarity, which measures directional alignment, or another defined measure. Query and document embeddings must belong to a compatible space. Two independently chosen models with the same vector length are not automatically compatible: their coordinates may encode entirely different relationships.

Semantic retrieval can find 'reset a password' for a query phrased 'recover account access'. Exact lexical matching is still valuable for product IDs, dates, or legal clause numbers. A highly similar passage can be outdated, unauthorized, or about the opposite policy outcome. Treat similarity as a retrieval signal, not the final test of correctness.

### An autoregressive language model predicts continuations

A typical decoder language model predicts a distribution over the next token given the available context. A decoding procedure selects a token, adds it to the sequence, and repeats until stopping. Pretraining learns broad patterns; later instruction or preference training can improve useful behavior. Text itself can provide training targets through self-supervised next-token or masked-token prediction rather than requiring a person to label every word.

A context window limits how much tokenized information can be considered. Instructions, conversation history, retrieved passages, and generated output consume budget under the model's limits. A long advertised window does not guarantee that all details are used equally well. Conversation context is not a permanent weight update or unlimited memory. An application may store messages separately, but that is a system feature rather than automatic learning during inference.

### Sampling and other generative families

Temperature changes the next-token distribution used for sampling; lower values generally concentrate choices, while higher values often increase variety. Top-p sampling limits choices to a set containing a chosen cumulative probability mass. Neither control verifies facts. Even at temperature zero, a model can repeat an incorrect continuation, and exact reproducibility can depend on the serving system.

Generative AI is wider than language models. A diffusion model learns to reverse a noising process and can generate images through iterative denoising, often conditioned on text. A GAN trains a generator against a discriminator that tries to distinguish real from generated samples. A generative model can produce useful novel content while still reproducing biased patterns or inventing unsupported details. A discriminative model instead focuses on a prediction such as a category or score; neural networks can be used for either purpose.

### Worked example: budget and confidence

For a simplified system with one shared 4,000-token input-and-output budget, instructions use 500 tokens, history uses 700, retrieved passages use 1,800, and output reserves 600. The total is 3,600, leaving 400 tokens. A further 900-token passage would exceed that assumed budget. Reduce history, select evidence more carefully, or use an appropriate larger limit; do not silently remove the relevant policy clause. Actual models may specify separate limits.

Suppose the model predicts a highly likely continuation naming a regulation number. High next-token likelihood means the text fits learned patterns, not that the regulation exists. Lowering temperature cannot supply missing evidence. Verify the number against an authoritative source or report that it could not be established.

**Remember:** Tokens are processing units, embeddings are representations, and generation selects plausible continuations—not certified facts.

### Common exam traps

- One word can contain multiple tokens; token IDs are not semantic distances.
- A similarity score is not the probability that a passage is true.
- Temperature zero does not eliminate hallucination or guarantee identical serving results.

### Explain without notes

- Why must a retrieval index be reconsidered when changing embedding models?
- What can low temperature change, and what can it not establish?

### Learning references

- Google ML Crash Course — Obtaining embeddings: https://developers.google.com/machine-learning/crash-course/embeddings/obtaining-embeddings
- Google ML Crash Course — What's a large language model?: https://developers.google.com/machine-learning/crash-course/llm/transformers
- Google Machine Learning glossary: https://developers.google.com/machine-learning/glossary

## Lesson 5: Prompting, RAG & fine-tuning: choose the right lever

**Learning objectives**

- Write a clear conceptual prompt with evidence and an abstention rule.
- Describe ingestion, retrieval, reranking, and grounded generation.
- Compare prompting, RAG, and fine-tuning using freshness and behavior needs.

### Start with a clear task

A useful prompt specifies the task, audience, constraints, available evidence, and desired output format. Zero-shot prompting gives an instruction without worked examples; few-shot prompting adds a small number of demonstrations in the context. Examples can clarify categories or style without updating weights. Choose representative examples rather than accidentally teaching contradictory behavior.

For a policy assistant, ask it to answer only from supplied approved excerpts, identify the supporting passages, and say when evidence is missing or conflicting. Separate instructions from quoted content. This improves clarity but is not a security boundary: a malicious retrieved passage can contain instructions attempting to redirect the assistant. A request for structured output helps organization; the application must still validate the structure and factual content. Asking for an explanation does not make the explanation a verified account of internal reasoning.

### Build the retrieval path

Retrieval-augmented generation (RAG) supplies selected external information to support generation. Before questions arrive, collect approved documents, preserve source/version metadata, split them into meaningful chunks, and build a searchable index. At question time, retrieve relevant chunks, optionally rerank them, assemble a prompt with that evidence, and generate an answer with source references. Retrieval may be lexical, vector-based, or hybrid; a vector database is not a definition of RAG.

Chunking trades detail against context and retrieval precision. Tiny chunks may lose conditions or exceptions; giant chunks can dilute relevance or waste budget. Overlap can preserve boundary context but creates duplication. Filter by the user's permissions before exposing content, and preserve effective dates so obsolete passages are not mistaken for current policy. A reranker reorders candidates for relevance; it cannot recover a document that was never retrieved.

### Grounding has failure points

Grounding means relating the answer to the supplied evidence. RAG can improve freshness without retraining the generator, but success requires correct ingestion, retrieval, and use of the evidence. If the latest policy is absent from the index, a good generator cannot reliably recover it. If retrieval finds the right clause but the answer invents an exception, the generation or instruction stage still failed.

A citation is useful only when the cited passage actually supports the claim. Test irrelevant passages, conflicting versions, missing answers, and questions requiring multiple clauses. The system should abstain or escalate when support is inadequate. RAG does not erase hallucination, grant document permissions, or make untrusted source text authoritative. Security and operational details will be developed further in later domains.

### Fine-tuning changes learned behavior

Fine-tuning continues training on selected examples and updates learned parameters to adapt behavior, such as classification patterns, terminology, or a repeated response style. Parameter-efficient methods can train a small subset or added adapters rather than every base-model weight. They still involve training; they are not just longer prompts. The quality, permission, and representativeness of examples remain important.

Use prompting as a low-cost starting point when the model can already do the task. Consider RAG when answers depend on changing or private documents and need traceable evidence. Consider fine-tuning when a persistent task behavior is poorly achieved through prompting and there is enough high-quality training data to test adaptation. Fine-tuning is not a reliable substitute for a live knowledge source, and it may degrade unrelated capabilities. These methods can be combined: a fine-tuned assistant can still retrieve current policy.

### Worked example: weekly policy versus stable format

A courier updates refund rules each week and wants a consistent three-field response: decision, evidence, and next step. Start with a clear structured prompt and RAG over approved current policies. If consistent format or classification remains weak on a development set, evaluate fine-tuning on carefully reviewed examples. Do not retrain weekly merely to insert new refund amounts that should be retrieved.

A customer asks about an exception not present in any approved excerpt. The best answer is to state the evidence gap and route the case for review, not invent an exception in the required three-field format. Evaluate both answering and appropriate abstention. A system that always returns valid fields can still be factually wrong.

**Remember:** Prompting steers the current request; RAG supplies evidence; fine-tuning adapts parameters. Diagnose the need before combining them.

### Common exam traps

- Few-shot prompting is not weight training.
- RAG does not require vector-only search and does not guarantee grounded answers.
- A citation or valid output shape does not prove the claim is supported.

### Explain without notes

- Which stage would you investigate when the correct clause is retrieved but misquoted?
- Why is RAG usually a better freshness mechanism than memorizing weekly policy in weights?

### Learning references

- Google ML Crash Course — Fine-tuning, distillation, and prompt engineering: https://developers.google.com/machine-learning/crash-course/llm/tuning
- Lewis et al. — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks: https://arxiv.org/abs/2005.11401
- NIST AI RMF — Generative AI Profile (600-1): https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
- Google Machine Learning glossary: https://developers.google.com/machine-learning/glossary

## Lesson 6: Evaluate generative systems & bound agents

**Learning objectives**

- Evaluate retrieval and answers separately with a task-specific rubric.
- Recognize hallucinations, judge limitations, and appropriate abstention.
- Distinguish workflows from tool-using agents and select bounded safeguards.

### Evaluate the task, not the eloquence

A generative answer can be grammatical and confident yet wrong, unsupported, incomplete, or unsafe. Hallucination describes invented or unsupported output, not human intent to deceive. Define what a successful answer needs: factual correctness, evidence support, coverage of required details, helpfulness, acceptable refusals, and valid structure. For a refund assistant, a beautiful answer citing an obsolete rule is still a failure.

Build a representative evaluation set before tuning. Include common cases, rare costly errors, ambiguous requests, conflicting evidence, missing evidence, and adversarial content. Keep development examples separate from a reserved final set, as in Domain 1. Record model, prompt, corpus, and settings so comparisons refer to a defined system, not just a model name. A public benchmark may not represent the organization's documents or users.

### Separate retrieval from generation

Retrieval evaluation asks whether the needed evidence appears in the top-k candidates. Recall@k can mean the fraction of all known relevant passages retrieved in those k slots; document the exact definition used. Also inspect whether the candidates are relevant, authorized, and current. Good retrieval scores do not show that the answer used the evidence correctly.

For generation, assess correctness against authoritative reference answers, faithfulness to supplied evidence, completeness, citation support, and appropriate abstention. An answer can faithfully repeat an outdated passage yet be wrong for today's task. Conversely, a true statement from model memory may be unsupported by the provided sources. Lexical-overlap metrics such as BLEU or ROUGE can help some tasks but may penalize valid paraphrases or reward wrong text with shared words. Exact match is useful for exact fields, not every open-ended answer.

### Use judges carefully

Human review with a clear rubric and domain knowledge is important, especially for high-consequence cases. Automated checks can test output shape, forbidden actions, exact fields, or citation existence. A language-model judge can scale some assessments, but may favor verbosity, its own model family, or an answer's position. It can also be misled by instructions inside the response it is judging.

Calibrate judges against expert-reviewed cases, consider blinded or randomized comparisons, and inspect disagreement rather than hiding it in an average. Repeated runs can reveal variability. Report counts, slices, and uncertainty along with rates. Measure latency and cost under realistic usage. A system that refuses every question may have few unsupported answers but no useful coverage; report answer rate and quality among answered cases together.

### Agents add actions and new risks

A fixed workflow follows predetermined steps, such as retrieve then draft then review. A tool-using agent can select actions based on a goal and observations, possibly repeating a loop of plan, act, and inspect. The word agent does not imply reinforcement learning, consciousness, or unlimited autonomy. A tool-call proposal is still a model output; the surrounding application decides what can actually run.

Give only necessary permissions, validate tool inputs, limit steps and spending, record actions, and require approval for consequential changes. Treat retrieved documents and tool responses as untrusted data, not higher-priority instructions. An instruction saying 'do not issue refunds' is not enough if the application exposes an unrestricted payment tool. Agent errors can compound across steps, so evaluate completion, unauthorized-action attempts, recovery, and side effects, not only the final sentence.

### Worked example: assess a refund assistant

On 40 questions, 30 have answers in approved current documents and 10 do not. Suppose all needed evidence is retrieved for 24 of the 30 answerable questions. The question-level evidence hit rate is 24/30 = 80%, explicitly different from passage-level recall. Of 25 generated answers, 20 pass the full correctness-and-support rubric: 20/25 = 80%. Answer rate is 25/40 = 62.5%. These are different denominators and none alone establishes readiness.

Inspect whether the assistant abstained on the 10 unanswerable questions, missed answerable cases, or produced unauthorized refund calls. A draft-only assistant with human approval is a more bounded initial design than autonomous payments. Decide acceptable error costs, operational limits, and oversight before release. Our practice scores teach these decisions; they do not predict an official badge level.

**Remember:** Evaluate evidence, answers, and actions separately. Useful coverage and safe boundaries matter as much as fluent output.

### Common exam traps

- High text overlap does not prove factual correctness or grounding.
- An LLM judge is another fallible measurement component.
- Tool permissions must be enforced outside the prompt; refusal-only systems are not automatically useful.

### Explain without notes

- How can an answer be faithful to its context but factually wrong today?
- Which measurements would reveal an assistant that always refuses or takes unauthorized actions?

### Learning references

- Lewis et al. — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks: https://arxiv.org/abs/2005.11401
- NIST AI RMF — Generative AI Profile (600-1): https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
- Google ML Crash Course — What's a large language model?: https://developers.google.com/machine-learning/crash-course/llm/transformers
- Google Machine Learning glossary: https://developers.google.com/machine-learning/glossary

## Domain 2 revision sheet

- **Approach:** Explicit rules for fixed requirements; search for structured plans; learning for data-driven patterns.
- **Search:** Fewest steps is not lowest cost with unequal step costs. A* uses accumulated cost + estimated remaining cost.
- **Neuron:** Weighted inputs + bias → activation. Linear-only layers remain linear; ReLU = max(0, z).
- **Training:** Forward → loss → backpropagation gradients → optimizer update. Ordinary inference does not update weights.
- **Controls:** Batch = examples per step; epoch = data pass; learning rate = update size. Validate regularization choices.
- **Families:** CNN: local shared filters. RNN: sequential state. Transformer: attention and position information.
- **Transfer:** Reuse a pretrained representation; freeze a backbone or fine-tune. Verify domain fit and held-out quality.
- **Representation:** Token IDs identify units; embeddings represent items. Compare vectors in compatible spaces.
- **Generation:** Autoregressive models select next tokens. Context and sampling settings do not verify facts.
- **Adaptation:** Prompting steers requests; RAG supplies evidence; fine-tuning updates parameters. These can be combined.
- **RAG diagnosis:** Check corpus/version → chunking → retrieval → reranking → evidence use → citation support.
- **Evaluation:** Measure evidence retrieval, correctness, faithfulness, completeness, abstention, slices, latency, and cost separately.
- **Agents:** Enforce least privilege, input validation, step/cost limits, logs, and approval outside model text.

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
- **MLOps / LLMOps:** Lifecycle practices for operating ML systems / language-model applications, including versioning, evaluation, release, monitoring, and recovery.
- **RAG:** Retrieval-augmented generation: supplying retrieved evidence to support an answer; does not guarantee correctness.
- **Heuristic:** An estimate used to guide search; a useful estimate does not automatically satisfy optimality conditions.
- **Policy (reinforcement learning):** A rule for selecting actions from observations or states; distinct from an organizational policy document.
- **Neural network:** A learned network of numerical transformations, often organized into layers with nonlinear activations.
- **Activation:** A function applied to a neuron's weighted sum; nonlinear activations enable nonlinear representations.
- **ReLU:** Rectified linear unit: max(0, z).
- **Softmax:** A transformation of scores into nonnegative values summing to one; calibration is not guaranteed.
- **Backpropagation:** Computing loss gradients backward through a network; the optimizer uses them to update parameters.
- **Batch / epoch:** A group of training examples for a step / one pass through the training dataset.
- **Dropout:** Training-time random suppression of activations used as regularization.
- **CNN / RNN:** Convolutional neural network using shared local filters / recurrent neural network updating a state across a sequence.
- **Transfer learning:** Reusing representations or parameters learned on another dataset or task.
- **Transformer:** A neural architecture using attention and other transformations, with position information for sequences.
- **Self-attention:** Combining information from allowed positions within a sequence using learned relevance weights.
- **Causal mask:** A restriction preventing next-token prediction from using future tokens.
- **Token:** A processing unit such as a word, subword, character, or punctuation; not necessarily a full word.
- **Embedding:** A numerical vector representing an item in a learned space; proximity is a similarity signal, not truth.
- **Context window:** The tokenized information a model can consider within its limits; not unlimited persistent memory.
- **Temperature / top-p:** Sampling controls affecting distribution concentration / the candidate set's cumulative probability mass.
- **Diffusion / GAN:** Generation by learned iterative denoising / a generator trained against a discriminator.
- **Few-shot prompting:** Supplying a few demonstrations in the prompt without updating model weights.
- **Fine-tuning:** Additional training that adapts learned parameters to selected task examples.
- **Grounding / faithfulness:** Connecting claims to evidence / agreement with the supplied evidence; evidence itself can be outdated or wrong.
- **Hallucination:** Generated content that is invented or unsupported, despite possibly sounding confident.
- **Agent:** A system selecting actions toward a goal using observations and possibly tools; requires enforced permissions and limits.
- **Abstention:** Declining to answer or act when evidence or permission is insufficient.
- **PDPL:** Saudi Personal Data Protection Law; Domain 6 summarizes reviewed official texts for learning, not legal advice or a project compliance certificate.
- **API / endpoint:** An interface for software interactions / an address for a particular operation or resource.
- **HTTP / HTTPS:** A request-response protocol / HTTP protected in transit with TLS; neither certifies model correctness.
- **Schema / data contract:** Rules for data shape / the broader agreement including meaning, units, errors, and version expectations.
- **Authentication / authorization:** Establishing identity / deciding whether a specific action on a specific resource is permitted.
- **Asynchronous job:** Accepted work completed later, with a job identity and explicitly tracked status.
- **Webhook / polling:** A service-sent HTTP notification / repeated caller queries for current status.
- **At-least-once delivery:** A message-delivery guarantee that permits duplicates; it does not imply exactly one action.
- **Timeout / deadline:** A limit on one wait / an overall time boundary across steps, attempts, and delays.
- **Backoff / jitter:** Increasing retry delays / controlled randomness to spread retries and reduce synchronized bursts.
- **Idempotency:** Repeating an operation without additional unintended effects; service enforcement is necessary.
- **Correlation ID:** An identifier linking records of an interaction; not automatically a duplicate-action safeguard.
- **Test double:** A controlled dependency stand-in, such as a stub, mock, or fake; not proof of live-service behavior.
- **Contract / integration test:** A check of agreed interface assumptions / a check of interactions between components.
- **Adapter:** A boundary translating an application's interface to provider-specific requests, results, and errors.
- **Backward compatibility:** Preserving promised behavior for existing consumers; syntax alone is insufficient.
- **Lockfile:** A record of resolved package versions that helps reproduce dependencies, not remote-service behavior.
- **Refactoring:** Changing internal structure while aiming to preserve externally required behavior.
- **Decision record / runbook:** Context, choice, alternatives, and consequences / practical diagnosis and recovery instructions.
- **Artifact / lineage:** A saved output such as weights or an evaluation report / its origin and transformation history.
- **Model registry / release manifest:** An artifact catalog with metadata / the identified compatible components and evidence selected for a release.
- **CI / continuous delivery:** Frequent integration with automated feedback / keeping tested releases ready for deployment, possibly with human approval.
- **Continuous deployment / training:** Automatic release of gated changes / creation of new model candidates from updated data; not the same process.
- **Batch / online inference:** Compute predictions as grouped work for later use / compute them for arriving requests; neither necessarily updates weights.
- **Shadow / canary:** Observe candidate results without choosing the live action / expose a limited live population before further rollout.
- **Blue-green / rollback:** Switch between prepared serving environments / restore an approved compatible earlier release, not undo external actions.
- **Data drift / concept drift:** A changed input distribution / a changed relationship between inputs and outcomes; input drift alone does not prove harm.
- **Training-serving skew:** A discrepancy between training and serving inputs or preparation; investigate the concrete mismatch.
- **Mature cohort:** Predictions grouped by event time with enough follow-up for delayed outcomes; missing labels are not negative labels.
- **SLI / SLO / SLA:** A defined service measurement / its target and window / an agreement with consequences for missing commitments.
- **Error budget:** The allowed bad fraction under a defined reliability objective; not permission to violate safety or access rules.
- **p95 latency:** A latency percentile within which roughly 95% of measured requests finish; not a mean or quality score.
- **Trace:** Linked stages of one interaction with minimized metadata such as versions, durations, and outcomes.
- **Circuit breaker / kill switch:** Temporarily stop calls to a failing dependency with controlled recovery / disable a risky capability through enforced controls.
- **Incident / post-incident review:** An event needing coordinated response / an impact and contributing-factor review with owned corrective actions.
- **Object / file / block storage:** Individually addressed data objects / named files in directories / addressable blocks beneath storage systems; choose by workload, not a universal ranking.
- **Source of truth / derived index:** Authoritative records / a searchable transformed representation requiring lineage, freshness, and current access enforcement.
- **Stateless replica:** A replaceable application instance that does not depend on unique local memory for required durable progress; the system still has state.
- **CPU / GPU:** A general-purpose processor / a highly parallel processor suited to supported matrix workloads; actual end-to-end benefit requires measurement.
- **Memory capacity / bandwidth:** How much can be held / how quickly memory data can be moved; distinct constraints.
- **KV cache:** Stored attention keys and values reused during language generation; request computation state, not verified answer storage.
- **Quantization / distillation:** Reduced numerical representation precision / training a student using teacher information; both require independent quality and performance checks.
- **Data / model parallelism:** Distribute examples across model copies / divide one model across devices; communication limits speedup.
- **Latency / throughput / concurrency:** Elapsed time for a stated operation / completed work per unit time / work in flight, including waits.
- **Critical path / Amdahl's law:** Required dependency path determining completion / the unchanged portion of work limits gains from speeding one part.
- **Dynamic serving batch:** Group arriving compatible inference requests within limits; can improve throughput while adding waiting.
- **TTL / cache invalidation:** An entry's maximum reuse time / removing or rejecting reuse after a relevant change; neither replaces authorization.
- **Semantic cache / stampede:** Reuse based on similarity requiring equivalence checks / many callers simultaneously recomputing missing or expired work.
- **Vertical / horizontal scaling:** Increase one instance's resources / add instances; shared dependencies can remain bottlenecks.
- **Replication / sharding:** Keep copies / partition data or work; shards are not backups and replicas can copy corruption.
- **Backpressure / admission control:** Signal upstream to slow down / limit accepted work to protect bounded capacity and deadlines.
- **Readiness / draining:** An instance can handle its promised work / stop new work while eligible in-flight work completes within limits.
- **Failure domain:** Components sharing a cause of failure such as power, site, or a required dependency.
- **RTO / RPO:** Target maximum service interruption / target maximum recovered-data gap expressed in time; objectives need tested evidence.
- **Hybrid / edge placement:** Connect different hosting environments / process near users or sensors; permission, updates, and recovery remain necessary.
- **Selection / false-positive rate:** Selected/all assessed / false positives/all actual negatives, within a stated group; different from recall.
- **Proxy feature:** An input correlated with a group characteristic that can carry its influence without an explicit group field.
- **Local / global explanation:** Account of one prediction / broader model behavior; readability does not guarantee fidelity or causality.
- **Automation bias:** Overreliance on an automated suggestion; oversight needs evidence, time, expertise, and intervention authority.
- **Model / system card:** Intended use, evidence, and limits for a model / for its complete application, including retrieval, tools, and oversight.
- **Controller / processor:** Determines processing purposes and methods / processes on the controller's behalf; actual roles and uses matter.
- **Pseudonymization / anonymization:** Replace identifiers while linkage remains possible / remove direct and indirect identifiability with effectiveness checks.
- **Data minimization:** Collect, use, disclose, and retain only the personal data necessary for a specified justified purpose.
- **Threat model:** Map assets, adversaries, entry paths, trust boundaries, consequences, controls, and remaining risks.
- **Confidentiality / integrity / availability:** Prevent unauthorized disclosure / unauthorized alteration / loss of usable service.
- **Supply-chain provenance:** Evidence of model, data, dependency, and supplier origin; a hash identifies bytes but does not certify safety.
- **Poisoning / backdoor:** Manipulation of data or models to alter behavior / hidden behavior triggered under particular conditions.
- **Direct / indirect prompt injection:** Untrusted instructions through a user request / through retrieved or external content; neither grants authority.
- **Exfiltration:** Movement of protected information to an unauthorized destination, including through tools, links, or logs.
- **Impact assessment / residual risk:** Documented analysis of processing or system effects and mitigations / risk remaining after controls.
- **Risk register:** Owned scenarios, controls, evidence, residual risks, review dates, and actions; not a substitute for mitigation.
- **Processing-activity record:** Purpose, categories, recipients, retention, transfers, and protection metadata; distinct from raw data payloads.
- **Govern / Map / Measure / Manage:** NIST AI RMF 1.0 functions for accountability, context, evidence, and response; voluntary guidance, not Saudi law.
- **User need / problem statement:** Evidence-based goal and obstacle for affected people / a scoped account of who, what, current difficulty, and desired outcome; not a prescribed AI solution.
- **Proof of concept / pilot:** Test an idea under chosen conditions / test bounded realistic use with owners, safeguards, and decision rules; neither is automatic production approval.
- **KPI / guardrail:** Important outcome measure / a constraint on harms or unacceptable behavior; definitions need population, denominator, window, and owner.
- **Total cost of ownership:** Lifecycle costs including preparation, integration, operation, human review, assurance, support, and retirement; not just model pricing.
- **Simple ROI / payback:** Net incremental benefit divided by incremental cost for a stated horizon / setup cost divided by positive constant recurring net benefit per period; instructional undiscounted conventions.
- **Sensitivity analysis:** Vary uncertain assumptions such as adoption, volume, review time, and cost to see whether a decision changes.
- **Capacity benefit:** Time or resources released for other useful work; not automatically cash saved or a staffing reduction.
- **RACI:** Responsible, Accountable, Consulted, Informed: a decision-rights aid, not a legal role chart or substitute for required approvals.
- **Adoption / opportunity cost:** Sustained appropriate use under a stated eligible-population definition / value of the best alternative forgone by committing scarce resources.
- **Conflict of interest:** An incentive or relationship that may impair independent judgment; disclose and manage it through appropriate review or recusal.

## Lesson checks — questions

These 18 questions are separate from the 24-question domain paper. Answer before opening the explanations below.

### Choose an AI approach: rules, search & learning

### 1. A fee is defined exactly by a published weight table. Which is the most defensible starting approach?

A. Train a text generator on old invoices

B. Apply and test the explicit fee rules

C. Cluster invoices and use the closest group's average fee

D. Learn fee actions from customer satisfaction rewards

### 2. Route X has two roads totaling 18 minutes; route Y has three totaling 11 minutes. What should a lowest-time planner prefer?

A. X, because it has fewer steps

B. X, because breadth-first search always minimizes minutes

C. Y, because the chosen path cost is travel time

D. Either, because both reach the same goal

### 3. A warehouse agent is rewarded only for parcels moved per hour. What concern should be checked first?

A. It may increase throughput by sacrificing safety or parcel quality

B. The reward already measures every business requirement

C. It must be supervised classification because numbers are used

D. More exploration alone will fix the objective definition

### Neural networks: from a neuron to training

### 1. A neuron's weighted sum is −2.5. What does ReLU return?

A. −2.5

B. 2.5

C. 1

D. 0

### 2. What is the specific role of backpropagation in a usual training cycle?

A. Compute gradients of the loss with respect to parameters

B. Choose the final test examples with the highest scores

C. Retrieve documents for the input prompt

D. Generate predictions without a loss or parameter derivatives

### 3. There are 200 training examples and batches of 50, with no dropped examples. How many batches are in one epoch?

A. 1

B. 50

C. 4

D. 200

### Model families, attention & transfer learning

### 1. Which description most directly characterizes a CNN?

A. Updating a hidden state one sequence step at a time

B. Applying shared learned filters across local regions

C. Searching a route graph by accumulated road cost

D. Generating text from a database without learned parameters

### 2. Why use a causal mask when training an autoregressive language model?

A. To remove all word-order information

B. To ensure every generated fact is supported

C. To let every position inspect its future target

D. To prevent prediction from using future tokens

### 3. A pretrained vision backbone is frozen while a new classification head is trained. What changes?

A. The head's parameters change; the frozen backbone's do not

B. Neither component can change because the backbone is frozen

C. All backbone weights change at every step

D. Only the evaluation labels change

### Tokens, embeddings & how generation behaves

### 1. Which statement about tokens is correct?

A. Each token always corresponds to exactly one English word

B. Nearby token ID values always mean similar concepts

C. The token count depends on the tokenizer and the text

D. A token is a verified factual claim

### 2. An answer invents a policy date at high temperature. What can lowering temperature establish?

A. The date must become correct

B. Choices may become less varied, but the date still needs verification

C. The model permanently learns the current policy

D. The context window becomes larger

### 3. A retrieval query uses embedding model B while indexed documents use unrelated model A of the same vector length. What is the issue?

A. Equal length guarantees valid similarity comparisons

B. Token IDs should be compared instead

C. Changing only temperature will align the vectors

D. The spaces may be incompatible; use a compatible query/document setup

### Prompting, RAG & fine-tuning: choose the right lever

### 1. Adding three demonstrations to a prompt without training is what kind of adaptation?

A. Few-shot prompting

B. Full-weight fine-tuning

C. Training a new tokenizer

D. Distillation into a smaller model

### 2. An assistant must answer from approved policies that change daily. Which lever best addresses freshness?

A. Increase temperature to introduce new facts

B. Fine-tune once and stop updating the knowledge source

C. Retrieve current approved policy evidence for each answer

D. Add a longer style instruction with no policy content

### 3. The right clause is retrieved, but the generated answer adds an exception absent from it. What should be investigated most directly?

A. Whether every query needs a larger vector dimension

B. Evidence use, answer constraints, and citation support

C. Whether the answer needs more confident wording

D. Whether retrieving no passages is preferable

### Evaluate generative systems & bound agents

### 1. An answer accurately quotes an obsolete policy passage. Which distinction matters?

A. Faithfulness guarantees present-day correctness

B. Obsolete passages cannot have embeddings

C. Text overlap alone proves current authority

D. Agreement with supplied evidence differs from correctness for today's task

### 2. An assistant answers 20 of 50 questions and 15 answers pass the rubric. What are answer rate and quality among answers?

A. 40% answer rate; 75% of answers pass

B. 75% answer rate; 40% of answers pass

C. 30% answer rate; 100% of answers pass

D. Both 75%

### 3. A draft-only support agent can access an unrestricted payment tool. Its prompt says never issue refunds. Which safeguard is strongest?

A. Repeat the prohibition in a longer prompt

B. Trust the agent's final summary as an audit log

C. Remove payment permission and enforce allowed actions in the application

D. Use temperature zero without changing permissions

## Lesson checks — explanations (spoilers)

### Choose an AI approach: rules, search & learning

#### Check 1: A fee is defined exactly by a published weight table. Which is the most defensible starting approach?

**Correct answer: B.**

- **A. Train a text generator on old invoices:** A generator may approximate a rule that is already explicitly known.
- **B. Apply and test the explicit fee rules — correct:** Known stable requirements can be implemented deterministically without learning them.
- **C. Cluster invoices and use the closest group's average fee:** Group averages do not enforce the authoritative table.
- **D. Learn fee actions from customer satisfaction rewards:** Reward learning adds unnecessary uncertainty to a fixed calculation.

#### Check 2: Route X has two roads totaling 18 minutes; route Y has three totaling 11 minutes. What should a lowest-time planner prefer?

**Correct answer: C.**

- **A. X, because it has fewer steps:** Fewest steps and lowest cost differ when road times differ.
- **B. X, because breadth-first search always minimizes minutes:** Breadth-first search minimizes steps, not arbitrary unequal costs.
- **C. Y, because the chosen path cost is travel time — correct:** Eleven minutes is lower than eighteen under the stated objective.
- **D. Either, because both reach the same goal:** Goal attainment alone does not make path costs equivalent.

#### Check 3: A warehouse agent is rewarded only for parcels moved per hour. What concern should be checked first?

**Correct answer: A.**

- **A. It may increase throughput by sacrificing safety or parcel quality — correct:** The reward omits important constraints and can incentivize harmful shortcuts.
- **B. The reward already measures every business requirement:** Throughput alone does not encode safety or quality.
- **C. It must be supervised classification because numbers are used:** Numerical rewards do not make an action-learning task classification.
- **D. More exploration alone will fix the objective definition:** Exploration changes experience, not what the reward encourages.

### Neural networks: from a neuron to training

#### Check 1: A neuron's weighted sum is −2.5. What does ReLU return?

**Correct answer: D.**

- **A. −2.5:** This is the unmodified sum, not max(0, z).
- **B. 2.5:** ReLU is not an absolute-value function.
- **C. 1:** ReLU does not turn every nonzero input into one.
- **D. 0 — correct:** ReLU returns max(0, −2.5), which is zero.

#### Check 2: What is the specific role of backpropagation in a usual training cycle?

**Correct answer: A.**

- **A. Compute gradients of the loss with respect to parameters — correct:** The optimizer then uses these gradients to perform parameter updates.
- **B. Choose the final test examples with the highest scores:** Test selection is not a gradient computation and must not favor scores.
- **C. Retrieve documents for the input prompt:** Retrieval is a separate system operation, not backpropagation.
- **D. Generate predictions without a loss or parameter derivatives:** That describes forward computation or inference rather than backpropagation.

#### Check 3: There are 200 training examples and batches of 50, with no dropped examples. How many batches are in one epoch?

**Correct answer: C.**

- **A. 1:** One epoch is a full pass, not necessarily one batch.
- **B. 50:** Fifty is the number of examples per batch.
- **C. 4 — correct:** Two hundred divided by fifty gives four batches per complete pass.
- **D. 200:** Two hundred counts examples rather than batches.

### Model families, attention & transfer learning

#### Check 1: Which description most directly characterizes a CNN?

**Correct answer: B.**

- **A. Updating a hidden state one sequence step at a time:** This describes a recurrent architecture more directly.
- **B. Applying shared learned filters across local regions — correct:** Convolution exploits locality and weight sharing, such as in images.
- **C. Searching a route graph by accumulated road cost:** That describes uniform-cost search, not a neural architecture.
- **D. Generating text from a database without learned parameters:** This does not describe convolutional representation learning.

#### Check 2: Why use a causal mask when training an autoregressive language model?

**Correct answer: D.**

- **A. To remove all word-order information:** Position information remains important for sequence interpretation.
- **B. To ensure every generated fact is supported:** Masking controls available positions, not factual verification.
- **C. To let every position inspect its future target:** This would expose information absent at generation time.
- **D. To prevent prediction from using future tokens — correct:** Training must respect the information boundary of next-token generation.

#### Check 3: A pretrained vision backbone is frozen while a new classification head is trained. What changes?

**Correct answer: A.**

- **A. The head's parameters change; the frozen backbone's do not — correct:** Freezing selected parameters does not prevent training a separate head.
- **B. Neither component can change because the backbone is frozen:** The head remains trainable under the stated setup.
- **C. All backbone weights change at every step:** That contradicts the specified frozen backbone.
- **D. Only the evaluation labels change:** Training should fit parameters, not rewrite held-out answers.

### Tokens, embeddings & how generation behaves

#### Check 1: Which statement about tokens is correct?

**Correct answer: C.**

- **A. Each token always corresponds to exactly one English word:** Tokens may be subwords, characters, or punctuation.
- **B. Nearby token ID values always mean similar concepts:** IDs identify vocabulary entries, not semantic distances.
- **C. The token count depends on the tokenizer and the text — correct:** Different tokenizers can split the same text into different units.
- **D. A token is a verified factual claim:** Tokens are processing units, not evidence of truth.

#### Check 2: An answer invents a policy date at high temperature. What can lowering temperature establish?

**Correct answer: B.**

- **A. The date must become correct:** Sampling changes cannot supply missing authoritative evidence.
- **B. Choices may become less varied, but the date still needs verification — correct:** Lower temperature concentrates choices without certifying factual content.
- **C. The model permanently learns the current policy:** Decoding settings do not update learned parameters.
- **D. The context window becomes larger:** Temperature does not increase the token budget.

#### Check 3: A retrieval query uses embedding model B while indexed documents use unrelated model A of the same vector length. What is the issue?

**Correct answer: D.**

- **A. Equal length guarantees valid similarity comparisons:** Matching dimensions do not align independently learned coordinate spaces.
- **B. Token IDs should be compared instead:** Vocabulary IDs are not a substitute for compatible semantic representations.
- **C. Changing only temperature will align the vectors:** Generation sampling does not transform embedding coordinates.
- **D. The spaces may be incompatible; use a compatible query/document setup — correct:** Retrieval needs representations designed to be compared in the same space.

### Prompting, RAG & fine-tuning: choose the right lever

#### Check 1: Adding three demonstrations to a prompt without training is what kind of adaptation?

**Correct answer: A.**

- **A. Few-shot prompting — correct:** The demonstrations steer inference within context without updating weights.
- **B. Full-weight fine-tuning:** Fine-tuning requires parameter updates from training.
- **C. Training a new tokenizer:** Examples in a prompt do not fit a token vocabulary.
- **D. Distillation into a smaller model:** No student model is trained in the described process.

#### Check 2: An assistant must answer from approved policies that change daily. Which lever best addresses freshness?

**Correct answer: C.**

- **A. Increase temperature to introduce new facts:** Varied sampling cannot provide authoritative updates.
- **B. Fine-tune once and stop updating the knowledge source:** One training event does not track daily policy changes.
- **C. Retrieve current approved policy evidence for each answer — correct:** RAG can supply updated evidence without retraining the generator each day.
- **D. Add a longer style instruction with no policy content:** Style instructions do not supply current policy facts.

#### Check 3: The right clause is retrieved, but the generated answer adds an exception absent from it. What should be investigated most directly?

**Correct answer: B.**

- **A. Whether every query needs a larger vector dimension:** The needed evidence is already found; dimension is not the direct diagnosis.
- **B. Evidence use, answer constraints, and citation support — correct:** The failure occurs when forming an unsupported claim from available evidence.
- **C. Whether the answer needs more confident wording:** Confidence cannot make the invented exception supported.
- **D. Whether retrieving no passages is preferable:** Removing the correct evidence does not fix unsupported generation.

### Evaluate generative systems & bound agents

#### Check 1: An answer accurately quotes an obsolete policy passage. Which distinction matters?

**Correct answer: D.**

- **A. Faithfulness guarantees present-day correctness:** A faithful answer can inherit outdated or incorrect source content.
- **B. Obsolete passages cannot have embeddings:** Any passage can be represented; representation does not certify freshness.
- **C. Text overlap alone proves current authority:** Overlap says nothing about a policy's effective date.
- **D. Agreement with supplied evidence differs from correctness for today's task — correct:** Evaluate faithfulness and factual currency as separate properties.

#### Check 2: An assistant answers 20 of 50 questions and 15 answers pass the rubric. What are answer rate and quality among answers?

**Correct answer: A.**

- **A. 40% answer rate; 75% of answers pass — correct:** Answer rate = 20/50; quality among answers = 15/20.
- **B. 75% answer rate; 40% of answers pass:** This reverses the two fractions and their meanings.
- **C. 30% answer rate; 100% of answers pass:** 15/50 is overall passing coverage, not answer rate.
- **D. Both 75%:** Only conditional quality uses the twenty answered cases as its denominator.

#### Check 3: A draft-only support agent can access an unrestricted payment tool. Its prompt says never issue refunds. Which safeguard is strongest?

**Correct answer: C.**

- **A. Repeat the prohibition in a longer prompt:** Text instructions do not remove the tool's effective authority.
- **B. Trust the agent's final summary as an audit log:** A summary can omit or misdescribe actual tool side effects.
- **C. Remove payment permission and enforce allowed actions in the application — correct:** A draft-only task does not require payment authority; permissions must be enforced externally.
- **D. Use temperature zero without changing permissions:** Less sampling variety does not create an authorization boundary.

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
- **UC Berkeley CS 188 — Uninformed search** (Learning reference): https://inst.eecs.berkeley.edu/~cs188/textbook/search/uninformed.html
  Reviewed 12 October 2026: search strategies and the distinction between fewest steps and lowest cost.
- **Google ML Crash Course — Nodes and hidden layers** (Learning reference): https://developers.google.com/machine-learning/crash-course/neural-networks/nodes-hidden-layers
  Reviewed 12 October 2026: weights, biases, hidden layers, and why linear layers alone remain linear.
- **Google ML Crash Course — Training using backpropagation** (Learning reference): https://developers.google.com/machine-learning/crash-course/neural-networks/backpropagation
  Reviewed 12 October 2026: gradients, training failures, and dropout.
- **Google ML Crash Course — Obtaining embeddings** (Learning reference): https://developers.google.com/machine-learning/crash-course/embeddings/obtaining-embeddings
  Reviewed 12 October 2026: learned vector representations and static versus contextual embeddings.
- **Google ML Crash Course — What's a large language model?** (Learning reference): https://developers.google.com/machine-learning/crash-course/llm/transformers
  Reviewed 12 October 2026: tokens, self-attention, encoder/decoder families, and generation limitations.
- **Google ML Crash Course — Fine-tuning, distillation, and prompt engineering** (Learning reference): https://developers.google.com/machine-learning/crash-course/llm/tuning
  Reviewed 12 October 2026: prompt examples do not update weights; fine-tuning and parameter-efficient adaptation do.
- **Lewis et al. — Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks** (Research reference): https://arxiv.org/abs/2005.11401
  Abstract reviewed 12 October 2026. Foundational 2020 RAG research; our lessons describe a general retrieval-and-generation workflow, not a replication of this paper.
- **NIST AI RMF — Generative AI Profile (600-1)** (Further reading): https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
  Publication page reviewed 12 October 2026. Voluntary cross-sector risk-management guidance, not Saudi law or an official SDAIA syllabus.
- **MDN — HTTP response status codes** (Learning reference): https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
  Reviewed 12 October 2026: success, accepted-but-incomplete work, authentication, authorization, rate limits, and server errors. Protocol success does not establish AI answer correctness.
- **JSON Schema — Object reference** (Learning reference): https://json-schema.org/understanding-json-schema/reference/object
  Reviewed 12 October 2026: property types, required fields, additional properties, and null versus missing. Lessons teach contracts conceptually, not schema implementation.
- **Amazon Builders' Library — Timeouts, retries, and backoff with jitter** (Learning reference): https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/
  Reviewed 12 October 2026: ambiguous timeout outcomes, idempotency, bounded retries, backoff, jitter, and retry amplification. General engineering guidance, not a requirement to use AWS.
- **Software Engineering at Google — Testing Overview** (Learning reference): https://abseil.io/resources/swe-book/html/ch11.html
  Reviewed 12 October 2026: test scope versus size, controlled environments, failure tests, test doubles, and coverage limitations. Our lessons do not prescribe a universal test-count ratio.
- **OWASP LLM Top 10 — LLM06:2025 Excessive Agency** (Learning reference): https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
  Reviewed 12 October 2026: narrow tools, least privilege, user-context authorization, and approval for high-impact actions. Security guidance, not Saudi law or official exam objectives.
- **Google Engineering Practices — What to look for in a code review** (Learning reference): https://google.github.io/eng-practices/review/reviewer/looking-for.html
  Reviewed 12 October 2026: design, functionality, complexity, useful tests, naming, comments, and documentation. Applied here as no-coding design-review concepts.
- **Google — Rules of Machine Learning** (Learning reference): https://developers.google.com/machine-learning/guides/rules-of-ml
  Reviewed 12 October 2026: pipeline integrity, freshness, release checks, silent failures, training-serving skew, and feedback loops. General engineering guidance, not official SDAIA objectives.
- **Google ML Crash Course — Monitoring pipelines** (Learning reference): https://developers.google.com/machine-learning/crash-course/production-ml-systems/monitoring
  Reviewed 12 October 2026: raw and transformed data checks, slices, skew, model age, real-world outcomes, and quality checks when labels are unavailable. Example checks must be adapted to the actual task.
- **Google SRE — Release Engineering** (Learning reference): https://sre.google/sre-book/release-engineering/
  Reviewed 12 October 2026: repeatable artifacts, versioned configuration, approval, staged rollout, and release records. Our model-registry examples apply these concepts without prescribing Google's tools.
- **Google SRE Workbook — Canarying Releases** (Learning reference): https://sre.google/workbook/canarying-releases/
  Reviewed 12 October 2026: partial rollouts, comparison by version, representative exposure, shared dependencies, blue-green deployment, and traffic teeing. No universal traffic percentage or duration is prescribed here.
- **Google SRE — Service Level Objectives** (Learning reference): https://sre.google/sre-book/service-level-objectives/
  Reviewed 12 October 2026: indicators, objectives, agreements, measurement windows, latency distributions, and error budgets. All numerical targets in our lessons are illustrative product choices.
- **Google SRE — Monitoring Distributed Systems** (Learning reference): https://sre.google/sre-book/monitoring-distributed-systems/
  Reviewed 12 October 2026: latency, traffic, errors, saturation, user-visible symptoms, and actionable alerts. AI quality requires additional task-specific evidence.
- **Google SRE — Managing Incidents** (Learning reference): https://sre.google/sre-book/managing-incidents/
  Reviewed 12 October 2026: coordinated roles, mitigation, live incident records, communication, evidence preservation, and explicit handoffs. Operational guidance, not Saudi incident-reporting law.
- **IBM Think — What is object storage?** (Learning reference): https://www.ibm.com/think/topics/object-storage
  Reviewed 12 October 2026: object, file, and block storage concepts. Vendor educational material; no product recommendation, unlimited-capacity promise, or implementation tutorial is adopted.
- **Google ML glossary — Accelerator chip and parallelism** (Learning reference): https://developers.google.com/machine-learning/glossary#accelerator-chip
  Reviewed 12 October 2026: accelerators, data/model parallelism, and quantization. Hardware fit and speedups require measurement on the actual workload.
- **Jacob et al. — Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference** (Research reference): https://arxiv.org/abs/1712.05877
  Abstract reviewed 12 October 2026. Foundational 2017 integer-inference research, not a guarantee of identical quality or universal speedup for modern models.
- **Hinton, Vinyals & Dean — Distilling the Knowledge in a Neural Network** (Research reference): https://arxiv.org/abs/1503.02531
  Abstract reviewed 12 October 2026. Foundational 2015 teacher/student compression research; students need independent task evaluation.
- **Google SRE — Handling Overload** (Learning reference): https://sre.google/sre-book/handling-overload/
  Reviewed 12 October 2026: varying request cost, quotas, resource saturation, graceful rejection, and bounded retry load. Google's example limits are not universal defaults.
- **Google SRE — Load Balancing in the Datacenter** (Learning reference): https://sre.google/sre-book/load-balancing-datacenter/
  Reviewed 12 October 2026: readiness, draining, uneven request cost, routing, and the danger of fast-failing replicas. Concept-only application, not Google's implementation.
- **Google SRE — Data Integrity** (Learning reference): https://sre.google/sre-book/data-integrity/
  Reviewed 12 October 2026: replication is not recoverability, coordinated state, tested restores, and current deletion/access requirements. Reference examples do not establish Saudi retention law.
- **IBM Think — What is cloud computing?** (Learning reference): https://www.ibm.com/think/topics/cloud-computing
  Reviewed 12 October 2026: public/private/hybrid cloud, service models, and shared responsibilities. Vendor educational material, not provider-specific setup or a claim that cloud capacity is unlimited.
- **IBM Think — What is disaster recovery?** (Learning reference): https://www.ibm.com/think/topics/disaster-recovery
  Reviewed 12 October 2026: dependency mapping, recovery time/point objectives, failover, readiness, and exercises. Objectives are business choices; this reference is not Saudi law or an official exam specification.
- **SDAIA — AI Ethics Principles (May 2025, SDAIA-P114E, version 1)** (Official ethics framework): https://sdaia.gov.sa/en/SDAIA/about/Documents/ai-principles.pdf
  Learner-supplied English PDF ai-principles.pdf reviewed 12 October 2026; page 50 identifies May 2025, SDAIA-P114E, version 1, Regulatory Documents, General. Replaces this kit's September 2023 citation. Pages 9–11 cover scope/risk/lifecycle, 12–28 principles and controls, 28–32 roles/optional registration, and 33–48 tools/checklists. The linked official publication is a further-reading location, not an assertion of a byte-identical download. The framework is not the PDPL, an exam syllabus, or proof of project compliance; verify applicable current requirements.
- **SDAIA Data Governance Platform — Personal Data Protection Law** (Official Saudi legal text): https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL
  Arabic official text reviewed 12 October 2026. Lessons provide English instructional summaries of Articles 1–14, 17–22, 29–31, not an authoritative translation or legal advice. Scope, exceptions, and additional applicable rules need qualified review.
- **SDAIA — PDPL Implementing Regulation** (Official Saudi legal text): https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/PDPL2
  Arabic official text reviewed 12 October 2026: Articles 1, 3, 8–12, 16–19, 23–25, 32–33. Includes conditional 72-hour authority notification, separate subject notification without undue delay, impact assessments, and processing-activity records. Do not generalize one timeframe to all incidents or all retained data.
- **SDAIA — Regulation on Personal Data Transfer Outside the Kingdom** (Official Saudi transfer reference): https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/details/RegulationonPersonalDataTransferOutsidetheKingdom
  Official portal text reviewed 12 October 2026 for conditional transfer protections and onward-transfer context. No country adequacy list, comprehensive amendment history, or project-specific transfer route was verified. Recheck current instruments and sector rules before a real transfer.
- **NIST — AI Risk Management Framework and Playbook** (Learning reference): https://airc.nist.gov/airmf-resources/playbook/
  Reviewed 12 October 2026: Govern, Map, Measure, Manage; voluntary adaptable guidance, not a mandatory checklist or Saudi law. The site states RMF 1.0 is being updated; lessons describe its published four-function structure.
- **OWASP — LLM01:2025 Prompt Injection** (Security learning reference): https://genai.owasp.org/llmrisk/llm01-prompt-injection/
  Reviewed 12 October 2026: direct/indirect injection and layered impact reduction. Prompts, filters, RAG, and fine-tuning do not guarantee prevention; enforce permissions outside model text.
- **OWASP — LLM03:2025 Supply Chain** (Security learning reference): https://genai.owasp.org/llmrisk/llm032025-supply-chain/
  Reviewed 12 October 2026: supplier provenance, model/dependency inventories, licensing, integrity checks, and task-specific evaluation. Hashes and popularity are not safety certificates.
- **OWASP — LLM04:2025 Data and Model Poisoning** (Security learning reference): https://genai.owasp.org/llmrisk/llm042025-data-and-model-poisoning/
  Reviewed 12 October 2026: data manipulation, backdoors, lineage, controlled ingestion, and adversarial testing. No universal robustness or guaranteed detection claim is adopted.
- **OWASP — LLM05:2025 Improper Output Handling** (Security learning reference): https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/
  Reviewed 12 October 2026: untrusted generated output, context-appropriate handling, and downstream validation. These are defensive concepts, not programming exercises or Saudi legal requirements.
- **GOV.UK Service Manual — Learning about users and their needs** (Learning reference): https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs
  Reviewed 12 October 2026: observed needs versus assumptions, inclusive research, problem-first framing, and continuing validation. UK service-design guidance used conceptually, not Saudi law or official SDAIA objectives.
- **GOV.UK Service Manual — Measuring the success of your service** (Learning reference): https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service
  Reviewed 12 October 2026: end-to-end completion, task time, user research, and multiple evidence sources rather than digital analytics alone. Our KPI targets and examples are illustrative choices.
- **GOV.UK Service Manual — Measuring the benefits of your service** (Learning reference): https://www.gov.uk/service-manual/measuring-success/measuring-service-benefits
  Reviewed 12 October 2026: baselines, alternatives, cost/benefit assumptions, optimism bias, sensitivity analysis, and ongoing benefits evaluation. The kit's simple undiscounted ROI/payback convention is an instructional calculation, not a mandated financial method, investment advice, or a full business case.
- **GOV.UK Service Manual — What each role does in a service team** (Learning reference): https://www.gov.uk/service-manual/the-team/what-each-role-does-in-service-team
  Reviewed 12 October 2026: multidisciplinary collaboration, product priorities, service ownership, research, analysis, testing, and operations. These support functional examples, not a compulsory Saudi organization chart or statutory-role definition.
- **ACM — Code of Ethics and Professional Conduct (2018)** (Professional learning reference): https://www.acm.org/code-of-ethics
  Reviewed 12 October 2026: sections 1.2–1.7, 2.1–2.7, and 3.3–3.6 support harm reduction, honesty, conflicts, attribution, confidentiality, review, competence, learning, and careful change. Lessons are original applications, not a reproduced or modified Code. Professional guidance is not Saudi law, a legal exemption, or the SDAIA exam syllabus.
