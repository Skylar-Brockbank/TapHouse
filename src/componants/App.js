import React from 'react';
import KombuchaList from './KombuchaList';
import KombuchaDetail from './KombuchaDetail';
import NewKombuchaForm from './NewKombuchaForm';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      MasterArray: [],
      MainContent: 'form',
      TargetIndex: 0
    };
  }

  render(){
    let main = null;
    if(this.state.MainContent === 'form'){
      main = <NewKombuchaForm 
        newItem = {this.handleNewKombucha}
      />;
    }else{
      main = <KombuchaDetail 
        target = {this.state.MasterArray[this.state.TargetIndex]}
        sell = {this.handleDecrement}
        restock = {this.setQuantity}
      />;
    }
    return (
      <React.Fragment>
        <h2>Page Title</h2>
        <div id='PrimaryDisplayArea'>
          <KombuchaList 
            list={this.state.MasterArray}
            new={this.setMainContent}
          />
          {main}
        </div>
      </React.Fragment>
      
    );
  }


  setQuantity = (index, qty) => {
    const transit = [...this.state.MasterArray];
    transit[index].quantity = qty;
    this.setState({
      MasterArray: transit
    });
  };

  handleDecrement = (index) => {
    const q = this.state.MasterArray[index]-1;
    this.setQuantity(index,q);
  };

  handleNewKombucha = (entry) => {
    const transit = [...this.state.MasterArray,entry];
    this.setState({
      MasterArray: transit
    });
  };

  setMainContent = (form, index) => {
    if(form){
      this.setState({
        MainContent: 'form'
      });
    }else{
      this.setState({
        MainContent: 'detail',
        TargetIndex: index
      });
    }
  };
}


export default App;
