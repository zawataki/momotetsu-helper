import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        桃鉄ヘルパー for <span className="App-title">桃太郎電鉄 ～昭和 平成 令和も定番！～</span>
        </p>
      </header>
      <main>
        main part
      </main>
      <footer className="App-footer">
        <p>このページのソースコードは
          <a className="App-link"
            href="https://github.com/zawataki/momotetsu-helper"
            target="_blank"
            rel="noopener noreferrer">
            GitHubで公開しています
          </a><br />
          &copy; <a className="App-link"
            href="https://github.com/zawataki"
            target="_blank"
            rel="noopener noreferrer">
            Yuki Takizawa
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
