# Image Validator

## This package helps to validate images on the DOM.

validateImage is small and simple utility package that can validate any kind of image, 
- It can check and detect corrupt image files.
- it can check and detect files whose extensions have been renamed to look like images.

It support actual image files(from input), or any string image url (could be a data url, local url or a remote url on a server).

## Examples

```typescript
import { validateImage } from "../src/index";

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
  const isValidImage = await validateImage(url, { throw: true });
  console.log(isValidImage);
  // expected output ==> true (for valid images)
  // expected output ==> Error (for invalid images)
};
```
