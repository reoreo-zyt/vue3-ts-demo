<template>
  <div class="selectHero">
    <div id="date"></div>
    <div class="toprow">
      <div class="nowplaying">
        <h3>Now Playing</h3>
        <div>
          <button id="play"><span></span></button>
        </div>
        <div>
          <div>
            <h4 id="artist">Drug Church</h4>
            <h4 id="song">Hey Listen</h4>
          </div>
        </div>
        <div>
          <button id="prev" onclick="playPrev();">‹ Prev</button
          ><button id="next" onclick="playNext();">Next ›</button>
        </div>
      </div>
      <div class="analyzer">
        <h3>Visualizer</h3>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="window">
      <div class="dragarea"></div>
      <h3>Top 10 Albums - 2024</h3>
      <div class="frame">
        <div class="imgwrap">
          <img
            class="active"
            src="https://f4.bcbits.com/img/a2870032268_16.jpg"
          /><img src="https://f4.bcbits.com/img/a4024825693_10.jpg" /><img
            src="https://f4.bcbits.com/img/a2689309068_16.jpg"
          /><img src="https://f4.bcbits.com/img/a2871861375_16.jpg" /><img
            src="https://f4.bcbits.com/img/a3540184311_16.jpg"
          /><img src="https://f4.bcbits.com/img/a1338331199_16.jpg" /><img
            src="https://f4.bcbits.com/img/a0033648289_16.jpg"
          /><img src="https://f4.bcbits.com/img/a0990023259_16.jpg" /><img
            src="https://f4.bcbits.com/img/a4071043534_16.jpg"
          /><img src="https://f4.bcbits.com/img/a3924570048_16.jpg" />
        </div>
        <div>
          <ul>
            <li>
              <a
                class="active"
                href="https://raw.githubusercontent.com/adamjkuhn/audiofiles/master/drug-church.mp3"
                >Drug Church - <span> Prude</span></a
              >
            </li>

            <li>
              <a
                href="https://raw.githubusercontent.com/adamjkuhn/audiofiles/master/blood-incantation.mp3"
                >Blood Incantation - <span>Absolute Elsewhere</span></a
              >
            </li>
            <li>
              <a
                href="https://raw.githubusercontent.com/adamjkuhn/audiofiles/master/the-chisel.mp3"
                >The Chisel - <span>What a Fucking Nightmare</span></a
              >
            </li>
            <li>
              <a
                href="https://raw.githubusercontent.com/adamjkuhn/audiofiles/master/prison-affair.mp3"
                >Prison Affair - <span>Demo IV</span></a
              >
            </li>
            <li>
              <a
                href="https://raw.githubusercontent.com/adamjkuhn/audiofiles/master/dead-finks.mp3"
                >Dead Finks - <span>Eve of Ascension</span></a
              >
            </li>
            <li>
              <a
                href="https://raw.githubusercontent.com/adamjkuhn/audiofiles/master/cassandra-jenkins.mp3"
                >Cassandra Jenkins - <span>My Light, My Destroyer</span></a
              >
            </li>
            <li>
              <a
                href="https://raw.githubusercontent.com/adamjkuhn/audiofiles/master/font.mp3"
                >Font - <span>Strange Burden</span></a
              >
            </li>
            <li>
              <a
                href="https://raw.githubusercontent.com/adamjkuhn/audiofiles/master/usa-nails.mp3"
                >USA Nails - <span>Feel Worse</span></a
              >
            </li>
            <li>
              <a
                href="https://raw.githubusercontent.com/adamjkuhn/audiofiles/master/sheer-mag.mp3"
                >Sheer Mag - <span>Playing Favorites</span></a
              >
            </li>
            <li>
              <a
                href="https://raw.githubusercontent.com/adamjkuhn/audiofiles/master/dummy.mp3"
                >Dummy - <span>Free Energy</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <svg image-rendering="optimizeSpeed">
      <filter
        color-interpolation-filters="sRGB"
        height="100%"
        id="dither"
        width="100%"
        x="0"
        y="0"
      >
        <feimage
          height="4"
          width="4"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+UlEQVR42gXBERTCUABA0X/OYDAYDAZBEAyCIBgMgiAIgiAYBINgEAwGgyAIBsFgMAiCIAiCIAgGQTAYDAaDIAiCwWDwulcIIXg8HgwGA36/H4qi8Hq9sCyLtm0Rm82G0WjE5XJhvV4ThiHT6ZT7/U4QBIhut0tVVaiqSpZl9Pt9vt8vnU6HsiwRh8OB5XLJfr9nNptxPp9xXZckSbBtGyHLMs/nE9M0aZoGSZJI05ThcEhd14jdbsdkMuF2u+H7PtvtlvF4zPV6xfM8hGEYfD4fdF2nKAp6vR7v9xtN08jzHHE6nVitVsRxzGKx4Hg84jgOURQxn8/5A7oKnYRU4EpfAAAAAElFTkSuQmCC"
        ></feimage>
        <fetile></fetile>
        <fecomposite
          in="SourceGraphic"
          k1="0"
          k2="1"
          k3="1"
          k4="-0.5"
          operator="arithmetic"
        ></fecomposite>
        <fecomponenttransfer>
          <fefuncr tablevalues="0 1" type="discrete"></fefuncr>
          <fefuncg tablevalues="0 1" type="discrete"></fefuncg>
          <fefuncb tablevalues="0 1" type="discrete"></fefuncb>
        </fecomponenttransfer>
      </filter>
    </svg>
    <div id="icon">
      <img src="https://assets.codepen.io/383755/Mac.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

let currentSong = 0,
  active_source: AudioBufferSourceNode | null = null,
  isPlaying = false,
  buffers = {},
  // @ts-ignore
  context = new (window.AudioContext || window.webkitAudioContext)(),
  analyser = context.createAnalyser(),
  nowPlaying = [
    'Drug Church',
    'Blood Incantation',
    'The Chisel',
    'Prison Affair',
    'Dead Finks',
    'Cassandra Jenkins',
    'Font',
    'USA Nails',
    'Sheer Mag',
    'Dummy',
  ],
  songPlaying = [
    'Hey Listen',
    'The Stargate [Tablet 1]',
    'Cuts Like a Knife',
    "I'm Leaving Broken",
    'Propane Tanks',
    'Aurora, IL',
    'Sentence 1',
    'Feel Worse',
    'All Lined Up',
    'Nullspace',
  ],
  tracks = document.querySelectorAll('a');

function playNext() {
  if (currentSong < 9) {
    currentSong++;
    // @ts-ignore
    document.querySelectorAll('li a')[currentSong].click();
  }
}

function playPrev() {
  if (currentSong > 0) {
    currentSong--;
    // @ts-ignore
    document.querySelectorAll('li a')[currentSong].click();
  }
}

// Web Audio API stuff

function stopActiveSource() {
  if (active_source) {
    active_source.onended = null;
    active_source.stop(0);
  }
}
function playTrack(url: string | HTMLAnchorElement) {
  // @ts-ignore
  let buffer = buffers[url];
  stopActiveSource();
  let source = context.createBufferSource();
  source.connect(analyser);
  active_source = source;
  source.onended = function () {
    active_source = null;
    if (currentSong < 9) {
      currentSong++;
      // @ts-ignore
      document.querySelectorAll('li a')[currentSong].click();
    }
  };

  source.buffer = buffer;
  source.connect(context.destination);

  source.start(0);
}

function draw() {
  requestAnimationFrame(draw);
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyser.getByteFrequencyData(dataArray);
  for (let i = 0; i < 11; i++) {
    // @ts-ignore
    document.body.style.setProperty('--top' + i, dataArray[i * 2] * 0.015);
  }
}

function getBuffer(url: string | URL) {
  let request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  request.onload = function (_evt) {
    context.decodeAudioData(request.response, store);
  };
  request.send();

  function store(buffer: any) {
    // @ts-ignore
    buffers[url] = buffer;
  }
}

onMounted(() => {
  document.querySelectorAll('li a').forEach((title, index) => {
    title.addEventListener('click', function () {
      document.querySelectorAll('.active').forEach((active) => {
        active.classList.remove('active');
      });
      document.querySelectorAll('img')[index].classList.add('active');
      title.classList.add('active');
      currentSong = index;
      // @ts-ignore
      document.getElementById('artist').textContent = nowPlaying[currentSong];
      // @ts-ignore
      document.getElementById('song').textContent = songPlaying[currentSong];
    });
  });

  window.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'ArrowDown' || key === 'ArrowRight') {
      playNext();
    }
    if (key === 'ArrowUp' || key === 'ArrowLeft') {
      playPrev();
    }
  });

  // @ts-ignore
  Draggable.create('.window, .nowplaying, .analyzer', {
    bounds: document.body,
    type: 'x,y',
    inertia: true,
  });

  document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('loaded');
    // @ts-ignore
    document.querySelectorAll('li a')[0].click();
    draw();
  });

  // @ts-ignore
  document.getElementById('play').addEventListener('click', function () {
    isPlaying = !isPlaying;
    this.classList.toggle('playing');
    // @ts-ignore
    document.querySelectorAll('li a')[currentSong].click();
    setTimeout(() => {
      if (isPlaying) {
        playTrack(tracks[currentSong]);
      } else {
        stopActiveSource();
      }
    }, 100);
  });

  for (let i = 0, len = tracks.length; i < len; i++) {
    tracks[i].addEventListener('click', function (e) {
      if (isPlaying) {
        playTrack(this.href);
      }
      analyser.fftSize = 2048;
      e.preventDefault();
    });
    getBuffer(tracks[i].href);
  }

  let dt = new Date();
  // @ts-ignore
  document.getElementById('date').textContent =
    dt.toLocaleString('en-us', { weekday: 'short' }) +
    ' ' +
    dt.toLocaleString('default', { month: 'short' }) +
    ' ' +
    dt.getDate();
});
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/chicago-2');

.selectHero {
  display: grid;
  padding: 50px;
  width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
  place-content: center;
  height: 100vh;
  font-family: 'Chicago';
  --default: url("data:image/svg+xml,%3Csvg width='10' height='46' viewBox='0 0 48 84' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6 3V6H9H12V9V12H15H18V15V18H21H24V21V24H27H30V27V30H33H36V33V36H39H42V39V42H45H48V45V48H39H30V54V60H33H36V66V72H39H42V78V84H36H30V78V72H27H24V66V60H21H18V57V54H15H12V57V60H9H6V63V66H3H0V33V0H3H6V3Z' fill='black'/%3E%3C/svg%3E%0A")
      16 16,
    pointer;
  --pointer: url("data:image/svg+xml,%3Csvg width='15' height='29' viewBox='0 0 90 114' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M42 3V6H45H48V21V36H54H60V39V42H66H72V45V48H78H84V51V54H87H90V69V84H87H84V90V96H81H78V105V114H75H72V105V96H75H78V90V84H81H84V69V54H78H72V51V48H66H60V45V42H51H42V24V6H36H30V36V66H27H24V60V54H21H18V51V48H12H6V51V54H9H12V60V66H15H18V75V84H21H24V90V96H27H30V99V102H33H36V108V114H33H30V108V102H27H24V99V96H21H18V90V84H15H12V75V66H9H6V60V54H3H0V48V42H9H18V45V48H21H24V27V6H27H30V3V0H36H42V3Z' fill='black'/%3E%3Cpath d='M72 114V105V96H75H78V90V84H81H84V69V54H78H72V51V48H66H60V45V42H51H42V24V6H36H30V36V66H27H24V60V54H21H18V51V48H12H6V51V54H9H12V60V66H15H18V75V84H21H24V90V96H27H30V99V102H33H36V108V114H72Z' fill='white'/%3E%3C/svg%3E%0A")
      16 16,
    pointer;
  cursor: var(--default);
  --windowShadow: 0 0 0 1px #000, 2px 2px 0 #000;
  &:before,
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  &:before {
    border-radius: 6px;
    box-shadow:
      inset 0 0 0 2px #000,
      0 0 0 5px #000;
  }
  &:after {
    z-index: 1000;
    transition: opacity 0.3s ease-in-out;
  }
  &.loaded {
    &:after {
      opacity: 0;
    }
  }
  svg {
    position: absolute;
  }
  h3 {
    margin: 0;
    position: absolute;
    top: 0;
    font-size: 13px;
    height: 21px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    left: 50%;
    transform: translateX(-50%);
    padding: 2px 5px 0;
    background: #fff;
  }
  .toprow {
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    justify-content: space-around;
    margin: 0 0 20px;
  }
  .imgwrap {
    width: 275px;
    aspect-ratio: 1/1;
    position: relative;
    margin-right: 5px;
  }
  .imgwrap img {
    box-shadow: 0 0 0 1px;
    width: 100%;
    height: auto;
    position: absolute;
    inset: 0;
    filter: saturate(0) brightness(1.25) url(#dither);
    z-index: 0;
    &.active {
      z-index: 1;
    }
  }
  .analyzer,
  .window,
  .nowplaying {
    cursor: var(--default) !important;
    z-index: 999;
    background: var(--windowBg);
    box-shadow: var(--windowShadow);
    border-radius: 2px;
  }
  .analyzer {
    width: 150px;
    height: 150px;
    margin-top: 40px;
    padding: 30px 5px 10px 5px;
    box-sizing: border-box;
    top: 50px;
    left: 150px;
    display: grid;
    place-content: center;
    > div {
      background: var(--lightBg);
      width: 120px;
      height: 100px;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 3px;
      grid-row-gap: 0px;
      padding: 0 3px 0;
      > div {
        position: relative;
        &:before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 10px;
          background: #222;
          transform-origin: bottom;
        }
        @for $i from 1 through 10 {
          &:nth-of-type(#{$i}) {
            &:before {
              transform: scaleY(
                calc(((var(--top#{$i}) * var(--top#{$i})) / 3) + 1)
              );
            }
          }
        }
      }
    }
  }
  .nowplaying {
    width: 250px;
    height: 150px;
    top: 50px;
    padding: 30px 5px 10px 15px;
    box-sizing: border-box;
    left: calc(50% - 50px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    > div:last-of-type {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 5px 10px 5px 5px;
      button {
        font-family: 'Chicago';
        font-size: 12px;
        line-height: 1.5;
        width: calc(50% - 10px);
        border: none;
        box-shadow:
          inset 0 0 0 1px #333,
          0 0 0 2px #fff,
          0 0 0 5px #333;
        border-radius: 3px;
        cursor: var(--pointer);
        &:hover {
          background: var(--darkBg);
          color: #fff;
        }
      }
    }
    > div:nth-of-type(2) {
      flex-grow: 1;
      padding: 10px;
      text-align: center;
      > div {
        background: var(--darkBg);
        height: 50px;
        display: grid;
        place-content: center;
        border: 2px inset #ccc;
      }
      h4 {
        margin: 0;
        display: block;
        color: #fff;
        font-size: 10px;
        line-height: 1.5;
        &:last-of-type {
          color: #ccc;
        }
      }
    }
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: calc(100% - 24px);
      background: var(--lightBg);
      z-index: -1;
    }
    div:has(#play) {
      width: 50px;
      height: 50px;
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      z-index: 2;
    }
    #play {
      position: absolute;
      opacity: 0.9;
      inset: 0;
      border: none;
      background: #fff;
      cursor: var(--pointer);
      box-shadow:
        inset 0 0 0 4px #000,
        inset 0 0 0 5px #fff,
        inset 0 0 0 6px #000;
      overflow: hidden;
      border-radius: 8px;
      filter: url(#dither);
      &:hover {
        opacity: 0.75;
      }
      &.playing {
        span {
          background:
            linear-gradient(to right, #000, #000) 15px 12.5px / 8px 25px
              no-repeat,
            linear-gradient(to right, #000, #000) calc(100% - 15px) 12.5px / 8px
              25px no-repeat;
          clip-path: none;
        }
      }
      span {
        position: absolute;
        inset: 0;
        background: #000;
        clip-path: polygon(35% 25%, 35% 75%, 80% 50%);
        transition: opacity 0.2s ease-in-out;
      }
    }
  }
  .window {
    overflow: hidden;
    pointer-events: none;
    padding: 40px 20px 20px;
    position: relative;
    width: 650px;
    height: 335px;
    box-sizing: border-box;
    max-width: 100vw;
    .frame {
      display: flex;
      justify-content: space-between;
      width: 100%;
      flex-grow: 1;
      * {
        box-sizing: border-box;
      }
    }
    .dragarea {
      position: absolute;
      pointer-events: all;
      z-index: 999;
      top: 0;
      left: 0;
      height: 24px;
      width: 100%;
    }
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        padding: 0.25rem;
        font-size: 12px;
        width: 100%;
        margin: 0;
        &:has(.active) {
          background: radial-gradient(
              circle at center,
              #ccc 0.5px,
              #fff 0.5px,
              #fff 2px
            )
            0 0 / 2px 2px;
        }
        &:not(:last-of-type) {
          border-bottom: 1px solid #efefef;
        }
      }
      a {
        pointer-events: all;
        text-decoration: none;
        cursor:
          url("data:image/svg+xml,%3Csvg width='15' height='29' viewBox='0 0 90 114' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M42 3V6H45H48V21V36H54H60V39V42H66H72V45V48H78H84V51V54H87H90V69V84H87H84V90V96H81H78V105V114H75H72V105V96H75H78V90V84H81H84V69V54H78H72V51V48H66H60V45V42H51H42V24V6H36H30V36V66H27H24V60V54H21H18V51V48H12H6V51V54H9H12V60V66H15H18V75V84H21H24V90V96H27H30V99V102H33H36V108V114H33H30V108V102H27H24V99V96H21H18V90V84H15H12V75V66H9H6V60V54H3H0V48V42H9H18V45V48H21H24V27V6H27H30V3V0H36H42V3Z' fill='black'/%3E%3Cpath d='M72 114V105V96H75H78V90V84H81H84V69V54H78H72V51V48H66H60V45V42H51H42V24V6H36H30V36V66H27H24V60V54H21H18V51V48H12H6V51V54H9H12V60V66H15H18V75V84H21H24V90V96H27H30V99V102H33H36V108V114H72Z' fill='white'/%3E%3C/svg%3E%0A")
            16 16,
          pointer;
        color: #000;
        opacity: 0.5;
        position: relative;
        height: 18px;
        display: flex;
        align-items: center;
        font-weight: 900;
        span {
          font-weight: 400;
          display: inline-block;
          margin-left: 5px;
          color: #555;
        }
        &:before {
          opacity: 0;
          content: '';
          display: inline-block;
          width: 12.5px;
          height: 12.5px;
          margin-right: 5px;
          background: url("data:image/svg+xml,%3Csvg width='95' height='126' viewBox='0 0 95 126' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31 126V121H40V63H45V58H54V54H63V49H72V45H81V40H91V86H86V99H81V95H77V90H72V85H86V81H64V86H59V90H55V103H59V108H64V112H86V108H95V0H86V9H77V16H68V23H50V32H37V99H31V95H9V99H5V104H0V117H5V121H9V126H31Z' fill='black'/%3E%3Cpath d='M72 85V90H77V95H81V99H86V86V85H72Z' fill='white'/%3E%3C/svg%3E%0A")
            50% 50% / contain no-repeat;
        }
        &:not(.active):hover {
          opacity: 0.75;
        }
        &.active {
          opacity: 1;
          &:before {
            opacity: 1;
          }
        }
      }
    }
  }
}

#icon {
  top: 40px;
  right: 40px;
  position: absolute;
  img {
    width: 30px;
    height: auto;
  }
}

#date {
  position: absolute;
  font-size: 12px;
  top: 7px;
  right: 10px;
}
</style>
