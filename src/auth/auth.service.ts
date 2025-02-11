import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'; // Ensure bcryptjs is used
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // User Signup (Register)
  async signup(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    // Check if user already exists
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    // Hash password using bcryptjs
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log('hashedPassword', hashedPassword); // Debug log for hashed password

    // Create user with hashed password
    const user = await this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return { message: 'User registered successfully', user };
  }

  // User Login
  async login(email: string, password: string) {
    // Find the user by email
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    console.log('User found:', user); // Debug log to check the user data

    // Compare entered password with stored hashed password
    const trimmedPassword = password.trim();
    const isPasswordValid = bcrypt.compareSync(trimmedPassword, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT token if password is valid
    const payload = { userId: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET || 'your_jwt_secret_key', // Use JWT_SECRET from environment
    });

    console.log('Generated Access Token:', accessToken); // Debug log for token generation

    return { access_token: accessToken };
  }
}
