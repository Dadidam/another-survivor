export const INIT_USER = 'init_user';

export function initUser(user) {
    return {
        type: INIT_USER,
        payload: user
    };
}
