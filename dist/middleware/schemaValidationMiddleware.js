import err from "../errors/index.js";
export function validateSchema(schema) {
    return function (req, res, next) {
        var error = schema.validate(req.body, { abortEarly: false }).error;
        if (error) {
            var errors = error.details.map(function (detail) { return detail.message; });
            throw err.ConflictError();
        }
        next();
    };
}
