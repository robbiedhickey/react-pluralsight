var React = require('react');
var PropTypes = React.PropTypes;

var WatchCoursePage = React.createClass({

  render: function() {
    console.log(this.props);
    return (
      <div>
        <h1>Watch {this.props.params.id}</h1>

        <iframe src={this.props.query.url} width='640' height='480'></iframe>
      </div>
    );
  }

});

module.exports = WatchCoursePage;
