import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchStart = () => {
    return{
        type: actionTypes.PRODUCT_FETCH_START
    }
}

export const fetchSuccess = (products) => {
    return{
        type: actionTypes.PRODUCT_FETCH_SUCCESS,
        products: products
    }
}

export const fetchFail = () => {
    return{
        type: actionTypes.PRODUCT_FETCH_FAIL
    }
}

export const product =  () => {
    return dispatch => {
        dispatch(fetchStart())
        axios.get('http://localhost:8080/e-commerce/register/home/variations')
        .then(response => {
            const fetcedProducts = [];
            for( let key in response.data){
                fetcedProducts.push({
                    ...response.data[key],
                    
                })
                // console.log()
            }
            console.log(fetcedProducts)
            dispatch(fetchSuccess(fetcedProducts))
        }).catch( err => {
            console.log(err.response)
            dispatch(fetchFail())
        })
    }
}


export const adminfetchStart = () => {
    return{
        type: actionTypes.PRODUCT_FETCH_START_ADMIN
    }
}

export const adminfetchSuccess = (products) => {
    return{
        type: actionTypes.PRODUCT_FETCH_SUCCESS_ADMIN,
        products: products
    }
}

export const adminfetchFail = () => {
    return{
        type: actionTypes.PRODUCT_FETCH_FAIL_ADMIN
    }
}

export const sellerfetchStart = () => {
    return{
        type: actionTypes.SELLER_PRODUCT_START
    }
}

export const sellerfetchSuccess = (products) => {
    return{
        type: actionTypes.SELLER_PRODUCT_SUCCESS,
        products: products
    }
}

export const sellerfetchFail = () => {
    return{
        type: actionTypes.SELLER_PRODUCT_FAIL
    }
}

export const sellerProductFetch =  (token) => {
    return dispatch => {
        dispatch(sellerfetchStart())
        axios({
            method: 'get',
            url: 'http://localhost:8080/e-commerce/seller/home/all-products',
            headers: {
                'Authorization': 'Bearer '+ token
            }
            })
        .then(response => {
            const fetcedProducts = [];
            for( let key in response.data){
                fetcedProducts.push({
                    ...response.data[key],
                })
            }
            console.log(fetcedProducts)
            dispatch(sellerfetchSuccess(fetcedProducts))
        }).catch( err => {
            console.log(err.response)
            dispatch(sellerfetchFail())
        })
    }
}

export const deleteProductStart = () => {
    return{
        type: actionTypes.DELETE_PRODUCT_START
    }
}

export const deleteProductSuccess = (deleted) => {
    return{
        type: actionTypes.DELETE_PRODUCT_SUCCESS,
        del: deleted
    }
}

export const deleteProductFail = () => {
    return{
        type: actionTypes.DELETE_PRODUCT_FAIL
    }
}


export const deleteProduct =  (token,id) => {
    return dispatch => {
        dispatch(deleteProductStart())
        axios({
            method: 'delete',
            url: `http://localhost:8080/e-commerce/seller/home/product/${id}`,
            headers: {
                'Authorization': 'Bearer '+ token
            }
            })
        .then(response => {
            dispatch(deleteProductSuccess('deleted'))
        }).catch( err => {
            console.log(err.response)
            dispatch(deleteProductFail())
        })
    }
}

export const viewProduct =  (token,id) => {
    return dispatch => {
        dispatch(datafetchStart())
        axios({
            method: 'get',
            url: `http://localhost:8080/e-commerce/seller/home/all-product-variation/${id}`,
            headers: {
                'Authorization': 'Bearer '+ token
            }
            })
        .then(response => {
            const fetcedProducts = [];
            for( let key in response.data){
                fetcedProducts.push({
                    ...response.data[key],
                    
                })
            }
            console.log('product view'+fetcedProducts)
            dispatch(datafetchSuccess(fetcedProducts))
        }).catch( err => {
            console.log(err.response)
            dispatch(datafetchFail())
        })
    }
}


export const productfetch =  (token) => {
    return dispatch => {
        dispatch(adminfetchStart())
        axios({
            method: 'get',
            url: 'http://localhost:8080/e-commerce/admin/home/all-products',
            headers: {
                'Authorization': 'Bearer '+ token
            }
            })
        .then(response => {
            const fetcedProducts = [];
            for( let key in response.data){
                fetcedProducts.push({
                    ...response.data[key],
                    
                })
            }
            console.log(fetcedProducts)
            dispatch(adminfetchSuccess(fetcedProducts))
        }).catch( err => {
            console.log(err.response)
            dispatch(adminfetchFail())
        })
    }
}

export const activateStart = () => {
    return{
        type: actionTypes.ACTIVATE_START
    }
}

export const activateSuccess = (data) => {
    return{
        type: actionTypes.ACTIVATE_SUCCESS,
        data: data
    }
}

export const activateFail = () => {
    return{
        type: actionTypes.ACTIVATE_FAIL
    }
}

export const productActivate =  (token,id) => {
    return dispatch => {
        dispatch(activateStart())
        axios({
            method: 'put',
            url: `http://localhost:8080/e-commerce/admin/home/activate-product/${id}`,
            headers: {
                'Authorization': 'Bearer '+ token
            }
            })
        .then(response => {
            console.log(response.data)
            dispatch(activateSuccess(true))
        }).catch( err => {
            console.log(err.response)
            dispatch(activateFail())
        })
    }
}

export const productDeactivate =  (token,id) => {
    return dispatch => {
        dispatch(activateStart())
        axios({
            method: 'put',
            url: `http://localhost:8080/e-commerce/admin/home/de-activate-product/${id}`,
            headers: {
                'Authorization': 'Bearer '+ token
            }
            })
        .then(response => {
            console.log(response.data)
            dispatch(activateSuccess(true))
        }).catch( err => {
            console.log(err.response)
            dispatch(activateFail())
        })
    }
}

export const datafetchStart = () => {
    return{
        type: actionTypes.PRODUCT_DATA_FETCH_START
    }
}

export const datafetchSuccess = (products) => {
    return{
        type: actionTypes.PRODUCT_DATA_FETCH_SUCCESS,
        products: products
    }
}

export const datafetchFail = () => {
    return{
        type: actionTypes.PRODUCT_DATA_FETCH_FAIL,
    }
}

export const productDetail =  (token,id) => {
    return dispatch => {
        dispatch(datafetchStart())
        axios({
            method: 'get',
            url: `http://localhost:8080/e-commerce/admin/home/product/${id}`,
            headers: {
                'Authorization': 'Bearer '+ token
            }
            })
        .then(response => {
            const fetcedProducts = [];
                fetcedProducts.push({
                    ...response.data,
                    
                })
            console.log(fetcedProducts)
            dispatch(datafetchSuccess(fetcedProducts))
        }).catch( err => {
            console.log(err.response)
            dispatch(datafetchFail())
        })
    }
}

export const productPostStart = () => {
    return{
        type: actionTypes.PRODUCT_POST_START
    }
}

export const productPostSuccess = (msg) => {
    return{
        type: actionTypes.PRODUCT_POST_SUCCESS,
        message: msg,
    }
}

export const productPostFail = (msg) => {
    return{
        type: actionTypes.PRODUCT_POST_FAIL,
        err: msg
    }
}

export const productPost =  (name,brand,description,categoryId, token) => {
    return dispatch => {
        dispatch(productPostStart())
        axios({
            method: 'post',
            url: `http://localhost:8080/e-commerce/seller/home/add-product`,
            data:{
                name: name,
                brand: brand,
                description: description,
                categoryId: categoryId
            },
            headers: {
                'Authorization': 'Bearer '+ token
            }
            })
        .then(response => {
            dispatch(productPostSuccess(response.data))
        }).catch( err => {
            console.log('xiuzoidh'+err.response.data.message)
            dispatch(productPostFail(err.response.data.message))
        })
    }
}

export const productVariationPost =  (id, quantity, price,image,field,value, token) => {
    return dispatch => {
        dispatch(productPostStart())
        axios({
            method: 'post',
            url: `http://localhost:8080/e-commerce/seller/home/add-product-variation`,
            data:{
                productId: id,
                quantityAvailable: quantity,
                productVariationImage: image,
                price: price,
                metaData:{
                    [field]: value
                }
            },
            headers: {
                'Authorization': 'Bearer '+ token
            }
            })
        .then(response => {
            console.log('response'+response.data)
            dispatch(productPostSuccess(response.data))
        }).catch( err => {
            console.log('error'+err.response.data)
            dispatch(productPostFail(err.response.data.message))
        })
    }
}

export const productVariationUpdate =  (id, quantity, price, image, field,value, token) => {
    return dispatch => {
        dispatch(productPostStart())
        axios({
            method: 'post',
            url: `http://localhost:8080/e-commerce/seller/home/update-product-variation/{id}`,
            data:{
                productId: id,
                quantityAvailable: quantity,
                productVariationImage: image,
                price: price,
                metaData:{
                    [field]: value
                }
            },
            headers: {
                'Authorization': 'Bearer '+ token
            }
            })
        .then(response => {
            dispatch(productPostSuccess(response.data))
        }).catch( err => {
            console.log(err.response)
            dispatch(productPostFail(err.response.data.message))
        })
    }
}

// export const products =  () => {
//     return dispatch => {
//         dispatch(fetchStart())
//         axios.get('http://localhost:8080/e-commerce/register/home/variations')
//         .then(response => {
//             const fetcedProducts = [];
//             for( let key in response.data){
//                 fetcedProducts.push({
//                     ...response.data[key],
                    
//                 })
//                 // console.log()
//             }
//             console.log(fetcedProducts)
//             dispatch(fetchSuccess(fetcedProducts))
//         }).catch( err => {
//             console.log(err.response)
//             dispatch(fetchFail())
//         })
//     }
// }