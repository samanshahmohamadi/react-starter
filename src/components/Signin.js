/**
 * Created by saman on 7/15/17.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class Signin extends React.Component {
	state = {
		open: false,
		username: '',
		password: '',
		isLogin: false
	};

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	handleSingin = () => {
		this.props.loginStateChange(true);
	};

	usernameChange = (e) => {
		this.setState({username: e.target.value})
	}
	passwordChange = (e) => {
		this.setState({password: e.target.value})
	}

	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.handleClose}
			/>,
			<FlatButton
				label="Singin"
				primary={true}
				keyboardFocused={false}
				onTouchTap={this.handleSingin}
			/>,
		];

		return (
			<div>
				<RaisedButton label="Dialog" onTouchTap={this.handleOpen}/>
				<Dialog
					title="Sing-in"
					actions={actions}
					modal={true}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<form >
						<div>
							<TextField
								value={this.state.username}
								onChange={this.usernameChange}
								className="col-xs-12 navbar-search"
								hintText="Username"
							/>
						</div>
						<div>
							<TextField
								value={this.state.password}
								onChange={this.passwordChange}
								className="col-xs-12 navbar-search"
								hintText="Password"
							/>
						</div>
					</form>
				</Dialog>
			</div>
		);
	}
}