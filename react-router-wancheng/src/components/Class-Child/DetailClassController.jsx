
import React from 'react';
import ClassStore from '../../stores/ClassStore'
import ClassAction from  '../../actions/ClassAction'
import DetailClass from './DetailClass.jsx'
import $ from 'jquery';

export default class DetailClassController extends React.Component{

    constructor(poprs){
        super(poprs)
        this.state = {
            ClassDetail : ClassStore.getClassDetail()
        }
        this._onChange = this._onChange.bind(this);
    }
    componentDidMount(){
        ClassStore.addChangeListener(this._onChange)
    }
    componentWillUnmount(){
        console.log('销回组件')
        ClassStore.removeChangeListener(this._onChange)
    }
    _onChange(){
        this.setState({
            ClassDetail : ClassStore.getClassDetail()
        })
    }
    render(){
        var item = this.state.ClassDetail,
            id = this.props.params.class_id
        return (
            <DetailClass items={item} id={id}/>
        )
    }
}