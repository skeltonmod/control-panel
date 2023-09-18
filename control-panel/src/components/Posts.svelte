<script>
    import { faker } from "@faker-js/faker";
    const status = [
        {
            name: "posted",
            color: "green",
        },
        {
            name: "pending",
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
    const posts = [];

    for (let i = 0; i < 32; i++) {
        posts.push({
            name: faker.lorem.sentence(1),
            url: faker.internet.url(),
            status: status[Math.floor(Math.random() * status.length)],
        });
    }
    console.log(posts);
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
