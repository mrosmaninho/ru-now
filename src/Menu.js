import React, { Component } from 'react';

const DATA = require('./data/menu.js');

var menuField = React.createClass({
    displayName: 'menuField',
    getInitialState () {
        return {};
    },
    updateValue (newValue) {
        this.setState({
            selectValue: newValue,
        })
    },
    render () {
        var options = DATA.MENU;
        return (
            <div className="sectionMenu">
                <select ref="citySelect"
                    autofocus
                    options={options}
                    simpleValue
                    clearable
                    name="select-city"
                    value={this.state.selectValue}
                    onChange={this.updateValue}
                    searchable
                    labelKey="name"
                    valueKey="name"
                />
            </div>
        );
    }
});
module.exports = menuField;