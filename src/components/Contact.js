import React, { Component } from 'react';
import './child';


class Contact extends Component {

    constructor(props){
        super();
        this.state={
            off: 'asd'
        }
       
    }


  

    render() {
      

        return(
            
              <li style={{color: `{this.props.style}`}} key={this.props.contact.id}>
                   { this.props.contact.name } :
                  <div>
                       { this.props.contact.items.map(mp => 
                   <li>
                       {
                      mp.indexOf(this.props.search) ? <p style={{color: `{this.props.style}`}} href="www">{mp}</p> : <ol style={{color: `{this.state.off}`}}href="ww">{mp}</ol>
                            
                       }
                    </li>)}
                  </div>
                  
        
                   
             </li>


           
        )
    
    }



}

export default Contact;