/**
 * 钢琴音符配置文件
 * 包含钢琴键盘布局和对应的音符信息
 */

export const Notes = {
  Piano: [
    {id: 1, name: 'C2', keyCode: '49', key: '1', type: 'white'},
    {id: 2, name: 'D2', keyCode: '50', key: '2', type: 'white'},
    {id: 3, name: 'E2', keyCode: '51', key: '3', type: 'white'},
    {id: 4, name: 'F2', keyCode: '52', key: '4', type: 'white'},
    {id: 5, name: 'G2', keyCode: '53', key: '5', type: 'white'},
    {id: 6, name: 'A2', keyCode: '54', key: '6', type: 'white'},
    {id: 7, name: 'B2', keyCode: '55', key: '7', type: 'white'},
    {id: 8, name: 'C3', keyCode: '56', key: '8', type: 'white'},
    {id: 9, name: 'D3', keyCode: '57', key: '9', type: 'white'},
    {id: 10, name: 'E3', keyCode: '48', key: '0', type: 'white'},
    {id: 26, name: 'F3', keyCode: '81', key: 'Q', type: 'white'},
    {id: 32, name: 'G3', keyCode: '87', key: 'W', type: 'white'},
    {id: 14, name: 'A3', keyCode: '69', key: 'E', type: 'white'},
    {id: 27, name: 'B3', keyCode: '82', key: 'R', type: 'white'},
    {id: 29, name: 'C4', keyCode: '84', key: 'T', type: 'white'},
    {id: 34, name: 'D4', keyCode: '89', key: 'Y', type: 'white'},
    {id: 30, name: 'E4', keyCode: '85', key: 'U', type: 'white'},
    {id: 18, name: 'F4', keyCode: '73', key: 'I', type: 'white'},
    {id: 24, name: 'G4', keyCode: '79', key: 'O', type: 'white'},
    {id: 25, name: 'A4', keyCode: '80', key: 'P', type: 'white'},
    {id: 10, name: 'B4', keyCode: '65', key: 'A', type: 'white'},
    {id: 28, name: 'C5', keyCode: '83', key: 'S', type: 'white'},
    {id: 13, name: 'D5', keyCode: '68', key: 'D', type: 'white'},
    {id: 15, name: 'E5', keyCode: '70', key: 'F', type: 'white'},
    {id: 16, name: 'F5', keyCode: '71', key: 'G', type: 'white'},
    {id: 17, name: 'G5', keyCode: '72', key: 'H', type: 'white'},
    {id: 19, name: 'A5', keyCode: '74', key: 'J', type: 'white'},
    {id: 20, name: 'B5', keyCode: '75', key: 'K', type: 'white'},
    {id: 21, name: 'C6', keyCode: '76', key: 'L', type: 'white'},
    {id: 35, name: 'D6', keyCode: '90', key: 'Z', type: 'white'},
    {id: 33, name: 'E6', keyCode: '88', key: 'X', type: 'white'},
    {id: 12, name: 'F6', keyCode: '67', key: 'C', type: 'white'},
    {id: 31, name: 'G6', keyCode: '86', key: 'V', type: 'white'},
    {id: 11, name: 'A6', keyCode: '66', key: 'B', type: 'white'},
    {id: 23, name: 'B6', keyCode: '78', key: 'N', type: 'white'},
    {id: 22, name: 'C7', keyCode: '77', key: 'M', type: 'white'},

    {id: 36, name: 'C#2', keyCode: 'b49', key: '+1', type: 'black'},
    {id: 37, name: 'D#2', keyCode: 'b50', key: '+2', type: 'black'},
    {id: 38, name: 'F#2', keyCode: 'b52', key: '+4', type: 'black'},
    {id: 39, name: 'G#2', keyCode: 'b53', key: '+5', type: 'black'},
    {id: 40, name: 'A#2', keyCode: 'b54', key: '+6', type: 'black'},
    {id: 41, name: 'C#3', keyCode: 'b56', key: '+8', type: 'black'},
    {id: 42, name: 'D#3', keyCode: 'b57', key: '+9', type: 'black'},
    {id: 43, name: 'F#3', keyCode: 'b81', key: '+Q', type: 'black'},
    {id: 44, name: 'G#3', keyCode: 'b87', key: '+W', type: 'black'},
    {id: 45, name: 'A#3', keyCode: 'b69', key: '+E', type: 'black'},
    {id: 46, name: 'C#4', keyCode: 'b84', key: '+T', type: 'black'},
    {id: 47, name: 'D#4', keyCode: 'b89', key: '+Y', type: 'black'},
    {id: 48, name: 'F#4', keyCode: 'b73', key: '+I', type: 'black'},
    {id: 49, name: 'G#4', keyCode: 'b79', key: '+O', type: 'black'},
    {id: 50, name: 'A#4', keyCode: 'b80', key: '+P', type: 'black'},
    {id: 51, name: 'C#5', keyCode: 'b83', key: '+S', type: 'black'},
    {id: 52, name: 'D#5', keyCode: 'b68', key: '+D', type: 'black'},
    {id: 53, name: 'F#5', keyCode: 'b71', key: '+G', type: 'black'},
    {id: 54, name: 'G#5', keyCode: 'b72', key: '+H', type: 'black'},
    {id: 55, name: 'A#5', keyCode: 'b74', key: '+J', type: 'black'},
    {id: 56, name: 'C#6', keyCode: 'b76', key: '+L', type: 'black'},
    {id: 57, name: 'D#6', keyCode: 'b90', key: '+Z', type: 'black'},
    {id: 58, name: 'F#6', keyCode: 'b67', key: '+C', type: 'black'},
    {id: 59, name: 'G#6', keyCode: 'b86', key: '+V', type: 'black'},
    {id: 60, name: 'A#6', keyCode: 'b66', key: '+B', type: 'black'},
  ],

  NotesMap: [
    { name: 'C2', file: 'a49.mp3' },
    { name: 'D2', file: 'a50.mp3' },
    { name: 'E2', file: 'a51.mp3' },
    { name: 'F2', file: 'a52.mp3' },
    { name: 'G2', file: 'a53.mp3' },
    { name: 'A2', file: 'a54.mp3' },
    { name: 'B2', file: 'a55.mp3' },
    { name: 'C3', file: 'a56.mp3' },
    { name: 'D3', file: 'a57.mp3' },
    { name: 'E3', file: 'a48.mp3' },
    { name: 'F3', file: 'a81.mp3' },
    { name: 'G3', file: 'a87.mp3' },
    { name: 'A3', file: 'a69.mp3' },
    { name: 'B3', file: 'a82.mp3' },
    { name: 'C4', file: 'a84.mp3' },
    { name: 'D4', file: 'a89.mp3' },
    { name: 'E4', file: 'a85.mp3' },
    { name: 'F4', file: 'a73.mp3' },
    { name: 'G4', file: 'a79.mp3' },
    { name: 'A4', file: 'a80.mp3' },
    { name: 'B4', file: 'a65.mp3' },
    { name: 'C5', file: 'a83.mp3' },
    { name: 'D5', file: 'a68.mp3' },
    { name: 'E5', file: 'a70.mp3' },
    { name: 'F5', file: 'a71.mp3' },
    { name: 'G5', file: 'a72.mp3' },
    { name: 'A5', file: 'a74.mp3' },
    { name: 'B5', file: 'a75.mp3' },
    { name: 'C6', file: 'a76.mp3' },
    { name: 'D6', file: 'a90.mp3' },
    { name: 'E6', file: 'a88.mp3' },
    { name: 'F6', file: 'a67.mp3' },
    { name: 'G6', file: 'a86.mp3' },
    { name: 'A6', file: 'a66.mp3' },
    { name: 'B6', file: 'a78.mp3' },
    { name: 'C7', file: 'a77.mp3' },

    { name: 'C#2', file: 'b49.mp3' },
    { name: 'D#2', file: 'b50.mp3' },
    { name: 'F#2', file: 'b52.mp3' },
    { name: 'G#2', file: 'b53.mp3' },
    { name: 'A#2', file: 'b54.mp3' },
    { name: 'C#3', file: 'b56.mp3' },
    { name: 'D#3', file: 'b57.mp3' },
    { name: 'F#3', file: 'b81.mp3' },
    { name: 'G#3', file: 'b87.mp3' },
    { name: 'A#3', file: 'b69.mp3' },
    { name: 'C#4', file: 'b84.mp3' },
    { name: 'D#4', file: 'b89.mp3' },
    { name: 'F#4', file: 'b73.mp3' },
    { name: 'G#4', file: 'b79.mp3' },
    { name: 'A#4', file: 'b80.mp3' },
    { name: 'C#5', file: 'b83.mp3' },
    { name: 'D#5', file: 'b68.mp3' },
    { name: 'F#5', file: 'b71.mp3' },
    { name: 'G#5', file: 'b72.mp3' },
    { name: 'A#5', file: 'b74.mp3' },
    { name: 'C#6', file: 'b76.mp3' },
    { name: 'D#6', file: 'b90.mp3' },
    { name: 'F#6', file: 'b67.mp3' },
    { name: 'G#6', file: 'b86.mp3' },
    { name: 'A#6', file: 'b66.mp3' }
  ]
};

// 通过音符名称查找文件
export function mapFile(name) {
  let file = ''
  Notes.NotesMap.forEach(note => {
    if (note.name === name) {
      file = note.file
    }
  })
  return file
}

// 导出NotesMap供其他模块使用
export const NotesMap = Notes.NotesMap; 