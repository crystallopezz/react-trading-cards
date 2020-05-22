"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <p>Hello user!</p>
        <a href='/cards'>cards page</a>
        <img src='/static/img/balloonicorn.jpg'/>
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));