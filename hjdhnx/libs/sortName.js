





<!DOCTYPE html>
<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark"  data-a11y-animated-images="system" data-a11y-link-underlines="false">

    <style>
  /* for each iteration, uncomment the CSS variable */

  /* light themes */
  [data-color-mode="light"][data-light-theme*="light"],
  [data-color-mode="auto"][data-light-theme*="light"] {
    /* iteration 1 */
    --border-color-iteration-1: #C8CCD0;
    /* iteration 2 */
    --border-color-iteration-2: #BABFC5;
    /* iteration 3 */
    --border-color-iteration-3: #A6ADB4;
    /* iteration final */
    /* --border-color-iteration-4: #868F99; */

    /* the first value is the final step, which falls back to previous iterations */
    --control-borderColor-rest: var(--border-color-iteration-4, var(--border-color-iteration-3, var(--border-color-iteration-2, var(--border-color-iteration-1)))) !important;
  }

  /* dark themes */
  [data-color-mode="dark"][data-dark-theme*="dark"],
  [data-color-mode="auto"][data-light-theme*="dark"] {
    /* iteration 1 */
    --border-color-iteration-1: #363940;
    /* iteration 2 */
    --border-color-iteration-2: #3F434B;
    /* iteration 3 */
    --border-color-iteration-3: #4B5159;
    /* iteration final */
    /* --border-color-iteration-4: #666E79; */

    /* the first value is the final step, which falls back to previous iterations */
    --control-borderColor-rest: var(--border-color-iteration-4, var(--border-color-iteration-3, var(--border-color-iteration-2, var(--border-color-iteration-1)))) !important;
  }

  [data-color-mode="dark"][data-dark-theme="dark_dimmed"],
  [data-color-mode="dark"][data-dark-theme="light_high_contrast"],
  [data-color-mode="dark"][data-dark-theme="dark_high_contrast"],
  [data-color-mode="light"][data-light-theme="dark_dimmed"],
  [data-color-mode="light"][data-light-theme="light_high_contrast"],
  [data-color-mode="light"][data-light-theme="dark_high_contrast"] {
    /* skip these themes, use the fallback */
    --control-borderColor-rest: initial !important;
  }

  @media (prefers-color-scheme: dark) {
    /* dark colors in dark mode */
    [data-color-mode="auto"][data-dark-theme*="dark"] {
      /* iteration 1 */
      --border-color-iteration-1: #363940;
      /* iteration 2 */
      --border-color-iteration-2: #3F434B;
      /* iteration 3 */
      --border-color-iteration-3: #4B5159;
      /* iteration final */
      /* --border-color-iteration-4: #666E79; */

      /* the first value is the final step, which falls back to previous iterations */
      --control-borderColor-rest: var(--border-color-iteration-4, var(--border-color-iteration-3, var(--border-color-iteration-2, var(--border-color-iteration-1)))) !important;
    }

    /* light colors in dark mode */
    [data-color-mode="auto"][data-dark-theme*="light"] {
      /* iteration 1 */
      --border-color-iteration-1: #C8CCD0;
      /* iteration 2 */
      --border-color-iteration-2: #BABFC5;
      /* iteration 3 */
      --border-color-iteration-3: #A6ADB4;
      /* iteration final */
      /* --border-color-iteration-4: #868F99; */

      /* the first value is the final step, which falls back to previous iterations */
      --control-borderColor-rest: var(--border-color-iteration-4, var(--border-color-iteration-3, var(--border-color-iteration-2, var(--border-color-iteration-1)))) !important;
      }

    [data-color-mode="auto"][data-dark-theme="dark_dimmed"],
    [data-color-mode="auto"][data-dark-theme="light_high_contrast"],
    [data-color-mode="auto"][data-dark-theme="dark_high_contrast"] {
      /* skip these themes, use the fallback */
      --control-borderColor-rest: initial !important;
    }
  }

  @media (prefers-color-scheme: light) {
    /* dark colors in light mode */
    [data-color-mode="auto"][data-light-theme*="dark"] {
      /* iteration 1 */
      --border-color-iteration-1: #363940;
      /* iteration 2 */
      --border-color-iteration-2: #3F434B;
      /* iteration 3 */
      --border-color-iteration-3: #4B5159;
      /* iteration final */
      /* --border-color-iteration-4: #666E79; */

      /* the first value is the final step, which falls back to previous iterations */
      --control-borderColor-rest: var(--border-color-iteration-4, var(--border-color-iteration-3, var(--border-color-iteration-2, var(--border-color-iteration-1)))) !important;
    }

    /* light colors in light mode */
    [data-color-mode="auto"][data-light-theme*="light"] {
      /* iteration 1 */
      --border-color-iteration-1: #C8CCD0;
      /* iteration 2 */
      --border-color-iteration-2: #BABFC5;
      /* iteration 3 */
      --border-color-iteration-3: #A6ADB4;
      /* iteration final */
      /* --border-color-iteration-4: #868F99; */

      /* the first value is the final step, which falls back to previous iterations */
      --control-borderColor-rest: var(--border-color-iteration-4, var(--border-color-iteration-3, var(--border-color-iteration-2, var(--border-color-iteration-1)))) !important;
    }

    [data-color-mode="auto"][data-light-theme="dark_dimmed"],
    [data-color-mode="auto"][data-light-theme="light_high_contrast"],
    [data-color-mode="auto"][data-light-theme="dark_high_contrast"] {
      /* skip these themes, use the fallback */
      --control-borderColor-rest: initial !important;
    }
  }
</style>


  <head>
    <meta charset="utf-8">
  <script type="text/javascript" nonce="babf6eea3d5847129172b8eb214" src="//local.adguard.org?ts=1697152839730&amp;type=content-script&amp;dmn=github.com&amp;url=https%3A%2F%2Fgithub.com%2Fhjdhnx%2Fdr_py%2Fblob%2Fmain%2Flibs%2FsortName.js&amp;app=chrome.exe&amp;css=2&amp;js=1&amp;rel=1&amp;rji=1&amp;sbe=1&amp;stealth=1&amp;st-dnt"></script>
<script type="text/javascript" nonce="babf6eea3d5847129172b8eb214" src="//local.adguard.org?ts=1697152839730&amp;name=%E9%9F%B3%E8%A7%86%E9%A2%91%E9%80%9A%E7%94%A8%E4%B8%8B%E8%BD%BD%E5%99%A8&amp;name=AdGuard%20Extra&amp;name=AdGuard%20Popup%20Blocker&amp;type=user-script"></script><link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
  <link rel="preconnect" href="https://github.githubassets.com" crossorigin>
  <link rel="preconnect" href="https://avatars.githubusercontent.com">

  


  <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/light-b92e9647318f.css" /><link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/dark-5d486a4ede8e.css" /><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-27c8d635e4e5.css" /><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-8438e75afd36.css" /><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-bf5665b96628.css" /><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-c414b5ba1dce.css" /><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-e5868b7374db.css" /><link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-299ac9c64ec0.css" /><link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-3a26e78ad0ff.css" />
  
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/primer-primitives-363ec1831c26.css" />
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/primer-d6dcdf72e61d.css" />
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/global-faa25eb56e2e.css" />
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/github-933ef5369a60.css" />
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/code-71ecd5638fbf.css" />

  

  <script type="application/json" id="client-env">{"locale":"en","featureFlags":["failbot_handle_non_errors","geojson_azure_maps","hovercard_show_on_focus","image_metric_tracking","repository_suggester_elastic_search","turbo_experiment_risky","sample_network_conn_type","star_button_focus"]}</script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/wp-runtime-936351c223ed.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_dompurify_dist_purify_js-64d590970fa6.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183-18bf85b8e9f4.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_soft-nav_soft-nav_ts-56133143b228.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/environment-fc6543d75794.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_selector-observer_dist_index_esm_js-2646a2c533e3.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js-d55308df5023.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_relative-time-element_dist_index_js-99e288659d4f.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_fzy_js_index_js-node_modules_github_combobox-nav_dist_index_js-node_modu-344bff-91b70bb50d68.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-29dc30-2a5b7c1aa525.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-59c459-39506636d610.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-2c6968-d14fe7eeba42.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/github-elements-3485f2997bc6.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/element-registry-981cc2eaa259.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_hydro-analytics-client_-978abc0-d5b921292620.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_lit-html_lit-html_js-4ccebb6ebf7d.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_alive-client_dist-bf5aa2-504c8d53fb8e.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_morphdom_dist_morphdom-esm_js-b1fdd7158cf0.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js-9a3541181451.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_color-convert_index_js-35b3ae68c408.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_behaviors_dist_esm_dimensions_js-node_modules_github_hotkey_dist_-8755d2-f721427ba08d.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_session-resume_dist_index_js-node_modules_primer_behaviors_dist_e-ac74c6-4e7cf4e77afd.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_paste-markdown_dist_index_esm_js-node_modules_github_quote-select-854ff4-b4a2793be3fe.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_details-dialog_ts-app_assets_modules_github_fetch_ts-add1ab03ecb3.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_updatable-content_ts-ui_packages_hydro-analytics_hydro-analytics_ts-0a5a30c9b976.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_onfocus_ts-app_assets_modules_github_sticky-scroll-into-view_ts-c56a5dfc8975.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_sso_ts-ui_packages-7d50ad-9491f2be61ee.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-2e2258-d77f85c54572.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-f22ac6b94445.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/behaviors-464f50283c96.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-623425af41e1.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/notifications-global-0104a8043aa4.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/code-menu-6bd50a0647d6.js"></script>
  
  <script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/react-lib-210c4b5934c3.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-2e8e7c-cf03673d2172.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Box_Box_js-96a44addc402.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Button_Button_js-node_modules_primer_react_lib-esm_-f6da63-1976b80d3486.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_node_modules_primer_octicons-react_dist_index_esm_js-03b6dd82d40a.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Button_index_js-node_modules_primer_react_lib-esm_O-701f13-047a44a18d3a.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Text_Text_js-node_modules_primer_react_lib-esm_Text-85a14b-0f28951279b7.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_ActionList_index_js-535c8ee1ebe8.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_ActionMenu_ActionMenu_js-2f08ef908241.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_behaviors_dist_esm_scroll-into-view_js-node_modules_primer_react_-04bb1b-a6096689d2d5.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_FormControl_FormControl_js-9b048a5a5ceb.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_react-router-dom_dist_index_js-4a785319b497.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_PageLayout_PageLayout_js-7693f4e3427d.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Dialog_js-node_modules_primer_react_lib-esm_Flash_F-ad64b6-f3217651e114.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_UnderlineNav2_index_js-b739f40cf454.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Avatar_Avatar_js-node_modules_primer_react_lib-esm_-9bd36c-c9a87fd5afd0.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_AvatarStack_AvatarStack_js-node_modules_primer_reac-6d3540-684005f5bdbe.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_primer_react_lib-esm_Breadcrumbs_Breadcrumbs_js-node_modules_primer_reac-31943d-f0539d68eb2b.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_deferred-registry_ts--ebbb92-1ee1e572fd0e.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_react-core_register-app_ts-afd2d748b726.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_ref-selector_RefSelector_tsx-bd2f6d26f4a6.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_blob-anchor_ts-app_assets_modules_github_filter-sort_ts-app_assets_-681869-f63e0555b81f.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-cc11d2-b952d9af4c18.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_react-code-view_pages_CodeView_tsx-58ad5d5611fd.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/react-code-view-b3d664d404df.js"></script>


  <title>dr_py/libs/sortName.js at main · hjdhnx/dr_py</title>



  <meta name="route-pattern" content="/:user_id/:repository/blob/*name(/*path)">

    
  <meta name="current-catalog-service-hash" content="82c569b93da5c18ed649ebd4c2c79437db4611a6a1373e805a3cb001c64130b7">


  <meta name="request-id" content="149E:31F30:2B146E:2EC9EB:65289358" data-turbo-transient="true" /><meta name="html-safe-nonce" content="c9670496bb2e309eb36063b3c920cb16f539ca725f10be5e34eb4aa5642c5c12" data-turbo-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9oamRobngvZHJfcHkvdHJlZS9tYWluL2xpYnMiLCJyZXF1ZXN0X2lkIjoiMTQ5RTozMUYzMDoyQjE0NkU6MkVDOUVCOjY1Mjg5MzU4IiwidmlzaXRvcl9pZCI6Ijg4MDU1NDA1NzMyNjYxMDk3NTAiLCJyZWdpb25fZWRnZSI6ImphcGFuZWFzdCIsInJlZ2lvbl9yZW5kZXIiOiJpYWQifQ==" data-turbo-transient="true" /><meta name="visitor-hmac" content="ddaf73e6f4b2d5ba4fdb794883a0eef1ef3305f2bca413bd061d6309d7e20951" data-turbo-transient="true" />


    <meta name="hovercard-subject-tag" content="repository:533565455" data-turbo-transient>


  <meta name="github-keyboard-shortcuts" content="repository,source-code,file-tree" data-turbo-transient="true" />
  

  <meta name="selected-link" value="repo_source" data-turbo-transient>
  <link rel="assets" href="https://github.githubassets.com/">

    <meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY">
  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
  <meta name="google-site-verification" content="Apib7-x98H0j5cPqHWwSMm6dNU4GmODRoqxLiDzdx9I">

<meta name="octolytics-url" content="https://collector.github.com/github/collect" /><meta name="octolytics-actor-id" content="139020806" /><meta name="octolytics-actor-login" content="gogorotv" /><meta name="octolytics-actor-hash" content="33ae64bcaef0af1496ec86282562404a33089e69734ff890f8fb76f2bdcc1378" />

  <meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-turbo-transient="true" />

  




  

    <meta name="user-login" content="gogorotv">

  <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="viewport" content="width=device-width">
    
      <meta name="description" content="A webServer convert web and x5 movie sites to cms api data - dr_py/libs/sortName.js at main · hjdhnx/dr_py">
      <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <meta property="fb:app_id" content="1401488693436528">
    <meta name="apple-itunes-app" content="app-id=1477376905, app-argument=https://github.com/hjdhnx/dr_py/blob/main/libs/sortName.js" />
      <meta name="twitter:image:src" content="https://opengraph.githubassets.com/f6a30d397de96d17b6808619b1718f66b00400b77ff8d6a2178977198fd57158/hjdhnx/dr_py" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="dr_py/libs/sortName.js at main · hjdhnx/dr_py" /><meta name="twitter:description" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" />
      <meta property="og:image" content="https://opengraph.githubassets.com/f6a30d397de96d17b6808619b1718f66b00400b77ff8d6a2178977198fd57158/hjdhnx/dr_py" /><meta property="og:image:alt" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="600" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="dr_py/libs/sortName.js at main · hjdhnx/dr_py" /><meta property="og:url" content="https://github.com/hjdhnx/dr_py/blob/main/libs/sortName.js" /><meta property="og:description" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" />
      

      <link rel="shared-web-socket" href="wss://alive.github.com/_sockets/u/139020806/ws?session=eyJ2IjoiVjMiLCJ1IjoxMzkwMjA4MDYsInMiOjEyMjE1NzQ0NzAsImMiOjM0MjkwNjk4NjUsInQiOjE2OTcxNTc5ODB9--2c52f7e5a42f761e76e03b26763b5e2b2db007c069176a1b27c056e9abb2b0e5" data-refresh-url="/_alive" data-session-id="b901c9b8379b94b0262d68dba8a5f5afb2b3e5767167059fbd5009fa1e7b15b7">
      <link rel="shared-web-socket-src" href="/assets-cdn/worker/socket-worker-cee473359cfe.js">


        <meta name="hostname" content="github.com">


      <meta name="keyboard-shortcuts-preference" content="all">

        <meta name="expected-hostname" content="github.com">


  <meta http-equiv="x-pjax-version" content="6afe5c8dff9f025aa548435334d1e6cb75c6eb9e3de24bfdddf43f3e0bbeb2f9" data-turbo-track="reload">
  <meta http-equiv="x-pjax-csp-version" content="ee14a7165914197d62e19f664bfb961fcfdfc1ec31939a5c7b137fbab1751c87" data-turbo-track="reload">
  <meta http-equiv="x-pjax-css-version" content="206b919dd058babca1d574c4b804030c6c17c2f6fb9c18590ef364a71ab7f2ee" data-turbo-track="reload">
  <meta http-equiv="x-pjax-js-version" content="e4b1e07ae7d07c860c58f5667291b784638cc35ed934f9fad829e78fa38cdcb7" data-turbo-track="reload">

  <meta name="turbo-cache-control" content="no-preview" data-turbo-transient="">

      <meta name="turbo-cache-control" content="no-cache" data-turbo-transient>
    <meta data-hydrostats="publish">

  <meta name="go-import" content="github.com/hjdhnx/dr_py git https://github.com/hjdhnx/dr_py.git">

  <meta name="octolytics-dimension-user_id" content="49803097" /><meta name="octolytics-dimension-user_login" content="hjdhnx" /><meta name="octolytics-dimension-repository_id" content="533565455" /><meta name="octolytics-dimension-repository_nwo" content="hjdhnx/dr_py" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="533565455" /><meta name="octolytics-dimension-repository_network_root_nwo" content="hjdhnx/dr_py" />



  <meta name="turbo-body-classes" content="logged-in env-production page-responsive">


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <meta name="browser-optimizely-client-errors-url" content="https://api.github.com/_private/browser/optimizely_client/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">
<meta name="color-scheme" content="light dark" />


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive" style="word-wrap: break-word;">
    <div data-turbo-body class="logged-in env-production page-responsive" style="word-wrap: break-word;">
      


    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" class="p-3 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content">Skip to content</a>
      <span data-view-component="true" class="progress-pjax-loader Progress position-fixed width-full">
    <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
</span>      
      


      

        <script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_allex_crc32_lib_crc32_esm_js-node_modules_github_mini-throttle_dist_deco-b38cad-fb30c470f64b.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/vendors-node_modules_github_clipboard-copy-element_dist_index_esm_js-node_modules_delegated-e-b37f7d-4db36910a4bc.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-48ad9d-00e5140a09e8.js"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="https://github.githubassets.com/assets/command-palette-46bb1d1be80b.js"></script>

            <header class="AppHeader">
    

    <div class="AppHeader-globalBar pb-2 js-global-bar">
      <div class="AppHeader-globalBar-start">
          <deferred-side-panel data-url="/_side-panels/global">
  <include-fragment data-target="deferred-side-panel.fragment">
      
  <button aria-label="Open global navigation menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-278f8d3b-7a9d-4869-83eb-3641bac80909" id="dialog-show-dialog-278f8d3b-7a9d-4869-83eb-3641bac80909" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-bg-transparent p-0 color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-three-bars Button-visual">
    <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
</svg>
</button>  

<div class="Overlay--hidden Overlay-backdrop--side Overlay-backdrop--placement-left" data-modal-dialog-overlay>
  <modal-dialog data-target="deferred-side-panel.panel" role="dialog" id="dialog-278f8d3b-7a9d-4869-83eb-3641bac80909" aria-modal="true" aria-disabled="true" aria-labelledby="dialog-278f8d3b-7a9d-4869-83eb-3641bac80909-title" aria-describedby="dialog-278f8d3b-7a9d-4869-83eb-3641bac80909-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade SidePanel">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-278f8d3b-7a9d-4869-83eb-3641bac80909-title">
        Global navigation
      </h1>
            <div data-view-component="true" class="d-flex">
      <div data-view-component="true" class="AppHeader-logo position-relative">
        <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
</div></div>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="dialog-278f8d3b-7a9d-4869-83eb-3641bac80909" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body d-flex flex-column height-full px-2">      <nav aria-label="Site navigation" data-view-component="true" class="ActionList">
  
  <nav-list>
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-hotkey="g d" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;HOME&quot;,&quot;label&quot;:null}" id="item-50c5d538-d80b-4596-97ac-5f40b79476e5" href="/dashboard" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-home">
    <path d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Home
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES&quot;,&quot;label&quot;:null}" id="item-daa3b91c-e993-4339-a8c7-caa5d12ae946" href="/issues" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Issues
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS&quot;,&quot;label&quot;:null}" id="item-316059e2-5799-431d-8c14-d2bbde81ea28" href="/pulls" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Pull requests
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DISCUSSIONS&quot;,&quot;label&quot;:null}" id="item-1d15dddf-edc1-4920-b71d-232e81b630de" href="/discussions" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment-discussion">
    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Discussions
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;CODESPACES&quot;,&quot;label&quot;:null}" id="item-c550e3ac-f19d-4740-b984-8b31e3d1fab0" href="https://github.com/codespaces" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-codespaces">
    <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Codespaces
</span></a>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;EXPLORE&quot;,&quot;label&quot;:null}" id="item-1de60e26-b640-4272-8eaa-10c1064b88f7" href="/explore" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-telescope">
    <path d="M14.184 1.143v-.001l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.748 1.748 0 0 1 2.502.57Zm-4.709 9.32h-.001l2.644 3.863a.75.75 0 1 1-1.238.848l-1.881-2.75v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.746.746 0 0 1 .293-.253l1.809-.87a.749.749 0 0 1 .944.252ZM9.436 3.92h-.001l-4.97 3.39.942 1.63 5.42-2.61Zm3.091-2.108h.001l-1.85 1.26 1.505 2.605 2.016-.97a.247.247 0 0 0 .13-.151.247.247 0 0 0-.022-.199l-1.422-2.464a.253.253 0 0 0-.161-.119.254.254 0 0 0-.197.038ZM1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769-.83-1.436-1.465 1Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Explore
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;MARKETPLACE&quot;,&quot;label&quot;:null}" id="item-e47d2373-3f19-4008-972d-5de8beb804cd" href="/marketplace" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-gift">
    <path d="M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Marketplace
</span></a>
  
  
</li>

</ul>  </nav-list>
</nav>

      <div data-view-component="true" class="my-3 d-flex flex-justify-center height-full">
        <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</div>
</div>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd d-block pt-0">      <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider mt-0 mb-1"></li>

        <nav aria-label="Additional navigation" data-view-component="true" class="ActionList px-0 flex-1">
  
  <nav-list>
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;FEEDBACK&quot;,&quot;label&quot;:null}" id="item-5752c3c7-9fb9-4ab4-96b9-e9b972241c51" href="https://gh.io/navigation-update" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment-discussion">
    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Give new navigation feedback
</span>        <span class="ActionListItem-visual ActionListItem-visual--trailing">
          <span title="Beta" data-view-component="true" class="Counter color-bg-default color-border-success-emphasis color-fg-success">Beta</span>
        </span>
</a>
  
  
</li>

</ul>  </nav-list>
</nav>

      <div data-view-component="true" class="px-2">      <p class="color-fg-subtle text-small text-light">&copy; 2023 GitHub, Inc.</p>

      <div data-view-component="true" class="d-flex text-small text-light">
          <a target="_blank" href="/about" data-view-component="true" class="Link mr-2">About</a>
          <a target="_blank" href="https://github.blog" data-view-component="true" class="Link mr-2">Blog</a>
          <a target="_blank" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link mr-2">Terms</a>
          <a target="_blank" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link mr-2">Privacy</a>
          <a target="_blank" href="/security" data-view-component="true" class="Link mr-2">Security</a>
        <a target="_blank" href="https://www.githubstatus.com/" data-view-component="true" class="Link mr-3">Status</a>
</div></div>
</div>
</modal-dialog></div>

  </include-fragment>
</deferred-side-panel>

        <a
          class="AppHeader-logo ml-2"
          href="https://github.com/"
          data-hotkey="g d"
          aria-label="Homepage "
          data-turbo="false"
          data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;}"
        >
          <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
        </a>

          <div class="AppHeader-context" >
  <div class="AppHeader-context-compact">
        <button aria-expanded="false" aria-haspopup="dialog" aria-label="Page context: hjdhnx / dr_py" id="dialog-show-context-region-dialog" data-show-dialog-id="context-region-dialog" type="button" data-view-component="true" class="AppHeader-context-compact-trigger Truncate Button--secondary Button--medium Button box-shadow-none">    <span class="Button-content">
      <span class="Button-label"><span class="AppHeader-context-compact-lead">
                <span class="AppHeader-context-compact-parentItem">hjdhnx</span>
                <span class="AppHeader-context-compact-separator">&nbsp;/</span>

            </span>

            <strong class="AppHeader-context-compact-mainItem d-flex flex-items-center Truncate" >
  <span class="Truncate-text ">dr_py</span>

</strong></span>
    </span>
</button>  

<div class="Overlay--hidden Overlay-backdrop--center" data-modal-dialog-overlay>
  <modal-dialog role="dialog" id="context-region-dialog" aria-modal="true" aria-disabled="true" aria-labelledby="context-region-dialog-title" aria-describedby="context-region-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="context-region-dialog-title">
        Navigate back to
      </h1>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="context-region-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body">          <ul role="list" class="list-style-none" >
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;hjdhnx&quot;,&quot;screen_size&quot;:&quot;compact&quot;}" href="/hjdhnx" data-view-component="true" class="Link--primary Truncate d-flex flex-items-center py-1">
        <span class="AppHeader-context-item-label Truncate-text ">
            <svg aria-hidden="true" height="12" viewBox="0 0 16 16" version="1.1" width="12" data-view-component="true" class="octicon octicon-person mr-1">
    <path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
</svg>

          hjdhnx
        </span>

</a>
    </li>
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;dr_py&quot;,&quot;screen_size&quot;:&quot;compact&quot;}" href="/hjdhnx/dr_py" data-view-component="true" class="Link--primary Truncate d-flex flex-items-center py-1">
        <span class="AppHeader-context-item-label Truncate-text ">
            <svg aria-hidden="true" height="12" viewBox="0 0 16 16" version="1.1" width="12" data-view-component="true" class="octicon octicon-repo mr-1">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

          dr_py
        </span>

</a>
    </li>
</ul>

</div>
      
</modal-dialog></div>
  </div>

  <div class="AppHeader-context-full">
    <nav role="navigation" aria-label="Page context">
      <ul role="list" class="list-style-none" >
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;hjdhnx&quot;,&quot;screen_size&quot;:&quot;full&quot;}" data-hovercard-type="user" data-hovercard-url="/users/hjdhnx/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/hjdhnx" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label  ">

          hjdhnx
        </span>

</a>
        <span class="AppHeader-context-item-separator">/</span>
    </li>
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;dr_py&quot;,&quot;screen_size&quot;:&quot;full&quot;}" href="/hjdhnx/dr_py" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label  ">

          dr_py
        </span>

</a>
    </li>
</ul>

    </nav>
  </div>
</div>

      </div>
      <div class="AppHeader-globalBar-end">
          <div class="AppHeader-search" >
              


<qbsearch-input class="search-input" data-scope="repo:hjdhnx/dr_py" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="2ujA1HlBzMT8ah4G-lsK3QY13_-LPrwSdmxYmKgXiK0tkX4WcJOaw7lCFlz3PSQDLPoqpANGH-d5uIKjmt30wg" data-max-custom-scopes="10" data-header-redesign-enabled="true" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="hjdhnx/dr_py" data-current-org="" data-current-owner="hjdhnx" data-logged-in="true">
  <div
    class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center height-auto color-bg-transparent border-0 color-fg-subtle mx-0"
    data-action="click:qbsearch-input#searchInputContainerClicked"
  >
      
            <button type="button" data-action="click:qbsearch-input#handleExpand" class="AppHeader-button AppHeader-search-whenNarrow" aria-label="Search or jump to…" aria-expanded="false" aria-haspopup="dialog">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </button>


<div class="AppHeader-search-whenRegular">
  <div class="AppHeader-search-wrap AppHeader-search-wrap--hasTrailing">
    <div class="AppHeader-search-control">
      <label
        for="AppHeader-searchInput"
        aria-label="Search or jump to…"
        class="AppHeader-search-visual--leading"
      >
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
      </label>

                <button
            type="button"
            data-target="qbsearch-input.inputButton"
            data-action="click:qbsearch-input#handleExpand"
            class="AppHeader-searchButton form-control input-contrast text-left color-fg-subtle no-wrap"
            data-hotkey="s,/"
            data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SEARCH&quot;,&quot;label&quot;:null}"
          >
            <div class="overflow-hidden">
              <span id="qb-input-query" data-target="qbsearch-input.inputButtonText">
                  Type <kbd class="AppHeader-search-kbd">/</kbd> to search
              </span>
            </div>
          </button>

    </div>


      <button type="button" id="AppHeader-commandPalette-button" class="AppHeader-search-action--trailing js-activate-command-palette" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;command_palette&quot;,&quot;label&quot;:&quot;open command palette&quot;}">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-command-palette">
    <path d="m6.354 8.04-4.773 4.773a.75.75 0 1 0 1.061 1.06L7.945 8.57a.75.75 0 0 0 0-1.06L2.642 2.206a.75.75 0 0 0-1.06 1.061L6.353 8.04ZM8.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"></path>
</svg>
      </button>

      <tool-tip id="tooltip-0b6b894b-6781-4d22-a4fd-c0a178faa5c2" for="AppHeader-commandPalette-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Command palette</tool-tip>
  </div>
</div>

    <input type="hidden" name="type" class="js-site-search-type-field">

    
<div class="Overlay--hidden " data-modal-dialog-overlay>
  <modal-dialog data-action="close:qbsearch-input#handleClose cancel:qbsearch-input#handleClose" data-target="qbsearch-input.searchSuggestionsDialog" role="dialog" id="search-suggestions-dialog" aria-modal="true" aria-labelledby="search-suggestions-dialog-header" data-view-component="true" class="Overlay Overlay--width-medium Overlay--height-auto">
      <h1 id="search-suggestions-dialog-header" class="sr-only">Search code, repositories, users, issues, pull requests...</h1>
    <div class="Overlay-body Overlay-body--paddingNone">
      
          <div data-view-component="true">        <div class="search-suggestions position-absolute width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column query-builder-container"
          style="border-radius: 12px;"
          data-target="qbsearch-input.queryBuilderContainer"
          hidden
        >
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form id="query-builder-test-form" action="" accept-charset="UTF-8" method="get">
  <query-builder data-target="qbsearch-input.queryBuilder" id="query-builder-query-builder-test" data-filter-key=":" data-view-component="true" class="QueryBuilder search-query-builder">
    <div class="FormControl FormControl--fullWidth">
      <label id="query-builder-test-label" for="query-builder-test" class="FormControl-label sr-only">
        Search
      </label>
      <div
        class="QueryBuilder-StyledInput width-fit "
        data-target="query-builder.styledInput"
      >
          <span id="query-builder-test-leadingvisual-wrap" class="FormControl-input-leadingVisualWrap QueryBuilder-leadingVisualWrap">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search FormControl-input-leadingVisual">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </span>
        <div data-target="query-builder.styledInputContainer" class="QueryBuilder-StyledInputContainer">
          <div
            aria-hidden="true"
            class="QueryBuilder-StyledInputContent"
            data-target="query-builder.styledInputContent"
          ></div>
          <div class="QueryBuilder-InputWrapper">
            <div aria-hidden="true" class="QueryBuilder-Sizer" data-target="query-builder.sizer"></div>
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-7d03ea0c-fa0b-4ada-876c-3bc7510f5424" data-target="query-builder.input" data-action="
          input:query-builder#inputChange
          blur:query-builder#inputBlur
          keydown:query-builder#inputKeydown
          focus:query-builder#inputFocus
        " data-view-component="true" class="FormControl-input QueryBuilder-Input FormControl-medium" />
          </div>
        </div>
          <span class="sr-only" id="query-builder-test-clear">Clear</span>
          
  <button role="button" id="query-builder-test-clear-button" aria-labelledby="query-builder-test-clear query-builder-test-label" data-target="query-builder.clearButton" data-action="
                click:query-builder#clear
                focus:query-builder#clearButtonFocus
                blur:query-builder#clearButtonBlur
              " variant="small" hidden="hidden" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium mr-1 px-2 py-0 d-flex flex-items-center rounded-1 color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x-circle-fill Button-visual">
    <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
</svg>
</button>  

      </div>
      <template id="search-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
</template>

<template id="code-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</template>

<template id="file-code-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-file-code">
    <path d="M4 1.75C4 .784 4.784 0 5.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 14.25 15h-9a.75.75 0 0 1 0-1.5h9a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 10 4.25V1.5H5.75a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0Zm1.72 4.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06ZM3.28 7.78 1.81 9.25l1.47 1.47a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Zm8.22-6.218V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
</svg>
</template>

<template id="history-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-history">
    <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path>
</svg>
</template>

<template id="repo-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
</template>

<template id="bookmark-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-bookmark">
    <path d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"></path>
</svg>
</template>

<template id="plus-circle-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plus-circle">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7.25-3.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z"></path>
</svg>
</template>

<template id="circle-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-dot-fill">
    <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
</svg>
</template>

<template id="trash-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-trash">
    <path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path>
</svg>
</template>

<template id="team-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
    <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
</svg>
</template>

<template id="project-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project">
    <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"></path>
</svg>
</template>

<template id="pencil-icon">
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-pencil">
    <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path>
</svg>
</template>

        <div class="position-relative">
                <ul
                  role="listbox"
                  class="ActionListWrap QueryBuilder-ListWrap"
                  aria-label="Suggestions"
                  data-action="
                    combobox-commit:query-builder#comboboxCommit
                    mousedown:query-builder#resultsMousedown
                  "
                  data-target="query-builder.resultsList"
                  data-persist-list=false
                  id="query-builder-test-results"
                ></ul>
        </div>
      <div class="FormControl-inlineValidation" id="validation-7d03ea0c-fa0b-4ada-876c-3bc7510f5424" hidden="hidden">
        <span class="FormControl-inlineValidation--visual">
          <svg aria-hidden="true" height="12" viewBox="0 0 12 12" version="1.1" width="12" data-view-component="true" class="octicon octicon-alert-fill">
    <path d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
</svg>
        </span>
        <span></span>
</div>    </div>
    <div data-target="query-builder.screenReaderFeedback" aria-live="polite" aria-atomic="true" class="sr-only"></div>
</query-builder></form>
          <div class="d-flex flex-row color-fg-muted px-3 text-small color-bg-default search-feedback-prompt">
            <a target="_blank" href="https://docs.github.com/en/search-github/github-code-search/understanding-github-code-search-syntax" data-view-component="true" class="Link color-fg-accent text-normal ml-2">
              Search syntax tips
</a>            <div class="d-flex flex-1"></div>
                <button data-action="click:qbsearch-input#showFeedbackDialog" type="button" data-view-component="true" class="Button--link Button--medium Button color-fg-accent text-normal ml-2">    <span class="Button-content">
      <span class="Button-label">Give feedback</span>
    </span>
</button>  
          </div>
        </div>
</div>

    </div>
</modal-dialog></div>
  </div>
  <div data-action="click:qbsearch-input#retract" class="dark-backdrop position-fixed" hidden data-target="qbsearch-input.darkBackdrop"></div>
  <div class="color-fg-default">
    
<div class="Overlay--hidden Overlay-backdrop--center" data-modal-dialog-overlay>
  <modal-dialog data-target="qbsearch-input.feedbackDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" role="dialog" id="feedback-dialog" aria-modal="true" aria-disabled="true" aria-labelledby="feedback-dialog-title" aria-describedby="feedback-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="feedback-dialog-title">
        Provide feedback
      </h1>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="feedback-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body">        <!-- '"` --><!-- </textarea></xmp> --></option></form><form id="code-search-feedback-form" data-turbo="false" action="/search/feedback" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="BR2al3lHYX0XnrBhOOmbrD5VWG_rXo3UTuEGnKyZeEEw6-Y01iCYWcMaoWiXT8_9vws8tph7UDBEvhTJ6hC6VQ" />
          <p>We read every piece of feedback, and take your input very seriously.</p>
          <textarea name="feedback" class="form-control width-full mb-2" style="height: 120px" id="feedback"></textarea>
          <input name="include_email" id="include_email" aria-label="Include my email address so I can be contacted" class="form-control mr-2" type="checkbox">
          <label for="include_email" style="font-weight: normal">Include my email address so I can be contacted</label>
</form></div>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd">          <button data-close-dialog-id="feedback-dialog" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="code-search-feedback-form" data-action="click:qbsearch-input#submitFeedback" type="submit" data-view-component="true" class="btn-primary btn">    Submit feedback
</button>
</div>
</modal-dialog></div>

    <custom-scopes data-target="qbsearch-input.customScopesManager">
    
<div class="Overlay--hidden Overlay-backdrop--center" data-modal-dialog-overlay>
  <modal-dialog data-target="custom-scopes.customScopesModalDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" role="dialog" id="custom-scopes-dialog" aria-modal="true" aria-disabled="true" aria-labelledby="custom-scopes-dialog-title" aria-describedby="custom-scopes-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header Overlay-header--divided">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="custom-scopes-dialog-title">
        Saved searches
      </h1>
        <h2 id="custom-scopes-dialog-description" class="Overlay-description">Use saved searches to filter your results more quickly</h2>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="custom-scopes-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body">        <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

        <div hidden class="create-custom-scope-form" data-target="custom-scopes.createCustomScopeForm">
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form id="custom-scopes-dialog-form" data-turbo="false" action="/search/custom_scopes" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="Bz6EshVwcq-GH-Ar0Ho3d8X7OOyGlxpWPrX5UgGDYhQztdmJPnunkxha5Fe_Y2iUznzagTvrY7DbOb7wnrMz4w" />
          <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

          <input type="hidden" id="custom_scope_id" name="custom_scope_id" data-target="custom-scopes.customScopesIdField">

          <div class="form-group">
            <label for="custom_scope_name">Name</label>
            <auto-check src="/search/custom_scopes/check_name" required>
              <input
                type="text"
                name="custom_scope_name"
                id="custom_scope_name"
                data-target="custom-scopes.customScopesNameField"
                class="form-control"
                autocomplete="off"
                placeholder="github-ruby"
                required
                maxlength="50">
              <input type="hidden" value="lF_u78h_IhfYFg5Zl3g8CFk89v2y_zLJGYKRx00AjwucfAME1mHgvtddPVGhNhUbbNtYjOqjaYYyg8VIyokcoA" data-csrf="true" />
            </auto-check>
          </div>

          <div class="form-group">
            <label for="custom_scope_query">Query</label>
            <input
              type="text"
              name="custom_scope_query"
              id="custom_scope_query"
              data-target="custom-scopes.customScopesQueryField"
              class="form-control"
              autocomplete="off"
              placeholder="(repo:mona/a OR repo:mona/b) AND lang:python"
              required
              maxlength="500">
          </div>

          <p class="text-small color-fg-muted">
            To see all available qualifiers, see our <a class="Link--inTextBlock" href="https://docs.github.com/en/search-github/github-code-search/understanding-github-code-search-syntax">documentation</a>.
          </p>
</form>        </div>

        <div data-target="custom-scopes.manageCustomScopesForm">
          <div data-target="custom-scopes.list"></div>
        </div>

</div>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd Overlay-footer--divided">          <button data-action="click:custom-scopes#customScopesCancel" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="custom-scopes-dialog-form" data-action="click:custom-scopes#customScopesSubmit" data-target="custom-scopes.customScopesSubmitButton" type="submit" data-view-component="true" class="btn-primary btn">    Create saved search
</button>
</div>
</modal-dialog></div>
    </custom-scopes>
  </div>
</qbsearch-input><input type="hidden" value="OvJjRjLnsHTdibhnAY9yIK4LyT1cTKZQ1u_zo0XBH0emF4P-6BJ91uiJpVqJ6KGt8xy9RUfrPtbu7cUxP66_FA" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />

          </div>

        <div class="AppHeader-actions position-relative">
          <action-menu data-select-variant="none" data-view-component="true">
  <focus-group direction="vertical" mnemonics retain>
    <div data-view-component="true" class="Button-withTooltip">  <button id="global-create-menu-button" popovertarget="global-create-menu-overlay" aria-label="Create something new" aria-controls="global-create-menu-list" aria-haspopup="true" type="button" data-view-component="true" class="AppHeader-button Button--secondary Button--small Button width-auto color-fg-muted">    <span class="Button-content">
        <span class="Button-visual Button-leadingVisual">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plus">
    <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
</svg>
        </span>
      <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></span>
    </span>
</button>  <tool-tip id="tooltip-3e0e8e16-6065-4c60-adfe-192d08214db3" for="global-create-menu-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Create new...</tool-tip>
</div>

<anchored-position id="global-create-menu-overlay" anchor="global-create-menu-button" align="end" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      
        <div data-view-component="true">
  <ul aria-labelledby="global-create-menu-button" id="global-create-menu-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new repository&quot;}" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="/new" tabindex="-1" id="item-abd8ead8-2139-49b8-bbf6-84dd19aca890" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
              New repository

</span></a>
  
  
</li>
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;import repository&quot;}" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="/new/import" tabindex="-1" id="item-5dec7d9a-21b1-4651-b895-84c78e2dacdb" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-push">
    <path d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.493 2.493 0 0 1 3.5 9h3.25a.75.75 0 0 1 0 1.5H3.5a1 1 0 0 0 0 2h5.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5Zm13.23 7.79h-.001l-1.224-1.224v6.184a.75.75 0 0 1-1.5 0V9.066L10.28 10.29a.75.75 0 0 1-1.06-1.061l2.505-2.504a.75.75 0 0 1 1.06 0L15.29 9.23a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                Import repository

</span></a>
  
  
</li>
      <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new codespace&quot;}" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="/codespaces/new" tabindex="-1" id="item-0decc08c-37f3-41da-b4d9-108d13f4442e" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-codespaces">
    <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                New codespace

</span></a>
  
  
</li>
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new gist&quot;}" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="https://gist.github.com/" tabindex="-1" id="item-2ce4a1a6-57d6-4fcb-9815-d8a07ea36832" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                New gist

</span></a>
  
  
</li>
      <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new organization&quot;}" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="/account/organizations/new" tabindex="-1" id="item-f8215410-b1c3-4573-97fd-3a708903261a" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-organization">
    <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                New organization

</span></a>
  
  
</li>
</ul>  
</div>

</div></anchored-position>  </focus-group>
</action-menu>

          <div data-view-component="true" class="Button-withTooltip">
  <a href="/issues" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-cda62e43-f0d0-4597-8da6-5209f72bd8d6" aria-labelledby="tooltip-8c70aa61-9b73-4a74-bbc8-645e4ac6311a" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened Button-visual">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
</a>  <tool-tip id="tooltip-8c70aa61-9b73-4a74-bbc8-645e4ac6311a" for="icon-button-cda62e43-f0d0-4597-8da6-5209f72bd8d6" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Issues</tool-tip>
</div>
          <div data-view-component="true" class="Button-withTooltip">
  <a href="/pulls" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-6ecaada6-e716-467a-871e-58a5c32366c2" aria-labelledby="tooltip-7a09676c-2259-4990-aabc-cd271195a48d" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request Button-visual">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
</a>  <tool-tip id="tooltip-7a09676c-2259-4990-aabc-cd271195a48d" for="icon-button-6ecaada6-e716-467a-871e-58a5c32366c2" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Pull requests</tool-tip>
</div>
          
        </div>

        

<notification-indicator data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTM5MDIwODA2IiwidCI6MTY5NzE1Nzk4MH0=--0854a9831665df7c1a4323ce1b79ff631959470e790171c3e8215f41663942ee" data-indicator-mode="none" data-tooltip-global="You have unread notifications" data-tooltip-unavailable="Notifications are unavailable at the moment." data-tooltip-none="You have no unread notifications" data-header-redesign-enabled="true" data-fetch-indicator-src="/notifications/indicator" data-fetch-indicator-enabled="true" data-view-component="true" class="js-socket-channel">
  <a id="AppHeader-notifications-button" href="/notifications"
    class="AppHeader-button Button--secondary"

    style="width:32px;height:32px;"

    data-hotkey="g n"
    data-target="notification-indicator.link"
    aria-label="Notifications"

      data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;notifications&quot;,&quot;label&quot;:null}"
  >

    <span
      data-target="notification-indicator.badge"
      class="mail-status unread d-none" hidden>
    </span>

      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-inbox color-fg-muted mr-0">
    <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
</svg>
  </a>

    <tool-tip data-target="notification-indicator.tooltip" id="tooltip-20db87ae-3978-4dab-b014-d7568de4f12f" for="AppHeader-notifications-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Notifications</tool-tip>
</notification-indicator>

        

        <div class="AppHeader-user">
          <deferred-side-panel data-url="/_side-panels/user?memex_enabled=true&amp;repository=dr_py&amp;user=gogorotv&amp;user_can_create_organizations=true&amp;user_id=139020806">
  <include-fragment data-target="deferred-side-panel.fragment">
      <user-drawer-side-panel>
      <button aria-label="Open user account menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-08995c7d-767f-48d2-b80c-cb138c7677ac" id="dialog-show-dialog-08995c7d-767f-48d2-b80c-cb138c7677ac" type="button" data-view-component="true" class="AppHeader-logo Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0">    <span class="Button-content">
      <span class="Button-label"><img src="https://avatars.githubusercontent.com/u/139020806?v=4" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle" /></span>
    </span>
</button>  

<div class="Overlay--hidden Overlay-backdrop--side Overlay-backdrop--placement-right" data-modal-dialog-overlay>
  <modal-dialog data-target="deferred-side-panel.panel" role="dialog" id="dialog-08995c7d-767f-48d2-b80c-cb138c7677ac" aria-modal="true" aria-disabled="true" aria-labelledby="dialog-08995c7d-767f-48d2-b80c-cb138c7677ac-title" aria-describedby="dialog-08995c7d-767f-48d2-b80c-cb138c7677ac-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade SidePanel">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-08995c7d-767f-48d2-b80c-cb138c7677ac-title">
        Account menu
      </h1>
            <div data-view-component="true" class="d-flex">
      <div data-view-component="true" class="AppHeader-logo position-relative">
        <img src="https://avatars.githubusercontent.com/u/139020806?v=4" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle" />
</div>        <div data-view-component="true" class="overflow-hidden d-flex width-full">        <div data-view-component="true" class="lh-condensed overflow-hidden d-flex flex-column flex-justify-center ml-2 f5 mr-auto width-full">
          <span data-view-component="true" class="Truncate text-bold">
    <span data-view-component="true" class="Truncate-text">
            gogorotv
</span>
</span>          </div>
</div>
</div>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="dialog-08995c7d-767f-48d2-b80c-cb138c7677ac" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body d-flex flex-column height-full px-2">      <nav aria-label="User navigation" data-view-component="true" class="ActionList">
  
  <nav-list>
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-e8e08123-62d1-45fb-af74-928b144c860a" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PROFILE&quot;,&quot;label&quot;:null}" id="item-264ab790-86fb-4898-a3f1-9f9619429136" href="https://github.com/gogorotv" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-person">
    <path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your profile
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-c9f34856-2076-4922-a72c-1b60fce81a2b" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_REPOSITORIES&quot;,&quot;label&quot;:null}" id="item-18e4462d-a098-40c1-9a32-ce516eb767ce" href="/gogorotv?tab=repositories" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your repositories
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_PROJECTS&quot;,&quot;label&quot;:null}" id="item-e86ccad2-d729-47b5-9711-e1cf23a8dc79" href="/gogorotv?tab=projects" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project">
    <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your projects
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-21738534-edff-42ee-a91b-43dbcd83dabc" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_STARS&quot;,&quot;label&quot;:null}" id="item-ceee4301-4a60-4ace-8479-a394ee5d0466" href="/gogorotv?tab=stars" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your stars
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SPONSORS&quot;,&quot;label&quot;:null}" id="item-2e723b4d-f1af-4f80-896e-7f095382db7f" href="/sponsors/accounts" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart">
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your sponsors
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_GISTS&quot;,&quot;label&quot;:null}" id="item-93082f4f-04aa-4945-a0c2-b317d5c805c8" href="https://gist.github.com/mine" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code-square">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your gists
</span></a>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-4ccc7b28-3c19-4b0a-988c-0c9e3e77bfaa" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-90db636e-d6ef-4336-9491-37733ccfe0c2" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-61ff2525-b287-4a5b-b93e-e7d718f2982c" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SETTINGS&quot;,&quot;label&quot;:null}" id="item-87b4405f-8cde-4d7d-a993-aea14747d2ae" href="/settings/profile" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-gear">
    <path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Settings
</span></a>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DOCS&quot;,&quot;label&quot;:null}" id="item-1ebbacf3-4526-4f9b-870a-6797ba33a378" href="https://docs.github.com" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-book">
    <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          GitHub Docs
</span></a>
  
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SUPPORT&quot;,&quot;label&quot;:null}" id="item-6b0ba759-41d7-436c-bc1c-5330b3a9e707" href="https://support.github.com" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
    <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          GitHub Support
</span></a>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;LOGOUT&quot;,&quot;label&quot;:null}" id="item-58b0fff3-9e66-492f-96d2-5b2ca9fec5b8" href="/logout" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          Sign out
</span></a>
  
  
</li>

</ul>  </nav-list>
</nav>


</div>
      
</modal-dialog></div>
  </user-drawer-side-panel>

  </include-fragment>
</deferred-side-panel>
        </div>

        <div class="position-absolute mt-2">
            
<site-header-logged-in-user-menu>

</site-header-logged-in-user-menu>

        </div>
      </div>
    </div>


      <div class="AppHeader-localBar" >
        <nav data-pjax="#js-repo-pjax-container" aria-label="Repository" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav">

  <ul data-view-component="true" class="UnderlineNav-body list-style-none">
      <li data-view-component="true" class="d-inline-flex">
  <a id="code-tab" href="/hjdhnx/dr_py" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments repo_attestations /hjdhnx/dr_py" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g c" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Code&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        <span data-content="Code">Code</span>
          <span id="code-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="issues-tab" href="/hjdhnx/dr_py/issues" data-tab-item="i1issues-tab" data-selected-links="repo_issues repo_labels repo_milestones /hjdhnx/dr_py/issues" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Issues&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        <span data-content="Issues">Issues</span>
          <span id="issues-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="14" data-view-component="true" class="Counter">14</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="pull-requests-tab" href="/hjdhnx/dr_py/pulls" data-tab-item="i2pull-requests-tab" data-selected-links="repo_pulls checks /hjdhnx/dr_py/pulls" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Pull requests&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        <span data-content="Pull requests">Pull requests</span>
          <span id="pull-requests-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="3" data-view-component="true" class="Counter">3</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="actions-tab" href="/hjdhnx/dr_py/actions" data-tab-item="i3actions-tab" data-selected-links="repo_actions /hjdhnx/dr_py/actions" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g a" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Actions&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        <span data-content="Actions">Actions</span>
          <span id="actions-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="projects-tab" href="/hjdhnx/dr_py/projects" data-tab-item="i4projects-tab" data-selected-links="repo_projects new_repo_project repo_project /hjdhnx/dr_py/projects" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g b" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Projects&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        <span data-content="Projects">Projects</span>
          <span id="projects-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="security-tab" href="/hjdhnx/dr_py/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /hjdhnx/dr_py/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span data-content="Security">Security</span>
          <include-fragment src="/hjdhnx/dr_py/security/overall-count" accept="text/fragment+html"></include-fragment>

    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="insights-tab" href="/hjdhnx/dr_py/pulse" data-tab-item="i6insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /hjdhnx/dr_py/pulse" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Insights&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        <span data-content="Insights">Insights</span>
          <span id="insights-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
</ul>
    <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0">        <details data-view-component="true" class="details-overlay details-reset position-relative">
    <summary role="button" data-view-component="true">          <div class="UnderlineNav-item mr-0 border-0">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal">
    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
</svg>
            <span class="sr-only">More</span>
          </div>
</summary>
    <details-menu role="menu" data-view-component="true" class="dropdown-menu dropdown-menu-sw">
          <ul>
              <li data-menu-item="i0code-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments repo_attestations /hjdhnx/dr_py" href="/hjdhnx/dr_py">
                  Code
</a>              </li>
              <li data-menu-item="i1issues-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_issues repo_labels repo_milestones /hjdhnx/dr_py/issues" href="/hjdhnx/dr_py/issues">
                  Issues
</a>              </li>
              <li data-menu-item="i2pull-requests-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_pulls checks /hjdhnx/dr_py/pulls" href="/hjdhnx/dr_py/pulls">
                  Pull requests
</a>              </li>
              <li data-menu-item="i3actions-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_actions /hjdhnx/dr_py/actions" href="/hjdhnx/dr_py/actions">
                  Actions
</a>              </li>
              <li data-menu-item="i4projects-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_projects new_repo_project repo_project /hjdhnx/dr_py/projects" href="/hjdhnx/dr_py/projects">
                  Projects
</a>              </li>
              <li data-menu-item="i5security-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="security overview alerts policy token_scanning code_scanning /hjdhnx/dr_py/security" href="/hjdhnx/dr_py/security">
                  Security
</a>              </li>
              <li data-menu-item="i6insights-tab" hidden>
                <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /hjdhnx/dr_py/pulse" href="/hjdhnx/dr_py/pulse">
                  Insights
</a>              </li>
          </ul>
</details-menu>
</details></div>
</nav>
      </div>
</header>


      <div hidden="hidden" data-view-component="true" class="js-stale-session-flash stale-session-flash flash flash-warn mb-3">
  
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a class="Link--inTextBlock" href="">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a class="Link--inTextBlock" href="">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-switched" hidden>You switched accounts on another tab or window. <a class="Link--inTextBlock" href="">Reload</a> to refresh your session.</span>

    <div data-view-component="true" class="flash-close">
  <button id="icon-button-c72611ef-b104-4105-9c75-48f561f5fc08" aria-labelledby="tooltip-62eb5719-57c1-4267-8eef-0aea962ac91b" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium js-flash-close">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button>  <tool-tip id="tooltip-62eb5719-57c1-4267-8eef-0aea962ac91b" for="icon-button-c72611ef-b104-4105-9c75-48f561f5fc08" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Dismiss alert</tool-tip>
</div>

  
</div>
          
    </div>

  <div id="start-of-content" class="show-on-focus"></div>








    <div id="js-flash-container" data-turbo-replace>





  <template class="js-flash-template">
    
<div class="flash flash-full   {{ className }}">
  <div class="px-2" >
    <button autofocus class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    </button>
    <div aria-atomic="true" role="alert" class="js-flash-alert">
      
      <div>{{ message }}</div>

    </div>
  </div>
</div>
  </template>
</div>


    
    <notification-shelf-watcher data-base-url="https://github.com/notifications/beta/shelf" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTM5MDIwODA2IiwidCI6MTY5NzE1Nzk4MH0=--0854a9831665df7c1a4323ce1b79ff631959470e790171c3e8215f41663942ee" data-view-component="true" class="js-socket-channel"></notification-shelf-watcher>
  <div hidden data-initial data-target="notification-shelf-watcher.placeholder"></div>






      <details
  class="details-reset details-overlay details-overlay-dark js-command-palette-dialog"
  id="command-palette-pjax-container"
  data-turbo-replace
>
  <summary aria-label="Command palette trigger" tabindex="-1"></summary>
  <details-dialog class="command-palette-details-dialog d-flex flex-column flex-justify-center height-fit" aria-label="Command palette">
    <command-palette
      class="command-palette color-bg-default rounded-3 border color-shadow-small"
      return-to=/hjdhnx/dr_py/blob/main/libs/sortName.js
      user-id="139020806"
      activation-hotkey="Mod+k,Mod+Alt+k"
      command-mode-hotkey="Mod+Shift+k"
      data-action="
        command-palette-input-ready:command-palette#inputReady
        command-palette-page-stack-updated:command-palette#updateInputScope
        itemsUpdated:command-palette#itemsUpdated
        keydown:command-palette#onKeydown
        loadingStateChanged:command-palette#loadingStateChanged
        selectedItemChanged:command-palette#selectedItemChanged
        pageFetchError:command-palette#pageFetchError
      ">

        <command-palette-mode
          data-char="#"
            data-scope-types="[&quot;&quot;]"
            data-placeholder="Search issues and pull requests"
        ></command-palette-mode>
        <command-palette-mode
          data-char="#"
            data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
            data-placeholder="Search issues, pull requests, discussions, and projects"
        ></command-palette-mode>
        <command-palette-mode
          data-char="!"
            data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
            data-placeholder="Search projects"
        ></command-palette-mode>
        <command-palette-mode
          data-char="@"
            data-scope-types="[&quot;&quot;]"
            data-placeholder="Search or jump to a user, organization, or repository"
        ></command-palette-mode>
        <command-palette-mode
          data-char="@"
            data-scope-types="[&quot;owner&quot;]"
            data-placeholder="Search or jump to a repository"
        ></command-palette-mode>
        <command-palette-mode
          data-char="/"
            data-scope-types="[&quot;repository&quot;]"
            data-placeholder="Search files"
        ></command-palette-mode>
        <command-palette-mode
          data-char="?"
        ></command-palette-mode>
        <command-palette-mode
          data-char="&gt;"
            data-placeholder="Run a command"
        ></command-palette-mode>
        <command-palette-mode
          data-char=""
            data-scope-types="[&quot;&quot;]"
            data-placeholder="Search or jump to..."
        ></command-palette-mode>
        <command-palette-mode
          data-char=""
            data-scope-types="[&quot;owner&quot;]"
            data-placeholder="Search or jump to..."
        ></command-palette-mode>
      <command-palette-mode
        class="js-command-palette-default-mode"
        data-char=""
        data-placeholder="Search or jump to..."
      ></command-palette-mode>

      <command-palette-input placeholder="Search or jump to..."

        data-action="
          command-palette-input:command-palette#onInput
          command-palette-select:command-palette#onSelect
          command-palette-descope:command-palette#onDescope
          command-palette-cleared:command-palette#onInputClear
        "
      >
        <div class="js-search-icon d-flex flex-items-center mr-2" style="height: 26px">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search color-fg-muted">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
        </div>
        <div class="js-spinner d-flex flex-items-center mr-2 color-fg-muted" hidden>
          <svg aria-label="Loading" class="anim-rotate" viewBox="0 0 16 16" fill="none" width="16" height="16">
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="currentColor"
              stroke-opacity="0.25"
              stroke-width="2"
              vector-effect="non-scaling-stroke"
            ></circle>
            <path
              d="M15 8a7.002 7.002 0 00-7-7"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              vector-effect="non-scaling-stroke"
            ></path>
          </svg>
        </div>
        <command-palette-scope >
          <div data-target="command-palette-scope.placeholder" hidden class="color-fg-subtle">/&nbsp;&nbsp;<span class="text-semibold color-fg-default">...</span>&nbsp;&nbsp;/&nbsp;&nbsp;</div>
              <command-palette-token
                data-text="hjdhnx"
                data-id="MDQ6VXNlcjQ5ODAzMDk3"
                data-type="owner"
                data-value="hjdhnx"
                data-targets="command-palette-scope.tokens"
                class="color-fg-default text-semibold"
                style="white-space:nowrap;line-height:20px;"
                >hjdhnx<span class="color-fg-subtle text-normal">&nbsp;&nbsp;/&nbsp;&nbsp;</span></command-palette-token>
              <command-palette-token
                data-text="dr_py"
                data-id="R_kgDOH82QDw"
                data-type="repository"
                data-value="dr_py"
                data-targets="command-palette-scope.tokens"
                class="color-fg-default text-semibold"
                style="white-space:nowrap;line-height:20px;"
                >dr_py<span class="color-fg-subtle text-normal">&nbsp;&nbsp;/&nbsp;&nbsp;</span></command-palette-token>
        </command-palette-scope>
        <div class="command-palette-input-group flex-1 form-control border-0 box-shadow-none" style="z-index: 0">
          <div class="command-palette-typeahead position-absolute d-flex flex-items-center Truncate">
            <span class="typeahead-segment input-mirror" data-target="command-palette-input.mirror"></span>
            <span class="Truncate-text" data-target="command-palette-input.typeaheadText"></span>
            <span class="typeahead-segment" data-target="command-palette-input.typeaheadPlaceholder"></span>
          </div>
          <input
            class="js-overlay-input typeahead-input d-none"
            disabled
            tabindex="-1"
            aria-label="Hidden input for typeahead"
          >
          <input
            type="text"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            class="js-input typeahead-input form-control border-0 box-shadow-none input-block width-full no-focus-indicator"
            aria-label="Command palette input"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-autocomplete="list"
            aria-controls="command-palette-page-stack"
            role="combobox"
            data-action="
              input:command-palette-input#onInput
              keydown:command-palette-input#onKeydown
            "
          >
        </div>
          <div data-view-component="true" class="position-relative d-inline-block">
    <button aria-keyshortcuts="Control+Backspace" data-action="click:command-palette-input#onClear keypress:command-palette-input#onClear" data-target="command-palette-input.clearButton" id="command-palette-clear-button" hidden="hidden" type="button" data-view-component="true" class="btn-octicon command-palette-input-clear-button">      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x-circle-fill">
    <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
</svg>
</button>    <tool-tip id="tooltip-9d186bd9-28fe-43ea-a1c3-bfd88b335998" for="command-palette-clear-button" popover="manual" data-direction="w" data-type="label" data-view-component="true" class="sr-only position-absolute">Clear Command Palette</tool-tip>
</div>
      </command-palette-input>

      <command-palette-page-stack
        data-default-scope-id="R_kgDOH82QDw"
        data-default-scope-type="Repository"
        data-action="command-palette-page-octicons-cached:command-palette-page-stack#cacheOcticons"
      >
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">#</kbd> to search pull requests
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">#</kbd> to search issues
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">#</kbd> to search discussions
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">!</kbd> to search projects
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;owner&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">@</kbd> to search teams
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">@</kbd> to search people and organizations
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">&gt;</kbd> to activate command mode
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode=""
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Go to your accessibility settings to change your keyboard shortcuts
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode="#"
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type author:@me to search your content
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode="#"
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type is:pr to filter to pull requests
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode="#"
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type is:issue to filter to issues
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
            data-mode="#"
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type is:project to filter to projects
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
              data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
            data-mode="#"
            data-value="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type is:open to filter to open content
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
        <command-palette-tip class="mx-3 my-2 flash flash-error d-flex flex-items-center" data-scope-types="*" data-on-error>
          <div>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
          </div>
          <div class="px-2">
            We’ve encountered an error and some results aren't available at this time. Type a new search or try again later.
          </div>
        </command-palette-tip>
        <command-palette-tip class="h4 color-fg-default pl-3 pb-2 pt-3" data-on-empty data-scope-types="*" data-match-mode="[^?]|^$">
          No results matched your search
        </command-palette-tip>

        <div hidden>

            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="arrow-right-color-fg-muted">
              <svg height="16" class="octicon octicon-arrow-right color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="arrow-right-color-fg-default">
              <svg height="16" class="octicon octicon-arrow-right color-fg-default" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="codespaces-color-fg-muted">
              <svg height="16" class="octicon octicon-codespaces color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="copy-color-fg-muted">
              <svg height="16" class="octicon octicon-copy color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="dash-color-fg-muted">
              <svg height="16" class="octicon octicon-dash color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M2 7.75A.75.75 0 0 1 2.75 7h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 2 7.75Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="file-color-fg-muted">
              <svg height="16" class="octicon octicon-file color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="gear-color-fg-muted">
              <svg height="16" class="octicon octicon-gear color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="lock-color-fg-muted">
              <svg height="16" class="octicon octicon-lock color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="moon-color-fg-muted">
              <svg height="16" class="octicon octicon-moon color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M9.598 1.591a.749.749 0 0 1 .785-.175 7.001 7.001 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.046-7.046.75.75 0 0 1 .175-.786Zm1.616 1.945a7 7 0 0 1-7.678 7.678 5.499 5.499 0 1 0 7.678-7.678Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="person-color-fg-muted">
              <svg height="16" class="octicon octicon-person color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="pencil-color-fg-muted">
              <svg height="16" class="octicon octicon-pencil color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="issue-opened-open">
              <svg height="16" class="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="git-pull-request-draft-color-fg-muted">
              <svg height="16" class="octicon octicon-git-pull-request-draft color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="search-color-fg-muted">
              <svg height="16" class="octicon octicon-search color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="sun-color-fg-muted">
              <svg height="16" class="octicon octicon-sun color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm5.657-8.157a.75.75 0 0 1 0 1.061l-1.061 1.06a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.06-1.06a.75.75 0 0 1 1.06 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0ZM3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8Zm13 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8Zm-8 5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13Zm3.536-1.464a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061ZM2.343 2.343a.75.75 0 0 1 1.061 0l1.06 1.061a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-1.06-1.06a.75.75 0 0 1 0-1.06Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="sync-color-fg-muted">
              <svg height="16" class="octicon octicon-sync color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="trash-color-fg-muted">
              <svg height="16" class="octicon octicon-trash color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="key-color-fg-muted">
              <svg height="16" class="octicon octicon-key color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M10.5 0a5.499 5.499 0 1 1-1.288 10.848l-.932.932a.749.749 0 0 1-.53.22H7v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22H5v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22h-2A1.75 1.75 0 0 1 0 14.25v-2c0-.199.079-.389.22-.53l4.932-4.932A5.5 5.5 0 0 1 10.5 0Zm-4 5.5c-.001.431.069.86.205 1.269a.75.75 0 0 1-.181.768L1.5 12.56v1.69c0 .138.112.25.25.25h1.69l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l1.023-1.025a.75.75 0 0 1 .768-.18A4 4 0 1 0 6.5 5.5ZM11 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="comment-discussion-color-fg-muted">
              <svg height="16" class="octicon octicon-comment-discussion color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="bell-color-fg-muted">
              <svg height="16" class="octicon octicon-bell color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="bell-slash-color-fg-muted">
              <svg height="16" class="octicon octicon-bell-slash color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="paintbrush-color-fg-muted">
              <svg height="16" class="octicon octicon-paintbrush color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M11.134 1.535c.7-.509 1.416-.942 2.076-1.155.649-.21 1.463-.267 2.069.34.603.601.568 1.411.368 2.07-.202.668-.624 1.39-1.125 2.096-1.011 1.424-2.496 2.987-3.775 4.249-1.098 1.084-2.132 1.839-3.04 2.3a3.744 3.744 0 0 1-1.055 3.217c-.431.431-1.065.691-1.657.861-.614.177-1.294.287-1.914.357A21.151 21.151 0 0 1 .797 16H.743l.007-.75H.749L.742 16a.75.75 0 0 1-.743-.742l.743-.008-.742.007v-.054a21.25 21.25 0 0 1 .13-2.284c.067-.647.187-1.287.358-1.914.17-.591.43-1.226.86-1.657a3.746 3.746 0 0 1 3.227-1.054c.466-.893 1.225-1.907 2.314-2.982 1.271-1.255 2.833-2.75 4.245-3.777ZM1.62 13.089c-.051.464-.086.929-.104 1.395.466-.018.932-.053 1.396-.104a10.511 10.511 0 0 0 1.668-.309c.526-.151.856-.325 1.011-.48a2.25 2.25 0 1 0-3.182-3.182c-.155.155-.329.485-.48 1.01a10.515 10.515 0 0 0-.309 1.67Zm10.396-10.34c-1.224.89-2.605 2.189-3.822 3.384l1.718 1.718c1.21-1.205 2.51-2.597 3.387-3.833.47-.662.78-1.227.912-1.662.134-.444.032-.551.009-.575h-.001V1.78c-.014-.014-.113-.113-.548.027-.432.14-.995.462-1.655.942Zm-4.832 7.266-.001.001a9.859 9.859 0 0 0 1.63-1.142L7.155 7.216a9.7 9.7 0 0 0-1.161 1.607c.482.302.889.71 1.19 1.192Z"></path></svg>
            </div>

            <command-palette-item-group
              data-group-id="top"
              data-group-title="Top result"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="0"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="commands"
              data-group-title="Commands"
              data-group-hint="Type &gt; to filter"
              data-group-limits="{&quot;static_items_page&quot;:50,&quot;issue&quot;:50,&quot;pull_request&quot;:50,&quot;discussion&quot;:50}"
              data-default-priority="1"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="global_commands"
              data-group-title="Global Commands"
              data-group-hint="Type &gt; to filter"
              data-group-limits="{&quot;issue&quot;:0,&quot;pull_request&quot;:0,&quot;discussion&quot;:0}"
              data-default-priority="2"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="this_page"
              data-group-title="This Page"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="3"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="files"
              data-group-title="Files"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="4"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="default"
              data-group-title="Default"
              data-group-hint=""
              data-group-limits="{&quot;static_items_page&quot;:50}"
              data-default-priority="5"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="pages"
              data-group-title="Pages"
              data-group-hint=""
              data-group-limits="{&quot;repository&quot;:10}"
              data-default-priority="6"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="access_policies"
              data-group-title="Access Policies"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="7"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="organizations"
              data-group-title="Organizations"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="8"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="repositories"
              data-group-title="Repositories"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="9"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="references"
              data-group-title="Issues, pull requests, and discussions"
              data-group-hint="Type # to filter"
              data-group-limits="{}"
              data-default-priority="10"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="teams"
              data-group-title="Teams"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="11"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="users"
              data-group-title="Users"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="12"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="memex_projects"
              data-group-title="Projects"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="13"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="projects"
              data-group-title="Projects (classic)"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="14"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="footer"
              data-group-title="Footer"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="15"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="modes_help"
              data-group-title="Modes"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="16"
            >
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="filters_help"
              data-group-title="Use filters in issues, pull requests, discussions, and projects"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="17"
            >
            </command-palette-item-group>

            <command-palette-page
              data-page-title="hjdhnx"
              data-scope-id="MDQ6VXNlcjQ5ODAzMDk3"
              data-scope-type="owner"
              data-targets="command-palette-page-stack.defaultPages"
              hidden
            >
            </command-palette-page>
            <command-palette-page
              data-page-title="dr_py"
              data-scope-id="R_kgDOH82QDw"
              data-scope-type="repository"
              data-targets="command-palette-page-stack.defaultPages"
              hidden
            >
            </command-palette-page>
        </div>

        <command-palette-page data-is-root>
        </command-palette-page>
          <command-palette-page
            data-page-title="hjdhnx"
            data-scope-id="MDQ6VXNlcjQ5ODAzMDk3"
            data-scope-type="owner"
          >
          </command-palette-page>
          <command-palette-page
            data-page-title="dr_py"
            data-scope-id="R_kgDOH82QDw"
            data-scope-type="repository"
          >
          </command-palette-page>
      </command-palette-page-stack>

      <server-defined-provider data-type="search-links" data-targets="command-palette.serverDefinedProviderElements"></server-defined-provider>
      <server-defined-provider data-type="help" data-targets="command-palette.serverDefinedProviderElements">
          <command-palette-help
            data-group="modes_help"
              data-prefix="#"
              data-scope-types="[&quot;&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>issues</strong> and <strong>pull requests</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">#</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="#"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>issues, pull requests, discussions,</strong> and <strong>projects</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">#</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="@"
              data-scope-types="[&quot;&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>organizations, repositories,</strong> and <strong>users</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">@</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="!"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>projects</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">!</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="/"
              data-scope-types="[&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Search for <strong>files</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">/</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
              data-prefix="&gt;"
          >
            <span data-target="command-palette-help.titleElement">Activate <strong>command mode</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">&gt;</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# author:@me"
          >
            <span data-target="command-palette-help.titleElement">Search your issues, pull requests, and discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># author:@me</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# author:@me"
          >
            <span data-target="command-palette-help.titleElement">Search your issues, pull requests, and discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># author:@me</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:pr"
          >
            <span data-target="command-palette-help.titleElement">Filter to pull requests</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:pr</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:issue"
          >
            <span data-target="command-palette-help.titleElement">Filter to issues</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:issue</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:discussion"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Filter to discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:discussion</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:project"
              data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          >
            <span data-target="command-palette-help.titleElement">Filter to projects</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:project</kbd>
              </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
              data-prefix="# is:open"
          >
            <span data-target="command-palette-help.titleElement">Filter to open issues, pull requests, and discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:open</kbd>
              </span>
          </command-palette-help>
      </server-defined-provider>

        <server-defined-provider
          data-type="commands"
          data-fetch-debounce="0"
            data-src="/command_palette/commands"
          data-supported-modes="[]"
            data-supports-commands
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="prefetched"
          data-fetch-debounce="0"
            data-src="/command_palette/jump_to_page_navigation"
          data-supported-modes="[&quot;&quot;]"
            data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/issues"
          data-supported-modes="[&quot;#&quot;,&quot;#&quot;]"
            data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;,&quot;&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/jump_to"
          data-supported-modes="[&quot;@&quot;,&quot;@&quot;]"
            data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/jump_to_members_only"
          data-supported-modes="[&quot;@&quot;,&quot;@&quot;,&quot;&quot;,&quot;&quot;]"
            data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="prefetched"
          data-fetch-debounce="0"
            data-src="/command_palette/jump_to_members_only_prefetched"
          data-supported-modes="[&quot;@&quot;,&quot;@&quot;,&quot;&quot;,&quot;&quot;]"
            data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="files"
          data-fetch-debounce="0"
            data-src="/command_palette/files"
          data-supported-modes="[&quot;/&quot;]"
            data-supported-scope-types="[&quot;repository&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/discussions"
          data-supported-modes="[&quot;#&quot;]"
            data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/projects"
          data-supported-modes="[&quot;#&quot;,&quot;!&quot;]"
            data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="prefetched"
          data-fetch-debounce="0"
            data-src="/command_palette/recent_issues"
          data-supported-modes="[&quot;#&quot;,&quot;#&quot;]"
            data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;,&quot;&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/teams"
          data-supported-modes="[&quot;@&quot;,&quot;&quot;]"
            data-supported-scope-types="[&quot;owner&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
            data-src="/command_palette/name_with_owner_repository"
          data-supported-modes="[&quot;@&quot;,&quot;@&quot;,&quot;&quot;,&quot;&quot;]"
            data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;]"
          
          data-targets="command-palette.serverDefinedProviderElements"
          ></server-defined-provider>
    </command-palette>
  </details-dialog>
</details>

<div class="position-fixed bottom-0 left-0 ml-5 mb-5 js-command-palette-toasts" style="z-index: 1000">
  <div hidden class="Toast Toast--loading">
    <span class="Toast-icon">
      <svg class="Toast--spinner" viewBox="0 0 32 32" width="18" height="18" aria-hidden="true">
        <path
          fill="#959da5"
          d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
        />
        <path fill="#ffffff" d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"></path>
      </svg>
    </span>
    <span class="Toast-content"></span>
  </div>

  <div hidden class="anim-fade-in fast Toast Toast--error">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-stop">
    <path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>

  <div hidden class="anim-fade-in fast Toast Toast--warning">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>


  <div hidden class="anim-fade-in fast Toast Toast--success">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>

  <div hidden class="anim-fade-in fast Toast">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-info">
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>
</div>


  <div
    class="application-main "
    data-commit-hovercards-enabled
    data-discussion-hovercards-enabled
    data-issue-and-pr-hovercards-enabled
  >
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container" >
      
      
      






    
  <div id="repository-container-header" data-turbo-replace hidden></div>




<turbo-frame id="repo-content-turbo-frame" target="_top" data-turbo-action="advance" class="">
    <div id="repo-content-pjax-container" class="repository-content " >
      <a href="https://github.dev/" class="d-none js-github-dev-shortcut" data-hotkey=".,Alt+Meta+≥,Control+Alt+.">Open in github.dev</a>
  <a href="https://github.dev/" class="d-none js-github-dev-new-tab-shortcut" data-hotkey="Shift+.,Shift+&gt;,&gt;" target="_blank" rel="noopener noreferrer">Open in a new github.dev tab</a>
    <a class="d-none" data-hotkey=",,Alt+Meta+≤,Control+Alt+," target="_blank" href="/codespaces/new/hjdhnx/dr_py/tree/main?resume=1">Open in codespace</a>



    
      
    





<react-app
  app-name="react-code-view"
  initial-path="/hjdhnx/dr_py/blob/main/libs/sortName.js"
  style="min-height: calc(100vh - 62px)"
  data-ssr="false"
  data-lazy="false"
  data-alternate="false"
>
  
  <script type="application/json" data-target="react-app.embeddedData">{"payload":{"allShortcutsEnabled":true,"fileTree":{"libs":{"items":[{"name":"jar","path":"libs/jar","contentType":"directory"},{"name":"parse","path":"libs/parse","contentType":"directory"},{"name":"alist.js","path":"libs/alist.js","contentType":"file"},{"name":"alist.min.js","path":"libs/alist.min.js","contentType":"file"},{"name":"atob.js","path":"libs/atob.js","contentType":"file"},{"name":"base64.js","path":"libs/base64.js","contentType":"file"},{"name":"base64.min.js","path":"libs/base64.min.js","contentType":"file"},{"name":"cat_index.js","path":"libs/cat_index.js","contentType":"file"},{"name":"cheerio.min.js","path":"libs/cheerio.min.js","contentType":"file"},{"name":"cheerio.min.jsd","path":"libs/cheerio.min.jsd","contentType":"file"},{"name":"crypto-hiker.js","path":"libs/crypto-hiker.js","contentType":"file"},{"name":"crypto-js.js","path":"libs/crypto-js.js","contentType":"file"},{"name":"drT.js","path":"libs/drT.js","contentType":"file"},{"name":"drpy-ym.js","path":"libs/drpy-ym.js","contentType":"file"},{"name":"drpy.js","path":"libs/drpy.js","contentType":"file"},{"name":"drpy.min.js","path":"libs/drpy.min.js","contentType":"file"},{"name":"drpy.ym.js","path":"libs/drpy.ym.js","contentType":"file"},{"name":"drpy2-2838.js","path":"libs/drpy2-2838.js","contentType":"file"},{"name":"drpy2.js","path":"libs/drpy2.js","contentType":"file"},{"name":"drpy2.min.js","path":"libs/drpy2.min.js","contentType":"file"},{"name":"es6py.js","path":"libs/es6py.js","contentType":"file"},{"name":"exRegExp.js","path":"libs/exRegExp.js","contentType":"file"},{"name":"gbk.js","path":"libs/gbk.js","contentType":"file"},{"name":"gbk2.js","path":"libs/gbk2.js","contentType":"file"},{"name":"live2cms.js","path":"libs/live2cms.js","contentType":"file"},{"name":"live2mv.js","path":"libs/live2mv.js","contentType":"file"},{"name":"maomi_aes.js","path":"libs/maomi_aes.js","contentType":"file"},{"name":"mod.js","path":"libs/mod.js","contentType":"file"},{"name":"nameOrder.js","path":"libs/nameOrder.js","contentType":"file"},{"name":"pdf.js","path":"libs/pdf.js","contentType":"file"},{"name":"pinyin_getFirstLetterList.js","path":"libs/pinyin_getFirstLetterList.js","contentType":"file"},{"name":"pre.js","path":"libs/pre.js","contentType":"file"},{"name":"rsa.js","path":"libs/rsa.js","contentType":"file"},{"name":"searchFilter.js","path":"libs/searchFilter.js","contentType":"file"},{"name":"sortName.js","path":"libs/sortName.js","contentType":"file"},{"name":"underscore-esm-min.js","path":"libs/underscore-esm-min.js","contentType":"file"},{"name":"uri.min.js","path":"libs/uri.min.js","contentType":"file"},{"name":"util.ym.js","path":"libs/util.ym.js","contentType":"file"}],"totalCount":38},"":{"items":[{"name":".idea","path":".idea","contentType":"directory"},{"name":"base","path":"base","contentType":"directory"},{"name":"controllers","path":"controllers","contentType":"directory"},{"name":"doc","path":"doc","contentType":"directory"},{"name":"docker","path":"docker","contentType":"directory"},{"name":"images","path":"images","contentType":"directory"},{"name":"jiexi","path":"jiexi","contentType":"directory"},{"name":"js","path":"js","contentType":"directory"},{"name":"libs","path":"libs","contentType":"directory"},{"name":"logs","path":"logs","contentType":"directory"},{"name":"models","path":"models","contentType":"directory"},{"name":"py","path":"py","contentType":"directory"},{"name":"static","path":"static","contentType":"directory"},{"name":"super","path":"super","contentType":"directory"},{"name":"templates","path":"templates","contentType":"directory"},{"name":"test","path":"test","contentType":"directory"},{"name":"txt","path":"txt","contentType":"directory"},{"name":"utils","path":"utils","contentType":"directory"},{"name":"whl","path":"whl","contentType":"directory"},{"name":"zhengban","path":"zhengban","contentType":"directory"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"404.jpg","path":"404.jpg","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"app.py","path":"app.py","contentType":"file"},{"name":"app.sh","path":"app.sh","contentType":"file"},{"name":"commands.txt","path":"commands.txt","contentType":"file"},{"name":"dockerfile","path":"dockerfile","contentType":"file"},{"name":"dockerfile_arm64.txt","path":"dockerfile_arm64.txt","contentType":"file"},{"name":"dockerfile_armv7.txt","path":"dockerfile_armv7.txt","contentType":"file"},{"name":"drpy_js_rule.js","path":"drpy_js_rule.js","contentType":"file"},{"name":"readme.md","path":"readme.md","contentType":"file"},{"name":"requirements.txt","path":"requirements.txt","contentType":"file"},{"name":"sources.list","path":"sources.list","contentType":"file"},{"name":"start.sh","path":"start.sh","contentType":"file"}],"totalCount":34}},"fileTreeProcessingTime":6.897935,"foldersToFetch":[],"reducedMotionEnabled":"system","repo":{"id":533565455,"defaultBranch":"main","name":"dr_py","ownerLogin":"hjdhnx","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2022-09-07T09:54:07.000+08:00","ownerAvatar":"https://avatars.githubusercontent.com/u/49803097?v=4","public":true,"private":false,"isOrgOwned":false},"symbolsExpanded":false,"treeExpanded":true,"refInfo":{"name":"main","listCacheKey":"v0:1696329988.0","canEdit":true,"refType":"branch","currentOid":"fde84cfa7523179df20601cfc560c55fcbe9f5de"},"path":"libs/sortName.js","currentUser":{"id":139020806,"login":"gogorotv","userEmail":"gogoro2024@gmail.com"},"blob":{"rawLines":["var strChineseFirstPY = \"YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY\";","//此处收录了375个多音字","var oMultiDiff = { \"19969\": \"DZ\", \"19975\": \"WM\", \"19988\": \"QJ\", \"20048\": \"YL\", \"20056\": \"SC\", \"20060\": \"NM\", \"20094\": \"QG\", \"20127\": \"QJ\", \"20167\": \"QC\", \"20193\": \"YG\", \"20250\": \"KH\", \"20256\": \"ZC\", \"20282\": \"SC\", \"20285\": \"QJG\", \"20291\": \"TD\", \"20314\": \"YD\", \"20340\": \"NE\", \"20375\": \"TD\", \"20389\": \"YJ\", \"20391\": \"CZ\", \"20415\": \"PB\", \"20446\": \"YS\", \"20447\": \"SQ\", \"20504\": \"TC\", \"20608\": \"KG\", \"20854\": \"QJ\", \"20857\": \"ZC\", \"20911\": \"PF\", \"20504\": \"TC\", \"20608\": \"KG\", \"20854\": \"QJ\", \"20857\": \"ZC\", \"20911\": \"PF\", \"20985\": \"AW\", \"21032\": \"PB\", \"21048\": \"XQ\", \"21049\": \"SC\", \"21089\": \"YS\", \"21119\": \"JC\", \"21242\": \"SB\", \"21273\": \"SC\", \"21305\": \"YP\", \"21306\": \"QO\", \"21330\": \"ZC\", \"21333\": \"SDC\", \"21345\": \"QK\", \"21378\": \"CA\", \"21397\": \"SC\", \"21414\": \"XS\", \"21442\": \"SC\", \"21477\": \"JG\", \"21480\": \"TD\", \"21484\": \"ZS\", \"21494\": \"YX\", \"21505\": \"YX\", \"21512\": \"HG\", \"21523\": \"XH\", \"21537\": \"PB\", \"21542\": \"PF\", \"21549\": \"KH\", \"21571\": \"E\", \"21574\": \"DA\", \"21588\": \"TD\", \"21589\": \"O\", \"21618\": \"ZC\", \"21621\": \"KHA\", \"21632\": \"ZJ\", \"21654\": \"KG\", \"21679\": \"LKG\", \"21683\": \"KH\", \"21710\": \"A\", \"21719\": \"YH\", \"21734\": \"WOE\", \"21769\": \"A\", \"21780\": \"WN\", \"21804\": \"XH\", \"21834\": \"A\", \"21899\": \"ZD\", \"21903\": \"RN\", \"21908\": \"WO\", \"21939\": \"ZC\", \"21956\": \"SA\", \"21964\": \"YA\", \"21970\": \"TD\", \"22003\": \"A\", \"22031\": \"JG\", \"22040\": \"XS\", \"22060\": \"ZC\", \"22066\": \"ZC\", \"22079\": \"MH\", \"22129\": \"XJ\", \"22179\": \"XA\", \"22237\": \"NJ\", \"22244\": \"TD\", \"22280\": \"JQ\", \"22300\": \"YH\", \"22313\": \"XW\", \"22331\": \"YQ\", \"22343\": \"YJ\", \"22351\": \"PH\", \"22395\": \"DC\", \"22412\": \"TD\", \"22484\": \"PB\", \"22500\": \"PB\", \"22534\": \"ZD\", \"22549\": \"DH\", \"22561\": \"PB\", \"22612\": \"TD\", \"22771\": \"KQ\", \"22831\": \"HB\", \"22841\": \"JG\", \"22855\": \"QJ\", \"22865\": \"XQ\", \"23013\": \"ML\", \"23081\": \"WM\", \"23487\": \"SX\", \"23558\": \"QJ\", \"23561\": \"YW\", \"23586\": \"YW\", \"23614\": \"YW\", \"23615\": \"SN\", \"23631\": \"PB\", \"23646\": \"ZS\", \"23663\": \"ZT\", \"23673\": \"YG\", \"23762\": \"TD\", \"23769\": \"ZS\", \"23780\": \"QJ\", \"23884\": \"QK\", \"24055\": \"XH\", \"24113\": \"DC\", \"24162\": \"ZC\", \"24191\": \"GA\", \"24273\": \"QJ\", \"24324\": \"NL\", \"24377\": \"TD\", \"24378\": \"QJ\", \"24439\": \"PF\", \"24554\": \"ZS\", \"24683\": \"TD\", \"24694\": \"WE\", \"24733\": \"LK\", \"24925\": \"TN\", \"25094\": \"ZG\", \"25100\": \"XQ\", \"25103\": \"XH\", \"25153\": \"PB\", \"25170\": \"PB\", \"25179\": \"KG\", \"25203\": \"PB\", \"25240\": \"ZS\", \"25282\": \"FB\", \"25303\": \"NA\", \"25324\": \"KG\", \"25341\": \"ZY\", \"25373\": \"WZ\", \"25375\": \"XJ\", \"25384\": \"A\", \"25457\": \"A\", \"25528\": \"SD\", \"25530\": \"SC\", \"25552\": \"TD\", \"25774\": \"ZC\", \"25874\": \"ZC\", \"26044\": \"YW\", \"26080\": \"WM\", \"26292\": \"PB\", \"26333\": \"PB\", \"26355\": \"ZY\", \"26366\": \"CZ\", \"26397\": \"ZC\", \"26399\": \"QJ\", \"26415\": \"ZS\", \"26451\": \"SB\", \"26526\": \"ZC\", \"26552\": \"JG\", \"26561\": \"TD\", \"26588\": \"JG\", \"26597\": \"CZ\", \"26629\": \"ZS\", \"26638\": \"YL\", \"26646\": \"XQ\", \"26653\": \"KG\", \"26657\": \"XJ\", \"26727\": \"HG\", \"26894\": \"ZC\", \"26937\": \"ZS\", \"26946\": \"ZC\", \"26999\": \"KJ\", \"27099\": \"KJ\", \"27449\": \"YQ\", \"27481\": \"XS\", \"27542\": \"ZS\", \"27663\": \"ZS\", \"27748\": \"TS\", \"27784\": \"SC\", \"27788\": \"ZD\", \"27795\": \"TD\", \"27812\": \"O\", \"27850\": \"PB\", \"27852\": \"MB\", \"27895\": \"SL\", \"27898\": \"PL\", \"27973\": \"QJ\", \"27981\": \"KH\", \"27986\": \"HX\", \"27994\": \"XJ\", \"28044\": \"YC\", \"28065\": \"WG\", \"28177\": \"SM\", \"28267\": \"QJ\", \"28291\": \"KH\", \"28337\": \"ZQ\", \"28463\": \"TL\", \"28548\": \"DC\", \"28601\": \"TD\", \"28689\": \"PB\", \"28805\": \"JG\", \"28820\": \"QG\", \"28846\": \"PB\", \"28952\": \"TD\", \"28975\": \"ZC\", \"29100\": \"A\", \"29325\": \"QJ\", \"29575\": \"SL\", \"29602\": \"FB\", \"30010\": \"TD\", \"30044\": \"CX\", \"30058\": \"PF\", \"30091\": \"YSP\", \"30111\": \"YN\", \"30229\": \"XJ\", \"30427\": \"SC\", \"30465\": \"SX\", \"30631\": \"YQ\", \"30655\": \"QJ\", \"30684\": \"QJG\", \"30707\": \"SD\", \"30729\": \"XH\", \"30796\": \"LG\", \"30917\": \"PB\", \"31074\": \"NM\", \"31085\": \"JZ\", \"31109\": \"SC\", \"31181\": \"ZC\", \"31192\": \"MLB\", \"31293\": \"JQ\", \"31400\": \"YX\", \"31584\": \"YJ\", \"31896\": \"ZN\", \"31909\": \"ZY\", \"31995\": \"XJ\", \"32321\": \"PF\", \"32327\": \"ZY\", \"32418\": \"HG\", \"32420\": \"XQ\", \"32421\": \"HG\", \"32438\": \"LG\", \"32473\": \"GJ\", \"32488\": \"TD\", \"32521\": \"QJ\", \"32527\": \"PB\", \"32562\": \"ZSQ\", \"32564\": \"JZ\", \"32735\": \"ZD\", \"32793\": \"PB\", \"33071\": \"PF\", \"33098\": \"XL\", \"33100\": \"YA\", \"33152\": \"PB\", \"33261\": \"CX\", \"33324\": \"BP\", \"33333\": \"TD\", \"33406\": \"YA\", \"33426\": \"WM\", \"33432\": \"PB\", \"33445\": \"JG\", \"33486\": \"ZN\", \"33493\": \"TS\", \"33507\": \"QJ\", \"33540\": \"QJ\", \"33544\": \"ZC\", \"33564\": \"XQ\", \"33617\": \"YT\", \"33632\": \"QJ\", \"33636\": \"XH\", \"33637\": \"YX\", \"33694\": \"WG\", \"33705\": \"PF\", \"33728\": \"YW\", \"33882\": \"SR\", \"34067\": \"WM\", \"34074\": \"YW\", \"34121\": \"QJ\", \"34255\": \"ZC\", \"34259\": \"XL\", \"34425\": \"JH\", \"34430\": \"XH\", \"34485\": \"KH\", \"34503\": \"YS\", \"34532\": \"HG\", \"34552\": \"XS\", \"34558\": \"YE\", \"34593\": \"ZL\", \"34660\": \"YQ\", \"34892\": \"XH\", \"34928\": \"SC\", \"34999\": \"QJ\", \"35048\": \"PB\", \"35059\": \"SC\", \"35098\": \"ZC\", \"35203\": \"TQ\", \"35265\": \"JX\", \"35299\": \"JX\", \"35782\": \"SZ\", \"35828\": \"YS\", \"35830\": \"E\", \"35843\": \"TD\", \"35895\": \"YG\", \"35977\": \"MH\", \"36158\": \"JG\", \"36228\": \"QJ\", \"36426\": \"XQ\", \"36466\": \"DC\", \"36710\": \"JC\", \"36711\": \"ZYG\", \"36767\": \"PB\", \"36866\": \"SK\", \"36951\": \"YW\", \"37034\": \"YX\", \"37063\": \"XH\", \"37218\": \"ZC\", \"37325\": \"ZC\", \"38063\": \"PB\", \"38079\": \"TD\", \"38085\": \"QY\", \"38107\": \"DC\", \"38116\": \"TD\", \"38123\": \"YD\", \"38224\": \"HG\", \"38241\": \"XTC\", \"38271\": \"ZC\", \"38415\": \"YE\", \"38426\": \"KH\", \"38461\": \"YD\", \"38463\": \"AE\", \"38466\": \"PB\", \"38477\": \"XJ\", \"38518\": \"YT\", \"38551\": \"WK\", \"38585\": \"ZC\", \"38704\": \"XS\", \"38739\": \"LJ\", \"38761\": \"GJ\", \"38808\": \"SQ\", \"39048\": \"JG\", \"39049\": \"XJ\", \"39052\": \"HG\", \"39076\": \"CZ\", \"39271\": \"XT\", \"39534\": \"TD\", \"39552\": \"TD\", \"39584\": \"PB\", \"39647\": \"SB\", \"39730\": \"LG\", \"39748\": \"TPB\", \"40109\": \"ZQ\", \"40479\": \"ND\", \"40516\": \"HG\", \"40536\": \"HG\", \"40583\": \"QJ\", \"40765\": \"YQ\", \"40784\": \"QJ\", \"40840\": \"YK\", \"40863\": \"QJG\" };","","","function checkCh(ch) {","    var uni = ch.charCodeAt(0);","    //如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数","    if (uni \u003e 40869 || uni \u003c 19968)","        return ch; //dealWithOthers(ch);","    //检查是否是多音字,是按多音字处理,不是就直接在strChineseFirstPY字符串中找对应的首字母","    return (oMultiDiff[uni] ? oMultiDiff[uni] : (strChineseFirstPY.charAt(uni - 19968)));","}","","function mkRslt(arr) {","    var arrRslt = [\"\"];","    for (var i = 0, len = arr.length; i \u003c len; i++) {","        var str = arr[i];","        var strlen = str.length;","        if (strlen == 1) {","            for (var k = 0; k \u003c arrRslt.length; k++) {","                arrRslt[k] += str;","            }","        } else {","            var tmpArr = arrRslt.slice(0);","            arrRslt = [];","            for (k = 0; k \u003c strlen; k++) {","                //复制一个相同的arrRslt","                var tmp = tmpArr.slice(0);","                //把当前字符str[k]添加到每个元素末尾","                for (var j = 0; j \u003c tmp.length; j++) {","                    tmp[j] += str.charAt(k);","                }","                //把复制并修改后的数组连接到arrRslt上","                arrRslt = arrRslt.concat(tmp);","            }","        }","    }","    return arrRslt;","}","//两端去空格函数","String.prototype.trim = function() { return this.replace(/(^\\s*)|(\\s*$)/g, \"\"); }","","//参数——中文字符串","//返回值——拼音首字母串数组","export function getFirstLetterList(str) {","    if (typeof(str) != \"string\")","        throw new Error(-1, \"请传入字符串类型的参数!\");","    var arrResult = new Array(); //保存中间结果的数组","    for (var i = 0, len = str.length; i \u003c len; i++) {","        //获得unicode码","        var ch = str.charAt(i);","        //检查该unicode码是否在处理范围之内,在则返回该码对映汉字的拼音首字母,不在则调用其它函数处理","        arrResult.push(checkCh(ch));","    }","    //处理arrResult,返回所有可能的拼音首字母串数组","    return mkRslt(arrResult);","}","","// 判断字符串是否全是中文","function isAllChinese(str) {","    return /^[\\u4E00-\\u9FA5]+$/.test(str);","}","","// 判断字符是否为中文","function isChinese(char) {","    return /^[\\u4E00-\\u9FA5]$/.test(char);","}","","// 中文拼音名称排序","export const sortListByCN = (vodList,key,order) =\u003e {","    if(!key){","        return vodList","    }","    order = order||'asc'; // 默认正序","    let ASCarr = vodList.sort((a, b) =\u003e {","        a = a[key];","        b = b[key];","        // 数字排在字符串前面","        if (typeof a === 'number' \u0026\u0026 typeof b === 'string') {","            return -1;","        }","","        if (typeof a === 'string' \u0026\u0026 typeof b === 'number') {","            return 1;","        }","","        // 当存在非数字时","        if (isNaN(a) || isNaN(b)) {","","            // 全汉字的排在非全汉字的后面","            if (isAllChinese(a) \u0026\u0026 !isAllChinese(b)) {","                return 1;","            }","","            if (!isAllChinese(a) \u0026\u0026 isAllChinese(b)) {","                return -1;","            }","","            // 存在非数字的数据时，都转为字符串进行比较","            a = a.toString();","            b = b.toString();","","            let result = 0;","","            // 依次比较两个字符串的各项字符","            for (let index = 0; index \u003c ((a.length - b.length) ? b.length : a.length); index++) {","","                // 汉字排在非汉字的后面","                if (!isChinese(a[index]) \u0026\u0026 isChinese(b[index])) {","                    result = -1;","                }","","                if (isChinese(a[index]) \u0026\u0026 !isChinese(b[index])) {","                    result = 1;","                }","","                // 若两个汉字进行比较，则比较他们的拼音首字母","                if (isChinese(a[index]) \u0026\u0026 isChinese(b[index])) {","                    let pinyinA = getFirstLetterList(a[index]).toString();","                    let pinyinB = getFirstLetterList(b[index]).toString();","","                    result = pinyinA.localeCompare(pinyinB, 'zh-Hans-CN', { sensitivity: 'accent' });","                }","","                // 若已经比较出结果，则跳出循环，不再继续比较剩余字符","                if (result !== 0) {","                    break","                }","            }","","            // 只要有一个无法转换为数字——转换为字符串进行比较——先按字符排序，然后按照数字排序","            return result || a.toString().localeCompare(b.toString(), 'zh-Hans-CN', { sensitivity: 'accent' });","        } else {","            // 都能转换为数字——转换为数字进行比较——从小到大排序","            return Number(a) - Number(b);","        }","    });","    if(order==='desc'){","        ASCarr.reverse();","    }","    return ASCarr","};","","// 首字母开头排序","export const sortListByFirst = (vodList,key) =\u003e {","    key = key||'vod_name';","    // 名字以特殊符号开头的应用列表","    const symbol_list = [];","    // 名字以中文开头的应用列表","    const cn_list = [];","    // 名字以英文开头的应用列表","    const en_list = [];","    // 名字以数字开头的应用列表","    const num_list = [];","","    vodList.forEach((vod) =\u003e {","        const { vod_name } = vod;","        //通过正则进行数据分类","        if (/[\\u4e00-\\u9fa5]/.test(vod_name[0])) {","            cn_list.push(vod);","        } else if (/[a-zA-Z]/.test(vod_name[0])) {","            en_list.push(vod);","        } else if (/[\\d]/.test(vod_name[0])) {","            num_list.push(vod);","        } else {","            symbol_list.push(vod);","        }","    });","    //按照要求的方式进行数据排序重组","    const newList = [","        ...cn_list.sort((a, b) =\u003e a.vod_name[0]?.localeCompare(b.vod_name[0])),","        ...en_list.sort((a, b) =\u003e a.vod_name[0].localeCompare(b.vod_name[0])),//localeCompare可以不区分大小写的进行排序","        ...num_list.sort((a, b) =\u003e a.vod_name[0] - b.vod_name[0]),","        ...symbol_list.sort((a, b) =\u003e a.vod_name[0] - b.vod_name[0])","    ];","    return newList","};"],"stylingDirectives":[[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":21,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":20928,"cssClass":"pl-s"},{"start":20928,"end":20929,"cssClass":"pl-kos"}],[{"start":0,"end":14,"cssClass":"pl-c"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":26,"cssClass":"pl-s"},{"start":28,"end":32,"cssClass":"pl-s"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":41,"cssClass":"pl-s"},{"start":43,"end":47,"cssClass":"pl-s"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":49,"end":56,"cssClass":"pl-s"},{"start":58,"end":62,"cssClass":"pl-s"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":64,"end":71,"cssClass":"pl-s"},{"start":73,"end":77,"cssClass":"pl-s"},{"start":77,"end":78,"cssClass":"pl-kos"},{"start":79,"end":86,"cssClass":"pl-s"},{"start":88,"end":92,"cssClass":"pl-s"},{"start":92,"end":93,"cssClass":"pl-kos"},{"start":94,"end":101,"cssClass":"pl-s"},{"start":103,"end":107,"cssClass":"pl-s"},{"start":107,"end":108,"cssClass":"pl-kos"},{"start":109,"end":116,"cssClass":"pl-s"},{"start":118,"end":122,"cssClass":"pl-s"},{"start":122,"end":123,"cssClass":"pl-kos"},{"start":124,"end":131,"cssClass":"pl-s"},{"start":133,"end":137,"cssClass":"pl-s"},{"start":137,"end":138,"cssClass":"pl-kos"},{"start":139,"end":146,"cssClass":"pl-s"},{"start":148,"end":152,"cssClass":"pl-s"},{"start":152,"end":153,"cssClass":"pl-kos"},{"start":154,"end":161,"cssClass":"pl-s"},{"start":163,"end":167,"cssClass":"pl-s"},{"start":167,"end":168,"cssClass":"pl-kos"},{"start":169,"end":176,"cssClass":"pl-s"},{"start":178,"end":182,"cssClass":"pl-s"},{"start":182,"end":183,"cssClass":"pl-kos"},{"start":184,"end":191,"cssClass":"pl-s"},{"start":193,"end":197,"cssClass":"pl-s"},{"start":197,"end":198,"cssClass":"pl-kos"},{"start":199,"end":206,"cssClass":"pl-s"},{"start":208,"end":212,"cssClass":"pl-s"},{"start":212,"end":213,"cssClass":"pl-kos"},{"start":214,"end":221,"cssClass":"pl-s"},{"start":223,"end":228,"cssClass":"pl-s"},{"start":228,"end":229,"cssClass":"pl-kos"},{"start":230,"end":237,"cssClass":"pl-s"},{"start":239,"end":243,"cssClass":"pl-s"},{"start":243,"end":244,"cssClass":"pl-kos"},{"start":245,"end":252,"cssClass":"pl-s"},{"start":254,"end":258,"cssClass":"pl-s"},{"start":258,"end":259,"cssClass":"pl-kos"},{"start":260,"end":267,"cssClass":"pl-s"},{"start":269,"end":273,"cssClass":"pl-s"},{"start":273,"end":274,"cssClass":"pl-kos"},{"start":275,"end":282,"cssClass":"pl-s"},{"start":284,"end":288,"cssClass":"pl-s"},{"start":288,"end":289,"cssClass":"pl-kos"},{"start":290,"end":297,"cssClass":"pl-s"},{"start":299,"end":303,"cssClass":"pl-s"},{"start":303,"end":304,"cssClass":"pl-kos"},{"start":305,"end":312,"cssClass":"pl-s"},{"start":314,"end":318,"cssClass":"pl-s"},{"start":318,"end":319,"cssClass":"pl-kos"},{"start":320,"end":327,"cssClass":"pl-s"},{"start":329,"end":333,"cssClass":"pl-s"},{"start":333,"end":334,"cssClass":"pl-kos"},{"start":335,"end":342,"cssClass":"pl-s"},{"start":344,"end":348,"cssClass":"pl-s"},{"start":348,"end":349,"cssClass":"pl-kos"},{"start":350,"end":357,"cssClass":"pl-s"},{"start":359,"end":363,"cssClass":"pl-s"},{"start":363,"end":364,"cssClass":"pl-kos"},{"start":365,"end":372,"cssClass":"pl-s"},{"start":374,"end":378,"cssClass":"pl-s"},{"start":378,"end":379,"cssClass":"pl-kos"},{"start":380,"end":387,"cssClass":"pl-s"},{"start":389,"end":393,"cssClass":"pl-s"},{"start":393,"end":394,"cssClass":"pl-kos"},{"start":395,"end":402,"cssClass":"pl-s"},{"start":404,"end":408,"cssClass":"pl-s"},{"start":408,"end":409,"cssClass":"pl-kos"},{"start":410,"end":417,"cssClass":"pl-s"},{"start":419,"end":423,"cssClass":"pl-s"},{"start":423,"end":424,"cssClass":"pl-kos"},{"start":425,"end":432,"cssClass":"pl-s"},{"start":434,"end":438,"cssClass":"pl-s"},{"start":438,"end":439,"cssClass":"pl-kos"},{"start":440,"end":447,"cssClass":"pl-s"},{"start":449,"end":453,"cssClass":"pl-s"},{"start":453,"end":454,"cssClass":"pl-kos"},{"start":455,"end":462,"cssClass":"pl-s"},{"start":464,"end":468,"cssClass":"pl-s"},{"start":468,"end":469,"cssClass":"pl-kos"},{"start":470,"end":477,"cssClass":"pl-s"},{"start":479,"end":483,"cssClass":"pl-s"},{"start":483,"end":484,"cssClass":"pl-kos"},{"start":485,"end":492,"cssClass":"pl-s"},{"start":494,"end":498,"cssClass":"pl-s"},{"start":498,"end":499,"cssClass":"pl-kos"},{"start":500,"end":507,"cssClass":"pl-s"},{"start":509,"end":513,"cssClass":"pl-s"},{"start":513,"end":514,"cssClass":"pl-kos"},{"start":515,"end":522,"cssClass":"pl-s"},{"start":524,"end":528,"cssClass":"pl-s"},{"start":528,"end":529,"cssClass":"pl-kos"},{"start":530,"end":537,"cssClass":"pl-s"},{"start":539,"end":543,"cssClass":"pl-s"},{"start":543,"end":544,"cssClass":"pl-kos"},{"start":545,"end":552,"cssClass":"pl-s"},{"start":554,"end":558,"cssClass":"pl-s"},{"start":558,"end":559,"cssClass":"pl-kos"},{"start":560,"end":567,"cssClass":"pl-s"},{"start":569,"end":573,"cssClass":"pl-s"},{"start":573,"end":574,"cssClass":"pl-kos"},{"start":575,"end":582,"cssClass":"pl-s"},{"start":584,"end":588,"cssClass":"pl-s"},{"start":588,"end":589,"cssClass":"pl-kos"},{"start":590,"end":597,"cssClass":"pl-s"},{"start":599,"end":603,"cssClass":"pl-s"},{"start":603,"end":604,"cssClass":"pl-kos"},{"start":605,"end":612,"cssClass":"pl-s"},{"start":614,"end":618,"cssClass":"pl-s"},{"start":618,"end":619,"cssClass":"pl-kos"},{"start":620,"end":627,"cssClass":"pl-s"},{"start":629,"end":633,"cssClass":"pl-s"},{"start":633,"end":634,"cssClass":"pl-kos"},{"start":635,"end":642,"cssClass":"pl-s"},{"start":644,"end":648,"cssClass":"pl-s"},{"start":648,"end":649,"cssClass":"pl-kos"},{"start":650,"end":657,"cssClass":"pl-s"},{"start":659,"end":663,"cssClass":"pl-s"},{"start":663,"end":664,"cssClass":"pl-kos"},{"start":665,"end":672,"cssClass":"pl-s"},{"start":674,"end":678,"cssClass":"pl-s"},{"start":678,"end":679,"cssClass":"pl-kos"},{"start":680,"end":687,"cssClass":"pl-s"},{"start":689,"end":694,"cssClass":"pl-s"},{"start":694,"end":695,"cssClass":"pl-kos"},{"start":696,"end":703,"cssClass":"pl-s"},{"start":705,"end":709,"cssClass":"pl-s"},{"start":709,"end":710,"cssClass":"pl-kos"},{"start":711,"end":718,"cssClass":"pl-s"},{"start":720,"end":724,"cssClass":"pl-s"},{"start":724,"end":725,"cssClass":"pl-kos"},{"start":726,"end":733,"cssClass":"pl-s"},{"start":735,"end":739,"cssClass":"pl-s"},{"start":739,"end":740,"cssClass":"pl-kos"},{"start":741,"end":748,"cssClass":"pl-s"},{"start":750,"end":754,"cssClass":"pl-s"},{"start":754,"end":755,"cssClass":"pl-kos"},{"start":756,"end":763,"cssClass":"pl-s"},{"start":765,"end":769,"cssClass":"pl-s"},{"start":769,"end":770,"cssClass":"pl-kos"},{"start":771,"end":778,"cssClass":"pl-s"},{"start":780,"end":784,"cssClass":"pl-s"},{"start":784,"end":785,"cssClass":"pl-kos"},{"start":786,"end":793,"cssClass":"pl-s"},{"start":795,"end":799,"cssClass":"pl-s"},{"start":799,"end":800,"cssClass":"pl-kos"},{"start":801,"end":808,"cssClass":"pl-s"},{"start":810,"end":814,"cssClass":"pl-s"},{"start":814,"end":815,"cssClass":"pl-kos"},{"start":816,"end":823,"cssClass":"pl-s"},{"start":825,"end":829,"cssClass":"pl-s"},{"start":829,"end":830,"cssClass":"pl-kos"},{"start":831,"end":838,"cssClass":"pl-s"},{"start":840,"end":844,"cssClass":"pl-s"},{"start":844,"end":845,"cssClass":"pl-kos"},{"start":846,"end":853,"cssClass":"pl-s"},{"start":855,"end":859,"cssClass":"pl-s"},{"start":859,"end":860,"cssClass":"pl-kos"},{"start":861,"end":868,"cssClass":"pl-s"},{"start":870,"end":874,"cssClass":"pl-s"},{"start":874,"end":875,"cssClass":"pl-kos"},{"start":876,"end":883,"cssClass":"pl-s"},{"start":885,"end":889,"cssClass":"pl-s"},{"start":889,"end":890,"cssClass":"pl-kos"},{"start":891,"end":898,"cssClass":"pl-s"},{"start":900,"end":904,"cssClass":"pl-s"},{"start":904,"end":905,"cssClass":"pl-kos"},{"start":906,"end":913,"cssClass":"pl-s"},{"start":915,"end":919,"cssClass":"pl-s"},{"start":919,"end":920,"cssClass":"pl-kos"},{"start":921,"end":928,"cssClass":"pl-s"},{"start":930,"end":933,"cssClass":"pl-s"},{"start":933,"end":934,"cssClass":"pl-kos"},{"start":935,"end":942,"cssClass":"pl-s"},{"start":944,"end":948,"cssClass":"pl-s"},{"start":948,"end":949,"cssClass":"pl-kos"},{"start":950,"end":957,"cssClass":"pl-s"},{"start":959,"end":963,"cssClass":"pl-s"},{"start":963,"end":964,"cssClass":"pl-kos"},{"start":965,"end":972,"cssClass":"pl-s"},{"start":974,"end":977,"cssClass":"pl-s"},{"start":977,"end":978,"cssClass":"pl-kos"},{"start":979,"end":986,"cssClass":"pl-s"},{"start":988,"end":992,"cssClass":"pl-s"},{"start":992,"end":993,"cssClass":"pl-kos"},{"start":994,"end":1001,"cssClass":"pl-s"},{"start":1003,"end":1008,"cssClass":"pl-s"},{"start":1008,"end":1009,"cssClass":"pl-kos"},{"start":1010,"end":1017,"cssClass":"pl-s"},{"start":1019,"end":1023,"cssClass":"pl-s"},{"start":1023,"end":1024,"cssClass":"pl-kos"},{"start":1025,"end":1032,"cssClass":"pl-s"},{"start":1034,"end":1038,"cssClass":"pl-s"},{"start":1038,"end":1039,"cssClass":"pl-kos"},{"start":1040,"end":1047,"cssClass":"pl-s"},{"start":1049,"end":1054,"cssClass":"pl-s"},{"start":1054,"end":1055,"cssClass":"pl-kos"},{"start":1056,"end":1063,"cssClass":"pl-s"},{"start":1065,"end":1069,"cssClass":"pl-s"},{"start":1069,"end":1070,"cssClass":"pl-kos"},{"start":1071,"end":1078,"cssClass":"pl-s"},{"start":1080,"end":1083,"cssClass":"pl-s"},{"start":1083,"end":1084,"cssClass":"pl-kos"},{"start":1085,"end":1092,"cssClass":"pl-s"},{"start":1094,"end":1098,"cssClass":"pl-s"},{"start":1098,"end":1099,"cssClass":"pl-kos"},{"start":1100,"end":1107,"cssClass":"pl-s"},{"start":1109,"end":1114,"cssClass":"pl-s"},{"start":1114,"end":1115,"cssClass":"pl-kos"},{"start":1116,"end":1123,"cssClass":"pl-s"},{"start":1125,"end":1128,"cssClass":"pl-s"},{"start":1128,"end":1129,"cssClass":"pl-kos"},{"start":1130,"end":1137,"cssClass":"pl-s"},{"start":1139,"end":1143,"cssClass":"pl-s"},{"start":1143,"end":1144,"cssClass":"pl-kos"},{"start":1145,"end":1152,"cssClass":"pl-s"},{"start":1154,"end":1158,"cssClass":"pl-s"},{"start":1158,"end":1159,"cssClass":"pl-kos"},{"start":1160,"end":1167,"cssClass":"pl-s"},{"start":1169,"end":1172,"cssClass":"pl-s"},{"start":1172,"end":1173,"cssClass":"pl-kos"},{"start":1174,"end":1181,"cssClass":"pl-s"},{"start":1183,"end":1187,"cssClass":"pl-s"},{"start":1187,"end":1188,"cssClass":"pl-kos"},{"start":1189,"end":1196,"cssClass":"pl-s"},{"start":1198,"end":1202,"cssClass":"pl-s"},{"start":1202,"end":1203,"cssClass":"pl-kos"},{"start":1204,"end":1211,"cssClass":"pl-s"},{"start":1213,"end":1217,"cssClass":"pl-s"},{"start":1217,"end":1218,"cssClass":"pl-kos"},{"start":1219,"end":1226,"cssClass":"pl-s"},{"start":1228,"end":1232,"cssClass":"pl-s"},{"start":1232,"end":1233,"cssClass":"pl-kos"},{"start":1234,"end":1241,"cssClass":"pl-s"},{"start":1243,"end":1247,"cssClass":"pl-s"},{"start":1247,"end":1248,"cssClass":"pl-kos"},{"start":1249,"end":1256,"cssClass":"pl-s"},{"start":1258,"end":1262,"cssClass":"pl-s"},{"start":1262,"end":1263,"cssClass":"pl-kos"},{"start":1264,"end":1271,"cssClass":"pl-s"},{"start":1273,"end":1277,"cssClass":"pl-s"},{"start":1277,"end":1278,"cssClass":"pl-kos"},{"start":1279,"end":1286,"cssClass":"pl-s"},{"start":1288,"end":1291,"cssClass":"pl-s"},{"start":1291,"end":1292,"cssClass":"pl-kos"},{"start":1293,"end":1300,"cssClass":"pl-s"},{"start":1302,"end":1306,"cssClass":"pl-s"},{"start":1306,"end":1307,"cssClass":"pl-kos"},{"start":1308,"end":1315,"cssClass":"pl-s"},{"start":1317,"end":1321,"cssClass":"pl-s"},{"start":1321,"end":1322,"cssClass":"pl-kos"},{"start":1323,"end":1330,"cssClass":"pl-s"},{"start":1332,"end":1336,"cssClass":"pl-s"},{"start":1336,"end":1337,"cssClass":"pl-kos"},{"start":1338,"end":1345,"cssClass":"pl-s"},{"start":1347,"end":1351,"cssClass":"pl-s"},{"start":1351,"end":1352,"cssClass":"pl-kos"},{"start":1353,"end":1360,"cssClass":"pl-s"},{"start":1362,"end":1366,"cssClass":"pl-s"},{"start":1366,"end":1367,"cssClass":"pl-kos"},{"start":1368,"end":1375,"cssClass":"pl-s"},{"start":1377,"end":1381,"cssClass":"pl-s"},{"start":1381,"end":1382,"cssClass":"pl-kos"},{"start":1383,"end":1390,"cssClass":"pl-s"},{"start":1392,"end":1396,"cssClass":"pl-s"},{"start":1396,"end":1397,"cssClass":"pl-kos"},{"start":1398,"end":1405,"cssClass":"pl-s"},{"start":1407,"end":1411,"cssClass":"pl-s"},{"start":1411,"end":1412,"cssClass":"pl-kos"},{"start":1413,"end":1420,"cssClass":"pl-s"},{"start":1422,"end":1426,"cssClass":"pl-s"},{"start":1426,"end":1427,"cssClass":"pl-kos"},{"start":1428,"end":1435,"cssClass":"pl-s"},{"start":1437,"end":1441,"cssClass":"pl-s"},{"start":1441,"end":1442,"cssClass":"pl-kos"},{"start":1443,"end":1450,"cssClass":"pl-s"},{"start":1452,"end":1456,"cssClass":"pl-s"},{"start":1456,"end":1457,"cssClass":"pl-kos"},{"start":1458,"end":1465,"cssClass":"pl-s"},{"start":1467,"end":1471,"cssClass":"pl-s"},{"start":1471,"end":1472,"cssClass":"pl-kos"},{"start":1473,"end":1480,"cssClass":"pl-s"},{"start":1482,"end":1486,"cssClass":"pl-s"},{"start":1486,"end":1487,"cssClass":"pl-kos"},{"start":1488,"end":1495,"cssClass":"pl-s"},{"start":1497,"end":1501,"cssClass":"pl-s"},{"start":1501,"end":1502,"cssClass":"pl-kos"},{"start":1503,"end":1510,"cssClass":"pl-s"},{"start":1512,"end":1516,"cssClass":"pl-s"},{"start":1516,"end":1517,"cssClass":"pl-kos"},{"start":1518,"end":1525,"cssClass":"pl-s"},{"start":1527,"end":1531,"cssClass":"pl-s"},{"start":1531,"end":1532,"cssClass":"pl-kos"},{"start":1533,"end":1540,"cssClass":"pl-s"},{"start":1542,"end":1546,"cssClass":"pl-s"},{"start":1546,"end":1547,"cssClass":"pl-kos"},{"start":1548,"end":1555,"cssClass":"pl-s"},{"start":1557,"end":1561,"cssClass":"pl-s"},{"start":1561,"end":1562,"cssClass":"pl-kos"},{"start":1563,"end":1570,"cssClass":"pl-s"},{"start":1572,"end":1576,"cssClass":"pl-s"},{"start":1576,"end":1577,"cssClass":"pl-kos"},{"start":1578,"end":1585,"cssClass":"pl-s"},{"start":1587,"end":1591,"cssClass":"pl-s"},{"start":1591,"end":1592,"cssClass":"pl-kos"},{"start":1593,"end":1600,"cssClass":"pl-s"},{"start":1602,"end":1606,"cssClass":"pl-s"},{"start":1606,"end":1607,"cssClass":"pl-kos"},{"start":1608,"end":1615,"cssClass":"pl-s"},{"start":1617,"end":1621,"cssClass":"pl-s"},{"start":1621,"end":1622,"cssClass":"pl-kos"},{"start":1623,"end":1630,"cssClass":"pl-s"},{"start":1632,"end":1636,"cssClass":"pl-s"},{"start":1636,"end":1637,"cssClass":"pl-kos"},{"start":1638,"end":1645,"cssClass":"pl-s"},{"start":1647,"end":1651,"cssClass":"pl-s"},{"start":1651,"end":1652,"cssClass":"pl-kos"},{"start":1653,"end":1660,"cssClass":"pl-s"},{"start":1662,"end":1666,"cssClass":"pl-s"},{"start":1666,"end":1667,"cssClass":"pl-kos"},{"start":1668,"end":1675,"cssClass":"pl-s"},{"start":1677,"end":1681,"cssClass":"pl-s"},{"start":1681,"end":1682,"cssClass":"pl-kos"},{"start":1683,"end":1690,"cssClass":"pl-s"},{"start":1692,"end":1696,"cssClass":"pl-s"},{"start":1696,"end":1697,"cssClass":"pl-kos"},{"start":1698,"end":1705,"cssClass":"pl-s"},{"start":1707,"end":1711,"cssClass":"pl-s"},{"start":1711,"end":1712,"cssClass":"pl-kos"},{"start":1713,"end":1720,"cssClass":"pl-s"},{"start":1722,"end":1726,"cssClass":"pl-s"},{"start":1726,"end":1727,"cssClass":"pl-kos"},{"start":1728,"end":1735,"cssClass":"pl-s"},{"start":1737,"end":1741,"cssClass":"pl-s"},{"start":1741,"end":1742,"cssClass":"pl-kos"},{"start":1743,"end":1750,"cssClass":"pl-s"},{"start":1752,"end":1756,"cssClass":"pl-s"},{"start":1756,"end":1757,"cssClass":"pl-kos"},{"start":1758,"end":1765,"cssClass":"pl-s"},{"start":1767,"end":1771,"cssClass":"pl-s"},{"start":1771,"end":1772,"cssClass":"pl-kos"},{"start":1773,"end":1780,"cssClass":"pl-s"},{"start":1782,"end":1786,"cssClass":"pl-s"},{"start":1786,"end":1787,"cssClass":"pl-kos"},{"start":1788,"end":1795,"cssClass":"pl-s"},{"start":1797,"end":1801,"cssClass":"pl-s"},{"start":1801,"end":1802,"cssClass":"pl-kos"},{"start":1803,"end":1810,"cssClass":"pl-s"},{"start":1812,"end":1816,"cssClass":"pl-s"},{"start":1816,"end":1817,"cssClass":"pl-kos"},{"start":1818,"end":1825,"cssClass":"pl-s"},{"start":1827,"end":1831,"cssClass":"pl-s"},{"start":1831,"end":1832,"cssClass":"pl-kos"},{"start":1833,"end":1840,"cssClass":"pl-s"},{"start":1842,"end":1846,"cssClass":"pl-s"},{"start":1846,"end":1847,"cssClass":"pl-kos"},{"start":1848,"end":1855,"cssClass":"pl-s"},{"start":1857,"end":1861,"cssClass":"pl-s"},{"start":1861,"end":1862,"cssClass":"pl-kos"},{"start":1863,"end":1870,"cssClass":"pl-s"},{"start":1872,"end":1876,"cssClass":"pl-s"},{"start":1876,"end":1877,"cssClass":"pl-kos"},{"start":1878,"end":1885,"cssClass":"pl-s"},{"start":1887,"end":1891,"cssClass":"pl-s"},{"start":1891,"end":1892,"cssClass":"pl-kos"},{"start":1893,"end":1900,"cssClass":"pl-s"},{"start":1902,"end":1906,"cssClass":"pl-s"},{"start":1906,"end":1907,"cssClass":"pl-kos"},{"start":1908,"end":1915,"cssClass":"pl-s"},{"start":1917,"end":1921,"cssClass":"pl-s"},{"start":1921,"end":1922,"cssClass":"pl-kos"},{"start":1923,"end":1930,"cssClass":"pl-s"},{"start":1932,"end":1936,"cssClass":"pl-s"},{"start":1936,"end":1937,"cssClass":"pl-kos"},{"start":1938,"end":1945,"cssClass":"pl-s"},{"start":1947,"end":1951,"cssClass":"pl-s"},{"start":1951,"end":1952,"cssClass":"pl-kos"},{"start":1953,"end":1960,"cssClass":"pl-s"},{"start":1962,"end":1966,"cssClass":"pl-s"},{"start":1966,"end":1967,"cssClass":"pl-kos"},{"start":1968,"end":1975,"cssClass":"pl-s"},{"start":1977,"end":1981,"cssClass":"pl-s"},{"start":1981,"end":1982,"cssClass":"pl-kos"},{"start":1983,"end":1990,"cssClass":"pl-s"},{"start":1992,"end":1996,"cssClass":"pl-s"},{"start":1996,"end":1997,"cssClass":"pl-kos"},{"start":1998,"end":2005,"cssClass":"pl-s"},{"start":2007,"end":2011,"cssClass":"pl-s"},{"start":2011,"end":2012,"cssClass":"pl-kos"},{"start":2013,"end":2020,"cssClass":"pl-s"},{"start":2022,"end":2026,"cssClass":"pl-s"},{"start":2026,"end":2027,"cssClass":"pl-kos"},{"start":2028,"end":2035,"cssClass":"pl-s"},{"start":2037,"end":2041,"cssClass":"pl-s"},{"start":2041,"end":2042,"cssClass":"pl-kos"},{"start":2043,"end":2050,"cssClass":"pl-s"},{"start":2052,"end":2056,"cssClass":"pl-s"},{"start":2056,"end":2057,"cssClass":"pl-kos"},{"start":2058,"end":2065,"cssClass":"pl-s"},{"start":2067,"end":2071,"cssClass":"pl-s"},{"start":2071,"end":2072,"cssClass":"pl-kos"},{"start":2073,"end":2080,"cssClass":"pl-s"},{"start":2082,"end":2086,"cssClass":"pl-s"},{"start":2086,"end":2087,"cssClass":"pl-kos"},{"start":2088,"end":2095,"cssClass":"pl-s"},{"start":2097,"end":2101,"cssClass":"pl-s"},{"start":2101,"end":2102,"cssClass":"pl-kos"},{"start":2103,"end":2110,"cssClass":"pl-s"},{"start":2112,"end":2116,"cssClass":"pl-s"},{"start":2116,"end":2117,"cssClass":"pl-kos"},{"start":2118,"end":2125,"cssClass":"pl-s"},{"start":2127,"end":2131,"cssClass":"pl-s"},{"start":2131,"end":2132,"cssClass":"pl-kos"},{"start":2133,"end":2140,"cssClass":"pl-s"},{"start":2142,"end":2146,"cssClass":"pl-s"},{"start":2146,"end":2147,"cssClass":"pl-kos"},{"start":2148,"end":2155,"cssClass":"pl-s"},{"start":2157,"end":2161,"cssClass":"pl-s"},{"start":2161,"end":2162,"cssClass":"pl-kos"},{"start":2163,"end":2170,"cssClass":"pl-s"},{"start":2172,"end":2176,"cssClass":"pl-s"},{"start":2176,"end":2177,"cssClass":"pl-kos"},{"start":2178,"end":2185,"cssClass":"pl-s"},{"start":2187,"end":2191,"cssClass":"pl-s"},{"start":2191,"end":2192,"cssClass":"pl-kos"},{"start":2193,"end":2200,"cssClass":"pl-s"},{"start":2202,"end":2206,"cssClass":"pl-s"},{"start":2206,"end":2207,"cssClass":"pl-kos"},{"start":2208,"end":2215,"cssClass":"pl-s"},{"start":2217,"end":2221,"cssClass":"pl-s"},{"start":2221,"end":2222,"cssClass":"pl-kos"},{"start":2223,"end":2230,"cssClass":"pl-s"},{"start":2232,"end":2236,"cssClass":"pl-s"},{"start":2236,"end":2237,"cssClass":"pl-kos"},{"start":2238,"end":2245,"cssClass":"pl-s"},{"start":2247,"end":2251,"cssClass":"pl-s"},{"start":2251,"end":2252,"cssClass":"pl-kos"},{"start":2253,"end":2260,"cssClass":"pl-s"},{"start":2262,"end":2266,"cssClass":"pl-s"},{"start":2266,"end":2267,"cssClass":"pl-kos"},{"start":2268,"end":2275,"cssClass":"pl-s"},{"start":2277,"end":2281,"cssClass":"pl-s"},{"start":2281,"end":2282,"cssClass":"pl-kos"},{"start":2283,"end":2290,"cssClass":"pl-s"},{"start":2292,"end":2296,"cssClass":"pl-s"},{"start":2296,"end":2297,"cssClass":"pl-kos"},{"start":2298,"end":2305,"cssClass":"pl-s"},{"start":2307,"end":2311,"cssClass":"pl-s"},{"start":2311,"end":2312,"cssClass":"pl-kos"},{"start":2313,"end":2320,"cssClass":"pl-s"},{"start":2322,"end":2326,"cssClass":"pl-s"},{"start":2326,"end":2327,"cssClass":"pl-kos"},{"start":2328,"end":2335,"cssClass":"pl-s"},{"start":2337,"end":2341,"cssClass":"pl-s"},{"start":2341,"end":2342,"cssClass":"pl-kos"},{"start":2343,"end":2350,"cssClass":"pl-s"},{"start":2352,"end":2356,"cssClass":"pl-s"},{"start":2356,"end":2357,"cssClass":"pl-kos"},{"start":2358,"end":2365,"cssClass":"pl-s"},{"start":2367,"end":2371,"cssClass":"pl-s"},{"start":2371,"end":2372,"cssClass":"pl-kos"},{"start":2373,"end":2380,"cssClass":"pl-s"},{"start":2382,"end":2385,"cssClass":"pl-s"},{"start":2385,"end":2386,"cssClass":"pl-kos"},{"start":2387,"end":2394,"cssClass":"pl-s"},{"start":2396,"end":2399,"cssClass":"pl-s"},{"start":2399,"end":2400,"cssClass":"pl-kos"},{"start":2401,"end":2408,"cssClass":"pl-s"},{"start":2410,"end":2414,"cssClass":"pl-s"},{"start":2414,"end":2415,"cssClass":"pl-kos"},{"start":2416,"end":2423,"cssClass":"pl-s"},{"start":2425,"end":2429,"cssClass":"pl-s"},{"start":2429,"end":2430,"cssClass":"pl-kos"},{"start":2431,"end":2438,"cssClass":"pl-s"},{"start":2440,"end":2444,"cssClass":"pl-s"},{"start":2444,"end":2445,"cssClass":"pl-kos"},{"start":2446,"end":2453,"cssClass":"pl-s"},{"start":2455,"end":2459,"cssClass":"pl-s"},{"start":2459,"end":2460,"cssClass":"pl-kos"},{"start":2461,"end":2468,"cssClass":"pl-s"},{"start":2470,"end":2474,"cssClass":"pl-s"},{"start":2474,"end":2475,"cssClass":"pl-kos"},{"start":2476,"end":2483,"cssClass":"pl-s"},{"start":2485,"end":2489,"cssClass":"pl-s"},{"start":2489,"end":2490,"cssClass":"pl-kos"},{"start":2491,"end":2498,"cssClass":"pl-s"},{"start":2500,"end":2504,"cssClass":"pl-s"},{"start":2504,"end":2505,"cssClass":"pl-kos"},{"start":2506,"end":2513,"cssClass":"pl-s"},{"start":2515,"end":2519,"cssClass":"pl-s"},{"start":2519,"end":2520,"cssClass":"pl-kos"},{"start":2521,"end":2528,"cssClass":"pl-s"},{"start":2530,"end":2534,"cssClass":"pl-s"},{"start":2534,"end":2535,"cssClass":"pl-kos"},{"start":2536,"end":2543,"cssClass":"pl-s"},{"start":2545,"end":2549,"cssClass":"pl-s"},{"start":2549,"end":2550,"cssClass":"pl-kos"},{"start":2551,"end":2558,"cssClass":"pl-s"},{"start":2560,"end":2564,"cssClass":"pl-s"},{"start":2564,"end":2565,"cssClass":"pl-kos"},{"start":2566,"end":2573,"cssClass":"pl-s"},{"start":2575,"end":2579,"cssClass":"pl-s"},{"start":2579,"end":2580,"cssClass":"pl-kos"},{"start":2581,"end":2588,"cssClass":"pl-s"},{"start":2590,"end":2594,"cssClass":"pl-s"},{"start":2594,"end":2595,"cssClass":"pl-kos"},{"start":2596,"end":2603,"cssClass":"pl-s"},{"start":2605,"end":2609,"cssClass":"pl-s"},{"start":2609,"end":2610,"cssClass":"pl-kos"},{"start":2611,"end":2618,"cssClass":"pl-s"},{"start":2620,"end":2624,"cssClass":"pl-s"},{"start":2624,"end":2625,"cssClass":"pl-kos"},{"start":2626,"end":2633,"cssClass":"pl-s"},{"start":2635,"end":2639,"cssClass":"pl-s"},{"start":2639,"end":2640,"cssClass":"pl-kos"},{"start":2641,"end":2648,"cssClass":"pl-s"},{"start":2650,"end":2654,"cssClass":"pl-s"},{"start":2654,"end":2655,"cssClass":"pl-kos"},{"start":2656,"end":2663,"cssClass":"pl-s"},{"start":2665,"end":2669,"cssClass":"pl-s"},{"start":2669,"end":2670,"cssClass":"pl-kos"},{"start":2671,"end":2678,"cssClass":"pl-s"},{"start":2680,"end":2684,"cssClass":"pl-s"},{"start":2684,"end":2685,"cssClass":"pl-kos"},{"start":2686,"end":2693,"cssClass":"pl-s"},{"start":2695,"end":2699,"cssClass":"pl-s"},{"start":2699,"end":2700,"cssClass":"pl-kos"},{"start":2701,"end":2708,"cssClass":"pl-s"},{"start":2710,"end":2714,"cssClass":"pl-s"},{"start":2714,"end":2715,"cssClass":"pl-kos"},{"start":2716,"end":2723,"cssClass":"pl-s"},{"start":2725,"end":2729,"cssClass":"pl-s"},{"start":2729,"end":2730,"cssClass":"pl-kos"},{"start":2731,"end":2738,"cssClass":"pl-s"},{"start":2740,"end":2744,"cssClass":"pl-s"},{"start":2744,"end":2745,"cssClass":"pl-kos"},{"start":2746,"end":2753,"cssClass":"pl-s"},{"start":2755,"end":2759,"cssClass":"pl-s"},{"start":2759,"end":2760,"cssClass":"pl-kos"},{"start":2761,"end":2768,"cssClass":"pl-s"},{"start":2770,"end":2774,"cssClass":"pl-s"},{"start":2774,"end":2775,"cssClass":"pl-kos"},{"start":2776,"end":2783,"cssClass":"pl-s"},{"start":2785,"end":2789,"cssClass":"pl-s"},{"start":2789,"end":2790,"cssClass":"pl-kos"},{"start":2791,"end":2798,"cssClass":"pl-s"},{"start":2800,"end":2804,"cssClass":"pl-s"},{"start":2804,"end":2805,"cssClass":"pl-kos"},{"start":2806,"end":2813,"cssClass":"pl-s"},{"start":2815,"end":2819,"cssClass":"pl-s"},{"start":2819,"end":2820,"cssClass":"pl-kos"},{"start":2821,"end":2828,"cssClass":"pl-s"},{"start":2830,"end":2834,"cssClass":"pl-s"},{"start":2834,"end":2835,"cssClass":"pl-kos"},{"start":2836,"end":2843,"cssClass":"pl-s"},{"start":2845,"end":2849,"cssClass":"pl-s"},{"start":2849,"end":2850,"cssClass":"pl-kos"},{"start":2851,"end":2858,"cssClass":"pl-s"},{"start":2860,"end":2864,"cssClass":"pl-s"},{"start":2864,"end":2865,"cssClass":"pl-kos"},{"start":2866,"end":2873,"cssClass":"pl-s"},{"start":2875,"end":2879,"cssClass":"pl-s"},{"start":2879,"end":2880,"cssClass":"pl-kos"},{"start":2881,"end":2888,"cssClass":"pl-s"},{"start":2890,"end":2894,"cssClass":"pl-s"},{"start":2894,"end":2895,"cssClass":"pl-kos"},{"start":2896,"end":2903,"cssClass":"pl-s"},{"start":2905,"end":2909,"cssClass":"pl-s"},{"start":2909,"end":2910,"cssClass":"pl-kos"},{"start":2911,"end":2918,"cssClass":"pl-s"},{"start":2920,"end":2924,"cssClass":"pl-s"},{"start":2924,"end":2925,"cssClass":"pl-kos"},{"start":2926,"end":2933,"cssClass":"pl-s"},{"start":2935,"end":2939,"cssClass":"pl-s"},{"start":2939,"end":2940,"cssClass":"pl-kos"},{"start":2941,"end":2948,"cssClass":"pl-s"},{"start":2950,"end":2954,"cssClass":"pl-s"},{"start":2954,"end":2955,"cssClass":"pl-kos"},{"start":2956,"end":2963,"cssClass":"pl-s"},{"start":2965,"end":2969,"cssClass":"pl-s"},{"start":2969,"end":2970,"cssClass":"pl-kos"},{"start":2971,"end":2978,"cssClass":"pl-s"},{"start":2980,"end":2984,"cssClass":"pl-s"},{"start":2984,"end":2985,"cssClass":"pl-kos"},{"start":2986,"end":2993,"cssClass":"pl-s"},{"start":2995,"end":2998,"cssClass":"pl-s"},{"start":2998,"end":2999,"cssClass":"pl-kos"},{"start":3000,"end":3007,"cssClass":"pl-s"},{"start":3009,"end":3013,"cssClass":"pl-s"},{"start":3013,"end":3014,"cssClass":"pl-kos"},{"start":3015,"end":3022,"cssClass":"pl-s"},{"start":3024,"end":3028,"cssClass":"pl-s"},{"start":3028,"end":3029,"cssClass":"pl-kos"},{"start":3030,"end":3037,"cssClass":"pl-s"},{"start":3039,"end":3043,"cssClass":"pl-s"},{"start":3043,"end":3044,"cssClass":"pl-kos"},{"start":3045,"end":3052,"cssClass":"pl-s"},{"start":3054,"end":3058,"cssClass":"pl-s"},{"start":3058,"end":3059,"cssClass":"pl-kos"},{"start":3060,"end":3067,"cssClass":"pl-s"},{"start":3069,"end":3073,"cssClass":"pl-s"},{"start":3073,"end":3074,"cssClass":"pl-kos"},{"start":3075,"end":3082,"cssClass":"pl-s"},{"start":3084,"end":3088,"cssClass":"pl-s"},{"start":3088,"end":3089,"cssClass":"pl-kos"},{"start":3090,"end":3097,"cssClass":"pl-s"},{"start":3099,"end":3103,"cssClass":"pl-s"},{"start":3103,"end":3104,"cssClass":"pl-kos"},{"start":3105,"end":3112,"cssClass":"pl-s"},{"start":3114,"end":3118,"cssClass":"pl-s"},{"start":3118,"end":3119,"cssClass":"pl-kos"},{"start":3120,"end":3127,"cssClass":"pl-s"},{"start":3129,"end":3133,"cssClass":"pl-s"},{"start":3133,"end":3134,"cssClass":"pl-kos"},{"start":3135,"end":3142,"cssClass":"pl-s"},{"start":3144,"end":3148,"cssClass":"pl-s"},{"start":3148,"end":3149,"cssClass":"pl-kos"},{"start":3150,"end":3157,"cssClass":"pl-s"},{"start":3159,"end":3163,"cssClass":"pl-s"},{"start":3163,"end":3164,"cssClass":"pl-kos"},{"start":3165,"end":3172,"cssClass":"pl-s"},{"start":3174,"end":3178,"cssClass":"pl-s"},{"start":3178,"end":3179,"cssClass":"pl-kos"},{"start":3180,"end":3187,"cssClass":"pl-s"},{"start":3189,"end":3193,"cssClass":"pl-s"},{"start":3193,"end":3194,"cssClass":"pl-kos"},{"start":3195,"end":3202,"cssClass":"pl-s"},{"start":3204,"end":3208,"cssClass":"pl-s"},{"start":3208,"end":3209,"cssClass":"pl-kos"},{"start":3210,"end":3217,"cssClass":"pl-s"},{"start":3219,"end":3223,"cssClass":"pl-s"},{"start":3223,"end":3224,"cssClass":"pl-kos"},{"start":3225,"end":3232,"cssClass":"pl-s"},{"start":3234,"end":3238,"cssClass":"pl-s"},{"start":3238,"end":3239,"cssClass":"pl-kos"},{"start":3240,"end":3247,"cssClass":"pl-s"},{"start":3249,"end":3253,"cssClass":"pl-s"},{"start":3253,"end":3254,"cssClass":"pl-kos"},{"start":3255,"end":3262,"cssClass":"pl-s"},{"start":3264,"end":3268,"cssClass":"pl-s"},{"start":3268,"end":3269,"cssClass":"pl-kos"},{"start":3270,"end":3277,"cssClass":"pl-s"},{"start":3279,"end":3283,"cssClass":"pl-s"},{"start":3283,"end":3284,"cssClass":"pl-kos"},{"start":3285,"end":3292,"cssClass":"pl-s"},{"start":3294,"end":3298,"cssClass":"pl-s"},{"start":3298,"end":3299,"cssClass":"pl-kos"},{"start":3300,"end":3307,"cssClass":"pl-s"},{"start":3309,"end":3313,"cssClass":"pl-s"},{"start":3313,"end":3314,"cssClass":"pl-kos"},{"start":3315,"end":3322,"cssClass":"pl-s"},{"start":3324,"end":3328,"cssClass":"pl-s"},{"start":3328,"end":3329,"cssClass":"pl-kos"},{"start":3330,"end":3337,"cssClass":"pl-s"},{"start":3339,"end":3343,"cssClass":"pl-s"},{"start":3343,"end":3344,"cssClass":"pl-kos"},{"start":3345,"end":3352,"cssClass":"pl-s"},{"start":3354,"end":3357,"cssClass":"pl-s"},{"start":3357,"end":3358,"cssClass":"pl-kos"},{"start":3359,"end":3366,"cssClass":"pl-s"},{"start":3368,"end":3372,"cssClass":"pl-s"},{"start":3372,"end":3373,"cssClass":"pl-kos"},{"start":3374,"end":3381,"cssClass":"pl-s"},{"start":3383,"end":3387,"cssClass":"pl-s"},{"start":3387,"end":3388,"cssClass":"pl-kos"},{"start":3389,"end":3396,"cssClass":"pl-s"},{"start":3398,"end":3402,"cssClass":"pl-s"},{"start":3402,"end":3403,"cssClass":"pl-kos"},{"start":3404,"end":3411,"cssClass":"pl-s"},{"start":3413,"end":3417,"cssClass":"pl-s"},{"start":3417,"end":3418,"cssClass":"pl-kos"},{"start":3419,"end":3426,"cssClass":"pl-s"},{"start":3428,"end":3432,"cssClass":"pl-s"},{"start":3432,"end":3433,"cssClass":"pl-kos"},{"start":3434,"end":3441,"cssClass":"pl-s"},{"start":3443,"end":3447,"cssClass":"pl-s"},{"start":3447,"end":3448,"cssClass":"pl-kos"},{"start":3449,"end":3456,"cssClass":"pl-s"},{"start":3458,"end":3463,"cssClass":"pl-s"},{"start":3463,"end":3464,"cssClass":"pl-kos"},{"start":3465,"end":3472,"cssClass":"pl-s"},{"start":3474,"end":3478,"cssClass":"pl-s"},{"start":3478,"end":3479,"cssClass":"pl-kos"},{"start":3480,"end":3487,"cssClass":"pl-s"},{"start":3489,"end":3493,"cssClass":"pl-s"},{"start":3493,"end":3494,"cssClass":"pl-kos"},{"start":3495,"end":3502,"cssClass":"pl-s"},{"start":3504,"end":3508,"cssClass":"pl-s"},{"start":3508,"end":3509,"cssClass":"pl-kos"},{"start":3510,"end":3517,"cssClass":"pl-s"},{"start":3519,"end":3523,"cssClass":"pl-s"},{"start":3523,"end":3524,"cssClass":"pl-kos"},{"start":3525,"end":3532,"cssClass":"pl-s"},{"start":3534,"end":3538,"cssClass":"pl-s"},{"start":3538,"end":3539,"cssClass":"pl-kos"},{"start":3540,"end":3547,"cssClass":"pl-s"},{"start":3549,"end":3553,"cssClass":"pl-s"},{"start":3553,"end":3554,"cssClass":"pl-kos"},{"start":3555,"end":3562,"cssClass":"pl-s"},{"start":3564,"end":3569,"cssClass":"pl-s"},{"start":3569,"end":3570,"cssClass":"pl-kos"},{"start":3571,"end":3578,"cssClass":"pl-s"},{"start":3580,"end":3584,"cssClass":"pl-s"},{"start":3584,"end":3585,"cssClass":"pl-kos"},{"start":3586,"end":3593,"cssClass":"pl-s"},{"start":3595,"end":3599,"cssClass":"pl-s"},{"start":3599,"end":3600,"cssClass":"pl-kos"},{"start":3601,"end":3608,"cssClass":"pl-s"},{"start":3610,"end":3614,"cssClass":"pl-s"},{"start":3614,"end":3615,"cssClass":"pl-kos"},{"start":3616,"end":3623,"cssClass":"pl-s"},{"start":3625,"end":3629,"cssClass":"pl-s"},{"start":3629,"end":3630,"cssClass":"pl-kos"},{"start":3631,"end":3638,"cssClass":"pl-s"},{"start":3640,"end":3644,"cssClass":"pl-s"},{"start":3644,"end":3645,"cssClass":"pl-kos"},{"start":3646,"end":3653,"cssClass":"pl-s"},{"start":3655,"end":3659,"cssClass":"pl-s"},{"start":3659,"end":3660,"cssClass":"pl-kos"},{"start":3661,"end":3668,"cssClass":"pl-s"},{"start":3670,"end":3674,"cssClass":"pl-s"},{"start":3674,"end":3675,"cssClass":"pl-kos"},{"start":3676,"end":3683,"cssClass":"pl-s"},{"start":3685,"end":3689,"cssClass":"pl-s"},{"start":3689,"end":3690,"cssClass":"pl-kos"},{"start":3691,"end":3698,"cssClass":"pl-s"},{"start":3700,"end":3705,"cssClass":"pl-s"},{"start":3705,"end":3706,"cssClass":"pl-kos"},{"start":3707,"end":3714,"cssClass":"pl-s"},{"start":3716,"end":3720,"cssClass":"pl-s"},{"start":3720,"end":3721,"cssClass":"pl-kos"},{"start":3722,"end":3729,"cssClass":"pl-s"},{"start":3731,"end":3735,"cssClass":"pl-s"},{"start":3735,"end":3736,"cssClass":"pl-kos"},{"start":3737,"end":3744,"cssClass":"pl-s"},{"start":3746,"end":3750,"cssClass":"pl-s"},{"start":3750,"end":3751,"cssClass":"pl-kos"},{"start":3752,"end":3759,"cssClass":"pl-s"},{"start":3761,"end":3765,"cssClass":"pl-s"},{"start":3765,"end":3766,"cssClass":"pl-kos"},{"start":3767,"end":3774,"cssClass":"pl-s"},{"start":3776,"end":3780,"cssClass":"pl-s"},{"start":3780,"end":3781,"cssClass":"pl-kos"},{"start":3782,"end":3789,"cssClass":"pl-s"},{"start":3791,"end":3795,"cssClass":"pl-s"},{"start":3795,"end":3796,"cssClass":"pl-kos"},{"start":3797,"end":3804,"cssClass":"pl-s"},{"start":3806,"end":3810,"cssClass":"pl-s"},{"start":3810,"end":3811,"cssClass":"pl-kos"},{"start":3812,"end":3819,"cssClass":"pl-s"},{"start":3821,"end":3825,"cssClass":"pl-s"},{"start":3825,"end":3826,"cssClass":"pl-kos"},{"start":3827,"end":3834,"cssClass":"pl-s"},{"start":3836,"end":3840,"cssClass":"pl-s"},{"start":3840,"end":3841,"cssClass":"pl-kos"},{"start":3842,"end":3849,"cssClass":"pl-s"},{"start":3851,"end":3855,"cssClass":"pl-s"},{"start":3855,"end":3856,"cssClass":"pl-kos"},{"start":3857,"end":3864,"cssClass":"pl-s"},{"start":3866,"end":3870,"cssClass":"pl-s"},{"start":3870,"end":3871,"cssClass":"pl-kos"},{"start":3872,"end":3879,"cssClass":"pl-s"},{"start":3881,"end":3885,"cssClass":"pl-s"},{"start":3885,"end":3886,"cssClass":"pl-kos"},{"start":3887,"end":3894,"cssClass":"pl-s"},{"start":3896,"end":3900,"cssClass":"pl-s"},{"start":3900,"end":3901,"cssClass":"pl-kos"},{"start":3902,"end":3909,"cssClass":"pl-s"},{"start":3911,"end":3915,"cssClass":"pl-s"},{"start":3915,"end":3916,"cssClass":"pl-kos"},{"start":3917,"end":3924,"cssClass":"pl-s"},{"start":3926,"end":3930,"cssClass":"pl-s"},{"start":3930,"end":3931,"cssClass":"pl-kos"},{"start":3932,"end":3939,"cssClass":"pl-s"},{"start":3941,"end":3945,"cssClass":"pl-s"},{"start":3945,"end":3946,"cssClass":"pl-kos"},{"start":3947,"end":3954,"cssClass":"pl-s"},{"start":3956,"end":3961,"cssClass":"pl-s"},{"start":3961,"end":3962,"cssClass":"pl-kos"},{"start":3963,"end":3970,"cssClass":"pl-s"},{"start":3972,"end":3976,"cssClass":"pl-s"},{"start":3976,"end":3977,"cssClass":"pl-kos"},{"start":3978,"end":3985,"cssClass":"pl-s"},{"start":3987,"end":3991,"cssClass":"pl-s"},{"start":3991,"end":3992,"cssClass":"pl-kos"},{"start":3993,"end":4000,"cssClass":"pl-s"},{"start":4002,"end":4006,"cssClass":"pl-s"},{"start":4006,"end":4007,"cssClass":"pl-kos"},{"start":4008,"end":4015,"cssClass":"pl-s"},{"start":4017,"end":4021,"cssClass":"pl-s"},{"start":4021,"end":4022,"cssClass":"pl-kos"},{"start":4023,"end":4030,"cssClass":"pl-s"},{"start":4032,"end":4036,"cssClass":"pl-s"},{"start":4036,"end":4037,"cssClass":"pl-kos"},{"start":4038,"end":4045,"cssClass":"pl-s"},{"start":4047,"end":4051,"cssClass":"pl-s"},{"start":4051,"end":4052,"cssClass":"pl-kos"},{"start":4053,"end":4060,"cssClass":"pl-s"},{"start":4062,"end":4066,"cssClass":"pl-s"},{"start":4066,"end":4067,"cssClass":"pl-kos"},{"start":4068,"end":4075,"cssClass":"pl-s"},{"start":4077,"end":4081,"cssClass":"pl-s"},{"start":4081,"end":4082,"cssClass":"pl-kos"},{"start":4083,"end":4090,"cssClass":"pl-s"},{"start":4092,"end":4096,"cssClass":"pl-s"},{"start":4096,"end":4097,"cssClass":"pl-kos"},{"start":4098,"end":4105,"cssClass":"pl-s"},{"start":4107,"end":4111,"cssClass":"pl-s"},{"start":4111,"end":4112,"cssClass":"pl-kos"},{"start":4113,"end":4120,"cssClass":"pl-s"},{"start":4122,"end":4126,"cssClass":"pl-s"},{"start":4126,"end":4127,"cssClass":"pl-kos"},{"start":4128,"end":4135,"cssClass":"pl-s"},{"start":4137,"end":4141,"cssClass":"pl-s"},{"start":4141,"end":4142,"cssClass":"pl-kos"},{"start":4143,"end":4150,"cssClass":"pl-s"},{"start":4152,"end":4156,"cssClass":"pl-s"},{"start":4156,"end":4157,"cssClass":"pl-kos"},{"start":4158,"end":4165,"cssClass":"pl-s"},{"start":4167,"end":4171,"cssClass":"pl-s"},{"start":4171,"end":4172,"cssClass":"pl-kos"},{"start":4173,"end":4180,"cssClass":"pl-s"},{"start":4182,"end":4186,"cssClass":"pl-s"},{"start":4186,"end":4187,"cssClass":"pl-kos"},{"start":4188,"end":4195,"cssClass":"pl-s"},{"start":4197,"end":4201,"cssClass":"pl-s"},{"start":4201,"end":4202,"cssClass":"pl-kos"},{"start":4203,"end":4210,"cssClass":"pl-s"},{"start":4212,"end":4216,"cssClass":"pl-s"},{"start":4216,"end":4217,"cssClass":"pl-kos"},{"start":4218,"end":4225,"cssClass":"pl-s"},{"start":4227,"end":4231,"cssClass":"pl-s"},{"start":4231,"end":4232,"cssClass":"pl-kos"},{"start":4233,"end":4240,"cssClass":"pl-s"},{"start":4242,"end":4246,"cssClass":"pl-s"},{"start":4246,"end":4247,"cssClass":"pl-kos"},{"start":4248,"end":4255,"cssClass":"pl-s"},{"start":4257,"end":4261,"cssClass":"pl-s"},{"start":4261,"end":4262,"cssClass":"pl-kos"},{"start":4263,"end":4270,"cssClass":"pl-s"},{"start":4272,"end":4276,"cssClass":"pl-s"},{"start":4276,"end":4277,"cssClass":"pl-kos"},{"start":4278,"end":4285,"cssClass":"pl-s"},{"start":4287,"end":4291,"cssClass":"pl-s"},{"start":4291,"end":4292,"cssClass":"pl-kos"},{"start":4293,"end":4300,"cssClass":"pl-s"},{"start":4302,"end":4306,"cssClass":"pl-s"},{"start":4306,"end":4307,"cssClass":"pl-kos"},{"start":4308,"end":4315,"cssClass":"pl-s"},{"start":4317,"end":4321,"cssClass":"pl-s"},{"start":4321,"end":4322,"cssClass":"pl-kos"},{"start":4323,"end":4330,"cssClass":"pl-s"},{"start":4332,"end":4336,"cssClass":"pl-s"},{"start":4336,"end":4337,"cssClass":"pl-kos"},{"start":4338,"end":4345,"cssClass":"pl-s"},{"start":4347,"end":4351,"cssClass":"pl-s"},{"start":4351,"end":4352,"cssClass":"pl-kos"},{"start":4353,"end":4360,"cssClass":"pl-s"},{"start":4362,"end":4366,"cssClass":"pl-s"},{"start":4366,"end":4367,"cssClass":"pl-kos"},{"start":4368,"end":4375,"cssClass":"pl-s"},{"start":4377,"end":4381,"cssClass":"pl-s"},{"start":4381,"end":4382,"cssClass":"pl-kos"},{"start":4383,"end":4390,"cssClass":"pl-s"},{"start":4392,"end":4396,"cssClass":"pl-s"},{"start":4396,"end":4397,"cssClass":"pl-kos"},{"start":4398,"end":4405,"cssClass":"pl-s"},{"start":4407,"end":4411,"cssClass":"pl-s"},{"start":4411,"end":4412,"cssClass":"pl-kos"},{"start":4413,"end":4420,"cssClass":"pl-s"},{"start":4422,"end":4426,"cssClass":"pl-s"},{"start":4426,"end":4427,"cssClass":"pl-kos"},{"start":4428,"end":4435,"cssClass":"pl-s"},{"start":4437,"end":4441,"cssClass":"pl-s"},{"start":4441,"end":4442,"cssClass":"pl-kos"},{"start":4443,"end":4450,"cssClass":"pl-s"},{"start":4452,"end":4456,"cssClass":"pl-s"},{"start":4456,"end":4457,"cssClass":"pl-kos"},{"start":4458,"end":4465,"cssClass":"pl-s"},{"start":4467,"end":4471,"cssClass":"pl-s"},{"start":4471,"end":4472,"cssClass":"pl-kos"},{"start":4473,"end":4480,"cssClass":"pl-s"},{"start":4482,"end":4486,"cssClass":"pl-s"},{"start":4486,"end":4487,"cssClass":"pl-kos"},{"start":4488,"end":4495,"cssClass":"pl-s"},{"start":4497,"end":4501,"cssClass":"pl-s"},{"start":4501,"end":4502,"cssClass":"pl-kos"},{"start":4503,"end":4510,"cssClass":"pl-s"},{"start":4512,"end":4516,"cssClass":"pl-s"},{"start":4516,"end":4517,"cssClass":"pl-kos"},{"start":4518,"end":4525,"cssClass":"pl-s"},{"start":4527,"end":4531,"cssClass":"pl-s"},{"start":4531,"end":4532,"cssClass":"pl-kos"},{"start":4533,"end":4540,"cssClass":"pl-s"},{"start":4542,"end":4546,"cssClass":"pl-s"},{"start":4546,"end":4547,"cssClass":"pl-kos"},{"start":4548,"end":4555,"cssClass":"pl-s"},{"start":4557,"end":4561,"cssClass":"pl-s"},{"start":4561,"end":4562,"cssClass":"pl-kos"},{"start":4563,"end":4570,"cssClass":"pl-s"},{"start":4572,"end":4576,"cssClass":"pl-s"},{"start":4576,"end":4577,"cssClass":"pl-kos"},{"start":4578,"end":4585,"cssClass":"pl-s"},{"start":4587,"end":4591,"cssClass":"pl-s"},{"start":4591,"end":4592,"cssClass":"pl-kos"},{"start":4593,"end":4600,"cssClass":"pl-s"},{"start":4602,"end":4606,"cssClass":"pl-s"},{"start":4606,"end":4607,"cssClass":"pl-kos"},{"start":4608,"end":4615,"cssClass":"pl-s"},{"start":4617,"end":4621,"cssClass":"pl-s"},{"start":4621,"end":4622,"cssClass":"pl-kos"},{"start":4623,"end":4630,"cssClass":"pl-s"},{"start":4632,"end":4636,"cssClass":"pl-s"},{"start":4636,"end":4637,"cssClass":"pl-kos"},{"start":4638,"end":4645,"cssClass":"pl-s"},{"start":4647,"end":4651,"cssClass":"pl-s"},{"start":4651,"end":4652,"cssClass":"pl-kos"},{"start":4653,"end":4660,"cssClass":"pl-s"},{"start":4662,"end":4666,"cssClass":"pl-s"},{"start":4666,"end":4667,"cssClass":"pl-kos"},{"start":4668,"end":4675,"cssClass":"pl-s"},{"start":4677,"end":4681,"cssClass":"pl-s"},{"start":4681,"end":4682,"cssClass":"pl-kos"},{"start":4683,"end":4690,"cssClass":"pl-s"},{"start":4692,"end":4696,"cssClass":"pl-s"},{"start":4696,"end":4697,"cssClass":"pl-kos"},{"start":4698,"end":4705,"cssClass":"pl-s"},{"start":4707,"end":4711,"cssClass":"pl-s"},{"start":4711,"end":4712,"cssClass":"pl-kos"},{"start":4713,"end":4720,"cssClass":"pl-s"},{"start":4722,"end":4726,"cssClass":"pl-s"},{"start":4726,"end":4727,"cssClass":"pl-kos"},{"start":4728,"end":4735,"cssClass":"pl-s"},{"start":4737,"end":4741,"cssClass":"pl-s"},{"start":4741,"end":4742,"cssClass":"pl-kos"},{"start":4743,"end":4750,"cssClass":"pl-s"},{"start":4752,"end":4756,"cssClass":"pl-s"},{"start":4756,"end":4757,"cssClass":"pl-kos"},{"start":4758,"end":4765,"cssClass":"pl-s"},{"start":4767,"end":4770,"cssClass":"pl-s"},{"start":4770,"end":4771,"cssClass":"pl-kos"},{"start":4772,"end":4779,"cssClass":"pl-s"},{"start":4781,"end":4785,"cssClass":"pl-s"},{"start":4785,"end":4786,"cssClass":"pl-kos"},{"start":4787,"end":4794,"cssClass":"pl-s"},{"start":4796,"end":4800,"cssClass":"pl-s"},{"start":4800,"end":4801,"cssClass":"pl-kos"},{"start":4802,"end":4809,"cssClass":"pl-s"},{"start":4811,"end":4815,"cssClass":"pl-s"},{"start":4815,"end":4816,"cssClass":"pl-kos"},{"start":4817,"end":4824,"cssClass":"pl-s"},{"start":4826,"end":4830,"cssClass":"pl-s"},{"start":4830,"end":4831,"cssClass":"pl-kos"},{"start":4832,"end":4839,"cssClass":"pl-s"},{"start":4841,"end":4845,"cssClass":"pl-s"},{"start":4845,"end":4846,"cssClass":"pl-kos"},{"start":4847,"end":4854,"cssClass":"pl-s"},{"start":4856,"end":4860,"cssClass":"pl-s"},{"start":4860,"end":4861,"cssClass":"pl-kos"},{"start":4862,"end":4869,"cssClass":"pl-s"},{"start":4871,"end":4875,"cssClass":"pl-s"},{"start":4875,"end":4876,"cssClass":"pl-kos"},{"start":4877,"end":4884,"cssClass":"pl-s"},{"start":4886,"end":4890,"cssClass":"pl-s"},{"start":4890,"end":4891,"cssClass":"pl-kos"},{"start":4892,"end":4899,"cssClass":"pl-s"},{"start":4901,"end":4906,"cssClass":"pl-s"},{"start":4906,"end":4907,"cssClass":"pl-kos"},{"start":4908,"end":4915,"cssClass":"pl-s"},{"start":4917,"end":4921,"cssClass":"pl-s"},{"start":4921,"end":4922,"cssClass":"pl-kos"},{"start":4923,"end":4930,"cssClass":"pl-s"},{"start":4932,"end":4936,"cssClass":"pl-s"},{"start":4936,"end":4937,"cssClass":"pl-kos"},{"start":4938,"end":4945,"cssClass":"pl-s"},{"start":4947,"end":4951,"cssClass":"pl-s"},{"start":4951,"end":4952,"cssClass":"pl-kos"},{"start":4953,"end":4960,"cssClass":"pl-s"},{"start":4962,"end":4966,"cssClass":"pl-s"},{"start":4966,"end":4967,"cssClass":"pl-kos"},{"start":4968,"end":4975,"cssClass":"pl-s"},{"start":4977,"end":4981,"cssClass":"pl-s"},{"start":4981,"end":4982,"cssClass":"pl-kos"},{"start":4983,"end":4990,"cssClass":"pl-s"},{"start":4992,"end":4996,"cssClass":"pl-s"},{"start":4996,"end":4997,"cssClass":"pl-kos"},{"start":4998,"end":5005,"cssClass":"pl-s"},{"start":5007,"end":5011,"cssClass":"pl-s"},{"start":5011,"end":5012,"cssClass":"pl-kos"},{"start":5013,"end":5020,"cssClass":"pl-s"},{"start":5022,"end":5026,"cssClass":"pl-s"},{"start":5026,"end":5027,"cssClass":"pl-kos"},{"start":5028,"end":5035,"cssClass":"pl-s"},{"start":5037,"end":5041,"cssClass":"pl-s"},{"start":5041,"end":5042,"cssClass":"pl-kos"},{"start":5043,"end":5050,"cssClass":"pl-s"},{"start":5052,"end":5056,"cssClass":"pl-s"},{"start":5056,"end":5057,"cssClass":"pl-kos"},{"start":5058,"end":5065,"cssClass":"pl-s"},{"start":5067,"end":5071,"cssClass":"pl-s"},{"start":5071,"end":5072,"cssClass":"pl-kos"},{"start":5073,"end":5080,"cssClass":"pl-s"},{"start":5082,"end":5086,"cssClass":"pl-s"},{"start":5086,"end":5087,"cssClass":"pl-kos"},{"start":5088,"end":5095,"cssClass":"pl-s"},{"start":5097,"end":5101,"cssClass":"pl-s"},{"start":5101,"end":5102,"cssClass":"pl-kos"},{"start":5103,"end":5110,"cssClass":"pl-s"},{"start":5112,"end":5116,"cssClass":"pl-s"},{"start":5116,"end":5117,"cssClass":"pl-kos"},{"start":5118,"end":5125,"cssClass":"pl-s"},{"start":5127,"end":5132,"cssClass":"pl-s"},{"start":5132,"end":5133,"cssClass":"pl-kos"},{"start":5134,"end":5141,"cssClass":"pl-s"},{"start":5143,"end":5147,"cssClass":"pl-s"},{"start":5147,"end":5148,"cssClass":"pl-kos"},{"start":5149,"end":5156,"cssClass":"pl-s"},{"start":5158,"end":5162,"cssClass":"pl-s"},{"start":5162,"end":5163,"cssClass":"pl-kos"},{"start":5164,"end":5171,"cssClass":"pl-s"},{"start":5173,"end":5177,"cssClass":"pl-s"},{"start":5177,"end":5178,"cssClass":"pl-kos"},{"start":5179,"end":5186,"cssClass":"pl-s"},{"start":5188,"end":5192,"cssClass":"pl-s"},{"start":5192,"end":5193,"cssClass":"pl-kos"},{"start":5194,"end":5201,"cssClass":"pl-s"},{"start":5203,"end":5207,"cssClass":"pl-s"},{"start":5207,"end":5208,"cssClass":"pl-kos"},{"start":5209,"end":5216,"cssClass":"pl-s"},{"start":5218,"end":5222,"cssClass":"pl-s"},{"start":5222,"end":5223,"cssClass":"pl-kos"},{"start":5224,"end":5231,"cssClass":"pl-s"},{"start":5233,"end":5237,"cssClass":"pl-s"},{"start":5237,"end":5238,"cssClass":"pl-kos"},{"start":5239,"end":5246,"cssClass":"pl-s"},{"start":5248,"end":5252,"cssClass":"pl-s"},{"start":5252,"end":5253,"cssClass":"pl-kos"},{"start":5254,"end":5261,"cssClass":"pl-s"},{"start":5263,"end":5267,"cssClass":"pl-s"},{"start":5267,"end":5268,"cssClass":"pl-kos"},{"start":5269,"end":5276,"cssClass":"pl-s"},{"start":5278,"end":5282,"cssClass":"pl-s"},{"start":5282,"end":5283,"cssClass":"pl-kos"},{"start":5284,"end":5291,"cssClass":"pl-s"},{"start":5293,"end":5297,"cssClass":"pl-s"},{"start":5297,"end":5298,"cssClass":"pl-kos"},{"start":5299,"end":5306,"cssClass":"pl-s"},{"start":5308,"end":5312,"cssClass":"pl-s"},{"start":5312,"end":5313,"cssClass":"pl-kos"},{"start":5314,"end":5321,"cssClass":"pl-s"},{"start":5323,"end":5327,"cssClass":"pl-s"},{"start":5327,"end":5328,"cssClass":"pl-kos"},{"start":5329,"end":5336,"cssClass":"pl-s"},{"start":5338,"end":5342,"cssClass":"pl-s"},{"start":5342,"end":5343,"cssClass":"pl-kos"},{"start":5344,"end":5351,"cssClass":"pl-s"},{"start":5353,"end":5357,"cssClass":"pl-s"},{"start":5357,"end":5358,"cssClass":"pl-kos"},{"start":5359,"end":5366,"cssClass":"pl-s"},{"start":5368,"end":5372,"cssClass":"pl-s"},{"start":5372,"end":5373,"cssClass":"pl-kos"},{"start":5374,"end":5381,"cssClass":"pl-s"},{"start":5383,"end":5387,"cssClass":"pl-s"},{"start":5387,"end":5388,"cssClass":"pl-kos"},{"start":5389,"end":5396,"cssClass":"pl-s"},{"start":5398,"end":5402,"cssClass":"pl-s"},{"start":5402,"end":5403,"cssClass":"pl-kos"},{"start":5404,"end":5411,"cssClass":"pl-s"},{"start":5413,"end":5417,"cssClass":"pl-s"},{"start":5417,"end":5418,"cssClass":"pl-kos"},{"start":5419,"end":5426,"cssClass":"pl-s"},{"start":5428,"end":5432,"cssClass":"pl-s"},{"start":5432,"end":5433,"cssClass":"pl-kos"},{"start":5434,"end":5441,"cssClass":"pl-s"},{"start":5443,"end":5447,"cssClass":"pl-s"},{"start":5447,"end":5448,"cssClass":"pl-kos"},{"start":5449,"end":5456,"cssClass":"pl-s"},{"start":5458,"end":5462,"cssClass":"pl-s"},{"start":5462,"end":5463,"cssClass":"pl-kos"},{"start":5464,"end":5471,"cssClass":"pl-s"},{"start":5473,"end":5477,"cssClass":"pl-s"},{"start":5477,"end":5478,"cssClass":"pl-kos"},{"start":5479,"end":5486,"cssClass":"pl-s"},{"start":5488,"end":5492,"cssClass":"pl-s"},{"start":5492,"end":5493,"cssClass":"pl-kos"},{"start":5494,"end":5501,"cssClass":"pl-s"},{"start":5503,"end":5508,"cssClass":"pl-s"},{"start":5508,"end":5509,"cssClass":"pl-kos"},{"start":5510,"end":5517,"cssClass":"pl-s"},{"start":5519,"end":5523,"cssClass":"pl-s"},{"start":5523,"end":5524,"cssClass":"pl-kos"},{"start":5525,"end":5532,"cssClass":"pl-s"},{"start":5534,"end":5538,"cssClass":"pl-s"},{"start":5538,"end":5539,"cssClass":"pl-kos"},{"start":5540,"end":5547,"cssClass":"pl-s"},{"start":5549,"end":5553,"cssClass":"pl-s"},{"start":5553,"end":5554,"cssClass":"pl-kos"},{"start":5555,"end":5562,"cssClass":"pl-s"},{"start":5564,"end":5568,"cssClass":"pl-s"},{"start":5568,"end":5569,"cssClass":"pl-kos"},{"start":5570,"end":5577,"cssClass":"pl-s"},{"start":5579,"end":5583,"cssClass":"pl-s"},{"start":5583,"end":5584,"cssClass":"pl-kos"},{"start":5585,"end":5592,"cssClass":"pl-s"},{"start":5594,"end":5598,"cssClass":"pl-s"},{"start":5598,"end":5599,"cssClass":"pl-kos"},{"start":5600,"end":5607,"cssClass":"pl-s"},{"start":5609,"end":5613,"cssClass":"pl-s"},{"start":5613,"end":5614,"cssClass":"pl-kos"},{"start":5615,"end":5622,"cssClass":"pl-s"},{"start":5624,"end":5628,"cssClass":"pl-s"},{"start":5628,"end":5629,"cssClass":"pl-kos"},{"start":5630,"end":5637,"cssClass":"pl-s"},{"start":5639,"end":5644,"cssClass":"pl-s"},{"start":5645,"end":5646,"cssClass":"pl-kos"},{"start":5646,"end":5647,"cssClass":"pl-kos"}],[],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":4,"end":37,"cssClass":"pl-c"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":19,"cssClass":"pl-c1"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":23,"end":26,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":40,"cssClass":"pl-c"}],[{"start":4,"end":57,"cssClass":"pl-c"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":30,"end":40,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":44,"cssClass":"pl-s1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":66,"cssClass":"pl-s1"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":67,"end":73,"cssClass":"pl-en"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":74,"end":77,"cssClass":"pl-s1"},{"start":78,"end":79,"cssClass":"pl-c1"},{"start":80,"end":85,"cssClass":"pl-c1"},{"start":85,"end":86,"cssClass":"pl-kos"},{"start":86,"end":87,"cssClass":"pl-kos"},{"start":87,"end":88,"cssClass":"pl-kos"},{"start":88,"end":89,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":21,"cssClass":"pl-s"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":12,"cssClass":"pl-k"},{"start":13,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":23,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-c1"},{"start":42,"end":45,"cssClass":"pl-s1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-s1"},{"start":48,"end":50,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":18,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":31,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":18,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":12,"end":15,"cssClass":"pl-k"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":20,"cssClass":"pl-k"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":32,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":46,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":48,"end":49,"cssClass":"pl-s1"},{"start":49,"end":51,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"}],[{"start":16,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":30,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":12,"end":15,"cssClass":"pl-k"},{"start":16,"end":22,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":38,"cssClass":"pl-en"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":12,"end":19,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":12,"end":15,"cssClass":"pl-k"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-s1"},{"start":37,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":16,"end":32,"cssClass":"pl-c"}],[{"start":16,"end":19,"cssClass":"pl-k"},{"start":20,"end":23,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":38,"cssClass":"pl-en"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":16,"end":38,"cssClass":"pl-c"}],[{"start":16,"end":19,"cssClass":"pl-k"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":24,"cssClass":"pl-k"},{"start":25,"end":26,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":46,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":48,"end":49,"cssClass":"pl-s1"},{"start":49,"end":51,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"}],[{"start":20,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":30,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":40,"cssClass":"pl-en"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":16,"end":39,"cssClass":"pl-c"}],[{"start":16,"end":23,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":40,"cssClass":"pl-en"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":44,"cssClass":"pl-s1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":9,"cssClass":"pl-c"}],[{"start":0,"end":6,"cssClass":"pl-v"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":16,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":21,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":32,"cssClass":"pl-k"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":43,"cssClass":"pl-k"},{"start":44,"end":48,"cssClass":"pl-smi"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":56,"cssClass":"pl-en"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":73,"cssClass":"pl-pds"},{"start":57,"end":58,"cssClass":"pl-c1"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-cce"},{"start":60,"end":62,"cssClass":"pl-cce"},{"start":62,"end":63,"cssClass":"pl-c1"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":64,"end":65,"cssClass":"pl-c1"},{"start":65,"end":66,"cssClass":"pl-kos"},{"start":66,"end":68,"cssClass":"pl-cce"},{"start":68,"end":69,"cssClass":"pl-c1"},{"start":69,"end":70,"cssClass":"pl-cce"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":71,"end":72,"cssClass":"pl-c1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-s"},{"start":77,"end":78,"cssClass":"pl-kos"},{"start":78,"end":79,"cssClass":"pl-kos"},{"start":80,"end":81,"cssClass":"pl-kos"}],[],[{"start":0,"end":11,"cssClass":"pl-c"}],[{"start":0,"end":15,"cssClass":"pl-c"}],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":15,"cssClass":"pl-k"},{"start":16,"end":34,"cssClass":"pl-en"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":38,"cssClass":"pl-s1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":14,"cssClass":"pl-k"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":23,"end":31,"cssClass":"pl-s"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":8,"end":13,"cssClass":"pl-k"},{"start":14,"end":17,"cssClass":"pl-k"},{"start":18,"end":23,"cssClass":"pl-v"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":42,"cssClass":"pl-s"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":23,"cssClass":"pl-k"},{"start":24,"end":29,"cssClass":"pl-v"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":44,"cssClass":"pl-c"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":12,"cssClass":"pl-k"},{"start":13,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":23,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-c1"},{"start":42,"end":45,"cssClass":"pl-s1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-s1"},{"start":48,"end":50,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":8,"end":20,"cssClass":"pl-c"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":8,"end":59,"cssClass":"pl-c"}],[{"start":8,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":30,"cssClass":"pl-en"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":33,"cssClass":"pl-c"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":14,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":31,"cssClass":"pl-pds"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-cce"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":16,"cssClass":"pl-cce"},{"start":21,"end":23,"cssClass":"pl-cce"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-cce"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":40,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":18,"cssClass":"pl-en"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":30,"cssClass":"pl-pds"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-cce"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":16,"cssClass":"pl-cce"},{"start":21,"end":23,"cssClass":"pl-cce"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-cce"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":35,"cssClass":"pl-en"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":40,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":11,"cssClass":"pl-c"}],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":12,"cssClass":"pl-k"},{"start":13,"end":25,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":40,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":46,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":48,"end":50,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":22,"cssClass":"pl-s1"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":17,"cssClass":"pl-s1"},{"start":17,"end":19,"cssClass":"pl-c1"},{"start":19,"end":24,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":33,"cssClass":"pl-c"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":14,"cssClass":"pl-v"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":39,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":8,"end":20,"cssClass":"pl-c"}],[{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":18,"cssClass":"pl-k"},{"start":19,"end":20,"cssClass":"pl-s1"},{"start":21,"end":24,"cssClass":"pl-c1"},{"start":25,"end":33,"cssClass":"pl-s"},{"start":34,"end":36,"cssClass":"pl-c1"},{"start":37,"end":43,"cssClass":"pl-k"},{"start":44,"end":45,"cssClass":"pl-s1"},{"start":46,"end":49,"cssClass":"pl-c1"},{"start":50,"end":58,"cssClass":"pl-s"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":60,"end":61,"cssClass":"pl-kos"}],[{"start":12,"end":18,"cssClass":"pl-k"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":18,"cssClass":"pl-k"},{"start":19,"end":20,"cssClass":"pl-s1"},{"start":21,"end":24,"cssClass":"pl-c1"},{"start":25,"end":33,"cssClass":"pl-s"},{"start":34,"end":36,"cssClass":"pl-c1"},{"start":37,"end":43,"cssClass":"pl-k"},{"start":44,"end":45,"cssClass":"pl-s1"},{"start":46,"end":49,"cssClass":"pl-c1"},{"start":50,"end":58,"cssClass":"pl-s"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":60,"end":61,"cssClass":"pl-kos"}],[{"start":12,"end":18,"cssClass":"pl-k"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":8,"end":18,"cssClass":"pl-c"}],[{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":23,"cssClass":"pl-c1"},{"start":24,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[],[{"start":12,"end":28,"cssClass":"pl-c"}],[{"start":12,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":36,"end":48,"cssClass":"pl-en"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"}],[{"start":16,"end":22,"cssClass":"pl-k"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"}],[],[{"start":12,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":17,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":35,"cssClass":"pl-c1"},{"start":36,"end":48,"cssClass":"pl-en"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"}],[{"start":16,"end":22,"cssClass":"pl-k"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"}],[],[{"start":12,"end":35,"cssClass":"pl-c"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[],[{"start":12,"end":15,"cssClass":"pl-k"},{"start":16,"end":22,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"}],[],[{"start":12,"end":29,"cssClass":"pl-c"}],[{"start":12,"end":15,"cssClass":"pl-k"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":20,"cssClass":"pl-k"},{"start":21,"end":26,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":37,"cssClass":"pl-s1"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":50,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-c1"},{"start":53,"end":54,"cssClass":"pl-s1"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":55,"end":61,"cssClass":"pl-c1"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":65,"end":66,"cssClass":"pl-s1"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":67,"end":73,"cssClass":"pl-c1"},{"start":76,"end":77,"cssClass":"pl-s1"},{"start":77,"end":78,"cssClass":"pl-kos"},{"start":78,"end":84,"cssClass":"pl-c1"},{"start":84,"end":85,"cssClass":"pl-kos"},{"start":85,"end":86,"cssClass":"pl-kos"},{"start":87,"end":92,"cssClass":"pl-s1"},{"start":92,"end":94,"cssClass":"pl-c1"},{"start":94,"end":95,"cssClass":"pl-kos"},{"start":96,"end":97,"cssClass":"pl-kos"}],[],[{"start":16,"end":29,"cssClass":"pl-c"}],[{"start":16,"end":18,"cssClass":"pl-k"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":21,"end":30,"cssClass":"pl-en"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":38,"cssClass":"pl-s1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":43,"cssClass":"pl-c1"},{"start":44,"end":53,"cssClass":"pl-en"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":55,"cssClass":"pl-s1"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":61,"cssClass":"pl-s1"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":65,"end":66,"cssClass":"pl-kos"}],[{"start":20,"end":26,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-kos"}],[],[{"start":16,"end":18,"cssClass":"pl-k"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":42,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-c1"},{"start":44,"end":53,"cssClass":"pl-en"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":55,"cssClass":"pl-s1"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":61,"cssClass":"pl-s1"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":65,"end":66,"cssClass":"pl-kos"}],[{"start":20,"end":26,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-kos"}],[],[{"start":16,"end":40,"cssClass":"pl-c"}],[{"start":16,"end":18,"cssClass":"pl-k"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":42,"cssClass":"pl-c1"},{"start":43,"end":52,"cssClass":"pl-en"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-s1"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":55,"end":60,"cssClass":"pl-s1"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":64,"end":65,"cssClass":"pl-kos"}],[{"start":20,"end":23,"cssClass":"pl-k"},{"start":24,"end":31,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":34,"end":52,"cssClass":"pl-en"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-s1"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":55,"end":60,"cssClass":"pl-s1"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":71,"cssClass":"pl-en"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":74,"cssClass":"pl-kos"}],[{"start":20,"end":23,"cssClass":"pl-k"},{"start":24,"end":31,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":34,"end":52,"cssClass":"pl-en"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-s1"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":55,"end":60,"cssClass":"pl-s1"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":71,"cssClass":"pl-en"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":74,"cssClass":"pl-kos"}],[],[{"start":20,"end":26,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":50,"cssClass":"pl-en"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":58,"cssClass":"pl-s1"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":60,"end":72,"cssClass":"pl-s"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":74,"end":75,"cssClass":"pl-kos"},{"start":76,"end":87,"cssClass":"pl-c1"},{"start":89,"end":97,"cssClass":"pl-s"},{"start":98,"end":99,"cssClass":"pl-kos"},{"start":99,"end":100,"cssClass":"pl-kos"},{"start":100,"end":101,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-kos"}],[],[{"start":16,"end":44,"cssClass":"pl-c"}],[{"start":16,"end":18,"cssClass":"pl-k"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":26,"cssClass":"pl-s1"},{"start":27,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":20,"end":25,"cssClass":"pl-k"}],[{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"}],[],[{"start":12,"end":56,"cssClass":"pl-c"}],[{"start":12,"end":18,"cssClass":"pl-k"},{"start":19,"end":25,"cssClass":"pl-s1"},{"start":26,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":39,"cssClass":"pl-en"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":55,"cssClass":"pl-en"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":57,"cssClass":"pl-s1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":66,"cssClass":"pl-en"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":68,"end":69,"cssClass":"pl-kos"},{"start":70,"end":82,"cssClass":"pl-s"},{"start":82,"end":83,"cssClass":"pl-kos"},{"start":84,"end":85,"cssClass":"pl-kos"},{"start":86,"end":97,"cssClass":"pl-c1"},{"start":99,"end":107,"cssClass":"pl-s"},{"start":108,"end":109,"cssClass":"pl-kos"},{"start":109,"end":110,"cssClass":"pl-kos"},{"start":110,"end":111,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":12,"end":41,"cssClass":"pl-c"}],[{"start":12,"end":18,"cssClass":"pl-k"},{"start":19,"end":25,"cssClass":"pl-v"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":37,"cssClass":"pl-v"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":12,"cssClass":"pl-s1"},{"start":12,"end":15,"cssClass":"pl-c1"},{"start":15,"end":21,"cssClass":"pl-s"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-v"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":17,"cssClass":"pl-v"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":0,"end":10,"cssClass":"pl-c"}],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":12,"cssClass":"pl-k"},{"start":13,"end":28,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":45,"end":47,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":13,"cssClass":"pl-s1"},{"start":13,"end":15,"cssClass":"pl-c1"},{"start":15,"end":25,"cssClass":"pl-s"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":4,"end":21,"cssClass":"pl-c"}],[{"start":4,"end":9,"cssClass":"pl-k"},{"start":10,"end":21,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":4,"end":19,"cssClass":"pl-c"}],[{"start":4,"end":9,"cssClass":"pl-k"},{"start":10,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":4,"end":19,"cssClass":"pl-c"}],[{"start":4,"end":9,"cssClass":"pl-k"},{"start":10,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":4,"end":19,"cssClass":"pl-c"}],[{"start":4,"end":9,"cssClass":"pl-k"},{"start":10,"end":18,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[],[{"start":4,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":8,"end":13,"cssClass":"pl-k"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":8,"end":20,"cssClass":"pl-c"}],[{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":29,"cssClass":"pl-pds"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":16,"cssClass":"pl-cce"},{"start":21,"end":23,"cssClass":"pl-cce"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":34,"cssClass":"pl-en"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":12,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":28,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-k"},{"start":15,"end":17,"cssClass":"pl-k"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":29,"cssClass":"pl-pds"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":34,"cssClass":"pl-en"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":12,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":28,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-k"},{"start":15,"end":17,"cssClass":"pl-k"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":25,"cssClass":"pl-pds"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":23,"cssClass":"pl-cce"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-en"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":12,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":25,"cssClass":"pl-en"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":12,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":4,"end":21,"cssClass":"pl-c"}],[{"start":4,"end":9,"cssClass":"pl-k"},{"start":10,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":11,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":33,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":44,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":49,"cssClass":"pl-kos"},{"start":49,"end":62,"cssClass":"pl-en"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":64,"cssClass":"pl-s1"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":65,"end":73,"cssClass":"pl-c1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":74,"end":75,"cssClass":"pl-c1"},{"start":75,"end":76,"cssClass":"pl-kos"},{"start":76,"end":77,"cssClass":"pl-kos"},{"start":77,"end":78,"cssClass":"pl-kos"},{"start":78,"end":79,"cssClass":"pl-kos"}],[{"start":11,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":33,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":44,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":61,"cssClass":"pl-en"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-s1"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":64,"end":72,"cssClass":"pl-c1"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":74,"cssClass":"pl-c1"},{"start":74,"end":75,"cssClass":"pl-kos"},{"start":75,"end":76,"cssClass":"pl-kos"},{"start":76,"end":77,"cssClass":"pl-kos"},{"start":77,"end":78,"cssClass":"pl-kos"},{"start":78,"end":106,"cssClass":"pl-c"}],[{"start":11,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":45,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-c1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":61,"cssClass":"pl-c1"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-c1"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":65,"end":66,"cssClass":"pl-kos"}],[{"start":11,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":37,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":48,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-c1"},{"start":54,"end":55,"cssClass":"pl-s1"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":64,"cssClass":"pl-c1"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":65,"end":66,"cssClass":"pl-c1"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":67,"end":68,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":18,"cssClass":"pl-s1"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/hjdhnx/dr_py/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false,"repoAlertsPath":"/hjdhnx/dr_py/security/dependabot","repoSecurityAndAnalysisPath":"/hjdhnx/dr_py/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"sortName.js","displayUrl":"https://github.com/hjdhnx/dr_py/blob/main/libs/sortName.js?raw=true","headerInfo":{"blobSize":"31.9 KB","deleteInfo":{"deleteTooltip":"Fork this repository and delete the file"},"editInfo":{"editTooltip":"Fork this repository and edit the file"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"b072933","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fhjdhnx%2Fdr_py%2Fblob%2Fmain%2Flibs%2FsortName.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"178","truncatedSloc":"156"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","languageID":183,"large":false,"loggedIn":true,"newDiscussionPath":"/hjdhnx/dr_py/discussions/new","newIssuePath":"/hjdhnx/dr_py/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/hjdhnx/dr_py/blob/main/libs/sortName.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/hjdhnx/dr_py/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"rawBlobUrl":"https://github.com/hjdhnx/dr_py/raw/main/libs/sortName.js","renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"hjdhnx","repoName":"dr_py","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timedOut":false,"notAnalyzed":false,"symbols":[{"name":"checkCh","kind":"function","identStart":26622,"identEnd":26629,"extentStart":26613,"extentEnd":27054,"fullyQualifiedName":"checkCh","identUtf16":{"start":{"lineNumber":5,"utf16Col":9},"end":{"lineNumber":5,"utf16Col":16}},"extentUtf16":{"start":{"lineNumber":5,"utf16Col":0},"end":{"lineNumber":12,"utf16Col":1}}},{"name":"mkRslt","kind":"function","identStart":27065,"identEnd":27071,"extentStart":27056,"extentEnd":27917,"fullyQualifiedName":"mkRslt","identUtf16":{"start":{"lineNumber":14,"utf16Col":9},"end":{"lineNumber":14,"utf16Col":15}},"extentUtf16":{"start":{"lineNumber":14,"utf16Col":0},"end":{"lineNumber":39,"utf16Col":1}}},{"name":"trim","kind":"function","identStart":27959,"identEnd":27963,"extentStart":27942,"extentEnd":28023,"fullyQualifiedName":"trim","identUtf16":{"start":{"lineNumber":41,"utf16Col":17},"end":{"lineNumber":41,"utf16Col":21}},"extentUtf16":{"start":{"lineNumber":41,"utf16Col":0},"end":{"lineNumber":41,"utf16Col":81}}},{"name":"getFirstLetterList","kind":"function","identStart":28113,"identEnd":28131,"extentStart":28104,"extentEnd":28697,"fullyQualifiedName":"getFirstLetterList","identUtf16":{"start":{"lineNumber":45,"utf16Col":16},"end":{"lineNumber":45,"utf16Col":34}},"extentUtf16":{"start":{"lineNumber":45,"utf16Col":7},"end":{"lineNumber":57,"utf16Col":1}}},{"name":"isAllChinese","kind":"function","identStart":28745,"identEnd":28757,"extentStart":28736,"extentEnd":28809,"fullyQualifiedName":"isAllChinese","identUtf16":{"start":{"lineNumber":60,"utf16Col":9},"end":{"lineNumber":60,"utf16Col":21}},"extentUtf16":{"start":{"lineNumber":60,"utf16Col":0},"end":{"lineNumber":62,"utf16Col":1}}},{"name":"isChinese","kind":"function","identStart":28851,"identEnd":28860,"extentStart":28842,"extentEnd":28913,"fullyQualifiedName":"isChinese","identUtf16":{"start":{"lineNumber":65,"utf16Col":9},"end":{"lineNumber":65,"utf16Col":18}},"extentUtf16":{"start":{"lineNumber":65,"utf16Col":0},"end":{"lineNumber":67,"utf16Col":1}}},{"name":"sortListByCN","kind":"function","identStart":28956,"identEnd":28968,"extentStart":28956,"extentEnd":31429,"fullyQualifiedName":"sortListByCN","identUtf16":{"start":{"lineNumber":70,"utf16Col":13},"end":{"lineNumber":70,"utf16Col":25}},"extentUtf16":{"start":{"lineNumber":70,"utf16Col":13},"end":{"lineNumber":142,"utf16Col":1}}},{"name":"sortListByFirst","kind":"function","identStart":31470,"identEnd":31485,"extentStart":31470,"extentEnd":32687,"fullyQualifiedName":"sortListByFirst","identUtf16":{"start":{"lineNumber":145,"utf16Col":13},"end":{"lineNumber":145,"utf16Col":28}},"extentUtf16":{"start":{"lineNumber":145,"utf16Col":13},"end":{"lineNumber":177,"utf16Col":1}}}]}},"copilotInfo":{"documentationUrl":"https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot-for-individuals","notices":{"codeViewPopover":{"dismissed":false,"dismissPath":"/settings/dismiss-notice/code_view_copilot_popover"}},"userAccess":{"accessAllowed":false,"hasSubscriptionEnded":false,"orgHasCFBAccess":false,"userHasCFIAccess":false,"userHasOrgs":false,"userIsOrgAdmin":false,"userIsOrgMember":false,"business":null,"featureRequestInfo":null}},"csrf_tokens":{"/hjdhnx/dr_py/branches":{"post":"vg36bOWHVAJjijfraMfshUMRuGUt0Y7eRMbWJrRftyrpAjLaVZSyKnflEm_39TH_t7m0swko3KfcRTpvH2QMqw"},"/repos/preferences":{"post":"FjwHAswrTQYxRz9ICAjpssDiZguF-s0z7643PrbHG8TDR6Jw-hhIhnESj0_okIp04asTsI9SedaxLhcFarjgrg"}}},"title":"dr_py/libs/sortName.js at main · hjdhnx/dr_py","appPayload":{"helpUrl":"https://docs.github.com","findFileWorkerPath":"/assets-cdn/worker/find-file-worker-83d4418b406d.js","findInFileWorkerPath":"/assets-cdn/worker/find-in-file-worker-bcc43f789400.js","githubDevUrl":"https://github.dev/","enabled_features":{"code_nav_ui_events":false,"copilot_conversational_ux":false,"copilot_conversational_ux_streaming":false,"copilot_popover_file_editor_header":true,"copilot_smell_icebreaker_ux":false}}}</script>
  <div data-target="react-app.reactRoot"></div>
</react-app>
</turbo-frame>



  </div>

</turbo-frame>

    </main>
  </div>

  </div>

          <footer class="footer width-full container-xl p-responsive" role="contentinfo">
  <h2 class='sr-only'>Footer</h2>

  <div class="position-relative d-flex flex-items-center pb-2 f6 color-fg-muted border-top color-border-muted flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap mt-6 pt-6">
    <div class="list-style-none d-flex flex-wrap col-0 col-lg-2 flex-justify-start flex-lg-justify-between mb-2 mb-lg-0">
      <div class="mt-2 mt-lg-0 d-flex flex-items-center">
        <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-2" href="https://github.com">
          <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
</a>        <span>
        &copy; 2023 GitHub, Inc.
        </span>
      </div>
    </div>

    <nav aria-label='Footer' class="col-12 col-lg-8">
      <h3 class='sr-only' id='sr-footer-heading'>Footer navigation</h3>
      <ul class="list-style-none d-flex flex-wrap col-12 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0" aria-labelledby='sr-footer-heading'>
          <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}">Terms</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}">Privacy</a></li>
          <li class="mr-3 mr-lg-0"><a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security">Security</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://www.githubstatus.com/" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}">Status</a></li>
          <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to help, text:Docs" href="https://docs.github.com">Docs</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://support.github.com?tags=dotcom-footer" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}">Contact GitHub</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Pricing&quot;,&quot;label&quot;:&quot;text:Pricing&quot;}">Pricing</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to api&quot;,&quot;label&quot;:&quot;text:api&quot;}">API</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://services.github.com" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to training&quot;,&quot;label&quot;:&quot;text:training&quot;}">Training</a></li>
          <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to blog&quot;,&quot;label&quot;:&quot;text:blog&quot;}">Blog</a></li>
          <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
      </ul>
    </nav>
  </div>

  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 color-fg-muted"></span>
  </div>
</footer>




  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden>
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    </button>
    You can’t perform that action at this time.
  </div>

    <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default color-fg-default hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;">
  </div>
</div>

    <template id="snippet-clipboard-copy-button">
  <div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div>
</template>
<template id="snippet-clipboard-copy-button-unpositioned">
  <div class="zeroclipboard-container">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 tooltipped-no-delay d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div>
</template>


    <style>
      .user-mention[href$="/gogorotv"] {
        color: var(--color-user-mention-fg);
        background-color: var(--color-user-mention-bg);
        border-radius: 2px;
        margin-left: -2px;
        margin-right: -2px;
        padding: 0 2px;
      }
    </style>


    </div>

    <div id="js-global-screen-reader-notice" class="sr-only" aria-live="polite" ></div>
  </body>
</html>

