var Dispatcher = require('../dispatcher');
var CourseApi = require('../api/courseApi');
var ActionTypes = require('../constants/actionTypes');

var CourseActions = {
  deleteCourse: function(id){
    CourseApi.deleteCourse(id);

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_COURSE,
      id: id
    });
  }
};

module.exports = CourseActions;
