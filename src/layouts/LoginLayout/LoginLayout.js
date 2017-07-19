import React from 'react'
import PropTypes from 'prop-types'
import './LoginLayout.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Utils from '../../utils/Utils';
import lightBlue700 from 'material-ui/styles/colors'
import lightBlue400 from 'material-ui/styles/colors'
import {injectIntl} from 'react-intl';


const muiTheme = getMuiTheme({
	fontFamily: 'Lato,Ubuntu,sans-serif',
	fontSize: 14,
	palette: {
		primary1Color: lightBlue700,
		primary2Color: lightBlue400,
		accent1Color: '#2abc73'
	},
	menuItem: {
		selectedTextColor: '#03A9F4',
	},
	appBar: {
		height: 120,
	},
	toolbar: {
		titleFontSize: 16,
	}
});


export const PageLayout = ({children, intl}) => (
	<MuiThemeProvider muiTheme={muiTheme}>
		<div dir={intl.formatMessage({id: 'layout.direction'})}>
			<div className='' style={{minHeight:'100vh'}}>
				<div className='page-layout__viewport'>
					{children}
				</div>
			</div>
		</div>
	</MuiThemeProvider>
)
PageLayout.propTypes = {
	children: PropTypes.node,
}

export default injectIntl(PageLayout)
