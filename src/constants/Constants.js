import { EVENTS_DEFAULT } from "@holywater-tech/ads-builder/framework/components/EventsDispatcher";
import Screen from "../Screen";

export const EVENTS = {
  ...EVENTS_DEFAULT,
  ON_LETTER_CLICK: "onLetterClick",
  ON_WORD_COMPLETE: "onWordComplete",
  ON_BONUS_CLICK1: "onBonusClick1",
  ON_BONUS_CLICK2: "onBonusClick2",
  ON_BONUS_CLICK3: "onBonusClick3",
  ON_OPEN_STORE: "onOpenStore",
  ON_NEXT_LEVEL: "onNextLevel",
  ADD_TUTORIAL: "addTutorial",
  REMOVE_TUTORIAL: "removeTutorial",
};

export const ITEMS = ["1", "2", "3", "4", "5"];
export const LAYERS_DEPTH = {
  TITLE: 5,
  ITEM_GLOW: 35,
  ITEM_BASE: 34,
  ITEM: 30,
  MISTAKES: 33,
  TIMER: 35,
  HAND_TUTORIAL: 44,
};

export const COLORS = [
  0xcf4e4e, // Червоний
  0x4ecf78, // Зелений
  0x4e9ccf, // Блакитний
  0xcf4eab, // Рожевий
  0xcf8e4e, // Помаранчевий
  0xe6cf4e, // Жовтий
  0x9a4ecf, // Фіолетовий
  0x4ecfb6, // Бірюзовий
  0xcf4e62, // Темно-червоний
  0x4e4ecf, // Синій
];

export const COUNTRIES = [
  { x: -200, y: -40, country: "SPAIN" },
  { x: 0, y: -40, country: "ITALY" },
  { x: 200, y: -40, country: "BRAZIL" },
  { x: -200, y: 5, country: "USA" },
  { x: 0, y: 5, country: "CHINA" },
  { x: 200, y: 5, country: "JAPAN" },
  { x: -200, y: 50, country: "INDIA" },
  { x: 0, y: 50, country: "MEXICO" },
  { x: 200, y: 50, country: "EGYPT" },
  { x: 0, y: 95, country: "SWEDEN" },
];
export const LETTERS = [
  ["m", "e", "x", "i", "c", "o", "s", "y"],
  ["s", "w", "e", "d", "e", "n", "p", "o"],
  ["e", "e", "x", "c", "c", "o", "a", "l"],
  ["m", "g", "x", "i", "h", "l", "i", "j"],
  ["e", "i", "y", "p", "t", "i", "n", "a"],
  ["m", "n", "l", "p", "c", "z", "n", "p"],
  ["u", "d", "a", "i", "t", "a", "q", "a"],
  ["s", "i", "t", "z", "c", "r", "u", "n"],
  ["a", "a", "i", "i", "c", "b", "u", "m"],
];
export const LETTERSs = [
  { letter: "Q", x: -280, y: -330, row: 1, column: 1 },
  { letter: "W", x: -224, y: -330, row: 1, column: 1 },
  { letter: "E", x: -168, y: -330, row: 1, column: 1 },
  { letter: "R", x: -112, y: -330, row: 1, column: 1 },
  { letter: "T", x: -56, y: -330, row: 1, column: 1 },
  { letter: "Y", x: 0, y: -330, row: 1, column: 1 },
  { letter: "U", x: 56, y: -330, row: 1, column: 1 },
  { letter: "I", x: 112, y: -330, row: 1, column: 1 },
  // { letter: "O", x: 168, y: -330, row: 1, column: 1 },
  // { letter: "P", x: 224, y: -330, row: 1, column: 1 },
  // { letter: "P", x: 280, y: -330, row: 1, column: 1 },

  // { letter: "Q", x: -280, y: -264, row: 2, column: 1 },
  // { letter: "W", x: -224, y: -264, row: 2, column: 2 },
  // { letter: "E", x: -168, y: -264, row: 2, column: 3 },
  // { letter: "R", x: -112, y: -264, row: 2, column: 4 },
  // { letter: "T", x: -56, y: -264, row: 2, column: 5 },
  // { letter: "Y", x: 0, y: -264, row: 2, column: 6 },
  // { letter: "U", x: 56, y: -264, row: 2, column: 7 },
  // { letter: "I", x: 112, y: -264, row: 2, column: 8 },
  // { letter: "O", x: 168, y: -264, row: 2, column: 9 },
  // { letter: "P", x: 224, y: -264, row: 2, column: 10 },
  // { letter: "P", x: 280, y: -264, row: 2, column: 11 },

  { letter: "Q", x: -280, y: -198, row: 3, column: 1 },
  { letter: "W", x: -224, y: -198, row: 3, column: 2 },
  { letter: "E", x: -168, y: -198, row: 3, column: 3 },
  { letter: "R", x: -112, y: -198, row: 3, column: 4 },
  { letter: "T", x: -56, y: -198, row: 3, column: 5 },
  { letter: "Y", x: 0, y: -198, row: 3, column: 6 },
  { letter: "U", x: 56, y: -198, row: 3, column: 7 },
  { letter: "I", x: 112, y: -198, row: 3, column: 8 },
  // { letter: "O", x: 168, y: -198, row: 3, column: 9 },
  // { letter: "P", x: 224, y: -198, row: 3, column: 10 },
  // { letter: "P", x: 280, y: -198, row: 3, column: 11 },

  { letter: "Q", x: -280, y: -132, row: 4, column: 1 },
  { letter: "W", x: -224, y: -132, row: 4, column: 2 },
  { letter: "E", x: -168, y: -132, row: 4, column: 3 },
  { letter: "R", x: -112, y: -132, row: 4, column: 4 },
  { letter: "T", x: -56, y: -132, row: 4, column: 5 },
  { letter: "Y", x: 0, y: -132, row: 4, column: 6 },
  { letter: "U", x: 56, y: -132, row: 4, column: 7 },
  { letter: "I", x: 112, y: -132, row: 4, column: 8 },
  // { letter: "O", x: 168, y: -132, row: 4, column: 9 },
  // { letter: "P", x: 224, y: -132, row: 4, column: 10 },
  // { letter: "P", x: 280, y: -132, row: 4, column: 11 },

  { letter: "Q", x: -280, y: -66, row: 5, column: 1 },
  { letter: "W", x: -224, y: -66, row: 5, column: 2 },
  { letter: "E", x: -168, y: -66, row: 5, column: 3 },
  { letter: "R", x: -112, y: -66, row: 5, column: 4 },
  { letter: "T", x: -56, y: -66, row: 5, column: 5 },
  { letter: "Y", x: 0, y: -66, row: 5, column: 6 },
  { letter: "U", x: 56, y: -66, row: 5, column: 7 },
  { letter: "I", x: 112, y: -66, row: 5, column: 8 },
  // { letter: "O", x: 168, y: -66, row: 5, column: 9 },
  // { letter: "P", x: 224, y: -66, row: 5, column: 10 },
  // { letter: "P", x: 280, y: -66, row: 5, column: 11 },

  { letter: "Q", x: -280, y: 0, row: 6, column: 1 },
  { letter: "W", x: -224, y: 0, row: 6, column: 2 },
  { letter: "E", x: -168, y: 0, row: 6, column: 3 },
  { letter: "R", x: -112, y: 0, row: 6, column: 4 },
  { letter: "T", x: -56, y: 0, row: 6, column: 5 },
  { letter: "Y", x: 0, y: 0, row: 6, column: 6 },
  { letter: "U", x: 56, y: 0, row: 6, column: 7 },
  { letter: "I", x: 112, y: 0, row: 6, column: 8 },
  // { letter: "O", x: 168, y: 0, row: 6, column: 9 },
  // { letter: "P", x: 224, y: 0, row: 6, column: 10 },
  // { letter: "P", x: 280, y: 0, row: 6, column: 11 },

  { letter: "Q", x: -280, y: 66, row: 7, column: 1 },
  { letter: "W", x: -224, y: 66, row: 7, column: 2 },
  { letter: "E", x: -168, y: 66, row: 7, column: 3 },
  { letter: "R", x: -112, y: 66, row: 7, column: 4 },
  { letter: "T", x: -56, y: 66, row: 7, column: 5 },
  { letter: "Y", x: 0, y: 66, row: 7, column: 6 },
  { letter: "U", x: 56, y: 66, row: 7, column: 7 },
  { letter: "I", x: 112, y: 66, row: 7, column: 8 },
  // { letter: "O", x: 168, y: 66, row: 7, column: 9 },
  // { letter: "P", x: 224, y: 66, row: 7, column: 10 },
  // { letter: "P", x: 280, y: 66, row: 7, column: 11 },

  { letter: "Q", x: -280, y: 132, row: 8, column: 1 },
  { letter: "W", x: -224, y: 132, row: 8, column: 2 },
  { letter: "E", x: -168, y: 132, row: 8, column: 3 },
  { letter: "R", x: -112, y: 132, row: 8, column: 4 },
  { letter: "T", x: -56, y: 132, row: 8, column: 5 },
  { letter: "Y", x: 0, y: 132, row: 8, column: 6 },
  { letter: "U", x: 56, y: 132, row: 8, column: 7 },
  { letter: "I", x: 112, y: 132, row: 8, column: 8 },
  // { letter: "O", x: 168, y: 132, row: 8, column: 9 },
  // { letter: "P", x: 224, y: 132, row: 8, column: 10 },
  // { letter: "P", x: 280, y: 132, row: 8, column: 11 },

  { letter: "Q", x: -280, y: 198, row: 9, column: 1 },
  { letter: "W", x: -224, y: 198, row: 9, column: 2 },
  { letter: "E", x: -168, y: 198, row: 9, column: 3 },
  { letter: "R", x: -112, y: 198, row: 9, column: 4 },
  { letter: "T", x: -56, y: 198, row: 9, column: 5 },
  { letter: "Y", x: 0, y: 198, row: 9, column: 6 },
  { letter: "U", x: 56, y: 198, row: 9, column: 7 },
  { letter: "I", x: 112, y: 198, row: 9, column: 8 },
  // { letter: "O", x: 168, y: 198, row: 9, column: 9 },
  // { letter: "P", x: 224, y: 198, row: 9, column: 10 },
  // { letter: "P", x: 280, y: 198, row: 9, column: 11 },

  // { letter: "Q", x: -280, y: 264, row: 10, column: 1 },
  // { letter: "W", x: -224, y: 264, row: 10, column: 2 },
  // { letter: "E", x: -168, y: 264, row: 10, column: 3 },
  // { letter: "R", x: -112, y: 264, row: 10, column: 4 },
  // { letter: "T", x: -56, y: 264, row: 10, column: 5 },
  // { letter: "Y", x: 0, y: 264, row: 10, column: 6 },
  // { letter: "U", x: 56, y: 264, row: 10, column: 7 },
  // { letter: "I", x: 112, y: 264, row: 10, column: 8 },
  // { letter: "O", x: 168, y: 264, row: 10, column: 9 },
  // { letter: "P", x: 224, y: 264, row: 10, column: 10 },
  // { letter: "P", x: 280, y: 264, row: 10, column: 11 },

  { letter: "Q", x: -280, y: 330, row: 16, column: 1 },
  { letter: "W", x: -224, y: 330, row: 11, column: 2 },
  { letter: "E", x: -168, y: 330, row: 11, column: 3 },
  { letter: "R", x: -112, y: 330, row: 11, column: 4 },
  { letter: "T", x: -56, y: 330, row: 11, column: 5 },
  { letter: "Y", x: 0, y: 330, row: 11, column: 6 },
  { letter: "U", x: 56, y: 330, row: 11, column: 7 },
  { letter: "I", x: 112, y: 330, row: 11, column: 8 },
  // { letter: "O", x: 168, y: 330, row: 11, column: 9 },
  // { letter: "P", x: 224, y: 330, row: 11, column: 10 },
  // { letter: "P", x: 280, y: 330, row: 11, column: 11 },
];

export const SHEETS = {
  ITEM_BASE: "btn",
  ITEM_GLOW: "btn_tap",
  HAND_TUTORIAL: "hand_tutorial",
};

export const POSITIONS_PHONE = {
  word: Screen.phoneProportions ? [-300, -200, 0, -380] : [-300, -200, 0, -230],
  board: Screen.phoneProportions ? [300, 0, 0, 100] : [300, 0, 0, 150],
};
export const POSITIONS = {
  word:
    Screen.iphoneSEProportions || Screen.phoneProportions
      ? POSITIONS_PHONE.word
      : [-300, -200, 0, -380],
  board:
    Screen.iphoneSEProportions || Screen.phoneProportions
      ? POSITIONS_PHONE.board
      : [300, 0, 0, 100],
};

const SCALES_PHONE = {
  word: Screen.phoneProportions ? [0.8, 0.8, 0.8, 0.8] : [0.8, 0.8, 0.7, 0.7],
  board: Screen.phoneProportions ? [0.8, 0.8, 0.8, 0.8] : [0.8, 0.8, 0.7, 0.7],
  image_bg: Screen.phoneProportions
    ? [0.8, 1, 1.4, 1.4]
    : [0.9, 1.1, 1.4, 1.15],
  timer: Screen.phoneProportions ? [1.6, 1.6, 1, 1] : [1.4, 1.4, 1, 1],
};

export const SCALES = {
  word:
    Screen.iphoneSEProportions || Screen.phoneProportions
      ? SCALES_PHONE.word
      : [0.8, 0.8, 0.8, 0.8],
  board:
    Screen.iphoneSEProportions || Screen.phoneProportions
      ? SCALES_PHONE.board
      : [0.8, 0.8, 0.8, 0.8],
  image_bg:
    Screen.iphoneSEProportions || Screen.phoneProportions
      ? SCALES_PHONE.image_bg
      : [0.75, 1, 1.4, 0.9],
};
