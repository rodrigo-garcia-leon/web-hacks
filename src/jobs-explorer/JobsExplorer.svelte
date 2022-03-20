<script>
  import { onMount } from 'svelte';

  let jobs = [];
  let filteredJobs = [];
  let keywords = [];
  let selectedKeywords = [];
  let locations = [];
  let selectedLocations = [];

  function getFilteredJobs() {
    return jobs.reverse().filter(job => {
      if (
        selectedKeywords.length > 0 &&
        !selectedKeywords.some(keyword => job.keywords.includes(keyword))
      ) {
        return false;
      }

      if (selectedLocations.length > 0 && !selectedLocations.includes(job.location)) {
        return false;
      }

      return true;
    });
  }

  onMount(async () => {
    const res = await fetch('https://web-hacks.rodrigogarcia.me/api/jobs');

    jobs = await res.json();
    keywords = jobs
      .map(job => job.keywords)
      .flat()
      .filter(Boolean)
      .filter((v, i, a) => a.indexOf(v) === i);
    locations = jobs
      .map(job => job.location)
      .filter(Boolean)
      .filter((v, i, a) => a.indexOf(v) === i);

    filteredJobs = getFilteredJobs();
  });

  function handleKeywordClick(event) {
    event.preventDefault();

    const keyword = event.target.innerText;
    const index = selectedKeywords.indexOf(keyword);

    if (index === -1) {
      selectedKeywords.push(keyword);
    } else {
      selectedKeywords.splice(index, 1);
    }

    selectedKeywords = selectedKeywords;
    filteredJobs = getFilteredJobs();
  }

  function handleLocationClick(event) {
    event.preventDefault();

    const location = event.target.innerText;
    const index = selectedLocations.indexOf(location);

    if (index === -1) {
      selectedLocations.push(location);
    } else {
      selectedLocations.splice(index, 1);
    }

    selectedLocations = selectedLocations;
    filteredJobs = getFilteredJobs();
  }
</script>

<main>
  <h1>Jobs Explorer</h1>
  <div id="controls-container">
    <ul class="keywords">
      {#each keywords as keyword}
        <li>
          <a
            href="#"
            class={selectedKeywords.includes(keyword) ? 'selected' : ''}
            on:click={handleKeywordClick}>{keyword}</a
          >
        </li>
      {/each}
    </ul>
    <ul class="locations">
      {#each locations as location}
        <li>
          <a
            href="#"
            class={selectedLocations.includes(location) ? 'selected' : ''}
            on:click={handleLocationClick}>{location}</a
          >
        </li>
      {/each}
    </ul>
  </div>
  <div id="jobs-container">
    {#each filteredJobs as { url, position, modified, company, location, keywords }}
      <div class="job">
        <h3>
          <a href={url} target="_blank" rel="noopener noreferrer nofollow">{position}</a>
        </h3>
        <p class="date">{modified}</p>
        <p class="company">{company}</p>
        <p class="location">{location}</p>
        {#if keywords.length}
          <ul class="keywords">
            {#each keywords as keyword}
              <li>{keyword}</li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </div>
</main>

<style>
  .job {
    border: solid 1px var(--color-1);
  }

  .keywords a,
  .locations a {
    color: var(--color-2);
  }
  a.selected {
    color: var(--color-1);
  }
</style>
