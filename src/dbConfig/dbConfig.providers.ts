import * as mongoose from 'mongoose';

export const DBConfigProviders = [
    {
        provide: 'ConnectionString',
        useFactory: async (): Promise<mongoose.Connection> => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect('mongodb://localhost/socialAgg',{
                useMongoClient:true
            });
        },
    },
];