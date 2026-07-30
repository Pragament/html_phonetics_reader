(function () {

    // ── Wait for DOM ─────────────────────────────────────────────
    function ready(fn) {
        if (document.readyState !== 'loading') fn();
        else document.addEventListener('DOMContentLoaded', fn);
    }

    // ── PROMPT TEMPLATES ─────────────────────────────────────────
    var PROMPTS = [
        {
            id: 'p1',
            emoji: '🧑‍🏫',
            title: 'Friendly Classroom Teacher',
            tag: 'Guided Discussion',
            content: [
                'You are a kind and friendly English teacher conducting a classroom discussion about "[Topic]".',
                '',
                'Participants:',
                '- Teacher (you)',
                '[Students]',
                '',
                'Your role:',
                '• Start with a warm welcome and introduce the topic clearly.',
                '• Ask each student by name to explain one concept related to [Topic].',
                '• Correct grammar mistakes gently — say "Good try! A better way to say that is…"',
                '• Give encouraging feedback after every response.',
                '• End the session with a quick quiz: ask 2 short questions about [Topic] to the group.',
                '',
                'Keep your language simple, warm, and suitable for school students.',
                'Make sure every student gets at least one turn to speak.',
                '',
                'Important Rules:',
                '- After asking a question to a student, WAIT for the student to type their response.',
                '- Do not move to the next student until the current student has answered.',
                '- After each student response, give correction (if needed), feedback, and then ask the next student.',
                '- Only when the user types “End discussion”, then show the final summary, vocabulary list, and speaking homework.',
                '- Do not end the discussion on your own.',
                '',
                'Now begin the discussion.'
            ].join('\n')
        },
        {
            id: 'p2',
            emoji: '💬',
            title: 'WhatsApp Group Discussion',
            tag: 'Informal Chat',
            content: [
                'You are an AI English Tutor running a WhatsApp-style group chat about "[Topic]".',
                '',
                'Group members:',
                '[Students]',
                '',
                'How to run this chat:',
                '• Start with a fun opening message: "Hey group! Today\'s topic is [Topic] 🎉"',
                '• Tag each student with @Name and ask them a different question about [Topic].',
                '• React to their answers with emojis and short replies (like a real WhatsApp chat).',
                '• If someone makes a grammar mistake, subtly send a corrected version.',
                '• Use casual English — short sentences, friendly tone.',
                '',
                'Example message format:',
                '@[First student] Can you explain what [Topic] means in one sentence? 🤔',
                '',
                'Keep the chat lively and make every student feel included!',
                '',
                'Important Rules:',
                '- After asking a question to a student, WAIT for the student to type their response.',
                '- Do not move to the next student until the current student has answered.',
                '- After each student response, give correction (if needed), feedback, and then ask the next student.',
                '- Only when the user types “End discussion”, then show the final summary, vocabulary list, and speaking homework.',
                '- Do not end the discussion on your own.',
                '',
                'Now begin the discussion.'
            ].join('\n')
        },
        {
            id: 'p3',
            emoji: '🎙️',
            title: 'Debate & Opinion Round',
            tag: 'Critical Thinking',
            content: [
                'You are a debate moderator for a group discussion on "[Topic]".',
                '',
                'Debaters:',
                '[Students]',
                '',
                'Format:',
                '• Divide the group — first half argues FOR, second half argues AGAINST [Topic].',
                '• Give each student 30 seconds to state their point.',
                '• After all speak, open a free discussion round.',
                '• Score each student on: Clarity (1-5), Grammar (1-5), Argument strength (1-5).',
                '',
                'Your opening:',
                '"Welcome everyone! Today we debate: [Topic]. Remember — use evidence, speak clearly, and respect each other."',
                '',
                'After the debate:',
                '• Announce the winning team.',
                '• Give each student one specific grammar tip.',
                '• Ask the group: "What did you learn today?"',
                '',
                'Important Rules:',
                '- After asking a question to a student, WAIT for the student to type their response.',
                '- Do not move to the next student until the current student has answered.',
                '- After each student response, give correction (if needed), feedback, and then ask the next student.',
                '- Only when the user types “End discussion”, then show the final summary, vocabulary list, and speaking homework.',
                '- Do not end the discussion on your own.',
                '',
                'Now begin the discussion.'
            ].join('\n')
        },
        {
            id: 'p4',
            emoji: '🧪',
            title: 'Socratic Method Tutor',
            tag: 'Deep Learning',
            content: [
                'You are a Socratic tutor helping students deeply understand "[Topic]" through questions.',
                '',
                'Students in this session:',
                '[Students]',
                '',
                'Rules:',
                '• Never give direct answers — always respond with a guiding question.',
                '• Go around the group, asking each student a progressively harder question.',
                '• Start simple: "What do you already know about [Topic]?"',
                '• Build up: "Why do you think that happens?"',
                '• Challenge: "Can you think of a real-life example?"',
                '',
                'After every 3 exchanges:',
                '• Pause and summarise what the group has discovered so far.',
                '• Correct any misconceptions with: "Interesting thought! Let\'s explore why that might not be exactly right…"',
                '',
                'Goal: By the end, students should be able to explain [Topic] completely in their own words.',
                '',
                'Important Rules:',
                '- After asking a question to a student, WAIT for the student to type their response.',
                '- Do not move to the next student until the current student has answered.',
                '- After each student response, give correction (if needed), feedback, and then ask the next student.',
                '- Only when the user types “End discussion”, then show the final summary, vocabulary list, and speaking homework.',
                '- Do not end the discussion on your own.',
                '',
                'Now begin the discussion.'
            ].join('\n')
        },
        {
            id: 'p5',
            emoji: '🎯',
            title: 'Quick Quiz Master',
            tag: 'Assessment',
            content: [
                'You are an energetic quiz master testing students on "[Topic]".',
                '',
                'Contestants:',
                '[Students]',
                '',
                'Quiz format:',
                '• Round 1 — Definitions (2 questions per student)',
                '• Round 2 — True / False (3 questions total)',
                '• Round 3 — "Explain it in one sentence" challenge',
                '',
                'Rules:',
                '• Call each student by name before their question.',
                '• Award 1 point for correct answers, 0.5 for partially correct.',
                '• Keep a running scoreboard after each round.',
                '',
                'Opening line:',
                '"Alright [First student], [Second student] and everyone else — let\'s see who knows [Topic] best! 🏆"',
                '',
                'At the end: announce the winner and give every student a certificate message like:',
                '"[Student] — Great job! You showed strong understanding of [Topic]! 🌟"',
                '',
                'Important Rules:',
                '- After asking a question to a student, WAIT for the student to type their response.',
                '- Do not move to the next student until the current student has answered.',
                '- After each student response, give correction (if needed), feedback, and then ask the next student.',
                '- Only when the user types “End discussion”, then show the final summary, vocabulary list, and speaking homework.',
                '- Do not end the discussion on your own.',
                '',
                'Now begin the discussion.'
            ].join('\n')
        },
        {
            id: 'p6',
            emoji: '🌍',
            title: 'Real-World Scenario Roleplay',
            tag: 'Applied Learning',
            content: [
                'You are a facilitator running a real-world roleplay scenario based on "[Topic]".',
                '',
                'Players:',
                '[Students]',
                '',
                'Scenario setup:',
                '• Place the students in a real-world situation that requires knowledge of [Topic].',
                '• Assign each student a role related to the topic.',
                '• For example: if Topic is "Simple Interest", roles could be: Bank Manager, Customer, Loan Officer.',
                '',
                'How to run it:',
                '• Describe the scene in 2-3 sentences.',
                '• Ask each student to respond "in character".',
                '• Pause after each response to give English feedback.',
                '• At the end, break character and ask: "What did we learn about [Topic] today?"',
                '',
                'Goal: Students practise English AND apply their subject knowledge in a memorable way.',
                '',
                'Important Rules:',
                '- After asking a question to a student, WAIT for the student to type their response.',
                '- Do not move to the next student until the current student has answered.',
                '- After each student response, give correction (if needed), feedback, and then ask the next student.',
                '- Only when the user types “End discussion”, then show the final summary, vocabulary list, and speaking homework.',
                '- Do not end the discussion on your own.',
                '',
                'Now begin the discussion.'
            ].join('\n')
        }
    ];

    // ── Helpers ───────────────────────────────────────────────────

    // Your app renders students inside #studentRoster as .student-chip elements.
    // The chip HTML from webllm-practice.js typically looks like:
    //   <div class="student-chip"><strong>Name</strong> ...</div>
    // This function reads all those names.
    function getStudents() {
        var names = [];

        // Primary: .student-chip strong (standard chip structure)
        var chips = document.querySelectorAll('#studentRoster .student-chip strong');
        chips.forEach(function (el) {
            var name = el.textContent.trim();
            if (name) names.push(name);
        });

        // Fallback A: .student-chip without strong (plain text chip)
        if (!names.length) {
            var plainChips = document.querySelectorAll('#studentRoster .student-chip');
            plainChips.forEach(function (el) {
                // grab only text nodes, skip button text like "✕"
                var text = '';
                el.childNodes.forEach(function (node) {
                    if (node.nodeType === 3) text += node.textContent;
                });
                text = text.trim();
                if (text) names.push(text);
            });
        }

        // Fallback B: active student label
        if (!names.length) {
            var activeLabel = document.getElementById('activeStudentLabel');
            if (activeLabel) {
                var t = activeLabel.textContent.trim();
                if (t && t !== 'Individual mode') names.push(t);
            }
        }

        return names;
    }

    function getTopic() {
        var el = document.getElementById('selectedTopicTitle');
        if (el) {
            var t = el.textContent.trim();
            if (t && t !== 'Choose a topic to begin') return t;
        }
        return 'the selected topic';
    }

    function buildPrompt(raw, students, topic) {
        var participantText = students.length
            ? students.map(function (s) { return '- ' + s; }).join('\n')
            : '- Student 1\n- Student 2\n- Student 3';

        var first = students[0] || 'Student 1';
        var second = students[1] || 'Student 2';

        return raw
            .replace(/\[Students\]/g, participantText)
            .replace(/\[Topic\]/g, topic)
            .replace(/\[First student\]/g, first)
            .replace(/\[Second student\]/g, second);
    }

    function escHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    // ── Inject CSS ────────────────────────────────────────────────
    var css = `
    #pm-overlay {
      display: none; position: fixed; inset: 0;
      background: rgba(8, 20, 40, 0.72);
      z-index: 99999; padding: 20px;
      overflow-y: auto;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      animation: pm-fadein .2s ease;
    }
    #pm-overlay.pm-open { display: flex; align-items: flex-start; justify-content: center; }
    @keyframes pm-fadein { from { opacity:0 } to { opacity:1 } }

    #pm-modal {
      background: #fff;
      border-radius: 20px;
      width: 100%; max-width: 760px;
      box-shadow: 0 24px 64px rgba(0,0,0,0.3);
      overflow: hidden;
      animation: pm-slidein .25s cubic-bezier(0.34,1.56,0.64,1);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin-top: 20px;
    }
    @keyframes pm-slidein { from { transform:translateY(28px);opacity:0 } to { transform:translateY(0);opacity:1 } }

    #pm-header {
      background: linear-gradient(135deg, #0a84ff 0%, #6e8efb 100%);
      padding: 22px 24px 18px;
      color: #fff;
    }
    #pm-header-top { display:flex; align-items:flex-start; justify-content:space-between; gap:12px; }
    #pm-title { font-size: 20px; font-weight: 700; margin: 0 0 4px; }
    #pm-subtitle { font-size: 13px; opacity: .85; margin: 0; }
    #pm-close-btn {
      background: rgba(255,255,255,.2); border: none; border-radius: 50%;
      width: 34px; height: 34px; color: #fff; font-size: 18px;
      cursor: pointer; flex-shrink: 0; display:flex; align-items:center; justify-content:center;
      transition: background .15s;
    }
    #pm-close-btn:hover { background: rgba(255,255,255,.35); }

    #pm-meta { display:flex; flex-wrap:wrap; gap:8px; margin-top:14px; }
    .pm-pill {
      background: rgba(255,255,255,.2);
      border-radius: 999px; padding: 4px 12px;
      font-size: 12px; font-weight: 600; color:#fff;
      display: inline-flex; align-items: center; gap:5px;
    }

    #pm-body { padding: 20px 24px 28px; max-height: 65vh; overflow-y: auto; }

    .pm-card {
      border: 1.5px solid #e8edf5;
      border-radius: 14px; margin-bottom: 12px;
      overflow: hidden; transition: border-color .2s, box-shadow .2s;
    }
    .pm-card:hover { border-color: #b3c8f5; box-shadow: 0 4px 16px rgba(10,132,255,.1); }

    .pm-card-head {
      display: flex; align-items: center; gap: 12px;
      padding: 14px 16px; background: #f8faff; cursor: pointer;
      user-select: none; border-bottom: 1.5px solid transparent;
      transition: background .15s;
    }
    .pm-card-head:hover { background: #eef4ff; }
    .pm-card.pm-expanded .pm-card-head { border-bottom-color: #e8edf5; background: #eef4ff; }

    .pm-emoji { font-size: 22px; flex-shrink:0; }
    .pm-card-info { flex:1; min-width:0; }
    .pm-card-title { font-size: 14px; font-weight: 700; color: #0f1c36; margin:0 0 2px; }
    .pm-card-tag {
      display: inline-block; font-size: 10px; font-weight: 700;
      padding: 2px 8px; border-radius: 999px;
      background: #dbeafe; color: #1e40af; text-transform: uppercase; letter-spacing:.04em;
    }

    .pm-card-actions { display:flex; gap:7px; flex-shrink:0; align-items:center; }

    .pm-toggle-btn {
      background: none; border: 1.5px solid #c7d8f5; border-radius: 8px;
      padding: 5px 11px; font-size: 12px; font-weight: 600; color: #0a84ff;
      cursor: pointer; transition: background .15s, border-color .15s;
      display:flex; align-items:center; gap:4px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .pm-toggle-btn:hover { background: #dbeafe; border-color: #93b8f5; }
    .pm-toggle-icon { transition: transform .25s; display:inline-block; }
    .pm-card.pm-expanded .pm-toggle-icon { transform: rotate(180deg); }

    .pm-copy-btn {
      background: #0a84ff; border: none; border-radius: 8px;
      padding: 5px 13px; font-size: 12px; font-weight: 700; color: #fff;
      cursor: pointer; transition: background .15s, transform .1s;
      display:flex; align-items:center; gap:4px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .pm-copy-btn:hover { background: #0070e0; }
    .pm-copy-btn:active { transform: scale(.96); }
    .pm-copy-btn.pm-copied { background: #1D9E75; }

    .pm-preview {
      padding: 12px 16px;
      font-size: 13px; color: #5a6a85; line-height: 1.55;
      white-space: pre-wrap; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .pm-full {
      display: none;
      padding: 14px 16px;
      font-size: 13px; color: #2c3e60; line-height: 1.7;
      white-space: pre-wrap; font-family: 'Consolas', 'Courier New', monospace;
      background: #fcfcff; border-top: 1px solid #eef0f7;
      margin: 0;
    }
    .pm-card.pm-expanded .pm-preview { display: none; }
    .pm-card.pm-expanded .pm-full    { display: block; }

    #pm-ai-links {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 14px;
      padding: 12px 14px;
      background: linear-gradient(135deg, #f7faff 0%, #eef4ff 100%);
      border: 1px solid #e7eefc;
      border-radius: 14px;
    }
    .pm-ai-link-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 9px 13px;
      border: none;
      border-radius: 999px;
      background: linear-gradient(135deg, #0a84ff, #6e8efb);
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(10,132,255,.18);
      transition: transform .15s, box-shadow .15s, opacity .15s;
    }
    .pm-ai-link-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(10,132,255,.24);
      opacity: .95;
    }
    .pm-ai-link-btn:active { transform: scale(.97); }

    #pm-footer {
      padding: 14px 24px;
      border-top: 1px solid #eef0f7;
      display:flex; align-items:center; justify-content:space-between; gap:12px;
      flex-wrap: wrap;
    }
    #pm-footer-note { font-size: 12px; color: #8a99b0; }
    #pm-copy-all-btn {
      background: linear-gradient(135deg, #0a84ff, #6e8efb);
      border: none; border-radius: 10px; padding: 9px 20px;
      font-size: 13px; font-weight: 700; color: #fff; cursor: pointer;
      transition: opacity .15s, transform .1s;
      display:flex; align-items:center; gap:6px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    #pm-copy-all-btn:hover { opacity: .88; }
    #pm-copy-all-btn:active { transform: scale(.97); }

    /* ── Trigger button — injected inside .selected-topic-header ── */
    #pm-trigger-btn {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 9px 18px; border: none; border-radius: 999px;
      background: linear-gradient(135deg, #6e8efb, #a777e3);
      color: #fff; font-size: 13px; font-weight: 700;
      cursor: pointer; margin-top: 10px;
      box-shadow: 0 4px 14px rgba(110,142,251,.35);
      transition: transform .2s, box-shadow .2s;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      white-space: nowrap;
    }
    #pm-trigger-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(110,142,251,.45); }
    #pm-trigger-btn:active { transform: scale(.97); }
    #pm-trigger-btn.pm-hidden { display: none !important; }

    @media (prefers-color-scheme: dark) {
      #pm-modal { background: #1a1d2e; }
      .pm-card { border-color: rgba(255,255,255,.1); }
      .pm-card-head { background: #1f2340; }
      .pm-card-head:hover, .pm-card.pm-expanded .pm-card-head { background: #252850; }
      .pm-card-title { color: #e0e6ff; }
      .pm-preview { color: #8a9bc0; }
      .pm-full { background: #161929; color: #c0cce8; border-color: rgba(255,255,255,.08); }
      #pm-ai-links { background: linear-gradient(135deg, #1f2340 0%, #252850 100%); border-color: rgba(255,255,255,.08); }
      #pm-body { scrollbar-color: #3a4060 #1a1d2e; }
      #pm-footer { border-color: rgba(255,255,255,.08); }
      #pm-footer-note { color: #556080; }
      .pm-toggle-btn { border-color: #3a4870; color: #6ea8fe; }
      .pm-toggle-btn:hover { background: #1e2d4a; }
    }

    @media (max-width: 520px) {
      #pm-overlay { padding: 0; align-items: flex-end; }
      #pm-modal { border-radius: 20px 20px 0 0; max-width: 100%; margin-top: 0; }
      #pm-body { max-height: 72vh; }
      .pm-card-actions { flex-direction: column; gap: 5px; }
    }
  `;

    var styleEl = document.createElement('style');
    styleEl.id = 'pm-styles';
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    // ── Build Modal HTML ──────────────────────────────────────────
    var modalWrap = document.createElement('div');
    modalWrap.innerHTML =
        '<div id="pm-overlay">' +
        '<div id="pm-modal" role="dialog" aria-modal="true" aria-labelledby="pm-title">' +

        '<div id="pm-header">' +
        '<div id="pm-header-top">' +
        '<div>' +
        '<p id="pm-title">🤖 AI Prompt Templates</p>' +
        '<p id="pm-subtitle">Pick a style and copy it straight into your AI chat</p>' +
        '</div>' +
        '<button id="pm-close-btn" aria-label="Close">✕</button>' +
        '</div>' +
        '<div id="pm-meta"></div>' +
        '</div>' +

        '<div id="pm-body"></div>' +

        '<div id="pm-footer">' +
        '<span id="pm-footer-note">Click a prompt to expand · Copy to use in any AI chat</span>' +
        '<button id="pm-copy-all-btn">📋 Copy All Prompts</button>' +
        '</div>' +

        '</div>' +
        '</div>';
    document.body.appendChild(modalWrap);

    // ── Grab refs ─────────────────────────────────────────────────
    var overlay = document.getElementById('pm-overlay');
    var closeBtn = document.getElementById('pm-close-btn');
    var metaDiv = document.getElementById('pm-meta');
    var bodyDiv = document.getElementById('pm-body');
    var copyAllBtn = document.getElementById('pm-copy-all-btn');

    // ── Inject trigger button into .selected-topic-header ─────────
    // Your HTML:
    //   <div class="selected-topic-header">
    //     <div>
    //       <p class="status-kicker">Selected Topic</p>
    //       <h3 id="selectedTopicTitle">Choose a topic to begin</h3>
    //     </div>
    //     <div id="selectedTopicMeta" ...></div>
    //   </div>
    // We append the button as a third child of .selected-topic-header
    // so it sits below the title row, nicely inside the card header.

    var triggerBtn = document.createElement('button');
    triggerBtn.id = 'pm-trigger-btn';
    triggerBtn.className = 'pm-hidden';
    triggerBtn.innerHTML = '✨ View AI Prompts';
    triggerBtn.setAttribute('aria-label', 'View AI prompt templates for this topic');

    var topicHeader = document.querySelector('.selected-topic-header');
    if (topicHeader) {
        topicHeader.appendChild(triggerBtn);
    } else {
        // Fallback: append inside selected-topic-card
        var topicCard = document.querySelector('.selected-topic-card');
        if (topicCard) {
            topicCard.insertBefore(triggerBtn, topicCard.firstChild);
        } else {
            document.body.appendChild(triggerBtn);
        }
    }

    // ── Watch #selectedTopicTitle for changes ─────────────────────
    var topicTitleEl = document.getElementById('selectedTopicTitle');
    if (topicTitleEl) {
        function syncTriggerBtn() {
            var t = topicTitleEl.textContent.trim();
            if (t && t !== 'Choose a topic to begin') {
                triggerBtn.classList.remove('pm-hidden');
                triggerBtn.innerHTML = '✨ View AI Prompts';
            } else {
                triggerBtn.classList.add('pm-hidden');
            }
        }
        new MutationObserver(syncTriggerBtn)
            .observe(topicTitleEl, { childList: true, subtree: true, characterData: true });

        // Also fire once in case topic is already set on page load
        syncTriggerBtn();
    }

    // ── Open / Close ──────────────────────────────────────────────
    function openModal() {
        renderModal(getStudents(), getTopic());
        overlay.classList.add('pm-open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay.classList.remove('pm-open');
        document.body.style.overflow = '';
    }

    triggerBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });

    // ── Render modal content ──────────────────────────────────────
    function renderModal(students, topic) {
        // Header meta pills
        metaDiv.innerHTML = '';

        var topicPill = document.createElement('span');
        topicPill.className = 'pm-pill';
        topicPill.innerHTML = '📚 ' + escHtml(topic);
        metaDiv.appendChild(topicPill);

        var studPill = document.createElement('span');
        studPill.className = 'pm-pill';
        studPill.innerHTML = students.length
            ? '👥 ' + escHtml(students.join(', '))
            : '👤 No students added yet';
        metaDiv.appendChild(studPill);

        var countPill = document.createElement('span');
        countPill.className = 'pm-pill';
        countPill.innerHTML = '📝 ' + PROMPTS.length + ' prompts';
        metaDiv.appendChild(countPill);

        // Render AI launch buttons and prompt cards
        bodyDiv.innerHTML = '';

        var aiLinks = document.createElement('div');
        aiLinks.id = 'pm-ai-links';
        aiLinks.innerHTML = [
            '<a class="pm-ai-link-btn" href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">🤖 ChatGPT</a>',
            '<a class="pm-ai-link-btn" href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">💎 Gemini</a>',
            '<a class="pm-ai-link-btn" href="https://grok.com/" target="_blank" rel="noopener noreferrer">🦊 Grok</a>'
        ].join('');
        bodyDiv.appendChild(aiLinks);

        PROMPTS.forEach(function (p) {
            var fullText = buildPrompt(p.content, students, topic);
            var preview = fullText.substring(0, 180).trim();
            if (fullText.length > 180) preview += '…';

            var card = document.createElement('div');
            card.className = 'pm-card';
            card.innerHTML =
                '<div class="pm-card-head">' +
                '<span class="pm-emoji">' + p.emoji + '</span>' +
                '<div class="pm-card-info">' +
                '<p class="pm-card-title">' + escHtml(p.title) + '</p>' +
                '<span class="pm-card-tag">' + escHtml(p.tag) + '</span>' +
                '</div>' +
                '<div class="pm-card-actions">' +
                '<button class="pm-toggle-btn" aria-expanded="false">' +
                'Expand <span class="pm-toggle-icon">▾</span>' +
                '</button>' +
                '<button class="pm-copy-btn">📋 Copy</button>' +
                '</div>' +
                '</div>' +
                '<div class="pm-preview">' + escHtml(preview) + '</div>' +
                '<pre class="pm-full">' + escHtml(fullText) + '</pre>';

            var head = card.querySelector('.pm-card-head');
            var toggleBtn = card.querySelector('.pm-toggle-btn');
            var copyBtn = card.querySelector('.pm-copy-btn');

            // Expand / collapse on header click
            head.addEventListener('click', function (e) {
                if (e.target.closest('.pm-copy-btn')) return;
                var isExp = card.classList.contains('pm-expanded');
                card.classList.toggle('pm-expanded', !isExp);
                toggleBtn.innerHTML = (!isExp ? 'Collapse' : 'Expand') +
                    ' <span class="pm-toggle-icon">▾</span>';
                toggleBtn.setAttribute('aria-expanded', String(!isExp));
            });

            // Copy button
            copyBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                copyText(fullText, copyBtn);
            });

            bodyDiv.appendChild(card);
        });
    }

    // ── Copy all prompts ──────────────────────────────────────────
    copyAllBtn.addEventListener('click', function () {
        var students = getStudents();
        var topic = getTopic();
        var all = PROMPTS.map(function (p, i) {
            return '=== Prompt ' + (i + 1) + ': ' + p.title + ' ===\n\n' +
                buildPrompt(p.content, students, topic);
        }).join('\n\n' + '─'.repeat(60) + '\n\n');
        copyText(all, copyAllBtn);
    });

    // ── Copy helpers ──────────────────────────────────────────────
    function copyText(text, btn) {
        var original = btn.innerHTML;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text)
                .then(function () { showCopied(btn, original); })
                .catch(function () { fallbackCopy(text, btn, original); });
        } else {
            fallbackCopy(text, btn, original);
        }
    }

    function fallbackCopy(text, btn, original) {
        var el = document.createElement('textarea');
        el.value = text;
        el.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;';
        document.body.appendChild(el);
        el.focus();
        el.select();
        try { document.execCommand('copy'); showCopied(btn, original); } catch (e) { /* silent */ }
        document.body.removeChild(el);
    }

    function showCopied(btn, original) {
        btn.innerHTML = '✅ Copied!';
        btn.classList.add('pm-copied');
        setTimeout(function () {
            btn.innerHTML = original;
            btn.classList.remove('pm-copied');
        }, 2000);
    }

    // ── Global API so tour.js can open the modal ──────────────────
    window.promptModal = { open: openModal, close: closeModal };

    ready(function () {
        // Re-check once DOM is fully loaded in case topic was pre-set
        if (topicTitleEl) {
            var t = topicTitleEl.textContent.trim();
            if (t && t !== 'Choose a topic to begin') {
                triggerBtn.classList.remove('pm-hidden');
            }
        }
    });

})();