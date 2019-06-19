import * as type from './../constants/ActionType'

var initialState = [
    {
        featured_news : null,
        biem_hoa_news : null,
        most_view : null,
        doi_cuoi : null,
        giai_tri : null,
        song_tre : null,
        the_thao : null,
        media : null,
        detail : null,
        quan_tam : null
    }
];

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.LIST_FEATURED_NEWS_HOME:
            console.log(action.data);
            state[0].featured_news = action.data;
            // console.log(state[0].featured_news);
            return [...state];
        case type.LIST_BIEM_HOA_NEWS_HOME:
            state[0].biem_hoa_news = action.data;
            return [...state];
        case type.LIST_MOST_VIEW_HOME:
            state[0].most_view = action.data;
            return [...state];
        case type.LIST_DOI_CUOI_HOME:
            state[0].doi_cuoi = action.data;
            return [...state];
        case type.LIST_GIAI_TRI_HOME:
            state[0].giai_tri = action.data;
            return [...state];
        case type.LIST_SONG_TRE_HOME:
            state[0].song_tre = action.data;
            return [...state];
        case type.LIST_THE_THAO_HOME:
            state[0].the_thao = action.data;
            return [...state];
        case type.LIST_VIDEO_HOME:
            state[0].media = action.data;
            return [...state];
        case type.CONTENT_DETAIL:
            state[0].detail = action.data;
            return [...state];
        case type.BLOCK_QUAN_TAM:
            state[0].quan_tam = action.data;
            return [...state];
        default:
            return state;
    }
};

export default HomeReducer;