# Image Validator

## This package helps to validate images on the DOM.

A small and simple utility package that can validate any kind of image,

- It can check and detect corrupt image files.
- It can check and detect files whose extensions have been renamed to look like images.
- It can check and detect remote or local image urls

It supports actual image files(from input), or any string image url (could be a data url, local url or a remote url on a server).

## Installation

```
npm install image-validator
```

## Examples & Usage

### ES6

```typescript
import { validateImage } from "image-validator";

// To validate a file
const fileValidation = async (file: File) => {
  const isValidImage = await validateImage(file);
  console.log(isValidImage);
  // expected output ==> true or false
};

// To validate a url, can be a remote url on a server or a local url on system
const urlValidation = async (url: string) => {
  const isValidImage = await validateImage(url);
  console.log(isValidImage);
  // expected output ==> true or false
};

// We can ensure a throw for bad images by passing a second argument
const urlValidationThatThrowsOnError = async (url: string) => {
  try {
    const isValidImage = await validateImage(url, { throw: true });
    console.log(isValidImage);
    // expected output ==> true (for valid images)
  } catch (error) {
    console.log(error);
    // expected output ==> "The media resource is either invalid, corrupt or unsuitable" (for invalid images)
  }
};
```

### ES5

```javascript
const validateImage = require("./index").validateImage;

// To validate a file
const fileValidation = (file: File) => {
  validateImage(file).then((validationResult) => console.log(validationResult));
  // expected output ==> true or false
};

// To validate a url, can be a remote url on a server or a local url on system
const urlValidation = async (url: string) => {
  validateImage(url).then((validationResult) => console.log(validationResult));
  // expected output ==> true or false
};

// We can ensure a throw for bad images by passing a second argument
const urlValidationThatThrowsOnError = async (url: string) => {
  validateImage(url, { throw: true })
    .then((validationResult) => {
      console.log(validationResult);
      // expected output ==> true (for valid images)
    })
    .catch((error) => {
      console.log(isValidImage);
      // expected output ==> "The media resource is either invalid, corrupt or unsuitable" (for invalid images)
    });
};
```
