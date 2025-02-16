import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK) // Ensures a 200 status code is returned
  async login(@Body() body: { email: string; password: string }) {
    // Call the AuthService login method
    const response = await this.authService.login(body.email, body.password);

    // Return the formatted response from AuthService
    return {
      success: true,
      data: response.data,
      message: response.message,
    };
  }
}
