import React from 'react';
import NavLink from '../../NavLink.jsx'
import './About.css'
export default class About extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="wrap" >
                <div className="about-nav-wrap">
                    <ul>
                        <li><NavLink to="/about/" onlyActiveOnIndex>关于我们</NavLink></li>
                        <li><NavLink to="/about/join-we">加入我们</NavLink></li>
                        <li><NavLink to="/about/strategy">学习攻略</NavLink></li>
                        <li><NavLink to="/about/cooperation">企业合作</NavLink></li>
                        <li><NavLink to="/about/server">服务条款</NavLink></li>
                        <li><NavLink to="/about/notice">用户须知</NavLink></li>
                    </ul>
                </div>
                <div className="about-body-wrap">
                    {this.props.children}
                </div>
            </div>
        )
    }
}