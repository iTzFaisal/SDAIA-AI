# Domain 2 practice paper

> Independent, unofficial preparation. Not affiliated with or endorsed by SDAIA. Questions are original practice material, not actual examination questions. Topic breakdowns and practice timings are our design choices, not official exam specifications.

Reviewed: 2026-10-12. Confirmed exam booking: 5 December 2026 (provided by learner).

24 original questions; one best answer each. Suggested practice time: 45 minutes, an unofficial training choice. Write your answers separately. Unanswered questions count as incorrect. The answer key is in a separate file. This is not a full seven-domain mock.

### 1. A planner represents a robot's location and battery charge, permitted moves, and a destination. What is battery charge in this formulation?

A. A generated answer's citation

B. A neural network learning rate

C. Part of the search state

D. The final reward for every episode

### 2. A finite route graph has varying nonnegative toll costs. The objective is least total toll, not fewest roads. Which search priority fits most directly?

A. Lowest accumulated path cost, with correct repeated-state handling

B. Deepest path discovered so far

C. Fewest roads without considering tolls

D. Highest estimated remaining cost only

### 3. A team calls a support system reinforcement learning solely because it makes several tool calls in sequence. Which response is best?

A. Sequential calls alone prove reward-based learning

B. Any system with a language model must use reinforcement learning at runtime

C. Tool calls make the system a convolutional network

D. Ask whether an action policy is learned from reward feedback

### 4. A team uses A* with a guessed remaining-cost heuristic that sometimes overestimates. It claims lowest-cost results are guaranteed just because f = g + h. What is the best assessment?

A. The formula alone proves optimality

B. The guarantee is not established; check heuristic and algorithm conditions

C. Overestimation always improves optimality

D. Replacing path costs with model confidence preserves the objective

### 5. A network stacks weighted sums and biases but no nonlinear hidden activations. What can be said about the resulting mapping?

A. Every extra layer necessarily introduces nonlinear structure

B. It is still an affine mapping despite the additional layers

C. It must be a retrieval system rather than a model

D. It is automatically calibrated

### 6. Under simple gradient descent, a weight is 0.8, its gradient is −0.3, and learning rate is 0.2. What is its updated value?

A. 0.74

B. 0.5

C. 0.06

D. 0.86

### 7. A team changes only the inference prompt of a frozen deployed model. Which statement about the model's learned weights is justified?

A. They are unchanged by ordinary prompting

B. They are retrained once for each token in the prompt

C. They become permanently adapted to that user's examples

D. They shrink because fewer training epochs are used

### 8. On an audited neural-network split, training loss keeps improving but validation loss worsens late in training. Which action fits the evidence?

A. Select the final epoch solely because training loss is lowest

B. Tune dropout on the final test until its score peaks

C. Consider validation-based early stopping or regularization

D. Declare vanishing gradients from the generalization gap alone

### 9. Which family directly carries a hidden state from one sequence step to the next?

A. A road-search heuristic

B. A fixed fee table

C. A standard local convolution filter

D. A recurrent neural network, such as an LSTM

### 10. Two sentences use the same tokens but reverse who pays whom. What helps a transformer distinguish their order?

A. Token IDs sorted numerically

B. Position information alongside token representations

C. An extra training/test leak

D. A source citation attached after generation

### 11. A company has limited labeled defect images and access to a suitably licensed pretrained vision model. Which initial experiment is strongest?

A. Assume the public benchmark score proves factory performance

B. Use only a text generator because deep learning means language

C. Train a head on frozen features and evaluate representative held-out images

D. Remove low-light test images to match the pretrained dataset

### 12. An analyst presents one self-attention heatmap as complete proof of why a transformer made a harmful decision. What is the best response?

A. Treat it as limited evidence, not a full causal explanation

B. Accept it because all model behavior is a single attention head

C. Declare attention impossible during inference

D. Replace factual evaluation with the heatmap alone

### 13. Which description fits a text-to-image diffusion model most directly?

A. Generating through learned iterative denoising, conditioned on text

B. Finding a minimum-toll path through a road graph

C. Training only a generator against a real/fake discriminator

D. Filling a fixed fee table without learned representations

### 14. A simplified shared 6,000-token budget uses 800 for instructions, 1,200 for history, 2,500 for evidence, and reserves 700 for output. How much remains?

A. 1,500 tokens

B. 5,200 tokens

C. 800 tokens

D. 2,000 words

### 15. The word 'port' has different meanings in a shipping report and a network manual. Which representation is designed to use this surrounding context?

A. A vocabulary ID treated as a numerical quantity

B. A contextual embedding

C. A single static word vector for every occurrence

D. A temperature setting alone

### 16. A generated answer has high token likelihood but cites a nonexistent report. Which conclusion is most justified?

A. The report must exist because the continuation is likely

B. A larger context limit alone validates the citation

C. Using the same random seed makes the report factual

D. Plausible generation can still be unsupported; verify the citation

### 17. Which intervention necessarily involves training parameters rather than only supplying request context?

A. Including two formatted examples in a prompt

B. Appending retrieved approved excerpts

C. Training parameter-efficient adapters on reviewed task examples

D. Changing the requested answer length

### 18. A policy assistant retrieves the headline rule but misses an exception in the next paragraph because chunks are tiny. Which change should be evaluated first?

A. Chunk boundaries and enough surrounding context to preserve conditions

B. A stronger style fine-tune with the same incomplete evidence

C. Removing all effective-date metadata

D. A higher sampling temperature for more diverse exceptions

### 19. A relevant paragraph is found by lexical search and then supplied to a generator. The team says it cannot be RAG without a vector database. What is correct?

A. RAG is defined only by a specific database technology

B. Lexical search changes the generator's weights

C. It becomes fine-tuning because the paragraph contains examples

D. Retrieval can be lexical, vector-based, or hybrid in a RAG workflow

### 20. A cross-department assistant indexes restricted documents. A team proposes retrieving everything, then asking the model not to reveal unauthorized text. What is the strongest correction?

A. Increase chunk size to make restricted passages less noticeable

B. Enforce user permissions before restricted content enters the answer context

C. Keep the design if answers include citations

D. Fine-tune the model to memorize department names

### 21. For one query, four passages are known relevant. Two appear in the top five retrieved passages. Under passage-level recall@5, what is recall?

A. 40%

B. 50%

C. 80%

D. 100%

### 22. A summarizer gets a high lexical-overlap score while reversing whether a request was approved. What should the evaluator conclude?

A. Shared words establish correct meaning

B. The score can replace every human-reviewed case

C. The source must be removed because overlap is high

D. Add semantic correctness checks; overlap alone misses the failure

### 23. An LLM judge consistently prefers longer answers even when experts flag unsupported details. What is the best next step?

A. Calibrate the rubric and judge against expert cases and inspect disagreement

B. Make every candidate answer longer to win the score

C. Treat the judge as authoritative because it is another model

D. Reuse final-test answers as fine-tuning examples and keep the same final score

### 24. A tool-using agent usually finishes correctly but sometimes retries a money-transfer call after a timeout and transfers twice. Which evaluation and safeguard fit best?

A. Score only the final explanation and increase temperature

B. Allow unlimited retries to maximize eventual completion

C. Inspect action traces and enforce duplicate-action protection, limits, and approval

D. Hide tool logs so the model focuses on the goal

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
