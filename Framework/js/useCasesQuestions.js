let useCasesQuestions = ["What is the Client's main goal?", // book an hotel room
                         "Which information needs to be validated by the system?", // personal information, available dates
                         "What happens after a reservation is confirmed?", // reservation is stored in the system
                         "What can cause a reservation to not be successful?", // invalid data, no room available, no check-in date available, no check-out date available
                         "What needs to happen before the Client starts the reservation?", // the hotel management system needs to be available
                         "Which actors are involved in selecting the check-in date?", // Client
                         "'NoRoomAvailable' happens after which main step?",]; // step 5

function onLoad()
{
    shuffle();
    document.getElementById("useCasesQuestion").innerHTML = useCasesQuestions[useCasesQuestions.length-1].toString();
    useCasesQuestions.pop();
}

function useCasesNextQuestion()
{
    shuffle();
    if (useCasesQuestions.length > 0) {
        document.getElementById("useCasesQuestion").innerHTML = useCasesQuestions[useCasesQuestions.length-1].toString();
        useCasesQuestions.pop();
        if (useCasesQuestions.length === 0) {
            document.getElementById('nextQuestion').style.display = 'none';
            document.getElementById('nasaTLX').style.display = '';
        }
    }
}

function shuffle()
{
    let m = useCasesQuestions.length, t, i;
    while (m > 0)
    {
        i = Math.floor(Math.random() * m--);
        t = useCasesQuestions[m];
        useCasesQuestions[m] = useCasesQuestions[i];
        useCasesQuestions[i] = t;
    }
    return useCasesQuestions;
}