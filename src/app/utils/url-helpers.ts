import { NextRequest } from "next/server";

// Grab the first segment of a url
export const getFirstSegment = (applicationPath: string): string => {
    // Split the path by '/'
    const segments = applicationPath.split('/').filter(segment => segment.length > 0);
    // Get the first segment and add the leading '/'
    return segments.length > 0 ? `/${segments[0]}` : '';
};

// Generate pathname for the front-end
export const urlPath = (applicationPath : string, tenant : string) => {
    return `/${tenant}${applicationPath}`;
}
// Generate URL object for the back-end
export const buildUrl = (applicationPath : string, tenant : string, request : NextRequest) => {
    return new URL(urlPath(applicationPath, tenant), request.url);
}