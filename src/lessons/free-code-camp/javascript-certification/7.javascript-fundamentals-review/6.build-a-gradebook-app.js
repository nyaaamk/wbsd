const getAverage = (scores) => {
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
};

const getGrade = (score) => {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
};

const hasPassingGrade = (score) => {
  return getGrade(score) !== "F";
};

const studentMsg = (scores, studentScore) => {
  const average = getAverage(scores);
  const grade = getGrade(studentScore);
  const status = hasPassingGrade(studentScore) ? "You passed the course." : "You failed the course.";
  return `Class average: ${average}. Your grade: ${grade}. ${status}`;
};