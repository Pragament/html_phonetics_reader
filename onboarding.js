// ===== ONBOARDING GUIDE — paste <script src="onboarding.js"></script> before </body> =====

(function () {

    function ready(fn) {
        if (document.readyState !== 'loading') { fn(); }
        else { document.addEventListener('DOMContentLoaded', fn); }
    }

    ready(function () {

        /* ── 1. INJECT STYLES ─────────────────────────────────────────── */
        var style = document.createElement('style');
        style.textContent = [
            '#ob-fab{position:fixed;bottom:80px;left:24px;z-index:99999;',
            'display:flex;align-items:center;gap:8px;padding:13px 22px;',
            'border:none;border-radius:999px;background:#1D9E75;color:#fff;',
            'font-size:14px;font-weight:700;font-family:Segoe UI,sans-serif;',
            'cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.22);',
            'transition:transform .2s,opacity .2s;}',
            '#ob-fab:hover{transform:translateY(-3px);}',
            '#ob-fab.ob-hide{display:none!important;}',

            '#ob-mask{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:100000;}',
            '#ob-mask.ob-show{display:block;}',

            '#ob-panel{position:fixed;top:0;right:0;bottom:0;width:350px;max-width:100vw;',
            'background:#fff;z-index:100001;display:flex;flex-direction:column;',
            'box-shadow:-4px 0 28px rgba(0,0,0,.15);',
            'transform:translateX(100%);transition:transform .28s ease;',
            'font-family:Segoe UI,sans-serif;}',
            '#ob-panel.ob-show{transform:translateX(0);}',

            '#ob-hd{padding:16px 18px 12px;background:#f0f7ff;border-bottom:1px solid #dde8f5;flex-shrink:0;}',
            '#ob-hd-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;}',
            '#ob-ttl{font-size:15px;font-weight:700;margin:0;color:#111;}',
            '#ob-x{width:28px;height:28px;border-radius:50%;border:none;background:rgba(0,0,0,.09);',
            'font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#555;}',
            '#ob-x:hover{background:rgba(0,0,0,.16);}',
            '.ob-pg-bg{height:6px;border-radius:999px;background:rgba(0,0,0,.1);overflow:hidden;}',
            '.ob-pg-fill{height:100%;border-radius:999px;background:linear-gradient(90deg,#0a84ff,#1D9E75);transition:width .4s;}',
            '#ob-pg-lbl{font-size:12px;color:#777;margin:5px 0 0;}',

            '#ob-bd{flex:1;overflow-y:auto;padding:14px 14px 24px;}',

            '.ob-card{background:#fff;border:1.5px solid #e5e7eb;border-radius:14px;',
            'padding:14px;margin-bottom:10px;position:relative;overflow:hidden;',
            'transition:border-color .2s,opacity .2s;}',
            '.ob-card::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:3px 0 0 3px;transition:background .2s;}',
            '.ob-card.ob-active{border-color:#0a84ff;}.ob-card.ob-active::before{background:#0a84ff;}',
            '.ob-card.ob-done{border-color:#1D9E75;opacity:.85;}.ob-card.ob-done::before{background:#1D9E75;}',
            '.ob-card.ob-locked{opacity:.38;pointer-events:none;}',

            '.ob-ch{display:flex;align-items:center;gap:10px;margin-bottom:6px;}',
            '.ob-num{width:26px;height:26px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;',
            'justify-content:center;font-size:12px;font-weight:700;background:#eee;color:#777;transition:all .2s;}',
            '.ob-card.ob-active .ob-num{background:#0a84ff;color:#fff;}',
            '.ob-card.ob-done .ob-num{background:#1D9E75;color:#fff;font-size:0;}',
            '.ob-card.ob-done .ob-num::after{content:"✓";font-size:14px;font-weight:700;color:#fff;}',
            '.ob-lbl{font-size:13px;font-weight:700;color:#111;flex:1;margin:0;}',
            '.ob-bdg{font-size:10px;font-weight:700;padding:2px 8px;border-radius:999px;white-space:nowrap;}',
            '.ob-bdg-a{background:#dbeafe;color:#1e40af;}',
            '.ob-bdg-d{background:#dcfce7;color:#166534;}',
            '.ob-bdg-l{background:#f3f4f6;color:#9ca3af;}',

            '.ob-desc{font-size:12px;color:#555;margin:0 0 8px;line-height:1.55;}',

            '.ob-tip{background:#f0f7ff;border:1px solid rgba(10,132,255,.2);border-radius:9px;',
            'padding:9px 11px;font-size:12px;line-height:1.6;color:#4b5563;margin-bottom:9px;position:relative;}',
            '.ob-tip::before{content:"";position:absolute;top:-5px;left:14px;width:8px;height:8px;',
            'background:#f0f7ff;border-left:1px solid rgba(10,132,255,.2);border-top:1px solid rgba(10,132,255,.2);transform:rotate(45deg);}',
            '.ob-tip strong{color:#0a84ff;}',

            '.ob-btn{display:inline-flex;align-items:center;gap:5px;padding:7px 13px;border-radius:8px;',
            'border:none;font-size:12px;font-weight:700;cursor:pointer;background:#0a84ff;color:#fff;',
            'transition:opacity .15s,transform .1s;}',
            '.ob-btn:hover{opacity:.88;}.ob-btn:active{transform:scale(.97);}',
            '.ob-btn:disabled{opacity:.38;cursor:not-allowed;transform:none;}',
            '.ob-btn-g{background:#1D9E75;}.ob-btn-gh{background:transparent;color:#0a84ff;border:1px solid rgba(10,132,255,.35);}',

            '.ob-row{background:#f4f6fb;border-radius:8px;padding:8px 10px;display:flex;',
            'align-items:center;gap:8px;flex-wrap:wrap;margin-top:6px;}',
            '.ob-sel{flex:1;min-width:0;padding:6px 8px;border-radius:7px;border:1px solid #d1d5db;',
            'background:#fff;font-size:12px;color:#111;cursor:pointer;}',

            '.ob-tg{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px;}',
            '.ob-tb{padding:8px;border-radius:8px;border:1px solid rgba(0,0,0,.1);background:#fff;',
            'color:#333;font-size:11px;text-align:left;cursor:pointer;line-height:1.4;',
            'transition:border-color .15s,background .15s;}',
            '.ob-tb:hover{border-color:#0a84ff;}',
            '.ob-tb.ob-s{border-color:#0a84ff;background:#eff6ff;color:#1d4ed8;}',

            '.ob-ta{width:100%;padding:8px 10px;border-radius:8px;border:1px solid #d1d5db;',
            'background:#fff;color:#111;font-size:12px;font-family:inherit;resize:vertical;min-height:68px;',
            'box-sizing:border-box;margin-top:6px;transition:border-color .2s;}',
            '.ob-ta:focus{outline:none;border-color:#0a84ff;}',
            '.ob-ta:disabled{background:#f9fafb;cursor:not-allowed;}',

            '.ob-sb{width:100%;padding:9px;border-radius:8px;border:none;background:#0a84ff;',
            'color:#fff;font-size:13px;font-weight:700;cursor:pointer;display:flex;',
            'align-items:center;justify-content:center;gap:6px;margin-top:8px;',
            'transition:opacity .15s,transform .1s;}',
            '.ob-sb:hover{opacity:.88;}.ob-sb:active{transform:scale(.98);}',
            '.ob-sb:disabled{opacity:.38;cursor:not-allowed;transform:none;}',

            '.ob-pulse{animation:ob-p 1.8s infinite;}',
            '@keyframes ob-p{0%,100%{box-shadow:0 0 0 0 rgba(10,132,255,.35)}50%{box-shadow:0 0 0 7px rgba(10,132,255,0)}}',

            '.ob-hl{outline:3px solid #0a84ff!important;outline-offset:4px!important;',
            'border-radius:8px!important;animation:ob-hl 1.6s infinite!important;',
            'position:relative!important;z-index:9998!important;}',
            '@keyframes ob-hl{0%,100%{outline-color:#0a84ff}50%{outline-color:rgba(10,132,255,.3)}}',

            '#ob-done{display:none;text-align:center;padding:22px 14px;border:1px solid rgba(29,158,117,.3);',
            'border-radius:14px;background:#f0fdf7;margin-top:6px;}',
            '#ob-done.ob-show{display:block;}',
            '.ob-dtitle{font-size:15px;font-weight:700;color:#111;margin:8px 0 6px;}',
            '.ob-dsub{font-size:12px;color:#555;margin:0 0 14px;line-height:1.55;}',

            '@media(prefers-color-scheme:dark){',
            '#ob-panel{background:#1c1c1e;}',
            '#ob-hd{background:#111;border-color:rgba(255,255,255,.08);}',
            '#ob-ttl{color:#f0f0f0;}',
            '.ob-card{background:#252525;border-color:rgba(255,255,255,.1);}',
            '.ob-lbl{color:#e8e8e8;}.ob-desc{color:#999;}.ob-bdg-a{background:rgba(10,132,255,.2);color:#93c5fd;}',
            '.ob-tip{background:#1a2535;border-color:rgba(10,132,255,.25);color:#9ca3af;}',
            '.ob-tip::before{background:#1a2535;border-color:rgba(10,132,255,.25);}',
            '.ob-row{background:#2a2a2a;}.ob-sel{background:#333;color:#e0e0e0;border-color:rgba(255,255,255,.15);}',
            '.ob-tb{background:#2e2e2e;color:#ccc;border-color:rgba(255,255,255,.1);}',
            '.ob-ta{background:#2e2e2e;color:#e0e0e0;border-color:rgba(255,255,255,.15);}',
            '#ob-done{background:#0d2318;}', '.ob-dtitle{color:#e0e0e0;}', '.ob-dsub{color:#888;}',
            '}'
        ].join('');
        document.head.appendChild(style);

        /* ── 2. INJECT HTML ───────────────────────────────────────────── */
        var div = document.createElement('div');
        div.innerHTML =
            '<button id="ob-fab">🚀 Get Started</button>' +
            '<div id="ob-mask"></div>' +
            '<aside id="ob-panel">' +
            '<div id="ob-hd">' +
            '<div id="ob-hd-top">' +
            '<p id="ob-ttl">⚡ Quick Start — 4 tasks</p>' +
            '<button id="ob-x" aria-label="close">✕</button>' +
            '</div>' +
            '<div class="ob-pg-bg"><div class="ob-pg-fill" id="ob-fill" style="width:0%"></div></div>' +
            '<p id="ob-pg-lbl">0 of 4 done</p>' +
            '</div>' +

            '<div id="ob-bd">' +

            /* Card 1 */
            '<div class="ob-card ob-active" id="ob-c1">' +
            '<div class="ob-ch"><div class="ob-num" id="ob-n1">1</div>' +
            '<p class="ob-lbl">Pick &amp; load a model</p>' +
            '<span class="ob-bdg ob-bdg-a" id="ob-b1">current</span></div>' +
            '<p class="ob-desc">Choose a model size, then click <strong>Load</strong>. Smaller = faster download.</p>' +
            '<div class="ob-tip">📍 <strong>Where on site:</strong> "Model" card in left sidebar → dropdown → <strong>Load Selected Model</strong> button. Watch the progress bar fill up.</div>' +
            '<div class="ob-row">' +
            '<select class="ob-sel" id="ob-mp"><option value="">— choose a model —</option>' +
            '<option value="Llama-3.2-1B-Instruct-q4f32_1-MLC">Llama 3.2 1B — fastest ⚡</option>' +
            '<option value="Qwen2.5-1.5B-Instruct-q4f32_1-MLC">Qwen 2.5 1.5B — balanced</option>' +
            '<option value="Llama-3.2-3B-Instruct-q4f32_1-MLC">Llama 3.2 3B — stronger</option>' +
            '<option value="Phi-3.5-mini-instruct-q4f32_1-MLC">Phi 3.5 Mini — compact</option>' +
            '</select>' +
            '<button class="ob-btn" id="ob-lb" disabled>⬇ Load</button>' +
            '</div>' +
            '<div style="margin-top:8px">' +
            '<button class="ob-btn ob-btn-gh" id="ob-hl1" style="font-size:11px;padding:5px 10px">👆 Show me on page</button>' +
            '</div>' +
            '</div>' +

            /* Card 2 */
            '<div class="ob-card ob-locked" id="ob-c2">' +
            '<div class="ob-ch"><div class="ob-num" id="ob-n2">2</div>' +
            '<p class="ob-lbl">Pick a STEM topic</p>' +
            '<span class="ob-bdg ob-bdg-l" id="ob-b2">locked</span></div>' +
            '<p class="ob-desc">Filter by grade &amp; subject in the sidebar, then tap any topic card.</p>' +
            '<div class="ob-tip">📍 <strong>Where on site:</strong> "Topic Filters" card → pick grade + subject → click a topic in the list below it.</div>' +
            '<div class="ob-tg" id="ob-tg" style="display:none">' +
            '<button class="ob-tb" data-tid="g7-sci-nutrition">🌱 Nutrition in Plants<br><span style="color:#888;font-size:10px">Grade 7 Science</span></button>' +
            '<button class="ob-tb" data-tid="g9-phy-force">⚡ Force &amp; Motion<br><span style="color:#888;font-size:10px">Grade 9 Science</span></button>' +
            '<button class="ob-tb" data-tid="g7-math-integers">🔢 Integers<br><span style="color:#888;font-size:10px">Grade 7 Maths</span></button>' +
            '<button class="ob-tb" data-tid="g8-sci-cell">🔬 Cell Structure<br><span style="color:#888;font-size:10px">Grade 8 Science</span></button>' +
            '</div>' +
            '<div style="margin-top:8px;display:none" id="ob-hl2w">' +
            '<button class="ob-btn ob-btn-gh" id="ob-hl2" style="font-size:11px;padding:5px 10px">👆 Show me on page</button>' +
            '</div>' +
            '</div>' +

            /* Card 3 */
            '<div class="ob-card ob-locked" id="ob-c3">' +
            '<div class="ob-ch"><div class="ob-num" id="ob-n3">3</div>' +
            '<p class="ob-lbl">Type or speak a response</p>' +
            '<span class="ob-bdg ob-bdg-l" id="ob-b3">locked</span></div>' +
            '<p class="ob-desc">Explain the topic in English. Type at least a few words here, or use the mic on the page.</p>' +
            '<div class="ob-tip">📍 <strong>Where on site:</strong> Large text area in the "Live Chat" card. Or click <strong>Start Speaking</strong> to use your microphone.</div>' +
            '<textarea class="ob-ta" id="ob-ta" disabled placeholder="e.g. Photosynthesis is when plants use sunlight, water and CO₂ to make food…"></textarea>' +
            '<p id="ob-wh" style="font-size:11px;color:#888;margin:4px 0 0;display:none">Type more… (<span id="ob-wc">0</span> words typed)</p>' +
            '<div style="margin-top:8px;display:none" id="ob-hl3w">' +
            '<button class="ob-btn ob-btn-gh" id="ob-hl3" style="font-size:11px;padding:5px 10px">👆 Show me on page</button>' +
            '</div>' +
            '</div>' +

            /* Card 4 */
            '<div class="ob-card ob-locked" id="ob-c4">' +
            '<div class="ob-ch"><div class="ob-num" id="ob-n4">4</div>' +
            '<p class="ob-lbl">Click "Send to Tutor"</p>' +
            '<span class="ob-bdg ob-bdg-l" id="ob-b4">locked</span></div>' +
            '<p class="ob-desc">Hit the button — the AI tutor reads your answer and gives instant feedback.</p>' +
            '<div class="ob-tip">📍 <strong>Where on site:</strong> Blue <strong>Send to Tutor</strong> button below the text area. After clicking, check the <strong>Instant Feedback</strong> panel and <strong>Correction Diff</strong>.</div>' +
            '<button class="ob-sb" id="ob-sb" disabled>✈ Send to Tutor</button>' +
            '<div style="margin-top:8px;display:none" id="ob-hl4w">' +
            '<button class="ob-btn ob-btn-gh" id="ob-hl4" style="font-size:11px;padding:5px 10px">👆 Show me on page</button>' +
            '</div>' +
            '</div>' +

            /* Completion */
            '<div id="ob-done">' +
            '<div style="font-size:38px">🎉</div>' +
            '<p class="ob-dtitle">All done — you\'re set up!</p>' +
            '<p class="ob-dsub">You can now load models, pick topics, speak answers, and get AI feedback. Try a real session!</p>' +
            '<p style="font-size:11px;font-weight:700;color:#1e40af;background:#dbeafe;display:inline-block;padding:4px 12px;border-radius:999px;margin:0 0 14px">💡 Use the "Start Tour" button (bottom-right) for a full feature walkthrough</p><br>' +
            '<button class="ob-btn ob-btn-g" id="ob-close2" style="font-size:13px;padding:9px 20px">Close &amp; Start Practising →</button>' +
            '</div>' +

            '</div>' +
            '</aside>';

        document.body.appendChild(div);

        /* ── 3. GRAB ALL REFS ─────────────────────────────────────────── */
        var fab = document.getElementById('ob-fab');
        var panel = document.getElementById('ob-panel');
        var mask = document.getElementById('ob-mask');
        var xBtn = document.getElementById('ob-x');
        var fill = document.getElementById('ob-fill');
        var pgLbl = document.getElementById('ob-pg-lbl');
        var mp = document.getElementById('ob-mp');
        var lb = document.getElementById('ob-lb');
        var tg = document.getElementById('ob-tg');
        var ta = document.getElementById('ob-ta');
        var wh = document.getElementById('ob-wh');
        var wc = document.getElementById('ob-wc');
        var sb = document.getElementById('ob-sb');
        var doneBox = document.getElementById('ob-done');
        var close2 = document.getElementById('ob-close2');
        var hlCur = null;

        /* ── 4. OPEN / CLOSE ──────────────────────────────────────────── */
        function openPanel() {
            panel.classList.add('ob-show');
            mask.classList.add('ob-show');
            fab.classList.add('ob-hide');
        }
        function closePanel() {
            panel.classList.remove('ob-show');
            mask.classList.remove('ob-show');
            fab.classList.remove('ob-hide');
            clearHL();
        }

        fab.addEventListener('click', openPanel);
        xBtn.addEventListener('click', closePanel);
        mask.addEventListener('click', closePanel);
        if (close2) close2.addEventListener('click', closePanel);

        /* ── 5. PROGRESS ──────────────────────────────────────────────── */
        var done = {};
        function refreshProg() {
            var n = Object.keys(done).length;
            fill.style.width = Math.round(n / 4 * 100) + '%';
            pgLbl.textContent = n + ' of 4 done';
        }

        /* ── 6. HIGHLIGHT REAL ELEMENT ────────────────────────────────── */
        function hl(el) {
            clearHL();
            if (!el) return;
            hlCur = el;
            el.classList.add('ob-hl');
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        function clearHL() {
            if (hlCur) { hlCur.classList.remove('ob-hl'); hlCur = null; }
        }

        /* ── 7. MARK DONE + UNLOCK NEXT ───────────────────────────────── */
        function markDone(n) {
            if (done[n]) return;
            done[n] = true;
            var card = document.getElementById('ob-c' + n);
            var badge = document.getElementById('ob-b' + n);
            if (!card || !badge) return;
            card.classList.remove('ob-active');
            card.classList.add('ob-done');
            badge.className = 'ob-bdg ob-bdg-d';
            badge.textContent = 'done ✓';
            refreshProg();
            clearHL();
            if (n < 4) setTimeout(function () { unlockStep(n + 1); }, 350);
            if (Object.keys(done).length === 4) {
                setTimeout(function () {
                    doneBox.classList.add('ob-show');
                    doneBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    try { localStorage.setItem('ob_v1', '1'); } catch (e) { }
                }, 500);
            }
        }

        function unlockStep(n) {
            var card = document.getElementById('ob-c' + n);
            var badge = document.getElementById('ob-b' + n);
            if (!card || !badge) return;
            card.classList.remove('ob-locked');
            card.classList.add('ob-active');
            badge.className = 'ob-bdg ob-bdg-a';
            badge.textContent = 'current';
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            if (n === 2) {
                tg.style.display = 'grid';
                document.getElementById('ob-hl2w').style.display = 'block';
            }
            if (n === 3) {
                ta.disabled = false;
                ta.focus();
                wh.style.display = 'block';
                document.getElementById('ob-hl3w').style.display = 'block';
            }
            if (n === 4) {
                sb.disabled = false;
                sb.classList.add('ob-pulse');
                document.getElementById('ob-hl4w').style.display = 'block';
            }
        }

        /* ── 8. STEP 1: MODEL ─────────────────────────────────────────── */
        mp.addEventListener('change', function () {
            lb.disabled = !this.value;
            if (this.value) lb.classList.add('ob-pulse');
            else lb.classList.remove('ob-pulse');

            var real = document.getElementById('llmModelSelect');
            if (real && this.value) {
                real.value = this.value;
                real.dispatchEvent(new Event('change'));
            }
        });

        lb.addEventListener('click', function () {
            if (!mp.value) return;
            lb.disabled = true;
            lb.classList.remove('ob-pulse');
            lb.textContent = '⏳ 0%…';

            var realBtn = document.getElementById('loadModelBtn');
            if (realBtn) {
                realBtn.click();
                var realCard = realBtn.closest ? realBtn.closest('.practice-card') : null;
                hl(realCard || realBtn);
            }

            var realBar = document.getElementById('llmProgressBar');
            var realStatus = document.getElementById('llmStatusLabel');
            var sim = null;
            var sp = 0;
            var finished = false;

            function finish() {
                if (finished) return;
                finished = true;
                if (sim) clearInterval(sim);
                lb.textContent = '✓ Loaded!';
                lb.style.background = '#1D9E75';
                setTimeout(function () { markDone(1); }, 350);
            }

            if (realBar) {
                var poll = setInterval(function () {
                    var w = parseFloat(realBar.style.width) || 0;
                    lb.textContent = '⏳ ' + Math.min(99, Math.round(w)) + '%…';
                    var st = realStatus ? realStatus.textContent : '';
                    if (w >= 100 || st === 'Loaded') { clearInterval(poll); finish(); }
                }, 500);
            } else {
                sim = setInterval(function () {
                    sp += Math.random() * 14 + 7;
                    lb.textContent = '⏳ ' + Math.min(99, Math.round(sp)) + '%…';
                    if (sp >= 100) finish();
                }, 260);
            }
        });

        document.getElementById('ob-hl1').addEventListener('click', function () {
            var el = document.getElementById('llmModelSelect');
            var card = el && el.closest ? el.closest('.practice-card') : null;
            hl(card || el || document.querySelector('#llmModelSelect'));
        });

        /* ── 9. STEP 2: TOPIC ─────────────────────────────────────────── */
        var tbBtns = tg.querySelectorAll('.ob-tb');
        tbBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                tbBtns.forEach(function (b) { b.classList.remove('ob-s'); });
                btn.classList.add('ob-s');
                var tid = btn.getAttribute('data-tid');

                var realTopic = document.querySelector('[data-topic-id="' + tid + '"]');
                if (realTopic) {
                    realTopic.click();
                    var card = realTopic.closest ? realTopic.closest('.practice-card') : null;
                    hl(card || realTopic);
                } else {
                    var tlist = document.getElementById('topicList');
                    if (tlist) hl(tlist);
                }
                setTimeout(function () { markDone(2); }, 500);
            });
        });

        document.getElementById('ob-hl2').addEventListener('click', function () {
            var el = document.getElementById('topicList') || document.querySelector('.topic-list');
            var card = el && el.closest ? el.closest('.practice-card') : null;
            hl(card || el);
        });

        var realTitle = document.getElementById('selectedTopicTitle');
        if (realTitle) {
            new MutationObserver(function () {
                if (realTitle.textContent !== 'Choose a topic to begin' && done[1] && !done[2]) {
                    markDone(2);
                }
            }).observe(realTitle, { childList: true, subtree: true, characterData: true });
        }

        /* ── 10. STEP 3: TEXTAREA ─────────────────────────────────────── */
        /* FIX: Always sync panel textarea → real textarea, regardless of disabled state.
           Also fire a native 'input' event so the host app reacts to the change. */
        function syncToRealTA(text) {
            var realTA = document.getElementById('practiceInput');
            if (!realTA) return;
            realTA.value = text;
            realTA.dispatchEvent(new Event('input', { bubbles: true }));
            realTA.dispatchEvent(new Event('change', { bubbles: true }));
        }

        ta.addEventListener('input', function () {
            var words = this.value.trim().split(/\s+/).filter(Boolean).length;
            wc.textContent = words;
            syncToRealTA(this.value);
            if (words >= 5 && !done[3]) markDone(3);
        });

        document.getElementById('ob-hl3').addEventListener('click', function () {
            var el = document.getElementById('practiceInput');
            var card = el && el.closest ? el.closest('.practice-card') : null;
            hl(card || el);
        });

        /* FIX: Sync real textarea → panel textarea without the disabled guard
           (ta is enabled by the time step 3 is active). */
        var realTA2 = document.getElementById('practiceInput');
        if (realTA2) {
            realTA2.addEventListener('input', function () {
                var words = this.value.trim().split(/\s+/).filter(Boolean).length;
                /* Only mirror back if panel textarea is enabled (step 3 is active) */
                if (!ta.disabled) {
                    ta.value = this.value;
                    wc.textContent = words;
                }
                if (words >= 5 && done[2] && !done[3]) markDone(3);
            });
        }

        /* ── 11. STEP 4: SEND ─────────────────────────────────────────── */
        sb.addEventListener('click', function () {
            if (done[4]) return;
            sb.disabled = true;
            sb.classList.remove('ob-pulse');
            sb.textContent = '⏳ Sending…';

            /* FIX: Push whatever is in the panel textarea into the real input BEFORE
               clicking Send, so the real app always has content to submit. */
            syncToRealTA(ta.value);

            var realSend = document.getElementById('sendPracticeBtn');
            if (realSend && !realSend.disabled) {
                realSend.click();
                var card = realSend.closest ? realSend.closest('.practice-card') : null;
                hl(card || realSend);
            }

            /* FIX: Remove the automatic 1500 ms fallback — only mark done when the
               feedback panel actually changes, OR after a generous 8 s safety net. */
            var resolved = false;
            function onSent() {
                if (resolved) return;
                resolved = true;
                sb.textContent = '✓ Sent — tutor is responding!';
                sb.style.background = '#1D9E75';
                var fb = document.getElementById('feedbackSummary');
                if (fb) hl(fb.closest ? fb.closest('.practice-card') : fb);
                setTimeout(function () { markDone(4); }, 400);
            }

            var fbEl = document.getElementById('feedbackSummary');
            if (fbEl) {
                /* Watch for any DOM change in the feedback panel */
                var fbObs = new MutationObserver(function (mutations, obs) {
                    /* Only fire if there's actual text content now */
                    if (fbEl.textContent.trim().length > 0) {
                        obs.disconnect();
                        onSent();
                    }
                });
                fbObs.observe(fbEl, { childList: true, subtree: true, characterData: true });

                /* Safety net: if feedback never arrives within 8 s, resolve anyway */
                setTimeout(function () {
                    fbObs.disconnect();
                    onSent();
                }, 8000);
            } else {
                /* No feedback panel found — resolve after 2 s */
                setTimeout(onSent, 2000);
            }
        });

        document.getElementById('ob-hl4').addEventListener('click', function () {
            var el = document.getElementById('sendPracticeBtn');
            var card = el && el.closest ? el.closest('.practice-card') : null;
            hl(card || el);
        });

        /* Auto-advance step 4 if user clicks real Send button directly */
        var realSend2 = document.getElementById('sendPracticeBtn');
        if (realSend2) {
            realSend2.addEventListener('click', function () {
                if (done[3] && !done[4]) {
                    /* Wait for feedback to appear before marking done */
                    var fbEl2 = document.getElementById('feedbackSummary');
                    if (fbEl2) {
                        var obs2 = new MutationObserver(function (m, o) {
                            if (fbEl2.textContent.trim().length > 0) {
                                o.disconnect();
                                markDone(4);
                            }
                        });
                        obs2.observe(fbEl2, { childList: true, subtree: true, characterData: true });
                        /* Safety net */
                        setTimeout(function () { obs2.disconnect(); markDone(4); }, 8000);
                    } else {
                        setTimeout(function () { markDone(4); }, 1200);
                    }
                }
            });
        }

        /* Auto-advance step 1 if user loads model directly */
        var realStatus2 = document.getElementById('llmStatusLabel');
        if (realStatus2) {
            new MutationObserver(function () {
                if (realStatus2.textContent === 'Loaded' && !done[1]) markDone(1);
            }).observe(realStatus2, { childList: true, subtree: true, characterData: true });
        }

        /* ── 12. INIT ─────────────────────────────────────────────────── */
        refreshProg();

        var seen = false;
        try { seen = localStorage.getItem('ob_v1') === '1'; } catch (e) { }
        if (!seen) setTimeout(openPanel, 900);

    });

})();