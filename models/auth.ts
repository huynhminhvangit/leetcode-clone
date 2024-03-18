export interface User {
    name: string;
    email: string;
    salt: string;
    hash: string;
    likedProblems: string[];
    dislikedProblems: string[];
    starredProblems: string[];
    solvedProblems: string[];
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

export interface UserPayload {
    name: string;
    email: string;
    salt: string;
    hash: string;
    likedProblems: string[];
    dislikedProblems: string[];
    starredProblems: string[];
    solvedProblems: string[];
}

export interface LoginResponse {
    success: string,
    tokenType: string,
    token: string,
    expiresIn: string,
    message: string
}

export interface RegisterResponse {
    success: string,
    user: User,
    token: string,
    expiresIn: string,
    message: string
}