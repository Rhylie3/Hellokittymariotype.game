var oneone = Kitty.oneone = function() {
  level = new Kitty.Level({
    playerPos: [56,192],
    leader: Kitty.oneone,
    background: "#7974FF",
    scrolling: true,
    invincability: [144, 192, 240],
    exit: 204,
    floorSprite: new Kitty.Sprite('sprites/tiles.png', [0,0],[16,16],0),
  })
}
