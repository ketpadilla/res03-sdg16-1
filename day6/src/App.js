import logo from './logo.svg'
import './App.css'
import PostList from './posts/postlist'
import PostSearch from './posts/postsearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Hello!
        <div>
          <PostSearch/>
        </div>
        <p>
          <PostList/>
        </p>
      </header>
    </div>
  );
}

export default App;
