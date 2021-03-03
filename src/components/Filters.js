import React from "react"
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import "../stylesheets/layout/Filters.scss";

const Filters = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <section className="form-section">
            <form onSubmit={handleSubmit}>
                <FilterByName handleFilter={props.handleFilter} />
                <FilterBySpecie handleFilter={props.handleFilter} />
            </form>
        </section>
    );
};

export default Filters;    