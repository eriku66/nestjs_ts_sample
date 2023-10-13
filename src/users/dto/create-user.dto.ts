import { MaxLength } from 'class-validator';

export class CreateUserDto {
    @MaxLength(20, {
        message: '名前は20文字以内で入力してください。',
    })
    name: string;
}
