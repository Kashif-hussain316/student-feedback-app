function validateFeedback(name, course, feedback) {
  if (!name.trim() || !course.trim() || !feedback.trim()) {
    return 'Please complete all fields.';
  }
  return '';
}

function getFeedback() {
  try {
    return JSON.parse(localStorage.getItem('studentFeedback') || '[]');
  } catch {
    return [];
  }
}

function saveFeedback(items) {
  localStorage.setItem('studentFeedback', JSON.stringify(items));
}

function renderFeedback() {
  const list = document.getElementById('feedback-list');
  const items = getFeedback();
  list.replaceChildren();

  if (!items.length) {
    const empty = document.createElement('p');
    empty.textContent = 'No feedback submitted yet.';
    list.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'feedback-card';
    const title = document.createElement('h3');
    title.textContent = `${item.name} — ${item.course}`;
    const text = document.createElement('p');
    text.textContent = item.feedback;
    card.append(title, text);
    list.appendChild(card);
  });
}

if (typeof document !== 'undefined') {
  document.getElementById('feedback-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const feedback = document.getElementById('feedback').value;
    const error = validateFeedback(name, course, feedback);
    document.getElementById('error-message').textContent = error;
    if (error) return;

    const items = getFeedback();
    items.unshift({ name: name.trim(), course: course.trim(), feedback: feedback.trim() });
    saveFeedback(items);
    event.target.reset();
    renderFeedback();
  });
  renderFeedback();
}

if (typeof module !== 'undefined') module.exports = { validateFeedback };