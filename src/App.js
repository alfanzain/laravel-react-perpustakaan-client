import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import LayoutRoute from './components/Router/LayoutRoute'
// Layout
// import Layout from './containers/layouts'
import AuthLayout from './containers/layouts/AuthLayout'
import DashboardLayout from './containers/layouts/DashboardLayout'
// Page
import LoginPage from './containers/pages/login'
import BookListPage from './containers/pages/book/list'
import BookFormPage from './containers/pages/book/form'
import UserListPage from './containers/pages/user/list'	
import UserFormPage from './containers/pages/user/form'	
import PeminjamanListPage from './containers/pages/peminjaman/list'	
import PeminjamanFormPage from './containers/pages/peminjaman/form'	

class App extends Component {

	render() {
		return(
			<Router>
				<Switch>
					<LayoutRoute exact path="/" layout={AuthLayout} component={LoginPage} />

					{/* Book */}
					<LayoutRoute exact path="/book" layout={DashboardLayout} component={BookListPage} />
					<LayoutRoute path="/book/create" layout={DashboardLayout} component={BookFormPage} />
					<LayoutRoute path="/book/:id/edit" layout={DashboardLayout} component={BookFormPage} />

					{/* User */}
					<LayoutRoute exact path="/user" layout={DashboardLayout} component={UserListPage} />
					<LayoutRoute path="/user/create" layout={DashboardLayout} component={UserFormPage} />
					<LayoutRoute path="/user/:id/edit" layout={DashboardLayout} component={UserFormPage} />

					{/* User */}
					<LayoutRoute exact path="/peminjaman" layout={DashboardLayout} component={PeminjamanListPage} />
					<LayoutRoute path="/peminjaman/create" layout={DashboardLayout} component={PeminjamanFormPage} />
					<LayoutRoute path="/peminjaman/:id/edit" layout={DashboardLayout} component={PeminjamanFormPage} />

				</Switch>
			</Router>			
		)
	}

}

export default App;