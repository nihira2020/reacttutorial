import logo from './logo.svg';
import './App.css';
import AppHeader from './Appheader';
import { useState,useEffect } from 'react';
import Bloglist from './Bloglist';

function App() {
  const couse = "React js"
  const [blogdata, change] = useState([
    { 'id': '1', 'title': 'Angular', 'desc': 'this content described about angular', 'author': 'jhon' },
    { 'id': '2', 'title': 'reactjs', 'desc': 'this content described about reactjs', 'author': 'rishan' },
    { 'id': '3', 'title': 'dot net core', 'desc': 'this content described about dot net core', 'author': 'jhon' },
    { 'id': '4', 'title': 'jQuery', 'desc': 'this content described about jQuery', 'author': 'rishan' },
    { 'id': '5', 'title': 'sql', 'desc': 'this content described about Sql', 'author': 'rishan' }
  ]);
  const[header,headchange]=useState("React class");
  const FunctionDelete = (id) => {
    // const newlist = blogdata.filter(item => item.id != id);
    // change(newlist)
    headchange("React");

    console.log(header)

  }
  useEffect(()=>{
    console.log('use effect');
  },[blogdata,header])
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader title="Welcome Nihira Techiees" course={couse}></AppHeader>
        {/* <Bloglist blog={blogdata.filter(item=>item.author=='rishan')} author="Author is Rishan" />
        <Bloglist blog={blogdata.filter(item=>item.author=='jhon')} author="Author is Jhon" /> */}
        <Bloglist blog={blogdata} author="All blogs" FunctionDelete={FunctionDelete} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
