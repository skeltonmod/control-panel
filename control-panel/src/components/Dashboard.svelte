<script>
    import { faker } from "@faker-js/faker";
    import routes from "../utils/APIRoutes";

    let users = [];

    (async () => {
        await routes.fetch_users().then(r => {
            users = r.data
        });
    })();
</script>

<table class="tui-table">
    <thead>
        <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {#each users as user}
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td><button class="tui-button">View</button> <button class="tui-button">Impersonate</button></td>
            </tr>
        {/each}
    </tbody>
</table>
