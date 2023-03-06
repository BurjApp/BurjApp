import { type User } from "../models";

export default class UserApi {
    public static async create(user: User): Promise<User> {
        return await new Promise<{ id: string }>((resolve) =>
            setTimeout(() => resolve({ id: user.id }), 500)
        );
    }

    public static async read(id: string): Promise<User> {
        return await new Promise<{ id: string }>((resolve) =>
            setTimeout(() => resolve({ id }), 500)
        );
    }

    public static async update(user: User): Promise<User> {
        return await new Promise<{ id: string }>((resolve) =>
            setTimeout(() => resolve({ id: user.id }), 500)
        );
    }

    public static async delete(id: string): Promise<User> {
        return await new Promise<{ id: string }>((resolve) =>
            setTimeout(() => resolve({ id }), 500)
        );
    }
}
