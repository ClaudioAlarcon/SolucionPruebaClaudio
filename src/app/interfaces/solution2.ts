export interface Solution2 {
    data?: ObjectEndPoint;
    error?: number;
    success: boolean;
}

export interface ObjectEndPoint {
    paragraph: string;
    number: number;
    hasCopyright: boolean;
}
