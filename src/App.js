import React, { useState } from 'react';
import './App.css';

function App() {
  const initialItems = [
    {
      title: 'Education', description: (
        <div> B.Tech in Computer Science Engineering (Internet of Things), Shiv Nadar University Chennai <br /> Graduation: Expected 2025 <br /> Relevant coursework: C, Python, Java OOPS programming, Software Engineering, Operating System, Data Structures, Design and Analysis of algorithms, DBMS, Computer Networks, Cyber security, Distributed Computing, Cloud Computing, Web Technologies, Sensor tech and Instrumentation, IoT architecture, Dynamic Paradigm in IoT<br /><br />Chennai Public School<br />'Graduation: July 2021<br />Relevant coursework: Physics, Mathematics, Chemistry, Biology'</div>
      )
    },
    {
      title: 'Experience', description: (
        <div>'Flutter Application Developer, AppLever<br /><br />TechIn-Plant Training @ ISRO Propulsion Complex (IPRC), Mahendragiri, Tamil Nadu' </div>
      )
    },
    {
      title: 'Projects', description: (
        <div>'Discord Moderation Bot using Python 🌐<br /><br />Created multiple discord bots using python API wrapper Discord.py to perform various functions and help improve the engagement of various discord servers with over 10,000 members by 50%.<br /><br />Big 5 Personality Quiz App using Flutter and Dart 🌐<br /><br />The Big Five personality test, also known as the OCEAN personality test, is based on the Big Five model that defines human personality as the combination of 5 personality traits or factors: Openness, Conscientiousness, Extraversion, Agreeableness and Neuroticism.'</div>
      )
    },
    {
      title: 'Skills', description: (
        <div>'Programming Language : Java, Python, C/ C++<br /><br />'Web Development : HTML, CSS, JavaScript<br /><br />App Development : Flutter, Dart<br /><br />Other SkillsMySQL, Agile Development, Scrum, Git, Github<br /><br />'</div>
      )
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="App">
      <h2 class="name"><b>SathishKumar R</b> </h2>
      <div class="contact">
        <p><b><a href="tel:+916369255593"> 6369255593</a></b> | <b> <a href="mailto: rsathishkumar1963@gmail.com">rsathishkumar1963@gmail.com</a></b> | <b><a href="https://github.com/SathishKumar5115"> https://github.com/SathishKumar5115 </a></b> | <b>SNUC</b></p>
      </div>
      <ul>
        {initialItems.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            {item.title}
            {selectedItem === index && <p>{item.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
