class ApiResponse{
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode<400
    }
}

export {ApiResponse}

// ApiResponse is a custom class to send structured and consistent API responses.
// It includes:
// - statusCode: HTTP status code (e.g., 200, 201)
// - data: payload returned to the client
// - message: human-readable message (default: "Success")
// - success: automatically true if statusCode < 400
// Usage Example:
// new ApiResponse(200, productList, "Products fetched successfully")
