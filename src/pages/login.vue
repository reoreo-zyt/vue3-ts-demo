<template>
  <div class="homepage">
    <div v-if="showEffect" class="halfmoon"></div>
    <div v-if="showEffect" class="otherhalfmoon"></div>
    <div class="gamebox">
      <h3 class="font-size-title">霸王的大陆</h3>

      <form class="login">
        <p class="font-size-subtitle">用户名：</p>
        <i class="fa fa-envelope-o"></i>
        <input
          class="font-size-subtitle"
          type="text"
          placeholder="输入用户名"
          required
        />
        <p class="font-size-subtitle">密码：</p>
        <i class="fa fa-key"></i>
        <input
          type="password"
          class="font-size-subtitle"
          placeholder="输入密码"
          id="theEye"
        /><br />
        <span class="eye" onclick="myFunction()">
          <i id="hide" class="fa fa-eye"></i>
          <i id="hidden" class="fa fa-eye-slash"></i>
        </span>
        <input type="submit" value="开始" />
      </form>

      <a href="#" class="font-size-subtitle">忘记密码？</a><br />
      <a href="#" class="font-size-subtitle">还没有账号？</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showEffect = ref(false);
</script>

<style lang="scss" scoped>
@use '@/scss/font.scss';

.homepage {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
  background-size: cover;
  background-position: center;
  animation-name: homepage;
  animation-fill-mode: forwards;
  animation-duration: 2s;
}

.homepage:hover {
  cursor: pointer;
  // background: url('https://wallpaperset.com/w/full/f/d/b/465611.jpg');
  background-size: cover;
  background: linear-gradient(30deg, black, #8942cc, #66c2ff, #ffcccc, #c52ebe);
}

@keyframes homepage {
  0% {
    background-color: whitesmoke;
  }
  50% {
    background-color: plum;
  }
  100% {
    background-color: black;
  }
}

.halfmoon {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 25px 10px 10px 30px rgb(247, 247, 185);
  animation-name: halfmoon;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes halfmoon {
  0% {
    transform: scale(1) rotate(-45deg);
  }
  50% {
    transform: scale(0.5) rotate(-45deg);
  }
}

.otherhalfmoon {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 100%;
  box-shadow: 30px 30px 40px 20px rgb(247, 247, 185);
  animation-name: otherhalfmoon;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes otherhalfmoon {
  0% {
    transform: scale(0.5) rotate(45deg);
  }
  50% {
    transform: scale(1.5) rotate(45deg);
  }
}

h3 {
  font-family: 'Press Start 2P', cursive;
  text-shadow:
    -5px 3px 7px lightgreen,
    5px 5px 7px black;
  text-decoration-color: black;
  text-align: center;
  padding: 10% 0% 10% 0%;
  animation-name: h3;
  animation-fill-mode: forwards;
  animation-duration: 3s;
}

@keyframes h3 {
  0% {
    color: lightgreen;
  }
  50% {
    color: whitesmoke;
  }
  100% {
    color: black;
  }
}

h3:hover {
  transform: scale(1.1);
}

.gamebox {
  width: 320px;
  height: 520px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 50px 10px 50px;
  background: linear-gradient(35deg, #fff9b3, #b3d2ff, #ffb3cd);
  border-radius: 30px;
  box-shadow:
    -3px -3px 20px 5px lightgreen,
    3px 3px 20px 5px lightgreen;
}

.login p {
  position: relative;
  font-family: 'Press Start 2P';
  margin-top: 40px;
  line-height: 50px;
  font-size: 8px;
  width: 100%;
}

.login input[type='text'],
[type='password'] {
  position: absolute;
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  text-align: center;
  padding: 5px 0 5px 0;
  margin: 10px 0 10px 0;
  width: 80%;
  font-family: 'Press Start 2P';
  font-size: 10px;
}
.login input[type='submit'] {
  padding: 12px 30px 12px 30px;
  background: linear-gradient(75deg, lightpink, lightyellow, lightblue);
  border-radius: 30px;
  border: 2px solid black;
  text-align: center;
  font-family: 'Press Start 2P';
  font-size: 10px;
  margin: 10% -35% 10% 35%;
}
.login input[type='submit']:hover {
  cursor: pointer;
  background: linear-gradient(35deg, #fff9b3, #b3d2ff, #ffb3cd);
}

.gamebox a {
  line-height: 27px;
  font-size: 6px;
  color: black;
  font-family: 'Press Start 2P';
}

.gamebox a:hover {
  color: green;
}

#hide {
  position: absolute;
}

#hidden {
  position: absolute;
}

.eye {
  position: absolute;
  margin: -4% -75% 4% 75%;
}
.fa {
  position: absolute;
  margin: -30 0 -30 0;
}

#footer {
  position: absolute;
  left: 85%;
  top: 95%;
}
</style>
