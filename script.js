document.addEventListener("DOMContentLoaded", function() {
  const insuranceForm = document.getElementById('insurance-form');
  const incomeInput = document.getElementById('income');
  const submitButton = document.getElementById('submit');
  const resultElement = document.getElementById('result');
  const resultNotEligible = document.getElementById('result-not-eligible');

  
 triggerRegularChat();
  // ...
  let income = 0
  function handleIncomeInput(income) {
    if (income >= 45000) {
      const premium = calculatePremium(income);
      resultElement.textContent = `You are eligible for our insurance! Your premium is: ${premium} kr`;
      resultElement.classList.remove('hidden');
      resultNotEligible.classList.add('hidden');
      console.log('You are eligible');
      triggerRegularChat();
     console.log('Trigger Chat Rule applied');
    } else if (income < 45000 && income  > 0) {
      resultNotEligible.textContent = `Please contact us to discuss your insurance options`;
      resultNotEligible.classList.remove('hidden');      
      resultElement.classList.add('hidden'); 
      triggerPriceNotCalculated();
    }}

  // ...
});