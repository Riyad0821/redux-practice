import store from "./store";
import { bugAdded, bugRemoved } from "./actions";


const unsubscribe = store.subscribe(() => {
    console.log("Store changed", store.getState());
});

store.dispatch(bugAdded("bug1"));
unsubscribe();

store.dispatch(bugRemoved(1));

console.log(store.getState());