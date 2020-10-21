import React, {useEffect} from 'react';
import './App.css';
import { NavMenu } from './components/NavMenu/NavMenu';
import {Home} from './components/Home';

import {Route, Switch, HashRouter} from 'react-router-dom';
import {PhotoList} from './pages/PhotoList/PhotoList';
import { BigPhoto } from './pages/BigPhoto/BigPhoto';
import {SearchPhoto} from './pages/SearchPhoto/SearchPhoto';


const App = () =>{

      // const history = useHistory();

    // const dispatch = useDispatch();
    //


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
                        <BigPhoto />
                    </Route>
                    <Route path={'/searchphoto'} >
                        <SearchPhoto/>
                    </Route>
                </Switch>
                </div>
            </HashRouter>



      {/*  <button onClick={() => history.push('/profile')}>Profile</button>;*/}


    </div>
  );
}

export default App;
