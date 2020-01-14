import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getPriorities } from "../services/priorityService";
import { getStatus } from "../services/statusService";

class Filter extends Form {
  state = {
    data: { priority: "", status: "" },
    errors: {},
    priorities: [],
    statusList: []
  };

  schema = {
    priority: Joi.string().label("Priority"),
    status: Joi.string().label("Status")
  };

  async componentDidMount() {
    const { data: priorities } = await getPriorities();
    const { data: statusList } = await getStatus();
    this.setState({ priorities, statusList });

    const priorityId = this.state.priorities._id;
    const statusId = this.state.statusList._id;

    this.setState({ data: this.mapToViewModel(priorityId, statusId) });
  }

  mapToViewModel(priorityId, statusId) {
    return {
      priority: priorityId,
      status: statusId
    };
  }

  doSubmit = () => {
    const priority = this.state.data.priority;
    const status = this.state.data.status;
    this.props.onPrioritySelect(priority);
    this.props.onStatusSelect(status);
  };
  render() {
    return (
      <div>
        <h3 style={{ marginBottom: "50px", marginTop: "50px" }}>Filter</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderSelect("priority", "Priority", this.state.priorities)}
          {this.renderSelect("status", "Status", this.state.statusList)}
          {this.renderButton("Filter")}
        </form>
      </div>
    );
  }
}

export default Filter;
