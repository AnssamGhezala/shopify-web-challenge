### Header
  - width: 100vw 
  - height: 95px


## SearchBar
 - has some paddding
 - contains:

 ```
  handleSubmit = (e) => {
    e.preventDeault(); 
    this.props.handleSearch(e.target.value);
  }

   <form onSubmit={this.handleSubmit}>
      <input name="search" placeholder="" value={this.state.search} onChange={this.handleSearchChange} />
      <button type="submit">
        <SearchIcon />
      </button>
   </form>
```

- display: flex; 

### SearchInput 
- flex: 1; 
- padding: 

### SubmitButton 
- margin-left: 


## App
class App extends React.Component {
  state = {
    results: [],
    favourites: [],
    search: ''
  }

  handleSearch = e => ...

  render() {
    return (
      <div>
        <header />
        <SearchBar search={this.state.search} onSearch={this.handleSearch} />
        <Grid data={this.state.results} />
        <Grid data={this.state.favourites} />
      </div>
    );
  }
}

## Results
```
class Results extends React.Component {
  render() {
    <Grid data={this.props.results} />
  }
}
```

## Favourites
```
class Results extends React.Component {
  render() {
    <Grid data={this.props.favourites}>
  }
}
```

## Grid component
```
function Grid(props) {
  return (
      <div className='grid-container'>
        {
          this.props.data.map(item => (
              <>
                <div>
                  <Star />
                  {item.title}
                </div>
                <div>{item.body}</div>
              </Star>
          ));
        }
      </div>
  );
}
```
```
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```


# GOALS
[] complete the view
[] solve the problem with rendering the body
[] render with real data 
[] search functionality
[] favourite functionality 