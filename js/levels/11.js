sudovar oneone = Kitty.oneone = function() {
  level = new Kitty.Level({
    playerPos: [56,192],
    leader: Kitty.oneone,
    background: "#7974FF",
    scrolling: true,
    invincability: [144, 192, 240],
    exit: 204,
    floorSprite: new Kitty.Sprite('sprites/tiles.png', [0,0],[16,16],0),
    cloudSprite: new Kitty.Sprite('sprites/tiles.png', [0,320],[48,32],0),
    wallSprite: new Kitty.Sprite('sprites/tiles.png', [0, 16],[16,16],0),
    brickSprite: new Kitty.Sprite('sprites/tiles.png', [16, 0], [16,16], 0),
    brickBounceSprite: new Kitty.Sprite('sprites/tiles.png',[32,0],[16,16],0),
    rubbleSprite: function () {
      return new Kitty.Sprite('sprites/', [64,0], [8,8], 3, [0,1])
    },
  })
}
