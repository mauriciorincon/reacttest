import React, {Component} from 'react';

/* Import Components */
import CheckBox from '../components/CheckBox';  
import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '../components/Button';

class FormContainer extends Component{
    constructor(props){
        super(props);


        
        this.state = {
            newUser: {
                name : '',
                email : '',
                age : '',
                gender : '',
                expertise : '',
                about : ''
            },
            genderOptions : ['Male','Female','Others'],
            skillOptions : ['Programming','Development','Design','Testing']
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);       
        this.handleFullName = this.handleFullName.bind(this);
    }
    

    handleFullName(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newUser : 
            {...prevState.newUser, name: value
            }
        }))
    }

    handleFormSubmit() {
    // Form submission logic
    }
    handleClearForm() {
    // Logic for resetting the form
    }

    render(){
        return(
            <form className="container" onSubmit={this.handleFormSubmit}>
                <Input type={'text'}
                    title= {'Full Name'} 
                    name= {'name'}
                    value={this.state.newUser.name} 
                    placeholder = {'Enter your name'}
                    handleChange = {this.handleFullName}
                /> {/* Name of the user */}
                <Input />
                <Select />
                <CheckBox />
                <TextArea />
                <Button />
                <Button />
            </form>
        );
    }
}

export default FormContainer;