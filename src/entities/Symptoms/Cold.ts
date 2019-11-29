import CommonSymptom from "./CommonSymptom/CommonSymptom";
import { Entity, Column } from "typeorm";

@Entity()
class Cold extends CommonSymptom { 

    @Column({ type: "boolean" })
    cold_cough: boolean;  // 기침
    
    @Column({ type: "boolean" })
    cold_headache: boolean;  // 두통
    
    @Column({ type: "boolean" })
    cold_snot: boolean;  // 콧물

    @Column({ type: "boolean" })
    cold_throat: boolean;  // 목아픔

    @Column({ type: "boolean" })
    cold_fever: boolean;  // 열
    
    @Column({ type: "boolean" })
    cold_muscle: boolean;  // 몸살
}

export default Cold;