import { defineField } from "sanity";

const account = {
    name: 'account',
    title: 'Account',
    type: 'document',
    fields: [
        defineField({  // using different providers: github, google, credentials provider
            name: 'providerType',
            type: 'string',
        }),
        defineField({
            name: 'providerId',
            type: 'string'
        }),
        defineField({
            name: 'providerAccountId',
            type: 'string'
        }),
        defineField({
            name: 'refreshToken',
            type: 'string'
        }),
        defineField({
            name: 'accessToken',
            type: 'string'
        }),
        defineField({
            name: 'accessTokenExpires',
            type: 'number'
        }),
        // tham chiếu tới user schema
        defineField({
            name: 'user',
            title: 'user',
            type: 'reference',
            to: {type: 'user'},
        }),
         
    ]
}
export default account;