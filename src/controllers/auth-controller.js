import { StatusCodes } from 'http-status-codes';
import AuthService from '../services/auth-service.js';

class AuthController {
    async login(req, res) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    success: false,
                    message: 'Email and password are required',
                    error: {},
                    data: {}
                });
            }

            // For demo purposes, we'll use a simple in-memory user check
            // In production, you would query the database
            const demoPasswordHash = await AuthService.hashPassword('admin123');
            const demoUser = {
                id: 1,
                email: 'admin@example.com',
                password: demoPasswordHash,
                username: 'admin',
                role: 'admin'
            };

            // Check if user exists (demo mode)
            if (email !== demoUser.email) {
                return res.status(StatusCodes.UNAUTHORIZED).json({
                    success: false,
                    message: 'Invalid credentials',
                    error: {},
                    data: {}
                });
            }

            // Verify password
            const isPasswordValid = await AuthService.comparePassword(password, demoUser.password);
            if (!isPasswordValid) {
                return res.status(StatusCodes.UNAUTHORIZED).json({
                    success: false,
                    message: 'Invalid credentials',
                    error: {},
                    data: {}
                });
            }

            // Generate token
            const token = AuthService.generateToken(demoUser);

            return res.status(StatusCodes.OK).json({
                success: true,
                message: 'Login successful',
                error: {},
                data: {
                    token,
                    user: {
                        id: demoUser.id,
                        email: demoUser.email,
                        username: demoUser.username,
                        role: demoUser.role
                    }
                }
            });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: 'Login failed',
                error: error.message,
                data: {}
            });
        }
    }

    async register(req, res) {
        try {
            const { 
                email, 
                password, 
                username,
                name,
                contact,
                shift_id,
                image,
                dob,
                gender,
                employee_id,
                joining_date,
                status2,
                qualification,
                specialization,
                department_id,
                branch_id
            } = req.body;

            if (!email || !password || !username) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    success: false,
                    message: 'Email, password, and username are required',
                    error: {},
                    data: {}
                });
            }

            // Hash password
            const hashedPassword = await AuthService.hashPassword(password);

            // In production, save to database
            const newUser = {
                id: Date.now(),
                email,
                username,
                password: hashedPassword,
                name: name || null,
                contact: contact || null,
                shift_id: shift_id || null,
                image: image || null,
                dob: dob || null,
                gender: gender || null,
                employee_id: employee_id || null,
                joining_date: joining_date || null,
                status2: status2 || null,
                qualification: qualification || null,
                specialization: specialization || null,
                department_id: department_id || null,
                branch_id: branch_id || null
            };

            const token = AuthService.generateToken(newUser);

            return res.status(StatusCodes.CREATED).json({
                success: true,
                message: 'Registration successful',
                error: {},
                data: {
                    token,
                    user: {
                        id: newUser.id,
                        email: newUser.email,
                        username: newUser.username,
                        name: newUser.name,
                        contact: newUser.contact,
                        role: 'user'
                    }
                }
            });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: 'Registration failed',
                error: error.message,
                data: {}
            });
        }
    }
}

export default new AuthController();
