import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Quiz = () => {
  const [questions, setQuestions]= useState([]);
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');

  useEffect(() => {
    axios.get('/api/questions').then(res => {
      setQuestions(res.data);
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/questions', { question, answers, correctAnswer }).then(res => {
      setQuestions([...questions, res.data]);
      setQuestion('');
      setAnswers([]);
      setCorrectAnswer('');
    });
  };

  const handleDelete = id => {
    axios.delete(`/api/questions/${id}`).then(() => {
      setQuestions(questions.filter(q => q.id !== id));
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Questions</h1>
          {questions.map(q => (
            <div key={q.id}>
              <h3>{q.question}</h3>
              <ul>
                {q.answers.map(a => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p>Correct answer: {q.correctAnswer}</p>
              <Button variant="danger" onClick={() => handleDelete(q.id)}>
                Delete
              </Button>
            </div>
          ))}
        </Col>
        <Col>
          <h2>Add a question</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="question">
              <Form.Label>Question</Form.Label>
              <Form.Control type="text" value={question} onChange={e => setQuestion(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="answers">
              <Form.Label>Answers</Form.Label>
              <Form.Control type="text" value={answers} onChange={e => setAnswers(e.target.value.split(','))} />
            </Form.Group>
            <Form.Group controlId="correctAnswer">
              <Form.Label>Correct answer</Form.Label>
              <Form.Control type="text" value={correctAnswer} onChange={e => setCorrectAnswer(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Quiz;