var React = require('react');
var Link = require('react-router').Link;
var CourseActions = require('../../actions/courseActions');
var toastr = require('toastr');
var PropTypes = React.PropTypes;

var CourseList = React.createClass({
  deleteCourse: function(id, event){
    event.preventDefault();
    CourseActions.deleteCourse(id);
    toastr.success('Course deleted.');
  },
  render: function() {
    var createCourseRow = function(course){
      return (
        <tr key={course.id}>
          <td><Link to="watchCourse" params={{id: course.id}} query={{url: course.watchHref}}>Watch</Link></td>
          <td><a href="#" onClick={this.deleteCourse.bind(this, course.id)}>Delete</a></td>
          <td><Link to="manageCourse">{course.title}</Link></td>
          <td>{course.author.name}</td>
          <td>{course.category}</td>
          <td>{course.length}</td>
        </tr>
      );
    };
    return (
      <div>
        <table className="table">
          <thead>
            <th></th>
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
          </thead>
          <tbody>
            {this.props.courses.map(createCourseRow, this)}
          </tbody>
        </table>
      </div>
    );
  }

});

module.exports = CourseList;
