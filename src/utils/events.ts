interface IDetail {
    whoId?: string;
    map?: string;
}

export const emitEvent = (name: string, detail: IDetail) => {
    const event = new CustomEvent(name, {
        detail
    });
    document.dispatchEvent(event);
}