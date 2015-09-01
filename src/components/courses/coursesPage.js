var React = require('react');
var CourseList = require('./courseList');
var CourseStore = require('../../stores/courseStore');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;

var CoursesPage = React.createClass({
  getInitialState: function() {
    return {
      courses: CourseStore.getAllCourses()
    };
  },
  componentDidMount: function() {
    CourseStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    CourseStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState({ courses: CourseStore.getAllCourses() });
  },
  render: function() {
    return (
      <div>
        <h1>Courses</h1>
        <Link to="addCourse" className="btn btn-default">Add Course</Link>
        <CourseList courses={this.state.courses} />
      </div>
    );
  }

});

module.exports = CoursesPage;
