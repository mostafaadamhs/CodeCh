import React, {Component} from 'react';
import Contact from './Contact';
import './child';


 class ContactsList extends Component{

    
    constructor(props){
        super();
        this.state={
            search:'',
            style:'asd'
        }
    }

   

    updateSearch=(e) =>{
     
     this.setState({search:e.target.value.substr(0,10), style:'blue'});
     if(!e.target.value) this.setState({style: ''});
     

    }

    print(contacts){
        
             if(contacts.name === 'scott')
                     console.log(contacts.name);
            
      }
    render(){

      



        //
        let filterContacts = this.props.contacts.filter(
            (contact) => {
                  return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ;
                       
            }
        );
        let filterContactsItems = this.props.contacts.filter(
            (contact) => {
                contact.items.map(mp => console.log(mp));
                       
            }
        );

        let filterItems = this.props.contacts.map( mp => 
            {
                
                return mp.items; 
            });

       // let findContacts = this.props.contacts.find(this.print);
       

        return(
            
            <div>
                <input type="text" name="name" id="name" 
                value={this.setState.search} onChange={this.updateSearch.bind(this)}/>
                 <ul key={Math.random()}>
                    {
                       filterContacts.map((_contact) => {
                            // eslint-disable-next-line react/style-prop-object
                            
                            return  <Contact style={this.state.style} search ={this.state.search} original= {this.props.contacts} contact={_contact} key={_contact.id} />
                        })
                     

                      //this.props.contacts.name

                    },
                    
                  
               
               </ul>

               <ul>
                   
               </ul>
                   
               
              

              
               
            </div>

          
        )
    }

}

export default ContactsList;