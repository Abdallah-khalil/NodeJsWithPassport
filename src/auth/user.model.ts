export interface IUserModel {
    email: string;
    image: string;
    displayName: string;
    googleAccount: IGoogleModel
}


interface IGoogleModel {
    googleId:string;
    googleToken:string;
}