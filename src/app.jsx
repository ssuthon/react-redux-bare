var React = require('react')
var ReactDOM = require('react-dom');
import { createStore } from 'redux'

function counter(state = 0, action){
	if(action.type === 'INCREMENT'){
		state = state + 1;
	}
	return state;
}


const store = createStore(counter);

const render = () =>{
	document.body.innerText = store.getState()
}

store.subscribe(render);
render();

document.addEventListener('click', ()=>{
	store.dispatch({type: 'INCREMENT'})
})

/*var App = React.createClass({
	render: function(){
		return (<h3>Hello World</h3>);
	}
})

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);*/