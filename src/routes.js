var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

// NOTE REGARDING PATHS:
// when not specified, react-router assumes the name is the route.
var routes = (
  <Route name='app' path='/' handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <Route name='authors' handler={require('./components/authors/authorPage')} />
    <Route name='addAuthor' path="author" handler={require('./components/authors/manageAuthorPage')} />
    <Route name='manageAuthor' path="author/:id" handler={require('./components/authors/manageAuthorPage')} />
    <Route name='courses' handler={require('./components/courses/coursesPage')} />
    <Route name='addCourse' handler={require('./components/courses/manageCoursePage')} />
    <Route name='manageCourse' handler={require('./components/courses/manageCoursePage')} />
    <Route name='watchCourse' path="watch/:id" handler={require('./components/courses/watchCoursePage')} />
    <Route name='about' handler={require('./components/about/aboutPage')} />
    <NotFoundRoute handler={require('./components/404')} />
    <Redirect from="about-us" to="about" />
    <Redirect from="awthurs" to="authors" />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;
