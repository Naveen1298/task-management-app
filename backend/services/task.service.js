// import {data} from '../mockData/data.json'

/**
 * Ftech tasks Object from mongo db
 * Here, I am facing mongodb connection to the backend. So due to deadline of project I am integrating tasks data manually.
 * @return { <task> }
 */

const findTasks = () => {
  // console.log("I am in findTask service");
  const result = [
    {
      id: 1,
      title: "Wkaeup early and do yoga",
      description:
        "Do regualr exercise and yogasnas for healthy and fit. Intake a plenty of water.",
      progress: "Incomplete",
    },
    {
      id: 2,
      title: "Have breakfast before going to office",
      description:
        'Eat healthy food and try to avoid fast foods for better health and fit. Don"t be hurry while eating. ',
      progress: "Incomplete",
    },
    {
      id: 3,
      title: "Complete the Project before 3 PM",
      description:
        "All the pending tasks are mentioned in the project files and try to complete the tasks in time and submit to the manager without delay.",
      progress: "Incomplete",
    },
    {
      id: 4,
      title: "Client Meeting",
      description:
        "You have a client meeting evening and get the requirements from them and analyze them whether they can fulfill on time.",
      progress: "Incomplete",
    },
  ];
  return result;
};

module.exports = {
  findTasks,
};
