import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {format: 'hex', open: false};
        this.handleFormatChange = this.handleFormatChange.bind(this);
    }

    handleFormatChange(e) {
        this.setState({ format: e.target.value, open: true});
        this.props.handleChange(e.target.value);
    }

    closeSnackbar = () => {
        this.setState({ open: false });
    }

    render() {
        const { level, changeLevel} = this.props;
        const { format, open } = this.state;
        return (
            <nav className='Navbar'>
                <div className='logo'>
                    <Link exact to='/'>Color Picker</Link>
                </div>
                <div className='slider-container'>
                    <span>Level={level}</span>
                    <div className='slider'>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel} />
                    </div>
                </div>
                <div className='select-container'>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb 255, 255, 255</MenuItem>
                        <MenuItem value= 'rgba'>RGBA - rgba 255, 255, 255, 1.0</MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin={{vertical: 'bottom', horizontal:'left'}} 
                open={open}
                autoHideDuration={3000}
        message={<span id='message-id'>Format Changed To {format.toUpperCase()}</span>}
                ContentProps={{'aria-description': 'message-id'}}
                onClose={this.closeSnackbar}
                action={[
                    <IconButton onClick={this.closeSnackbar} color='inherit' key ='close'>
                        <CloseIcon/>
                    </IconButton>
                ]}
                />
                
            </nav>
        )
    }
}
export default Navbar;