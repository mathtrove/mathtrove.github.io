import React from 'react';

import './App.css';
import MathSec from './components/MathSec';
import Hero from './components/hero';


function App() {

  let topics = ["General Maths","Number Theory", "Vectors", "Analytical Geometry", "Matrices and Determinants", "Algebra"];

  let subTopics = [
    {
      0: "Ratio",1: "Percentage", 2: "Interest",3: "Times"
    },
    {
      0: "Basic operations", 1: "Types of numbers", 2: "Sequences and series", 3: "Probability"
    },
    {
      0: "Basic operations", 1: "Types of numbers", 2: "Sequences and series", 3: "Probability"
    },
    {
      0: "Basic operations", 1: "Types of numbers", 2: "Sequences and series", 3: "Probability"
    },
    {
      0: "Basic operations", 1: "Types of numbers", 2: "Sequences and series", 3: "Probability"
    }
  ]

  let colors = ["#eaf3dd", "#a9f4bd", "#d8dadc", "#f1d2cd","#e0cede"]
  return (
    <div className="App">
      <Hero />
      <MathSec topic={topics[0]} subTopic0={subTopics[0][0]} subTopic1={subTopics[0][1]} subTopic2={subTopics[0][2]} subTopic3={subTopics[0][3]} color={colors[0]}/>
      <MathSec topic={topics[1]} subTopic0={subTopics[1][0]} subTopic1={subTopics[1][1]} subTopic2={subTopics[1][2]} subTopic3={subTopics[1][3]} color={colors[1]}/>
      <MathSec topic={topics[2]} subTopic0={subTopics[2][0]} subTopic1={subTopics[2][1]} subTopic2={subTopics[2][2]} subTopic3={subTopics[2][3]} color={colors[2]}/>
      <MathSec topic={topics[3]} subTopic0={subTopics[3][0]} subTopic1={subTopics[3][1]} subTopic2={subTopics[3][2]} subTopic3={subTopics[3][3]} color={colors[3]}/>
      <MathSec topic={topics[4]} subTopic0={subTopics[4][0]} subTopic1={subTopics[4][1]} subTopic2={subTopics[4][2]} subTopic3={subTopics[4][3]} color={colors[4]}/>
      <MathSec topic={topics[5]}/>
    </div>
  );
}

export default App;
