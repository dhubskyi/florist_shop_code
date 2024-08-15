import React, { Component } from "react";
import Header from "./components/header";
import Display from "./components/itemsdisplay"
import Cart from "./components/cart"
class App extends Component {
  constructor(){
    super();
    this.state = {
      currentPage: "Welcome"
    }
  }
  //SWITCHING PAGES
  changePage(page){
    this.setState({currentPage: page});
  }
  //CONDITIONAL RENDERING
  render(){
    //LIST OF PRODUCTS PAGE
    if(this.state.currentPage == "Products"){
      document.body.style.backgroundImage = "none";
      return (
        <div>
          <Header changePageHandler={() => this.changePage("Cart")} changeMainPageHandler={() => this.changePage("Products")}/>
          <Display/>
        </div>
      );
    //SHOPPING CART PAGE
    }else if(this.state.currentPage == "Cart"){
      document.body.style.backgroundImage = "none";
      return(
        <div>
            <Header changePageHandler={() => this.changePage("Cart")} changeMainPageHandler={() => this.changePage("Products")}/>
            <Cart/>
        </div>
      )
    }else{
      //GREETING PAGE
      return(
        <div>
            <div id="infopage">
              <div id="welcome">
                <h1>Welcome to the Denys' florist mart!</h1>
                <h2>Here you will find a huge variety of plants from all over the world!</h2>
              </div>
              <p id="aboutme">
                This shop has been established by Mr Denys Hubskyi - a full-stack and AI developer living in Melbourne, Australia.
                Besides IT, one of Denys' hobbies is planting and horticulture - that is the reason why he has decided to open
                his own green shop. In here, you may find various plants from all over the world: from rainforests in Amazonia to savanas
                in South Africa and European grasslands. The shop is a small business operating in Melbourne, Australia, and is supplied
                by overseas partners from different geographic locations.
              </p>
            </div>
            <button style={{marginLeft:"2em"}} onClick={() => this.changePage("Products")}>Get started!</button>
        </div>
      )
    }
    
  }
}
export default App;