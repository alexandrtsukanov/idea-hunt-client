import omit from 'lodash/omit'; 
import { User } from '../../types/passport';

const notPublicItems: Array<keyof User['user']> = [
    'created_at',
    'updated_at',
    'password_hash',
    'avatar_url',
    'synced',
    'id',
]

export const prepareProfileItems = (obj: User): Partial<User> => {
    return omit({...obj}, notPublicItems);
}