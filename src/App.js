import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SportList from "./components/SportList";
import SportDetail from "./components/SportDetail";
import Contact from "./components/contact/Contact";
import LoginPage from "./components/login/LoginPage";
import AdminPage from "./components/admin/AdminPage";
import Nav from "./components/layout/Nav";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Nav />

				<div className="container">
					<Switch>
					<Route path='/' exact component={SportList} />
					<Route path='/detail/:id' component={SportDetail} />
						<Route path="/login">
							<LoginPage />
						</Route>
						<Route path="/admin" exact>
							<AdminPage />
						</Route>
						<Route path="/contact"> <Contact /> </Route>
					</Switch>
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;