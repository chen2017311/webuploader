import React from 'react';
import NavLink from '../NavLink.jsx';
import './App.css';
import $ from 'jquery'
import ClassAction from '../actions/ClassAction'
import Footer from './common/Footer.jsx';
import ClassStore from '../stores/ClassStore';
export default class App extends React.Component{

    constructor(props){
        super(props);
        this.loadComponentClassData = this.loadComponentClassData.bind(this);
        this.loadComponentClassDetail = this.loadComponentClassDetail.bind(this);
    }
    loadComponentClassData(){
        console.log('loadComponentClassData')
        $.ajax({
            url : 'src/classList.json',
            dataType :'json',
            async:'false',
            type:'get',
            success:function(data){
                ClassAction.setClassList(data.list);
            }.bind(this),
            error:function(err){
                console.log('loadComponentClassData ERROR')
                console.log(err);
            }
        })
    }
    loadComponentClassDetail(){
        console.log('loadComponentClassDetail')
        $.ajax({
            url : 'src/detailClass.json',
            dataType :'json',
            type:'get',
            success:function(data){
                ClassAction.setClassDetail(data);
            }.bind(this),
            error:function(err){
                console.log('loadComponentClassDetail ERROR')
                console.log(err);
            }
        })
    }
    componentDidMount(){
        this.loadComponentClassData()
        this.loadComponentClassDetail()
    }
    render(){
        return (
            <div>
                <div className="menu">
                    <NavLink to="/">
                        <span>
                            <img src="src/assets/logo.png" alt="logo"/>
                        </span>
                    </NavLink>
                    <ul className="menu_ul">
                        <li><NavLink to="/" onlyActiveOnIndex>首页</NavLink></li>
                        <li><NavLink to="/about">关于我们</NavLink></li>
                        <li><NavLink to="/class">大咖公开课</NavLink></li>
                        <li><NavLink to="/employment">明日之星就业班</NavLink></li>
                        <li><NavLink to="/trends">点师动态</NavLink></li>
                        <li><NavLink to="/code">下载App</NavLink></li>
                    </ul>
                </div>
                <div className="divStyle">
                    {this.props.children}
                </div>
                <div className="footer">
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}