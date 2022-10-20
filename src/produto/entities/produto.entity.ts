import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn,} from "typeorm";



@Entity({name: 'tb_produto'})
export class Produto {

    @PrimaryGeneratedColumn ()
    id : number

    @IsNotEmpty ()
    @Column({length:100, nullable: false})
    nome: string;

    @IsNotEmpty ()
    @Column({length:1000, nullable: false})
    descricao: string;

    @IsNotEmpty()
    @Column({zerofill: true, nullable: false})
    qtd_estoque: number;

    @IsNotEmpty()
    @Column({length:100, nullable:false})
    fabricante: string;

    @IsNotEmpty()
    @Column({zerofill:true, nullable: false})
    valor : number;

    @ManyToOne(()=> Categoria, (categoria) => categoria.produto,{
        onDelete: "CASCADE"
    })
    categoria: Categoria;
}