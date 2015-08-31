var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var Router = require('react-router');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],
  statics: {
    willTransitionFrom: function(transition, component){
      if(component.state.dirty && !confirm("Leave without saving?")){
        transition.abort();
      }
    }
  },
  getInitialState: function(){
    return {
      author: {id: '', firstName: '', lastName: ''},
      errors: { },
      dirty: false
    };
  },
  componentWillMount: function(){
    var authorId = this.props.params.id; //form path /author:id

    if(authorId) {
      this.setState({author: AuthorStore.getAuthorById(authorId)});
    }
  },
  setAuthorState: function(event){
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author, dirty: true});
  },
  authorFormIsValid: function(){
    var formIsValid = true;
    this.state.errors = {}; //clear any previous errors

    if(this.state.author.firstName.length < 3){
      formIsValid = false;
      this.state.errors.firstName = "First name must be at least 3 characters";
    }
    if(this.state.author.lastName.length < 3){
      formIsValid = false;
      this.state.errors.lastName = "Last name must be at least 3 characters";
    }
    this.setState( { errors: this.state.errors } );
    return formIsValid;
  },
  saveAuthor: function(event){
    event.preventDefault();

    if(!this.authorFormIsValid()){
      return;
    }

    if(this.state.author.id){
      AuthorActions.updateAuthor(this.state.author);
    }else {
      AuthorActions.createAuthor(this.state.author);
    }

    this.setState({dirty: false});
    toastr.success('Author saved.');
    this.transitionTo('authors');
  },
  render: function(){
    return (
      <div>
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          errors={this.state.errors} />
      </div>
    );
  }
});

module.exports = ManageAuthorPage;
