
import React from 'react';
import {Link} from 'react-router';


export default class NavLink extends React.Component{

    render (){
        return (
            <Link  {...this.props} className="link" activeClassName="active"></Link>
            )
    }
}