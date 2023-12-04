function toggleAnswer(answerId) {
  let answerElement = document.getElementById(answerId);
  let plusLogoElement = answerElement.previousElementSibling.querySelector('.plus-logo');

  console.log('toggleAnswer');

  if (answerElement.style.display === 'none' || answerElement.style.display === '') {
    // If answer is hidden, show it and change plus-logo to minus-logo
    answerElement.style.display = 'block';
    plusLogoElement.classList.remove('plus-logo');
    plusLogoElement.classList.add('minus-logo');
  } else {
    // If answer is visible, hide it and change minus-logo to plus-logo
    answerElement.style.display = 'none';
    plusLogoElement.classList.remove('minus-logo');
    plusLogoElement.classList.add('plus-logo');
  }
}