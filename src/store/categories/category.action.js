import { createAction } from "../../utils/ReducerAction";
import { USER_ACTION_TYPES } from "./category.types";

export const setCategories = (categories) => createAction(USER_ACTION_TYPES.SET_CATEGORIES, categories)