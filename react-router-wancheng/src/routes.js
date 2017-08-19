import React from 'react';
import { Route,IndexRoute } from 'react-router';

//--------------------------------

//一级
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Class from './components/Class/ClassController.jsx';
import Employment from  './components/Employment/Employment.jsx'
import Trends from './components/Trends/Trends.jsx'

//About 二级
import AboutWe from './components/About-Child/AboutWe.jsx';
import Cooperation from './components/About-Child/Cooperation.jsx';
import JoinWe from './components/About-Child/JoinWe.jsx';
import Notice from './components/About-Child/Notice.jsx';
import Server from './components/About-Child/Server.jsx';
import Strategy from './components/About-Child/Strategy.jsx'


//class 二级
import DetailClass from './components/Class-Child/DetailClassController.jsx'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
            <Route path="/about" component={About}>
                    <IndexRoute component={AboutWe}/>
                <Route path="/about/cooperation" component={Cooperation}/>
                <Route path="/about/join-we" component={JoinWe}/>
                <Route path="/about/notice" component={Notice}/>
                <Route path="/about/server" component={Server}/>
                <Route path="/about/strategy" component={Strategy}/>
            </Route>
        <Route path="/class" component={Class}/>
        <Route path="/class/:class_id" component={DetailClass}/>
        <Route path="/employment" component={Employment}/>
        <Route path="/trends" component={Trends}/>
    </Route>
)