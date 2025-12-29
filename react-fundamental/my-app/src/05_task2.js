// • Task 2: o Implement a component that displays a message like "You are eligible to vote" if theuser is over 18, otherwise display "You are not eligible to vote."
import React from "react";

function VotingEligibility({ age }) {
  return (
    <div>
      {age >= 18 ? (
        <p>You are eligible to vote.</p>
      ) : (
        <p>You are not eligible to vote.</p>
      )}
    </div>
  );
}

export default VotingEligibility;
