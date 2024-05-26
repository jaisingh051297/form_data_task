import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Form {
    @PrimaryGeneratedColumn("uuid")
    uniqueId: string;

    @Column()
    title: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phonenumber: number;

    @Column()
    isGraduate: boolean;
}
