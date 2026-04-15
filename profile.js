const root = document.getElementById("profile-root");

root.innerHTML = `
<article data-testid="test-profile-card">

  <h2 data-testid="test-user-name">Abdul Samad</h2>

  <p data-testid="test-user-bio">
    Frontend developer learning modern web development and building real-world projects.
  </p>

  <img 
    data-testid="test-user-avatar"
    src="https://i.pravatar.cc/150"
    alt="User avatar"
  />

  <p data-testid="test-user-time">${Date.now()}</p>

  <nav data-testid="test-user-social-links">
    <a data-testid="test-user-social-twitter" href="#">Twitter</a>
    <a data-testid="test-user-social-github" href="#">GitHub</a>
  </nav>

  <section>
    <h3>Hobbies</h3>
    <ul data-testid="test-user-hobbies">
      <li>Coding</li>
      <li>Gaming</li>
      <li>Reading</li>
    </ul>
  </section>

  <section>
    <h3>Dislikes</h3>
    <ul data-testid="test-user-dislikes">
      <li>Slow WiFi</li>
      <li>Bugs</li>
    </ul>
  </section>

</article>
`;
