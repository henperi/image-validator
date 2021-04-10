"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateImage = void 0;
/**
 * This method validates a File (input) or an image URL
 * @param src - The image to validate, an input File or a local or remote image url
 * @param config - an optional config object that defines the method behaviour
 * @returns - Returns true for valid images, throws or returns false for invalid images
 */
const validateImage = (src, config) => {
    if (typeof window === "undefined") {
        throw new Error("Cannot use this utility method in a non browser environment");
    }
    let url = "";
    if (typeof src === "string") {
        url = src;
    }
    else {
        url = URL.createObjectURL(src);
    }
    const image = new Image();
    image.src = url;
    return new Promise((resolve, reject) => {
        image.addEventListener("error", () => (config === null || config === void 0 ? void 0 : config.throw)
            ? reject("The media resource is either invalid, corrupt or unsuitable")
            : resolve(false));
        image.addEventListener("load", () => resolve(true), false);
    });
};
exports.validateImage = validateImage;
