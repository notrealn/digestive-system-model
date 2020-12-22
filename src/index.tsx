import React from 'react';
import { Activity } from 'react-feather';
import { BrowserRouter, NavLink, Route, Switch, useLocation } from 'react-router-dom';

import { renderApp } from '../src/util';
import { Home } from './home/home';
import { Part1 } from './p1/p1';

import './index.scss';
import { Part2 } from './p2/p2';

const App = (props: {}) => {
  const location = useLocation();

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 pb-3 lg:pb-6 shadow-xl">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Activity className="mr-2" />
            <span className="font-semibold text-xl tracking-tight">The Digestive System</span>
          </div>
          <div className="text-sm flex-grow align-center">
            <NavLink exact to="/" className="block m-4 inline-block text-teal-200 hover:text-white mr-4">
              <button>Overview</button>
            </NavLink>
            <NavLink to="/part1" className="block m-4 inline-block text-teal-200 hover:text-white mr-4">
              <button>Part 1</button>
            </NavLink>
            <NavLink to="/part2" className="block m-4 inline-block text-teal-200 hover:text-white mr-4">
              <button>Part 2</button>
            </NavLink>
            <a href="https://github.com/notrealn/absolutism-project" className="inliSee Codene-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-3 float-right">
              See Code
            </a>
          </div>
        </div>
      </nav>
      <main>
        <Switch location={location}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/part1">
            <Part1 />
          </Route>
          <Route path="/part2">
            <Part2 />
          </Route>
        </Switch>
      </main>
    </>
  );
};

renderApp(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
