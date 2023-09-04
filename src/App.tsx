import React from 'react';
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <>
      <Card title='My title' text="Some quick example text to build on the card title and make up the bulk of the card's content.">
        <img src='/src/img/image.png' className="card-img-top" alt="my picture"></img>
      </Card>
    </>
  );
}

export default App;
