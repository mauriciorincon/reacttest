import React,{ Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Form from './formularios/formulario_prueba';

class App extends Component{
	render(){
		return(
			<div className="container">
				<h3>React Form</h3>
				<Form />
			</div>
		);
	}
}

//var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
ReactDOM.render(<Form />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
