import { takeEvery, put, call } from "redux-saga/effects";
import {GET_ELECTRONICS, ELECTRONICS, GET_ACCESSORIES, ACCESSORIES, GET_MEN_CLOTHINGS, MEN_CLOTHINGS, GET_WOMEN_CLOTHINGS, WOMEN_CLOTHINGS} from './actions';
import Axios from 'axios';

async function ApiElectronics (){
    const response = await Axios.get("https://fakestoreapi.com/products/category/electronics");
    return response.data;
}

async function ApiAccessories (){
    const response = await Axios.get("https://fakestoreapi.com/products/category/jewelery");
    return response.data;
}

async function ApiMenClothings (){
    const response = await Axios.get("https://fakestoreapi.com/products/category/men's clothing");
    return response.data;
}

async function ApiWomenClothings (){
    const response = await Axios.get("https://fakestoreapi.com/products/category/women's clothing");
    return response.data;
}

function* getElectronicsData(){
    const data = yield call(ApiElectronics);
    yield put({type:ELECTRONICS, data});
}
function* getAccessoriesData(){
    const data = yield call(ApiAccessories);
    yield put({type:ACCESSORIES, data});
}
function* getMenClothingsData(){
    const data = yield call(ApiMenClothings);
    yield put({type:MEN_CLOTHINGS, data});
}
function* getWomenClothingsData(){
    const data = yield call(ApiWomenClothings);
    yield put({type:WOMEN_CLOTHINGS, data});
}


function* productSaga(){
    yield takeEvery(GET_ELECTRONICS, getElectronicsData);
    yield takeEvery(GET_ACCESSORIES, getAccessoriesData);
    yield takeEvery(GET_MEN_CLOTHINGS, getMenClothingsData);
    yield takeEvery(GET_WOMEN_CLOTHINGS, getWomenClothingsData);
}

export default productSaga;