import React, {useState} from 'react';
import './App.css';
import {TextField} from '@material-ui/core'

function App() {

    const [state, setState] = useState({message: '', name: ''})


    const onTextChange = e => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const onMessageSubmit = e => {
        e.preventDefault();

    }

    return (
        <div className="card">
            <form onSubmit={onMessageSubmit}>
                <h1>Messenger</h1>
                <div>
                    <TextField
                        name="name"
                        onChange={e => onTextChange(e)}
                          value={state.name}
                        label="Name"
                    ></TextField>
                </div>
                <div>
                    <TextField
                        name="message"
                        onChange={e => onTextChange(e)}
                        value={state.name}
                        label="Message"
                    ></TextField>
                </div>
                <button>Send Message</button>
            </form>
            <div>
                <h1>Chat Log</h1>
            </div>
        </div>
    );
}

export default App;
