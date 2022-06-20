//media resize

//note:size does not work with any size,just the common ones
export const smallImage = (imagePath, size) => {
    const image = imagePath.match(/media\/screenshots/)
        //for both game and screenshot urls
        ? imagePath.replace(
            "media/screenshots",
            `media/resize/${size}/-/screenshots`)
        : imagePath.replace(
            '/media/games/',
            `/media/resize/${size}/-/games/`)
    return image;
}