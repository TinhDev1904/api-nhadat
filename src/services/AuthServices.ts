import { AuthFailureError } from '../core/error.response'
import { userModel } from '../models/user.model'
import crypto from 'crypto'

class UserService {
  private userModel: typeof userModel

  constructor(userModel) {
    this.userModel = userModel
  }

  async login(email, password) {}

  async register({ email }: { email: string }) {
    const user = await this.userModel.findOne({ usr_email: email })
    if (user) {
      throw new AuthFailureError('User already exists')
    }
  }
}
