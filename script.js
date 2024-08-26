document.addEventListener("DOMContentLoaded", function() {
  const insuranceForm = document.getElementById('insurance-form');
  const incomeInput = document.getElementById('income');
  const submitButton = document.getElementById('submit');
  const resultElement = document.getElementById('result');
  const resultNotEligible = document.getElementById('result-not-eligible');

  // Add a CSS class to the chat elements to hide them
  const regularChatElement = document.getElementById('regular-chat');
  const priceNotCalculatedChatElement = document.getElementById('price-not-calculated-chat');

  regularChatElement.classList.add('hidden-chat');
  priceNotCalculatedChatElement.classList.add('hidden-chat');

  // ...

  function handleIncomeInput(income) {
    if (income < 45000) {
      resultNotEligible.textContent = `Please contact us to discuss your insurance options`;
      resultNotEligible.classList.remove('hidden');
      resultElement.classList.add('hidden');
      // Hide regular chat
      regularChatElement.classList.add('hidden-chat');
      // Trigger PriceNotCalculated chat
      priceNotCalculatedChatElement.classList.remove('hidden-chat');
      triggerPriceNotCalculated();
    } else if (income >= 45000) {
      const premium = calculatePremium(income);
      resultElement.textContent = `You are eligible for our insurance! Your premium is: ${premium} kr`;
      resultElement.classList.remove('hidden');
      resultNotEligible.classList.add('hidden');
      console.log('You are eligible');
      // Hide PriceNotCalculated chat
      priceNotCalculatedChatElement.classList.add('hidden-chat');
      // Show regular chat
      regularChatElement.classList.remove('hidden-chat');
      triggerRegularChat();
    }
  }

  // ...

  function triggerRegularChat() {
    // Function to trigger regular chat
    pzl.api.triggerRule({
      ruleId: 'eb1d1fb4-4547-4576-bbbe-5284c7ad88c2',
      force: true,
      customOutcomeProps: {
        details: {
          queueKey: 'chat_support'
        }
      }
    });
  }

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
});