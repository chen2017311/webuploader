import React from 'react';
import './footer.css'

export default class Footer extends React.Component{
    constructor(props){
        super(props);

    }

    render(){

        return(
            <div className="dirWrap">
            	<img src="../img/footer.png"/>
                <div className="footerText">
                    <span>  </span>
                </div>
            </div>
        )
    }
}