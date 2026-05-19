// ===== PHONETICS READER + STEM PRACTICE — GUIDED TOUR =====
// Uses Driver.js v1.3.x  (window.driver.js.driver)

window.onload = () => {

    const driver = window.driver.js.driver;

    // ── helpers ──────────────────────────────────────────────
    // Ensure the Phonetics Reader (legacy UI) is visible for steps 12-15
    function showLegacyUI() {
        const body = document.body;
        const btn = document.getElementById("toggleLegacyUiBtn");
        if (!body.classList.contains("show-legacy")) {
            body.classList.add("show-legacy");
            if (btn) btn.textContent = "Hide Phonetics Reader";
        }
    }

    // Hide Phonetics Reader again after the tour finishes (optional – comment out if you want it to stay open)
    function hideLegacyUI() {
        const body = document.body;
        const btn = document.getElementById("toggleLegacyUiBtn");
        if (body.classList.contains("show-legacy")) {
            body.classList.remove("show-legacy");
            if (btn) btn.textContent = "Show Phonetics Reader";
        }
    }

    // Scroll an element into view before Driver focuses it
    function scrollTo(selector) {
        const el = document.querySelector(selector);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // ── tour definition ──────────────────────────────────────
    const driverObj = driver({

        showProgress: true,
        animate: true,
        smoothScroll: true,
        allowClose: true,
        stagePadding: 10,
        progressText: "Step {{current}} of {{total}}",

        // Restore UI when the user closes the tour mid-way
        onDestroyed: () => {
            hideLegacyUI();
        },

        steps: [

            // ── Step 1 · Welcome ────────────────────────────────
            {
                // No element → centred overlay popup
                popover: {
                    title: "👋 Welcome to the Platform!",
                    description:
                        "This quick tour will walk you through every feature of the " +
                        "<strong>Phonetics Reader &amp; STEM Conversation Lab</strong>. " +
                        "Click <em>Next</em> to begin, or press <kbd>Esc</kbd> to skip at any time.",
                    side: "over",
                    align: "center",
                },
            },

            // ── Step 2 · Main purpose ────────────────────────────
            {
                element: ".practice-subtitle",
                popover: {
                    title: "🎯 What This Website Does",
                    description:
                        "This platform helps CBSE students <strong>improve spoken English</strong>, " +
                        "pronunciation, and STEM communication skills using on-device AI — " +
                        "no internet needed once the model is loaded.",
                    side: "bottom",
                    align: "start",
                },
            },

            // ── Step 3 · STEM Conversation Lab ──────────────────
            {
                element: "#practiceTitle",
                popover: {
                    title: "🔬 STEM Conversation Lab",
                    description:
                        "The main learning area. Pick a CBSE science or maths topic, " +
                        "load an on-device AI model, then speak or type in English. " +
                        "The AI tutor listens and gives instant corrections.",
                    side: "bottom",
                    align: "center",
                },
            },

            // ── Step 4 · Model loading ───────────────────────────
            {
                element: ".practice-status-card",
                popover: {
                    title: "⚙️ Model Status & Loading",
                    description:
                        "Before chatting, you must load an AI model. Select a model " +
                        "size from the sidebar dropdown and click <strong>Load Selected Model</strong>. " +
                        "The progress bar here tracks the download. Smaller models load faster.",
                    side: "left",
                    align: "start",
                },
            },

            // ── Step 5 · Install App (PWA) ───────────────────────
            {
                element: "#pwaPrompt",
                popover: {
                    title: "📲 Install as an App",
                    description:
                        "On Windows Chrome you'll see an <strong>Install App</strong> button here. " +
                        "Installing the site as a Progressive Web App gives you a faster, " +
                        "distraction-free practice window — great for classroom use.",
                    side: "bottom",
                    align: "start",
                },
                onHighlightStarted: () => {
                    // Make the PWA prompt visible so the step makes sense
                    const el = document.getElementById("pwaPrompt");
                    if (el) el.hidden = false;
                },
            },

            // ── Step 6 · Group Mode ──────────────────────────────
            {
                element: ".group-mode-grid",
                popover: {
                    title: "👥 Group Mode",
                    description:
                        "Type a student name and click <strong>Add Student</strong>. " +
                        "Multiple students can share one device and take turns speaking. " +
                        "Use <em>Next Speaker</em> to rotate who is active. " +
                        "The tutor tracks each student's contribution.",
                    side: "right",
                    align: "start",
                },
                onHighlightStarted: () => {
                    scrollTo(".group-mode-grid");
                },
            },

            // ── Step 7 · Topic selection ─────────────────────────
            {
                element: ".selected-topic-card",
                popover: {
                    title: "📚 Topic Selection",
                    description:
                        "Filter topics by <strong>CBSE grade</strong> and <strong>subject</strong>, " +
                        "or search by keyword. Click any topic card in the sidebar to load it here. " +
                        "You'll see a summary, conversation hints, and a practice checklist.",
                    side: "top",
                    align: "center",
                },
                onHighlightStarted: () => {
                    scrollTo(".selected-topic-card");
                },
            },

            // ── Step 8 · Live Chat / speaking ────────────────────
            {
                element: ".conversation-card",
                popover: {
                    title: "🎤 Live Chat — Speak & Practice",
                    description:
                        "Click <strong>Start Speaking</strong> to use your microphone, or type " +
                        "directly in the text box. Press <strong>Send to Tutor</strong> (or " +
                        "<kbd>Ctrl + Enter</kbd>) when ready. The AI tutor will reply with " +
                        "coaching in real time.",
                    side: "top",
                    align: "center",
                },
                onHighlightStarted: () => {
                    scrollTo(".conversation-card");
                },
            },

            // ── Step 9 · Feedback panel ──────────────────────────
            {
                element: ".feedback-metrics",
                popover: {
                    title: "📊 Instant Feedback Scores",
                    description:
                        "After each turn you get live scores for <strong>Grammar</strong>, " +
                        "<strong>Topic Coverage</strong>, <strong>Problem Solving</strong>, " +
                        "<strong>Team Building</strong>, <strong>Soft Skills</strong>, " +
                        "<strong>Analytical Skills</strong>, and <strong>Critical Thinking</strong>.",
                    side: "top",
                    align: "center",
                },
                onHighlightStarted: () => {
                    scrollTo(".feedback-metrics");
                },
            },

            // ── Step 10 · Correction Diff ────────────────────────
            {
                element: "#feedbackDiff",
                popover: {
                    title: "✏️ Correction Diff",
                    description:
                        "Your sentence is compared word-by-word to the tutor's corrected version. " +
                        "<span style='background:rgba(54,179,126,.25);padding:1px 4px;border-radius:4px;'>Green highlights</span> show added or corrected words, " +
                        "<span style='background:rgba(255,99,71,.25);padding:1px 4px;border-radius:4px;'>red highlights</span> " +
                        "show what needs fixing. Learn from the difference at a glance.",
                    side: "top",
                    align: "center",
                },
                onHighlightStarted: () => {
                    scrollTo("#feedbackDiff");
                },
            },

            // ── Step 11 · Show Phonetics Reader toggle ───────────
            {
                element: "#toggleLegacyUiBtn",
                popover: {
                    title: "🔤 Show / Hide Phonetics Reader",
                    description:
                        "Click this button to reveal the full <strong>Phonetics Reader</strong> — " +
                        "a separate mode for pronunciation and reading practice. " +
                        "It will open now so the next steps can guide you through it.",
                    side: "bottom",
                    align: "end",

                    onNextClick: () => {
                        showLegacyUI();
                        // Small delay so the DOM re-paints before Driver repositions
                        setTimeout(() => driverObj.moveNext(), 600);
                    },
                },
            },

            // ── Step 12 · Phonetics Output ───────────────────────
            {
                element: ".sidebar",
                popover: {
                    title: "📖 Phonetics Output Panel",
                    description:
                        "This panel shows a phonetic breakdown of your text. " +
                        "Switch between <strong>English</strong> (split syllables), " +
                        "<strong>IPA</strong> (International Phonetic Alphabet), and " +
                        "<strong>ARPAbet</strong> to see different transcription styles. " +
                        "Words highlight in green as they are spoken aloud.",
                    side: "right",
                    align: "start",
                },
                onHighlightStarted: () => {
                    scrollTo(".sidebar");
                },
            },

            // ── Step 13 · Speak / Pause controls ─────────────────
            {
                element: ".control-buttons",
                popover: {
                    title: "▶️ Speak &amp; Pause Controls",
                    description:
                        "Click <strong>Speak</strong> to hear your text read aloud word by word. " +
                        "Click <strong>Pause</strong> to freeze playback and <strong>Resume</strong> " +
                        "to continue. Click <strong>Stop</strong> (the same button while speaking) " +
                        "to cancel. Use the <em>Loop</em> toggle to repeat automatically.",
                    side: "bottom",
                    align: "center",
                },
                onHighlightStarted: () => {
                    scrollTo(".control-buttons");
                },
            },

            // ── Step 14 · Volume / Voice ─────────────────────────
            {
                element: ".controls",
                popover: {
                    title: "🔊 Volume &amp; Voice Settings",
                    description:
                        "Drag the <strong>Volume</strong> slider to adjust loudness. " +
                        "The <strong>Voice</strong> dropdown lists every text-to-speech voice " +
                        "installed in your browser — try different accents to train your ear. " +
                        "The <strong>Speed</strong> control in the header adjusts reading pace.",
                    side: "top",
                    align: "center",
                },
                onHighlightStarted: () => {
                    scrollTo(".controls");
                },
            },

            // ── Step 15 · Word Navigation ─────────────────────────
            {
                element: ".word-nav-container",
                popover: {
                    title: "⏭️ Word Navigation",
                    description:
                        "Drag the <strong>Word Navigation</strong> slider to jump to any word in " +
                        "the text. Use the <strong>±1 … ±10</strong> jump buttons below to hop " +
                        "backward or forward by a fixed number of words — perfect for drilling a " +
                        "difficult phrase repeatedly.",
                    side: "top",
                    align: "center",
                },
                onHighlightStarted: () => {
                    scrollTo(".word-nav-container");
                },
            },

            // ── Step 16 · Completion ──────────────────────────────
            {
                popover: {
                    title: "🎉 You're All Set!",
                    description:
                        "You've completed the full tour of the <strong>Phonetics Reader &amp; " +
                        "STEM Conversation Lab</strong>. " +
                        "<br><br>" +
                        "Here's a quick recap:<br>" +
                        "① Pick a CBSE topic &nbsp;② Load a model &nbsp;③ Speak in English<br>" +
                        "④ Get grammar &amp; skill feedback &nbsp;⑤ Practice pronunciation<br><br>" +
                        "Good luck and happy learning! 🚀",
                    side: "over",
                    align: "center",

                    onNextClick: () => {
                        hideLegacyUI();
                        driverObj.destroy();
                    },
                },
            },

        ], // end steps
    }); // end driver()

    // ── Wire up every "Start Tour" button on the page ────────
    document.querySelectorAll("#startTourBtn").forEach((btn) => {
        btn.addEventListener("click", () => {
            // Always start from the top of the page so step 1 looks right
            window.scrollTo({ top: 0, behavior: "smooth" });
            // Small delay to let the scroll settle
            setTimeout(() => driverObj.drive(), 400);
        });
    });

}; // end window.onload