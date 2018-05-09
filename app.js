var GroceryList = () => {
  return (
    <div>
      {/* <Eggs />
      <Spinach /> */}
      <GroceryListItem list = {list} />
    </div>
  )
};

// var Eggs = () => (
//   <li>eggs</li>
// );

// var Spinach = () => (
//   <li>spinach</li>
// );

const list = ['eggs', 'spinach'];

var GroceryListItem = (props) => {
  const list = props.list;
  const listItems = list.map((item) =>
    <li key = {item}>{item}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

ReactDOM.render(<GroceryList />, document.getElementById("app"));