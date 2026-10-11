# Domain 2 answer key — spoilers

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12. Confirmed exam booking: 5 December 2026 (provided by learner).

Use only after completing the separate practice paper. Letters refer to the fixed order in the downloadable paper; the website shuffles options.

## 1. A planner represents a robot's location and battery charge, permitted moves, and a destination. What is battery charge in this formulation?

Topic: Choose an AI approach: rules, search & learning. Practice difficulty: Foundation (not an official question level).

**Correct answer: C.**

- **A. A generated answer's citation:** Battery charge is part of the modeled situation, not a source reference.
- **B. A neural network learning rate:** Learning rate configures parameter updates, not the robot's current condition.
- **C. Part of the search state — correct:** Charge can affect feasible actions and therefore belongs in the state representation.
- **D. The final reward for every episode:** Current charge is not necessarily the reward or the goal value.

## 2. A finite route graph has varying nonnegative toll costs. The objective is least total toll, not fewest roads. Which search priority fits most directly?

Topic: Choose an AI approach: rules, search & learning. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. Lowest accumulated path cost, with correct repeated-state handling — correct:** Uniform-cost search orders paths by their cost rather than their step count.
- **B. Deepest path discovered so far:** Depth-first exploration does not generally minimize total toll.
- **C. Fewest roads without considering tolls:** Shallowest paths can be more expensive under unequal toll costs.
- **D. Highest estimated remaining cost only:** Favoring high remaining cost does not target the cheapest route.

## 3. A team calls a support system reinforcement learning solely because it makes several tool calls in sequence. Which response is best?

Topic: Choose an AI approach: rules, search & learning. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. Sequential calls alone prove reward-based learning:** A workflow can be sequential without learning from rewards.
- **B. Any system with a language model must use reinforcement learning at runtime:** A trained model can be used without runtime reward-driven updates.
- **C. Tool calls make the system a convolutional network:** Tool use says nothing about convolutional architecture.
- **D. Ask whether an action policy is learned from reward feedback — correct:** Reward-based policy learning, not mere sequence length, is the defining distinction.

## 4. A team uses A* with a guessed remaining-cost heuristic that sometimes overestimates. It claims lowest-cost results are guaranteed just because f = g + h. What is the best assessment?

Topic: Choose an AI approach: rules, search & learning. Practice difficulty: Stretch (not an official question level).

**Correct answer: B.**

- **A. The formula alone proves optimality:** Optimality also depends on heuristic properties and search handling.
- **B. The guarantee is not established; check heuristic and algorithm conditions — correct:** An overestimating guess lacks the usual admissibility basis for the claim.
- **C. Overestimation always improves optimality:** It can steer search away from the truly cheapest route.
- **D. Replacing path costs with model confidence preserves the objective:** Confidence is not the stated route-cost measure.

## 5. A network stacks weighted sums and biases but no nonlinear hidden activations. What can be said about the resulting mapping?

Topic: Neural networks: from a neuron to training. Practice difficulty: Foundation (not an official question level).

**Correct answer: B.**

- **A. Every extra layer necessarily introduces nonlinear structure:** Composing linear/affine transformations alone remains linear/affine.
- **B. It is still an affine mapping despite the additional layers — correct:** Weighted sums and biases compose into another weighted sum plus bias.
- **C. It must be a retrieval system rather than a model:** The activation choice does not define document retrieval.
- **D. It is automatically calibrated:** Neither depth nor linearity establishes probability reliability.

## 6. Under simple gradient descent, a weight is 0.8, its gradient is −0.3, and learning rate is 0.2. What is its updated value?

Topic: Neural networks: from a neuron to training. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. 0.74:** This adds learning rate times gradient instead of subtracting it.
- **B. 0.5:** This subtracts the gradient magnitude without applying the learning rate.
- **C. 0.06:** This is the magnitude of the step, not the new weight.
- **D. 0.86 — correct:** New weight = 0.8 − 0.2 × (−0.3) = 0.86.

## 7. A team changes only the inference prompt of a frozen deployed model. Which statement about the model's learned weights is justified?

Topic: Neural networks: from a neuron to training. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. They are unchanged by ordinary prompting — correct:** Context can affect output without a gradient-based parameter update.
- **B. They are retrained once for each token in the prompt:** Token processing is not itself a training update.
- **C. They become permanently adapted to that user's examples:** Prompt context is not permanent weight learning.
- **D. They shrink because fewer training epochs are used:** Inference prompting does not change the trained parameter count.

## 8. On an audited neural-network split, training loss keeps improving but validation loss worsens late in training. Which action fits the evidence?

Topic: Neural networks: from a neuron to training. Practice difficulty: Stretch (not an official question level).

**Correct answer: C.**

- **A. Select the final epoch solely because training loss is lowest:** This ignores the observed deterioration on unseen development cases.
- **B. Tune dropout on the final test until its score peaks:** That would contaminate final evaluation.
- **C. Consider validation-based early stopping or regularization — correct:** The pattern suggests overfitting; select remedies using validation, not the final test.
- **D. Declare vanishing gradients from the generalization gap alone:** A train/validation gap does not specifically diagnose vanishing gradients.

## 9. Which family directly carries a hidden state from one sequence step to the next?

Topic: Model families, attention & transfer learning. Practice difficulty: Foundation (not an official question level).

**Correct answer: D.**

- **A. A road-search heuristic:** A heuristic estimates remaining cost rather than defining recurrent computation.
- **B. A fixed fee table:** A rule table is not a learned sequential state model.
- **C. A standard local convolution filter:** Convolution shares local filters rather than the described recurrent state.
- **D. A recurrent neural network, such as an LSTM — correct:** Recurrent families update state across the sequence.

## 10. Two sentences use the same tokens but reverse who pays whom. What helps a transformer distinguish their order?

Topic: Model families, attention & transfer learning. Practice difficulty: Applied (not an official question level).

**Correct answer: B.**

- **A. Token IDs sorted numerically:** Sorting IDs discards the original sequence rather than encoding it.
- **B. Position information alongside token representations — correct:** Attention needs sequence-order information to distinguish otherwise similar token sets.
- **C. An extra training/test leak:** Leaked answers are not a valid representation technique.
- **D. A source citation attached after generation:** A citation does not encode the original token order.

## 11. A company has limited labeled defect images and access to a suitably licensed pretrained vision model. Which initial experiment is strongest?

Topic: Model families, attention & transfer learning. Practice difficulty: Applied (not an official question level).

**Correct answer: C.**

- **A. Assume the public benchmark score proves factory performance:** Domain-specific lighting, cameras, and defects may differ.
- **B. Use only a text generator because deep learning means language:** Deep learning includes vision and many non-generative tasks.
- **C. Train a head on frozen features and evaluate representative held-out images — correct:** Transfer learning is a reasonable starting point, with honest task-specific validation.
- **D. Remove low-light test images to match the pretrained dataset:** Removing required deployment cases hides the mismatch rather than solving it.

## 12. An analyst presents one self-attention heatmap as complete proof of why a transformer made a harmful decision. What is the best response?

Topic: Model families, attention & transfer learning. Practice difficulty: Stretch (not an official question level).

**Correct answer: A.**

- **A. Treat it as limited evidence, not a full causal explanation — correct:** Attention weights show some information weighting, not all computations or causal effects.
- **B. Accept it because all model behavior is a single attention head:** Transformers contain multiple heads, layers, and other transformations.
- **C. Declare attention impossible during inference:** Attention is part of the model's forward computation too.
- **D. Replace factual evaluation with the heatmap alone:** A visualization cannot establish task correctness or safety by itself.

## 13. Which description fits a text-to-image diffusion model most directly?

Topic: Tokens, embeddings & how generation behaves. Practice difficulty: Foundation (not an official question level).

**Correct answer: A.**

- **A. Generating through learned iterative denoising, conditioned on text — correct:** Diffusion generation reverses a noising process using learned denoising steps.
- **B. Finding a minimum-toll path through a road graph:** That is search over structured states and costs.
- **C. Training only a generator against a real/fake discriminator:** That describes a GAN more directly than diffusion.
- **D. Filling a fixed fee table without learned representations:** That describes rules, not the generative model family.

## 14. A simplified shared 6,000-token budget uses 800 for instructions, 1,200 for history, 2,500 for evidence, and reserves 700 for output. How much remains?

Topic: Tokens, embeddings & how generation behaves. Practice difficulty: Applied (not an official question level).

**Correct answer: C.**

- **A. 1,500 tokens:** This omits the reserved output from the total usage.
- **B. 5,200 tokens:** This is the used budget, not what remains.
- **C. 800 tokens — correct:** 6,000 − (800 + 1,200 + 2,500 + 700) = 800.
- **D. 2,000 words:** The stated budget is in tokens, and tokens are not interchangeable with words.

## 15. The word 'port' has different meanings in a shipping report and a network manual. Which representation is designed to use this surrounding context?

Topic: Tokens, embeddings & how generation behaves. Practice difficulty: Applied (not an official question level).

**Correct answer: B.**

- **A. A vocabulary ID treated as a numerical quantity:** The ID identifies a token and does not model surrounding meaning.
- **B. A contextual embedding — correct:** Contextual representations incorporate neighboring information to distinguish usage.
- **C. A single static word vector for every occurrence:** A static vector does not change with the sentence context.
- **D. A temperature setting alone:** Temperature controls sampling rather than encoding word sense.

## 16. A generated answer has high token likelihood but cites a nonexistent report. Which conclusion is most justified?

Topic: Tokens, embeddings & how generation behaves. Practice difficulty: Stretch (not an official question level).

**Correct answer: D.**

- **A. The report must exist because the continuation is likely:** Likelihood under a model is not evidence of external existence.
- **B. A larger context limit alone validates the citation:** Capacity to accept context does not verify a report.
- **C. Using the same random seed makes the report factual:** Reproducibility and factual validity are different properties.
- **D. Plausible generation can still be unsupported; verify the citation — correct:** External claims need evidence beyond the model's continuation probabilities.

## 17. Which intervention necessarily involves training parameters rather than only supplying request context?

Topic: Prompting, RAG & fine-tuning: choose the right lever. Practice difficulty: Foundation (not an official question level).

**Correct answer: C.**

- **A. Including two formatted examples in a prompt:** Few-shot examples can be used at inference without parameter updates.
- **B. Appending retrieved approved excerpts:** Providing evidence in context does not require training the generator.
- **C. Training parameter-efficient adapters on reviewed task examples — correct:** Adapter adaptation trains learned parameters even with base weights frozen.
- **D. Changing the requested answer length:** An instruction changes the request, not learned weights.

## 18. A policy assistant retrieves the headline rule but misses an exception in the next paragraph because chunks are tiny. Which change should be evaluated first?

Topic: Prompting, RAG & fine-tuning: choose the right lever. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. Chunk boundaries and enough surrounding context to preserve conditions — correct:** The evidence is fragmented; chunking and context assembly are direct diagnostic levers.
- **B. A stronger style fine-tune with the same incomplete evidence:** Style adaptation does not supply the missing exception.
- **C. Removing all effective-date metadata:** That loses important authority and freshness information.
- **D. A higher sampling temperature for more diverse exceptions:** Sampling variety is not a substitute for the actual policy evidence.

## 19. A relevant paragraph is found by lexical search and then supplied to a generator. The team says it cannot be RAG without a vector database. What is correct?

Topic: Prompting, RAG & fine-tuning: choose the right lever. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. RAG is defined only by a specific database technology:** The defining relationship is retrieval supporting generation.
- **B. Lexical search changes the generator's weights:** Supplying retrieved text does not itself update generator parameters.
- **C. It becomes fine-tuning because the paragraph contains examples:** Examples in inference context do not constitute a training update.
- **D. Retrieval can be lexical, vector-based, or hybrid in a RAG workflow — correct:** A vector database is an implementation choice, not a universal requirement.

## 20. A cross-department assistant indexes restricted documents. A team proposes retrieving everything, then asking the model not to reveal unauthorized text. What is the strongest correction?

Topic: Prompting, RAG & fine-tuning: choose the right lever. Practice difficulty: Stretch (not an official question level).

**Correct answer: B.**

- **A. Increase chunk size to make restricted passages less noticeable:** Obscuring content does not enforce access control.
- **B. Enforce user permissions before restricted content enters the answer context — correct:** Authorization must be an application boundary, not a model's voluntary disclosure rule.
- **C. Keep the design if answers include citations:** Citations can themselves expose restricted information and do not authorize access.
- **D. Fine-tune the model to memorize department names:** Memorized names do not establish enforceable document permissions.

## 21. For one query, four passages are known relevant. Two appear in the top five retrieved passages. Under passage-level recall@5, what is recall?

Topic: Evaluate generative systems & bound agents. Practice difficulty: Foundation (not an official question level).

**Correct answer: B.**

- **A. 40%:** Two of five is precision among retrieved passages, not the defined recall.
- **B. 50% — correct:** Recall@5 = two relevant passages retrieved / four known relevant passages.
- **C. 80%:** Four divided by five does not count retrieved relevant evidence.
- **D. 100%:** Two relevant passages are still missing from the top-five candidates.

## 22. A summarizer gets a high lexical-overlap score while reversing whether a request was approved. What should the evaluator conclude?

Topic: Evaluate generative systems & bound agents. Practice difficulty: Applied (not an official question level).

**Correct answer: D.**

- **A. Shared words establish correct meaning:** Overlap can remain high when a critical decision is reversed.
- **B. The score can replace every human-reviewed case:** Important semantic errors need task-specific correctness checks.
- **C. The source must be removed because overlap is high:** The score alone does not identify a source defect.
- **D. Add semantic correctness checks; overlap alone misses the failure — correct:** A decision reversal violates the task despite many matching words.

## 23. An LLM judge consistently prefers longer answers even when experts flag unsupported details. What is the best next step?

Topic: Evaluate generative systems & bound agents. Practice difficulty: Applied (not an official question level).

**Correct answer: A.**

- **A. Calibrate the rubric and judge against expert cases and inspect disagreement — correct:** The measurement component has a bias that must be evaluated rather than assumed correct.
- **B. Make every candidate answer longer to win the score:** This optimizes the judge's bias, not grounded answer quality.
- **C. Treat the judge as authoritative because it is another model:** Models used for evaluation are also fallible.
- **D. Reuse final-test answers as fine-tuning examples and keep the same final score:** That contaminates the final evaluation boundary.

## 24. A tool-using agent usually finishes correctly but sometimes retries a money-transfer call after a timeout and transfers twice. Which evaluation and safeguard fit best?

Topic: Evaluate generative systems & bound agents. Practice difficulty: Stretch (not an official question level).

**Correct answer: C.**

- **A. Score only the final explanation and increase temperature:** The harmful side effect is not captured by fluency or sampling variety.
- **B. Allow unlimited retries to maximize eventual completion:** Unbounded repeated actions can compound financial harm.
- **C. Inspect action traces and enforce duplicate-action protection, limits, and approval — correct:** Evaluate side effects and recovery; application controls must bound consequential actions.
- **D. Hide tool logs so the model focuses on the goal:** Removing evidence makes diagnosis and oversight weaker.

## Scoring

Score = correct answers / 24 × 100%. This does not classify an official badge level. Group missed questions by the lesson named above and revisit the worked example.
