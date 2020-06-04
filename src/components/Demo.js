import React, { Component } from "react";
import './Demo.css';

class Demo extends Component{

    constructor(props){
        super();
        this.state={
            search:'asd',
        }
    }

    updateText = (e) =>
    {
        this.setState({search: e.target.value})
        console.log(this.state.search)

    }

    start = (val) =>
    {
    if(val.startsWith('eg')){
         return val;
      }
    }

    render(){

        console.log(this.props.data)

        let meEP = this.props.data.map(mp => <ul>{mp.name}
                                
                                    {mp.items.map(ma=> <li key={mp.id}>{ma}</li>)}
                                
        </ul>);

let lite = this.props.data.map( mp => 
    
         mp.name === this.state.search || mp.name.startsWith(this.state.search)  ? <ul className="change">{mp.name}</ul> : <ul className="">{mp.name}
         
         
            {
                mp.items.map( ma => 

                     //this.start(ma)
                   ma === this.state.search || ma.startsWith(this.state.search) ?   <li className="change" key={mp.id}>{ma}</li> :  <li className="" key={mp.id}>{ma}</li>
               )
            }
         
         
         
         </ul> );
           






        return(

            <div>
            <input type="text" name="name" id="name" onChange={this.updateText.bind(this)}/>
                <ul>
                  

                </ul>

                {lite}

            </div>
        )
    }
}


export default Demo;