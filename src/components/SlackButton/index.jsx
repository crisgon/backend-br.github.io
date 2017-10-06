import React from 'react';

import './style.css';

import icon from './icons/slack.svg';

const slackInviteUrl = 'https://backend-br.slack.com/join/shared_invite/MjI2MTM2MjMwNjI4LTE1MDI2Nzg0NjYtNDFjNjc4MTg2Mg';

export default () => (
  <div className="slack-button">
    <p className="slack-button__description">Participe do canal do <br />Backend Brasil no Slack</p>
    <a href={slackInviteUrl} className="slack-button__link" target="_blank">
      <img src={icon} className="slack-button__icon" alt="Logo do Slack" />
            @backend-br
    </a>
  </div>
);