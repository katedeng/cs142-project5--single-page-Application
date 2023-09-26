import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Paper } from '@mui/material';
import { HashRouter } from 'react-router-dom';

import './styles/main.css';
import TopBar from './components/TopBar/TopBar';
//import UserDetail from './components/UserDetail/UserDetail';
import UserList from './components/UserList/UserList';
//import UserPhotos from './components/UserPhotos/UserPhotos';

class PhotoShare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'Home'
        };
        this.changeView = this.changeView.bind(this);
    }

    //name is optional
    changeView = (newView, name) => {
        this.setState({ view: newView + (name && name) });
    };

    render() {
        return ( <
            HashRouter >
            <
            div >
            <
            Grid container spacing = { 8 } >
            <
            Grid item xs = { 12 } >
            <
            TopBar view = { this.state.view }
            /> <
            /Grid> <
            div className = "cs142-main-topbar-buffer" / >
            <
            Grid item sm = { 3 } >
            <
            Paper className = "cs142-main-grid-item" >
            <
            UserList / >
            <
            /Paper> <
            /Grid> <
            /Grid> <
            /div> <
            /HashRouter>
        );
    }
}

ReactDOM.render( < PhotoShare / > , document.getElementById('photoshareapp'));