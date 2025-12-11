import Greeting from './props/Greeting'
import UserCard from './props/UserCard'
import Promedio from './components/Promedio'
import ButtonOne from './props/ButtonOne'
import ParentButtonOne from './props/ParentButtonOne'
import IncrementButton from './props/IncrementButton'
import ParentIncrementButton from './props/ParentIncrementButton'
import ParentInputNotifier from './props/ParentInputNotifier'
import InputNotifier from './props/InputNotifier'
import ParentUserList from './props/ParentUserList'
import ParentLoginForm from './props/ParentLoginForm'
import HoverFont from './useState/HoverFont'
import HoverFont_mp from './useState/HoverFont_mp'
import AccessWithLimit from './useState/AccessWithLimit'
import AccessWithLimit_mp from './useState/AccessWithLimit_mp'
import DocumentTitleChanger from './useState/DocumentTitleChanger'
import DocumentTitleChanger_mp from './useState/DocumentTitleChanger_mp'
import PostLikes from './useState/PostLikes'
import PostLikes_mp from './useState/PostLikes_mp'
import CheckboxSummary from './useState/CheckboxSummary'
import CheckboxSummary_mp from './useState/CheckboxSummary_mp'
import LoginWithLimit from './useState/LoginWithLimit'
import LoginWithLimit_mp from './useState/LoginWithLimit_mp'
import LanguageSwitcher from './useState/LanguageSwitcher'
import LanguageSwitcher_mp from './useState/LanguageSwitcher_mp'
import MultiSwitch from './useState/MultiSwitch'
import MultiSwitch_mp from './useState/MultiSwitch_mp'

function App() {
  const userData = { name: "Carlos", apellido: "Garcia", age: 30, direccion: "10 de Agosto", telefono: "0995678839" };
  return (
    <>
      <Greeting name="Francisco" />
      <Greeting name="Ana" />
      <UserCard user={userData} />
      <Promedio/>
      <ButtonOne/>
      <ParentButtonOne/>
      <IncrementButton/>
      <ParentIncrementButton/>
      <InputNotifier/>
      <ParentInputNotifier/>
      <ParentUserList/>
      <ParentLoginForm/>
      <HoverFont/>
      <HoverFont_mp/>
      <AccessWithLimit/>
      <AccessWithLimit_mp/>
      <DocumentTitleChanger/>
      <DocumentTitleChanger_mp/>
      <PostLikes/>
      <PostLikes_mp/>
      <CheckboxSummary/>
      <CheckboxSummary_mp/>
      <LoginWithLimit/>
      <LoginWithLimit_mp/>
      <LanguageSwitcher/>
      <LanguageSwitcher_mp/>
      <MultiSwitch/>
      <MultiSwitch_mp/>
    </>
  );
}
export default App;
