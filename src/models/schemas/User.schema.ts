import { ObjectId } from 'mongodb'
import { UserStatus, UserVerifyStatus } from '~/constants/enum.js'

interface UserType {
  _id?: ObjectId
  name: string
  email: string
  date_of_birth: Date
  password: string
  phone: string
  email_verify_token?: string
  forgot_password_token?: string
  verify?: UserVerifyStatus
  status?: UserStatus
  role: []
  avatar: string
  cover_photo: string
  createdAt: Date
  updatedAt: Date
}

export class User {
  _id?: ObjectId
  name: string
  email: string
  date_of_birth: Date
  password: string
  phone: string
  email_verify_token?: string
  forgot_password_token?: string
  verify?: UserVerifyStatus
  status?: UserStatus
  role: []
  avatar: string
  cover_photo: string
  createdAt: Date
  updatedAt: Date

  constructor(user: UserType) {
    this._id = user._id || new ObjectId()
    this.name = user.name || ''
    this.email = user.email || ''
    this.date_of_birth = user.date_of_birth || new Date()
    this.password = user.password || ''
    this.phone = user.phone || ''
    this.email_verify_token = user.email_verify_token || ''
    this.forgot_password_token = user.forgot_password_token || ''
    this.verify = user.verify || UserVerifyStatus.unverified
    this.status = user.status || UserStatus.pending
    this.role = user.role || []
    this.avatar = user.avatar || ''
    this.cover_photo = user.cover_photo || ''
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }
}
