import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="card">
            <img src="https://freesoft.ru/storage/images/news/1/6/555/555_text.png" style={{width: "100px"}} className="card-img-top" alt="@"/>

                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>

        <div className="card" aria-hidden="true">
            <img src="#" className="card-img-top" alt="@"/>
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                    <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                </div>
        </div>
    </div>
  );
}

export default App;
