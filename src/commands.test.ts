beforeEach(() => {
    global.Office = {
        onReady: () => {},
        actions: {
            associate: () => {},
        },
    } as any;
});

describe("Outlook Runtime", () => {
    it("should associate onMessageComposeHandler", async () => {
        jest.spyOn(Office.actions, "associate");

        const commandsModule = await import("./commands");

        expect(Office.actions.associate).toHaveBeenCalledTimes(1);
        expect(Office.actions.associate).toHaveBeenCalledWith(
            "onMessageComposeHandler",
            commandsModule.onMessageComposeHandler
        );
    });
});
