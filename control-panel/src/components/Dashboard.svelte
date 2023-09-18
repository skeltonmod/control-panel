<script>
    import { faker } from "@faker-js/faker";
    const users = [];

    for (let i = 0; i < 32; i++) {
        users.push({
            name: faker.person.fullName(),
            post_count: faker.number.int(400),
            id: faker.string.uuid(),
        });
    }
    console.log(users);
</script>

<table class="tui-table">
    <thead>
        <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Post Count</th>
        </tr>
    </thead>
    <tbody>
        {#each users as user}
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.post_count}</td>
            </tr>
        {/each}
    </tbody>
</table>
