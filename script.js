document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('insurance-form');
  const resultEl = document.getElementById('result');
  const resultNotEligibleEl = document.getElementById('result-not-eligible');
  
  
  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    const income = parseInt(document.getElementById('income').value, 10);
    if (income >= 45000) {
      resultEl.classList.remove('hidden');
      resultNotEligibleEl.classList.add('hidden');
      triggerChat();
    } else {
      resultEl.classList.add('hidden');
      resultNotEligibleEl.classList.remove('hidden');
    }
  }

   // Function to trigger the Puzzel chat
   function triggerPriceNotCalculated() {
    // This function is called when the income is less than 45,000 kr
    pzl.api.triggerRule({
      ruleId: '5ef4eca5-753c-4959-ad71-3d7a7db7c559',
      force: true,
      customOutcomeProps: {
        details: {
          queueKey: 'chat_support'
        }
      }
    });
    console.log('Trigger Chat Rule applied');
  }
  
  // Add event listener to form submission
  form.addEventListener('submit', handleSubmit);
  });