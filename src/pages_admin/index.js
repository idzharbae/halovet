import Breadcrumbs from '@trendmicro/react-breadcrumbs';
import { Button, ButtonGroup } from '@trendmicro/react-buttons';
import Dropdown, { MenuItem } from '@trendmicro/react-dropdown';
import ensureArray from 'ensure-array';
import React, { Component } from 'react';
import styled from 'styled-components';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Alert } from 'react-bootstrap';
import update from 'immutability-helper';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '@trendmicro/react-breadcrumbs/dist/react-breadcrumbs.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';

import * as Pages from './pages';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';

const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: 'home',
            expanded: false,
            alertMessage: [
            ]
        };
    }
    

    onSelect = (selected) => {
        this.setState({ selected: selected });
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    pageTitle = {
        'home': 'Home',
        'devices': ['Devices'],
        'reports': ['Reports'],
        'settings/policies': ['Settings', 'Policies'],
        'settings/network': ['Settings', 'Network']
    };

    renderBreadcrumbs() {
        const { selected } = this.state;
        const list = ensureArray(this.pageTitle[selected]);

        return (
            <Breadcrumbs>
                {list.map((item, index) => (
                    <Breadcrumbs.Item
                        active={index === list.length - 1}
                        key={`${selected}_${index}`}
                    >
                        {item}
                    </Breadcrumbs.Item>
                ))}
            </Breadcrumbs>
        );
    }

    navigate = (pathname) => () => {
        window.location.href = pathname;
    };
    renderButtonGroups(){
        return(
            <ButtonGroup>
                <Button btnStyle="flat" onClick={this.navigate('/')}>
                    Home
                </Button>
                {/* <Button btnStyle="flat" onClick={this.navigate('devices')}>
                    Devices
                </Button>
                <Button btnStyle="flat" onClick={this.navigate('reports')}>
                    Reports
                </Button>
                <Dropdown>
                    <Dropdown.Toggle>
                        Settings
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <MenuItem onClick={this.navigate('settings/policies')}>
                            Policies
                        </MenuItem>
                        <MenuItem onClick={this.navigate('settings/network')}>
                            Network
                        </MenuItem>
                    </Dropdown.Menu>
                </Dropdown> */}
            </ButtonGroup>
        );
    }
    renderSideNav(location, history, selected){
        return (<SideNav 
                onSelect={(selected) => {
                    this.setState({ selected: selected });
                    const to = '/admin' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }} 
                onToggle={this.onToggle}>
                    <SideNav.Toggle />
                    <SideNav.Nav selected={selected}>
                        <NavItem eventKey="/">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Home">
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/articles">
                            <NavIcon>
                                <i className="fa fa-fw fa-chart-line" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Devices">
                                Devices
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/appointments">
                            <NavIcon>
                                <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Reports">
                                Reports
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/settings">
                            <NavIcon>
                                <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.5em', verticalAlign: 'middle' }} />
                            </NavIcon>
                            <NavText style={{ paddingRight: 32 }} title="Settings">
                                Settings
                            </NavText>
                            <NavItem eventKey="/settings/policies">
                                <NavText title="Policies">
                                    Policies
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="/settings/network">
                                <NavText title="Network">
                                    Network
                                </NavText>
                            </NavItem>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>);
    }
    addAlert(message, variant){
        this.setState({
          alertMessage: update(
              this.state.alertMessage, {
                  $push : [
                      {
                          message: message, 
                          show: true,
                          variant: variant
                      }
                  ] 
              })
        })
      }
    
      closeAlert(index){
        this.setState({
          alertMessage: update(
              this.state.alertMessage, { 
                  // index harus di kurungin gini kalau pakai variable
                  [index] : {
                      $set: { 
                          show:false 
                      } 
                  } 
              } )
        })
      }
      
      renderAlert(val, index){
          return <Alert 
              hidden={ !val.show }
              variant={ val.variant }
              key={ index } 
              dismissible 
              onClose={ () => this.closeAlert(index) }>{ val.message } </Alert >;
      }
    render() {
        const { expanded, selected } = this.state;
        const {alertMessage} = this.state;
        console.log('alertMessage');
        console.log(alertMessage);
        return (
            <div>
                <div
                    style={{
                        marginLeft: expanded ? 240 : 64,
                        padding: '15px 20px 0 20px'
                    }}
                >
                {this.renderButtonGroups()}
                </div>
                <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
                {this.renderSideNav(location, history, selected)}
                <Main expanded={expanded}>
                    {this.renderBreadcrumbs()}
                    { alertMessage.map( (val, index) => this.renderAlert(val, index) )}
                    <Switch>
                        <Route path="/admin/articles" component={() => {
                            return <Pages.Posts addAlert={this.addAlert.bind(this)} />;
                        }} />
                        <Route path="/admin/appointments" component={() => {
                            return <Pages.Appointments addAlert={this.addAlert.bind(this)} />;
                        }} />
                        <Route path="/admin" component={() => {
                            return <Pages.Dashboard />
                        }} />
                    </Switch>
                </Main>
                </React.Fragment>
                )}
                />
            </Router>
            </div>
        );
    }
}

export default Admin;