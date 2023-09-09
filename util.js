import { atlas } from "./atlas.js";

export const randomArrayEntry = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const renderSprite = (ctx, sprite, tileSize, x, y, camera) => {
  let spriteData = atlas.getSpriteData(sprite);
  //17 is the atlas default normal tileSize
  let scale = tileSize / 17;
  ctx.drawImage(
    atlas.img,
    spriteData.x,
    spriteData.y,
    spriteData["full-width"],
    spriteData["full-height"],
    x - camera.position.x,
    y - camera.position.y,
    spriteData.width * scale,
    spriteData.height * scale
  );
};
