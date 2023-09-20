<script>
    import { faker } from "@faker-js/faker";
    import routes from "../utils/APIRoutes";
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

    (async () => {
        await routes.fetch_posts('9968b4a6-3908-4592-a029-362481ae1a24').then(r => {
            posts = r.data.map(item => {
                return {
                    name: item.article.title,
                    status: status.filter(data => data.name == item.post_status)[0],
                    url: item.website_url || "No Site"
                }
            })
        });
    })();
</script>

<table class="tui-table">
    <thead>
        <tr>
            <th>Post Name</th>
            <th>URL</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {#each posts as post}
            <tr>
                <td>{post.name}</td>
                <td>{post.url}</td>
                <td style="color: {post.status.color}">{post.status.name}</td>

                {#if post.status.name != 'posted'}
                    <button class="tui-button">Post</button>
                {/if}

                {#if post.status.name == 'posted'}
                    <button class="tui-button disabled">Posted</button>
                {/if}
            </tr>
        {/each}
    </tbody>
</table>
