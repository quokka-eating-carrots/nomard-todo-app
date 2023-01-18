const lyrics = [
  {
    lyric: "솔직히 나에게도 지금 이 순간은 꿈만 같아 너와 함께라",
    singer: "day6",
  },
  {
    lyric: "우린 사랑을 절대 쉬지 않아",
    singer: "seventeen",
  },
  {
    lyric: "영원한 사랑이 있다면 그건 당신이겠죠",
    singer: "seventeen",
  },
  {
    lyric: "궁금해 네 맘 한가운데 나는 어딘지",
    singer: "nct dream",
  },
  {
    lyric: "나의 다섯손가락 사이로 빠져나가는 넌",
    singer: "day6",
  },
  {
    lyric: "넌 검은색의 하늘을 밝히는 달을 닮았지만",
    singer: "day6",
  },
  {
    lyric: "그댄 웃는 게 정말 예쁜 사람이라서",
    singer: "day6",
  },
  {
    lyric: "가끔 일렁이는 날도 네가 있어 준다면",
    singer: "day6",
  },
  {
    lyric: "저 밤하늘의 달은 내 방 창문 안에 존재해",
    singer: "wisue",
  },
  {
    lyric: "그래도 너라면 나의 기적인 것 같아",
    singer: "wisue",
  }
];

const lyric = document.querySelector(".lyric");
const singer = document.querySelector(".singer");

const todayLyrics = lyrics[Math.floor(Math.random() * lyrics.length)];

lyric.innerText = todayLyrics.lyric;
singer.innerText = todayLyrics.singer;
