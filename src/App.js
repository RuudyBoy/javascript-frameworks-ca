import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SportPost from "./components/SportPosts";
import SportInfo from "./components/SportInfo";
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
					<Route path='/' exact component={SportPost} />
					<Route path='/detail/:id' component={SportInfo} />
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