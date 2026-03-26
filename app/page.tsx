@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@400;700&display=swap');

:root {
  --color-background: #fff8f5;
  --color-text: #4a4a4a;
  --color-muted: #b8b0ac;
  --color-pink-light: #fcdce6;
  --color-pink-medium: #f7bfc6;
  --color-beige: #f5e6dd;
  --color-rose-gold: #f2d1c9;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}

.container {
  max-width: 800px;
  padding: 2rem;
}

.main-heading {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.sub-heading {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--color-pink-medium);
}

.bio {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text);
}
