const poll = new Map();

const addOption = (option) => {
  if (!option) {
    return "Option cannot be empty.";
  }
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
};

addOption("Egypt");
addOption("Option A");
addOption("Option B");
addOption("Option C");

const vote = (option, voterId) => {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  const voters = poll.get(option);
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
};

vote("Option A", "Voter1");
vote("Option B", "Voter2");
vote("Option C", "Voter3");

const displayResults = () => {
  let results = "Poll Results:\n";
  for (const [option, voters] of poll.entries()) {
    results += `${option}: ${voters.size} votes\n`;
  }
  return results.trim();
};