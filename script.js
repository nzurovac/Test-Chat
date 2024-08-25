const insuranceForm = document.getElementById('insurance-form');
const incomeInput = document.getElementById('income');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const resultNotEligible = document.getElementById('result-not-eligible');

document.addEventListener("DOMContentLoaded", function(){
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
      triggerRule(); // Call the function when income is less than 45,000 kr
    }
  });
});

function calculatePremium(income) {
  // Simple premium calculation logic
  return income * 0.05;
}

function triggerRule() {
  // This function is called when the income is less than 45,000 kr
  console.log('Not Eligible for insurance');
  // Additional logic can be added here
}

if (module.hot) {
  module.hot.accept();
}