import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";


const unsubscribe = store.subscribe(() => {
    console.log("Store changed", store.getState());
});

store.dispatch(bugAdded("bug1"));
store.dispatch(bugAdded("bug2"));
unsubscribe();

console.log(store.getState());

store.dispatch(bugResolved(1));

console.log(store.getState());

store.dispatch(bugRemoved(2));

console.log(store.getState());

