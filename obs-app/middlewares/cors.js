import cors from 'cors';

const ACCEPTED_ORIGINS = [
    "http://localhost:5173",
    "http://127.0.0.1:5500",
];

export const corsMiddleware = ({accptedOrigin = ACCEPTED_ORIGINS} = {}) => cors(
    {
        origin: function(origin, callback) {
            if(!origin) return callback(null, true);
            debugger;
            if(accptedOrigin.includes(origin)) {
                return callback(null, true);
            }
            return callback(new Error(`Origin ${origin} not allowed`), false);
        },
    }
);