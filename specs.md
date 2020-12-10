People Bingo v1

Rules
Everyone receives the same 25 questions in a randomised 5x5 grid.  
One by one, each participant asks the others a question from the bingo game.
If the person being asked answers, *everyone* in the group writes down their name in the bingo card. 
You can't mark your own answers!
The team decides when the game ends. It can be when somebody fills in either a row or a column, both, multiple - go wild!

Notes
Be careful - the question you ask may lead to somebody else winning!
Some questions are marked as "Free (with a twist)" - those are very simple questions (think "Who has eaten pizza in their life?"), but in order to qualify, the person being asked must tell a story related to them!



Future improvements
* make grid size variable, with recommendation based on team size
* tag questions in different categories - ice-breakers, deep questions, happy, sad - so you can cater to a wider audience
* feature to see the available questions in the pool
* feature to create your own people bingo and then share it with others; they get a randomised bingo using your values



Technical notes
* need a BingoCard and BingoGame component
* BingoCard has: questionType (default, free, twist), questionText, person, reason (optional, for free-with-a-twist questions)
* need an array of at least 5x5 questions, which should have: questionType, questionText


[{
    "questionType": "default",
    "questionText": "Lorem ipsum",
    "tags": []
},
{
    "questionType": "free",
    "questionText": "Lorem ipsum",
    "tags": []
},
{
    "questionType": "twist",
    "questionText": "Lorem ipsum",
    "tags": []
}]


[
    {
        "questionType": "open-ended-question",
        "questionText": "Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be?",
        "tags": [
            "ice-breaker"
        ]
    },
    {
        "questionType": "open-ended-question",
        "questionText": "When did you last cry?",
        "tags": [
            "deep"
        ]
    },
    {
        "questionType": "open-ended-question",
        "questionText": "If you knew that in one year you would die suddenly, would you change anything about the way you are now living?",
        "tags": [
            "deep"
        ]
    },
    {
        "questionType": "open-ended-question",
        "questionText": "What is your most terrible memory?",
        "tags": [
            "deep"
        ]
    },
    {
        "questionType": "default",
        "questionText": "Has never used a rotary phone",
        "tags": [
            "ice-breaker"
        ]
    },
    {
        "questionType": "default",
        "questionText": "Does not wear glasses or contacts",
        "tags": [
            "ice-breaker"
        ]
    },
    {
        "questionType": "default",
        "questionText": "Likes horror movies",
        "tags": [
            "ice-breaker"
        ]
    },
    {
        "questionType": "default",
        "questionText": "Sings in the shower or bathtub",
        "tags": [
            "ice-breaker"
        ]
    },
]