import constants from '../common/constants'

export const signIn = () => {
    return {
        type: constants.actionTypes.signIn
    }
}

export const signOut = () => {
    return {
        type: constants.actionTypes.signOut
    }
}

export const setUserId = (userId) => {
    return {
        type: constants.actionTypes.setUserId,
        payload: userId
    }
}