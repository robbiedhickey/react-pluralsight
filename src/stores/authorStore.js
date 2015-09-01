var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants/actionTypes');
var BaseStore = require('./baseStore');
var assign = require('object-assign');
var _ = require('lodash');

var _authors = [];

var AuthorStore = assign({}, BaseStore, {
  getAllAuthors: function(){
    return _authors;
  },
  getAuthorById: function(id){
    var author = _.find(_authors, {id: id});
    return author;
  }
});

Dispatcher.register(function(action){
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.data);
      AuthorStore.emitChange();
      break;
    case ActionTypes.UPDATE_AUTHOR:
      var existingAuthor = _.find(_authors, {id: action.author.id});
      var index = _.indexOf(_authors, existingAuthor);
      _authors.splice(index, 1, action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, function(author){
        return action.id === author.id;
      });
      AuthorStore.emitChange();
      break;
    default:

  }
});

module.exports = AuthorStore;
