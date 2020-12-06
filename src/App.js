import React from 'react';
import { Home } from "./pages";

import { Route} from 'react-router-dom';
import { Company, Services, Management, Agency, Contacts, Projects, Appeal, Team, Charity, Career, Craft, Dom, Energy, Resource } from './components/index';


function App() {

  return (
    <div className="page">
    <Route path="/" component={Home} exact />
    <Route path="/company" component={Company} exact />
    <Route path="/services" component={Services} exact />
    <Route path="/management" component={Management} exact />
    <Route path="/agency" component={Agency} exact />
    <Route path="/contacts" component={Contacts} exact />
    <Route path="/projects" component={Projects} exact />
    <Route path="/company/appeal" component={Appeal} exact />
    <Route path="/company/team" component={Team} exact />
    <Route path="/company/charity" component={Charity} exact />
    <Route path="/company/career" component={Career} exact />
    <Route path="/projects/craft" component={Craft} exact />
    <Route path="/projects/dom" component={Dom} exact />
    <Route path="/projects/energy" component={Energy} exact />
    <Route path="/projects/resource" component={Resource} exact />

    </div>
  )
}


export default App;
