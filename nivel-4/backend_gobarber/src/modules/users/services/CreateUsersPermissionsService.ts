import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ name, email }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('E-mail already exists');
    }

    const existsRoles = await roleRepository.findByIds(roles);
    console.log(existsRoles);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      roles: existsRoles,
    });

    return user;
  }
}

export default CreateUserService;
