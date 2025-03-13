export type Ad = {
    id: number,
    type: "image" | "video" | "text",
    impressions: number,
    clicks: number,
    ctr: number,
    url?: string,
    headline?: string,
    description?: string,
}