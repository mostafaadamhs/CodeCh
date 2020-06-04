import React, { Component } from "react";
import './Demo.css';
import { faHome, faArrowRight,faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Demo extends Component{

    constructor(props){
        super();
        this.state={
            search:'asd',
            nName: '',
            value:'',
            fullName:''
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


 handleSubmit= (event) => {
    this.setState({value: event.target.value});
    console.log('submit: ', this.state.value);
    event.preventDefault();
 }

 handleChange = (event) =>{
    event.preventDefault();
    console.log('change event name: ',event.target.name);
    console.log('change event value: ',event.target.value);
    this.setState({
        [event.target.name]: event.target.value
    })
 }


    render(){
          
          
       

let lite = this.props.data.map( mp => 
    
         mp.name === this.state.search || mp.name.startsWith(this.state.search)  ? 
         <ul ><FontAwesomeIcon icon={faAngleDoubleRight} color="blue" />
         <label className="change">{mp.name}</label></ul> : 
          <ul className=""><FontAwesomeIcon icon={faAngleDoubleRight}  /><label>{mp.name}</label>
         
         
            {
                mp.items.map( ma => 

                     //this.start(ma)
                   ma === this.state.search || ma.startsWith(this.state.search) ?  
                    <li key={mp.id}> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    <label className="change"> {ma}</label></li> : 
                    <li className="" key={mp.id}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>{ma}</li>
               )
            }
         
         
         
         </ul> );
           






        return(

            <div>

                <div>
                     
                <form className="form-control" onSubmit={this.handleSubmit}>
                 <div className="form-item">
                    <label >Name:</label>
                    <input type="text" placeholder="Enter Name..." 
                    onChange={this.handleChange.bind(this)} name="fullName" id="inName"/>
                </div>
                   
                 <div className="form-item">
                   <label>Items:</label>
                   <input type="text" name="item1" id="item1" placeholder="item1..."/> <br/>
                   <input type="text" name="item2" id="item2" placeholder="item2..."/><br/>
                   <input type="text" name="item3" id="item3" placeholder="item3..."/><br/>
                </div>
                
                
                   <input type="submit" value="Add"/>
                </form>


                </div>
                

            <div className="search_box"><input className="input-search" type="text" name="name" id="name" placeholder="search..." onChange={this.updateText.bind(this)}/></div>
            
                {lite}

            </div>
        )
    }
}


export default Demo;