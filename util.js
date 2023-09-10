import { atlas } from "./atlas.js";

export const randomArrayEntry = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const renderSprite = (ctx, sprite, tileSize, x, y, camera) => {
  let spriteData = atlas.getSpriteData(sprite);
  //17 is the atlas default normal tileSize
  console.log(spriteData, Number(spriteData["off-x-l"]));
  let scale = tileSize / 17;
  let pos = calculateSpritePosition(spriteData, tileSize, x, y, camera);
  ctx.drawImage(
    atlas.img,
    spriteData.x,
    spriteData.y,
    spriteData["width"],
    spriteData["height"],
    pos[0],
    pos[1],
    spriteData.width * scale,
    spriteData.height * scale
  );
};

const calculateSpritePosition = (spriteData, tileSize, x, y, camera) => {
  /*let newPosX =
    x + Number(tileSize) / 2 - spriteData.width / 2 + spriteData["off-x-l"];
  let newPosY =
    y + Number(tileSize) / 2 - spriteData.height / 2 + spriteData["off-y-t"];*/
  let newPosX =
    x + (spriteData["off-x-l"] / spriteData["full-width"]) * tileSize;
  let newPosY =
    y + (spriteData["off-y-t"] / spriteData["full-height"]) * tileSize;
  newPosX -= camera.position.x;
  newPosY -= camera.position.y;
  return [newPosX, newPosY];
};
