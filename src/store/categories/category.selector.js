import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const select = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.Categories
)

export const selectCategories = createSelector(
    [select],
    (categories) => categories.reduce((acc, category) => {
        const {title, items} = category
        acc[title.toLowerCase()] = items
        return acc
    },{})
)