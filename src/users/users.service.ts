import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  /**
   * ユーザーを作成する
   * @param createUserDto
   * @returns
   */
  async create(createUserDto: CreateUserDto): Promise<{ message: string }> {
    await this.userRepository
      .save({
        name: createUserDto.name,
      })
      .catch((e) => {
        throw new InternalServerErrorException(
          `[${e.message}] アカウントの登録に失敗しました。`
        );
      });
    return { message: 'アカウントの登録に成功しました。' };
  }

  /**
   * ユーザーを全件取得する
   * @returns
   */
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  /**
   * ユーザーを1件取得する
   * @param id
   * @returns
   */
  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOneBy({
      id: id,
    });
  }


  /**
   * ユーザーを更新する
   * @param id
   * @param updateUserDto
   * @returns
   */
  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository
      .update(id, {
        name: updateUserDto.name,
      })
      .catch((e) => {
        throw new InternalServerErrorException(
          `[${e.message}] アカウントの更新に失敗しました。`
        );
      });
    return { message: `アカウント(ID: ${id})の更新に成功しました。` };
  }

  /**
   * ユーザーを削除する
   * @param id
   * @returns
   */
  async remove(id: number) {
    await this.userRepository.delete(id).catch((e) => {
      throw new InternalServerErrorException(
        `[${e.message}] アカウント(ID: ${id})の削除に失敗しました。`
      );
    });
    return { message: `アカウント(ID: ${id})の削除に成功しました。` };
  }
}
