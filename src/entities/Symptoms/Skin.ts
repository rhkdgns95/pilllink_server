import { CommonSymptom } from "./CommonSymptom/CommonSymptom";
import { Entity, Column } from "typeorm";

@Entity()
class Skin extends CommonSymptom { 

    @Column({ type: "boolean" })
    skin_abrasion: boolean;  // 철과상
    
    @Column({ type: "boolean" })
    skin_acne: boolean;  // 여드름
    
    @Column({ type: "boolean" })
    skin_hives: boolean;  // 두드러기
    
    @Column({ type: "boolean" })
    skin_eczema: boolean;  // 습진
    
    @Column({ type: "boolean" })
    skin_blister: boolean;  // 수포
    
    @Column({ type: "boolean" })
    skin_athletesfoot: boolean;  // 무좀
}

export default Skin;