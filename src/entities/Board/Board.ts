import { BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, Entity } from "typeorm";
import User from "../User/User";
import { TSelector } from "../../types/types";

const selectorArr: Array<TSelector> = [
    "BOARD_SUGGESTION",
    "BOARD_QUESTION",
    "BOARD_PROBLEM"
];

@Entity()
export class Board extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", nullable: false })
    text: string;

    @Column({ type: "text", nullable: true })
    result: string; 
    
    @Column({ enum: selectorArr, type: "text", default: "BOARD_SUGGESTION" })
    selector: TSelector;

    @Column({ nullable: true })
    writerId: number;

    @ManyToOne(type => User, user => user.boards)
    writer: User;

    @CreateDateColumn() createdAt: string;
    @UpdateDateColumn() updatedAt: string;
};