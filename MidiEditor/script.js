let midiData = null;
let currentMidi = null;
let synth = new Tone.PolySynth().toDestination();
let isPlaying = false;
let trackVisibility = []; // 全局轨道可见性控制数组

const canvas = document.getElementById("pianoRoll");
const ctx = canvas.getContext("2d");
const noteHeight = 8;
const timeScale = 150;
const pitchBase = 21; // A0
const visibleRange = 88;

document.getElementById("midiFileInput").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const arrayBuffer = await file.arrayBuffer();
    midiData = new Midi(arrayBuffer);

    // 初始化轨道可见性（默认全部可见）
    trackVisibility = midiData.tracks.map(() => true);

    // 绘制钢琴卷帘
    drawPianoRoll(midiData);

    // 更新轨道控制面板
    updateTrackControls(midiData);

    currentMidi = midiData;
});

// 新增：轨道控制函数
function updateTrackControls(midi) {
    const trackControls = document.getElementById("trackControls");
    trackControls.innerHTML = ""; // 清空现有控件

    midi.tracks.forEach((track, trackIndex) => {
        const trackControl = document.createElement("div");         //出现新的轨道就会产生新的开关
        trackControl.className = "track-control";

        // 轨道颜色指示器
        const colorIndicator = document.createElement("div");
        colorIndicator.className = "track-color";
        colorIndicator.style.backgroundColor = getColor(trackIndex);

        // 轨道名称/编号
        const trackLabel = document.createElement("span");
        trackLabel.className = "track-label";
        trackLabel.textContent = `轨道 ${trackIndex + 1}`;

        // 轨道开关
        const trackToggle = document.createElement("input");
        trackToggle.type = "checkbox";
        trackToggle.checked = trackVisibility[trackIndex];
        trackToggle.addEventListener("change", () => {
            trackVisibility[trackIndex] = trackToggle.checked;
            drawPianoRoll(midiData);
        });

        trackControl.appendChild(colorIndicator);
        trackControl.appendChild(trackLabel);
        trackControl.appendChild(trackToggle);
        trackControls.appendChild(trackControl);
    });
}

document.getElementById("playBtn").addEventListener("click", async () => {
    if (!currentMidi || isPlaying) return;

    isPlaying = true;
    Tone.Transport.cancel();
    Tone.Transport.bpm.value = 120;
    Tone.Transport.start();

    currentMidi.tracks.forEach((track, trackIndex) => {
        if (!trackVisibility[trackIndex]) return;
        track.notes.forEach(note => {
            Tone.Transport.scheduleOnce((time) => {
                synth.triggerAttackRelease(note.name, note.duration, time);
            }, note.time);
        });
    });
});

document.getElementById("pauseBtn").addEventListener("click", () => {
    Tone.Transport.pause();
    isPlaying = false;
});

document.getElementById("resetBtn").addEventListener("click", () => {
    Tone.Transport.stop();
    isPlaying = false;
});

document.getElementById("exportBtn").addEventListener("click", () => {
    if (!currentMidi) return;
    const bytes = currentMidi.toArray();
    const blob = new Blob([bytes], { type: "audio/midi" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "exported.mid";
    a.click();
    URL.revokeObjectURL(url);
});

function drawPianoRoll(midi) {
    // 计算总持续时间
    let maxTime = 0;
    midi.tracks.forEach(track => {
        track.notes.forEach(note => {
            const noteEnd = note.time + note.duration;
            if (noteEnd > maxTime) maxTime = noteEnd;
        });
    });

    // 计算需要的canvas宽度（例如：1秒 = 150像素）
    const canvasWidth = maxTime * timeScale;
    canvas.width = canvasWidth;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    midi.tracks.forEach((track, trackIndex) => {
        if (!trackVisibility[trackIndex]) return;
        track.notes.forEach(note => {
            const x = note.time * timeScale;
            const y = canvas.height - ((note.midi - pitchBase) * noteHeight);
            const width = note.duration * timeScale;
            const height = noteHeight - 1;
            ctx.fillStyle = getColor(trackIndex);
            ctx.fillRect(x, y, width, height);
        });
    });
}

function getColor(index) {
    const colors = ["#4caf50", "#2196f3", "#ff9800", "#e91e63", "#9c27b0"];
    return colors[index % colors.length];
}

// // 新增：绘制网格和参考线
// function drawGrid() {
//     // 绘制垂直时间线
//     ctx.strokeStyle = '#eee';
//     ctx.lineWidth = 1;

//     const measureWidth = timeScale * 4; // 每4拍一个小节
//     for (let x = 0; x < canvas.width; x += measureWidth) {
//         ctx.beginPath();
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, canvas.height);
//         ctx.stroke();

//         // 标记小节位置
//         ctx.fillStyle = '#666';
//         ctx.font = '10px Arial';
//         ctx.fillText(`${Math.floor(x / measureWidth) + 1}`, x + 5, 15);
//     }

//     // 绘制水平音高线
//     for (let i = 0; i <= visibleRange; i += 12) {
//         const y = canvas.height - (i * noteHeight);
//         ctx.beginPath();
//         ctx.moveTo(0, y);
//         ctx.lineTo(canvas.width, y);
//         ctx.stroke();

//         // 标记音高
//         const pitch = pitchBase + i;
//         const noteName = new Midi().noteName(pitch);
//         ctx.fillText(noteName, 5, y - 3);
//     }
// }

