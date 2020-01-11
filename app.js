/* eslint-disable strict */
/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      id: 1,
      question: 'Which of the following animal went “oink oink”?',
      answers: [
        'Cow',
        'Pig',
        'Duck',
        'Horse',
        'Lamb'
      ],
      correctAnswer: 'Pig',
      feedback: 'The correct annswer is Pig'
    },
    {
      id: 2,
      question: 'Which of the following animal went “quack quack” ?',
      answers: [
        'Cow',
        'Pig',
        'Duck',
        'Horse',
        'Lamb'
      ],
      correctAnswer: 'Duck',
      feedback: 'The correct annswer is Duck'
    },
    {
      id: 3,
      question: 'Which of the following animal went “neigh neigh” ?',
      answers: [
        'Cow',
        'Pig',
        'Duck',
        'Horse',
        'Lamb'
      ],
      correctAnswer: 'Horse',
      feedback: 'The correct annswer is Horse'
    },
    {
      id: 4,
      question: 'Which of the following animal went “baa baa” ?',
      answers: [
        'Cow',
        'Pig',
        'Duck',
        'Horse',
        'Lamb'
      ],
      correctAnswer: 'Lamb',
      feedback: 'The correct annswer is Lamb'
    },
    {
      id: 5,
      question: 'Which of the following animal went “moo moo” ?',
      answers: [
        'Cow',
        'Pig',
        'Duck',
        'Horse',
        'Lamb'
      ],
      correctAnswer: 'moo moo',
      feedback: 'The correct annswer is Cow'
    }
  ],
  quizStarted: 'false',
  answerSubmitted: 'correct',
  questionNumber: 0,
  score: 0,
  questionAmount: 5
};


/*  Generate all HTML contents in the app  */
// Pages Section
/*start page
      generates HTML for start page */
function generateStartPage() {
  return `
    <div class='startPage'>
      <p>Old MACDONALD had a farm<br/>
      E-I-E-I-O<br/>
      And on his farm he had a...</p>
      <button id='start' type="button">Let's Begin!</button>
    </div>
    `;
}

// generates HTML for questions page

function questionPage() {
  return `
    <div class='QuestionPage'>
      <p>${generateQuestions()}</p>
      <p>${generateAnswers()}</p>
      <button id='submit' type="button">Submit</button>
    
    </div>
    `;
}

// generates HTML for answers page

function AnswersPage() {
  return `
    <div class='correctAnswersPage'> 
     <p>${rightORWrong()}</p>
     <p>You have ${scoreDisplay()} right</p>
     <p>You are on ${questionNumberDisplay()} out of ${questionAmountDisplay()} questions</p>
      <button id='next' type="button">Next</button>
    
    </div>
    `;
}


/*question page
      generates all HTML contents in question page*/
function generateQuestions() {
  let currentQuestion = STORE.questions[STORE.questionNumber].question;
  return currentQuestion;
}

function rightORWrong(){
  return STORE.answerSubmitted;
  
}
function scoreDisplay(){
  return STORE.score;

}
function questionNumberDisplay(){
  return STORE.questionNumber;
}
function questionAmountDisplay(){
  return STORE.questionAmount;
}




function generateAnswers() {
  const answers1 = STORE.questions[STORE.questionNumber].answers[0];
  const answers2 = STORE.questions[STORE.questionNumber].answers[1];
  const answers3 = STORE.questions[STORE.questionNumber].answers[2];
  const answers4 = STORE.questions[STORE.questionNumber].answers[3];
  const answers5 = STORE.questions[STORE.questionNumber].answers[4]; 
  return `<input type='radio' name ='answer' value='cow'>${answers1}</br>` +
  `<input type='radio' name ='answer' value='pig'>${answers2}</br>` +
  `<input type='radio' name ='answer' value='duck'>${answers3}</br>` +
  `<input type='radio' name ='answer' value='horse'>${answers4}</br>` +
  `<input type='radio' name ='answer' value='lamb'>${answers5}</br>`;
}



  
function generateProgress() {
}
function generateScore() {
}


/*Feedback page
      generates all HTML contents in question page*/
function generateFeedback() {
}

/*Result page
      generates all HTML contents in question page*/
function generateResultPage() {
}


/*  Render functions  */ 
function renderFunctions() {
  
  if (STORE.quizStarted === 'false') {
    $('main').html(generateStartPage());
    return;
  }

  if (STORE.quizStarted === 'true') {
    $('main').html(questionPage());
    return;
  }

  if (STORE.quizStarted === 'answer' && STORE.answerSubmitted === 'correct' ) {
    $('main').html(AnswersPage());
    return;
  }
  if (STORE.quizStarted === 'answer' && STORE.answerSubmitted === 'incorrect' ) {
    $('main').html(AnswersPage());
    return;
  }
  
}

/*  handle functions */
function handleStartButton() {
  $('main').on('click', '#start', function(event) {
    STORE.quizStarted = 'true';
    renderFunctions();
    questionPage();
    console.log('handleStartButton running');
  }); 
}

function handleSubmitButton() {
  $('main').on('click', '#submit', function(event) {
    STORE.quizStarted = 'answer';
    event.preventDefault();
    console.log('handleSubmitButton running');
    renderFunctions();
    AnswersPage();
    
  }); 
}

function handleNextButton() {
  $('main').on('click', '#next', function(event) {
    STORE.quizStarted = 'true';
    event.preventDefault();
    console.log('handleNextButton running');
    renderFunctions();
    AnswersPage();
    
  }); 
}


function letsRunIt() {
  renderFunctions();
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
}

$(letsRunIt);


// function handle() {
//   handleStartButton();
//   handleAnswerSubmit();
//   handleNextButton();
//   handleRestartButton();
// }


// breakdown of this app:
/*
  * the quiz should be rendered to the page
  * go to the next page when pressing start button
  * clik the answer on the multiple choice
  * show the page number
  * show the progress
  * show the result
  * go to the nex page
  * show overall score on the last page
  * start over button on the last page brings user back to the first page
*/





/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */
 