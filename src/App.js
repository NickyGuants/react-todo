import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
        <Header />
        <Form />
        <TodoList />
        <Counter />
    </div>
  );
}

export default App;
