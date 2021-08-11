import * as actions from "./actionTypes";

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        // description: description
        description // Modern syntax
    }
});

export const bugRemoved = id => ({
    type: actions.BUG_REMOVED,
    payload: {
        // id: id
        id
    }
});

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        // id: id
        id
    }
});

// export function bugAdded(description) {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: description
//         }
//     }
// }

// export function bugRemoved(bugId) {
//     return {
//         type: actions.BUG_REMOVED,
//         payload: {
//             id: bugId
//         }
//     }
// }