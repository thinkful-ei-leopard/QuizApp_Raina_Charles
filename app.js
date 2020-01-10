/* eslint-disable strict */
/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
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
  questionNumber: 0,
  score: 0
};








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
 