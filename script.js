document.addEventListener("DOMContentLoaded", function() {
  const insuranceForm = document.getElementById('insurance-form');
  const incomeInput = document.getElementById('income');
  const submitButton = document.getElementById('submit');
  const resultElement = document.getElementById('result');
  const resultNotEligible = document.getElementById('result-not-eligible');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const income = parseInt(incomeInput.value.trim(), 10);
    if (income >= 45000) {
      const premium = calculatePremium(income);
      resultElement.textContent = `You are eligible for our insurance! Your premium is: ${premium} kr`;
      resultElement.classList.remove('hidden');
      resultNotEligible.classList.add('hidden');
      console.log('You are eligible');
    } else {
      resultNotEligible.textContent = `Please contact us to discuss your insurance options`;
      resultNotEligible.classList.remove('hidden');
      resultElement.classList.add('hidden');
      triggerChatRule(); // Call the function when income is less than 45,000 kr
    }
  });

  function calculatePremium(income) {
    // Simple premium calculation logic
    return income * 0.05;
  }

  function triggerChatRule(income){
    // This function is called when the income is less than 45,000 kr
    pzl.api.triggerRule({
    ruleId: 'eb1d1fb4-4547-4576-bbbe-5284c7ad88c2', 
    force: true, 
    customOutcomeProps: { 
      details: {
        queueKey: 'Q_CHAT_9' 
      }
      }
  });
  console.log('Trigger Chat Rule applied');
}
});