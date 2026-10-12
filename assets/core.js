(() => {
  const shuffle = (items, random = Math.random) => {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };
  const prepare = (questions, random = Math.random) => shuffle(questions, random).map(q => ({
    ...q, order: shuffle(q.options.map((_, index) => index), random)
  }));
  const score = (questions, answers) => {
    let correct = 0;
    let answered = 0;
    const byLesson = {};
    const byDifficulty = {};
    const byDomain = {};
    for (const q of questions) {
      const chosen = answers[q.id];
      const isAnswered = Number.isInteger(chosen) && chosen >= 0 && chosen < q.options.length;
      const isCorrect = isAnswered && chosen === q.answer;
      answered += Number(isAnswered);
      correct += Number(isCorrect);
      for (const [bucket, key] of [[byLesson, q.lesson], [byDifficulty, q.difficulty], [byDomain, q.domain]]) {
        bucket[key] ??= { correct: 0, total: 0 };
        bucket[key].total++;
        bucket[key].correct += Number(isCorrect);
      }
    }
    return { correct, answered, total: questions.length, percent: questions.length ? Math.round(correct / questions.length * 100) : 0, byLesson, byDifficulty, byDomain };
  };
  const remaining = (deadline, now = Date.now()) => deadline === null ? null : Math.max(0, Math.ceil((deadline - now) / 1000));
  const paperQuestions = (questions, domain) => questions.filter(q => q.pool === "exam" && q.domain === domain);
  const mockQuestions = (questions, mock) => typeof mock === "string" ? questions.filter(q => q.pool === "mock" && q.mock === mock) : [];
  const validAttempt = (attempt, questions) => {
    if (!attempt || !Array.isArray(attempt.questions) || !attempt.questions.length || typeof attempt.answers !== "object" || !attempt.answers || Array.isArray(attempt.answers)) return false;
    if (!["quiz", "exam", "mock", "review"].includes(attempt.kind) || !["learning", "timed"].includes(attempt.mode) || typeof attempt.title !== "string") return false;
    if (!Number.isFinite(attempt.started) || !(attempt.deadline === null || Number.isFinite(attempt.deadline))) return false;
    if (attempt.mode === "timed" && attempt.deadline === null) return false;
    if (attempt.mode === "learning" && attempt.deadline !== null) return false;
    for (const field of ["checked", "flags"]) {
      if (attempt[field] !== undefined && (!Array.isArray(attempt[field]) || attempt[field].some(id => typeof id !== "string"))) return false;
    }
    if (!Number.isInteger(attempt.index) || attempt.index < 0 || attempt.index >= attempt.questions.length) return false;
    const known = new Map(questions.map(q => [q.id, q]));
    const examDomain = attempt.kind === "exam" ? known.get(attempt.questions[0]?.id)?.domain : null;
    if (attempt.kind === "exam" && attempt.domain !== undefined && attempt.domain !== examDomain) return false;
    if (attempt.kind === "mock") {
      const reserved = mockQuestions(questions, attempt.mock);
      if (!reserved.length || attempt.questions.length !== reserved.length || attempt.domain !== undefined) return false;
      if (attempt.mode === "timed" && attempt.checked?.length) return false;
    } else if (attempt.mock !== undefined) return false;
    const ids = new Set();
    const valid = attempt.questions.every(item => {
      if (!item || typeof item !== "object") return false;
      const canonical = known.get(item.id);
      if (!canonical || ids.has(item.id) || !Array.isArray(item.order) || item.order.length !== canonical.options.length) return false;
      ids.add(item.id);
      if (attempt.kind !== "review" && canonical.pool !== attempt.kind) return false;
      if (attempt.kind === "exam" && canonical.domain !== examDomain) return false;
      if (attempt.kind === "mock" && canonical.mock !== attempt.mock) return false;
      if (new Set(item.order).size !== canonical.options.length || item.order.some(i => !Number.isInteger(i) || i < 0 || i >= canonical.options.length)) return false;
      const answer = attempt.answers[item.id];
      return answer === undefined || (Number.isInteger(answer) && answer >= 0 && answer < canonical.options.length);
    });
    return valid && Object.keys(attempt.answers).every(id => ids.has(id)) &&
      ["checked", "flags"].every(field => (attempt[field] || []).every(id => ids.has(id)));
  };
  globalThis.StudyCore = { shuffle, prepare, score, remaining, paperQuestions, mockQuestions, validAttempt };
})();
