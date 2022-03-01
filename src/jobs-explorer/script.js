class JobsExplorer extends HTMLElement {
  constructor() {
    super();

    this.jobs = [];
  }

  async connectedCallback() {
    await this.fetchJobs();

    this.render();
  }

  async fetchJobs() {
    const jobs = await (await fetch('https://web-hacks.rodrigogarcia.me/api/jobs')).json();

    this.jobs = jobs;
  }

  render() {
    this.innerHTML = `<main>
  <h1>Jobs Explorer</h1>
  <section id="jobs">
    <h2>Jobs</h2>
    <div id="jobs-container">
      ${this.jobs
        .reverse()
        .map(
          job => `<div class="job">
<h3><a href="${job.url}" target="_blank" rel="noopener noreferrer nofollow">${job.position}</a></h3>
<p class="date">${job.modified}</p>
<p class="company">${job.company}</p>
<p class="location">${job.location}</p>
${
  job.keywords.length
    ? `<ul class="keywords">
${job.keywords.map(keyword => `<li>${keyword}</li>`).join('')}
<ul>`
    : ''
}
</div>`,
        )
        .join('')}
    </div>
  </section>
</main>`;
  }
}

customElements.define('jobs-explorer', JobsExplorer);
