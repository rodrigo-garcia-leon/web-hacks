<script>
  import { onMount } from 'svelte';

  let jobs = [];

  onMount(async () => {
    const res = await fetch('https://web-hacks.rodrigogarcia.me/api/jobs');

    jobs = await res.json();
  });
</script>

<main>
  <h1>Jobs Explorer</h1>
  <section id="jobs">
    <h2>Jobs</h2>
    <div id="jobs-container">
      {#each jobs.reverse() as { url, position, modified, company, location, keywords }}
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
  </section>
</main>

<style>
  .job {
    border: solid 1px var(--color-1);
  }
</style>
