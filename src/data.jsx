export const Tasks = [
  {
      id: Math.random(),
    title: "title 1",
    dueDate: new Date(),
    description: "description",
    subTasks: [
      {
        title: "subTask1",
        description: "description1",
      },
      {
        title: "subTask2",
        description: "description2",
      },
    ],
  },
  {
      id: Math.random(),
    title: "title 2",
    dueDate: new Date(),
    description: "description",
    subTasks: [
      {
        title: "subTask2-1",
        description: "description2-1",
      },
      {
        title: "subTask2-2",
        description: "description2-2",
      },
    ],
  },
];


function Task ({task}){

}

function Subtasks ({subtasks}){

}

function Subtask ({subtask}){

}
