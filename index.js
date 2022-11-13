let teamA = document.getElementById("displayteamA");
let teamB = document.getElementById("displayteamB");
scoreA = 0;
scoreB = 0;

function increment(val, team) {
  if (team == 1) {
    scoreA += val;
    teamA.textContent = scoreA;
  }

  if (team == 2) {
    scoreB += val;
    teamB.textContent = scoreB;
  }
}
