import './App.css';
import Content from './components/Content';
import WithTheme from './components/WithTheme'




function App() {
  const Wrapp=WithTheme(Content);
  
  return (

    <div className="App">
      <Wrapp/>
    </div>
  );
}

export default App;
