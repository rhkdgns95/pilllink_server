import CommonSymptom from "./CommonSymptom/CommonSymptom";
import { Entity, Column } from "typeorm";

@Entity()
class Female extends CommonSymptom { 
    
    @Column({ type: "boolean" })
    female_tmp: boolean; // 임시
}

export default Female;