import React from 'react';
import Class from './Class.jsx'
import ClassStore from '../../stores/ClassStore'
export default class ClassController extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            classList : ClassStore.getClassList()
        }
        this._onChange = this._onChange.bind(this);
    }
    componentDidMount(){
        ClassStore.addChangeListener(this._onChange)
    }
    componentWillUnmount(){
        ClassStore.removeChangeListener(this._onChange)
    }
    _onChange(){
        this.setState({
            classList : ClassStore.getClassList()
        })
    }
    render(){
        var classList = this.state.classList
        return(
            <Class classList={classList}/>
        )
    }
}