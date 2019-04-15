import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react'
import { openModal } from "../modals/modalActions";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  openModal
}

class TestComponent extends Component {
  render() {
    const { openModal } = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>The answer is: {this.props.data}</h3>
        <Button onClick={() => openModal('TestModal', {data: 43})} color='teal' content='Open Modal' />
      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);
