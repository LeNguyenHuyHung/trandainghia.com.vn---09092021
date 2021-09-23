import './App.css';
import TodoList from './components/TodoList'
import I2021 from './components/imas/i2021'
import A2021 from './components/amc/a2021'
import tutorials from './components/tutorials/tutorials'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {  BrowserRouter, Switch,Route} from "react-router-dom";
import K2020 from './components/kangaroo/k2020/k2020';
import Age from './components/training/age/age';
import Linear from './components/training/linear/linear';
import Money from './components/training/money/money';
import Diagram from './components/training/diagram/diagram';
import Drawing from './components/training/drawing/drawing';
import Concrete from './components/training/concrete/concrete';
import Backwards from './components/training/backwards/backwards';
import Speed from './components/training/speed/speed';
import Riddle1 from './components/training/riddle-1/riddle-1';
import CreateModel from './components/training/createModel/model';
import Assuming from './components/training/assuming/asuming';
import Riddle2 from './components/training/riddle-2/riddle-2';
import Riddle3 from './components/training/riddle-3/riddle-3';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/tutorials" component={tutorials}></Route>
      <Route exact path="/k2020" component={K2020}></Route>
      <Route exact path="/i2021" component={I2021}></Route>
      <Route exact path="/a2021" component={A2021}></Route>
      <Route exact path="/age" component={Age}></Route>
      <Route exact path="/linear" component={Linear}></Route>
      <Route exact path="/money" component={Money}></Route>
      <Route exact path="/diagram" component={Diagram}></Route>
      <Route exact path="/drawing" component={Drawing}></Route>
      <Route exact path="/concrete" component={Concrete}></Route>
      <Route exact path="/backwards" component={Backwards}></Route>
      <Route exact path="/speed" component={Speed}></Route>
      <Route exact path="/riddle-1" component={Riddle1}></Route>
      <Route exact path="/model" component={CreateModel}></Route>
      <Route exact path="/assuming-error" component={Assuming}></Route>
      <Route exact path="/riddle-2" component={Riddle2}></Route>
      <Route exact path="/riddle-3" component={Riddle3}></Route>
      <Route path="/" component={TodoList}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
