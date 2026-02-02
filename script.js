const editor = document.getElementById('editor');
const moodVal = document.getElementById('mood-val');
const intBar = document.getElementById('int-bar');
const pdfZone = document.getElementById('pdf-render-zone');

const vibeSystem = {
    STRESS: { color: '#ff4b2b', keys: ['hate', 'angry', 'bug', 'error', 'worst', 'bad'] },
    CREATIVE: { color: '#8e2de2', keys: ['idea', 'build', 'create', 'dream', 'art'] },
    ZEN: { color: '#00d2ff', keys: ['peace', 'relax', 'flow', 'soft', 'calm'] },
    LOGIC: { color: '#00ffaa', keys: ['code', 'system', 'data', 'function', 'true'] }
};

// Mouse move effect for the glow
document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', (e.clientX / window.innerWidth) * 100 + '%');
    document.documentElement.style.setProperty('--mouse-y', (e.clientY / window.innerHeight) * 100 + '%');
});

editor.addEventListener('input', () => {
    const val = editor.value.toLowerCase();
    let topVibe = "STABLE";
    let score = 0;

    for (const [vibe, data] of Object.entries(vibeSystem)) {
        let count = data.keys.filter(k => val.includes(k)).length;
        if (count > score) {
            score = count;
            topVibe = vibe;
        }
    }

    const color = score > 0 ? vibeSystem[topVibe].color : "#00f2ff";
    document.documentElement.style.setProperty('--accent', color);
    moodVal.innerText = topVibe;
    intBar.style.width = Math.min(score * 20, 100) + "%";

    localStorage.setItem('sentience_session', editor.value);
});

// Robust PDF Export
document.getElementById('export-btn').addEventListener('click', () => {
    if(!editor.value.trim()) return;

    pdfZone.style.display = 'block';
    pdfZone.innerHTML = `
        <h1 style="color:#333; border-bottom: 2px solid #333;">SENTIENCE LOG REPORT</h1>
        <p><strong>TIMESTAMP:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>MOOD PROFILE:</strong> ${moodVal.innerText}</p>
        <hr>
        <div style="font-size: 12pt; line-height: 1.5; white-space: pre-wrap;">${editor.value}</div>
    `;

    const opt = {
        margin: 1,
        filename: 'Sentience_Aditya_Dev.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(pdfZone).set(opt).save().then(() => {
        pdfZone.style.display = 'none';
    });
});

window.onload = () => {
    const data = localStorage.getItem('sentience_session');
    if(data) {
        editor.value = data;
        editor.dispatchEvent(new Event('input'));
    }
};