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
  }

  render() {
    return (
      <li>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));