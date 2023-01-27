import Todo from "./component/Todo";
import Modal from "./component/Modal";
import Backdrop from "./component/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="aaaaaaaaaaaaaaa" />
      <Todo text="bbbbbbbbbbbbb" />
      <Todo text="cccccccc" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
