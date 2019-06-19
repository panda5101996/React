import * as type from '../constants/ActionType';
import fetch from 'isomorphic-fetch';
import axios from "axios";
const api = require(`./../api/HomeGetAPI`);

export function list_featured_news_home() {
    return (dispatch, getState) => {
        return fetch(`https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=8&page=1&cid=1`)
            .then(response => response.json())
            .then(json => dispatch({
                type: type.LIST_FEATURED_NEWS_HOME,
                data: json
            }))
    }
}

export function list_biem_hoa_news_home() {
    return (dispatch, getState) => {
        return fetch(`https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=8&page=2&cid=1`)
            .then(response => response.json())
            .then(json => dispatch({
                type: type.LIST_BIEM_HOA_NEWS_HOME,
                data: json
            }))
    }
}

export function list_most_view_home() {
    return (dispatch, getState) => {
        return fetch(`https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=4&page=5&cid=1`)
            .then(response => response.json())
            .then(json => dispatch({
                type: type.LIST_MOST_VIEW_HOME,
                data: json
            }))
    }
}

export function list_doi_cuoi_home() {
    return (dispatch, getState) => {
        return fetch(`https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=4&page=6&cid=1`)
            .then(response => response.json())
            .then(json => dispatch({
                type: type.LIST_DOI_CUOI_HOME,
                data: json
            }))
    }
}

export function list_giai_tri_home() {
    return (dispatch, getState) => {
        return fetch(`https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=6&page=5&cid=1`)
            .then(response => response.json())
            .then(json => dispatch({
                type: type.LIST_GIAI_TRI_HOME,
                data: json
            }))
    }
}

export function list_song_tre_home() {
    return (dispatch, getState) => {
        return fetch(`https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=4&page=9&cid=1`)
            .then(response => response.json())
            .then(json => dispatch({
                type: type.LIST_SONG_TRE_HOME,
                data: json
            }))
    }
}

export function list_the_thao_home() {
    return (dispatch, getState) => {
        return fetch(`https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=4&page=10&cid=1`)
            .then(response => response.json())
            .then(json => dispatch({
                type: type.LIST_THE_THAO_HOME,
                data: json
            }))
    }
}

export function list_media_home() {
    return (dispatch, getState) => {
        return fetch(`https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=4&page=1`)
            .then(response => response.json())
            .then(json => dispatch({
                type: type.LIST_VIDEO_HOME,
                data: json
            }))
    }
}

export function content_detail(id) {
    return (dispatch, getState) => {
        return fetch(`http://api.tuoitre.vn/mobileapp/objectdetail?token=da039e81&id=${id}`)
            .then(response => response.json())
            .then(json => dispatch({
                type: type.CONTENT_DETAIL,
                data: json
            }))
    }
}

export function block_quan_tam() {
    return (dispatch, getState) => {
        return fetch(`https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=4&page=9&cid=1`)
            .then(response => response.json())
            .then(json => dispatch({
                type: type.BLOCK_QUAN_TAM,
                data: json
            }))
    }
}