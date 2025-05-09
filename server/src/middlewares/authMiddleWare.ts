const jwt = require("jsonwebtoken");
const jwtSecret: any = process.env.JWT_SECRET;
const jwtExpiry: any = process.env.JWT_EXPIRY;

const authMiddleWare = async (req: any, res: any, next: any) => {
    console.log("Token in Auth Middleware ::::::::::::::::", req.headers.authorization);

    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }
        const decoded: any = jwt.verify(token, jwtSecret); // Verify the token

        // Check if the token is expired
        const currentTime = Math.floor(Date.now()/1000);
        const tokenIssuesuedAt = decoded.iat;
        if(tokenIssuesuedAt && currentTime > tokenIssuesuedAt + parseInt(jwtExpiry)) {
            return res.status(401).json({
                success: false,
                message: "Token expired",
            });
        }
        // Check if the token is valid
        req.user = decoded; // Attach the decoded token payload to req.user
        next();
    } catch (error: any) {
        console.log("Error in Auth Middleware ::::::::::::::::", error.message);
        res.status(401).json({
            success: false,
            message: "Token expired or invalid",
            error: error.message,
        });
    }
};
export default authMiddleWare;