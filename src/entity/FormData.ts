import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Form } from "./Form";

@Entity()
export class FormData {
    @PrimaryGeneratedColumn("uuid")
    uniqueId: string;

    @ManyToOne(() => Form, form => form.uniqueId)
    form: Form;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phonenumber: number;

    @Column()
    isGraduate: boolean;
}
