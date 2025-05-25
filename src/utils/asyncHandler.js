//This pattern is used to wrap async route handlers so you don't need to manually use try/catch everywhere in your routes.
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}

export {asyncHandler}