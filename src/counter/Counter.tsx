
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../state/store'
import { decrement, increment, incrementAsync, incrementByAmount } from './counterSlice'

const Counter = () => {
    const count = useSelector((state : RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()

    const AddCount =()=>{
        if(count === 5){
            return
        }

        dispatch(increment())
    }

    const subCount =()=>{
        if(count === 0){
            return
        }

        dispatch(decrement())
    }

    const incrementByTen = ()=>{
        if(count === 100){
            return
        }

        dispatch(incrementByAmount(10))
    }


  return (
    <div>
        <h2>{count}</h2>

        <button onClick={subCount}>Decrement</button>
        <button onClick={AddCount}>Increment</button>
        <button onClick={incrementByTen}>Increment By 10</button>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment Async</button>
    </div>
  )
}

export default Counter