import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<string | null>;
    register(createUserDto: CreateUserDto): Promise<string | null>;
}
