/**
 * This method validates a File (input) or an image URL
 * @param src - The image to validate, an input File or a local or remote image url
 * @param config - an optional config object that defines the method behaviour
 * @returns - Returns true for valid images, throws or returns false for invalid images
 */
export declare const validateImage: (src: string | File, config?: {
    throw: boolean;
} | undefined) => Promise<boolean | undefined>;
