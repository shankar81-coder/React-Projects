import { useContext } from "react";
import Accordian from "../Accordian/App";
import LightDarkMode from "../Light-Dark/App";
import RandomColorGenerator from "../RandomColor/App";
import TicTacToeBoard from "../TicTacToe/App";
import TreeView from "../Tree-View/App";
import { FeatureFlagsContext } from "./Child";


export default function FeatureFlag() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentRender = [
    {
      key: "showLightDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToeBoard />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColorGenerator />,
    },
    {
      key: "showAccordain",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView />,
    },
  ];


  function checkEnabledFlags(getCurrentFlag) {
    return enabledFlags[getCurrentFlag];
  }

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1>Featured Flags</h1>
      {componentRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null,
      )}
    </>
  );
}
