import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    // Find user by email
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check if password is valid
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Payload for JWT token
    const payload = {
      userId: user.id,
      email: user.email,
    };

    // Create JWT token with an expiration of 1 hour
    const access_token = this.jwtService.sign(payload, { expiresIn: '1h' });

    return {
      success: true,
      data: {
        access_token,
        user: {
          id: user.id,
          email: user.email,
          role: user.role, // Optional: you may want to include the user's role
        },
      },
      message: 'Login successful',
    };
  }
}
