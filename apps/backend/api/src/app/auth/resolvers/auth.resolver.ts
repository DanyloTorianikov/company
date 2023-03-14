import { Query, Resolver } from "@nestjs/graphql";
import { ISignAuthPayload, ISignAuthResponse } from "@company/shared/date-access/interfaces";
import { AuthService } from "../services/auth.service";
import { SignIn } from "../decorators/auth.decorator";

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
  ) { }

  @Query('login')
  async login(@SignIn() signInPayload: ISignAuthPayload): Promise<ISignAuthResponse> {
    return await this.authService.login(signInPayload);
  }

  @Query('logout')
  async logout(): Promise<boolean> {
    return true;
  }
}