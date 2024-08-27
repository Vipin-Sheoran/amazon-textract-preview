export type DataProps = {
    Blocks: {
        BlockType: "PAGE" | "LINE" | "WORD";
        Text: string;
        Id?: string;
        Geometry: {
            Polygon: {
                X: number;
                Y: number;
            }[];
        };
    }[];
};