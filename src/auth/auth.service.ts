import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service'; // Import UsersService

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService, // Inject UsersService
    private jwtService: JwtService,
  ) {}

  // User Login
  async login(email: string, password: string) {
    // Find the user by email
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Compare entered password with stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT token if password is valid
    const payload = { userId: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET || 'your_jwt_secret_key',
      expiresIn: '1h', // Set an expiration for the token
    });

    return { access_token: accessToken };
  }
}
