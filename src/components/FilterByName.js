import React from 'react';

const FilterByName = props => {
    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'name'
        });
    };

    return (
        <fieldset className="form-section__container">
            <label htmlFor="character" className="form-section__label">Name</label>
            <input type="text"
                id="character"
                name="character"
                placeholder="Search you favorite character"
                className="form-section__input"
                onChange={handleChange}>
            </input>
        </fieldset>
    );
};

export default FilterByName;