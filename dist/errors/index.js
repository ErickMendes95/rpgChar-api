function ConflictError() {
    return {
        name: 'ConflictError',
        message: 'The request cannot be fulfilled due to a conflict.'
    };
}
function unauthorizedError() {
    return {
        name: 'UnauthorizedError',
        message: 'The client must authenticate themselves to get the requested response.'
    };
}
function invalidCredentialsError() {
    return {
        name: "InvalidCredentialsError",
        message: "Email or password incorrect"
    };
}
function duplicatedEmailError() {
    return {
        name: 'DuplicatedEmailError',
        message: 'There is an already user with the given email.'
    };
}
function notFoundError() {
    return {
        name: 'NotFoundError',
        message: 'The requested resource could not be found but may be available in the future.'
    };
}
function internalServerError() {
    return {
        name: 'InternalServerError',
        message: 'An unexpected condition was encountered'
    };
}
export default {
    ConflictError: ConflictError,
    unauthorizedError: unauthorizedError,
    invalidCredentialsError: invalidCredentialsError,
    duplicatedEmailError: duplicatedEmailError,
    notFoundError: notFoundError,
    internalServerError: internalServerError
};
