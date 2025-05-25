class ApiError extends Error {
    constructor(
        statusCode,
        message="Something went wrong!",
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}

// ApiError is a custom error class that extends the built-in Error class.
// It provides a structured way to handle API errors with properties like:
// - statusCode: HTTP status code (e.g., 404, 500)
// - message: error message (default: "Something went wrong!")
// - errors: optional array of specific error details
// - success: always false to indicate failure
// - data: reserved for additional info (default: null)
// - stack: stack trace for debugging
// This helps create consistent error responses and works well with global error handlers.
