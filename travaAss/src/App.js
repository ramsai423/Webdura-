import * as React from 'react';
import "./App.css";
import Services from "./components/services"
import Request from "./components/request"
import Payments from "./components/payments"
import { BrowserRouter, Route} from 'react-router-dom';
import { Switch } from 'react-router';
import Welcome  from "./components/welcome";
import Thankyou from './components/Thankyou';
class App extends React.Component {
  render() {
	 return (
		<div class='card mb-3'>
		  <BrowserRouter>
			 <Switch>
				<Route exact path="/" component={Welcome} />
				<Route exact path="/request" component={Request} />
				<Route exact path="/service" component={Services} />
				<Route exact path="/payments" component={Payments} />
				<Route exact path="/thankyou" component={Thankyou} />

			 </Switch>
		  </BrowserRouter>

		</div>
	 );
  }
}
export default App
