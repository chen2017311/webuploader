import React from 'react';
import NavLink from '../../NavLink.jsx'
import './ClassStyle.css'
export default function(props){
        var items = props.classList;
        var clearMargin = {
            marginRight : '0px'
        }
        var itemHtml = items.map(function(child,i){
            var path = `/class/${child.class_id}`
            return <li key={i} style={(i+1) % 3==0?clearMargin:{}} className="class_li">
                <div className="class-body-wrap">
                    <NavLink to={path}>
                        <div className="cover">
                            <img src={child.cover} alt="封面"/>
                        </div>
                        <div className="introduce">
                            <div className="title">
                                <span>{child.title}</span>
                            </div>
                            <div className="notice">
                                <span className="study">{child.studyCount}</span>
                                <span className="price">{child.price}</span>
                                <span className="price1">{child.price1}</span>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </li>
        })

    return (
        <div className="class_wrap">
            <div className="breadcast">
                <div className="breadcast"><a href="/">首页</a>
                    &gt;
                    <a href="javascript:void(0)">点师课程</a>
                    &gt;
                    <a href="javascript:void(0)">大咖公开课</a></div>
            </div>
            <div>
                <ul>
                    {itemHtml}
                </ul>
            </div>
        </div>
    )
}