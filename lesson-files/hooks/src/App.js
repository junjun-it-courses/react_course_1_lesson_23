import React from "react";
import HookComponent from "./components/HookComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseContextComponent from './components/UseContextComponent'

import {WrapperContext} from "./context/WrapperContext";
import {THEME_CONFIG} from "./theme/config";


import UseRefComponent_1 from "./components/UseRefComponent_1";
import UseRefComponent_2 from "./components/UseRefComponent_2";


function App() {



  return (
    <div className="App">
      <HookComponent />
      <hr/>

      {/*<UseEffectComponent />*/}
      {/*<hr/>*/}

      {/*<WrapperContext.Provider value={THEME_CONFIG.dark}>*/}
      {/*  <UseContextComponent />*/}
      {/*</WrapperContext.Provider>*/}

      {/*<hr/>*/}
      {/*<UseRefComponent_1 />*/}

      {/*<hr/>*/}
      {/*<UseRefComponent_2 />*/}
    </div>
  );
}

export default App;
