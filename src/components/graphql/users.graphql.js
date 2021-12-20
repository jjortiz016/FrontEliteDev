import { gql } from "@apollo/client";

export const VIEWER_QUERY_ALL_USERS = gql `
    query GetAllUsers {   
      allUsers {
            _id
            nombre
            correo
            contrasena
            rol
        }
    }

`;

export const REGISTER = gql `
mutation Register($input: RegisterInput!) {
    register(input: $input) {
    _id
    nombre
    }
  }

`;


