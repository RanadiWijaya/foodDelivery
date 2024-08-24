export const UserSchema = {
    name: 'User',
    properties: {
        id: 'int',
        username: 'string',
        password: 'string',
        email: 'string',
        isLogin: 'bool'
    },
    primaryKey: 'id'
}