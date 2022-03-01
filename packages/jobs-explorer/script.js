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
    <div id="jobs">
        <h2>Jobs</h2>
        <p>${this.jobs}</p>
    </div>
</main>`;
  }
}

customElements.define('jobs-explorer', JobsExplorer);
