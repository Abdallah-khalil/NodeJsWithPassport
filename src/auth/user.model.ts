export interface IUserModel {
    email?: string;
    image?: string;
    displayName: string;
    googleAccount?: IGoogleModel;
    facebookAccount?: IFacebookModel;
    githubAccount?:IGithubModel;
}


interface IGoogleModel {
    googleId: string;
    googleToken: string;
}

interface IFacebookModel {
    facebookId: string;
    facebookToken: string;
}

interface IGithubModel {
    githubId: string;
    githubToken: string;
}