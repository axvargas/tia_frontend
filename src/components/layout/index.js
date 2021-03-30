import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	AppBar,
	CssBaseline,
	Drawer,
	Hidden,
	IconButton,
	Toolbar,
	Menu,
	MenuItem,
	Box
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';


import DrawerContent from '../drawerContent';


// Styles imports
import useStyles from './style';
import { useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

// Context imports
// import AuthContext from '../../../context/auth/context';
const ResponsiveDrawer = ({ children }) => {

	//Extract Context
	// const authContext = useContext(AuthContext);
	// const { user, getAuthUser, signOutUser } = authContext;		//Va en un effect

	let history = useHistory();
	const classes = useStyles();
	const theme = useTheme();

	//Local state
	const [mobileOpen, setMobileOpen] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	//EFFECT
	// useEffect(() => {
	// 	getAuthUser();
	// 	// eslint-disable-next-line
	// }, []);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleSignOut = () => {
		handleClose();
		signOutUser();
		history.push('/sign-in');
	}
	const signOutUser = () => {
		console.log("signing out");
	}
	const user = {

	}
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>

					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
						Tia-Admin
          			</Box>
					<section className={classes.rightToolbar}>
						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit"

						>
							<AccountCircle />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={open}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>{user ? user.firstName : "User"}</MenuItem>
							<MenuItem onClick={handleSignOut}>Sign out</MenuItem>
						</Menu>
					</section>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden mdUp implementation="css">
					<Drawer

						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						<DrawerContent handleDrawerToggle={handleDrawerToggle} />
					</Drawer>
				</Hidden>
				<Hidden smDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						<DrawerContent handleDrawerToggle={handleDrawerToggle} />
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{children}

			</main>
		</div>
	);
}

ResponsiveDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default ResponsiveDrawer;