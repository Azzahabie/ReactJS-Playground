import React, { useState } from "react";
import {
  OpeningAnim,
  ClosingAnim,
  NavBar,
  StyledJumbotron,
  TaskContainer,
} from "./components";
import {
  GlobalStyle,
  GlobalCenteredDiv,
  GlobalMainContainer,
} from "./globalStyles";

function App() {
  // function slowPromise(){
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(200)
  //     }, 5000);
  //   })
  // }

  const [spinner, setSpinner] = useState(false);
  const [closingSpinner, setClosingSpinner] = useState(false);
  // eslint-disable-next-line
  const triggerSpinner = (input) => {
    // eslint-disable-next-line
    if (input == "start") {
      setSpinner(true);
    }
    // eslint-disable-next-line
    if (input == "end") {
      setSpinner(false);
      setClosingSpinner(true);
      setTimeout(() => {
        setClosingSpinner(false);
      }, 2000);
    }
  };

  const getUser = (e) => {
    e.preventDefault();
    let input = document.getElementById("testInput").value;
    triggerSpinner(input)
  };

  const [taskArr, setTaskArr] = useState([
    {
      id: 1,
      task: "kill my self",
      message: "dont",
      active: true,
    },
    {
      id: 2,
      task: "kill your self",
      message: "yes",
      active: false,
    },
    {
      id: 3,
      task: "kill his self",
      message: "YUP",
      active: true,
    },
  ]);

  //delete task
  const deleteTask = (id) => {
    setTaskArr(taskArr.filter((task) => task.id !== id));
  };
  //change task color using dumb way
  //eslint-disable-next-line
  const clickTask = (id) => {
    let newArr = []
    taskArr.forEach((task) => {
      if (task.id === id) {
        if (task.active === true) {
          task.active = false;
        } else {
          task.active = true;
        }
      }
      newArr.push(task)
    });
    setTaskArr(newArr)
  };
//change task color using smart way
  const newClickTask = (id) => {
    setTaskArr( taskArr.map((task) => task.id === id ? { ...task,active:!task.active} : task))
  }

  return (
    <GlobalMainContainer>
      {spinner ? <OpeningAnim></OpeningAnim> : null}
      {closingSpinner ? <ClosingAnim></ClosingAnim> : null}
      <div id="content">
        <NavBar getUser={getUser} />
        <StyledJumbotron />
        <GlobalCenteredDiv>
          <TaskContainer
            tasksArr={taskArr}
            onDelete={deleteTask}
            clickTask={newClickTask}
          />
        </GlobalCenteredDiv>
      </div>
      <GlobalStyle />
    </GlobalMainContainer>
  );
}

export default App;
