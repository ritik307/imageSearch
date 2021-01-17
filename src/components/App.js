import React from "react";
//import axios from "axios";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component{
    state={images:[]};
    onSearchSubmit=async (content)=>{
        console.log(content);
        const response=await unsplash.get("search/photos",{
            params:{
                query:content
            }
        })
        this.setState({images:response.data.results});
    }


    render(){
        return(
            <div className="ui container">
                {/* Sending a function reference as a prop to our SearchBar.js so that we can
                    send data back to our parent */}
                {/* Unlike forms and divs we can name anything to our props variable 
                    unlike variables we pass functions within {} and in class we use this operator
                    to refer our variables*/}
                <SearchBar submitData={this.onSearchSubmit}/>
                {/* for the first time the length is 0 bcz the first time this belongs to the
                    class App but when it rerenders it was rendered not directly the onSearchSubmit
                    was called from form tag's onSubmit's onFormSumit's prop so now this keyword belongs to onSubmit
                    prop with dosnt have state to fix this we have applied => function*/}
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
            
        );
    }
    
}

export default App;