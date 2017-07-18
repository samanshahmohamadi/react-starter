import React from 'react'
import './Facts.scss'
import {FlatButton} from 'material-ui'
import MomentJal from 'moment-jalaali'
import Utils from '../../../utils/Utils'
import {injectIntl} from 'react-intl';
import {browserHistory} from 'react-router'
import MyLoader from '../../../components/MyLoader'

let Loader = require('react-loaders').Loader;
const utils = new Utils()

class FactsView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	componentDidMount() {
		this.getData()
	}

	getData() {
		this.setState({loading: true})
		this.props.getFacts()
			.then(() => {
				this.setState({loading: false})
			})
	}

	render() {
		if (!this.state.loading && this.props.facts) {
			return (
				<div className={''} style={{height: '100%', overflowY: 'hidden', overflowX: 'auto'}}>
					<div style={{fontSize:'30px', textAlign:'justify'}}>
						{this.props.facts.quote}
					</div>
					<div style={{marginTop:'20px', fontWeight:'bold', fontSize:'25px', color:'#d6d6d6', float:'right'}}>
						{this.props.facts.author}
					</div>
				</div>
			)
		} else {
			return <MyLoader/>
		}
	}
}

export default injectIntl(FactsView)

