let iStarQuestions = ["Which tasks are involved in making payments?", // pay with credit card, pay with debit card
                      "What is the Client's main goal?", //travel organized
                      "What is the Hotel management system's main goal?", // booking managed
                      "What is the best payment option for having a lower price?", //pay with debit card
                      "Which tasks are involved in checking out?", // receive payment, register checkout
                      "Which resources may be needed to pay for a room?", // credit card, debit card
                      "On which resource is register a booking dependent on?"]; // personal details

function onLoad()
{
  shuffle();
  document.getElementById("iStarQuestion").innerHTML = iStarQuestions[iStarQuestions.length-1].toString();
  iStarQuestions.pop();
}

function iStarNextQuestion()
{
  shuffle();
  if (iStarQuestions.length > 0) {
     document.getElementById("iStarQuestion").innerHTML = iStarQuestions[iStarQuestions.length-1].toString();
     iStarQuestions.pop();
     if (iStarQuestions.length === 0) {
       document.getElementById('nextQuestion').style.display = 'none';
       document.getElementById('nasaTLX').style.display = '';
     }
  }
}

function shuffle()
{
  let m = iStarQuestions.length, t, i;
  while (m > 0)
  {
  	i = Math.floor(Math.random() * m--);
  	t = iStarQuestions[m];
  	iStarQuestions[m] = iStarQuestions[i];
  	iStarQuestions[i] = t;
  }
  return iStarQuestions;
}
