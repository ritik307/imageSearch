import React from "react";

class SearchBar extends React.Component{
    state={content:""}
    
    // onChangeInput(e){
    //     console.log(e.target.value);
    //     //this.setState({content:e.target.value});
    //     this.setState({content:e.target.value});
    // }

    //the normal function provide a broken this operator
    //so here with using default function will cause error
    //onFormSumit(event){

    //so now we use the => operator which make sure that 
    //"this" will always binds to class
    onFormSumit=(event)=>{
        event.preventDefault();
        
        //WILL SHOW ERROR if we use the "onFormSubmit(event)" refer notes for the same
        console.log(this.state.content);

        //inside class we refer props with this operator
        this.props.submitData(this.state.content);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSumit}>
                    <div className="field">
                        <label>Image search</label>
                        {/* we do not put on a set of parentheses "()" when
                        ever we pass a callback function to an event handler like
                        onChange */}
                        
                        {/* UNCONTROLLED */}
                        
                        {/* BOTH THE BELOW STATEMENTS FOR EVENT HANDLING IS SAME*/}
                        {/* <input type="text" placeholder="search" onChange={(e)=>{console.log(e.target.value)}}></input> */}
                        {/* <input type="text" placeholder="search" onChange={this.onChangeInput}></input> */}
                        
                        {/* CONTROLLED */}
                        
                        <input type="text" 
                            placeholder="search"
                            value={this.state.content}
                            
                            onChange={(e)=>{
                                    this.setState({content:e.target.value})
                                }
                            }
                        />       
                    </div>
                    
                </form>
            </div>   
        );
    }
}

export default SearchBar;