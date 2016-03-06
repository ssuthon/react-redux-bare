var React = require('react')
var ReactDOM = require('react-dom');
import { createStore } from 'redux'


var App = React.createClass({
	render: function(){
		return (<h3>Hello World</h3>);
	}
})

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);