export async function tryPromise(promise: any, defaultReturn: any, ...params: any ): Promise<any> {
    try {
        return await promise(...params);
    } catch {
        return defaultReturn;
    }
}