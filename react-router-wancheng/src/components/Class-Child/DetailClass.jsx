

import React from 'react';
import './DetailStyle.css'
export default function(props){
    let id = props.id;
    let items = props.items;
    let _html;

        for(let i=0;i<items.length;i++){
            if(items[i].detail_id === id){
                var currentItem =items[i]
            }
        }
        console.log(currentItem);
        //课程大纲内容列表

        //当前对象列表
         _html = <div className="detail_body_wrap">
            <div className="detail_body_header">
                <div className="detail_body_header_wrap">
                    <div className="detail_body_header_left">
                        <img src={currentItem.title_img} alt=""/>
                    </div>
                    <div className="detail_body_header_right">
                        <p className="title">{currentItem.title}</p>
                        <p className="content">{currentItem.sub_title}</p>
                        <div className="dcs">
                            <span>学习人数{currentItem.study_count}人</span> | <span>❤&nbsp;收藏</span>
                        </div>
                        <div className="price">
                            <span className="free">免费</span>
                            <s>￥{currentItem.price}</s>
                        </div>
                        <div>
                            <button>去学习</button>
                            <button>在线咨询</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;


    return (
        <div>
            {_html}
        </div>
    )
}