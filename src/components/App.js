// baseUI setup
// see: https://baseweb.design/getting-started/setup/
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import { Route, Switch } from "react-router-dom";

import Header from './Header.js';
import About from './About.js';
import Events from './Events.js';
import Blog from './Blog.js';
import Join from './Join.js';
import Resources from './Resources.js';

const engine = new Styletron();

const App = () => {

  return (
    <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
        
        <Header />

        <Switch>

          <Route exact path="/events">
            <Events /> 
          </Route>
        
          <Route exact path="/blog">
            <Blog />
          </Route>

          <Route exact path="/join">
            <Join />
          </Route>

          <Route exact path="/resources">
            <Resources />
          </Route>

          <Route exact path="/">
            <About />
          </Route>

        </Switch>

      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
