import { RoleModel } from "../shared/models/role.model";

export interface DataConfig {
    api: string;
    title: string;
}

export const DATA_CONFIG: Record<RoleModel, DataConfig> = {
    admin: {
        api: 'https://jsonplaceholder.typicode.com/users',
        title: 'Admin Users'
    },
    instructor: {
        api: 'https://jsonplaceholder.typicode.com/posts',
        title: 'Instructor Posts'
    },
    user: {
        api: 'https://fakestoreapi.com/products',
        title: 'User Products'
    },
    manager: {
        api: 'https://jsonplaceholder.typicode.com/todos',
        title: 'Manager Todos'
    }
};
