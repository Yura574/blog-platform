import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {createBrowserHistory} from 'history';
import {createReduxHistoryContext} from 'redux-first-history';



const {
    routerMiddleware,
    routerReducer,
    createReduxHistory
} = createReduxHistoryContext({
    history: createBrowserHistory(),
    savePreviousLocations: 2
})

const rootReducer = combineReducers({
    router: routerReducer,
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(routerMiddleware)
});

export const history = createReduxHistory(store)

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch


// @ts-ignore
window.store = store

