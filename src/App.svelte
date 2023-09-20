<script>
  import Dashboard from "./components/Dashboard.svelte";
  import Posts from "./components/Posts.svelte";
  import { EasyrouteProvider, RouterOutlet } from "@easyroute/svelte";
  import router from "./router";
</script>

<div class="container" style="margin-top: 2rem;">
  <div class="row">
    <div class="col">
      <div class="tui-window">
        <fieldset class="tui-fieldset">
          <legend>GNN CONTROL PANEL</legend>
          <div>
            <EasyrouteProvider {router}>
              <RouterOutlet />
            </EasyrouteProvider>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</div>
