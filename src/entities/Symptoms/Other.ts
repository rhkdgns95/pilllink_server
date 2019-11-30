import { CommonSymptom } from "./CommonSymptom/CommonSymptom";
import { Entity, Column } from "typeorm";

@Entity()
class Other extends CommonSymptom { 

    @Column({ type: "boolean" })
    other_tmp: boolean;  // # 임시
}

export default Other;