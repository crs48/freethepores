export type Topic = {
  slug: string; label: string; title: string; description: string; verdict: string;
  sections: { title: string; paragraphs: string[]; sources: string[] }[];
  takeaway: string; unknown: string;
};

export const topics: Topic[] = [
  {
    slug: 'cleansing', label: 'Skin & cleansing', title: 'Does clean have to mean squeaky?',
    description: 'The evidence favors gentleness. That is a more specific claim than “all soap is bad.”',
    verdict: 'Formulation and context matter',
    sections: [
      { title: 'A cleanser is not just a cleanser.', paragraphs: ['A 60-person study comparing four cleansers found differences in their effects on the skin barrier. A mild synthetic detergent cleanser performed more gently than the tested soaps. “Synthetic” was not the problem; the formulation mattered.', 'The useful distinction is between a product that removes what needs removing and a routine that leaves skin irritated or uncomfortable. A squeaky feeling is not a health score.'], sources: ['cleansers'] },
      { title: 'Water-only bathing: an open question.', paragraphs: ['The sources collected here do not establish that long-term water-only bathing is the healthiest routine for everyone. They also do not establish that every inch of every body needs the same daily wash.', 'For people with dry skin, dermatology guidance favors short, warm baths or showers and gentle care. Christopher’s comfortable experience with fewer products is worth describing; it cannot settle what is best for another person.'], sources: ['dry-skin'] },
      { title: 'Keep the soap at the sink.', paragraphs: ['Your hands pick things up and pass things on. Washing them with soap is an infection-prevention measure, including after using the toilet and before preparing food. Simplifying body care is not a reason to stop.', 'You generally do not need a consumer “antibacterial” label to make handwashing useful. The FDA finds insufficient evidence of extra illness prevention compared with plain soap and water.'], sources: ['handwashing', 'antibacterial'] },
    ],
    takeaway: 'Question harshness, excess, and products without a clear purpose. Keep effective hygiene, and let comfort and the task at hand guide the rest.',
    unknown: 'We need longer comparisons of ordinary cleansing routines, across skin conditions, climates, occupations, and skin types. A forearm washing study cannot answer all of that.',
  },
  {
    slug: 'scent', label: 'Scent & diet', title: 'Can you eat your way to a better smell?',
    description: 'Diet may influence scent. The leap from there to “vegans don’t smell” is much bigger than the evidence.',
    verdict: 'Interesting, limited evidence',
    sections: [
      { title: 'The study behind the claim.', paragraphs: ['In a 2006 crossover experiment, 17 men followed meat and nonmeat diets for two weeks each. Women rated their collected underarm odors more favorably during the nonmeat phase.', 'That is a real result about perceived odor in a particular experiment. It is not proof that avoiding animal products eliminates body odor. The participants were not testing a universal vegan deodorant substitute.'], sources: ['diet-odor'] },
      { title: 'Your scent has more than one input.', paragraphs: ['Underarm products can change the bacteria living there. An experiment that paused and reintroduced deodorant and antiperspirant found changes in microbial abundance and composition.', 'That tells us the local environment responds to what we do. It does not tell us that quitting a product guarantees a pleasant smell, or that an “adjustment period” is toxins leaving the body.'], sources: ['deodorant-microbiome'] },
      { title: 'A preference, not a moral achievement.', paragraphs: ['You might prefer your own scent without fragrance. You might prefer deodorant. Neither choice determines whether you are clean, healthy, or a good person.', 'Christopher reports being comfortable without deodorant while eating a mostly vegan diet and drinking little alcohol. Several habits changed together. His story cannot isolate which habit caused the change, and this library does not establish an alcohol-to-odor or oily-food-to-pore explanation.'], sources: [] },
    ],
    takeaway: 'Treat diet-and-scent claims as promising questions. You can explore your preferences without turning food into a purity test or expecting to become odorless.',
    unknown: 'Larger, longer studies with diverse participants and controlled diets would help. Subjective attractiveness ratings are not measurements of health or cleanliness.',
  },
  {
    slug: 'microbiome', label: 'Your microbiome', title: 'Who else is living on your skin?',
    description: 'Your skin is an ecosystem. An ecosystem is more complicated than a “good bacteria” sticker.',
    verdict: 'Changes shown; health meaning uncertain',
    sections: [
      { title: 'Different neighborhoods. Different residents.', paragraphs: ['Skin microbiome research shows that communities vary by body site. A forearm and an armpit do not provide the same environment, and there is no universal microbial census that every person should match.'], sources: ['skin-microbiome'] },
      { title: 'A change is not automatically damage.', paragraphs: ['Underarm product use can change bacterial communities. In the Urban study, antiperspirant application reduced culturable bacteria, and patterns differed with product-use history.', 'This is evidence of an effect, not proof of a health problem. To make that next claim, we would need outcomes such as symptoms, disease risk, or meaningful improvements in comfort—not just a different mix of microbes.'], sources: ['deodorant-microbiome'] },
      { title: 'Ask what a label actually measured.', paragraphs: ['“Microbiome-friendly” sounds reassuring. Ask whether the evidence concerns this exact formulation, whether it was tested on people, and whether participants actually benefited.', 'A product can change a laboratory measurement without helping your skin. Likewise, stopping a product does not automatically restore an ideal or original microbiome. Those are claims that need their own evidence.'], sources: [] },
    ],
    takeaway: 'Respect the complexity. Avoid treating all microbes as enemies, or buying a product solely because it promises to “balance” them.',
    unknown: 'There is no routine in this library demonstrated to create the ideal skin microbiome for everyone. We need clinical outcomes alongside sequencing data.',
  },
  {
    slug: 'natural', label: 'Natural & synthetic', title: 'Is natural always the gentler option?',
    description: 'Sage oil and magnesium salts deserve the same curiosity we bring to a bottle from the pharmacy.',
    verdict: 'Evaluate the ingredient and the claim',
    sections: [
      { title: 'Natural ingredients can still irritate.', paragraphs: ['Essential oils can cause contact allergy. Their plant origin does not establish safety or prove they benefit the skin. This research collection does not establish that adding sage oil makes a bath healthier.', 'Essential oils also do not dissolve in water. Adding salt does not fix that: concentrated droplets can touch skin. A plain bath is a simpler default than a DIY essential-oil mixture.'], sources: ['essential-oils', 'bath-oils'] },
      { title: 'A nice bath is not a magnesium treatment.', paragraphs: ['The transdermal magnesium review found insufficient evidence for replenishing magnesium through the skin. Feeling relaxed after a salt bath does not show that a deficiency was corrected.', 'Enjoyment is a perfectly reasonable reason to enjoy something. It does not need a biochemical sales pitch attached.'], sources: ['magnesium'] },
      { title: 'Be specific about “detox.”', paragraphs: ['Which substance, measured how, removed by what mechanism? Without those details, a detox claim is difficult to test. NCCIH finds no convincing evidence that detox diets eliminate toxins; that overview is not itself a bathing trial.', 'Here, clearing the bathroom shelf means reducing optional products. We do not claim that a bath flushes toxins out through pores.'], sources: ['detox'] },
      { title: 'Sometimes an added ingredient has a job.', paragraphs: ['Preservation helps address microbial contamination in cosmetics. Removing preservatives from a water-containing formula does not automatically improve its safety.', 'The useful question is not whether an ingredient sounds natural or chemical. It is what benefit and risk the finished product has, under the conditions in which you use it.'], sources: ['preservatives'] },
    ],
    takeaway: 'You can prefer simple products without assuming that simple, homemade, or botanical means safer. Be just as skeptical of a wellness claim as a cosmetics claim.',
    unknown: 'The cited work does not establish a skin-health benefit for Christopher’s sage-oil-and-salt routine. Species, concentration, formulation, exposure, and individual sensitivity all deserve attention.',
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
      { title: 'Keep the part that earns its keep.', paragraphs: ['Christopher conditions his curly hair once or twice a week and uses that time to detangle. The conditioner has a clear purpose in his routine.', 'That is the spirit of this project: identify the job, notice whether a product helps, and avoid treating either more products or fewer products as a universal rule.'], sources: [] },
    ],
    takeaway: 'Build around the needs of your scalp, hair, and skin. A well-chosen conditioner can be part of a very simple routine.',
    unknown: 'The sources here do not establish that conditioner-only washing works indefinitely for every scalp, or that high water intake prevents visible aging.',
  },
];
