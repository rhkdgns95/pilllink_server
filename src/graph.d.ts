export const typeDefs = ["enum Language {\n  KO\n  EN\n  CH\n  FR\n}\n\nenum Status {\n  COLD\n  COLIC\n  FEMALE\n  HANGOVER\n  OTHER\n  SKIN\n  TOOTHACHE\n  OTHER\n}\n\nunion Symptoms = Cold | Colic | Female | Hangover | Other | Skin | Toothache\n\nenum Allergy {\n  NULL\n  ALLERGY_PAINKILLER\n  ALLERGY_ANTIBIOTIC\n  ALLERGY_LACTOSE\n}\n\nenum Pregnant {\n  NULL\n  PREGNANT_TRUE\n}\n\nenum ChronicDiseases {\n  NULL\n  CHRONIC_LIVER\n  CHRONIC_KIDNEY\n}\n\ntype MedicalRecord {\n  lang: Language!\n  status: Status!\n  symptoms: Symptoms!\n  # confirmRecord: ConfirmRecord!\n  createdAt: String!\n  updateAt: String\n  allergy: Allergy!\n  pregnant: Pregnant!\n  chronicDiseases: ChronicDiseases!\n}\n\n# 감기\ntype Cold {\n  cold_cough: Boolean\n  cold_headache: Boolean\n  cold_snot: Boolean\n  cold_throat: Boolean\n  cold_fever: Boolean\n  cold_muscle: Boolean\n}\n\n# 복통\ntype Colic {\n  colic_diarrhead: Boolean\n  colic_periodCramps: Boolean\n  colic_indigestion: Boolean\n  colic_constipation: Boolean\n  colic_sickness: Boolean\n  colic_heartburn: Boolean\n}\n\n# 여성질환\ntype Female {\n  female_tmp: Boolean\n}\n\n# 숙취\ntype Hangover {\n  hangover_headache: Boolean\n  hangover_diarrhea: Boolean\n  hangover_throwup: Boolean\n  hangover_sickness: Boolean\n  hangover_heartburn: Boolean\n}\n\n# 두통\ntype Headache {\n  headache_headache: Boolean\n  headache_migraine: Boolean\n}\n\n# 기타\ntype Other {\n  other_tmp: Boolean\n}\n\n# 피부질환\ntype Skin {\n  skin_abrasion: Boolean\n  skin_acne: Boolean\n  skin_hives: Boolean\n  skin_eczema: Boolean\n  skin_blister: Boolean\n  skin_athletesfoot: Boolean\n}\n\n# 구강질환\ntype Toothache {\n  toothache_needle: Boolean\n  toothache_stomatitis: Boolean\n  toothache_drylips: Boolean\n  toothache_badbreath: Boolean\n  toothache_gum: Boolean\n  toothache_drymouth: Boolean\n}\n\ntype EmailSignInResponse {\n  ok: String!\n  error: String\n  token: String\n}\n\ntype Query {\n  EmailSignIn: EmailSignInResponse\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\nenum Gender {\n  MAN\n  WOMAN\n}\n\ntype Mutation {\n  EmailSignUp(email: String!, name: String!, password: String!, address: String!, age: String!, gender: [Gender]!): EmailSignUpResponse!\n}\n\ntype User {\n  id: Int!\n  firstName: String!\n  lastName: String!\n  email: String!\n  password: String!\n  age: Int!\n  gender: [Gender]!\n  nationality: String!\n  address: String!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  EmailSignIn: EmailSignInResponse | null;
}

export interface EmailSignInResponse {
  ok: string;
  error: string | null;
  token: string | null;
}

export interface Mutation {
  EmailSignUp: EmailSignUpResponse;
}

export interface EmailSignUpMutationArgs {
  email: string;
  name: string;
  password: string;
  address: string;
  age: string;
  gender: Array<Gender>;
}

export type Gender = "MAN" | "WOMAN";

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export type Language = "KO" | "EN" | "CH" | "FR";

export type Status = "COLD" | "COLIC" | "FEMALE" | "HANGOVER" | "OTHER" | "SKIN" | "TOOTHACHE";

export type Symptoms = Cold | Colic | Female | Hangover | Other | Skin | Toothache;

export interface Cold {
  cold_cough: boolean | null;
  cold_headache: boolean | null;
  cold_snot: boolean | null;
  cold_throat: boolean | null;
  cold_fever: boolean | null;
  cold_muscle: boolean | null;
}

export interface Colic {
  colic_diarrhead: boolean | null;
  colic_periodCramps: boolean | null;
  colic_indigestion: boolean | null;
  colic_constipation: boolean | null;
  colic_sickness: boolean | null;
  colic_heartburn: boolean | null;
}

export interface Female {
  female_tmp: boolean | null;
}

export interface Hangover {
  hangover_headache: boolean | null;
  hangover_diarrhea: boolean | null;
  hangover_throwup: boolean | null;
  hangover_sickness: boolean | null;
  hangover_heartburn: boolean | null;
}

export interface Other {
  other_tmp: boolean | null;
}

export interface Skin {
  skin_abrasion: boolean | null;
  skin_acne: boolean | null;
  skin_hives: boolean | null;
  skin_eczema: boolean | null;
  skin_blister: boolean | null;
  skin_athletesfoot: boolean | null;
}

export interface Toothache {
  toothache_needle: boolean | null;
  toothache_stomatitis: boolean | null;
  toothache_drylips: boolean | null;
  toothache_badbreath: boolean | null;
  toothache_gum: boolean | null;
  toothache_drymouth: boolean | null;
}

export type Allergy = "NULL" | "ALLERGY_PAINKILLER" | "ALLERGY_ANTIBIOTIC" | "ALLERGY_LACTOSE";

export type Pregnant = "NULL" | "PREGNANT_TRUE";

export type ChronicDiseases = "NULL" | "CHRONIC_LIVER" | "CHRONIC_KIDNEY";

export interface MedicalRecord {
  lang: Language;
  status: Status;
  symptoms: Symptoms;
  createdAt: string;
  updateAt: string | null;
  allergy: Allergy;
  pregnant: Pregnant;
  chronicDiseases: ChronicDiseases;
}

export interface Headache {
  headache_headache: boolean | null;
  headache_migraine: boolean | null;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  gender: Array<Gender>;
  nationality: string;
  address: string;
  createdAt: string;
  updatedAt: string | null;
}
