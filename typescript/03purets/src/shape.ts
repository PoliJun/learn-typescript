interface Shape {
    kind: "circle" | "square" | "rectangle";
    radius?: number;
    side?: number;
    width?: number;
    height?: number;
}
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius! ** 2;
        case "square":
            return shape.side! * shape.side!;
        case "rectangle":
            return shape.width! * shape.height!;
        default:
            const _exhaustiveCheck: never = shape.kind;
            return _exhaustiveCheck;
    }
}

// Unused variable

export {};
