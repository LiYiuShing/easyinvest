import React from 'react';
import {Link as RouterLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { signOutStart } from '../../redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Link} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import './header.styles.css';

class Header extends React.Component {

    state = {
        anchor: null,
        redirect: false
    };

    handleMenu = event => {
        this.setState({ anchor: event.currentTarget });
    }

    handleMenuClose = () => {
        this.setState({ anchor: null })
    }

    render() {
        const { anchor } = this.state;
        const open = Boolean(anchor);

        return (
            <div className="root">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className="grow">
                            EASYINVEST
                        </Typography>
                        <IconButton
                            aria-owns={open ? "menu-appbar" : undefined}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >    
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchor}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={open}
                            onClose={this.handleMenuClose}
                        >
                            <Link
                                component={RouterLink}
                                to={'/'}
                                style={{ textDecoration: "none" }}
                            >
                                <MenuItem onClick={this.handleMenuClose}>Home</MenuItem>
                            </Link>
                            { this.props.currentUser ? (
                                    <MenuItem onClick={this.props.signOutStart}>SignOut</MenuItem>
                                ) : (
                                    <Link 
                                        component={RouterLink}
                                        style={{ textDecoration: "none" }}
                                        to={'/signin'}
                                    >
                                        <MenuItem onClick={this.handleMenuClose}>SignIn</MenuItem>
                                    </Link>
                                )
                            }
                        </Menu>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);