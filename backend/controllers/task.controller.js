const httpStatus = require("http-status");
const taskService = require("../services/task.service");

/**
 * Implement getVideos() function
 *
 * @return { tasks }
 */

const getTasks = async (req, res) => {
  //   console.log("I am in getTasks Controller");
  const result = await taskService.findTasks();
  res.status(httpStatus.OK).send(result);
};

module.exports = {
  getTasks,
};
