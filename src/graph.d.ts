export const typeDefs = ["type EmailSignInResponse {\n  ok: String!\n  error: String\n  token: String\n}\n\ntype Query {\n  EmailSignIn: EmailSignInResponse\n}\n\ntype EmailSignUpResponse {\n  ok: String!\n  error: String\n  token: String\n}\n\nenum Gender {\n  MAN\n  WOMAN\n}\n\ntype Mutation {\n  EmailSignUp(email: String!, name: String!, password: String!, address: String!, age: String!, gender: [Gender]!): EmailSignUpResponse!\n}\n"];
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
  ok: string;
  error: string | null;
  token: string | null;
}
