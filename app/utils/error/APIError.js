// APIError enfant de Error

class APIError extends Error {
    constructor(code,msg){
        super(msg);
        this.status = code;
    }
};

module.exports = APIError;