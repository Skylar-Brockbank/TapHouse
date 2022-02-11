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
      console.log(this.state.TargetIndex)
      main = <KombuchaDetail
        dex={this.state.TargetIndex}
        target = {this.state.MasterArray[this.state.TargetIndex]}
        sell = {this.handleDecrement}
        restock = {this.setQuantity}
      />;
    }
    return (
      <React.Fragment>
        <h1 id='title'>Page Title</h1>
        <div id='PrimaryDisplayArea'>
          <KombuchaList 
            list={this.state.MasterArray}
            newItem={this.setMainContent}
          />
          <div id='main'>
            {main}
          </div>
        </div>
      </React.Fragment>
      
    );
  }


  setQuantity = (index, qty) => {
    const transit = [...this.state.MasterArray];
    transit[index].qty = qty;
    this.setState({
      MasterArray: transit
    });
  };

  handleDecrement = (index) => {
    console.log(index)
    const q = this.state.MasterArray[index];
    // q.qty = parseInt(q.qty)-1;
    this.setQuantity(index,q.qty-1);
  };

  handleNewKombucha = (entry) => {
    const transit = [...this.state.MasterArray,entry];
    this.setState({
      MasterArray: transit
    });
  };

  setMainContent = (view, index) => {
    console.log(this.state.MasterArray);
    if(view==='form'){
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
