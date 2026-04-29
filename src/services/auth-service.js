import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

class AuthService {
    constructor() {
        this.JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
        this.JWT_EXPIRY = process.env.JWT_EXPIRY || '24h';
    }

    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    async comparePassword(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }

    generateToken(user) {
        return jwt.sign(
            { 
                id: user.id, 
                email: user.email, 
                role: user.role 
            },
            this.JWT_SECRET,
            { expiresIn: this.JWT_EXPIRY }
        );
    }

    verifyToken(token) {
        try {
            return jwt.verify(token, this.JWT_SECRET);
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
}

export default new AuthService();
