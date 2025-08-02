import logo from './logo.svg';
import './App.css';
import Header from './Mycomponent/Header';
import Footer from './Mycomponent/Footer';
import Todoslist from './Mycomponent/Todoslist';
import Todolist from './Mycomponent/Todolist';

function App() {

  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      decc: "Get some groceries"
    },
    {
      sno: 2,
      title: "Go to the mall",
      decc: "Buy clothes"
    },
    {
      sno: 3,
      title: "Go to Lahore",
      decc: "Meet Ali"
    }
  ];

  return (
    <>
      <Header title="My Todos List" />
      <Todoslist todos={todos} />
         {/* <Todolist /> ← yeh line ab comment ho gayi hai */}
      <Footer />
    </>
  );
}

export default App;
