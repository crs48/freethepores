export type Source = {
  id: string;
  title: string;
  citation: string;
  year: string;
  kind: 'Study' | 'Review' | 'Guidance';
  topic: 'Cleansing' | 'Scent' | 'Microbiome' | 'Ingredients' | 'Sun & treatments' | 'Hair & hydration';
  url: string;
  doi?: string;
  finding: string;
  limits: string;
  access: string;
};

export const sources: Source[] = [
  {
    id: 'barrier-lipids', title: 'The skin barrier: An extraordinary interface with an exceptional lipid organization',
    citation: 'Bouwstra et al. · Progress in Lipid Research', year: '2023', kind: 'Review', topic: 'Cleansing',
    url: 'https://pubmed.ncbi.nlm.nih.gov/37666282/', doi: '10.1016/j.plipres.2023.101252',
    finding: 'The outer skin barrier depends on organized lipids between cells, including ceramides, cholesterol, and free fatty acids. Their arrangement matters for permeability and water loss.',
    limits: 'A mechanistic review, not a bathing-frequency trial. Barrier lipids are not simply a layer of surface oil; leaving more sebum on skin is not a demonstrated way to improve every barrier.', access: 'Abstract and author-hosted publication summary reviewed',
  },
  {
    id: 'exfoliation', title: 'How to safely exfoliate at home',
    citation: 'American Academy of Dermatology', year: '2026', kind: 'Guidance', topic: 'Cleansing',
    url: 'https://www.aad.org/public/everyday-care/skin-care-secrets/routine/safely-exfoliate-at-home',
    finding: 'Exfoliation is optional and can irritate or damage skin when too aggressive. Skin type, method, and frequency affect tolerability.',
    limits: 'This guidance does not say every washcloth or sponge is harmful. It distinguishes gentle use from over-exfoliation and does not establish a required daily scrub.', access: 'Full guidance reviewed',
  },
  {
    id: 'bathing-frequency', title: 'Does daily bathing or showering worsen atopic dermatitis severity? A systematic review and meta-analysis',
    citation: 'Hua et al. · Archives of Dermatological Research', year: '2021', kind: 'Review', topic: 'Cleansing',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33196889/', doi: '10.1007/s00403-020-02164-0',
    finding: 'Across 13 prospective studies in atopic dermatitis, daily bathing was not associated with worse disease severity. The optimal frequency remained unclear.',
    limits: 'These are eczema studies with substantial heterogeneity, not proof that healthy adults need daily showers or that daily full-body soap and scrubbing are harmless. Bathing and aggressive cleansing are separate exposures.', access: 'Abstract reviewed',
  },
  {
    id: 'washing-frequency', title: 'Effects of skin washing frequency on the epidermal barrier function and inflammatory processes of the epidermis: An experimental study',
    citation: 'Symanzik et al. · Contact Dermatitis', year: '2022', kind: 'Study', topic: 'Cleansing',
    url: 'https://pubmed.ncbi.nlm.nih.gov/35357722/', doi: '10.1111/cod.14119',
    finding: 'Forearms washed five or eleven times over four hours with the tested mild cleansing regimens showed comparable, mild barrier and inflammatory effects.',
    limits: 'A short experimental exposure, not daily whole-body bathing over months. The authors called for longer studies. The result argues against assuming every repeated wash causes substantial damage.', access: 'Abstract reviewed',
  },
  {
    id: 'microbiome-stability', title: 'Temporal Stability of the Human Skin Microbiome',
    citation: 'Oh et al. · Cell', year: '2016', kind: 'Study', topic: 'Microbiome',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4860256/', doi: '10.1016/j.cell.2016.04.008',
    finding: 'Sampling 17 skin sites in 12 healthy people over months to years found substantial persistence of individual microbial communities and strains, with variation by person and site.',
    limits: 'An observational study, not a randomized test of bathing routines. It shows resilience in everyday life without proving any cleanser harmless or any particular washing schedule optimal.', access: 'Full-text summary, results, and discussion reviewed',
  },
  {
    id: 'product-dynamics', title: 'The impact of skin care products on skin chemistry and microbiome dynamics',
    citation: 'Bouslimani et al. · BMC Biology', year: '2019', kind: 'Study', topic: 'Microbiome',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6560912/', doi: '10.1186/s12915-019-0660-6',
    finding: 'An 11-person, nine-week study of four products found individualized chemical and microbial responses. Deodorant and foot powder increased measured microbial diversity; lotions had little effect on that measure.',
    limits: 'Small study of specific products, without evidence that the changes improved or worsened clinical health. Product-free does not automatically mean more diverse, and more diverse does not automatically mean healthier.', access: 'Abstract reviewed',
  },
  {
    id: 'cleansers', title: 'Skin biophysical assessments of four types of soaps by forearm in-use test',
    citation: 'Khosrowpour et al. · Journal of Cosmetic Dermatology', year: '2022', kind: 'Study', topic: 'Cleansing',
    url: 'https://pubmed.ncbi.nlm.nih.gov/34741581/', doi: '10.1111/jocd.14589',
    finding: 'A nonblinded comparison in 60 healthy participants tested four cleansers on forearms. The authors reported less barrier disruption with the synthetic detergent cleanser (syndet). Formulation matters.',
    limits: 'Small groups, no blinding, and forearm measurements. This does not compare an ordinary whole-body routine with long-term water-only bathing.', access: 'Abstract reviewed',
  },
  {
    id: 'dry-skin', title: 'Dermatologists’ top tips for relieving dry skin',
    citation: 'American Academy of Dermatology', year: 'Living guidance', kind: 'Guidance', topic: 'Cleansing',
    url: 'https://www.aad.org/public/everyday-care/skin-care-basics/dry/dermatologists-tips-relieve-dry-skin',
    finding: 'For dry skin, dermatologists recommend brief, warm bathing, using gentle cleanser only where needed, and moisturizer afterward. A thick all-over lather is not the goal.',
    limits: 'Advice for managing dry skin, not a randomized comparison of all bathing habits or proof that everyone needs the same products.', access: 'Full guidance reviewed',
  },
  {
    id: 'handwashing', title: 'Hand Hygiene Frequently Asked Questions',
    citation: 'Centers for Disease Control and Prevention', year: 'Living guidance', kind: 'Guidance', topic: 'Cleansing',
    url: 'https://www.cdc.gov/clean-hands/faq/index.html',
    finding: 'Soap and running water help remove germs and chemicals. For everyday handwashing, scrub for at least 20 seconds.',
    limits: 'Hand hygiene prevents transmission to yourself and other people. It is a different question from how much cleanser to use over the rest of the body.', access: 'Full guidance reviewed',
  },
  {
    id: 'antibacterial', title: 'Skip the Antibacterial Soap; Use Plain Soap and Water',
    citation: 'U.S. Food and Drug Administration', year: 'Living guidance', kind: 'Guidance', topic: 'Cleansing',
    url: 'https://www.fda.gov/consumers/consumer-updates/skip-antibacterial-soap-use-plain-soap-and-water',
    finding: 'The FDA says evidence is insufficient to show that consumer antibacterial washes prevent illness better than plain soap and water.',
    limits: 'This guidance addresses consumer washes. It does not invalidate antiseptics used for specific medical purposes or make soap unnecessary.', access: 'Full guidance reviewed',
  },
  {
    id: 'diet-odor', title: 'The effect of meat consumption on body odor attractiveness',
    citation: 'Havlíček & Lenochová · Chemical Senses', year: '2006', kind: 'Study', topic: 'Scent',
    url: 'https://pubmed.ncbi.nlm.nih.gov/16891352/', doi: '10.1093/chemse/bjl017',
    finding: 'Seventeen men crossed over between two-week meat and nonmeat diets. Thirty women rated collected underarm odor. Samples from the nonmeat phase were rated more pleasant, more attractive, and less intense.',
    limits: 'A small, short experiment using subjective ratings. A nonmeat diet is not necessarily vegan. It did not show that anyone became odorless or that diet replaces deodorant for everyone.', access: 'Abstract reviewed',
  },
  {
    id: 'deodorant-microbiome', title: 'The effect of habitual and experimental antiperspirant and deodorant product use on the armpit microbiome',
    citation: 'Urban et al. · PeerJ', year: '2016', kind: 'Study', topic: 'Microbiome',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4741080/', doi: '10.7717/peerj.1605',
    finding: 'Stopping and restarting underarm products changed bacterial abundance and community composition. Antiperspirant reduced culturable bacterial abundance after application.',
    limits: 'A small, short study with microbiological endpoints. It did not establish whether these changes improve or damage health. Different bacterial communities do not automatically mean disease.', access: 'Full text reviewed',
  },
  {
    id: 'skin-microbiome', title: 'Topographical and temporal diversity of the human skin microbiome',
    citation: 'Grice et al. · Science', year: '2009', kind: 'Study', topic: 'Microbiome',
    url: 'https://pubmed.ncbi.nlm.nih.gov/19478181/',
    finding: 'Skin microbial communities varied with the characteristics of the sampled body site. There is no single bacterial profile shared by every patch of skin.',
    limits: 'A foundational descriptive study, not a clinical trial of a product or of stopping skin care. Microbial diversity alone is not a validated score for a healthy routine.', access: 'Abstract reviewed',
  },
  {
    id: 'essential-oils', title: 'Allergic contact dermatitis to essential oils',
    citation: 'Ismail & Nixon · DermNet', year: '2020', kind: 'Guidance', topic: 'Ingredients',
    url: 'https://dermnetnz.org/topics/allergic-contact-dermatitis-to-essential-oils',
    finding: 'Essential oils can cause allergic contact dermatitis. Plant origin does not protect an ingredient from triggering a skin reaction.',
    limits: 'Clinical education about allergy, not a claim that every oil causes reactions in every user. It does not establish essential oils as necessary for skin health.', access: 'Full guidance reviewed',
  },
  {
    id: 'bath-oils', title: 'Bath Safety: how to use essential oils safely in the bath',
    citation: 'Tisserand Institute', year: 'Living guidance', kind: 'Guidance', topic: 'Ingredients',
    url: 'https://tisserandinstitute.org/safety/bath-safety/',
    finding: 'Essential oils do not dissolve in bathwater. Salt does not disperse them; concentrated droplets can remain in contact with skin.',
    limits: 'Specialist aromatherapy safety guidance, not a controlled trial. The institute offers paid education. We use this source for dispersion safety, not evidence of therapeutic benefit.', access: 'Full guidance reviewed',
  },
  {
    id: 'magnesium', title: 'Myth or Reality—Transdermal Magnesium?',
    citation: 'Gröber, Werner, Vormann & Kisters · Nutrients', year: '2017', kind: 'Review', topic: 'Ingredients',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5579607/', doi: '10.3390/nu9080813',
    finding: 'This review found inadequate support for marketing transdermal magnesium as an effective way to replenish magnesium levels.',
    limits: 'A narrative review of limited, heterogeneous studies. It does not prove zero absorption in every formulation, and it does not measure the enjoyment of a bath.', access: 'Full text reviewed',
  },
  {
    id: 'detox', title: '“Detoxes” and “Cleanses”: What You Need To Know',
    citation: 'National Center for Complementary and Integrative Health', year: 'Living guidance', kind: 'Guidance', topic: 'Ingredients',
    url: 'https://www.nccih.nih.gov/health/detoxes-cleanses',
    finding: 'Research does not convincingly support detox diets for removing toxins. Available human studies are few and often methodologically weak.',
    limits: 'This overview primarily covers detox programs and diets. It is not a trial of water-only bathing; that distinction matters when discussing a “skin detox.”', access: 'Full guidance reviewed',
  },
  {
    id: 'preservatives', title: 'Microbiological Safety and Cosmetics',
    citation: 'U.S. Food and Drug Administration', year: 'Living guidance', kind: 'Guidance', topic: 'Ingredients',
    url: 'https://www.fda.gov/cosmetics/potential-contaminants-cosmetics/microbiological-safety-and-cosmetics',
    finding: 'Cosmetics can become contaminated by microorganisms. Ineffective preservation and consumer use can contribute to contamination.',
    limits: 'A safety overview, not an endorsement of every preservative or a comparison of all formulations. “Preservative-free” is not by itself proof of a safer product.', access: 'Full guidance reviewed',
  },
  {
    id: 'sunscreen-trial', title: 'Sunscreen and prevention of skin aging: a randomized trial',
    citation: 'Hughes, Williams, Baker & Green · Annals of Internal Medicine', year: '2013', kind: 'Study', topic: 'Sun & treatments',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23732711/?dopt=Abstract', doi: '10.7326/0003-4819-158-11-201306040-00002',
    finding: 'In 903 Australian adults younger than 55, daily sunscreen use produced less progression of measured skin aging than discretionary use over 4.5 years (relative odds 0.76; 95% CI 0.59–0.98).',
    limits: 'The outcome was skin microtopography, not biological aging or lifespan. Participants and climate limit generalization. Discretionary use is not the same as no sunscreen.', access: 'Abstract reviewed',
  },
  {
    id: 'sun-guidance', title: 'Practice Safe Sun',
    citation: 'American Academy of Dermatology', year: 'Living guidance', kind: 'Guidance', topic: 'Sun & treatments',
    url: 'https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/practice-safe-sun',
    finding: 'Use shade, protective clothing, and broad-spectrum, water-resistant SPF 30 or higher on exposed skin. Reapply as directed, including after swimming or sweating.',
    limits: 'Clinical prevention guidance. Sunscreen is one part of sun protection, and no sunscreen blocks all ultraviolet radiation.', access: 'Full guidance reviewed',
  },
  {
    id: 'moisturizers', title: 'Emollients and moisturisers for eczema',
    citation: 'van Zuuren et al. · Cochrane Database of Systematic Reviews', year: '2017', kind: 'Review', topic: 'Sun & treatments',
    url: 'https://www.cochrane.org/evidence/CD012119_emollients-and-moisturisers-eczema', doi: '10.1002/14651858.CD012119.pub2',
    finding: 'Across 77 trials involving 6,603 participants, moisturizers generally helped eczema control and some comparisons showed fewer flares.',
    limits: 'Evidence quality differed by outcome and most studies had high or unclear risk of bias. Findings in eczema do not establish that every person with comfortable skin needs a moisturizer.', access: 'Review summary and abstract reviewed',
  },
  {
    id: 'tretinoin', title: 'Topical tretinoin for treating photoaging: A systematic review of randomized controlled trials',
    citation: 'Sitohang et al. · International Journal of Women’s Dermatology', year: '2022', kind: 'Review', topic: 'Sun & treatments',
    url: 'https://pubmed.ncbi.nlm.nih.gov/35620028/', doi: '10.1097/JW9.0000000000000003',
    finding: 'Seven randomized trials supported improvement in visible signs of photoaging with topical tretinoin.',
    limits: 'Formulas and outcome measures varied, and most participants were women. Evidence for this medicine is not evidence for every cosmetic retinol product. Suitability and irritation need individual consideration.', access: 'Abstract reviewed',
  },
  {
    id: 'curly-hair', title: '6 curly hair care tips from dermatologists',
    citation: 'American Academy of Dermatology', year: '2022', kind: 'Guidance', topic: 'Hair & hydration',
    url: 'https://www.aad.org/public/everyday-care/hair-scalp-care/hair/curly-hair-care',
    finding: 'Curly hair often benefits from less frequent washing, conditioning, and gentle detangling while wet. Scalp care still matters.',
    limits: 'Practical dermatology guidance, not a comparison of every curl routine. It recommends washing at least every two to three weeks; it does not endorse indefinitely avoiding shampoo.', access: 'Full guidance reviewed',
  },
  {
    id: 'water', title: 'Dietary water affects human skin hydration and biomechanics',
    citation: 'Palma, Marques, Bujan & Rodrigues · Clinical, Cosmetic and Investigational Dermatology', year: '2015', kind: 'Study', topic: 'Hair & hydration',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4529263/', doi: '10.2147/CCID.S86822',
    finding: 'A study of 49 healthy women reported changes in skin hydration measurements after increased water intake, especially among those with lower baseline intake.',
    limits: 'Small, short, and not a randomized placebo-controlled trial. It does not show that more water clears acne, shrinks pores, or replaces moisturizer. It is not a universal water-intake prescription.', access: 'Full text reviewed',
  },
];

export const getSource = (id: string): Source => {
  const source = sources.find((entry) => entry.id === id);
  if (!source) throw new Error(`Unknown source: ${id}`);
  return source;
};
