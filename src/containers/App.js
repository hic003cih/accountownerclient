import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../components/ErrorPages/NotFound/NotFound';
//import OwnerList from './Owner/OwnerList/OwnerList';
import asyncComponent from '../hoc/AsyncComponent/AsyncComponent';
import InternalServer from '../components/ErrorPages/InternalServer/InternalServer';
import CreateOwner from './Owner/CreateOwner/CreateOwner';

const AsyncOwnerList = asyncComponent(() => {
  return import('./Owner/OwnerList/OwnerList');
});

const AsyncOwnerDetails = asyncComponent(() => {
  return import('./Owner/OwnerDetails/OwnerDetails');
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />

          {/* <Route path="/owner-list" component={OwnerList} /> */}

          <Route path="/owner-list" component={AsyncOwnerList} />
          
          <Route path="/ownerDetails/:id" component={AsyncOwnerDetails} />

          <Route path="/createOwner" component={CreateOwner} />

          <Route path="/500" component={InternalServer} />
         
          {/* 輸入不存在的URL地址時，應用程序將把他或她重定向到未找到的（404）組件 */}
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
    );
  }
}

export default App;
