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
import DynamicColor from './useState/DynamicColor'
import ClickHistory from './useState/ClickHistory'
import LogEffect from './useEffect/LogEffect'
import FetchUser from './useEffect/FetchUser'
import Clock from './useEffect/Clock'
import ScrollLogger from './useEffect/ScrollLonger'
import DynamicTitle from './useEffect/DynamicTitle'
import PersistCounter from './useEffect/PersistCounter'
import { LanguageContext } from './useContext/LanguageContext'
import LanguageToggle from './useContext/LanguageToggle'
import { useState } from 'react'
import { LoginContext } from './useContext/LoginContext'
import LoginStatus from './useContext/LoginStatus';
import FocoAutomatico from './useRef/FocoAutomatico'
import CirculoColorido from './useRef/CirculoColorido'
import ScrollDemo from './useRef/ScrollDemo'
import ReproductorSonido from './useRef/ReproductorSonido'
import MoverCaja from './useRef/MoverCaja'
import ExpensiveCalc from './useMemo/ExpensiveCalc'
import FiltroLista from './useMemo/FiltroLista'
import SafeFetch from './useEffect/SafeFetch'
import TablaOrdenada from './useMemo/TablaOrdenada'
import PrimosMemo from './useMemo/PrimosMemo'
import ContadorLetras from './useMemo/ContadorLetras'
import Contador from './useCallBack/Contador'
import Padre from './useCallBack/Padre'
import Saludo from './useCallBack/Saludo'
import BotonMemoProps from './useCallBack/BotonMemoProps'
import Lista from "./useCallBack/Lista";
import ContadorReducer from './useReducer/ContadorReducer'
import FormularioReducer from './useReducer/FormularioReducer'
import ListaReducer from './useReducer/ListaReducer'
function App() {
  const userData = { name: "Carlos", apellido: "Garcia", age: 30, direccion: "10 de Agosto", telefono: "0995678839" };
  const [lang, setLang] = useState('es');
  const toggleLanguage = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn(prev => !prev);
  const elementos = ["uno", "dos", "tres", "cuatro"];
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <>
      <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <LanguageToggle />
      </LanguageContext.Provider>
      <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
      <LoginStatus />
      </LoginContext.Provider>
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
      <DynamicColor/>
      <ClickHistory/>
      <LogEffect/>
      <FetchUser/>
      <Clock/>
      <ScrollLogger/>
      <SafeFetch/>
      <DynamicTitle/>
      <PersistCounter/>
      <FocoAutomatico/>
      <CirculoColorido/>
      <ScrollDemo/>
      <ReproductorSonido/>
      <MoverCaja/>
      <ExpensiveCalc/>
      <FiltroLista/>
      <TablaOrdenada/>
      <PrimosMemo/>
      <ContadorLetras/>
      <Contador/>
      <Padre/>
      <Saludo/>
      <>
      <h2>Ejemplo de Lista</h2>
      <Lista items={elementos} />
      </>
      <BotonMemoProps onClick={handleClick} />
      <ContadorReducer/>
      <FormularioReducer/>
      <ListaReducer/>
    </>
  );
}
export default App;

