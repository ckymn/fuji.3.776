import React from "react";
import Card from "./components/Cardd";
import Collapse from "./components/Collapse";

const App = () => {
  return (
    <div>
      <div className="card-group" style={{justifyContent: "center" }}>
        <Collapse>
          <Card
            title="Muhammet"
            document="Hello my name is Muhammet..."
            cardDate={new Date()}
            image="https://picsum.photos/200"
          />
        </Collapse>
        <Collapse>
          <Card
            title="Ahmet"
            document="Hello my name is Ahmet..."
            cardDate={new Date()}
            image="https://picsum.photos/201"
          />
        </Collapse>

        <Collapse>
          <Card
            title="Seher"
            document="Hello my name is Seher..."
            cardDate={new Date()}
            image="https://picsum.photos/202"
          />
        </Collapse>
      </div>
    </div>
  );
};

export default App;
