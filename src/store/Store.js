import { compose, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistconfig = {
    key:'root',
    storage,
    blacklist: ['user']
} 

const persistreducer = persistReducer(persistconfig,rootReducer)

const middleWares = [logger]

const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistreducer,undefined,composeEnhancers)

export const persist = persistStore(store)