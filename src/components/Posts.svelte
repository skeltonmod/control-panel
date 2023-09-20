<script>
  import useCurrentRoute from "@easyroute/svelte/useCurrentRoute";
  import routes from "../utils/APIRoutes";
  import { onDestroy } from "svelte";

  const status = [
    {
      name: "posted",
      color: "green",
    },
    {
      name: "scheduled",
      color: "yellow",
    },
    {
      name: "posting",
      color: "coral",
    },
    {
      name: "failed",
      color: "red",
    },
  ];
  let posts = [];
  const currentRoute = useCurrentRoute();
  (async () => {
    await routes.fetch_posts($currentRoute.params.id).then((r) => {
      posts = r.data.map((item) => {
        return {
          id: item.id,
          name: item.article ? item.article.title : "No Title",
          status: status.filter((data) => data.name == item.post_status)[0],
          url: item.website_url || "No Site",
          scheduled_at: item.scheduled_at,
          updated_at: item.updated_at
        };
      });
    });
  })();

  const handleClick = async (e) => {
    await routes.post_article({
        post_ids: [e.target.value]
    }).then(r => {console.log(r)})
  };
</script>

<table class="tui-table">
  <thead>
    <tr>
      <th>Post Name</th>
      <th>URL</th>
      <th>Status</th>
      <th>Scheduled At</th>
      <th>Updated At</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {#if posts.length > 0}
      {#each posts as post}
        <tr>
          <td>{post.name}</td>
          <td>{post.url}</td>
          <td style="color: {post.status.color}">{post.status.name}</td>
          <td>{post.scheduled_at}</td>
          <td>{post.updated_at}</td>
          {#if post.status.name != "posted"}
            <button value={post.id} on:click={handleClick} class="tui-button">Post</button>
          {/if}

          {#if post.status.name == "posted"}
            <button class="tui-button disabled">Posted</button>
          {/if}
        </tr>
      {/each}
    {:else}
      <h1>No Data</h1>
    {/if}
  </tbody>
</table>
