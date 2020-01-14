import React, { Component } from "react";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";

class BugTable extends Component {
  state = {};
  columns = [
    {
      path: "title",
      label: "Title",
      content: (bug, user) =>
        user ? <Link to={`/bugs/${bug._id}`}>{bug.title}</Link> : bug.title
    },
    { path: "createdAt", label: "Date" },
    { path: "priority.name", label: "Priority" },
    { path: "owner", label: "Owner" },
    { path: "status.name", label: "Status" }
  ];

  deleteColumn = {
    key: "delete",
    content: task => (
      <button
        onClick={() => this.props.onDelete(task)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    )
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { tasks, onSort, sortColumn } = this.props;

    return (
      <Table
        style={{ width: "20%" }}
        columns={this.columns}
        data={tasks}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default BugTable;
