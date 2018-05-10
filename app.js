var App = () => (
  <div>
    <GroceryList list = {['eggs', 'spinach']} />
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.list.map(item => 
      <GroceryListItem item = {item} />)}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      done: false,
      hover: false
    };
  }
  
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  
  onListItemOn() {
    this.setState({
      hover: true
    })
  }
  
  onListItemOff() {
    this.setState({
      hover: false
    })
  }

  render() {
    
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal',
    };
    
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onListItemOn.bind(this)} onMouseLeave={this.onListItemOff.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));