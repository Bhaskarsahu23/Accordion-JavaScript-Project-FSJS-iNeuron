const faqData = [
  {
    id: 1,
    question: 'Who are we?',
    answer:
      'We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.',
  },
  {
    id: 2,
    question: 'What do we do?',
    answer:
      'Building learning communities with Our Affordable & Competent Courses',
  },
  {
    id: 3,
    question: 'Are the community classes boring?',
    answer: 'No, not at all!!!',
  },
];

const accordianBody = document.querySelector('.accordian_body');

function createFaq() {
  for (const faqD of faqData) {
    // creating elements
    const faq_div = document.createElement('div');
    const faq_header = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    // adding class
    faq_div.classList.add('faq');
    faq_header.classList.add('faq_header');
    p.classList.add('hidden');
    // updating innnetext
    h3.innerText = faqD.question;
    p.innerText = faqD.answer;
    // appending element
    faq_header.append(h3);
    faq_div.append(faq_header);
    faq_div.append(p);
    accordianBody.append(faq_div);
    // btn element
    const show_btn = document.createElement('button');
    show_btn.classList.add('show_btn');
    show_btn.innerText = '+';
    faq_header.append(show_btn);
    show_btn.addEventListener('click', () => {
      p.classList.toggle('hidden');
      if (show_btn.innerText === '-') {
        show_btn.innerText = '+';
      } else {
        show_btn.innerText = '-';
      }
    });
  }
}

createFaq();
