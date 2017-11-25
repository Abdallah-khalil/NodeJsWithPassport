import { Document, Schema } from 'mongoose';

export interface User extends Document {
    displayName: string;
    image: string;
    email: string;
    facebook: {};
    google: {},
    github: {}
}

export const UserSchema = new Schema({
    displayName: {
        type: String
    },
    image: {
        type: String
    },
    email: {
        type: String
    },
    facebook: {
        type: Object
    },
    google: {
        type: Object
    },
    github: {
        type: Object
    }

})