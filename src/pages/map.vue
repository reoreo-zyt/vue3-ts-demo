<template>
  <div class="game-container">
    <div ref="gameContainer"></div>
  </div>
</template>

<script lang="ts" setup>
import Phaser from 'phaser';
import { MapScene } from '../scenes/map';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  width: 1920,
  height: 1080,
  backgroundColor: '#dfdede',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 200, y: 200 },
    },
  },
  scale: { mode: Phaser.Scale.RESIZE },
  scene: MapScene,
};

new Phaser.Game(config);
</script>

<style lang="scss" scoped>
.game-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
