document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('insurance-form');
  const resultEl = document.getElementById('result');
  const resultNotEligibleEl = document.getElementById('result-not-eligible');
  
  let income = 45000;
  
  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    const income = parseInt(document.getElementById('income').value, 10);
    if (income >= 45000) {
      resultEl.classList.remove('hidden');
      resultNotEligibleEl.classList.add('hidden');
      resultEl.textContent = `You are eligible for insurance!`;
      triggerChat();
    } else {
      resultEl.classList.add('hidden');
      resultNotEligibleEl.classList.remove('hidden');
      resultNotEligibleEl.textContent = `Please contact us to discuss your insurance options`;
      triggerPriceNotCalculated();
    }
  }

   // Function to trigger the Puzzel chat
   function triggerPriceNotCalculated() {
    // This function is called when the income is less than 45,000 kr
    pzl.api.triggerRule({
      ruleId: '9bfc2416-6601-48af-b271-e273c5a17b74',
      force: true,
      customOutcomeProps: {
        details: {
          queueKey: 'chat_support'
        }
      }
    });
    console.log('Trigger Chat Rule applied');
  }
  function triggerChat() {
    // This function is called when the income is less than 45,000 kr
    pzl.api.triggerRule({
      ruleId: '1a0927f8-7d7a-43a5-8cad-525561dd3160',
      force: true,
      customOutcomeProps: {
        details: {
          queueKey: 'chat_support'
      }
    }
    });  
    console.log('Start Chat Rule applied');
  }

  // Add event listener to form submission
  form.addEventListener('submit', handleSubmit);
  });