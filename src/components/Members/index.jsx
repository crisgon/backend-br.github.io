import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Member from '../Member';

import { getMembers } from '../../services/github';

import './style.css';

class Members extends Component {
  constructor(props) {
    super(props);

    this.state = { members: [] };

    getMembers(this.props.org).then(response => this.setState({ members: response }));
  }

  renderMembers() {
    return this.state.members.map(member => <Member key={member.id} {...member} />);
  }

  render() {
    return (
      <div className="members">
        <div className="container">
          <h2 className="members__title">Nosso time</h2>
          <ul className="members__list">
            { this.renderMembers() }
          </ul>
        </div>
      </div>
    );
  }
}

Members.propTypes = {
  org: PropTypes.string.isRequired,
};

export default Members;
