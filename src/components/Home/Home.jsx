import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table";
import axios from "axios";

// [{id:1,title:'Wkaeup early and do yoga',description: 'Do regualr exercise and yogasnas for healthy and fit. Intake a plenty of water.',progress: 'Incomplete'},
//   {id:2,title:'Have breakfast before going to office', description:'Eat healthy food and try to avoid fast foods for better health and fit. Don\'t be hurry while eating. ',progress: 'Incomplete'},
//   {id:3,title:'Complete the Project before 3 PM',description: 'All the pending tasks are mentioned in the project files and try to complete the tasks in time and submit to the manager without delay.',progress: 'Incomplete'},
//   {id:4,title:'Client Meeting', description:'You have a client meeting evening and get the requirements from them and analyze them whether they can fulfill on time.',progress: 'Incomplete'}]

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/login");
  };

  const generateTaskData = async () => {
    try {
      const taskData = await axios.get("http://localhost:8082/v1/tasks");
      setData(taskData.data);
    } catch (er) {
      console.log(
        "Error while fetching Data. Check whether Server is Started. ",
        er
      );
    }
  };

  useEffect(() => {
    generateTaskData();
  }, []);

  return (
    <div>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            logOut();
          }}
        >
          LOG OUT
        </Button>
      </div>
      {data.length ? (
        <div>
          <h3>List of Tasks</h3>
          <Table rows={data} setData={setData} />
        </div>
      ) : (
        <div>
          <h4>No Data to Display</h4>
        </div>
      )}
    </div>
  );
};

export default Home;
