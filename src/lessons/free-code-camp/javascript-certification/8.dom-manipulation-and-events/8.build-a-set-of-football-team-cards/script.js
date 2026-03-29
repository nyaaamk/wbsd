const footballTeam = {
  team     : "Argentina",
  year     : 1986,
  headCoach: "Carlos Bilardo",
  players  : [
    { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false },
    { name: "Jose Luis Brown", position: "defender", isCaptain: false },
    { name: "Oscar Ruggeri", position: "defender", isCaptain: false },
    { name: "Diego Maradona", position: "midfielder", isCaptain: true },
    { name: "Sergio Batista", position: "midfielder", isCaptain: false },
    { name: "Jorge Burruchaga", position: "midfielder", isCaptain: false },
    { name: "Jorge Valdano", position: "forward", isCaptain: false },
    { name: "Claudio Caniggia", position: "forward", isCaptain: false }
  ]
};

const teamEl = document.getElementById("team");
const yearEl = document.getElementById("year");
const headCoachEl = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersSelect = document.getElementById("players");

teamEl.textContent = footballTeam.team;
yearEl.textContent = footballTeam.year;
headCoachEl.textContent = footballTeam.headCoach;

const renderCards = (filter) => {
  const filtered = filter === "all"
    ? footballTeam.players
    : footballTeam.players.filter(p => p.position === filter);

  playerCards.innerHTML = filtered.map(({ name, position, isCaptain }) => `
    <div class="player-card">
      <h2>${isCaptain ? `(Captain) ${name}` : name}</h2>
      <p>Position: ${position}</p>
    </div>
  `).join("");
};

renderCards("all");

playersSelect.addEventListener("change", () => renderCards(playersSelect.value));