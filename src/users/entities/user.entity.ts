import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn({ comment: 'ID', })
    readonly id: number;
    @Column('varchar', { comment: '名前', })
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
