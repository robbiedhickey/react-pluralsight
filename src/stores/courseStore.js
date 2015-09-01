var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants/actionTypes');
var BaseStore = require('./baseStore');
var assign = require('object-assign');
var _ = require('lodash');

var _courses = [];

var CourseStore = assign({}, BaseStore, {
  getAllCourses: function(){
    return _courses;
  },
  getCourseById: function(id){
    return _.find(_courses, {id: id});
  }
});

Dispatcher.register(function(action){
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _courses = action.initialData.courses;
      CourseStore.emitChange();
      break;
    case ActionTypes.DELETE_COURSE:
      _.remove(_courses, function(course){
        return course.id === action.id;
      });
      CourseStore.emitChange();
      break;
    default:
  }
});

module.exports = CourseStore;
