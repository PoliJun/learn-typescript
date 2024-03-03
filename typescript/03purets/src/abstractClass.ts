abstract class TakePhoto {
    constructor(cameraMode: string, filter: string, burst: number) {}

    abstract getSepia(): void;

    // Meaning of abstract class is that it can have abstract methods and non-abstract methods
    getRealTime(): number {
        return 0;
    }
}

class Instagram extends TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number) {
        super(cameraMode, filter, burst);
    }
    getSepia(): void {
        console.log("Applying sepia filter...");
        // Implementation logic for applying sepia filter goes here
    }
}

const hc = new Instagram("a", "b", 1);
