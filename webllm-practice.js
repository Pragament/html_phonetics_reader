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
    // Grade 4 Science
    {
        id: "g4-sci-plants",
        grade: "Grade 4",
        subject: "Science",
        title: "Plants: Parts and Functions",
        summary: "Describe the different parts of plants and their functions like roots, stem, leaves, and flowers.",
        hints: ["Start with the main parts of a plant.", "Explain what roots do for the plant.", "Mention how leaves help plants make food."],
        bullets: [
            { text: "Name the main parts of a plant.", keywords: ["roots", "stem", "leaves", "flowers"] },
            { text: "Explain the function of roots.", keywords: ["roots", "water", "soil", "anchor"] },
            { text: "Describe what leaves do.", keywords: ["leaves", "photosynthesis", "food", "sunlight"] },
            { text: "Mention the role of flowers.", keywords: ["flowers", "seeds", "fruits", "reproduction"] }
        ]
    },
    {
        id: "g4-sci-animals",
        grade: "Grade 4",
        subject: "Science",
        title: "Animals: Habitats and Adaptations",
        summary: "Explain how animals adapt to different habitats like land, water, and air.",
        hints: ["Give examples of animals in different habitats.", "Explain how fish breathe underwater.", "Describe how birds are adapted for flying."],
        bullets: [
            { text: "Name different animal habitats.", keywords: ["land", "water", "air", "forest", "desert"] },
            { text: "Explain aquatic animal adaptations.", keywords: ["fish", "gills", "fins", "swim"] },
            { text: "Describe land animal features.", keywords: ["legs", "run", "walk", "land"] },
            { text: "Mention bird adaptations.", keywords: ["wings", "feathers", "fly", "beak"] }
        ]
    },
    {
        id: "g4-sci-food",
        grade: "Grade 4",
        subject: "Science",
        title: "Food and Nutrition",
        summary: "Discuss different types of food and why we need a balanced diet.",
        hints: ["Name the main food groups.", "Explain why proteins are important.", "Mention why we need vitamins and minerals."],
        bullets: [
            { text: "Name the food groups.", keywords: ["carbohydrates", "proteins", "fats", "vitamins", "minerals"] },
            { text: "Explain energy-giving foods.", keywords: ["carbohydrates", "energy", "rice", "wheat"] },
            { text: "Describe body-building foods.", keywords: ["proteins", "muscles", "milk", "eggs", "dal"] },
            { text: "Mention protective foods.", keywords: ["vitamins", "minerals", "fruits", "vegetables", "healthy"] }
        ]
    },
    {
        id: "g4-sci-water",
        grade: "Grade 4",
        subject: "Science",
        title: "Water: Importance and Conservation",
        summary: "Explain why water is essential for life and how we can conserve it.",
        hints: ["List uses of water in daily life.", "Explain the water cycle briefly.", "Give tips for saving water."],
        bullets: [
            { text: "State importance of water.", keywords: ["water", "life", "drink", "essential"] },
            { text: "List uses of water.", keywords: ["drinking", "cooking", "cleaning", "bathing", "plants"] },
            { text: "Explain water cycle basics.", keywords: ["evaporation", "condensation", "rain", "clouds"] },
            { text: "Mention conservation methods.", keywords: ["save", "waste", "tap", "reuse", "harvest"] }
        ]
    },
    // Grade 4 Math
    {
        id: "g4-math-numbers",
        grade: "Grade 4",
        subject: "Mathematics",
        title: "Large Numbers and Place Value",
        summary: "Understand large numbers up to lakhs and their place values.",
        hints: ["Explain place value positions.", "Give examples of numbers in lakhs.", "Show how to compare large numbers."],
        bullets: [
            { text: "Explain place value system.", keywords: ["ones", "tens", "hundreds", "thousands", "lakhs"] },
            { text: "Read and write large numbers.", keywords: ["digits", "value", "place", "number"] },
            { text: "Compare numbers.", keywords: ["greater", "smaller", "equal", "compare"] },
            { text: "Form largest and smallest numbers.", keywords: ["largest", "smallest", "digits", "arrange"] }
        ]
    },
    {
        id: "g4-math-operations",
        grade: "Grade 4",
        subject: "Mathematics",
        title: "Addition and Subtraction",
        summary: "Practice addition and subtraction of large numbers with carrying and borrowing.",
        hints: ["Explain the steps for addition.", "Show how borrowing works in subtraction.", "Give real-life examples like money."],
        bullets: [
            { text: "Add large numbers.", keywords: ["add", "sum", "carry", "total"] },
            { text: "Subtract with borrowing.", keywords: ["subtract", "borrow", "difference", "minus"] },
            { text: "Solve word problems.", keywords: ["problem", "story", "find", "answer"] },
            { text: "Check answers.", keywords: ["verify", "check", "correct", "answer"] }
        ]
    },
    // Grade 5 Science
    {
        id: "g5-sci-plants",
        grade: "Grade 5",
        subject: "Science",
        title: "Plant Life: Growth and Reproduction",
        summary: "Explain how plants grow and reproduce through seeds and other methods.",
        hints: ["Describe seed germination process.", "Explain different ways plants reproduce.", "Mention what plants need to grow."],
        bullets: [
            { text: "Explain seed germination.", keywords: ["seed", "germinate", "sprout", "roots", "shoot"] },
            { text: "List factors for plant growth.", keywords: ["water", "sunlight", "air", "soil", "nutrients"] },
            { text: "Describe reproduction methods.", keywords: ["seeds", "spores", "cutting", "runner", "bulb"] },
            { text: "Explain seed dispersal.", keywords: ["dispersal", "wind", "water", "animals", "explosion"] }
        ]
    },
    {
        id: "g5-sci-human-body",
        grade: "Grade 5",
        subject: "Science",
        title: "Human Body: Bones and Muscles",
        summary: "Describe the skeletal and muscular systems and their functions.",
        hints: ["Count the bones in human body.", "Explain how muscles help us move.", "Mention the importance of joints."],
        bullets: [
            { text: "Describe the skeletal system.", keywords: ["bones", "skeleton", "skull", "ribcage", "206"] },
            { text: "Explain muscle function.", keywords: ["muscles", "move", "contract", "relax", "movement"] },
            { text: "Describe types of joints.", keywords: ["joints", "hinge", "ball", "socket", "pivot"] },
            { text: "Explain bone and muscle coordination.", keywords: ["coordinate", "work", "together", "movement"] }
        ]
    },
    {
        id: "g5-sci-health",
        grade: "Grade 5",
        subject: "Science",
        title: "Health and Diseases",
        summary: "Discuss how to stay healthy and prevent common diseases.",
        hints: ["List ways to maintain good health.", "Explain how diseases spread.", "Mention importance of hygiene."],
        bullets: [
            { text: "List healthy habits.", keywords: ["exercise", "sleep", "balanced", "diet", "clean"] },
            { text: "Explain disease transmission.", keywords: ["spread", "germs", "virus", "bacteria", "contagious"] },
            { text: "Describe hygiene practices.", keywords: ["handwash", "clean", "sanitize", "hygiene"] },
            { text: "Mention vaccination importance.", keywords: ["vaccine", "immunization", "prevent", "disease"] }
        ]
    },
    // Grade 5 Math
    {
        id: "g5-math-factors",
        grade: "Grade 5",
        subject: "Mathematics",
        title: "Factors and Multiples",
        summary: "Understand factors, multiples, prime and composite numbers.",
        hints: ["Define what a factor is.", "Explain difference between prime and composite.", "Show how to find LCM and HCF."],
        bullets: [
            { text: "Define factors and multiples.", keywords: ["factor", "multiple", "divide", "product"] },
            { text: "Identify prime numbers.", keywords: ["prime", "two", "factors", "one", "itself"] },
            { text: "Identify composite numbers.", keywords: ["composite", "more", "factors", "divisible"] },
            { text: "Find LCM and HCF.", keywords: ["LCM", "HCF", "common", "least", "greatest"] }
        ]
    },
    {
        id: "g5-math-fractions",
        grade: "Grade 5",
        subject: "Mathematics",
        title: "Fractions: Types and Operations",
        summary: "Learn about proper, improper, and mixed fractions with basic operations.",
        hints: ["Define proper and improper fractions.", "Explain how to add fractions with same denominator.", "Show how to convert mixed to improper."],
        bullets: [
            { text: "Classify fractions.", keywords: ["proper", "improper", "mixed", "numerator", "denominator"] },
            { text: "Convert fraction types.", keywords: ["convert", "mixed", "improper", "whole", "part"] },
            { text: "Add and subtract fractions.", keywords: ["add", "subtract", "denominator", "same", "numerator"] },
            { text: "Solve fraction word problems.", keywords: ["fraction", "part", "whole", "problem"] }
        ]
    },
    {
        id: "g5-math-decimals",
        grade: "Grade 5",
        subject: "Mathematics",
        title: "Introduction to Decimals",
        summary: "Understand decimal numbers and their relationship with fractions.",
        hints: ["Explain decimal place values.", "Show how to convert fractions to decimals.", "Practice decimal addition."],
        bullets: [
            { text: "Explain decimal notation.", keywords: ["decimal", "point", "tenths", "hundredths", "place"] },
            { text: "Convert fractions to decimals.", keywords: ["convert", "fraction", "decimal", "divide", "tenth"] },
            { text: "Add and subtract decimals.", keywords: ["add", "subtract", "decimal", "align", "point"] },
            { text: "Compare decimal numbers.", keywords: ["compare", "greater", "smaller", "decimal", "value"] }
        ]
    },
    // Grade 6 Science
    {
        id: "g6-sci-food",
        grade: "Grade 6",
        subject: "Science",
        title: "Food: Where Does It Come From",
        summary: "Explore sources of food and different food varieties.",
        hints: ["Classify food sources as plant and animal.", "Explain food chain basics.", "Mention importance of agriculture."],
        bullets: [
            { text: "Identify plant food sources.", keywords: ["plants", "fruits", "vegetables", "grains", "pulses"] },
            { text: "Identify animal food sources.", keywords: ["animals", "milk", "meat", "eggs", "honey"] },
            { text: "Explain food variety.", keywords: ["variety", "ingredients", "cuisine", "regional"] },
            { text: "Mention food production.", keywords: ["farming", "agriculture", "cultivation", "harvest"] }
        ]
    },
    {
        id: "g6-sci-living",
        grade: "Grade 6",
        subject: "Science",
        title: "Living Organisms and Habitat",
        summary: "Explore the characteristics of living things and their habitats.",
        hints: ["List characteristics of living things.", "Explain what a habitat provides.", "Give examples of terrestrial and aquatic habitats."],
        bullets: [
            { text: "State characteristics of life.", keywords: ["growth", "reproduce", "move", "respire", "respond"] },
            { text: "Explain habitat concept.", keywords: ["habitat", "home", "environment", "shelter", "food"] },
            { text: "Describe terrestrial habitats.", keywords: ["forest", "grassland", "desert", "mountain", "polar"] },
            { text: "Describe aquatic habitats.", keywords: ["pond", "lake", "river", "ocean", "water"] }
        ]
    },
    {
        id: "g6-sci-motion",
        grade: "Grade 6",
        subject: "Science",
        title: "Motion and Measurement",
        summary: "Learn about different types of motion and how to measure distance.",
        hints: ["Define motion and give examples.", "Explain how to measure length accurately.", "Describe circular and periodic motion."],
        bullets: [
            { text: "Define motion types.", keywords: ["linear", "circular", "periodic", "random", "motion"] },
            { text: "Explain measurement units.", keywords: ["meter", "centimeter", "kilometer", "millimeter", "unit"] },
            { text: "Use measuring instruments.", keywords: ["scale", "ruler", "tape", "measure", "length"] },
            { text: "Describe motion examples.", keywords: ["walking", "rotating", "swinging", "vibrating"] }
        ]
    },
    {
        id: "g6-sci-light",
        grade: "Grade 6",
        subject: "Science",
        title: "Light: Shadows and Reflections",
        summary: "Understand how light travels and creates shadows and reflections.",
        hints: ["Explain that light travels in straight lines.", "Describe how shadows form.", "Explain mirror reflections."],
        bullets: [
            { text: "Describe light properties.", keywords: ["light", "straight", "line", "travel", "speed"] },
            { text: "Explain shadow formation.", keywords: ["shadow", "opaque", "block", "light", "dark"] },
            { text: "Classify objects by transparency.", keywords: ["transparent", "translucent", "opaque", "light", "pass"] },
            { text: "Describe reflection.", keywords: ["reflection", "mirror", "image", "bounce", "light"] }
        ]
    },
    {
        id: "g6-sci-water",
        grade: "Grade 6",
        subject: "Science",
        title: "Water: Sources and Conservation",
        summary: "Explore sources of water and the importance of water conservation.",
        hints: ["List sources of fresh water.", "Explain the water cycle steps.", "Give practical water-saving tips."],
        bullets: [
            { text: "Identify water sources.", keywords: ["river", "lake", "groundwater", "rain", "well"] },
            { text: "Explain water cycle.", keywords: ["evaporation", "condensation", "precipitation", "collection", "cycle"] },
            { text: "Describe water scarcity.", keywords: ["scarcity", "shortage", "drought", "waste", "save"] },
            { text: "List conservation methods.", keywords: ["rainwater", "harvesting", "recycle", "reuse", "conserve"] }
        ]
    },
    // Grade 6 Math
    {
        id: "g6-math-knowing",
        grade: "Grade 6",
        subject: "Mathematics",
        title: "Knowing Our Numbers",
        summary: "Work with large numbers, estimation, and comparison.",
        hints: ["Read and write numbers beyond lakhs.", "Explain rounding and estimation.", "Use commas in Indian number system."],
        bullets: [
            { text: "Read large numbers.", keywords: ["lakh", "crore", "ten", "hundred", "thousand"] },
            { text: "Use Indian number system.", keywords: ["Indian", "system", "comma", "place", "value"] },
            { text: "Estimate numbers.", keywords: ["estimate", "round", "approximate", "nearest", "roughly"] },
            { text: "Compare and order numbers.", keywords: ["compare", "ascending", "descending", "greater", "lesser"] }
        ]
    },
    {
        id: "g6-math-integers",
        grade: "Grade 6",
        subject: "Mathematics",
        title: "Introduction to Integers",
        summary: "Learn about positive and negative numbers on a number line.",
        hints: ["Explain what negative numbers represent.", "Show addition and subtraction on number line.", "Give real-life examples of integers."],
        bullets: [
            { text: "Define integers.", keywords: ["integer", "positive", "negative", "zero", "whole"] },
            { text: "Use number line.", keywords: ["number", "line", "left", "right", "position"] },
            { text: "Compare integers.", keywords: ["compare", "greater", "smaller", "negative", "positive"] },
            { text: "Add and subtract integers.", keywords: ["add", "subtract", "integer", "sum", "difference"] }
        ]
    },
    {
        id: "g6-math-fractions",
        grade: "Grade 6",
        subject: "Mathematics",
        title: "Fractions and Operations",
        summary: "Master fraction concepts and operations with unlike denominators.",
        hints: ["Explain equivalent fractions.", "Show how to find common denominators.", "Multiply and divide fractions."],
        bullets: [
            { text: "Explain equivalent fractions.", keywords: ["equivalent", "same", "value", "multiply", "divide"] },
            { text: "Simplify fractions.", keywords: ["simplify", "reduce", "lowest", "terms", "common"] },
            { text: "Add unlike fractions.", keywords: ["unlike", "different", "denominator", "LCM", "common"] },
            { text: "Multiply fractions.", keywords: ["multiply", "numerator", "denominator", "product", "fraction"] }
        ]
    },
    {
        id: "g6-math-algebra",
        grade: "Grade 6",
        subject: "Mathematics",
        title: "Introduction to Algebra",
        summary: "Learn basic algebraic concepts using variables and expressions.",
        hints: ["Explain what a variable is.", "Write simple algebraic expressions.", "Solve basic equations by inspection."],
        bullets: [
            { text: "Define variables.", keywords: ["variable", "letter", "unknown", "value", "change"] },
            { text: "Form expressions.", keywords: ["expression", "term", "variable", "constant", "algebraic"] },
            { text: "Evaluate expressions.", keywords: ["evaluate", "substitute", "value", "find", "result"] },
            { text: "Solve simple equations.", keywords: ["equation", "solve", "balance", "both", "sides"] }
        ]
    },
    {
        id: "g6-math-symmetry",
        grade: "Grade 6",
        subject: "Mathematics",
        title: "Symmetry",
        summary: "Explore lines of symmetry in different shapes and figures.",
        hints: ["Define line symmetry.", "Find symmetry in letters and shapes.", "Explain rotational symmetry concept."],
        bullets: [
            { text: "Define symmetry.", keywords: ["symmetry", "line", "mirror", "equal", "halves"] },
            { text: "Identify symmetrical shapes.", keywords: ["square", "rectangle", "circle", "symmetrical", "line"] },
            { text: "Find lines of symmetry.", keywords: ["count", "lines", "axis", "symmetry", "fold"] },
            { text: "Explain reflection symmetry.", keywords: ["reflection", "mirror", "image", "flip", "symmetry"] }
        ]
    },
    // Grade 7 Science
    {
        id: "g7-sci-nutrition",
        grade: "Grade 7",
        subject: "Science",
        title: "Nutrition in Plants",
        summary: "Explain how plants obtain their nutrition through photosynthesis and other modes.",
        hints: ["Describe photosynthesis process.", "Explain how fungi and parasites get food.", "Mention nitrogen fixation."],
        bullets: [
            { text: "Explain photosynthesis.", keywords: ["photosynthesis", "chlorophyll", "sunlight", "glucose", "oxygen"] },
            { text: "Describe plant nutrition modes.", keywords: ["autotrophic", "heterotrophic", "saprotrophic", "parasitic", "symbiotic"] },
            { text: "Explain nitrogen cycle.", keywords: ["nitrogen", "fixation", "bacteria", "legumes", "soil"] },
            { text: "Mention plant nutrients.", keywords: ["nutrient", "mineral", "nitrogen", "phosphorus", "potassium"] }
        ]
    },
    {
        id: "g7-sci-nutrition-animals",
        grade: "Grade 7",
        subject: "Science",
        title: "Nutrition in Animals",
        summary: "Learn about different modes of nutrition in animals and the human digestive system.",
        hints: ["Explain digestion in simple animals like amoeba.", "Describe the human digestive organs.", "Mention how grass-eating animals digest."],
        bullets: [
            { text: "Describe amoeba nutrition.", keywords: ["amoeba", "pseudopodia", "ingest", "digest", "vacuole"] },
            { text: "Explain human digestion.", keywords: ["mouth", "stomach", "intestine", "digest", "absorb"] },
            { text: "Describe ruminant digestion.", keywords: ["ruminant", "cud", "chew", "cellulose", "stomach"] },
            { text: "Explain nutrition modes.", keywords: ["herbivore", "carnivore", "omnivore", "scavenger", "parasite"] }
        ]
    },
    {
        id: "g7-sci-heat",
        grade: "Grade 7",
        subject: "Science",
        title: "Heat and Temperature",
        summary: "Learn about heat transfer, temperature measurement, and heat effects.",
        hints: ["Define heat and temperature difference.", "Explain conduction, convection, radiation.", "Describe how thermometers work."],
        bullets: [
            { text: "Distinguish heat and temperature.", keywords: ["heat", "temperature", "energy", "degree", "measure"] },
            { text: "Explain heat transfer.", keywords: ["conduction", "convection", "radiation", "transfer", "modes"] },
            { text: "Use thermometers.", keywords: ["thermometer", "Celsius", "clinical", "laboratory", "measure"] },
            { text: "Describe heat effects.", keywords: ["expansion", "contraction", "change", "state", "temperature"] }
        ]
    },
    {
        id: "g7-sci-acids",
        grade: "Grade 7",
        subject: "Science",
        title: "Acids, Bases and Salts",
        summary: "Understand properties of acids, bases, indicators, and neutralization.",
        hints: ["Describe properties of acids and bases.", "Explain natural and synthetic indicators.", "Describe neutralization reaction."],
        bullets: [
            { text: "State acid properties.", keywords: ["acid", "sour", "hydrogen", "corrosive", "taste"] },
            { text: "State base properties.", keywords: ["base", "bitter", "soapy", "hydroxide", "slippery"] },
            { text: "Use indicators.", keywords: ["litmus", "phenolphthalein", "turmeric", "indicator", "color"] },
            { text: "Explain neutralization.", keywords: ["neutralization", "salt", "water", "acid", "base"] }
        ]
    },
    {
        id: "g7-sci-weather",
        grade: "Grade 7",
        subject: "Science",
        title: "Weather, Climate and Adaptations",
        summary: "Learn about weather elements, climate zones, and animal adaptations.",
        hints: ["Define weather and climate difference.", "Describe polar, tropical, and desert climates.", "Explain how animals adapt to extreme climates."],
        bullets: [
            { text: "Define weather elements.", keywords: ["temperature", "rainfall", "humidity", "wind", "weather"] },
            { text: "Distinguish climate.", keywords: ["climate", "average", "year", "pattern", "region"] },
            { text: "Describe climate zones.", keywords: ["polar", "tropical", "desert", "temperate", "zone"] },
            { text: "Explain adaptations.", keywords: ["adaptation", "survive", "extreme", "cold", "hot"] }
        ]
    },
    {
        id: "g7-sci-soil",
        grade: "Grade 7",
        subject: "Science",
        title: "Soil: Types and Conservation",
        summary: "Learn about soil formation, types, and the importance of soil conservation.",
        hints: ["Describe soil formation process.", "Classify soil types by particle size.", "Explain methods of soil conservation."],
        bullets: [
            { text: "Explain soil formation.", keywords: ["weathering", "rock", "organic", "horizon", "profile"] },
            { text: "Classify soil types.", keywords: ["clay", "silt", "sand", "loam", "particles"] },
            { text: "Describe soil properties.", keywords: ["percolation", "water", "retention", "texture", "color"] },
            { text: "Explain conservation.", keywords: ["conservation", "crop", "rotation", "mulching", "terracing"] }
        ]
    },
    {
        id: "g7-sci-respiration",
        grade: "Grade 7",
        subject: "Science",
        title: "Respiration in Organisms",
        summary: "Understand the process of respiration and different respiratory organs.",
        hints: ["Define cellular respiration.", "Compare aerobic and anaerobic respiration.", "Describe breathing mechanisms in animals."],
        bullets: [
            { text: "Explain respiration.", keywords: ["respiration", "breathing", "oxygen", "carbon", "energy"] },
            { text: "Compare respiration types.", keywords: ["aerobic", "anaerobic", "oxygen", "glucose", "ATP"] },
            { text: "Describe human breathing.", keywords: ["lungs", "diaphragm", "inhale", "exhale", "ribcage"] },
            { text: "Explain other adaptations.", keywords: ["gills", "skin", "trachea", "insects", "plants"] }
        ]
    },
    {
        id: "g7-sci-transport",
        grade: "Grade 7",
        subject: "Science",
        title: "Transportation in Animals and Plants",
        summary: "Learn about circulatory system in animals and vascular tissues in plants.",
        hints: ["Describe components of blood.", "Explain the human heart and blood vessels.", "Describe xylem and phloem in plants."],
        bullets: [
            { text: "Describe blood components.", keywords: ["plasma", "RBC", "WBC", "platelets", "blood"] },
            { text: "Explain heart function.", keywords: ["heart", "pump", "atrium", "ventricle", "chamber"] },
            { text: "Describe blood vessels.", keywords: ["artery", "vein", "capillary", "vessel", "flow"] },
            { text: "Explain plant transport.", keywords: ["xylem", "phloem", "transport", "water", "food"] }
        ]
    },
    {
        id: "g7-sci-reproduction",
        grade: "Grade 7",
        subject: "Science",
        title: "Reproduction in Plants",
        summary: "Understand different modes of reproduction in plants.",
        hints: ["Describe sexual reproduction in flowering plants.", "Explain asexual reproduction methods.", "Mention vegetative propagation."],
        bullets: [
            { text: "Explain sexual reproduction.", keywords: ["flower", "pollen", "ovary", "seed", "fertilization"] },
            { text: "Describe pollination.", keywords: ["pollination", "self", "cross", "agent", "insect"] },
            { text: "Explain asexual methods.", keywords: ["spore", "fragmentation", "regeneration", "budding", "binary"] },
            { text: "Describe vegetative propagation.", keywords: ["cutting", "grafting", "layering", "root", "stem"] }
        ]
    },
    // Grade 7 Math
    {
        id: "g7-math-integers",
        grade: "Grade 7",
        subject: "Mathematics",
        title: "Integers: Operations and Properties",
        summary: "Master integer operations including multiplication and division.",
        hints: ["Explain multiplication rules for integers.", "Show division of negative numbers.", "Apply integers in real-life situations."],
        bullets: [
            { text: "Multiply integers.", keywords: ["multiply", "positive", "negative", "product", "sign"] },
            { text: "Divide integers.", keywords: ["divide", "quotient", "divisor", "dividend", "sign"] },
            { text: "Use properties.", keywords: ["commutative", "associative", "distributive", "closure", "identity"] },
            { text: "Solve integer problems.", keywords: ["problem", "real", "life", "elevator", "temperature"] }
        ]
    },
    {
        id: "g7-math-fractions",
        grade: "Grade 7",
        subject: "Mathematics",
        title: "Fractions and Decimals: Advanced",
        summary: "Solve complex problems involving fractions and decimals.",
        hints: ["Multiply and divide fractions.", "Convert repeating decimals to fractions.", "Solve multi-step word problems."],
        bullets: [
            { text: "Multiply mixed fractions.", keywords: ["mixed", "fraction", "multiply", "convert", "improper"] },
            { text: "Divide fractions.", keywords: ["reciprocal", "divide", "multiply", "inverse", "fraction"] },
            { text: "Work with decimals.", keywords: ["decimal", "multiply", "divide", "by", "powers"] },
            { text: "Solve application problems.", keywords: ["word", "problem", "fraction", "decimal", "real"] }
        ]
    },
    {
        id: "g7-math-datahandling",
        grade: "Grade 7",
        subject: "Mathematics",
        title: "Data Handling",
        summary: "Learn about data collection, representation, and analysis.",
        hints: ["Create and interpret bar graphs.", "Calculate mean, median, and mode.", "Understand probability basics."],
        bullets: [
            { text: "Collect and organize data.", keywords: ["data", "collect", "organize", "tally", "frequency"] },
            { text: "Create bar graphs.", keywords: ["bar", "graph", "scale", "represent", "visual"] },
            { text: "Calculate averages.", keywords: ["mean", "median", "mode", "average", "central"] },
            { text: "Understand probability.", keywords: ["probability", "chance", "likely", "unlikely", "certain"] }
        ]
    },
    {
        id: "g7-math-algebra",
        grade: "Grade 7",
        subject: "Mathematics",
        title: "Simple Equations",
        summary: "Solve simple linear equations and apply them to practical problems.",
        hints: ["Set up equations from word problems.", "Solve equations systematically.", "Check solutions by substitution."],
        bullets: [
            { text: "Form equations.", keywords: ["equation", "variable", "form", "word", "problem"] },
            { text: "Solve linear equations.", keywords: ["solve", "transpose", "balance", "both", "sides"] },
            { text: "Check solutions.", keywords: ["check", "substitute", "verify", "LHS", "RHS"] },
            { text: "Apply to real problems.", keywords: ["application", "age", "money", "number", "problem"] }
        ]
    },
    {
        id: "g7-math-triangles",
        grade: "Grade 7",
        subject: "Mathematics",
        title: "Triangles and Their Properties",
        summary: "Study different types of triangles and their angle and side properties.",
        hints: ["Classify triangles by sides and angles.", "Prove angle sum property.", "Apply Pythagoras theorem."],
        bullets: [
            { text: "Classify triangles.", keywords: ["scalene", "isosceles", "equilateral", "acute", "obtuse"] },
            { text: "Use angle sum property.", keywords: ["angle", "sum", "180", "triangle", "degrees"] },
            { text: "Apply exterior angle theorem.", keywords: ["exterior", "angle", "remote", "interior", "opposite"] },
            { text: "Use Pythagoras theorem.", keywords: ["Pythagoras", "hypotenuse", "right", "triangle", "square"] }
        ]
    },
    {
        id: "g7-math-congruence",
        grade: "Grade 7",
        subject: "Mathematics",
        title: "Congruence of Triangles",
        summary: "Understand congruence criteria for triangles and their applications.",
        hints: ["Define congruence.", "Explain SSS, SAS, ASA, RHS criteria.", "Apply congruence to prove properties."],
        bullets: [
            { text: "Define congruence.", keywords: ["congruent", "same", "size", "shape", "equal"] },
            { text: "Apply SSS criterion.", keywords: ["SSS", "side", "three", "equal", "congruent"] },
            { text: "Apply SAS criterion.", keywords: ["SAS", "side", "angle", "included", "congruent"] },
            { text: "Apply ASA and RHS.", keywords: ["ASA", "RHS", "hypotenuse", "right", "angle"] }
        ]
    },
    {
        id: "g7-math-rational",
        grade: "Grade 7",
        subject: "Mathematics",
        title: "Rational Numbers",
        summary: "Understand rational numbers and operations on them.",
        hints: ["Define rational numbers.", "Find rational numbers between two numbers.", "Perform operations on rational numbers."],
        bullets: [
            { text: "Define rational numbers.", keywords: ["rational", "number", "fraction", "p/q", "integer"] },
            { text: "Represent on number line.", keywords: ["number", "line", "represent", "plot", "point"] },
            { text: "Compare rational numbers.", keywords: ["compare", "greater", "lesser", "equal", "rational"] },
            { text: "Perform operations.", keywords: ["add", "subtract", "multiply", "divide", "rational"] }
        ]
    },
    // Grade 8 Science
    {
        id: "g8-sci-crops",
        grade: "Grade 8",
        subject: "Science",
        title: "Crop Production and Management",
        summary: "Learn about agricultural practices and crop management techniques.",
        hints: ["Define Kharif and Rabi crops.", "Explain basic agricultural practices.", "Describe irrigation methods."],
        bullets: [
            { text: "Classify crops.", keywords: ["Kharif", "Rabi", "season", "monsoon", "winter"] },
            { text: "Describe soil preparation.", keywords: ["tilling", "ploughing", "leveling", "soil", "prepare"] },
            { text: "Explain sowing methods.", keywords: ["sowing", "seed", "drill", "transplantation", "broadcasting"] },
            { text: "Describe crop protection.", keywords: ["irrigation", "weeding", "pesticide", "fertilizer", "harvest"] }
        ]
    },
    {
        id: "g8-sci-microorganisms",
        grade: "Grade 8",
        subject: "Science",
        title: "Microorganisms: Friends and Foes",
        summary: "Understand the role of microorganisms in our lives.",
        hints: ["Classify different types of microorganisms.", "Explain useful roles of microbes.", "Describe harmful effects and prevention."],
        bullets: [
            { text: "Classify microorganisms.", keywords: ["bacteria", "fungi", "virus", "protozoa", "algae"] },
            { text: "Explain beneficial uses.", keywords: ["fermentation", "nitrogen", "fixation", "vaccine", "antibiotic"] },
            { text: "Describe harmful effects.", keywords: ["disease", "decay", "spoilage", "pathogen", "infection"] },
            { text: "Explain food preservation.", keywords: ["preserve", "pickle", "refrigeration", "pasteurization", "drying"] }
        ]
    },
    {
        id: "g8-sci-combustion",
        grade: "Grade 8",
        subject: "Science",
        title: "Combustion and Flame",
        summary: "Learn about combustion, types of flames, and fuel efficiency.",
        hints: ["Define combustion and its requirements.", "Compare luminous and non-luminous flames.", "Calculate calorific value."],
        bullets: [
            { text: "Explain combustion.", keywords: ["combustion", "burn", "fuel", "oxygen", "heat"] },
            { text: "Describe flame zones.", keywords: ["flame", "zone", "dark", "luminous", "non-luminous"] },
            { text: "Explain fuel types.", keywords: ["fuel", "solid", "liquid", "gas", "calorific"] },
            { text: "Discuss fuel efficiency.", keywords: ["efficient", "pollution", "complete", "incomplete", "combustion"] }
        ]
    },
    {
        id: "g8-sci-conservation",
        grade: "Grade 8",
        subject: "Science",
        title: "Conservation of Plants and Animals",
        summary: "Understand biodiversity, ecosystems, and conservation efforts.",
        hints: ["Define biodiversity and its importance.", "Explain deforestation effects.", "Describe wildlife conservation methods."],
        bullets: [
            { text: "Explain biodiversity.", keywords: ["biodiversity", "variety", "species", "ecosystem", "genetic"] },
            { text: "Describe deforestation.", keywords: ["deforestation", "forest", "cut", "habitat", "loss"] },
            { text: "Explain conservation.", keywords: ["conservation", "reserve", "sanctuary", "biosphere", "protect"] },
            { text: "Mention endangered species.", keywords: ["endangered", "extinct", "threatened", "rare", "species"] }
        ]
    },
    {
        id: "g8-sci-cell",
        grade: "Grade 8",
        subject: "Science",
        title: "Cell: Structure and Function",
        summary: "Learn about cell structure, types, and functions of cell organelles.",
        hints: ["Compare plant and animal cells.", "Describe functions of cell organelles.", "Explain cell division basics."],
        bullets: [
            { text: "Describe cell structure.", keywords: ["cell", "membrane", "nucleus", "cytoplasm", "organelle"] },
            { text: "Compare cell types.", keywords: ["plant", "animal", "cell", "wall", "chloroplast", "vacuole"] },
            { text: "Explain organelle functions.", keywords: ["mitochondria", "ribosome", "Golgi", "ER", "function"] },
            { text: "Describe cell division.", keywords: ["mitosis", "meiosis", "division", "growth", "repair"] }
        ]
    },
    {
        id: "g8-sci-reproduction",
        grade: "Grade 8",
        subject: "Science",
        title: "Reproduction in Animals",
        summary: "Understand sexual and asexual reproduction in animals and human reproductive system.",
        hints: ["Compare sexual and asexual reproduction.", "Describe human male and female reproductive organs.", "Explain fertilization process."],
        bullets: [
            { text: "Compare reproduction types.", keywords: ["sexual", "asexual", "gamete", "fertilization", "offspring"] },
            { text: "Describe male system.", keywords: ["testes", "sperm", "male", "reproductive", "organ"] },
            { text: "Describe female system.", keywords: ["ovary", "egg", "uterus", "female", "reproductive"] },
            { text: "Explain development.", keywords: ["fertilization", "zygote", "embryo", "fetus", "pregnancy"] }
        ]
    },
    {
        id: "g8-sci-force",
        grade: "Grade 8",
        subject: "Science",
        title: "Force and Pressure",
        summary: "Learn about force, its effects, and the concept of pressure.",
        hints: ["Define force and its effects.", "Explain contact and non-contact forces.", "Calculate pressure and understand its applications."],
        bullets: [
            { text: "Define force.", keywords: ["force", "push", "pull", "newton", "interaction"] },
            { text: "Classify forces.", keywords: ["contact", "non-contact", "friction", "gravity", "magnetic"] },
            { text: "Explain pressure.", keywords: ["pressure", "force", "area", "unit", "Pascal"] },
            { text: "Apply pressure concepts.", keywords: ["sharp", "knife", "wide", "shoe", "atmospheric"] }
        ]
    },
    {
        id: "g8-sci-friction",
        grade: "Grade 8",
        subject: "Science",
        title: "Friction",
        summary: "Understand the types of friction and its effects on motion.",
        hints: ["Define friction and its causes.", "Compare static, sliding, and rolling friction.", "Explain how to increase or decrease friction."],
        bullets: [
            { text: "Explain friction.", keywords: ["friction", "resistance", "motion", "surface", "irregularities"] },
            { text: "Classify friction types.", keywords: ["static", "sliding", "rolling", "fluid", "friction"] },
            { text: "Describe advantages.", keywords: ["advantage", "walk", "write", "grip", "brake"] },
            { text: "Describe disadvantages.", keywords: ["disadvantage", "wear", "tear", "heat", "energy", "loss"] }
        ]
    },
    {
        id: "g8-sci-sound",
        grade: "Grade 8",
        subject: "Science",
        title: "Sound",
        summary: "Learn how sound is produced, transmitted, and characterized.",
        hints: ["Explain sound production through vibrations.", "Describe how sound travels in different media.", "Define amplitude, frequency, and pitch."],
        bullets: [
            { text: "Explain sound production.", keywords: ["sound", "vibration", "produce", "medium", "travel"] },
            { text: "Describe sound travel.", keywords: ["longitudinal", "wave", "compression", "rarefaction", "medium"] },
            { text: "Define sound properties.", keywords: ["amplitude", "frequency", "pitch", "loudness", "hertz"] },
            { text: "Explain human ear.", keywords: ["ear", "eardrum", "cochlea", "hear", "audible"] }
        ]
    },
    {
        id: "g8-sci-electricity",
        grade: "Grade 8",
        subject: "Science",
        title: "Chemical Effects of Electric Current",
        summary: "Understand how electricity affects chemical solutions and applications.",
        hints: ["Test conduction in liquids.", "Explain electrolysis process.", "Describe electroplating application."],
        bullets: [
            { text: "Test liquid conduction.", keywords: ["conduct", "liquid", "solution", "acid", "base", "salt"] },
            { text: "Explain electrolysis.", keywords: ["electrolysis", "electrode", "anode", "cathode", "decomposition"] },
            { text: "Describe electroplating.", keywords: ["electroplate", "coat", "metal", "chrome", "nickel"] },
            { text: "Explain LED conductivity.", keywords: ["LED", "test", "conduction", "direction", "current"] }
        ]
    },
    // Grade 8 Math
    {
        id: "g8-math-rational",
        grade: "Grade 8",
        subject: "Mathematics",
        title: "Rational Numbers",
        summary: "Understand properties and operations with rational numbers.",
        hints: ["Represent rational numbers on number line.", "Find rational numbers between two numbers.", "Apply closure and commutative properties."],
        bullets: [
            { text: "Define rational numbers.", keywords: ["rational", "p/q", "integer", "fraction", "number"] },
            { text: "Plot on number line.", keywords: ["plot", "represent", "number", "line", "between"] },
            { text: "Find middle rational.", keywords: ["between", "two", "rational", "average", "mean"] },
            { text: "Apply properties.", keywords: ["closure", "commutative", "associative", "identity", "inverse"] }
        ]
    },
    {
        id: "g8-math-powers",
        grade: "Grade 8",
        subject: "Mathematics",
        title: "Powers and Exponents",
        summary: "Master laws of exponents and their applications with large and small numbers.",
        hints: ["Apply all laws of exponents.", "Express numbers in standard form.", "Work with negative exponents."],
        bullets: [
            { text: "Apply exponent laws.", keywords: ["multiply", "divide", "power", "zero", "negative"] },
            { text: "Use scientific notation.", keywords: ["standard", "form", "scientific", "notation", "decimal"] },
            { text: "Work with large numbers.", keywords: ["large", "small", "express", "compact", "exponent"] },
            { text: "Simplify expressions.", keywords: ["simplify", "evaluate", "exponential", "term", "base"] }
        ]
    },
    {
        id: "g8-math-squares",
        grade: "Grade 8",
        subject: "Mathematics",
        title: "Squares and Square Roots",
        summary: "Learn to find squares, square roots, and their properties.",
        hints: ["Identify perfect squares.", "Find square roots by factorization and division methods.", "Apply Pythagorean triplets."],
        bullets: [
            { text: "Find perfect squares.", keywords: ["square", "perfect", "ending", "digit", "pattern"] },
            { text: "Find square roots.", keywords: ["square", "root", "factor", "division", "method"] },
            { text: "Use square root applications.", keywords: ["area", "side", "diagonal", "hypotenuse", "Pythagoras"] },
            { text: "Estimate square roots.", keywords: ["estimate", "approximate", "nearest", "integer", "root"] }
        ]
    },
    {
        id: "g8-math-cubes",
        grade: "Grade 8",
        subject: "Mathematics",
        title: "Cubes and Cube Roots",
        summary: "Understand cubes, cube roots, and their applications.",
        hints: ["Identify perfect cubes.", "Find cube roots by factorization method.", "Apply cube root to volume problems."],
        bullets: [
            { text: "Find perfect cubes.", keywords: ["cube", "perfect", "ones", "digit", "pattern"] },
            { text: "Find cube roots.", keywords: ["cube", "root", "prime", "factor", "method"] },
            { text: "Use cube applications.", keywords: ["volume", "side", "cube", "cuboid", "container"] },
            { text: "Estimate cube roots.", keywords: ["estimate", "approximate", "nearest", "integer", "cube"] }
        ]
    },
    {
        id: "g8-math-factorization",
        grade: "Grade 8",
        subject: "Mathematics",
        title: "Algebraic Factorization",
        summary: "Factorize algebraic expressions using various methods.",
        hints: ["Factor out common terms.", "Use identities for factorization.", "Factorize quadratic expressions."],
        bullets: [
            { text: "Factor common terms.", keywords: ["factor", "common", "monomial", "expression", "HCF"] },
            { text: "Use identities.", keywords: ["identity", "square", "difference", "product", "factor"] },
            { text: "Factor quadratics.", keywords: ["quadratic", "split", "middle", "term", "factorize"] },
            { text: "Verify factors.", keywords: ["verify", "multiply", "check", "correct", "factor"] }
        ]
    },
    {
        id: "g8-math-geometry",
        grade: "Grade 8",
        subject: "Mathematics",
        title: "Visualizing Solid Shapes",
        summary: "Understand 3D shapes, their views, and properties.",
        hints: ["Draw top, front, and side views.", "Count faces, edges, and vertices.", "Apply Euler's formula."],
        bullets: [
            { text: "Draw different views.", keywords: ["top", "front", "side", "view", "perspective"] },
            { text: "Count elements.", keywords: ["faces", "edges", "vertices", "solid", "count"] },
            { text: "Apply Euler formula.", keywords: ["Euler", "formula", "F", "plus", "V", "E", "plus", "2"] },
            { text: "Identify 3D shapes.", keywords: ["cube", "cuboid", "cylinder", "cone", "sphere", "prism"] }
        ]
    },
    // Grade 9 Science (Physics)
    {
        id: "g9-phy-motion",
        grade: "Grade 9",
        subject: "Science",
        title: "Motion: Distance, Displacement, Velocity",
        summary: "Understand the concepts of motion including scalar and vector quantities.",
        hints: ["Distinguish distance and displacement.", "Calculate speed and velocity.", "Interpret distance-time graphs."],
        bullets: [
            { text: "Define motion terms.", keywords: ["distance", "displacement", "scalar", "vector", "magnitude"] },
            { text: "Calculate speed.", keywords: ["speed", "distance", "time", "uniform", "non-uniform"] },
            { text: "Calculate velocity.", keywords: ["velocity", "displacement", "time", "direction", "vector"] },
            { text: "Interpret graphs.", keywords: ["graph", "slope", "distance-time", "speed-time", "area"] }
        ]
    },
    {
        id: "g9-phy-force",
        grade: "Grade 9",
        subject: "Science",
        title: "Force and Laws of Motion",
        summary: "Learn Newton's laws of motion and their applications.",
        hints: ["State Newton's three laws.", "Explain inertia and momentum.", "Apply laws to real-life situations."],
        bullets: [
            { text: "State Newton's first law.", keywords: ["Newton", "first", "inertia", "rest", "motion"] },
            { text: "State Newton's second law.", keywords: ["Newton", "second", "force", "mass", "acceleration", "F=ma"] },
            { text: "State Newton's third law.", keywords: ["Newton", "third", "action", "reaction", "equal"] },
            { text: "Explain momentum.", keywords: ["momentum", "mass", "velocity", "conservation", "impulse"] }
        ]
    },
    {
        id: "g9-phy-gravitation",
        grade: "Grade 9",
        subject: "Science",
        title: "Gravitation",
        summary: "Understand gravitational force, free fall, and weight concepts.",
        hints: ["Explain Universal Law of Gravitation.", "Distinguish mass and weight.", "Calculate acceleration due to gravity."],
        bullets: [
            { text: "Explain gravitation law.", keywords: ["gravity", "universal", "law", "mass", "distance", "G"] },
            { text: "Distinguish mass and weight.", keywords: ["mass", "weight", "kg", "newton", "gravity"] },
            { text: "Describe free fall.", keywords: ["free", "fall", "acceleration", "g", "9.8", "velocity"] },
            { text: "Explain buoyancy.", keywords: ["buoyancy", "Archimedes", "upthrust", "float", "sink"] }
        ]
    },
    {
        id: "g9-phy-work",
        grade: "Grade 9",
        subject: "Science",
        title: "Work, Energy and Power",
        summary: "Learn about work done, different forms of energy, and power.",
        hints: ["Define work and its conditions.", "Explain kinetic and potential energy.", "Calculate power and efficiency."],
        bullets: [
            { text: "Define work.", keywords: ["work", "force", "displacement", "product", "joule"] },
            { text: "Explain kinetic energy.", keywords: ["kinetic", "energy", "motion", "velocity", "half", "mv2"] },
            { text: "Explain potential energy.", keywords: ["potential", "energy", "position", "height", "mgh"] },
            { text: "Calculate power.", keywords: ["power", "work", "time", "watt", "rate"] }
        ]
    },
    {
        id: "g9-phy-sound",
        grade: "Grade 9",
        subject: "Science",
        title: "Sound: Production and Properties",
        summary: "Understand sound production, characteristics, and applications.",
        hints: ["Explain sound production by vibrations.", "Describe characteristics of sound waves.", "Calculate speed of sound."],
        bullets: [
            { text: "Explain sound production.", keywords: ["sound", "vibration", "medium", "mechanical", "wave"] },
            { text: "Describe wave properties.", keywords: ["wavelength", "frequency", "amplitude", "time", "period"] },
            { text: "Calculate sound speed.", keywords: ["speed", "distance", "time", "echo", "velocity"] },
            { text: "Explain sound range.", keywords: ["audible", "infrasonic", "ultrasonic", "range", "frequency"] }
        ]
    },
    // Grade 9 Science (Chemistry)
    {
        id: "g9-chem-matter",
        grade: "Grade 9",
        subject: "Science",
        title: "Matter in Our Surroundings",
        summary: "Understand states of matter and their properties.",
        hints: ["Compare solid, liquid, and gas states.", "Explain diffusion and Brownian motion.", "Describe phase changes."],
        bullets: [
            { text: "Describe matter states.", keywords: ["solid", "liquid", "gas", "state", "matter", "shape"] },
            { text: "Explain particle theory.", keywords: ["particle", "arrangement", "motion", "force", "attraction"] },
            { text: "Describe changes of state.", keywords: ["melting", "boiling", "evaporation", "condensation", "sublimation"] },
            { text: "Explain diffusion.", keywords: ["diffusion", "mixing", "particle", "random", "motion"] }
        ]
    },
    {
        id: "g9-chem-pure",
        grade: "Grade 9",
        subject: "Science",
        title: "Is Matter Around Us Pure",
        summary: "Learn about pure substances, mixtures, and separation techniques.",
        hints: ["Distinguish pure substances and mixtures.", "Explain homogeneous and heterogeneous mixtures.", "Describe separation methods."],
        bullets: [
            { text: "Classify matter.", keywords: ["pure", "substance", "element", "compound", "mixture"] },
            { text: "Describe mixtures.", keywords: ["homogeneous", "heterogeneous", "solution", "suspension", "colloid"] },
            { text: "Explain separation.", keywords: ["filtration", "evaporation", "distillation", "chromatography", "centrifugation"] },
            { text: "Describe physical changes.", keywords: ["physical", "change", "reversible", "state", "shape"] }
        ]
    },
    {
        id: "g9-chem-atoms",
        grade: "Grade 9",
        subject: "Science",
        title: "Atoms and Molecules",
        summary: "Understand atomic structure, molecules, and chemical formulas.",
        hints: ["Explain Dalton's atomic theory.", "Describe atomic and molecular masses.", "Write chemical formulas."],
        bullets: [
            { text: "Explain atomic theory.", keywords: ["Dalton", "atom", "indivisible", "element", "combine"] },
            { text: "Describe atomic structure.", keywords: ["proton", "neutron", "electron", "nucleus", "orbit"] },
            { text: "Calculate molecular mass.", keywords: ["molecular", "mass", "formula", "unit", "amu"] },
            { text: "Write chemical formulas.", keywords: ["formula", "chemical", "symbol", "valency", "compound"] }
        ]
    },
    {
        id: "g9-chem-structure",
        grade: "Grade 9",
        subject: "Science",
        title: "Structure of the Atom",
        summary: "Learn about atomic models and electron distribution.",
        hints: ["Compare Thomson, Rutherford, and Bohr models.", "Describe atomic number and mass number.", "Explain electron shells."],
        bullets: [
            { text: "Explain Thomson model.", keywords: ["Thomson", "plum", "pudding", "positive", "sphere"] },
            { text: "Explain Rutherford model.", keywords: ["Rutherford", "nucleus", "gold", "foil", "experiment"] },
            { text: "Explain Bohr model.", keywords: ["Bohr", "orbit", "shell", "energy", "level"] },
            { text: "Describe electron configuration.", keywords: ["configuration", "K", "L", "M", "shell", "electron"] }
        ]
    },
    // Grade 9 Science (Biology)
    {
        id: "g9-bio-cell",
        grade: "Grade 9",
        subject: "Science",
        title: "The Fundamental Unit of Life: Cell",
        summary: "Understand cell structure, cell organelles, and cell functions.",
        hints: ["Compare prokaryotic and eukaryotic cells.", "Describe structure and function of organelles.", "Explain plasma membrane and cell wall."],
        bullets: [
            { text: "Compare cell types.", keywords: ["prokaryotic", "eukaryotic", "nucleus", "membrane", "bound"] },
            { text: "Describe cell membrane.", keywords: ["plasma", "membrane", "selectively", "permeable", "transport"] },
            { text: "Explain nucleus function.", keywords: ["nucleus", "control", "center", "chromosome", "DNA"] },
            { text: "Describe organelles.", keywords: ["mitochondria", "ribosome", "lysosome", "Golgi", "apparatus"] }
        ]
    },
    {
        id: "g9-bio-tissues",
        grade: "Grade 9",
        subject: "Science",
        title: "Tissues",
        summary: "Learn about plant and animal tissues and their types.",
        hints: ["Classify plant tissues.", "Describe different animal tissues.", "Explain functions of various tissues."],
        bullets: [
            { text: "Classify plant tissues.", keywords: ["meristematic", "permanent", "simple", "complex", "tissue"] },
            { text: "Describe plant tissues.", keywords: ["parenchyma", "collenchyma", "sclerenchyma", "xylem", "phloem"] },
            { text: "Describe animal tissues.", keywords: ["epithelial", "connective", "muscular", "nervous", "tissue"] },
            { text: "Explain tissue functions.", keywords: ["protection", "support", "conduction", "contraction", "transmission"] }
        ]
    },
    {
        id: "g9-bio-diseases",
        grade: "Grade 9",
        subject: "Science",
        title: "Why Do We Fall Ill",
        summary: "Understand diseases, their causes, and prevention methods.",
        hints: ["Distinguish between infectious and non-infectious diseases.", "Explain modes of disease transmission.", "Describe principles of treatment and prevention."],
        bullets: [
            { text: "Classify diseases.", keywords: ["infectious", "non-infectious", "communicable", "chronic", "acute"] },
            { text: "Explain causes.", keywords: ["pathogen", "virus", "bacteria", "fungi", "protozoa", "worm"] },
            { text: "Describe transmission.", keywords: ["air", "water", "food", "contact", "vector", "sexual"] },
            { text: "Explain prevention.", keywords: ["vaccination", "hygiene", "sanitation", "immunity", "prevent"] }
        ]
    },
    {
        id: "g9-bio-resources",
        grade: "Grade 9",
        subject: "Science",
        title: "Natural Resources",
        summary: "Learn about natural resources and their sustainable use.",
        hints: ["Classify biotic and abiotic resources.", "Explain the water and nitrogen cycles.", "Describe sustainable management."],
        bullets: [
            { text: "Classify resources.", keywords: ["biotic", "abiotic", "renewable", "non-renewable", "natural"] },
            { text: "Explain water cycle.", keywords: ["evaporation", "transpiration", "condensation", "precipitation", "runoff"] },
            { text: "Describe nitrogen cycle.", keywords: ["nitrogen", "fixation", "nitrification", "denitrification", "ammonification"] },
            { text: "Explain conservation.", keywords: ["sustainable", "conserve", "preserve", "manage", "resource"] }
        ]
    },
    {
        id: "g9-bio-improvement",
        grade: "Grade 9",
        subject: "Science",
        title: "Improvement in Food Resources",
        summary: "Understand agricultural practices and animal husbandry.",
        hints: ["Explain crop variety improvement.", "Describe animal husbandry practices.", "Discuss sustainable agriculture."],
        bullets: [
            { text: "Explain crop improvement.", keywords: ["hybridization", "yield", "resistance", "disease", "pest"] },
            { text: "Describe farming practices.", keywords: ["irrigation", "fertilizer", "pesticide", "organic", "farming"] },
            { text: "Explain animal husbandry.", keywords: ["cattle", "poultry", "fishery", "beekeeping", "livestock"] },
            { text: "Discuss food security.", keywords: ["security", "production", "storage", "distribution", "nutrition"] }
        ]
    },
    // Grade 9 Math
    {
        id: "g9-math-number",
        grade: "Grade 9",
        subject: "Mathematics",
        title: "Number Systems",
        summary: "Understand real numbers, rational and irrational numbers.",
        hints: ["Define rational and irrational numbers.", "Prove irrationality of sqrt 2 and sqrt 3.", "Represent numbers on number line."],
        bullets: [
            { text: "Classify numbers.", keywords: ["natural", "whole", "integer", "rational", "irrational", "real"] },
            { text: "Prove irrationality.", keywords: ["prove", "root", "irrational", "contradiction", "sqrt"] },
            { text: "Represent on line.", keywords: ["represent", "number", "line", "construct", "root"] },
            { text: "Rationalize denominators.", keywords: ["rationalize", "denominator", "conjugate", "simplify", "root"] }
        ]
    },
    {
        id: "g9-math-polynomials",
        grade: "Grade 9",
        subject: "Mathematics",
        title: "Polynomials",
        summary: "Learn about polynomial expressions, degrees, and factorization.",
        hints: ["Identify polynomial types by degree.", "Apply Remainder and Factor theorems.", "Factorize polynomials."],
        bullets: [
            { text: "Define polynomials.", keywords: ["polynomial", "degree", "term", "coefficient", "variable"] },
            { text: "Classify polynomials.", keywords: ["linear", "quadratic", "cubic", "constant", "binomial"] },
            { text: "Use Remainder Theorem.", keywords: ["remainder", "theorem", "factor", "zero", "p(a)", "equal", "zero"] },
            { text: "Factorize polynomials.", keywords: ["factor", "split", "middle", "term", "identity"] }
        ]
    },
    {
        id: "g9-math-geometry",
        grade: "Grade 9",
        subject: "Mathematics",
        title: "Coordinate Geometry",
        summary: "Understand the coordinate system and distance formula.",
        hints: ["Plot points on coordinate plane.", "Find distance between two points.", "Apply section formula."],
        bullets: [
            { text: "Describe coordinate system.", keywords: ["Cartesian", "plane", "x-axis", "y-axis", "origin"] },
            { text: "Plot coordinates.", keywords: ["abscissa", "ordinate", "quadrant", "point", "coordinate"] },
            { text: "Calculate distance.", keywords: ["distance", "formula", "root", "square", "sum", "difference"] },
            { text: "Apply section formula.", keywords: ["section", "midpoint", "ratio", "internal", "external"] }
        ]
    },
    {
        id: "g9-math-euclid",
        grade: "Grade 9",
        subject: "Mathematics",
        title: "Introduction to Euclid's Geometry",
        summary: "Learn about Euclid's postulates and geometric concepts.",
        hints: ["State Euclid's definitions and postulates.", "Understand the parallel line postulate.", "Apply axioms to prove statements."],
        bullets: [
            { text: "State Euclid's definitions.", keywords: ["point", "line", "plane", "surface", "boundary"] },
            { text: "Explain axioms.", keywords: ["axiom", "common", "notion", "equal", "whole", "part"] },
            { text: "Apply postulates.", keywords: ["postulate", "draw", "straight", "circle", "angle", "right"] },
            { text: "Understand fifth postulate.", keywords: ["parallel", "intersect", "unique", "same", "side"] }
        ]
    },
    {
        id: "g9-math-lines",
        grade: "Grade 9",
        subject: "Mathematics",
        title: "Lines and Angles",
        summary: "Understand properties of lines and angles.",
        hints: ["Prove angle sum properties.", "Apply parallel line properties.", "Solve angle relationship problems."],
        bullets: [
            { text: "Describe angle types.", keywords: ["acute", "obtuse", "right", "straight", "reflex"] },
            { text: "Explain linear pair.", keywords: ["linear", "pair", "adjacent", "supplementary", "sum", "180"] },
            { text: "Apply parallel lines.", keywords: ["corresponding", "alternate", "interior", "exterior", "equal"] },
            { text: "Use angle sum property.", keywords: ["triangle", "angle", "sum", "180", "quadrilateral", "360"] }
        ]
    },
    {
        id: "g9-math-triangles",
        grade: "Grade 9",
        subject: "Mathematics",
        title: "Triangles",
        summary: "Learn about triangle congruence and inequality theorems.",
        hints: ["Prove triangle congruence rules.", "Apply inequality theorem.", "Prove properties of special triangles."],
        bullets: [
            { text: "Prove congruence.", keywords: ["SAS", "ASA", "SSS", "RHS", "congruent"] },
            { text: "Apply inequalities.", keywords: ["inequality", "side", "angle", "sum", "greater", "third"] },
            { text: "Prove properties.", keywords: ["isosceles", "equilateral", "property", "base", "angle"] },
            { text: "Solve problems.", keywords: ["prove", "triangle", "application", "real", "life"] }
        ]
    },
    {
        id: "g9-math-heron",
        grade: "Grade 9",
        subject: "Mathematics",
        title: "Heron's Formula",
        summary: "Calculate area of triangles using Heron's formula.",
        hints: ["State Heron's formula.", "Apply to find area of triangles.", "Calculate area of quadrilaterals."],
        bullets: [
            { text: "State Heron's formula.", keywords: ["Heron", "formula", "root", "s", "s-a", "s-b", "s-c"] },
            { text: "Find triangle area.", keywords: ["area", "triangle", "semi-perimeter", "sides", "calculate"] },
            { text: "Calculate quadrilateral area.", keywords: ["quadrilateral", "diagonal", "triangle", "sum", "area"] },
            { text: "Solve real problems.", keywords: ["application", "real", "life", "practical", "measure"] }
        ]
    },
    {
        id: "g9-math-stats",
        grade: "Grade 9",
        subject: "Mathematics",
        title: "Statistics",
        summary: "Learn data collection, presentation, and analysis.",
        hints: ["Create frequency distribution tables.", "Calculate mean, median, and mode.", "Draw histograms and frequency polygons."],
        bullets: [
            { text: "Collect data.", keywords: ["primary", "secondary", "data", "raw", "grouped"] },
            { text: "Calculate mean.", keywords: ["mean", "average", "sum", "frequency", "divide", "n"] },
            { text: "Find median.", keywords: ["median", "middle", "ascending", "order", "position"] },
            { text: "Determine mode.", keywords: ["mode", "frequency", "maximum", "repeated", "value"] }
        ]
    },
    {
        id: "g9-math-probability",
        grade: "Grade 9",
        subject: "Mathematics",
        title: "Probability",
        summary: "Understand basic probability concepts and calculations.",
        hints: ["Define experimental and theoretical probability.", "Calculate probability of simple events.", "Understand sum of probabilities."],
        bullets: [
            { text: "Define probability.", keywords: ["probability", "chance", "likelihood", "event", "outcome"] },
            { text: "Calculate simple probability.", keywords: ["favorable", "total", "outcomes", "ratio", "fraction"] },
            { text: "Apply to experiments.", keywords: ["coin", "die", "card", "experiment", "trial"] },
            { text: "Understand range.", keywords: ["range", "zero", "one", "impossible", "certain", "sure"] }
        ]
    },
    // Grade 10 Science (Physics)
    {
        id: "g10-phy-electricity",
        grade: "Grade 10",
        subject: "Science",
        title: "Electricity",
        summary: "Understand electric current, circuits, and resistance.",
        hints: ["Define electric current and potential difference.", "Explain Ohm's Law.", "Calculate resistance in series and parallel."],
        bullets: [
            { text: "Define electric terms.", keywords: ["current", "potential", "difference", "resistance", "charge"] },
            { text: "State Ohm's Law.", keywords: ["Ohm", "law", "V", "IR", "voltage", "proportional"] },
            { text: "Calculate resistance.", keywords: ["series", "parallel", "R1", "R2", "equivalent", "combine"] },
            { text: "Calculate power.", keywords: ["power", "energy", "heat", "Joule", "watt", "P", "VI"] }
        ]
    },
    {
        id: "g10-phy-magnetic",
        grade: "Grade 10",
        subject: "Science",
        title: "Magnetic Effects of Electric Current",
        summary: "Learn about electromagnetism and its applications.",
        hints: ["Describe magnetic field due to current.", "Explain electromagnets and solenoids.", "Describe electric motor and generator."],
        bullets: [
            { text: "Describe magnetic field.", keywords: ["magnetic", "field", "current", "wire", "concentric", "circle"] },
            { text: "Explain electromagnets.", keywords: ["electromagnet", "solenoid", "coil", "core", "strength"] },
            { text: "Describe electric motor.", keywords: ["motor", "force", "coil", "commutator", "split", "ring"] },
            { text: "Explain generator.", keywords: ["generator", "dynamo", "induced", "current", "electromagnetic", "induction"] }
        ]
    },
    {
        id: "g10-phy-optics",
        grade: "Grade 10",
        subject: "Science",
        title: "Light: Reflection and Refraction",
        summary: "Understand reflection, refraction, and lens properties.",
        hints: ["Explain laws of reflection.", "Describe spherical mirrors and lens formula.", "Calculate magnification and power."],
        bullets: [
            { text: "State reflection laws.", keywords: ["incident", "reflected", "normal", "angle", "equal"] },
            { text: "Describe mirrors.", keywords: ["concave", "convex", "mirror", "focus", "center", "curvature"] },
            { text: "Explain refraction.", keywords: ["refraction", "bending", "medium", "speed", "index", "refractive"] },
            { text: "Use lens formula.", keywords: ["lens", "formula", "1/f", "1/v", "1/u", "magnification"] }
        ]
    },
    {
        id: "g10-phy-human",
        grade: "Grade 10",
        subject: "Science",
        title: "Human Eye and Colorful World",
        summary: "Understand the human eye structure and defects of vision.",
        hints: ["Describe parts of the eye and their functions.", "Explain common vision defects.", "Understand dispersion of light."],
        bullets: [
            { text: "Describe eye parts.", keywords: ["cornea", "iris", "lens", "retina", "pupil", "ciliary"] },
            { text: "Explain accommodation.", keywords: ["accommodation", "ciliary", "muscles", "suspensory", "ligaments"] },
            { text: "Describe vision defects.", keywords: ["myopia", "hypermetropia", "presbyopia", "astigmatism", "correction"] },
            { text: "Explain dispersion.", keywords: ["dispersion", "spectrum", "rainbow", "prism", "color"] }
        ]
    },
    {
        id: "g10-phy-sources",
        grade: "Grade 10",
        subject: "Science",
        title: "Sources of Energy",
        summary: "Learn about different sources of energy and their sustainability.",
        hints: ["Classify renewable and non-renewable sources.", "Explain solar, wind, and hydro energy.", "Discuss nuclear and geothermal energy."],
        bullets: [
            { text: "Classify sources.", keywords: ["renewable", "non-renewable", "conventional", "non-conventional", "fossil"] },
            { text: "Explain solar energy.", keywords: ["solar", "cell", "panel", "radiation", "photovoltaic"] },
            { text: "Describe other sources.", keywords: ["wind", "hydro", "tidal", "geothermal", "biomass"] },
            { text: "Discuss nuclear energy.", keywords: ["nuclear", "fission", "fusion", "reactor", "uranium"] }
        ]
    },
    // Grade 10 Science (Chemistry)
    {
        id: "g10-chem-reactions",
        grade: "Grade 10",
        subject: "Science",
        title: "Chemical Reactions and Equations",
        summary: "Understand types of chemical reactions and balancing equations.",
        hints: ["Write and balance chemical equations.", "Identify types of chemical reactions.", "Understand oxidation and reduction."],
        bullets: [
            { text: "Write equations.", keywords: ["chemical", "equation", "reactant", "product", "symbol"] },
            { text: "Balance equations.", keywords: ["balance", "atom", "both", "sides", "stoichiometry"] },
            { text: "Classify reactions.", keywords: ["combination", "decomposition", "displacement", "double", "redox"] },
            { text: "Explain redox.", keywords: ["oxidation", "reduction", "electron", "gain", "loss"] }
        ]
    },
    {
        id: "g10-chem-acids",
        grade: "Grade 10",
        subject: "Science",
        title: "Acids, Bases and Salts",
        summary: "Learn properties of acids, bases, salts and their reactions.",
        hints: ["Describe properties and uses of acids and bases.", "Explain pH scale and indicators.", "Describe salt preparation methods."],
        bullets: [
            { text: "Describe acid properties.", keywords: ["acid", "sour", "pH", "less", "than", "7", "hydrogen"] },
            { text: "Describe base properties.", keywords: ["base", "alkali", "bitter", "pH", "greater", "than", "7"] },
            { text: "Explain pH scale.", keywords: ["pH", "scale", "neutral", "acidic", "basic", "indicator"] },
            { text: "Describe salt types.", keywords: ["normal", "acidic", "basic", "salt", "reaction", "neutralization"] }
        ]
    },
    {
        id: "g10-chem-metals",
        grade: "Grade 10",
        subject: "Science",
        title: "Metals and Non-metals",
        summary: "Understand properties and uses of metals and non-metals.",
        hints: ["Compare physical properties of metals and non-metals.", "Explain chemical reactivity.", "Describe extraction of metals."],
        bullets: [
            { text: "Compare physical properties.", keywords: ["lustrous", "malleable", "ductile", "conductor", "solid"] },
            { text: "Explain reactivity.", keywords: ["reactive", "reaction", "water", "acid", "oxygen", "corrosion"] },
            { text: "Describe extraction.", keywords: ["ore", "mineral", "extraction", "roasting", "calcination", "smelting"] },
            { text: "List uses.", keywords: ["aluminum", "iron", "copper", "gold", "application", "use"] }
        ]
    },
    {
        id: "g10-chem-carbon",
        grade: "Grade 10",
        subject: "Science",
        title: "Carbon and Its Compounds",
        summary: "Learn about carbon chemistry and organic compounds.",
        hints: ["Explain catenation and tetravalency of carbon.", "Describe hydrocarbons and functional groups.", "Name common organic compounds."],
        bullets: [
            { text: "Explain carbon properties.", keywords: ["catenation", "tetravalent", "covalent", "bond", "carbon"] },
            { text: "Describe hydrocarbons.", keywords: ["alkane", "alkene", "alkyne", "saturated", "unsaturated"] },
            { text: "Explain functional groups.", keywords: ["alcohol", "carboxylic", "acid", "aldehyde", "ketone", "ether"] },
            { text: "Describe nomenclature.", keywords: ["IUPAC", "naming", "prefix", "suffix", "root"] }
        ]
    },
    {
        id: "g10-chem-periodic",
        grade: "Grade 10",
        subject: "Science",
        title: "Periodic Classification of Elements",
        summary: "Understand the modern periodic table and element properties.",
        hints: ["Explain development of periodic table.", "Describe modern periodic law.", "Understand periodic trends."],
        bullets: [
            { text: "Explain early attempts.", keywords: ["Dobereiner", "triad", "Newland", "octave", "Mendeleev"] },
            { text: "State modern law.", keywords: ["modern", "periodic", "law", "atomic", "number", "property"] },
            { text: "Describe table structure.", keywords: ["group", "period", "valence", "electron", "shell"] },
            { text: "Explain trends.", keywords: ["trend", "atomic", "radius", "valency", "metallic", "character"] }
        ]
    },
    // Grade 10 Science (Biology)
    {
        id: "g10-bio-life",
        grade: "Grade 10",
        subject: "Science",
        title: "Life Processes",
        summary: "Understand essential life processes in plants and animals.",
        hints: ["Explain nutrition types.", "Describe respiratory systems.", "Understand transport mechanisms."],
        bullets: [
            { text: "Explain nutrition.", keywords: ["autotrophic", "heterotrophic", "holozoic", "saprophytic", "parasitic"] },
            { text: "Describe respiration.", keywords: ["aerobic", "anaerobic", "glucose", "ATP", "energy"] },
            { text: "Explain transport.", keywords: ["xylem", "phloem", "blood", "vessels", "heart", "circulation"] },
            { text: "Describe excretion.", keywords: ["excretion", "kidney", "nephron", "urine", "urea"] }
        ]
    },
    {
        id: "g10-bio-control",
        grade: "Grade 10",
        subject: "Science",
        title: "Control and Coordination",
        summary: "Learn about nervous and hormonal control in organisms.",
        hints: ["Describe nervous system structure.", "Explain reflex actions.", "Understand endocrine system and hormones."],
        bullets: [
            { text: "Explain nervous system.", keywords: ["neuron", "nerve", "impulse", "brain", "spinal", "cord"] },
            { text: "Describe reflex action.", keywords: ["reflex", "arc", "spinal", "involuntary", "quick"] },
            { text: "Explain human brain.", keywords: ["cerebrum", "cerebellum", "medulla", "forebrain", "hindbrain"] },
            { text: "Describe hormones.", keywords: ["hormone", "endocrine", "gland", "pituitary", "thyroid", "adrenal"] }
        ]
    },
    {
        id: "g10-bio-reproduction",
        grade: "Grade 10",
        subject: "Science",
        title: "How Do Organisms Reproduce",
        summary: "Understand various modes of reproduction in organisms.",
        hints: ["Compare asexual and sexual reproduction.", "Describe human reproductive system.", "Explain reproductive health."],
        bullets: [
            { text: "Explain asexual modes.", keywords: ["fission", "budding", "fragmentation", "regeneration", "spore"] },
            { text: "Describe sexual reproduction.", keywords: ["gamete", "fertilization", "zygote", "embryo", "development"] },
            { text: "Explain human reproduction.", keywords: ["testes", "ovary", "sperm", "egg", "implantation"] },
            { text: "Describe health.", keywords: ["contraception", "STD", "reproductive", "health", "hygiene"] }
        ]
    },
    {
        id: "g10-bio-heredity",
        grade: "Grade 10",
        subject: "Science",
        title: "Heredity and Evolution",
        summary: "Learn about inheritance of traits and evolutionary concepts.",
        hints: ["Explain Mendel's laws of inheritance.", "Describe sex determination.", "Understand evolution and speciation."],
        bullets: [
            { text: "Explain Mendel's experiments.", keywords: ["Mendel", "dominant", "recessive", "trait", "hybrid"] },
            { text: "Describe inheritance.", keywords: ["gene", "allele", "genotype", "phenotype", "homozygous"] },
            { text: "Explain sex determination.", keywords: ["sex", "chromosome", "XX", "XY", "male", "female"] },
            { text: "Describe evolution.", keywords: ["evolution", "natural", "selection", "speciation", "variation"] }
        ]
    },
    {
        id: "g10-bio-environment",
        grade: "Grade 10",
        subject: "Science",
        title: "Our Environment",
        summary: "Understand ecosystems and environmental issues.",
        hints: ["Describe food chains and webs.", "Explain trophic levels.", "Discuss environmental problems and solutions."],
        bullets: [
            { text: "Explain ecosystem.", keywords: ["biotic", "abiotic", "ecosystem", "habitat", "niche"] },
            { text: "Describe food chain.", keywords: ["producer", "consumer", "decomposer", "trophic", "level"] },
            { text: "Explain energy flow.", keywords: ["energy", "flow", "pyramid", "10", "percent", "law"] },
            { text: "Discuss issues.", keywords: ["pollution", "ozone", "depletion", "biodegradable", "management"] }
        ]
    },
    // Grade 10 Math
    {
        id: "g10-math-reals",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Real Numbers",
        summary: "Understand Euclid's division algorithm and fundamental theorem of arithmetic.",
        hints: ["Apply Euclid's division lemma.", "Use fundamental theorem of arithmetic.", "Prove irrationality of numbers."],
        bullets: [
            { text: "Apply division lemma.", keywords: ["Euclid", "division", "lemma", "quotient", "remainder"] },
            { text: "Use fundamental theorem.", keywords: ["fundamental", "unique", "factorization", "prime", "composite"] },
            { text: "Find HCF and LCM.", keywords: ["HCF", "LCM", "prime", "factorization", "product"] },
            { text: "Prove irrationality.", keywords: ["prove", "irrational", "contradiction", "root", "prime"] }
        ]
    },
    {
        id: "g10-math-polynomials",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Polynomials",
        summary: "Learn about polynomial zeros and their graphical representation.",
        hints: ["Find zeros of polynomials.", "Understand relationship between zeros and coefficients.", "Apply division algorithm."],
        bullets: [
            { text: "Find zeros.", keywords: ["zero", "root", "polynomial", "factor", "value", "zero"] },
            { text: "Use coefficient relations.", keywords: ["sum", "product", "zero", "coefficient", "quadratic", "cubic"] },
            { text: "Apply division algorithm.", keywords: ["division", "algorithm", "quotient", "remainder", "dividend"] },
            { text: "Graph polynomials.", keywords: ["graph", "parabola", "intersect", "x-axis", "shape"] }
        ]
    },
    {
        id: "g10-math-pairs",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Pair of Linear Equations",
        summary: "Solve linear equations in two variables using graphical and algebraic methods.",
        hints: ["Solve graphically.", "Apply substitution and elimination methods.", "Solve cross-multiplication problems."],
        bullets: [
            { text: "Solve graphically.", keywords: ["graph", "intersect", "parallel", "coincident", "unique"] },
            { text: "Use substitution.", keywords: ["substitute", "express", "variable", "equation", "solve"] },
            { text: "Use elimination.", keywords: ["eliminate", "coefficient", "equal", "add", "subtract"] },
            { text: "Apply cross-multiplication.", keywords: ["cross", "multiply", "formula", "x", "y", "determinant"] }
        ]
    },
    {
        id: "g10-math-quadratic",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Quadratic Equations",
        summary: "Solve quadratic equations using factorization and formula methods.",
        hints: ["Solve by factorization.", "Use quadratic formula.", "Analyze nature of roots."],
        bullets: [
            { text: "Define quadratic.", keywords: ["quadratic", "degree", "two", "parabola", "curve"] },
            { text: "Solve by factorization.", keywords: ["factorize", "split", "middle", "term", "zero"] },
            { text: "Use quadratic formula.", keywords: ["formula", "minus", "b", "plus", "minus", "root"] },
            { text: "Find discriminant.", keywords: ["discriminant", "b2", "4ac", "nature", "real", "equal"] }
        ]
    },
    {
        id: "g10-math-progressions",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Arithmetic Progressions",
        summary: "Understand AP concepts and calculate sum of terms.",
        hints: ["Identify arithmetic progressions.", "Find nth term of AP.", "Calculate sum of n terms."],
        bullets: [
            { text: "Define AP.", keywords: ["arithmetic", "progression", "common", "difference", "consecutive"] },
            { text: "Find nth term.", keywords: ["nth", "term", "a", "plus", "n-1", "d", "formula"] },
            { text: "Calculate sum.", keywords: ["sum", "n", "terms", "n/2", "2a", "plus", "n-1", "d"] },
            { text: "Solve real problems.", keywords: ["application", "real", "life", "money", "installment"] }
        ]
    },
    {
        id: "g10-math-triangles",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Triangles: Similarity",
        summary: "Learn about similar triangles and their properties.",
        hints: ["Understand similar figures.", "Prove triangles similar using criteria.", "Apply area theorem and Pythagoras."],
        bullets: [
            { text: "Define similarity.", keywords: ["similar", "same", "shape", "proportional", "corresponding"] },
            { text: "Prove similarity.", keywords: ["AA", "SAS", "SSS", "similar", "corresponding", "angle", "side"] },
            { text: "Apply area theorem.", keywords: ["area", "ratio", "square", "side", "ratio", "similar"] },
            { text: "Prove Pythagoras.", keywords: ["Pythagoras", "right", "hypotenuse", "square", "sum", "leg"] }
        ]
    },
    {
        id: "g10-math-coordinate",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Coordinate Geometry",
        summary: "Understand section formula and area of triangles.",
        hints: ["Use section formula for internal and external division.", "Find area of triangles and quadrilaterals.", "Apply to geometric problems."],
        bullets: [
            { text: "Apply section formula.", keywords: ["section", "ratio", "m1", "m2", "coordinate"] },
            { text: "Find midpoint.", keywords: ["midpoint", "average", "x", "y", "coordinate", "half"] },
            { text: "Calculate area.", keywords: ["area", "triangle", "formula", "1/2", "determinant", "absolute"] },
            { text: "Solve problems.", keywords: ["collinear", "quadrilateral", "centroid", "geometric", "application"] }
        ]
    },
    {
        id: "g10-math-trigonometry",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Introduction to Trigonometry",
        summary: "Learn trigonometric ratios and identities.",
        hints: ["Define trigonometric ratios.", "Prove trigonometric identities.", "Solve height and distance problems."],
        bullets: [
            { text: "Define ratios.", keywords: ["sine", "cosine", "tangent", "opposite", "adjacent", "hypotenuse"] },
            { text: "Find ratios.", keywords: ["sin", "cos", "tan", "cot", "sec", "cosec", "complementary"] },
            { text: "Prove identities.", keywords: ["identity", "sin2", "plus", "cos2", "equal", "one"] },
            { text: "Solve applications.", keywords: ["height", "distance", "angle", "elevation", "depression"] }
        ]
    },
    {
        id: "g10-math-circles",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Circles",
        summary: "Understand tangents and properties of circles.",
        hints: ["Define tangent and secant.", "Prove tangent theorems.", "Solve problems involving circles."],
        bullets: [
            { text: "Define tangent.", keywords: ["tangent", "secant", "circle", "point", "contact"] },
            { text: "Prove theorems.", keywords: ["theorem", "tangent", "perpendicular", "radius", "point"] },
            { text: "Use tangent properties.", keywords: ["length", "tangent", "external", "point", "equal"] },
            { text: "Solve problems.", keywords: ["theorem", "application", "circle", "chord", "arc"] }
        ]
    },
    {
        id: "g10-math-constructions",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Geometric Constructions",
        summary: "Learn to divide line segments and construct tangents to circles.",
        hints: ["Divide line segment in given ratio.", "Construct similar triangles.", "Draw tangents to circles."],
        bullets: [
            { text: "Divide segment.", keywords: ["divide", "line", "segment", "ratio", "construction"] },
            { text: "Construct triangles.", keywords: ["similar", "triangle", "scale", "factor", "construct"] },
            { text: "Draw tangents.", keywords: ["tangent", "circle", "point", "center", "construct"] },
            { text: "Verify constructions.", keywords: ["verify", "measure", "justify", "construction", "proof"] }
        ]
    },
    {
        id: "g10-math-areas",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Areas Related to Circles",
        summary: "Calculate areas of circle sectors and segments.",
        hints: ["Find area and circumference of circles.", "Calculate sector areas.", "Find area of segments and combinations."],
        bullets: [
            { text: "Calculate circle area.", keywords: ["area", "pi", "r", "square", "circumference", "2", "pi", "r"] },
            { text: "Find sector area.", keywords: ["sector", "angle", "360", "pi", "r", "square", "proportion"] },
            { text: "Calculate segment.", keywords: ["segment", "sector", "minus", "triangle", "area"] },
            { text: "Solve combinations.", keywords: ["combination", "shaded", "region", "circle", "polygon"] }
        ]
    },
    {
        id: "g10-math-surface",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Surface Areas and Volumes",
        summary: "Calculate surface areas and volumes of 3D shapes.",
        hints: ["Find surface area of cubes and cuboids.", "Calculate cylinder and cone properties.", "Find sphere surface area and volume."],
        bullets: [
            { text: "Calculate cube cuboid.", keywords: ["surface", "area", "volume", "cube", "cuboid", "formula"] },
            { text: "Find cylinder properties.", keywords: ["cylinder", "curved", "surface", "total", "volume", "pi", "r", "h"] },
            { text: "Calculate cone sphere.", keywords: ["cone", "slant", "height", "sphere", "4/3", "pi", "r", "cube"] },
            { text: "Solve combination problems.", keywords: ["combination", "solid", "frustum", "volume", "surface"] }
        ]
    },
    {
        id: "g10-math-stats",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Statistics",
        summary: "Learn mean, median, mode of grouped data.",
        hints: ["Calculate mean using different methods.", "Find median of grouped data.", "Determine mode graphically."],
        bullets: [
            { text: "Calculate mean.", keywords: ["mean", "direct", "assumed", "step", "deviation", "method"] },
            { text: "Find median.", keywords: ["median", "cumulative", "frequency", "class", "n/2"] },
            { text: "Determine mode.", keywords: ["mode", "modal", "class", "maximum", "frequency", "formula"] },
            { text: "Draw ogive.", keywords: ["ogive", "cumulative", "frequency", "curve", "less", "than"] }
        ]
    },
    {
        id: "g10-math-probability",
        grade: "Grade 10",
        subject: "Mathematics",
        title: "Probability",
        summary: "Understand theoretical probability and its applications.",
        hints: ["Define theoretical probability.", "Calculate probability of events.", "Understand sum and complement rules."],
        bullets: [
            { text: "Define probability.", keywords: ["theoretical", "probability", "expected", "outcome", "ratio"] },
            { text: "Calculate event probability.", keywords: ["event", "favorable", "total", "possible", "calculate"] },
            { text: "Apply addition rule.", keywords: ["addition", "mutually", "exclusive", "OR", "union"] },
            { text: "Solve real problems.", keywords: ["deck", "card", "coin", "die", "marble", "ball"] }
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
