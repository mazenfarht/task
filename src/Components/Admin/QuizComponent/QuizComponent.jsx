import React, { useState } from 'react';
import '..//QuestionCreation.css'

function QuizComponent() {
  const [questions, setQuestions] = useState([
    {
      question: 'What is the capital of Australia?',
      choices: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
      correctAnswer: 'Canberra',
    },
    {
      question: 'What is the largest planet in our solar system?',
      choices: ['Jupiter', 'Saturn', 'Neptune', 'Uranus'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'What is the highest mountain in Africa?',
      choices: ['Mount Kilimanjaro', 'Mount Everest', 'Mount Aconcagua', 'Denali'],
      correctAnswer: 'Mount Kilimanjaro',
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const [newQuestion, setNewQuestion] = useState({question: '', choices: [], correctAnswer: ''});

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  }

  const handleCreateQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion({question: '', choices: [], correctAnswer: ''});
  }

  const handleUpdateQuestion = (index, field, value) => {
    const newQuestions = [...questions];
    const questionToUpdate = newQuestions[index];
    questionToUpdate[field] = value;
    setQuestions(newQuestions);
  }

  const handleDeleteQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  }

  return (
    <div>
      <h1>Quiz</h1>
      <ol>
        {questions.map((question, index) => (
          <li key={index}>
            <h2>{question.question}</h2>
            {question.choices.map((choice, choiceIndex) => (
              <div key={choiceIndex}>
                <input
                  type="radio"
                  id={`question-${index}-choice-${choiceIndex}`}
                  name={`question-${index}`}
                  value={choice}
                  checked={selectedAnswer === choice}
                  onChange={() => handleAnswerSelect(choice)}
                />
                <label htmlFor={`question-${index}-choice-${choiceIndex}`}>{choice}</label>
              </div>
            ))}
            <button onClick={() => handleDeleteQuestion(index)}>Delete</button>
            <button onClick={() => setCurrentQuestionIndex(index)}>Edit</button>
          </li>
        ))}
      </ol>
      {currentQuestionIndex !== null && (
        <div>
          <input type="text"
            placeholder="Enter question"
            value={questions[currentQuestionIndex].question}
            onChange={(event) => handleUpdateQuestion(currentQuestionIndex, 'question', event.target.value)}
          />
          <input type="text"
            placeholder="Enter choices separated by commas"
            value={questions[currentQuestionIndex].choices.join(',')}
            onChange={(event) => handleUpdateQuestion(currentQuestionIndex, 'choices', event.target.value.split(','))}
          />
          <input type="text"
            placeholder="Enter correct answer"
            value={questions[currentQuestionIndex].correctAnswer}
            onChange={(event) => handleUpdateQuestion(currentQuestionIndex, 'correctAnswer', event.target.value)}
          />
          <button onClick={() => setCurrentQuestionIndex(null)}>Cancel</button>
        </div>
      )}
      <div>
        <input type="text"
          placeholder="Enter question"
          value={newQuestion.question}
          onChange={(event) => setNewQuestion({ ...newQuestion, question: event.target.value })}
        />
        <input type="text"
          placeholder="Enter choices separated by commas"
          value={newQuestion.choices.join(',')}
          onChange={(event) => setNewQuestion({ ...newQuestion, choices: event.target.value.split(',') })}
        />
        <input type="text"
          placeholder="Enter correct answer"
          value={newQuestion.correctAnswer}
          onChange={(event) => setNewQuestion({ ...newQuestion, correctAnswer: event.target.value })}
        />
        <button onClick={handleCreateQuestion}>Create</button>
      </div>
    </div>
  );
}

export default QuizComponent;