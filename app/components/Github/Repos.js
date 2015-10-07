var React = require('react');

var Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      <div>
        User Notes <br />
        Username: {this.props.username} <br />
        Bio: {this.props.bio}
      </div>
    )
  }
});


module.exports = Repos;
