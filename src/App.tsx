import Promedio from "./components/Promedio";
import Greeting from "./props/Greeting";
import UserCard from "./props/UserCard";
import ParentButtonOne from "./props/ParentButtonOne";
import ParentIncrementButton from "./props/ParentIncrementButton";
import ParentInputNotifier from "./props/ParentInputNotifier";
import ParentLoginForm from "./props/ParentLoginForm";
import ParentUserList from "./props/ParentUserList";

function App() {
const userData = { name: "Carlos", apellido: "Silva", age: 30, direccion: "Av.Cotocollao", telefono: 0987425698 };
  return (
    <>
      <Greeting name="Francisco" />
      <Greeting name="Ana" />
      <Promedio/>
      <UserCard user={userData} />
      <ParentButtonOne/>
      <ParentIncrementButton/>
      <ParentInputNotifier/>
      <ParentLoginForm/>
      <ParentUserList/>
    </>
  );
}
export default App