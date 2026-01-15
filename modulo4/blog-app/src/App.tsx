/*import type { JSX } from 'react'
import './App.css'
import BasicButtons from './lab/BasicButtons'
import BasicTable from './lab/BasicTable'
import ColorSwitches from './lab/ColorSwitches'
import TestMUI from './lab/TestMUI'

export default function App(): JSX.Element {

  return (
    <>
      <BasicButtons/>
      <ColorSwitches/>
      <BasicTable/>
      <TestMUI/>
    </>
  )
}*/
import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes";
import type { JSX } from "react";

export default function App(): JSX.Element {
  const routes = useRoutes(appRoutes);
  return <>{routes}</>;
}

