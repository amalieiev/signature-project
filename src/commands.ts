Office.onReady(() => {});

export async function onMessageComposeHandler(event): Promise<void> {
    await insertSignatureOnCompose();
    event.completed();
}

export async function insertSignatureOnCompose() {}

export function getGlobal() {
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    return typeof global !== "undefined" ? global : undefined;
}

const g = getGlobal() as any;

g.onMessageComposeHandler = onMessageComposeHandler;

Office.actions.associate("onMessageComposeHandler", onMessageComposeHandler);
