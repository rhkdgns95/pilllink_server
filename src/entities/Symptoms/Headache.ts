import CommonSymptom from "./CommonSymptom/CommonSymptom";
import { Column, Entity } from "typeorm";

@Entity()
class Headache extends CommonSymptom { 
    
    @Column({ type: "boolean" })
    headache_headache: boolean;  // 두통

    @Column({ type: "boolean" })
    headache_migraine: boolean;  // 편두통
}

export default Headache;