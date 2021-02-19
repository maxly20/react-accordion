import React from 'react';
import Question from './Question';
import questions from './data';
function App() {
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about netflix</h3>
        <section className='info'>
          {questions.map(question => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
