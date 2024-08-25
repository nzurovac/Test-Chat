const form = document.getElementById('form');
const incomeInput = document.getElementById('income');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const resultNotEligible = document.getElementById('result');


document.addEventListener("DOMContentLoaded", function(){
submitButton.addEventListener('click', (e) => {
  e.preventDefault(); // prevent form submission
  const income = parseInt(incomeInput.value.trim(), 10);
  if (income >= 45000) {
    const premium = calculatePremium(income);
      
        resultElement.textContent = `You are eligible for our insurance! Your premium is: ${premium} kr`;
        console.log('you are eligible');
  } else {
    console.log('test');
    resultNotEligible.textContent = `Please contact us to discuss your insurance options`;
    triggerRule(); // call the function when income is less than 45 000 kr

    
  }
});
});
function calculatePremium(income) {
  // TO DO: implement the premium calculation logic here
  // for now, let's assume it's a sumple percentage of the income
  return income * 0.05;
}

// TO DO: implement the triggerRule function here
function triggerRule() {
  // this function shall be called when the income is less than 45,000kr
  // for now, let's just log a message to the console
  console.log('Not Eligible for insurance');
};


if(module.hot){
  module.hot.accept();
};
