import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getPriorities } from "../services/priorityService";
import { saveTask } from "../services/tasksDatabase";

class Ticket extends Form {
  state = {
    data: {
      title: "",
      owner: "",
      priorityId: "",
      statusId: "5e28b3af96c5af1f1873acf4"
    },
    priorities: [],
    statusList: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .max(50)
      .label("Title"),
    owner: Joi.string()
      .required()
      .max(50)
      .label("Owner"),
    statusId: Joi.string()
      .required()
      .label("Status"),
    priorityId: Joi.string()
      .required()
      .label("Priority")
  };

  async componentDidMount() {
    const { data: priorities } = await getPriorities();
    this.setState({ priorities });
  }

  doSubmit = async () => {
    await saveTask(this.state.data);
    window.location = "/";
  };

  render() {
    return (
      <div>
        <h3 style={{ margin: "50px", backgroundColor: "dark" }}>
          Add a Ticket
        </h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("owner", "Owner")}
          {this.renderSelect("priorityId", "Priority", this.state.priorities)}
          {this.renderButton("Create")}
        </form>
      </div>
    );
  }
}

export default Ticket;
