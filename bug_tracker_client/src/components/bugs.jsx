import React, { Component } from "react";
import BugTable from "./bugTable";
import Pagination from "./common/pagination";
import Filter from "./filter";
import Ticket from "./ticket";
import { getTasks, deleteTask } from "./../services/tasksDatabase";
import { paginate } from "./common/utils/paginate";
import { getCurrentUser } from "./../services/authService";
import { toast } from "react-toastify";
import _ from "lodash";

class Bugs extends Component {
  state = {
    currentPage: 1,
    selectedPriority: null,
    selectedStatus: null,
    pageSize: 4,
    priorities: [],
    statusList: [],
    tasks: [],
    sortColumn: { path: "title", order: "asc" }
  };
  async componentDidMount() {
    const user = getCurrentUser();
    const { data: tasks } = await getTasks();
    this.setState({
      tasks,
      user
    });
  }

  handleDelete = async task => {
    const originalTasks = this.state.tasks;
    const tasks = originalTasks.filter(m => m._id !== task._id);
    this.setState({ tasks });
    try {
      await deleteTask(task._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This task has already been deleted.");
      this.setState({ tasks: originalTasks });
    }
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handlePrioritySelect = priority => {
    this.setState({
      selectedPriority: priority,
      currentPage: 1
    });
  };
  handleStatusSelect = status => {
    this.setState({
      selectedStatus: status,
      currentPage: 1
    });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedPriority,
      selectedStatus,
      tasks: allTasks
    } = this.state;

    let filtered = allTasks;

    if (selectedStatus && selectedPriority) {
      filtered = allTasks.filter(
        m =>
          m.status._id === selectedStatus && m.priority._id === selectedPriority
      );
    } else if (selectedStatus && !selectedPriority) {
      filtered = allTasks.filter(m => m.status._id === selectedStatus);
    } else if (selectedPriority && !selectedStatus) {
      filtered = allTasks.filter(m => m.priority._id === selectedPriority);
    }
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const tasks = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: tasks };
  };
  render() {
    const { pageSize, currentPage, sortColumn, user } = this.state;
    const { totalCount, data: tasks } = this.getPagedData();
    return (
      <div className="col">
        <div className="row-2">
          {" "}
          <Filter
            onPrioritySelect={this.handlePrioritySelect}
            onStatusSelect={this.handleStatusSelect}
          />
        </div>
        <div className="row-2">
          {" "}
          <BugTable
            tasks={tasks}
            user={user}
            sortColumn={sortColumn}
            onSort={this.handleSort}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
        <div className="row-2"> {user && <Ticket />}</div>
      </div>
    );
  }
}

export default Bugs;
