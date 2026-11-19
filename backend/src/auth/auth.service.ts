import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {createHash, randomBytes} from 'crypto'

@Injectable()
export class AuthService {

    // Temperary storage for OAuth Transaction 
    // Can replace later with redis 
    
    private oauthTransactions = new Map<
    string,
    {
        codeVerifier:string ;
        nounce: string  ; 
        expiresAt : number ; 
    }>();

    async generateGoogleAuthURL(){
        // This generates State 
        const state = randomBytes(32).toString('hex');

        //Generating PKCE Code verifier 
        const codeVerifier = randomBytes(32).toString('base64url')

        //Generating PKCE Code Challenger 
        const codeChallenger = createHash(codeVerifier).update(codeVerifier).digest('base64url');

        // Generating OICD nounce 
        const nounce = randomBytes(32).toString('hex');

        this.oauthTransactions.set(state,{
            codeVerifier,
            nounce,
            expiresAt: Date.now() + 5*60*1000,
        });

        //constructing Google authorisation URL 
        const googleAuthURL = new URL ( 
           'https://accounts.google.com/o/oauth2/v2/auth',
        )

    }
}
