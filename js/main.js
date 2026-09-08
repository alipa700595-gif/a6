/* Pupil Read Stone - Interactive Reading Engine */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(other => other.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // Reading Level Explorer Tabs
  const labTabs = document.querySelectorAll('.lab-tab');
  const labTitle = document.getElementById('lab-title');
  const labDesc = document.getElementById('lab-desc');
  const labImg = document.getElementById('lab-img');
  const labList = document.getElementById('lab-items');

  const readingData = {
    phonemic: {
      title: "Stage I: Phonemic Decoding & Orthographic Mapping",
      desc: "Establishing neural letter-sound correspondences, syllable segmentation, and rapid sight-word automaticity through multisensory phonics.",
      img: "images/classroom-structured-literacy-instruction.jpg",
      items: ["Systematic Synthetic Phonics Rules", "Phoneme-Grapheme Mapping Workbooks", "Decodable Text Reader Series", "Auditory Discrimination Drills"]
    },
    socratic: {
      title: "Stage II: Syntactic Flow & Socratic Text Inquiries",
      desc: "Transitioning from word decoding into sentence architecture, paragraph parsing, and guided dialectical classroom inquiries.",
      img: "images/collaborative-student-study-seminar.jpg",
      items: ["Complex Sentence Syntax Parsing", "Socratic Dialogue Seminar Guides", "Vocabulary Morphology & Latin Roots", "Guided Reading Comprehension Maps"]
    },
    deepread: {
      title: "Stage III: Deep Immersion & Hermeneutic Synthesis",
      desc: "Advanced reading endurance: engaging multi-chapter classical literature, philosophical essays, and historical primary sources.",
      img: "images/open-book-vintage-pages-reading.jpg",
      items: ["Classical Great Books Curation", "Marginalia Annotation Methodologies", "Rhetorical Structure Analysis", "Long-Form Cognitive Focus Building"]
    },
    atelier: {
      title: "Stage IV: Scholarly Thesis & Expository Writing",
      desc: "The culmination of reading mastery: translating rigorous textual comprehension into original essays, critiques, and scholarly presentations.",
      img: "images/reading-desk-antique-lamp-notebook.jpg",
      items: ["Aristotelian Rhetorical Frameworks", "Evidence-Based Expository Writing", "Peer Colloquium Debates", "Scholarly Research Monograph Projects"]
    }
  };

  labTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      labTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.getAttribute('data-stage');
      const data = readingData[key];
      if (data && labTitle && labDesc && labImg && labList) {
        labTitle.textContent = data.title;
        labDesc.textContent = data.desc;
        labImg.src = data.img;
        labList.innerHTML = data.items.map(item => `<li><span>${item}</span> <strong style="color:var(--crimson-accent);">Core Pillar</strong></li>`).join('');
      }
    });
  });

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
