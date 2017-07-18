/**
 * Created by saman on 6/6/17.
 */
import React from 'react';
import {connect} from 'react-redux'
import {IndexLink} from 'react-router'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import HttpRequest from '../utils/HttpRequest'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import SideDrawer from './Drawer'
import largeLogo from '../../public/logo.png'
import PropTypes from 'prop-types'
import {injectIntl, intlShape} from 'react-intl';
import {browserHistory, withRouter} from 'react-router'
import { push } from 'react-router-redux';
import {Link} from 'react-router'


// import {localeChange} from '../store/locale'
import {actions as localeActions} from '../store/locale'

const Config = require('Config')

const mapStateToProps = (state) => ({
	locale: state.locale
})



import Snackbar from 'material-ui/Snackbar';


class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			snackOpen: false,
			searchParam: ''
		};
	}

	onClick = () => {
		this.Drawer.handleToggle() // do stuff
	}

	handleLangChange = (e, index, value) => {
		this.props.localeChange(value)
	}

	paramChange = (e) => {
		this.setState({searchParam: e.target.value})
	}

	componentDidMount() {
	}

	search = (e) => {
		e.preventDefault();
		new HttpRequest().get(Config.apiUrl + "/search", {param: this.state.searchParam.toString()})
			.then(payload => {
				console.log(payload)
			})
			.catch(err => {
				this.setState({snackOpen: true, searchParam: ''})
				setTimeout(() => {
					this.setState({snackOpen: false})
				}, 4000)
			})
	}


	render() {
		return (
			<Toolbar className="navbar">
				<ToolbarGroup dir={this.props.intl.formatMessage({id: 'layout.direction'})} className="col-md-12 col-lg-12 col-xl-12 col-xs-12 col-sm-12">
					<div className="col col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
						<IndexLink to="/" activeClassName="active">
							<img className="navbar-logo" src={largeLogo}/>
						</IndexLink>
					</div>
					<div
						className="col navbar-ver-center col-3 col-md-3 col-lg-3 col-xl-3 col-xs-3 col-sm-3 visible-md visible-lg visible-xl hidden-xs hidden-sm hidden-md"
						style={{textAlign: 'center'}}>
						<Link to="/facts">FACTS</Link>
					</div>
					<div className="col navbar-ver-center col-sm-3 col-md-3 col-lg-3 col-xl-3 hidden-xs">
						<form onSubmit={this.search.bind(this)}>
							<TextField
								value={this.state.searchParam}
								onChange={this.paramChange}
								className="col-xs-12 navbar-search"
								hintText={this.props.intl.formatMessage({id: 'search'})}
								hintStyle={{textAlign: 'left'}}
								style={{WebkitTextFillColor: 'white!important'}}
							/>
						</form>
					</div>
					<div
						style={{padding:0}}
						className="col col-3 col-md-3 col-lg-3 col-xl-3 col-xs-3 col-sm-3 visible-xs visible-extra-small hidden-sm hidden-md hidden-lg hidden-lg-up">
						<SideDrawer onRef={ref => (this.child = ref)}/>
					</div>
				</ToolbarGroup>
				<Snackbar
					open={this.state.snackOpen}
					message={this.props.intl.formatMessage({id: 'snack.search_not_found'})}
					autoHideDuration={4000}
				/>
			</Toolbar>

		);
	}

	static propTypes = {
		locale: PropTypes.string.isRequired,
		localeChange: PropTypes.func.isRequired,
		intl: intlShape.isRequired,
	}

	static contextTypes = {
		router: PropTypes.object,
	};

}
Navbar.contextTypes = {
	router: PropTypes.object.isRequired
}

export default connect(mapStateToProps, Object.assign({}, localeActions))(injectIntl(withRouter(Navbar)))