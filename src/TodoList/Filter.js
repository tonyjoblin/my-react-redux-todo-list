import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setVisibility } from "./actions";
import { getVisibilityFilter } from "./selectors";

const Filter = ({ filter = "All", setVisibility }) => {
  return (
    <p>
      <span
        className={cx("filter", filter === "All" && "filter--active")}
        onClick={() => setVisibility("All")}
      >
        All
      </span>{" "}
      |
      <span
        className={cx("filter", filter === "Done" && "filter--active")}
        onClick={() => setVisibility("Done")}
      >
        Completed
      </span>{" "}
      |
      <span
        className={cx("filter", filter === "In progress" && "filter--active")}
        onClick={() => setVisibility("In progress")}
      >
        In progress
      </span>
    </p>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: getVisibilityFilter(state)
  };
};

export default connect(mapStateToProps, { setVisibility })(Filter);
