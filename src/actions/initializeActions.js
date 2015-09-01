var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');
var CourseApi = require('../api/courseApi');

var InitializeActions = {
  initApp: function(){
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors(),
        courses: CourseApi.getAllCourses()
      }
    });
  }
};

module.exports = InitializeActions;
