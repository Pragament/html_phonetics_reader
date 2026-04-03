import * as webllm from "https://esm.run/@mlc-ai/web-llm";

const MODEL_OPTIONS = [
    {
        id: "Llama-3.2-1B-Instruct-q4f32_1-MLC",
        label: "Llama 3.2 1B Instruct",
        note: "Fastest startup, lighter practice model"
    },
    {
        id: "Qwen2.5-1.5B-Instruct-q4f32_1-MLC",
        label: "Qwen 2.5 1.5B Instruct",
        note: "Balanced speed and conversation quality"
    },
    {
        id: "Llama-3.2-3B-Instruct-q4f32_1-MLC",
        label: "Llama 3.2 3B Instruct",
        note: "Stronger responses, larger download"
    },
    {
        id: "Phi-3.5-mini-instruct-q4f32_1-MLC",
        label: "Phi 3.5 Mini Instruct",
        note: "Compact tutoring model"
    }
];

const STEM_TOPICS = [
    {
        id: "bio-photosynthesis",
        grade: "Grade 7",
        subject: "Science",
        title: "Photosynthesis in green plants",
        summary: "Explain how plants prepare food and why sunlight, chlorophyll, carbon dioxide, and water matter.",
        hints: [
            "Start with a simple definition in one sentence.",
            "Mention the raw materials and the product.",
            "Use cause-and-effect words such as because, so, and therefore."
        ],
        bullets: [
            { text: "Define photosynthesis clearly.", keywords: ["photosynthesis", "process", "plants", "food"] },
            { text: "Mention sunlight and chlorophyll.", keywords: ["sunlight", "chlorophyll"] },
            { text: "Mention carbon dioxide and water.", keywords: ["carbon", "dioxide", "water"] },
            { text: "Mention glucose or food and oxygen.", keywords: ["glucose", "food", "oxygen"] }
        ]
    },
    {
        id: "physics-force-pressure",
        grade: "Grade 8",
        subject: "Science",
        title: "Force and pressure in daily life",
        summary: "Talk about how force acts on objects and how pressure changes with area.",
        hints: [
            "Give one everyday example such as a sharp knife or school bag straps.",
            "Contrast force with pressure.",
            "Explain why smaller area can create larger pressure."
        ],
        bullets: [
            { text: "Define force as a push or pull.", keywords: ["force", "push", "pull"] },
            { text: "Define pressure using force and area.", keywords: ["pressure", "area"] },
            { text: "Give a real-life example.", keywords: ["example", "knife", "pin", "bag", "heels"] },
            { text: "Explain why pressure changes with area.", keywords: ["smaller", "larger", "area", "more", "less"] }
        ]
    },
    {
        id: "chem-acids-bases",
        grade: "Grade 9",
        subject: "Science",
        title: "Acids, bases and indicators",
        summary: "Describe the properties of acids and bases and explain how indicators help identify them.",
        hints: [
            "Compare acids and bases in a short contrast sentence.",
            "Name at least one indicator.",
            "Mention a classroom or home example."
        ],
        bullets: [
            { text: "State one property of acids.", keywords: ["acid", "sour", "hydrogen"] },
            { text: "State one property of bases.", keywords: ["base", "bitter", "soapy"] },
            { text: "Mention an indicator.", keywords: ["litmus", "indicator", "phenolphthalein", "turmeric"] },
            { text: "Give an example substance.", keywords: ["lemon", "vinegar", "soap", "baking"] }
        ]
    },
    {
        id: "physics-electricity",
        grade: "Grade 10",
        subject: "Science",
        title: "Current, voltage and resistance",
        summary: "Practice explaining basic electricity terms and how they work in a circuit.",
        hints: [
            "Use a compare-and-contrast structure.",
            "Name the unit for each quantity if you can.",
            "Connect the concepts to a bulb or battery example."
        ],
        bullets: [
            { text: "Define electric current.", keywords: ["current", "charge", "flow"] },
            { text: "Define voltage or potential difference.", keywords: ["voltage", "potential", "difference"] },
            { text: "Define resistance.", keywords: ["resistance", "oppose"] },
            { text: "Mention a circuit example.", keywords: ["battery", "bulb", "circuit", "wire"] }
        ]
    },
    {
        id: "math-linear-equations",
        grade: "Grade 8",
        subject: "Mathematics",
        title: "Solving linear equations",
        summary: "Explain what a linear equation is and how to solve it step by step.",
        hints: [
            "Describe the goal before giving the steps.",
            "Use sequence words like first, next, then, finally.",
            "Give a tiny example with x."
        ],
        bullets: [
            { text: "State what a linear equation is.", keywords: ["linear", "equation", "variable"] },
            { text: "Mention balancing both sides.", keywords: ["both", "sides", "balance"] },
            { text: "Describe inverse operations.", keywords: ["add", "subtract", "multiply", "divide"] },
            { text: "Give a short example.", keywords: ["example", "x"] }
        ]
    },
    {
        id: "math-quadratic",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Quadratic equations and their roots",
        summary: "Talk about the form of a quadratic equation and common ways to solve it.",
        hints: [
            "Start with the standard form ax squared plus bx plus c.",
            "Mention factorization or quadratic formula.",
            "Explain what the roots represent."
        ],
        bullets: [
            { text: "State the standard form.", keywords: ["ax", "bx", "c", "quadratic"] },
            { text: "Mention one solving method.", keywords: ["factorization", "formula", "completing"] },
            { text: "Explain what roots are.", keywords: ["roots", "solutions", "zero"] },
            { text: "Use one mathematical example.", keywords: ["example", "x", "squared"] }
        ]
    },
    {
        id: "cs-ai-basics",
        grade: "Grade 9",
        subject: "Technology",
        title: "Artificial intelligence in everyday life",
        summary: "Describe what AI is and where students may already use it around them.",
        hints: [
            "Explain AI in simple classroom-friendly English.",
            "Mention one benefit and one limitation.",
            "Use examples like maps, recommendations, or voice assistants."
        ],
        bullets: [
            { text: "Define AI simply.", keywords: ["artificial", "intelligence", "machines", "learn"] },
            { text: "Give a familiar example.", keywords: ["maps", "assistant", "recommendation", "camera"] },
            { text: "Mention one advantage.", keywords: ["helps", "fast", "efficient", "accurate"] },
            { text: "Mention one limitation or concern.", keywords: ["bias", "privacy", "mistake", "limit"] }
        ]
    },
    {
        id: "eng-bridge-design",
        grade: "Grade 11",
        subject: "Engineering",
        title: "How bridge design balances strength and load",
        summary: "Practice explaining how engineers choose shapes and materials to keep bridges safe.",
        hints: [
            "Talk about load, material, and safety together.",
            "Mention tension and compression if possible.",
            "Use one real-world bridge idea or example."
        ],
        bullets: [
            { text: "Mention load and support.", keywords: ["load", "support"] },
            { text: "Mention material choice.", keywords: ["steel", "concrete", "material"] },
            { text: "Mention tension or compression.", keywords: ["tension", "compression"] },
            { text: "Explain why design affects safety.", keywords: ["safe", "safety", "design", "shape"] }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const ui = {
        modelSelect: document.getElementById("llmModelSelect"),
        loadModelBtn: document.getElementById("loadModelBtn"),
        llmStatusLabel: document.getElementById("llmStatusLabel"),
        llmProgressText: document.getElementById("llmProgressText"),
        llmProgressBar: document.getElementById("llmProgressBar"),
        pwaPrompt: document.getElementById("pwaPrompt"),
        pwaPromptTitle: document.getElementById("pwaPromptTitle"),
        pwaPromptText: document.getElementById("pwaPromptText"),
        pwaActionBtn: document.getElementById("pwaActionBtn"),
        studentNameInput: document.getElementById("studentNameInput"),
        addStudentBtn: document.getElementById("addStudentBtn"),
        studentRoster: document.getElementById("studentRoster"),
        activeStudentLabel: document.getElementById("activeStudentLabel"),
        nextSpeakerBtn: document.getElementById("nextSpeakerBtn"),
        cbseGradeFilter: document.getElementById("cbseGradeFilter"),
        subjectFilter: document.getElementById("subjectFilter"),
        topicSearchInput: document.getElementById("topicSearchInput"),
        topicList: document.getElementById("topicList"),
        selectedTopicTitle: document.getElementById("selectedTopicTitle"),
        selectedTopicMeta: document.getElementById("selectedTopicMeta"),
        selectedTopicSummary: document.getElementById("selectedTopicSummary"),
        topicHintsList: document.getElementById("topicHintsList"),
        topicBulletList: document.getElementById("topicBulletList"),
        practiceMicBtn: document.getElementById("practiceMicBtn"),
        stopSpeechBtn: document.getElementById("stopSpeechBtn"),
        speechSupportNote: document.getElementById("speechSupportNote"),
        chatMessages: document.getElementById("chatMessages"),
        practiceInput: document.getElementById("practiceInput"),
        listeningBadge: document.getElementById("listeningBadge"),
        sendPracticeBtn: document.getElementById("sendPracticeBtn"),
        feedbackSummary: document.getElementById("feedbackSummary"),
        feedbackDiff: document.getElementById("feedbackDiff"),
        grammarScore: document.getElementById("grammarScore"),
        coverageScore: document.getElementById("coverageScore"),
        turnCount: document.getElementById("turnCount"),
        problemSolvingScore: document.getElementById("problemSolvingScore"),
        teamBuildingScore: document.getElementById("teamBuildingScore"),
        softSkillsScore: document.getElementById("softSkillsScore"),
        analyticalSkillsScore: document.getElementById("analyticalSkillsScore"),
        criticalThinkingScore: document.getElementById("criticalThinkingScore")
    };

    const state = {
        engine: null,
        engineLoaded: false,
        selectedModel: MODEL_OPTIONS[0].id,
        loadedModelId: null,
        selectedTopic: null,
        completedBullets: new Set(),
        practiceTurns: 0,
        isRecognizing: false,
        recognition: null,
        deferredInstallPrompt: null,
        hasInstalledPwa: localStorage.getItem("practicePwaInstalled") === "true",
        students: [],
        activeStudentId: null,
        collaborationScores: {
            problemSolving: 0,
            teamBuilding: 0,
            softSkills: 0,
            analyticalSkills: 0,
            criticalThinking: 0
        },
        messages: [
            {
                role: "system",
                content: buildSystemPrompt(null)
            }
        ]
    };

    const legacyToggle = document.getElementById("toggleLegacyUiBtn");

    hydrateModelOptions(ui.modelSelect);
    hydrateFilters(ui);
    renderStudentRoster(ui, state);
    renderTopicList(ui, state);
    setSpeechSupportNote(ui, state);
    attachEvents(ui, state);
    attachLegacyToggle(legacyToggle);
    registerServiceWorker();
    setupPwaPrompt(ui, state);
    updateTutorState(ui, state, "Choose a topic and load a model to begin.");
    appendMessage(ui.chatMessages, "assistant", "Choose a STEM topic, load a WebLLM model, and then start speaking in English. I will respond like a patient tutor and give you instant corrections.");
});

function hydrateModelOptions(modelSelect) {
    modelSelect.innerHTML = MODEL_OPTIONS.map((model) => (
        `<option value="${model.id}">${model.label} - ${model.note}</option>`
    )).join("");
}

function hydrateFilters(ui) {
    const grades = [...new Set(STEM_TOPICS.map((topic) => topic.grade))];
    const subjects = [...new Set(STEM_TOPICS.map((topic) => topic.subject))];

    ui.cbseGradeFilter.insertAdjacentHTML("beforeend", grades.map((grade) => `<option value="${grade}">${grade}</option>`).join(""));
    ui.subjectFilter.insertAdjacentHTML("beforeend", subjects.map((subject) => `<option value="${subject}">${subject}</option>`).join(""));
}

function attachEvents(ui, state) {
    ui.modelSelect.addEventListener("change", () => {
        state.selectedModel = ui.modelSelect.value;
        if (state.loadedModelId !== state.selectedModel) {
            state.engineLoaded = false;
            state.engine = null;
            ui.loadModelBtn.disabled = false;
            ui.loadModelBtn.textContent = "Load Selected Model";
            ui.llmStatusLabel.textContent = "Not loaded";
            ui.llmProgressBar.style.width = "0%";
            updateTutorState(ui, state, "Selected model changed. Load the new model to continue.");
        }
    });

    ui.loadModelBtn.addEventListener("click", async () => {
        if (state.engineLoaded && state.loadedModelId === state.selectedModel) {
            updateTutorState(ui, state, `Model ready: ${state.selectedModel}`);
            return;
        }

        ui.loadModelBtn.disabled = true;
        ui.loadModelBtn.textContent = "Loading model...";
        ui.llmStatusLabel.textContent = "Loading";
        ui.llmProgressBar.style.width = "0%";

        try {
            state.engine = await webllm.CreateMLCEngine(state.selectedModel, {
                initProgressCallback: (progress) => {
                    const progressText = progress.text || "Preparing model...";
                    const fraction = typeof progress.progress === "number" ? Math.max(0, Math.min(1, progress.progress)) : 0;
                    ui.llmProgressText.textContent = progressText;
                    ui.llmProgressBar.style.width = `${Math.round(fraction * 100)}%`;
                }
            });
            state.engineLoaded = true;
            state.loadedModelId = state.selectedModel;
            ui.llmStatusLabel.textContent = "Loaded";
            ui.llmProgressText.textContent = `${state.selectedModel} is ready for conversation practice.`;
            ui.llmProgressBar.style.width = "100%";
            ui.loadModelBtn.textContent = "Model Ready";
            appendMessage(ui.chatMessages, "assistant", buildWelcomeMessage(state.selectedTopic));
        } catch (error) {
            console.error("WebLLM load failed:", error);
            ui.llmStatusLabel.textContent = "Load failed";
            ui.llmProgressText.textContent = "The model could not be loaded in this browser. Try a smaller model or a Chromium-based browser.";
            ui.loadModelBtn.textContent = "Load Selected Model";
            ui.loadModelBtn.disabled = false;
        }
    });

    ui.addStudentBtn.addEventListener("click", () => {
        addStudent(ui, state);
    });

    ui.studentNameInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            addStudent(ui, state);
        }
    });

    ui.nextSpeakerBtn.addEventListener("click", () => {
        rotateActiveStudent(ui, state);
    });

    ui.cbseGradeFilter.addEventListener("change", () => renderTopicList(ui, state));
    ui.subjectFilter.addEventListener("change", () => renderTopicList(ui, state));
    ui.topicSearchInput.addEventListener("input", () => renderTopicList(ui, state));

    ui.practiceMicBtn.addEventListener("click", () => {
        if (!state.recognition) {
            setSpeechSupportNote(ui, state);
            return;
        }

        if (state.isRecognizing) {
            state.recognition.stop();
            return;
        }

        state.recognition.start();
    });

    ui.stopSpeechBtn.addEventListener("click", () => {
        window.speechSynthesis.cancel();
    });

    ui.sendPracticeBtn.addEventListener("click", async () => {
        await submitPracticeTurn(ui, state);
    });

    ui.practiceInput.addEventListener("keydown", async (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
            event.preventDefault();
            await submitPracticeTurn(ui, state);
        }
    });
}

function attachLegacyToggle(button) {
    if (!button) {
        return;
    }

    button.addEventListener("click", () => {
        document.body.classList.toggle("show-legacy");
        const showingLegacy = document.body.classList.contains("show-legacy");
        button.textContent = showingLegacy ? "Hide Phonetics Reader" : "Show Phonetics Reader";
    });
}

function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("./sw.js").catch((error) => {
                console.error("Service worker registration failed:", error);
            });
        });
    }
}

function setupPwaPrompt(ui, state) {
    if (!ui.pwaPrompt || !ui.pwaActionBtn) {
        return;
    }

    if (!isWindowsChrome() || isStandaloneMode()) {
        ui.pwaPrompt.hidden = true;
        return;
    }

    window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        state.deferredInstallPrompt = event;
        updatePwaPrompt(ui, state, "install");
    });

    window.addEventListener("appinstalled", () => {
        state.hasInstalledPwa = true;
        state.deferredInstallPrompt = null;
        localStorage.setItem("practicePwaInstalled", "true");
        updatePwaPrompt(ui, state, "open");
    });

    ui.pwaActionBtn.addEventListener("click", async () => {
        if (state.deferredInstallPrompt) {
            state.deferredInstallPrompt.prompt();
            const choice = await state.deferredInstallPrompt.userChoice;
            if (choice.outcome === "accepted") {
                state.hasInstalledPwa = true;
                localStorage.setItem("practicePwaInstalled", "true");
            }
            state.deferredInstallPrompt = null;
            updatePwaPrompt(ui, state, state.hasInstalledPwa ? "open" : "hidden");
            return;
        }

        if (state.hasInstalledPwa) {
            openInstalledApp();
        }
    });

    if (state.hasInstalledPwa) {
        updatePwaPrompt(ui, state, "open");
    }
}

function updatePwaPrompt(ui, state, mode) {
    if (mode === "install") {
        ui.pwaPrompt.hidden = false;
        ui.pwaPromptTitle.textContent = "Install app";
        ui.pwaPromptText.textContent = "Install this site as a desktop app for faster access and a distraction-free practice window.";
        ui.pwaActionBtn.textContent = "Install App";
        return;
    }

    if (mode === "open") {
        ui.pwaPrompt.hidden = false;
        ui.pwaPromptTitle.textContent = "Open in app";
        ui.pwaPromptText.textContent = "This site looks installed already. Open the standalone app for a cleaner Chrome app window.";
        ui.pwaActionBtn.textContent = "Open in App";
        return;
    }

    ui.pwaPrompt.hidden = true;
}

function isWindowsChrome() {
    const userAgent = navigator.userAgent;
    const isWindows = /Windows/i.test(userAgent);
    const isChrome = /Chrome\/\d+/i.test(userAgent) && !/Edg\/|OPR\/|Brave/i.test(userAgent);
    return isWindows && isChrome;
}

function isStandaloneMode() {
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function openInstalledApp() {
    const url = new URL(window.location.href);
    url.searchParams.set("source", "browser-open-app");
    window.open(url.toString(), "_blank", "noopener");
}

function renderTopicList(ui, state) {
    const grade = ui.cbseGradeFilter.value;
    const subject = ui.subjectFilter.value;
    const search = ui.topicSearchInput.value.trim().toLowerCase();

    const topics = STEM_TOPICS.filter((topic) => {
        const matchesGrade = grade === "all" || topic.grade === grade;
        const matchesSubject = subject === "all" || topic.subject === subject;
        const haystack = `${topic.title} ${topic.summary} ${topic.hints.join(" ")} ${topic.bullets.map((bullet) => bullet.text).join(" ")}`.toLowerCase();
        const matchesSearch = !search || haystack.includes(search);
        return matchesGrade && matchesSubject && matchesSearch;
    });

    if (!topics.length) {
        ui.topicList.innerHTML = `<div class="empty-topics">No topics match the current filters.</div>`;
        return;
    }

    ui.topicList.innerHTML = topics.map((topic) => {
        const isSelected = state.selectedTopic && state.selectedTopic.id === topic.id;
        return `
            <button class="topic-card ${isSelected ? "selected" : ""}" data-topic-id="${topic.id}">
                <span class="topic-card-grade">${topic.grade}</span>
                <strong>${topic.title}</strong>
                <span>${topic.subject}</span>
            </button>
        `;
    }).join("");

    ui.topicList.querySelectorAll("[data-topic-id]").forEach((button) => {
        button.addEventListener("click", () => {
            const topic = STEM_TOPICS.find((entry) => entry.id === button.dataset.topicId);
            selectTopic(ui, state, topic);
            renderTopicList(ui, state);
        });
    });
}

function selectTopic(ui, state, topic) {
    state.selectedTopic = topic;
    state.completedBullets = new Set();
    state.practiceTurns = 0;
    state.messages = [
        {
            role: "system",
            content: buildSystemPrompt(topic)
        }
    ];

    ui.chatMessages.innerHTML = "";
    ui.turnCount.textContent = "0";
    ui.grammarScore.textContent = "0%";
    resetCollaborationScores(ui, state);
    ui.selectedTopicTitle.textContent = topic.title;
    ui.selectedTopicSummary.textContent = topic.summary;
    ui.selectedTopicMeta.innerHTML = `
        <span class="topic-pill">${topic.grade}</span>
        <span class="topic-pill">${topic.subject}</span>
    `;
    ui.topicHintsList.innerHTML = topic.hints.map((hint) => `<li>${hint}</li>`).join("");
    ui.feedbackSummary.textContent = "Start speaking or typing about this topic. Feedback will update after each turn.";
    ui.feedbackDiff.textContent = "The tutor-corrected version of your sentence will appear here with inline color highlights.";
    renderBulletProgress(ui, state);
    updateCoverageScore(ui, state);
    updateTutorState(ui, state, `Topic selected: ${topic.title}`);

    appendMessage(
        ui.chatMessages,
        "assistant",
        `Topic selected: ${topic.title}. ${state.students.length > 1 ? "Take turns as a group, build on one another's ideas, and explain it in simple English." : "Start by explaining it in 2 to 4 sentences in simple English."}`
    );
}

function renderBulletProgress(ui, state) {
    if (!state.selectedTopic) {
        ui.topicBulletList.innerHTML = "";
        return;
    }

    ui.topicBulletList.innerHTML = state.selectedTopic.bullets.map((bullet, index) => {
        const completed = state.completedBullets.has(index);
        return `
            <li class="bullet-progress-item ${completed ? "completed" : "remaining"}">
                <span class="bullet-dot"></span>
                <span>${bullet.text}</span>
            </li>
        `;
    }).join("");
}

function setSpeechSupportNote(ui, state) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        ui.speechSupportNote.textContent = "Speech-to-text needs Chrome, Edge, or another browser that supports the Web Speech API.";
        ui.practiceMicBtn.disabled = true;
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
        state.isRecognizing = true;
        ui.listeningBadge.textContent = "Listening...";
        ui.practiceMicBtn.textContent = "Stop Speaking";
        ui.practiceMicBtn.classList.add("recording");
    };

    recognition.onresult = (event) => {
        let finalText = "";
        let interimText = "";

        for (let index = event.resultIndex; index < event.results.length; index += 1) {
            const transcript = event.results[index][0].transcript;
            if (event.results[index].isFinal) {
                finalText += transcript + " ";
            } else {
                interimText += transcript;
            }
        }

        const stableText = `${ui.practiceInput.value} ${finalText}`.trim();
        ui.practiceInput.value = stableText || interimText || ui.practiceInput.value;

        if (interimText) {
            ui.listeningBadge.textContent = `Listening: ${interimText.trim()}`;
        }
    };

    recognition.onerror = (event) => {
        ui.listeningBadge.textContent = `Mic error: ${event.error}`;
        ui.practiceMicBtn.classList.remove("recording");
        ui.practiceMicBtn.textContent = "Start Speaking";
        state.isRecognizing = false;
    };

    recognition.onend = () => {
        state.isRecognizing = false;
        ui.listeningBadge.textContent = "Mic idle";
        ui.practiceMicBtn.textContent = "Start Speaking";
        ui.practiceMicBtn.classList.remove("recording");
    };

    state.recognition = recognition;
    ui.speechSupportNote.textContent = "Speech-to-text is ready. On a shared computer, let one student speak at a time, then send the turn to the tutor.";
}

async function submitPracticeTurn(ui, state) {
    const studentText = ui.practiceInput.value.trim();
    const activeSpeaker = getActiveStudent(state);
    const studentName = activeSpeaker ? activeSpeaker.name : "Student";

    if (!studentText) {
        ui.feedbackSummary.textContent = "Say or type a response first so the tutor has something to review.";
        return;
    }

    if (!state.selectedTopic) {
        ui.feedbackSummary.textContent = "Choose a topic first so feedback can be based on the right STEM concept.";
        return;
    }

    if (!state.engineLoaded || !state.engine) {
        ui.feedbackSummary.textContent = "Load a WebLLM model first. The tutor needs a local model before chat can start.";
        return;
    }

    appendMessage(ui.chatMessages, "user", studentText, studentName);
    state.messages.push({ role: "user", content: buildUserTurnPrompt(studentName, studentText, state) });
    ui.practiceInput.value = "";
    ui.sendPracticeBtn.disabled = true;
    ui.sendPracticeBtn.textContent = "Thinking...";
    updateTutorState(ui, state, "Analyzing your answer and preparing feedback...");

    try {
        const completion = await state.engine.chat.completions.create({
            messages: state.messages,
            temperature: 0.4,
            max_tokens: 350
        });

        const rawReply = completion.choices?.[0]?.message?.content || "";
        const parsed = parseTutorPayload(rawReply, studentText);

        state.messages.push({ role: "assistant", content: parsed.rawForHistory });
        state.practiceTurns += 1;
        ui.turnCount.textContent = String(state.practiceTurns);

        markCompletedBullets(state, studentText, parsed.correctedSentence);
        renderBulletProgress(ui, state);
        updateCoverageScore(ui, state);
        updateGrammarScore(ui, studentText, parsed.correctedSentence);
        updateCollaborationScores(ui, state, parsed);
        renderDiff(ui.feedbackDiff, studentText, parsed.correctedSentence);
        appendMessage(ui.chatMessages, "assistant", parsed.tutorReply, studentName);
        speakText(parsed.tutorReply);
        updateTutorState(ui, state, "Feedback ready.");
    } catch (error) {
        console.error("Tutor response failed:", error);
        ui.feedbackSummary.textContent = "The local tutor could not answer this turn. Try again, or switch to a smaller model if memory is tight.";
        updateTutorState(ui, state, "A tutor response error occurred.");
    } finally {
        ui.sendPracticeBtn.disabled = false;
        ui.sendPracticeBtn.textContent = "Send to Tutor";
    }
}

function parseTutorPayload(rawReply, studentText) {
    const jsonMatch = rawReply.match(/\{[\s\S]*\}/);

    if (jsonMatch) {
        try {
            const parsed = JSON.parse(jsonMatch[0]);
            return {
                tutorReply: parsed.tutorReply || "Good effort. Try giving a little more detail.",
                conciseFeedback: parsed.conciseFeedback || "Your answer is understandable, but it can be made smoother and more precise.",
                correctedSentence: parsed.correctedSentence || improveFallbackSentence(studentText),
                pronunciationTip: parsed.pronunciationTip || "Slow down slightly and stress your key science words clearly.",
                collaborationFeedback: parsed.collaborationFeedback || "Build on another student's idea and invite a teammate to contribute.",
                skillScores: normalizeSkillScores(parsed.skillScores),
                rawForHistory: jsonMatch[0]
            };
        } catch (error) {
            console.warn("Tutor JSON parse fallback:", error);
        }
    }

    return {
        tutorReply: rawReply || "Good attempt. Please explain the topic again with one more supporting detail.",
        conciseFeedback: "The tutor returned plain text, so a basic correction was generated locally.",
        correctedSentence: improveFallbackSentence(studentText),
        pronunciationTip: "Pause at commas and say key terms more clearly.",
        collaborationFeedback: "Work as a team by adding one reason, one example, and one response to a peer's idea.",
        skillScores: normalizeSkillScores(null),
        rawForHistory: rawReply
    };
}

function improveFallbackSentence(text) {
    const trimmed = text.trim();
    if (!trimmed) {
        return "";
    }

    const capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    return /[.!?]$/.test(capitalized) ? capitalized : `${capitalized}.`;
}

function normalizeSkillScores(skillScores) {
    return {
        problemSolving: clampScore(skillScores?.problemSolving ?? 0),
        teamBuilding: clampScore(skillScores?.teamBuilding ?? 0),
        softSkills: clampScore(skillScores?.softSkills ?? 0),
        analyticalSkills: clampScore(skillScores?.analyticalSkills ?? 0),
        criticalThinking: clampScore(skillScores?.criticalThinking ?? 0)
    };
}

function clampScore(value) {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) {
        return 0;
    }
    return Math.max(0, Math.min(100, Math.round(numeric)));
}

function markCompletedBullets(state, studentText, correctedSentence) {
    if (!state.selectedTopic) {
        return;
    }

    const combined = `${studentText} ${correctedSentence}`.toLowerCase();

    state.selectedTopic.bullets.forEach((bullet, index) => {
        const matchedKeywords = bullet.keywords.filter((keyword) => combined.includes(keyword.toLowerCase()));
        if (matchedKeywords.length >= Math.max(1, Math.ceil(bullet.keywords.length / 2))) {
            state.completedBullets.add(index);
        }
    });
}

function updateGrammarScore(ui, original, corrected) {
    const originalWords = tokenizeWords(original).filter((token) => !/^\s+$/.test(token));
    const correctedWords = tokenizeWords(corrected).filter((token) => !/^\s+$/.test(token));
    const changedWords = countChangedWords(originalWords, correctedWords);
    const baseline = Math.max(originalWords.length, correctedWords.length, 1);
    const score = Math.max(0, Math.round((1 - changedWords / baseline) * 100));
    ui.grammarScore.textContent = `${score}%`;
}

function updateCoverageScore(ui, state) {
    if (!state.selectedTopic) {
        ui.coverageScore.textContent = "0%";
        return;
    }

    const total = state.selectedTopic.bullets.length || 1;
    const score = Math.round((state.completedBullets.size / total) * 100);
    ui.coverageScore.textContent = `${score}%`;
}

function updateCollaborationScores(ui, state, parsed) {
    state.collaborationScores = parsed.skillScores;
    ui.problemSolvingScore.textContent = `${parsed.skillScores.problemSolving}%`;
    ui.teamBuildingScore.textContent = `${parsed.skillScores.teamBuilding}%`;
    ui.softSkillsScore.textContent = `${parsed.skillScores.softSkills}%`;
    ui.analyticalSkillsScore.textContent = `${parsed.skillScores.analyticalSkills}%`;
    ui.criticalThinkingScore.textContent = `${parsed.skillScores.criticalThinking}%`;
    ui.feedbackSummary.textContent = `${parsed.conciseFeedback} Collaboration: ${parsed.collaborationFeedback} Pronunciation tip: ${parsed.pronunciationTip}`;
}

function resetCollaborationScores(ui, state) {
    state.collaborationScores = normalizeSkillScores(null);
    ui.problemSolvingScore.textContent = "0%";
    ui.teamBuildingScore.textContent = "0%";
    ui.softSkillsScore.textContent = "0%";
    ui.analyticalSkillsScore.textContent = "0%";
    ui.criticalThinkingScore.textContent = "0%";
}

function renderDiff(container, original, corrected) {
    const originalTokens = tokenizeWords(original);
    const correctedTokens = tokenizeWords(corrected);
    const matrix = buildLcsMatrix(originalTokens, correctedTokens);
    const segments = backtrackDiff(matrix, originalTokens, correctedTokens);

    container.innerHTML = `
        <strong class="feedback-diff-title">Corrected sentence</strong>
        ${segments.map(renderDiffSegment).join("")}
    `;
}

function buildLcsMatrix(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));

    for (let row = a.length - 1; row >= 0; row -= 1) {
        for (let column = b.length - 1; column >= 0; column -= 1) {
            if (a[row] === b[column]) {
                matrix[row][column] = matrix[row + 1][column + 1] + 1;
            } else {
                matrix[row][column] = Math.max(matrix[row + 1][column], matrix[row][column + 1]);
            }
        }
    }

    return matrix;
}

function backtrackDiff(matrix, a, b) {
    const segments = [];
    let row = 0;
    let column = 0;

    while (row < a.length && column < b.length) {
        if (a[row] === b[column]) {
            segments.push({ type: "same", value: a[row] });
            row += 1;
            column += 1;
        } else if (matrix[row + 1][column] >= matrix[row][column + 1]) {
            segments.push({ type: "removed", value: a[row] });
            row += 1;
        } else {
            segments.push({ type: "added", value: b[column] });
            column += 1;
        }
    }

    while (row < a.length) {
        segments.push({ type: "removed", value: a[row] });
        row += 1;
    }

    while (column < b.length) {
        segments.push({ type: "added", value: b[column] });
        column += 1;
    }

    return segments;
}

function countChangedWords(originalWords, correctedWords) {
    const matrix = buildLcsMatrix(originalWords, correctedWords);
    return Math.max(originalWords.length, correctedWords.length) - matrix[0][0];
}

function tokenizeWords(text) {
    const matches = text.match(/\s+|[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*|[^\sA-Za-z0-9]/g);
    return matches || [];
}

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function appendMessage(container, role, text, speakerName = "") {
    const item = document.createElement("div");
    item.className = `chat-message ${role}`;
    const content = role === "assistant" ? renderMarkdown(text) : `<p>${escapeHtml(text)}</p>`;
    const speakerTag = speakerName ? `<span class="chat-student">${escapeHtml(speakerName)}</span>` : "";
    item.innerHTML = `
        <span class="chat-role">${role === "assistant" ? "Tutor" : "Student"}${speakerTag}</span>
        ${content}
    `;
    container.appendChild(item);
    container.scrollTop = container.scrollHeight;
}

function renderMarkdown(text) {
    if (window.marked) {
        return window.marked.parse(text);
    }

    return `<p>${escapeHtml(text)}</p>`;
}

function renderDiffSegment(segment) {
    if (segment.type === "same") {
        return wrapToken(segment.value);
    }

    if (segment.type === "added") {
        return `<span class="diff-added">${escapeHtml(segment.value)}</span>`;
    }

    return `<span class="diff-removed">${escapeHtml(segment.value)}</span>`;
}

function wrapToken(token) {
    if (/^\s+$/.test(token)) {
        return `<span class="diff-space">${escapeHtml(token)}</span>`;
    }

    return `<span>${escapeHtml(token)}</span>`;
}

function updateTutorState(ui, state, text) {
    const prefix = state.selectedTopic ? `${state.selectedTopic.title}: ` : "";
    ui.llmProgressText.textContent = `${prefix}${text}`;
}

function speakText(text) {
    if (!("speechSynthesis" in window) || !text) {
        return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
}

function buildWelcomeMessage(topic) {
    if (!topic) {
        return "The model is ready. Choose a STEM topic and explain it in your own English sentences.";
    }

    return `The model is ready. Let's practice ${topic.title}. Explain it in simple English first, then I will ask follow-up questions that strengthen both English and teamwork.`;
}

function buildSystemPrompt(topic) {
    const topicContext = topic ? `
Current topic: ${topic.title}
Grade: ${topic.grade}
Subject: ${topic.subject}
Summary: ${topic.summary}
Checklist:
${topic.bullets.map((bullet, index) => `${index + 1}. ${bullet.text}`).join("\n")}
` : "No topic selected yet. Ask the student to pick a STEM topic first.";

    return `You are a spoken English tutor for CBSE students practicing STEM topics.
Reply in warm, concise English.
Always evaluate the student's latest answer for spoken-English clarity, grammar, and topic accuracy.
Give coaching that is encouraging and specific.
${topicContext}
You may be teaching one learner or a small group sharing one keyboard and microphone.
Coach turn-taking, respectful listening, team building, problem solving, analytical thinking, and critical thinking.

Return JSON only with exactly these keys:
{
  "tutorReply": "2-4 sentence tutor response that continues the conversation",
  "conciseFeedback": "one short paragraph with instant feedback",
  "correctedSentence": "a corrected version of the student's answer in natural English",
  "pronunciationTip": "one short pronunciation or fluency tip",
  "collaborationFeedback": "one short sentence about teamwork and discussion quality",
  "skillScores": {
    "problemSolving": 0,
    "teamBuilding": 0,
    "softSkills": 0,
    "analyticalSkills": 0,
    "criticalThinking": 0
  }
}`;
}

function addStudent(ui, state) {
    const name = ui.studentNameInput.value.trim();
    if (!name) {
        return;
    }

    state.students.push({
        id: `student-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        name
    });

    if (!state.activeStudentId) {
        state.activeStudentId = state.students[0].id;
    }

    ui.studentNameInput.value = "";
    renderStudentRoster(ui, state);
}

function renderStudentRoster(ui, state) {
    if (!state.students.length) {
        ui.studentRoster.innerHTML = `<div class="empty-topics">No students added yet. Add names for shared-device group chat, or continue in individual mode.</div>`;
        ui.activeStudentLabel.textContent = "Individual mode";
        return;
    }

    ui.studentRoster.innerHTML = state.students.map((student) => `
        <div class="student-chip ${student.id === state.activeStudentId ? "active" : ""}">
            <strong>${escapeHtml(student.name)}</strong>
            <div class="student-chip-actions">
                <button class="student-mini-btn" type="button" data-student-set="${student.id}">Set Active</button>
                <button class="student-mini-btn" type="button" data-student-remove="${student.id}">Remove</button>
            </div>
        </div>
    `).join("");

    const activeStudent = getActiveStudent(state);
    ui.activeStudentLabel.textContent = activeStudent ? activeStudent.name : "Individual mode";

    ui.studentRoster.querySelectorAll("[data-student-set]").forEach((button) => {
        button.addEventListener("click", () => {
            state.activeStudentId = button.dataset.studentSet;
            renderStudentRoster(ui, state);
        });
    });

    ui.studentRoster.querySelectorAll("[data-student-remove]").forEach((button) => {
        button.addEventListener("click", () => {
            state.students = state.students.filter((student) => student.id !== button.dataset.studentRemove);
            if (!state.students.some((student) => student.id === state.activeStudentId)) {
                state.activeStudentId = state.students[0]?.id || null;
            }
            renderStudentRoster(ui, state);
        });
    });
}

function rotateActiveStudent(ui, state) {
    if (!state.students.length) {
        return;
    }

    const currentIndex = state.students.findIndex((student) => student.id === state.activeStudentId);
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % state.students.length : 0;
    state.activeStudentId = state.students[nextIndex].id;
    renderStudentRoster(ui, state);
}

function getActiveStudent(state) {
    return state.students.find((student) => student.id === state.activeStudentId) || null;
}

function buildUserTurnPrompt(studentName, studentText, state) {
    if (state.students.length > 1) {
        const peers = state.students.filter((student) => student.name !== studentName).map((student) => student.name).join(", ") || "none";
        return `Shared-device group discussion. Current speaker: ${studentName}. Other students: ${peers}. Coach the group on teamwork and conversation quality.\nStudent response from ${studentName}: ${studentText}`;
    }

    return `Individual response from ${studentName}: ${studentText}`;
}
