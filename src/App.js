import React, { Component } from 'react';
import './App.css';

import Demo from './components/Demo';




export const contacts = [{
  name:'Scott',
  phone:'123 456 789'
},
{
  name:'sara',
  phone:'123 748 222'
},
{
  name:'Tim',
  phone:'4129 567 444'
},{
  name:'Jeff',
  phone:'55 456 111'
}

]

class App extends Component {

  contacts = [{
    id:1,
    name:'Scott',
    phone:'123 456 789'
  },
  {
    id:2,
    name:'sara',
    phone:'123 748 222'
  },
  {
    id:3,
    name:'Tim',
    phone:'4129 567 444'
  },{
    id:4,
    name:'Jeff',
    phone:'55 456 111'
  }
  
  ]



  obj={id:0,item:'',tries:[]}
  arr=[];

  contact = this.contacts;

  sText = '';

  ele= [{id:1,name:'breakfast',items:['eggs','cheese','meat']},
  {id:2,name:'lunch',items:['Mushrooms','eggs','cheese']},
  {id:3,name:'dinner',items:['Mushrooms','eggs','meat']}];

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
   super(props);
  this.state={
    myClass:'item-x',
    title:'',
    name:'',
  
  }
  
  }
  
  handleChange = (event) => {
       //this.setState({value: event.target.value});
      // this.setState({value: event.target.value});
     this.setState({title: event.target.value})
    
    
     console.log('event:',event.target.value);

     this.ele.map(m=> m.items.includes(this.state.title) ? 'item-x':console.log('no') )


    
   
  }

 

  handleStyle = (e) =>{
       console.log('target:',e.target.value)
       if(e.target.value === 'eggs')
         return 'item-x';
  }

  // life circle
  shouldComponentUpdate(nextProps, nextState)
  {
    
       if(this.state.title)
       {
         console.log(this.state.title);
         
       }

       return true;
  }
 /*
  componentDidMount() {
    this.timerID = setInterval(
      () => { 
                this.tick();
                console.log('title: ',this.state.title);
              },
      
      1000
    );
  }

  componentWillUnmount() {
    //clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      //date: new Date()
      title: this.state.title
    });
  }
*/
  // main render
render(){

 

//  let change_style = '';



const iEle = [];

for(let i of this.ele)
{ 
      iEle.push(<li key={i.id}>{i.name}                  
      </li>);
}

    /*
    let handleItem = (name) =>
    {
      console.log('clicked', this.state.name);
    }
    */


const data = this.ele.map((d, idx) =>{
  const elt = [];
  elt.push(d.items); 
  let header, content;
  console.log('state:', this.state.title);


//
  if( d.name === this.state.title ||
     d.name.includes(this.state.title || d.name.startsWith(this.state.title)) )
     
     
     
     // if(d.name.includes(this.state.title))
  {
   
    
  header = <ul key={d.id} className={this.state.myClass}>{d.name}
           
            
  </ul>
  }else{
    header = <ul key={d.id}>{d.name}
    
    
    </ul>
    
    
  }

  


  return([

    <div>
         {header}

        {
          d.items.map(m => <li>{m}</li>)
        }
    </div>,
       
    
   


    
         
   ])
} )



/*
function handleSytle(e)
{
     console.log('e', e.target);
     if(e.target.innerHTML === 'eggs' || e.target.innerHTML === 'meat')
            //e.target.style = "background-color: red";
            e.target.className = 'item-x';


}

function dol(lis)
{
  const dl = [];   
    for(let dlp of lis)
   {
    dl.push(<li key={Math.random()}>{dlp}</li>);
    
   }
  
    return dl;
  
}
*/


let change = (items) => {
 
  for(let l of items)
  {
    if(l.startsWith( this.state.title) )
    {
      console.log(l)
      this.setState({myClass: 'item-x'})
    
      
      
    }
    
  }
}




  return(
    <div className="header">
      
      
       <div>
         

        
        <h1>Search</h1>
     
       <Demo data={this.ele} />

        
   

         
       </div>
           
       
         
    </div>
  )
}
}

export default App;
