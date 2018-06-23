import React from 'react';
import CounterContainer from './CounterContainer';
import {Subscribe} from 'unstated';

const Counter =()=>(
 <Subscribe to={[CounterContainer]}>
  {
    counter =>(
      <div>
        <h1>Count Number:{counter.state.count}</h1>
        <button onClick={()=>counter.increment()}>Increment</button>
        <button onClick={()=>counter.decrement()}>Decrement</button>
      </div>
    )
  }
 </Subscribe>
)

export default Counter;
