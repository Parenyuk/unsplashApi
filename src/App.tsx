import React from 'react';
import './App.css';
import { NavMenu } from './components/NavMenu/NavMenu';
import {Home} from './components/Home';

import {Route, Switch, HashRouter} from 'react-router-dom';
import {PhotoList} from './pages/PhotoList/PhotoList';
import { BigPhoto } from './pages/BigPhoto/BigPhoto';

const App = () =>{

      // const history = useHistory();



  return (
    <div className="App">

            <HashRouter>
                <NavMenu/>
                <div className='container' >
                <Switch>
                    <Route path={'/'} exact>
                        <Home/>
                    </Route>
                    <Route path={'/photolist'} >
                        <PhotoList/>
                    </Route>
                    <Route path={'/bigPhoto'}>
                        <BigPhoto photoLink={'https://images.unsplash.com/photo-1535535112387-56ffe8db21ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80'}
                                  authorName={'Denis Chick'} photoName={'train'}/>
                    </Route>
                </Switch>
                </div>
            </HashRouter>



      {/*  <button onClick={() => history.push('/profile')}>Profile</button>;*/}


    </div>
  );
}

export default App;
