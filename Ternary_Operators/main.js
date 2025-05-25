  function checkVotingEligibility() {
      const age = document.getElementById("ageInput").value;
      const result = age >= 18 ? "✅ You can vote!" : "❌ You are not old enough to vote.";
      document.getElementById("result").textContent = result;
    }
    
