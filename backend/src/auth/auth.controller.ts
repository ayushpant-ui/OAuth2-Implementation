//  import { Controller, Get, Res } from '@nestjs/common';
//  import type { Response } from 'express';
//  import { AuthService } from './auth.service.js';

// @Controller('auth')
// export class AuthController {
//     constructor(private readonly authService:AuthService){}

//     @Get('google')  
//     async Googlelogin(@Res() res:Response){
//         const {url, state} =
//         await this.authService.generateGoogleAuthURL();
//     }

//     res.cookie('oauth_state',state,{
//         httpOnly:true,
//         secure:false,
//         sameSite: 'lax',
//         path: '/auth/google/callback',
//         maxAge: 5*60*1000,
//     });

//     return res.redirect(url);

import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('google')
  async googleLogin(@Res() res: Response) {
    const { url, state } =
      await this.authService.generateGoogleAuthURL();

    // Store state in a short-lived browser cookie.
    res.cookie('oauth_state', state, {
      httpOnly: true,
      secure: false, // true in production with HTTPS
      sameSite: 'lax',
      path: '/auth/google/callback',
      maxAge: 5 * 60 * 1000,
    });

    // Redirect the browser to Google.
    return res.redirect(url);
  }
}