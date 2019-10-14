import React from 'react';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';

import githubLogo from './GitHub_Logo_White.png'

import './top-bar.css'

export const TopBar = () =>
    <AppBar position="static" className="top-bar">
        <Container fixed>
        <h1>Zach Chat</h1>
        <a className="github-link" href="https://github.com/zachlysobey/chat-prototype">
            <img src={githubLogo} alt="GitHub" style={{ height: 40 }}/>
        </a>
        </Container>
    </AppBar>
