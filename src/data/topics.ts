export type Topic = {
  slug: string; label: string; title: string; description: string; verdict: string;
  sections: { title: string; paragraphs: string[]; sources: string[] }[];
  takeaway: string; unknown: string;
};

export const topics: Topic[] = [
  {
    slug: 'cleansing', label: 'Bathing & cleansing', title: 'Does your whole body need soap every day?',
    description: 'A bath, an all-over lather, and an exfoliating scrub are three different things. They deserve three different questions.',
    verdict: 'Gentler care is supported; one schedule is not',
    sections: [
      { title: 'Wash what needs washing.', paragraphs: ['A whole-body daily lather should not be an unquestioned default. In its dry-skin guidance, the American Academy of Dermatology recommends applying gentle cleanser only where needed, such as underarms or the external groin area. That is clinical support for targeted cleansing in a defined group, rather than evidence that everyone needs the same all-over routine.'], sources: ['dry-skin'] },
      { title: 'Scrubbing is a separate decision.', paragraphs: ['Cleaning skin and deliberately exfoliating it are different tasks. AAD describes exfoliation as optional and cautions that excessive mechanical exfoliation can irritate skin. A loofah or exfoliating cloth is not a prerequisite for being clean.', 'The material, pressure, frequency, and your skin all matter. A soft cloth used lightly is a different exposure from vigorous daily scrubbing. We should question the routine without declaring every washcloth harmful.'], sources: ['exfoliation'] },
      { title: 'Protect a functioning barrier.', paragraphs: ['The outer skin layer contains an organized lipid structure that helps limit water loss. That provides a biological reason to care about barrier disruption. It is more complex than “keep all your oils”: surface sebum and the lipids between barrier cells are not interchangeable.', 'In a small cleanser comparison, formulations had different effects on barrier measurements. Another experiment found only mild, comparable effects after repeated washing with the tested mild cleansers. The evidence supports examining what you use and how you use it.'], sources: ['barrier-lipids', 'cleansers', 'washing-frequency'] },
      { title: 'How often is a different question from how harsh.', paragraphs: ['A review of 13 prospective eczema studies did not find daily bathing associated with worse disease severity; it also could not establish an optimal frequency. Those findings concern eczema care and do not test a daily full-body soap-and-scrub ritual.', 'For healthy adults, the sources here do not settle a universal daily, alternate-day, or weekly schedule. Nor do they establish that water alone removes everything everyone needs removed. Activity, exposures, comfort, and skin conditions make the question more specific.'], sources: ['bathing-frequency'] },
      { title: 'Keep the soap at the sink.', paragraphs: ['Your hands pick things up and pass things on. Washing them with soap is an infection-prevention measure, including after using the toilet and before preparing food. Simplifying body care is not a reason to stop.', 'You generally do not need a consumer “antibacterial” label to make handwashing useful. The FDA finds insufficient evidence of extra illness prevention compared with plain soap and water.'], sources: ['handwashing', 'antibacterial'] },
    ],
    takeaway: 'A simpler routine can mean less area covered in cleanser, less friction, or fewer optional steps. It need not begin by changing how often you enjoy a bath or shower.',
    unknown: 'We need long-term trials of ordinary routines in healthy adults, measuring comfort, skin disease, infection, and barrier function alongside microbes. An evolutionary story alone cannot establish a modern washing schedule.',
  },
  {
    slug: 'microbiome', label: 'Your microbiome', title: 'Who else is living on your skin?',
    description: 'Care for the living surface you already have. What would it take to show that a simpler routine helps it thrive?',
    verdict: 'An ecosystem to support, with outcomes to test',
    sections: [
      { title: 'Different neighborhoods. Different residents.', paragraphs: ['Skin microbiome research shows that communities vary by body site. A forearm and an armpit do not provide the same environment, and there is no universal microbial census that every person should match.'], sources: ['skin-microbiome'] },
      { title: 'Your skin is not starting from zero after every wash.', paragraphs: ['A longitudinal study sampled 17 sites in 12 healthy people over months to years and found considerable persistence of microbial communities and strains. Everyday skin ecosystems can be resilient.', 'That study did not assign bathing routines, so it cannot certify every cleanser. It does challenge the assumption that ordinary life constantly wipes the skin clean of its resident community.'], sources: ['microbiome-stability'] },
      { title: 'Products change the environment. Meaning matters.', paragraphs: ['An 11-person study over nine weeks found different responses to different products. Some increased measured microbial diversity; lotions had little effect on that measure. Simply using fewer products did not predict a more diverse community.', 'Underarm-product research also found changes in bacterial abundance and composition. Neither experiment established a universally healthier routine. We need symptoms, barrier function, or disease outcomes to tell us whether a measured change is beneficial.'], sources: ['product-dynamics', 'deodorant-microbiome'] },
      { title: 'What could “cultivating a good biome” mean?', paragraphs: ['Our working aim is comfortable, intact skin supported by a routine with a clear purpose. Reducing unnecessary abrasion or irritating products is a practical question worth testing. “Maximize bacteria” or “maximize diversity” is not a demonstrated recipe.', 'A claim that less washing improves the microbiome needs a comparison group, enough time, and health outcomes. A claim printed on a “microbiome-friendly” product deserves the same scrutiny.'], sources: ['barrier-lipids', 'exfoliation'] },
    ],
    takeaway: 'Treat skin as a living ecosystem with a protective barrier. Keep useful hygiene and investigate how much unnecessary disturbance a simpler routine could avoid.',
    unknown: 'No routine here is proven to produce an ideal microbiome for most people. Historical or evolutionary plausibility can inspire a hypothesis; it cannot replace a test of that hypothesis.',
  },
  {
    slug: 'scent', label: 'Scent & diet', title: 'Can you eat your way to a better smell?',
    description: 'Diet may influence scent. The leap from there to “vegans don’t smell” is much bigger than the evidence.',
    verdict: 'Interesting, limited evidence',
    sections: [
      { title: 'The study behind the claim.', paragraphs: ['In a 2006 crossover experiment, 17 men followed meat and nonmeat diets for two weeks each. Women rated their collected underarm odors more favorably during the nonmeat phase.', 'That is a real result about perceived odor in a particular experiment. It is not proof that avoiding animal products eliminates body odor. The participants were not testing a universal vegan deodorant substitute.'], sources: ['diet-odor'] },
      { title: 'Your scent has more than one input.', paragraphs: ['Underarm products can change the bacteria living there. An experiment that paused and reintroduced deodorant and antiperspirant found changes in microbial abundance and composition.', 'That tells us the local environment responds to what we do. It does not tell us that quitting a product guarantees a pleasant smell, or that an “adjustment period” is toxins leaving the body.'], sources: ['deodorant-microbiome'] },
      { title: 'A preference, not a moral achievement.', paragraphs: ['You might prefer your own scent without fragrance. You might prefer deodorant. Neither choice determines whether you are clean, healthy, or a good person.', 'Changing diet, products, and bathing habits together makes it hard to identify a cause. A useful next study would distinguish those influences and measure everyday outcomes, rather than promise a universal scent transformation.'], sources: [] },
    ],
    takeaway: 'Treat diet-and-scent claims as promising questions. You can explore your preferences without turning food into a purity test or expecting to become odorless.',
    unknown: 'Larger, longer studies with diverse participants and controlled diets would help. Subjective attractiveness ratings are not measurements of health or cleanliness.',
  },
  {
    slug: 'natural', label: 'Natural & synthetic', title: 'Is natural always the gentler option?',
    description: 'Botanical fragrances, bath additives, and synthetic ingredients deserve the same questions about purpose and tolerability.',
    verdict: 'Evaluate the ingredient and the claim',
    sections: [
      { title: 'Natural ingredients can still irritate.', paragraphs: ['Essential oils can cause contact allergy. Their plant origin does not establish safety or prove they benefit the skin. Removing unnecessary fragrance can include botanical fragrance, too.', 'Essential oils also do not dissolve in water. Adding salt does not fix that: concentrated droplets can touch skin. A plain bath is a simpler default than a DIY essential-oil mixture.'], sources: ['essential-oils', 'bath-oils'] },
      { title: 'A nice bath is not a magnesium treatment.', paragraphs: ['The transdermal magnesium review found insufficient evidence for replenishing magnesium through the skin. Feeling relaxed after a salt bath does not show that a deficiency was corrected.', 'Enjoyment is a perfectly reasonable reason to enjoy something. It does not need a biochemical sales pitch attached.'], sources: ['magnesium'] },
      { title: 'Be specific about “detox.”', paragraphs: ['Which substance, measured how, removed by what mechanism? Without those details, a detox claim is difficult to test. NCCIH finds no convincing evidence that detox diets eliminate toxins; that overview is not itself a bathing trial.', 'Here, clearing the bathroom shelf means reducing optional products. We do not claim that a bath flushes toxins out through pores.'], sources: ['detox'] },
      { title: 'Sometimes an added ingredient has a job.', paragraphs: ['Preservation helps address microbial contamination in cosmetics. Removing preservatives from a water-containing formula does not automatically improve its safety.', 'The useful question is not whether an ingredient sounds natural or chemical. It is what benefit and risk the finished product has, under the conditions in which you use it.'], sources: ['preservatives'] },
    ],
    takeaway: 'You can prefer simple products without assuming that simple, homemade, or botanical means safer. Be just as skeptical of a wellness claim as a cosmetics claim.',
    unknown: 'The cited work does not establish bath additives as necessary for healthy skin. Ingredient identity, concentration, formulation, exposure, and individual sensitivity all deserve attention.',
  },
  {
    slug: 'useful-products', label: 'Products with a purpose', title: 'Which products earn their place?',
    description: 'A minimalist routine can still include things that prevent damage, relieve symptoms, or treat a condition.',
    verdict: 'Benefits supported for specific uses',
    sections: [
      { title: 'Sun protection has real evidence.', paragraphs: ['A randomized trial in 903 adults found less progression of measured skin aging with daily sunscreen than with discretionary use over 4.5 years. The reported relative odds were 0.76—not a promise of being “24% younger.”', 'Shade and protective clothing belong in the routine too. Dermatology guidance recommends broad-spectrum, water-resistant SPF 30 or higher on exposed skin.'], sources: ['sunscreen-trial', 'sun-guidance'] },
      { title: 'Moisturizer can serve a medical purpose.', paragraphs: ['A Cochrane review of eczema trials found that moisturizers generally helped, though certainty varied by outcome. That supports a role in eczema care, not a requirement for every person to buy an elaborate routine.', 'If a product relieves dryness or is part of your treatment plan, keeping it is compatible with doing less.'], sources: ['moisturizers'] },
      { title: 'Some medicines work. Marketing still needs scrutiny.', paragraphs: ['A review of seven randomized trials supported topical tretinoin for visible photoaging. Those findings do not transfer to every over-the-counter retinol, every strength, or every person.', 'A prescribed treatment is a different decision from an optional fragranced body product. Do not stop or taper medication because of this website; discuss changes with your clinician. The aim is a useful routine, not a competition to own nothing.'], sources: ['tretinoin'] },
    ],
    takeaway: 'Let a product earn its place by solving a problem you actually have. You do not need to purchase youth, and you do not need to reject effective care to be a minimalist.',
    unknown: 'No trial promises permanent youth. Studies of a specific treatment and outcome cannot validate all claims made by the beauty or pharmaceutical industries.',
  },
  {
    slug: 'hair', label: 'Hair & hydration', title: 'A simpler routine. Even for curls?',
    description: 'Conditioner can be useful. More drinking water is not a universal skin-care replacement. Simplicity has room for both facts.',
    verdict: 'Adapt to your hair and skin',
    sections: [
      { title: 'Curls do not need the same schedule as everyone else.', paragraphs: ['Dermatology guidance supports adjusting washing frequency and using conditioner to help curly hair. Detangling wet, conditioned hair gently can make sense.', 'That guidance still includes scalp cleansing. AAD suggests washing at least every two to three weeks; indefinite shampoo avoidance is not its recommendation. Persistent scalp symptoms deserve attention rather than a rigid no-product rule.'], sources: ['curly-hair'] },
      { title: 'Hydration is not a pore-clearing hack.', paragraphs: ['In a small study of 49 women, increased water intake was followed by improved hydration measurements, particularly with lower baseline intake. The design does not establish a universal dose or a cure for acne.', 'Drinking adequate water and treating dry skin are related but different questions. More is not automatically better, and a single study cannot turn water into an anti-aging regimen.'], sources: ['water'] },
      { title: 'Keep the part that earns its keep.', paragraphs: ['A product that makes detangling easier has a purpose you can actually observe. That is a better starting point than counting bottles.', 'Identify the job, notice whether a product helps, and avoid treating either more products or fewer products as a universal rule.'], sources: [] },
    ],
    takeaway: 'Build around the needs of your scalp, hair, and skin. A well-chosen conditioner can be part of a very simple routine.',
    unknown: 'The sources here do not establish that conditioner-only washing works indefinitely for every scalp, or that high water intake prevents visible aging.',
  },
];
