import React, { Component } from 'react'
import  './Child.css';

export default class Sub extends Component {

constructor(props) {
    super()
    console.log('props:',props);
    this.state={
        value: props.value,
        items: props.item,
        myClass: '',
        date: new Date(),
    }
    console.log('state:', this.state);
   
}

arr=[];
// life circle
shouldComponentUpdate(nextProps, nextState)
{
  
    console.log('nextProps:',nextProps);
    
    console.log('props:', this.props);


   
  

   
     return true;
}
/*
componentDidMount() {
    this.timerID = setInterval(
      () => { 
                this.tick();
                //console.log('value: ',this.state.value);
              },
      
      1000
    );
  }
*/
  componentWillUnmount() {
    //clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      //date: new Date()
      value: this.props.value
    });
  }

// 
  load= (e) => {
      console.log('load:',e)
   
      
     
      
   
}




    render(){
        const ar = [];
    for(let lp of this.props.item)
    {
       // this.arr.push(lp);
       ar.push(lp);
        
    }

    

  
let divAction = (e) => {
    let txt = String( e.target.innerText);
    console.log(e.target.innerText)
    if(txt.includes('eggs'))
    {
        this.setState({myClass: 'item-x'});
    }

}
  
        
        return(
            <div>
              Sub
             
                <div >
                {
                  //this.arr.map((m) => <li>{m}</li>);
                  //this.state.items;
                ar.map((m,index)=> <li className={ this.state.myClass
                   } key={index} onClick={divAction}> {m}</li>)
                               
                }
                </div>
                 
            </div>
        )
    }

}

