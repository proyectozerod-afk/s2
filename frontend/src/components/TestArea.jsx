import { useState, useEffect } from 'react';
import axios from 'axios';

export default function TestArea() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Aquí fetch a tu API de Django (ajusta la URL y añade el token de Auth)
    axios.get('http://localhost:8000/api/questions/')
      .then(res => setQuestions(res.data));
  }, []);

  const handleSelect = (questionId, score) => {
    setAnswers({ ...answers, [questionId]: score });
  };

  const handleSubmit = async () => {
    const formattedAnswers = Object.keys(answers).map(qId => ({
      question_id: parseInt(qId),
      score: answers[qId]
    }));
    
    await axios.post('http://localhost:8000/api/submit-test/', { answers: formattedAnswers });
    setSubmitted(true);
  };

  if (submitted) return <h2>¡Gracias por tus respuestas! Tus datos han sido guardados.</h2>;

  return (
    <div>
      <h2>Prueba de Perfil</h2>
      {questions.map(q => (
        <div key={q.id} style={{ margin: '20px 0' }}>
          <p>{q.text}</p>
          {[1, 2, 3, 4, 5].map(val => (
            <label key={val} style={{ marginRight: '10px' }}>
              <input 
                type="radio" 
                name={`question_${q.id}`} 
                value={val} 
                onChange={() => handleSelect(q.id, val)} 
              />
              {val}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Enviar Respuestas</button>
    </div>
  );
}