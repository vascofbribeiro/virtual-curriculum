export const emitEvent = (name: string, detail: any) => {
    const event = new CustomEvent(name, {
        detail
    });
    document.dispatchEvent(event);
}