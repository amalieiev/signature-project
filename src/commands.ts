import { SIGNATURE_STORAGE_KEY } from "./constants";
import { getFromStorageAsync, setSignatureAsync } from "./office";

Office.onReady(() => {});

export async function onMessageComposeHandler(event): Promise<void> {
    await insertSignatureOnCompose();
    event.completed();
}

export async function insertSignatureOnCompose() {
    const signature = await getFromStorageAsync(SIGNATURE_STORAGE_KEY);
    await setSignatureAsync(signature);
}

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
