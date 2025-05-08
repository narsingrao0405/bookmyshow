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
    const decoded = jwt.verify(token, jwtSecret); // Verify the token
    
    req.user = decoded;
    req.user.userId = decoded.userId; // Attach userId to the request object
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