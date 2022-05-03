import foodList from "./foods";
import {choice, remove} from "./helper";

function App() {
  const food = choice(foodList);
  return (
    <div>
      <p>I'd like some {food} pls</p>
      <p>Here is your {food}</p>
      <p>Awesome! Can I have another</p>
      <p>I am sorry. We are out. We have {remove(foodList, food)} left</p>
    </div>
  );
}

export default App;
