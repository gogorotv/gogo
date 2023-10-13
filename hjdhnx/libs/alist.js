





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
  <script type="text/javascript" nonce="babf6eea3d5847129172b8eb214" src="//local.adguard.org?ts=1697152839730&amp;type=content-script&amp;dmn=github.com&amp;url=https%3A%2F%2Fgithub.com%2Fhjdhnx%2Fdr_py%2Fblob%2Fmain%2Flibs%2Falist.js&amp;app=chrome.exe&amp;css=2&amp;js=1&amp;rel=1&amp;rji=1&amp;sbe=1&amp;stealth=1&amp;st-dnt"></script>
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


  <title>dr_py/libs/alist.js at main · hjdhnx/dr_py</title>



  <meta name="route-pattern" content="/:user_id/:repository/blob/*name(/*path)">

    
  <meta name="current-catalog-service-hash" content="82c569b93da5c18ed649ebd4c2c79437db4611a6a1373e805a3cb001c64130b7">


  <meta name="request-id" content="0BB8:2A1E9:22753C:25B99F:65288A86" data-turbo-transient="true" /><meta name="html-safe-nonce" content="c9670496bb2e309eb36063b3c920cb16f539ca725f10be5e34eb4aa5642c5c12" data-turbo-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9oamRobngvZHJfcHkvdHJlZS9tYWluL2xpYnMiLCJyZXF1ZXN0X2lkIjoiMEJCODoyQTFFOToyMjc1M0M6MjVCOTlGOjY1Mjg4QTg2IiwidmlzaXRvcl9pZCI6Ijg4MDU1NDA1NzMyNjYxMDk3NTAiLCJyZWdpb25fZWRnZSI6ImphcGFuZWFzdCIsInJlZ2lvbl9yZW5kZXIiOiJpYWQifQ==" data-turbo-transient="true" /><meta name="visitor-hmac" content="c9ef05d000a1a6dce46eb8f9a3161c5a41d5f9b79cc75cfa42314c1288ca7d9a" data-turbo-transient="true" />


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
    
      <meta name="description" content="A webServer convert web and x5 movie sites to cms api data - dr_py/libs/alist.js at main · hjdhnx/dr_py">
      <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <meta property="fb:app_id" content="1401488693436528">
    <meta name="apple-itunes-app" content="app-id=1477376905, app-argument=https://github.com/hjdhnx/dr_py/blob/main/libs/alist.js" />
      <meta name="twitter:image:src" content="https://opengraph.githubassets.com/f6a30d397de96d17b6808619b1718f66b00400b77ff8d6a2178977198fd57158/hjdhnx/dr_py" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="dr_py/libs/alist.js at main · hjdhnx/dr_py" /><meta name="twitter:description" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" />
      <meta property="og:image" content="https://opengraph.githubassets.com/f6a30d397de96d17b6808619b1718f66b00400b77ff8d6a2178977198fd57158/hjdhnx/dr_py" /><meta property="og:image:alt" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="600" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="dr_py/libs/alist.js at main · hjdhnx/dr_py" /><meta property="og:url" content="https://github.com/hjdhnx/dr_py/blob/main/libs/alist.js" /><meta property="og:description" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" />
      

      <link rel="shared-web-socket" href="wss://alive.github.com/_sockets/u/139020806/ws?session=eyJ2IjoiVjMiLCJ1IjoxMzkwMjA4MDYsInMiOjEyMjE1NzQ0NzAsImMiOjE5OTUwNTA5MCwidCI6MTY5NzE1NTc0OH0=--6983b5e45fb52e8c0034a100abbf9fc1acdc42b1ccef4982ee5d0e83bee6fbd0" data-refresh-url="/_alive" data-session-id="b901c9b8379b94b0262d68dba8a5f5afb2b3e5767167059fbd5009fa1e7b15b7">
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
      
  <button aria-label="Open global navigation menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-02509990-609d-4225-b83d-98ff166a55ce" id="dialog-show-dialog-02509990-609d-4225-b83d-98ff166a55ce" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-bg-transparent p-0 color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-three-bars Button-visual">
    <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
</svg>
</button>  

<div class="Overlay--hidden Overlay-backdrop--side Overlay-backdrop--placement-left" data-modal-dialog-overlay>
  <modal-dialog data-target="deferred-side-panel.panel" role="dialog" id="dialog-02509990-609d-4225-b83d-98ff166a55ce" aria-modal="true" aria-disabled="true" aria-labelledby="dialog-02509990-609d-4225-b83d-98ff166a55ce-title" aria-describedby="dialog-02509990-609d-4225-b83d-98ff166a55ce-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade SidePanel">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-02509990-609d-4225-b83d-98ff166a55ce-title">
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
      <button data-close-dialog-id="dialog-02509990-609d-4225-b83d-98ff166a55ce" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body d-flex flex-column height-full px-2">      <nav aria-label="Site navigation" data-view-component="true" class="ActionList">
  
  <nav-list>
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-hotkey="g d" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;HOME&quot;,&quot;label&quot;:null}" id="item-1c71e4c6-d244-455a-b741-d0aea658a9f7" href="/dashboard" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES&quot;,&quot;label&quot;:null}" id="item-b0d53033-a976-4325-85a9-afbc5da9eb6d" href="/issues" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS&quot;,&quot;label&quot;:null}" id="item-0c54f660-f0c6-49f2-a1f4-7484cd545b10" href="/pulls" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DISCUSSIONS&quot;,&quot;label&quot;:null}" id="item-d1e8b29f-9a5b-403c-964a-3e79e83aa5bb" href="/discussions" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;CODESPACES&quot;,&quot;label&quot;:null}" id="item-1cd9e2b0-4397-4011-9bd0-22871d12ff99" href="https://github.com/codespaces" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;EXPLORE&quot;,&quot;label&quot;:null}" id="item-ca82a9a5-a295-4900-a0c4-e9b3347a237f" href="/explore" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;MARKETPLACE&quot;,&quot;label&quot;:null}" id="item-322186d8-8e9a-408a-93ff-dccfb8f92e5c" href="/marketplace" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;FEEDBACK&quot;,&quot;label&quot;:null}" id="item-848ef09a-8791-4fae-9a33-ddf0eb854d22" href="https://gh.io/navigation-update" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
              


<qbsearch-input class="search-input" data-scope="repo:hjdhnx/dr_py" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="GAE6tpAOesirKkv5JjpvwMOEQG8STXAoAJp2-drx4XDveIR0mdwsz-4CQ6MrXEEe6Uu1NJo1090PTqzC6DudHw" data-max-custom-scopes="10" data-header-redesign-enabled="true" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="hjdhnx/dr_py" data-current-org="" data-current-owner="hjdhnx" data-logged-in="true">
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

      <tool-tip id="tooltip-ddcf61f2-187a-4b5b-8481-586701d000c8" for="AppHeader-commandPalette-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Command palette</tool-tip>
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
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-c4c94ae1-2dbe-4b47-a3fb-5f791584c919" data-target="query-builder.input" data-action="
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
      <div class="FormControl-inlineValidation" id="validation-c4c94ae1-2dbe-4b47-a3fb-5f791584c919" hidden="hidden">
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
      <div data-view-component="true" class="Overlay-body">        <!-- '"` --><!-- </textarea></xmp> --></option></form><form id="code-search-feedback-form" data-turbo="false" action="/search/feedback" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="XxZ2eAQSgjlTj_LiY15uQHnDvgGhnE96a_JDmRjBnBdq4Arbq3V7HYcL4-vM-DoR-J3a2NK5kp5hrVHMXkheAw" />
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form id="custom-scopes-dialog-form" data-turbo="false" action="/search/custom_scopes" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="5W8emgGB38zJCxvHMWk1xJ95kxenCpKsqLjba5p6-hfR5EOhKooK8FdOH7tecGonlP5xehp260pNNJzJBUqr4A" />
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
              <input type="hidden" value="EitcjenJmkKdu4_a-CtGkt0vG8ulFfOgXjP6doZjFZoaCLFm99dY65LwvNLOZW-B6Mi1uv1JqO91Mq75AeqGMQ" data-csrf="true" />
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
</qbsearch-input><input type="hidden" value="JF_GkbiWnMCz8LIVTc9wMuAwBo76oHwUZSVuJGwyapa4uiYpYmNRYobwryjFqKO_vSdy9uEH5JJdJ1i2Fl3KxQ" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />

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
</button>  <tool-tip id="tooltip-c46a4992-1f57-4563-8d6c-035d21f63ba2" for="global-create-menu-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Create new...</tool-tip>
</div>

<anchored-position id="global-create-menu-overlay" anchor="global-create-menu-button" align="end" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      
        <div data-view-component="true">
  <ul aria-labelledby="global-create-menu-button" id="global-create-menu-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new repository&quot;}" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="/new" tabindex="-1" id="item-8b8cb802-81a3-484d-b7a4-e92490f00d67" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="/new/import" tabindex="-1" id="item-b903303e-f32f-4265-9121-9ae1fcccb2d9" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="/codespaces/new" tabindex="-1" id="item-710207e0-4dc2-424b-9bc3-266bc762db45" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="https://gist.github.com/" tabindex="-1" id="item-7b770ec4-ceec-4de3-b410-8fa708944474" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="/account/organizations/new" tabindex="-1" id="item-99032641-fcb1-490d-a881-41ceed90b38c" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
  <a href="/issues" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-86cf5f5e-4fff-40f9-ac69-b710cc4c8864" aria-labelledby="tooltip-181513de-4448-41d9-9d7c-ba4b292abf02" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened Button-visual">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
</a>  <tool-tip id="tooltip-181513de-4448-41d9-9d7c-ba4b292abf02" for="icon-button-86cf5f5e-4fff-40f9-ac69-b710cc4c8864" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Issues</tool-tip>
</div>
          <div data-view-component="true" class="Button-withTooltip">
  <a href="/pulls" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-80745aaa-fbe6-4341-9b24-c65c3c4e9843" aria-labelledby="tooltip-ccedf633-5565-4bbe-aac4-8b2420fcc82c" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request Button-visual">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
</a>  <tool-tip id="tooltip-ccedf633-5565-4bbe-aac4-8b2420fcc82c" for="icon-button-80745aaa-fbe6-4341-9b24-c65c3c4e9843" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Pull requests</tool-tip>
</div>
          
        </div>

        

<notification-indicator data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTM5MDIwODA2IiwidCI6MTY5NzE1NTc0OH0=--8cb001efa92c6fd697f7241946f2c875a4a749a39bb1d1c0c3f472a8abefeda3" data-indicator-mode="none" data-tooltip-global="You have unread notifications" data-tooltip-unavailable="Notifications are unavailable at the moment." data-tooltip-none="You have no unread notifications" data-header-redesign-enabled="true" data-fetch-indicator-src="/notifications/indicator" data-fetch-indicator-enabled="true" data-view-component="true" class="js-socket-channel">
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

    <tool-tip data-target="notification-indicator.tooltip" id="tooltip-6b5d3a3f-0744-4eb0-8a75-88353c76f9fc" for="AppHeader-notifications-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Notifications</tool-tip>
</notification-indicator>

        

        <div class="AppHeader-user">
          <deferred-side-panel data-url="/_side-panels/user?memex_enabled=true&amp;repository=dr_py&amp;user=gogorotv&amp;user_can_create_organizations=true&amp;user_id=139020806">
  <include-fragment data-target="deferred-side-panel.fragment">
      <user-drawer-side-panel>
      <button aria-label="Open user account menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-5b2bf9ad-c72b-466a-989b-86716690751f" id="dialog-show-dialog-5b2bf9ad-c72b-466a-989b-86716690751f" type="button" data-view-component="true" class="AppHeader-logo Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0">    <span class="Button-content">
      <span class="Button-label"><img src="https://avatars.githubusercontent.com/u/139020806?v=4" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle" /></span>
    </span>
</button>  

<div class="Overlay--hidden Overlay-backdrop--side Overlay-backdrop--placement-right" data-modal-dialog-overlay>
  <modal-dialog data-target="deferred-side-panel.panel" role="dialog" id="dialog-5b2bf9ad-c72b-466a-989b-86716690751f" aria-modal="true" aria-disabled="true" aria-labelledby="dialog-5b2bf9ad-c72b-466a-989b-86716690751f-title" aria-describedby="dialog-5b2bf9ad-c72b-466a-989b-86716690751f-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade SidePanel">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-5b2bf9ad-c72b-466a-989b-86716690751f-title">
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
      <button data-close-dialog-id="dialog-5b2bf9ad-c72b-466a-989b-86716690751f" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body d-flex flex-column height-full px-2">      <nav aria-label="User navigation" data-view-component="true" class="ActionList">
  
  <nav-list>
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-e2cdd38b-b201-4d77-9004-fa5b9de75d6b" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PROFILE&quot;,&quot;label&quot;:null}" id="item-c991fd87-999f-41d9-b565-c7598e54594f" href="https://github.com/gogorotv" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-72b8c2e3-2b48-41dd-8218-2063372aa3a8" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_REPOSITORIES&quot;,&quot;label&quot;:null}" id="item-62e3c3bf-37bd-45e8-81ee-929a505320b7" href="/gogorotv?tab=repositories" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_PROJECTS&quot;,&quot;label&quot;:null}" id="item-407a954d-9a8f-4a95-9d93-4f7fd2b93e52" href="/gogorotv?tab=projects" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-c6ad61a4-3c43-4b02-9b15-541dab1eeef8" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_STARS&quot;,&quot;label&quot;:null}" id="item-acb54990-88f4-4621-8852-e4d9b9db83be" href="/gogorotv?tab=stars" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SPONSORS&quot;,&quot;label&quot;:null}" id="item-d85b9377-2597-4d43-8054-4489fe928dec" href="/sponsors/accounts" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_GISTS&quot;,&quot;label&quot;:null}" id="item-00039dba-463f-4972-814c-6acd4b66e974" href="https://gist.github.com/mine" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-bc955d87-7dcb-4e95-8efd-8a759f251f50" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-dfb68c6c-f5c6-4217-b1d5-bb1e2175cbc3" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-9d239803-2b53-4f69-bb89-01b06c4bf6cb" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SETTINGS&quot;,&quot;label&quot;:null}" id="item-39226569-418c-4e8c-8043-9b6c5b5bc33e" href="/settings/profile" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DOCS&quot;,&quot;label&quot;:null}" id="item-de821130-64d6-4c51-be11-ec93450d63c8" href="https://docs.github.com" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SUPPORT&quot;,&quot;label&quot;:null}" id="item-049f9ca2-279e-401f-ae7c-77537ec13136" href="https://support.github.com" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;LOGOUT&quot;,&quot;label&quot;:null}" id="item-4f443edc-8a87-49c6-9207-28fb1cfc855b" href="/logout" data-view-component="true" class="ActionListContent">
      
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
  <button id="icon-button-7a7332fc-ee6d-41f0-afe4-c7dcd6be6af4" aria-labelledby="tooltip-91a9729e-e6ff-43a4-9e30-a28d77860e4c" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium js-flash-close">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button>  <tool-tip id="tooltip-91a9729e-e6ff-43a4-9e30-a28d77860e4c" for="icon-button-7a7332fc-ee6d-41f0-afe4-c7dcd6be6af4" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Dismiss alert</tool-tip>
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


    
    <notification-shelf-watcher data-base-url="https://github.com/notifications/beta/shelf" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTM5MDIwODA2IiwidCI6MTY5NzE1NTc0OH0=--8cb001efa92c6fd697f7241946f2c875a4a749a39bb1d1c0c3f472a8abefeda3" data-view-component="true" class="js-socket-channel"></notification-shelf-watcher>
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
      return-to=/hjdhnx/dr_py/blob/main/libs/alist.js
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
</button>    <tool-tip id="tooltip-fd32fbe2-5dea-44d0-b2b8-3c69f3805b85" for="command-palette-clear-button" popover="manual" data-direction="w" data-type="label" data-view-component="true" class="sr-only position-absolute">Clear Command Palette</tool-tip>
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
  initial-path="/hjdhnx/dr_py/blob/main/libs/alist.js"
  style="min-height: calc(100vh - 62px)"
  data-ssr="false"
  data-lazy="false"
  data-alternate="false"
>
  
  <script type="application/json" data-target="react-app.embeddedData">{"payload":{"allShortcutsEnabled":true,"fileTree":{"libs":{"items":[{"name":"jar","path":"libs/jar","contentType":"directory"},{"name":"parse","path":"libs/parse","contentType":"directory"},{"name":"alist.js","path":"libs/alist.js","contentType":"file"},{"name":"alist.min.js","path":"libs/alist.min.js","contentType":"file"},{"name":"atob.js","path":"libs/atob.js","contentType":"file"},{"name":"base64.js","path":"libs/base64.js","contentType":"file"},{"name":"base64.min.js","path":"libs/base64.min.js","contentType":"file"},{"name":"cat_index.js","path":"libs/cat_index.js","contentType":"file"},{"name":"cheerio.min.js","path":"libs/cheerio.min.js","contentType":"file"},{"name":"cheerio.min.jsd","path":"libs/cheerio.min.jsd","contentType":"file"},{"name":"crypto-hiker.js","path":"libs/crypto-hiker.js","contentType":"file"},{"name":"crypto-js.js","path":"libs/crypto-js.js","contentType":"file"},{"name":"drT.js","path":"libs/drT.js","contentType":"file"},{"name":"drpy-ym.js","path":"libs/drpy-ym.js","contentType":"file"},{"name":"drpy.js","path":"libs/drpy.js","contentType":"file"},{"name":"drpy.min.js","path":"libs/drpy.min.js","contentType":"file"},{"name":"drpy.ym.js","path":"libs/drpy.ym.js","contentType":"file"},{"name":"drpy2-2838.js","path":"libs/drpy2-2838.js","contentType":"file"},{"name":"drpy2.js","path":"libs/drpy2.js","contentType":"file"},{"name":"drpy2.min.js","path":"libs/drpy2.min.js","contentType":"file"},{"name":"es6py.js","path":"libs/es6py.js","contentType":"file"},{"name":"exRegExp.js","path":"libs/exRegExp.js","contentType":"file"},{"name":"gbk.js","path":"libs/gbk.js","contentType":"file"},{"name":"gbk2.js","path":"libs/gbk2.js","contentType":"file"},{"name":"live2cms.js","path":"libs/live2cms.js","contentType":"file"},{"name":"live2mv.js","path":"libs/live2mv.js","contentType":"file"},{"name":"maomi_aes.js","path":"libs/maomi_aes.js","contentType":"file"},{"name":"mod.js","path":"libs/mod.js","contentType":"file"},{"name":"nameOrder.js","path":"libs/nameOrder.js","contentType":"file"},{"name":"pdf.js","path":"libs/pdf.js","contentType":"file"},{"name":"pinyin_getFirstLetterList.js","path":"libs/pinyin_getFirstLetterList.js","contentType":"file"},{"name":"pre.js","path":"libs/pre.js","contentType":"file"},{"name":"rsa.js","path":"libs/rsa.js","contentType":"file"},{"name":"searchFilter.js","path":"libs/searchFilter.js","contentType":"file"},{"name":"sortName.js","path":"libs/sortName.js","contentType":"file"},{"name":"underscore-esm-min.js","path":"libs/underscore-esm-min.js","contentType":"file"},{"name":"uri.min.js","path":"libs/uri.min.js","contentType":"file"},{"name":"util.ym.js","path":"libs/util.ym.js","contentType":"file"}],"totalCount":38},"":{"items":[{"name":".idea","path":".idea","contentType":"directory"},{"name":"base","path":"base","contentType":"directory"},{"name":"controllers","path":"controllers","contentType":"directory"},{"name":"doc","path":"doc","contentType":"directory"},{"name":"docker","path":"docker","contentType":"directory"},{"name":"images","path":"images","contentType":"directory"},{"name":"jiexi","path":"jiexi","contentType":"directory"},{"name":"js","path":"js","contentType":"directory"},{"name":"libs","path":"libs","contentType":"directory"},{"name":"logs","path":"logs","contentType":"directory"},{"name":"models","path":"models","contentType":"directory"},{"name":"py","path":"py","contentType":"directory"},{"name":"static","path":"static","contentType":"directory"},{"name":"super","path":"super","contentType":"directory"},{"name":"templates","path":"templates","contentType":"directory"},{"name":"test","path":"test","contentType":"directory"},{"name":"txt","path":"txt","contentType":"directory"},{"name":"utils","path":"utils","contentType":"directory"},{"name":"whl","path":"whl","contentType":"directory"},{"name":"zhengban","path":"zhengban","contentType":"directory"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"404.jpg","path":"404.jpg","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"app.py","path":"app.py","contentType":"file"},{"name":"app.sh","path":"app.sh","contentType":"file"},{"name":"commands.txt","path":"commands.txt","contentType":"file"},{"name":"dockerfile","path":"dockerfile","contentType":"file"},{"name":"dockerfile_arm64.txt","path":"dockerfile_arm64.txt","contentType":"file"},{"name":"dockerfile_armv7.txt","path":"dockerfile_armv7.txt","contentType":"file"},{"name":"drpy_js_rule.js","path":"drpy_js_rule.js","contentType":"file"},{"name":"readme.md","path":"readme.md","contentType":"file"},{"name":"requirements.txt","path":"requirements.txt","contentType":"file"},{"name":"sources.list","path":"sources.list","contentType":"file"},{"name":"start.sh","path":"start.sh","contentType":"file"}],"totalCount":34}},"fileTreeProcessingTime":18.90308,"foldersToFetch":[],"reducedMotionEnabled":"system","repo":{"id":533565455,"defaultBranch":"main","name":"dr_py","ownerLogin":"hjdhnx","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2022-09-07T09:54:07.000+08:00","ownerAvatar":"https://avatars.githubusercontent.com/u/49803097?v=4","public":true,"private":false,"isOrgOwned":false},"symbolsExpanded":false,"treeExpanded":true,"refInfo":{"name":"main","listCacheKey":"v0:1696329988.0","canEdit":true,"refType":"branch","currentOid":"fde84cfa7523179df20601cfc560c55fcbe9f5de"},"path":"libs/alist.js","currentUser":{"id":139020806,"login":"gogorotv","userEmail":"gogoro2024@gmail.com"},"blob":{"rawLines":["// import _ from 'https://underscorejs.org/underscore-esm-min.js'","// import {distance} from 'https://unpkg.com/fastest-levenshtein@1.0.16/esm/mod.js'","import {distance} from './mod.js'","import {sortListByCN} from './sortName.js'","","/**"," * alist js"," * 配置设置 {\"key\":\"Alist\",\"name\":\"Alist\",\"type\":3,\"api\":\"http://xxx.com/alist.js\",\"searchable\":0,\"quickSearch\":0,\"filterable\":0,\"ext\":\"http://xxx.com/alist.json\"}"," * alist.json [{","\t\t\t\tname:'名称',","\t\t\t\tserver:'地址',","\t\t\t\tstartPage:'/',\t\t //启动文件夹","\t\t\t\tshowAll: false ,\t//是否显示全部文件，默认false只显示 音视频和文件夹"," \t\t\t\tsearch: true, // 启用小雅的搜索,搜索只会搜第一个开启此开关的磁盘","\t\t\t\tparams:{ \t\t\t//对应文件夹参数 如设置对应文件夹的密码","\t\t\t\t\t'/abc':{ password : '123' },","\t\t\t\t\t'/abc/abc':{ password : '123' },","\t\t\t\t}","\t\t}]"," * 提示 想要加载文件夹里面全部视频到详情（看剧可以自动播放下一集支持历史记录）"," *\t\t需要改软件才能支持，，建议长按文件夹时添加判断 tag == folder 时跳转 DetailActivity"," */","String.prototype.rstrip = function (chars) {","\tlet regex = new RegExp(chars + \"$\");","\treturn this.replace(regex, \"\");","};","var showMode = 'single';","var searchDriver = '';","var limit_search_show = 200;","var search_type = '';","var detail_order = 'name';","var playRaw = 1; // 播放直链获取,默认0直接拼接/d 填1可以获取阿里oss链接。注意，有时效性","const request_timeout = 5000;","const VERSION = 'alist v2/v3 20221223';","const UA = 'Mozilla/5.0'; //默认请求ua","/**"," * 打印日志"," * @param any 任意变量"," */","function print(any){","\tany = any||'';","\tif(typeof(any)=='object'\u0026\u0026Object.keys(any).length\u003e0){","\t\ttry {","\t\t\tany = JSON.stringify(any);","\t\t\tconsole.log(any);","\t\t}catch (e) {","\t\t\t// console.log('print:'+e.message);","\t\t\tconsole.log(typeof(any)+':'+any.length);","\t\t}","\t}else if(typeof(any)=='object'\u0026\u0026Object.keys(any).length\u003c1){","\t\tconsole.log('null object');","\t}else{","\t\tconsole.log(any);","\t}","}","","/*** js自封装的方法 ***/","","/**"," * 获取链接的host(带http协议的完整链接)"," * @param url 任意一个正常完整的Url,自动提取根"," * @returns {string}"," */","function getHome(url){","\tif(!url){","\t\treturn ''","\t}","\tlet tmp = url.split('//');","\turl = tmp[0] + '//' + tmp[1].split('/')[0];","\ttry {","\t\turl = decodeURIComponent(url);","\t}catch (e) {}","\treturn url","}","","const http = function (url, options = {}) {","\tif(options.method ==='POST' \u0026\u0026 options.data){","\t\toptions.body = JSON.stringify(options.data);","\t\toptions.headers = Object.assign({'content-type':'application/json'}, options.headers);","\t}","\toptions.timeout = request_timeout;","\tif(!options.headers){","\t\toptions.headers = {};","\t}","\tlet keys = Object.keys(options.headers).map(it=\u003eit.toLowerCase());","\tif(!keys.includes('referer')){","\t\toptions.headers['Referer'] = getHome(url);","\t}","\tif(!keys.includes('user-agent')){","\t\toptions.headers['User-Agent'] = UA;","\t}","\tconsole.log(JSON.stringify(options.headers));","\ttry {","\t\tconst res = req(url, options);","\t\t// if(options.headers['Authorization']){","\t\t// \tconsole.log(res.content);","\t\t// }","\t\tres.json = () =\u003e res\u0026\u0026res.content ? JSON.parse(res.content) : null;","\t\tres.text = () =\u003e res\u0026\u0026res.content ? res.content:'';","\t\treturn res","\t}catch (e) {","\t\treturn {","\t\t\tjson() {","\t\t\t\treturn null","\t\t\t}, text() {","\t\t\t\treturn ''","\t\t\t}","\t\t}","\t}","};","[\"get\", \"post\"].forEach(method =\u003e {","    http[method] = function (url, options = {}) {","        return http(url, Object.assign(options, {method: method.toUpperCase()}));","    }","});","","const __drives = {};","","function isMedia(file){","\treturn /\\.(dff|dsf|mp3|aac|wav|wma|cda|flac|m4a|mid|mka|mp2|mpa|mpc|ape|ofr|ogg|ra|wv|tta|ac3|dts|tak|webm|wmv|mpeg|mov|ram|swf|mp4|avi|rm|rmvb|flv|mpg|mkv|m3u8|ts|3gp|asf)$/.test(file.toLowerCase());","}","","function get_drives_path(tid) {","\tconst index = tid.indexOf('$');","\tconst name = tid.substring(0, index);","\tconst path = tid.substring(index + 1);","\treturn { drives: get_drives(name), path };","}","","function get_drives(name) {","\tconst { settings, api, server,headers } = __drives[name];","\tif (settings.v3 == null) { //获取 设置","\t\tsettings.v3 = false;","\t\tconst data = http.get(server + '/api/public/settings',{headers:headers}).json().data;","\t\tif (Array.isArray(data)) {","\t\t\tsettings.title = data.find(x =\u003e x.key === 'title')?.value;","\t\t\tsettings.v3 = false;","\t\t\tsettings.version = data.find(x =\u003e x.key === 'version')?.value;","\t\t\tsettings.enableSearch = data.find(x =\u003e x.key === 'enable search')?.value === 'true';","\t\t} else {","\t\t\tsettings.title = data.title;","\t\t\tsettings.v3 = true;","\t\t\tsettings.version = data.version;","\t\t\tsettings.enableSearch = false; //v3 没有找到 搜索配置","\t\t}","\t\t//不同版本 接口不一样","\t\tapi.path = settings.v3 ? '/api/fs/list' : '/api/public/path';","\t\tapi.file = settings.v3 ? '/api/fs/get' : '/api/public/path';","\t\tapi.search = settings.v3 ? '/api/public/search' : '/api/public/search';","\t}","\treturn __drives[name]","}","","function init(ext) {","\tconsole.log(\"当前版本号:\"+VERSION);","\tlet data;","\tif (typeof ext == 'object'){","\t\tdata = ext;","\t\tprint('alist ext:object');","\t} else if (typeof ext == 'string') {","\t\tif (ext.startsWith('http')) {","\t\t\tlet alist_data = ext.split(';');","\t\t\tlet alist_data_url = alist_data[0];","\t\t\tlimit_search_show = alist_data.length\u003e1?Number(alist_data[1])||limit_search_show:limit_search_show;","\t\t\tsearch_type = alist_data.length\u003e2?alist_data[2]:search_type;","\t\t\tprint(alist_data_url);","\t\t\tdata = http.get(alist_data_url).json(); // .map(it=\u003e{it.name='🙋丫仙女';return it})","\t\t} else {","\t\t\tprint('alist ext:json string');","\t\t\tdata = JSON.parse(ext);","\t\t}","\t}","","\t// print(data); // 测试证明壳子标题支持emoji,是http请求源码不支持emoji","\tlet drives = [];","\tif(Array.isArray(data) \u0026\u0026 data.length \u003e 0 \u0026\u0026 data[0].hasOwnProperty('server') \u0026\u0026 data[0].hasOwnProperty('name')){","\t\tdrives = data;","\t}else if(!Array.isArray(data)\u0026\u0026data.hasOwnProperty('drives')\u0026\u0026Array.isArray(data.drives)){","\t\tdrives = data.drives.filter(it=\u003e(it.type\u0026\u0026it.type==='alist')||!it.type);","\t}","\tprint(drives);","\tsearchDriver = (drives.find(x=\u003ex.search)||{}).name||'';","\tif(!searchDriver \u0026\u0026 drives.length \u003e 0){","\t\tsearchDriver = drives[0].name;","\t}","\tprint(searchDriver);","\tdrives.forEach(item =\u003e {","\t\tlet _path_param = [];","\t\tif(item.params){","\t\t\t_path_param = Object.keys(item.params);","\t\t\t// 升序排列","\t\t\t_path_param.sort((a,b)=\u003e(a.length-b.length));","\t\t}","\t\tif(item.password){","\t\t\tlet pwdObj = {","\t\t\t\tpassword: item.password","\t\t\t};","\t\t\tif(!item.params){","\t\t\t\titem.params = {'/':pwdObj};","\t\t\t}else{","\t\t\t\titem.params['/'] = pwdObj;","\t\t\t}","\t\t\t_path_param.unshift('/');","\t\t}","\t\t__drives[item.name] = {","\t\t\tname: item.name,","\t\t\tserver: item.server.endsWith(\"/\") ? item.server.rstrip(\"/\") : item.server,","\t\t\tstartPage: item.startPage || '/', //首页","\t\t\tshowAll: item.showAll === true, //默认只显示 视频和文件夹，如果想显示全部 showAll 设置true","\t\t\tsearch: !!item.search, //是否支持搜索,只有小丫的可以,多个可搜索只取最前面的一个","\t\t\tparams: item.params || {},","\t\t\t_path_param: _path_param,","\t\t\tsettings: {},","\t\t\tapi: {},","\t\t\theaders:item.headers||{},","\t\t\tgetParams(path) {","\t\t\t\tconst key = this._path_param.find(x =\u003e path.startsWith(x));","\t\t\t\treturn Object.assign({}, this.params[key], { path });","\t\t\t},","\t\t\tgetPath(path) {","\t\t\t\tconst res = http.post(this.server + this.api.path, { data: this.getParams(path),headers:this.headers }).json();","\t\t\t\t// console.log(res);","\t\t\t\ttry {","\t\t\t\t\treturn this.settings.v3 ? res.data.content : res.data.files","\t\t\t\t}catch (e) {","\t\t\t\t\tconsole.log(`getPath发生错误:${e.message}`);","\t\t\t\t\tconsole.log(JSON.stringify(res));","\t\t\t\t\treturn [{name:'error',value:JSON.stringify(res)}]","\t\t\t\t}","\t\t\t},","\t\t\tgetFile(path) {","\t\t\t\tlet raw_url = this.server+'/d'+path;","\t\t\t\traw_url = encodeURI(raw_url);","\t\t\t\tlet data = {raw_url:raw_url,raw_url1:raw_url};","\t\t\t\tif(playRaw===1){","\t\t\t\t\ttry {","\t\t\t\t\t\tconst res = http.post(this.server + this.api.file, { data: this.getParams(path),headers:this.headers }).json();","\t\t\t\t\t\tdata = this.settings.v3 ? res.data : res.data.files[0];","\t\t\t\t\t\tif (!this.settings.v3) {","\t\t\t\t\t\t\tdata.raw_url = data.url; //v2 的url和v3不一样","\t\t\t\t\t\t}","\t\t\t\t\t\tdata.raw_url1 = raw_url;","\t\t\t\t\t\treturn data","\t\t\t\t\t}catch (e) {","\t\t\t\t\t\treturn data","\t\t\t\t\t}","\t\t\t\t}else{","\t\t\t\t\treturn data","\t\t\t\t}","\t\t\t},","\t\t\tisFolder(data) { return data.type === 1 },","\t\t\tisVideo(data) { //判断是否是 视频文件","\t\t\t\t// return this.settings.v3 ? data.type === 2 : data.type === 3","\t\t\t\t// 增加音乐识别 视频,其他,音频","\t\t\t\treturn this.settings.v3 ? (data.type === 2||data.type===0||data.type===3) : (data.type === 3||data.type===0||data.type === 4)","\t\t\t},","\t\t\tis_subt(data) {","\t\t\t\tif (data.type === 1) {","\t\t\t\t\treturn false;","\t\t\t\t}","\t\t\t\tconst ext = /\\.(srt|ass|scc|stl|ttml)$/;  // [\".srt\", \".ass\", \".scc\", \".stl\", \".ttml\"];","\t\t\t\t// return ext.some(x =\u003e data.name.endsWith(x));","\t\t\t\treturn ext.test(data.name);","\t\t\t},","\t\t\tgetPic(data) {","\t\t\t\tlet pic = this.settings.v3 ? data.thumb : data.thumbnail;","\t\t\t\treturn pic || (this.isFolder(data) ? \"http://img1.3png.com/281e284a670865a71d91515866552b5f172b.png\" : '');","\t\t\t},","\t\t\tgetTime(data,isStandard) {","\t\t\t\tisStandard = isStandard||false;","\t\t\t\ttry {","\t\t\t\t\tlet tTime = data.updated_at || data.time_str || data.modified || \"\";","\t\t\t\t\tlet date = '';","\t\t\t\t\tif(tTime){","\t\t\t\t\t\ttTime = tTime.split(\"T\");","\t\t\t\t\t\tdate = tTime[0];","\t\t\t\t\t\tif(isStandard){","\t\t\t\t\t\t\tdate = date.replace(/-/g,\"/\");","\t\t\t\t\t\t}","\t\t\t\t\t\ttTime = tTime[1].split(/Z|\\./);","\t\t\t\t\t\tdate += \" \" + tTime[0];","\t\t\t\t\t}","\t\t\t\t\treturn date;","\t\t\t\t}catch (e) {","\t\t\t\t\t// print(e.message);","\t\t\t\t\t// print(data);","\t\t\t\t\treturn ''","\t\t\t\t}","\t\t\t},","\t}","\t}","\t);","\tprint('init执行完毕');","}","","function home(filter) {","\tlet classes = Object.keys(__drives).map(key =\u003e ({","\t\ttype_id: `${key}$${__drives[key].startPage}`,","\t\ttype_name: key,","\t\ttype_flag: '1',","\t}));","\tlet filter_dict = {};","\tlet filters = [{'key': 'order', 'name': '排序', 'value': [{'n': '名称⬆️', 'v': 'vod_name_asc'}, {'n': '名称⬇️', 'v': 'vod_name_desc'},","\t\t\t{'n': '中英⬆️', 'v': 'vod_cn_asc'}, {'n': '中英⬇️', 'v': 'vod_cn_desc'},","\t\t\t{'n': '时间⬆️', 'v': 'vod_time_asc'}, {'n': '时间⬇️', 'v': 'vod_time_desc'},","\t\t\t{'n': '大小⬆️', 'v': 'vod_size_asc'}, {'n': '大小⬇️', 'v': 'vod_size_desc'},{'n': '无', 'v': 'none'}]},","\t\t\t{'key': 'show', 'name': '播放展示', 'value': [{'n': '单集', 'v': 'single'},{'n': '全集', 'v': 'all'}]}","\t];","\tclasses.forEach(it=\u003e{","\t\tfilter_dict[it.type_id] = filters;","\t});","\tprint(\"----home----\");","\tprint(classes);","\treturn JSON.stringify({ 'class': classes,'filters': filter_dict});","}","","function homeVod(params) {","\tlet _post_data = {\"pageNum\":0,\"pageSize\":100};","\tlet _post_url = 'https://pbaccess.video.qq.com/trpc.videosearch.hot_rank.HotRankServantHttp/HotRankHttp';","\tlet data = http.post(_post_url,{ data: _post_data }).json();","\tlet _list = [];","\ttry {","\t\tdata = data['data']['navItemList'][0]['hotRankResult']['rankItemList'];","\t\t// print(data);","\t\tdata.forEach(it=\u003e{","\t\t\t_list.push({","\t\t\t\tvod_name:it.title,","\t\t\t\tvod_id:'msearch:'+it.title,","\t\t\t\tvod_pic:'https://avatars.githubusercontent.com/u/97389433?s=120\u0026v=4',","\t\t\t\tvod_remarks:it.changeOrder,","\t\t\t});","\t\t});","\t}catch (e) {","\t\tprint('Alist获取首页推荐发送错误:'+e.message);","\t}","\treturn JSON.stringify({ 'list': _list });","}","","function category(tid, pg, filter, extend) {","\tlet orid = tid.replace(/#all#|#search#/g,'');","\tlet { drives, path } = get_drives_path(orid);","\tconst id = orid.endsWith('/') ? orid : orid + '/';","\tconst list = drives.getPath(path);","\tlet subList = [];","\tlet vodFiles = [];","\tlet allList = [];","\tlet fl = filter?extend:{};","\tif(fl.show){","\t\tshowMode = fl.show;","\t}","\tlist.forEach(item =\u003e {","\t\tif(item.name!=='error') {","\t\t\tif (drives.is_subt(item)) {","\t\t\t\tsubList.push(item.name);","\t\t\t}","\t\t\tif (!drives.showAll \u0026\u0026 !drives.isFolder(item) \u0026\u0026 !drives.isVideo(item)) {","\t\t\t\treturn //只显示视频文件和文件夹","\t\t\t}","\t\t\tlet vod_time = drives.getTime(item);","\t\t\tlet vod_size = get_size(item.size);","\t\t\tlet remark = vod_time.split(' ')[0].substr(3) + '\\t' + vod_size;","\t\t\tlet vod_id = id + item.name + (drives.isFolder(item) ? '/' : '');","\t\t\tif (showMode === 'all') {","\t\t\t\tvod_id += '#all#';","\t\t\t}","\t\t\tprint(vod_id);","\t\t\tconst vod = {","\t\t\t\t'vod_id': vod_id,","\t\t\t\t'vod_name': item.name.replaceAll(\"$\", \"\").replaceAll(\"#\", \"\"),","\t\t\t\t'vod_pic': drives.getPic(item),","\t\t\t\t'vod_time': vod_time,","\t\t\t\t'vod_size': item.size,","\t\t\t\t'vod_tag': drives.isFolder(item) ? 'folder' : 'file',","\t\t\t\t'vod_remarks': drives.isFolder(item) ? remark + ' 文件夹' : remark","\t\t\t};","\t\t\tif (drives.isVideo(item)) {","\t\t\t\tvodFiles.push(vod);","\t\t\t}","\t\t\tallList.push(vod);","\t\t}else{","\t\t\tconsole.log(item);","\t\t\tconst vod = {","\t\t\t\tvod_name: item.value,","\t\t\t\tvod_id: 'no_data',","\t\t\t\tvod_remarks: '不要点,会崩的',","\t\t\t\tvod_pic: 'https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/404.jpg'","\t\t\t}","\t\t\tallList.push(vod);","\t\t}","\t});","","\tif (vodFiles.length === 1 \u0026\u0026 subList.length \u003e 0) { //只有一个视频 一个或者多个字幕 取相似度最高的","\t\t// let sub = subList.length === 1 ? subList[0] : _.chain(allList).sortBy(x =\u003e (x.includes('chs') ? 100 : 0) + levenshteinDistance(x, vodFiles[0].vod_name)).last().value();","\t\tlet sub; // 字幕文件名称","\t\tif(subList.length === 1){","\t\t\tsub = subList[0];","\t\t}else {","\t\t\tlet subs = JSON.parse(JSON.stringify(subList));","\t\t\tsubs.sort((a,b)=\u003e{","\t\t\t\t// chs是简体中文字幕","\t\t\t\tlet a_similar = (a.includes('chs') ? 100 : 0) + levenshteinDistance(a, vodFiles[0].vod_name);","\t\t\t\tlet b_similar = (b.includes('chs') ? 100 : 0) + levenshteinDistance(b, vodFiles[0].vod_name);","\t\t\t\tif(a_similar\u003eb_similar) { // 按相似度正序排列","\t\t\t\t\treturn 1;","\t\t\t\t}else{ //否则，位置不变","\t\t\t\t\treturn -1;","\t\t\t\t}","\t\t\t});","\t\t\tsub = subs.slice(-1)[0];","\t\t}","\t\tvodFiles[0].vod_id += \"@@@\" + sub;","\t\t// vodFiles[0].vod_remarks += \" 有字幕\";","\t\tvodFiles[0].vod_remarks += \"🏷️\";","\t} else {","\t\tvodFiles.forEach(item =\u003e {","\t\t\tconst lh = 0;","\t\t\tlet sub;","\t\t\tsubList.forEach(s =\u003e {","\t\t\t\t//编辑距离相似度","\t\t\t\tconst l = levenshteinDistance(s, item.vod_name);","\t\t\t\tif (l \u003e 60 \u0026\u0026 l \u003e lh) {","\t\t\t\t\tsub = s;","\t\t\t\t}","\t\t\t});","\t\t\tif (sub) {","\t\t\t\titem.vod_id += \"@@@\" + sub;","\t\t\t\t// item.vod_remarks += \" 有字幕\";","\t\t\t\titem.vod_remarks += \"🏷️\";","\t\t\t}","\t\t});","\t}","","\tif(fl.order){","\t\t// print(fl.order);","\t\tlet key = fl.order.split('_').slice(0,-1).join('_');","\t\tlet order = fl.order.split('_').slice(-1)[0];","\t\tprint(`排序key:${key},排序order:${order}`);","\t\tif(key.includes('name')){","\t\t\tdetail_order = 'name';","\t\t\tallList = sortListByName(allList,key,order);","\t\t}else if(key.includes('cn')){","\t\t\tdetail_order = 'cn';","\t\t\tallList = sortListByCN(allList,'vod_name',order);","\t\t}else if(key.includes('time')){","\t\t\tdetail_order = 'time';","\t\t\tallList = sortListByTime(allList,key,order);","\t\t}else if(key.includes('size')){","\t\t\tdetail_order = 'size';","\t\t\tallList = sortListBySize(allList,key,order);","\t\t}else if(fl.order.includes('none')){","\t\t\tdetail_order = 'none';","\t\t\tprint('不排序');","\t\t}","\t}else{","\t\t// 没传order是其他地方调用的,自动按名称正序排序方便追剧,如果传了none进去就不排序，假装云盘里本身文件顺序是正常的","\t\tif(detail_order!=='none'){","\t\t\tallList = sortListByName(allList,'vod_name','asc');","\t\t}","\t}","","\tprint(\"----category----\"+`tid:${tid},detail_order:${detail_order},showMode:${showMode}`);","\t// print(allList);","\treturn JSON.stringify({","\t\t'page': 1,","\t\t'pagecount': 1,","\t\t'limit': allList.length,","\t\t'total': allList.length,","\t\t'list': allList,","\t});","}","","function getAll(otid,tid,drives,path){","\ttry {","\t\tconst content = category(tid, null, false, null);","\t\tconst isFile = isMedia(otid.replace(/#all#|#search#/g,'').split('@@@')[0]);","\t\tconst { list } = JSON.parse(content);","\t\tlet vod_play_url = [];","\t\tlist.forEach(x =\u003e {","\t\t\tif (x.vod_tag === 'file'){","\t\t\t\tlet vid = x.vod_id.replace(/#all#|#search#/g,'');","\t\t\t\tvod_play_url.push(`${x.vod_name}$${vid.substring(vid.indexOf('$') + 1)}`);","\t\t\t}","\t\t});","\t\tconst pl = path.split(\"/\").filter(it=\u003eit);","\t\tlet vod_name = pl[pl.length - 1] || drives.name;","\t\tif(vod_name === drives.name){","\t\t\tprint(pl);","\t\t}","\t\tif(otid.includes('#search#')){","\t\t\tvod_name+='[搜]';","\t\t}","\t\tlet vod = {","\t\t\t// vod_id: tid,","\t\t\tvod_id: otid,","\t\t\tvod_name: vod_name,","\t\t\ttype_name: \"文件夹\",","\t\t\tvod_pic: \"https://avatars.githubusercontent.com/u/97389433?s=120\u0026v=4\",","\t\t\tvod_content: tid,","\t\t\tvod_tag: 'folder',","\t\t\tvod_play_from: drives.name,","\t\t\tvod_play_url: vod_play_url.join('#'),","\t\t\tvod_remarks: drives.settings.title,","\t\t}","\t\tprint(\"----detail1----\");","\t\tprint(vod);","\t\treturn JSON.stringify({ 'list': [vod] });","\t}catch (e) {","\t\tprint(e.message);","\t\tlet list = [{vod_name:'无数据,防无限请求',type_name: \"文件夹\",vod_id:'no_data',vod_remarks:'不要点,会崩的',vod_pic:'https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/static/img/404.jpg',vod_actor:e.message,vod_director: tid,vod_content: otid}];","\t\treturn JSON.stringify({ 'list': list });","\t}","}","","function detail(tid) {","\tlet isSearch = tid.includes('#search#');","\tlet isAll = tid.includes('#all#');","\tlet otid = tid;","\ttid = tid.replace(/#all#|#search#/g,'');","\tlet isFile = isMedia(tid.split('@@@')[0]);","\tprint(`isFile:${tid}?${isFile}`);","\tlet { drives, path } = get_drives_path(tid);","\tprint(`drives:${drives},path:${path},`);","\tif (path.endsWith(\"/\")) { //长按文件夹可以 加载里面全部视频到详情","\t\treturn getAll(otid,tid,drives,path);","\t} else {","\t\tif(isSearch\u0026\u0026!isFile){ // 搜索结果 当前目录获取所有文件","\t\t\treturn getAll(otid,tid,drives,path);","\t\t}else if(isAll){ // 上级目录获取所有文件  不管是搜索还是分类,只要不是 搜索到的文件夹，且展示模式为全部,都获取上级目录的所有文件","\t\t\t// 是文件就取上级目录","\t\t\tlet new_tid;","\t\t\tif(isFile){","\t\t\t\tnew_tid = tid.split('/').slice(0,-1).join('/')+'/';","\t\t\t}else{","\t\t\t\tnew_tid = tid;","\t\t\t}","\t\t\tprint(`全集模式 tid:${tid}=\u003etid:${new_tid}`);","\t\t\tlet { drives, path } = get_drives_path(new_tid);","\t\t\treturn getAll(otid,new_tid,drives,path);","\t\t} else if(isFile){ // 单文件进入","\t\t\tlet paths = path.split(\"@@@\");","\t\t\tlet vod_name = paths[0].substring(paths[0].lastIndexOf(\"/\") + 1);","\t\t\tlet vod_title = vod_name;","\t\t\tif(otid.includes('#search#')){","\t\t\t\tvod_title+='[搜]';","\t\t\t}","\t\t\tlet vod = {","\t\t\t\tvod_id: otid,","\t\t\t\tvod_name: vod_title,","\t\t\t\ttype_name: \"文件\",","\t\t\t\tvod_pic: \"https://avatars.githubusercontent.com/u/97389433?s=120\u0026v=4\",","\t\t\t\tvod_content: tid,","\t\t\t\tvod_play_from: drives.name,","\t\t\t\tvod_play_url: vod_name + \"$\" + path,","\t\t\t\tvod_remarks: drives.settings.title,","\t\t\t};","\t\t\tprint(\"----detail2----\");","\t\t\tprint(vod);","\t\t\treturn JSON.stringify({","\t\t\t\t'list': [vod]","\t\t\t});","\t\t}else{","\t\t\treturn JSON.stringify({","\t\t\t\t'list': []","\t\t\t});","\t\t}","\t}","}","","function play(flag, id, flags) {","\tconst drives = get_drives(flag);","\tconst urls = id.split(\"@@@\"); // @@@ 分割前是 相对文件path,分割后是字幕文件","\tlet vod = {","\t\t'parse': 0,","\t\t'playUrl': '',","\t\t// 'url': drives.getFile(urls[0]).raw_url+'#.m3u8' // 加 # 没法播放","\t\t'url': drives.getFile(urls[0]).raw_url","\t};","\tif (urls.length \u003e= 2) {","\t\tconst path = urls[0].substring(0, urls[0].lastIndexOf('/') + 1);","\t\tvod.subt = drives.getFile(path + urls[1]).raw_url1;","\t}","\tprint(\"----play----\");","\tprint(vod);","\treturn JSON.stringify(vod);","}","","function search(wd, quick) {","\tprint(__drives);","\tprint('可搜索的alist驱动:'+searchDriver);","\tif(!searchDriver||!wd){","\t\treturn JSON.stringify({","\t\t\t'list': []","\t\t});","\t}else{","\t\tlet driver = __drives[searchDriver];","\t\twd = wd.split(' ').filter(it=\u003eit.trim()).join('+');","\t\tprint(driver);","\t\tlet surl = driver.server + '/search?box='+wd+'\u0026url=';","\t\tif(search_type){","\t\t\tsurl+='\u0026type='+search_type;","\t\t}","\t\tprint('搜索链接:'+surl);","\t\tlet html = http.get(surl).text();","\t\tlet lists = [];","\t\ttry {","\t\t\tlists = pdfa(html,'div\u0026\u0026ul\u0026\u0026a');","\t\t}catch (e) {}","\t\tprint(`搜索结果数:${lists.length},搜索结果显示数量限制:${limit_search_show}`);","\t\tlet vods = [];","\t\tlet excludeReg = /\\.(pdf|epub|mobi|txt|doc|lrc)$/; // 过滤后缀文件","\t\tlet cnt = 0;","\t\tlists.forEach(it=\u003e{","\t\t\tlet vhref = pdfh(it,'a\u0026\u0026href');","\t\t\tif(vhref){","\t\t\t\tvhref = unescape(vhref);","\t\t\t}","\t\t\tif(excludeReg.test(vhref)){","\t\t\t\treturn; //跳过本次循环","\t\t\t}","\t\t\tif(cnt \u003c limit_search_show){","\t\t\t\tprint(vhref);","\t\t\t}","\t\t\tcnt ++;","\t\t\tlet vid = searchDriver+'$'+vhref+'#search#';","\t\t\tif(showMode==='all'){","\t\t\t\tvid+='#all#';","\t\t\t}","\t\t\tvods.push({","\t\t\t\tvod_name:pdfh(it,'a\u0026\u0026Text'),","\t\t\t\tvod_id:vid,","\t\t\t\tvod_tag: isMedia(vhref) ? 'file' : 'folder',","\t\t\t\tvod_pic:'http://img1.3png.com/281e284a670865a71d91515866552b5f172b.png',","\t\t\t\tvod_remarks:searchDriver","\t\t\t});","\t\t});","\t\t// 截取搜索结果","\t\tvods = vods.slice(0,limit_search_show);","\t\tprint(vods);","\t\treturn JSON.stringify({","\t\t\t'list': vods","\t\t});","\t}","}","","function get_size(sz) {","\tif (sz \u003c= 0) {","\t\treturn \"\";","\t}","\tlet filesize = \"\";","\tif (sz \u003e 1024 * 1024 * 1024 * 1024.0) {","\t\tsz /= (1024 * 1024 * 1024 * 1024.0);","\t\tfilesize = \"TB\";","\t} else if (sz \u003e 1024 * 1024 * 1024.0) {","\t\tsz /= (1024 * 1024 * 1024.0);","\t\tfilesize = \"GB\";","\t} else if (sz \u003e 1024 * 1024.0) {","\t\tsz /= (1024 * 1024.0);","\t\tfilesize = \"MB\";","\t} else if( sz \u003e 1024.0){","\t\tsz /= 1024.0;","\t\tfilesize = \"KB\";","\t}else{","\t\tfilesize = \"B\";","\t}","\t// 转成字符串","\tlet sizeStr = sz.toFixed(2) + filesize,","\t// 获取小数点处的索引","\tindex = sizeStr.indexOf(\".\"),","\t// 获取小数点后两位的值","\tdou = sizeStr.substr(index + 1, 2);","\tif (dou === \"00\") {","\t\treturn sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2);","\t}else{","\t\treturn sizeStr;","\t}","}","","// 相似度获取","function levenshteinDistance(str1, str2) {","    return 100 - 100 * distance(str1, str2) / Math.max(str1.length, str2.length);","}","","/**"," * 自然排序"," * [\"第1集\",\"第10集\",\"第20集\",\"第2集\",\"1\",\"2\",\"10\",\"12\",\"23\",\"01\",\"02\"].sort(naturalSort())"," * @param options {{key,caseSensitive, order: string}}"," */","function naturalSort(options) {","\tif (!options) {","\t\toptions = {};","\t}","","\treturn function (a, b) {","\t\tif(options.key){","\t\t\ta = a[options.key];","\t\t\tb = b[options.key];","\t\t}","\t\tvar EQUAL = 0;","\t\tvar GREATER = (options.order === 'desc' ?","\t\t\t\t-1 :","\t\t\t\t1","\t\t);","\t\tvar SMALLER = -GREATER;","","\t\tvar re = /(^-?[0-9]+(\\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi;","\t\tvar sre = /(^[ ]*|[ ]*$)/g;","\t\tvar dre = /(^([\\w ]+,?[\\w ]+)?[\\w ]+,?[\\w ]+\\d+:\\d+(:\\d+)?[\\w ]?|^\\d{1,4}[\\/\\-]\\d{1,4}[\\/\\-]\\d{1,4}|^\\w+, \\w+ \\d+, \\d{4})/;","\t\tvar hre = /^0x[0-9a-f]+$/i;","\t\tvar ore = /^0/;","","\t\tvar normalize = function normalize(value) {","\t\t\tvar string = '' + value;","\t\t\treturn (options.caseSensitive ?","\t\t\t\t\tstring :","\t\t\t\t\tstring.toLowerCase()","\t\t\t);","\t\t};","","\t\t// Normalize values to strings","\t\tvar x = normalize(a).replace(sre, '') || '';","\t\tvar y = normalize(b).replace(sre, '') || '';","","\t\t// chunk/tokenize","\t\tvar xN = x.replace(re, '\\0$1\\0').replace(/\\0$/, '').replace(/^\\0/, '').split('\\0');","\t\tvar yN = y.replace(re, '\\0$1\\0').replace(/\\0$/, '').replace(/^\\0/, '').split('\\0');","","\t\t// Return immediately if at least one of the values is empty.","\t\tif (!x \u0026\u0026 !y) return EQUAL;","\t\tif (!x \u0026\u0026 y) return GREATER;","\t\tif (x \u0026\u0026 !y) return SMALLER;","","\t\t// numeric, hex or date detection","\t\tvar xD = parseInt(x.match(hre)) || (xN.length != 1 \u0026\u0026 x.match(dre) \u0026\u0026 Date.parse(x));","\t\tvar yD = parseInt(y.match(hre)) || xD \u0026\u0026 y.match(dre) \u0026\u0026 Date.parse(y) || null;","\t\tvar oFxNcL, oFyNcL;","","\t\t// first try and sort Hex codes or Dates","\t\tif (yD) {","\t\t\tif (xD \u003c yD) return SMALLER;","\t\t\telse if (xD \u003e yD) return GREATER;","\t\t}","","\t\t// natural sorting through split numeric strings and default strings","\t\tfor (var cLoc = 0, numS = Math.max(xN.length, yN.length); cLoc \u003c numS; cLoc++) {","","\t\t\t// find floats not starting with '0', string or 0 if not defined (Clint Priest)","\t\t\toFxNcL = !(xN[cLoc] || '').match(ore) \u0026\u0026 parseFloat(xN[cLoc]) || xN[cLoc] || 0;","\t\t\toFyNcL = !(yN[cLoc] || '').match(ore) \u0026\u0026 parseFloat(yN[cLoc]) || yN[cLoc] || 0;","","\t\t\t// handle numeric vs string comparison - number \u003c string - (Kyle Adams)","\t\t\tif (isNaN(oFxNcL) !== isNaN(oFyNcL)) return (isNaN(oFxNcL)) ? GREATER : SMALLER;","","\t\t\t// rely on string comparison if different types - i.e. '02' \u003c 2 != '02' \u003c '2'","\t\t\telse if (typeof oFxNcL !== typeof oFyNcL) {","\t\t\t\toFxNcL += '';","\t\t\t\toFyNcL += '';","\t\t\t}","\t\t\tif (oFxNcL \u003c oFyNcL) return SMALLER;","\t\t\tif (oFxNcL \u003e oFyNcL) return GREATER;","\t\t}","\t\treturn EQUAL;","\t};","}","// 完整名称排序","const sortListByName = (vodList,key,order) =\u003e {","\tif(!key){","\t\treturn vodList","\t}","\torder = order||'asc'; // 默认正序","\t// 排序键,顺序,区分大小写","\treturn vodList.sort(naturalSort({key: key, order: order,caseSensitive:true}))","};","","const getTimeInt = (timeStr) =\u003e {","\treturn (new Date(timeStr)).getTime();","};","","// 时间","const sortListByTime = (vodList,key,order) =\u003e {","\tif (!key) {","\t\treturn vodList","\t}","\tlet ASCarr = vodList.sort((a, b) =\u003e {","\t\ta = a[key];","\t\tb = b[key];","\t\treturn getTimeInt(a) - getTimeInt(b);","\t});","\tif(order==='desc'){","\t\tASCarr.reverse();","\t}","\treturn ASCarr","};","","// 大小","const sortListBySize = (vodList,key,order) =\u003e {","\tif (!key) {","\t\treturn vodList","\t}","\tlet ASCarr = vodList.sort((a, b) =\u003e {","\t\ta = a[key];","\t\tb = b[key];","\t\treturn (Number(a) || 0) - (Number(b) || 0);","\t});","\tif(order==='desc'){","\t\tASCarr.reverse();","\t}","\treturn ASCarr","};","","// 导出函数对象","export default {","\tinit: init,","\thome: home,","\thomeVod: homeVod,","\tcategory: category,","\tdetail: detail,","\tplay: play,","\tsearch: search","}"],"stylingDirectives":[[{"start":0,"end":65,"cssClass":"pl-c"}],[{"start":0,"end":83,"cssClass":"pl-c"}],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":18,"end":22,"cssClass":"pl-k"},{"start":23,"end":33,"cssClass":"pl-s"}],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":26,"cssClass":"pl-k"},{"start":27,"end":42,"cssClass":"pl-s"}],[],[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":11,"cssClass":"pl-c"}],[{"start":0,"end":159,"cssClass":"pl-c"}],[{"start":0,"end":16,"cssClass":"pl-c"}],[{"start":0,"end":14,"cssClass":"pl-c"}],[{"start":0,"end":16,"cssClass":"pl-c"}],[{"start":0,"end":28,"cssClass":"pl-c"}],[{"start":0,"end":50,"cssClass":"pl-c"}],[{"start":0,"end":46,"cssClass":"pl-c"}],[{"start":0,"end":37,"cssClass":"pl-c"}],[{"start":0,"end":33,"cssClass":"pl-c"}],[{"start":0,"end":37,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"}],[{"start":0,"end":4,"cssClass":"pl-c"}],[{"start":0,"end":41,"cssClass":"pl-c"}],[{"start":0,"end":60,"cssClass":"pl-c"}],[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":6,"cssClass":"pl-v"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":16,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":23,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":34,"cssClass":"pl-k"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-k"},{"start":17,"end":23,"cssClass":"pl-v"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":29,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":32,"end":35,"cssClass":"pl-s"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":12,"cssClass":"pl-smi"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":30,"cssClass":"pl-s"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":23,"cssClass":"pl-s"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":21,"cssClass":"pl-s"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":21,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":27,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":20,"cssClass":"pl-s"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":25,"cssClass":"pl-s"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":58,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":21,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":28,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":38,"cssClass":"pl-s"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":8,"cssClass":"pl-c1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":24,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":34,"cssClass":"pl-c"}],[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":7,"cssClass":"pl-c"}],[{"start":0,"end":18,"cssClass":"pl-c"},{"start":3,"end":9,"cssClass":"pl-k"}],[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":14,"cssClass":"pl-en"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-c1"},{"start":7,"end":10,"cssClass":"pl-s1"},{"start":10,"end":12,"cssClass":"pl-c1"},{"start":12,"end":14,"cssClass":"pl-s"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":10,"cssClass":"pl-k"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":17,"cssClass":"pl-c1"},{"start":17,"end":25,"cssClass":"pl-s"},{"start":25,"end":27,"cssClass":"pl-c1"},{"start":27,"end":33,"cssClass":"pl-v"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":38,"cssClass":"pl-en"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":42,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":50,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-c1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-smi"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":14,"cssClass":"pl-en"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":3,"end":38,"cssClass":"pl-c"}],[{"start":3,"end":10,"cssClass":"pl-smi"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":14,"cssClass":"pl-en"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":21,"cssClass":"pl-k"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":27,"end":30,"cssClass":"pl-s"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":31,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":6,"cssClass":"pl-k"},{"start":7,"end":9,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":16,"cssClass":"pl-k"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":23,"cssClass":"pl-c1"},{"start":23,"end":31,"cssClass":"pl-s"},{"start":31,"end":33,"cssClass":"pl-c1"},{"start":33,"end":39,"cssClass":"pl-v"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":44,"cssClass":"pl-en"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":48,"cssClass":"pl-s1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":56,"cssClass":"pl-c1"},{"start":56,"end":57,"cssClass":"pl-c1"},{"start":57,"end":58,"cssClass":"pl-c1"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-kos"}],[{"start":2,"end":9,"cssClass":"pl-smi"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":13,"cssClass":"pl-en"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":27,"cssClass":"pl-s"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":6,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":2,"end":9,"cssClass":"pl-smi"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":13,"cssClass":"pl-en"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":18,"cssClass":"pl-c"}],[],[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":26,"cssClass":"pl-c"}],[{"start":0,"end":32,"cssClass":"pl-c"},{"start":3,"end":9,"cssClass":"pl-k"}],[{"start":0,"end":20,"cssClass":"pl-c"},{"start":3,"end":11,"cssClass":"pl-k"},{"start":13,"end":19,"cssClass":"pl-smi"}],[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-c1"},{"start":5,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":11,"cssClass":"pl-s"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":25,"cssClass":"pl-s"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-c1"},{"start":7,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":20,"cssClass":"pl-s"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":35,"cssClass":"pl-en"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":39,"cssClass":"pl-s"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-s1"},{"start":6,"end":7,"cssClass":"pl-c1"},{"start":8,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":11,"cssClass":"pl-s1"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":10,"cssClass":"pl-en"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":21,"cssClass":"pl-k"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":35,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":18,"cssClass":"pl-c1"},{"start":19,"end":22,"cssClass":"pl-c1"},{"start":22,"end":28,"cssClass":"pl-s"},{"start":29,"end":31,"cssClass":"pl-c1"},{"start":32,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":44,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":2,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":44,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":2,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":26,"cssClass":"pl-v"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":33,"cssClass":"pl-en"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":49,"cssClass":"pl-s"},{"start":50,"end":68,"cssClass":"pl-s"},{"start":68,"end":69,"cssClass":"pl-kos"},{"start":69,"end":70,"cssClass":"pl-kos"},{"start":71,"end":78,"cssClass":"pl-s1"},{"start":78,"end":79,"cssClass":"pl-kos"},{"start":79,"end":86,"cssClass":"pl-c1"},{"start":86,"end":87,"cssClass":"pl-kos"},{"start":87,"end":88,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-c1"},{"start":5,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":2,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":18,"cssClass":"pl-v"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":44,"cssClass":"pl-en"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":47,"cssClass":"pl-s1"},{"start":47,"end":49,"cssClass":"pl-c1"},{"start":49,"end":51,"cssClass":"pl-s1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":63,"cssClass":"pl-en"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":65,"end":66,"cssClass":"pl-kos"},{"start":66,"end":67,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-c1"},{"start":5,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":18,"cssClass":"pl-en"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":28,"cssClass":"pl-s"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":2,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":27,"cssClass":"pl-s"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":38,"cssClass":"pl-en"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":42,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-c1"},{"start":5,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":18,"cssClass":"pl-en"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":31,"cssClass":"pl-s"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":2,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":30,"cssClass":"pl-s"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":34,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":8,"cssClass":"pl-smi"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":2,"end":42,"cssClass":"pl-c"}],[{"start":2,"end":31,"cssClass":"pl-c"}],[{"start":2,"end":6,"cssClass":"pl-c"}],[{"start":2,"end":5,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":10,"cssClass":"pl-en"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":16,"end":18,"cssClass":"pl-c1"},{"start":19,"end":22,"cssClass":"pl-s1"},{"start":22,"end":24,"cssClass":"pl-c1"},{"start":24,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":35,"cssClass":"pl-c1"},{"start":38,"end":42,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":48,"cssClass":"pl-en"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":60,"cssClass":"pl-c1"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":64,"end":68,"cssClass":"pl-c1"},{"start":68,"end":69,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":10,"cssClass":"pl-en"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":16,"end":18,"cssClass":"pl-c1"},{"start":19,"end":22,"cssClass":"pl-s1"},{"start":22,"end":24,"cssClass":"pl-c1"},{"start":24,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":35,"cssClass":"pl-c1"},{"start":38,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":49,"cssClass":"pl-c1"},{"start":50,"end":52,"cssClass":"pl-s"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":12,"cssClass":"pl-s1"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":3,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":15,"cssClass":"pl-c1"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":13,"cssClass":"pl-s"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":6,"cssClass":"pl-s"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":8,"end":14,"cssClass":"pl-s"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":30,"cssClass":"pl-s1"},{"start":31,"end":33,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":4,"end":8,"cssClass":"pl-en"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":27,"cssClass":"pl-k"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":41,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":48,"end":49,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":31,"cssClass":"pl-v"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":38,"cssClass":"pl-en"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":46,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":55,"cssClass":"pl-c1"},{"start":57,"end":63,"cssClass":"pl-s1"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":64,"end":75,"cssClass":"pl-en"},{"start":75,"end":76,"cssClass":"pl-kos"},{"start":76,"end":77,"cssClass":"pl-kos"},{"start":77,"end":78,"cssClass":"pl-kos"},{"start":78,"end":79,"cssClass":"pl-kos"},{"start":79,"end":80,"cssClass":"pl-kos"},{"start":80,"end":81,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":175,"cssClass":"pl-pds"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":9,"end":11,"cssClass":"pl-cce"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-c1"},{"start":52,"end":53,"cssClass":"pl-c1"},{"start":56,"end":57,"cssClass":"pl-c1"},{"start":60,"end":61,"cssClass":"pl-c1"},{"start":64,"end":65,"cssClass":"pl-c1"},{"start":68,"end":69,"cssClass":"pl-c1"},{"start":72,"end":73,"cssClass":"pl-c1"},{"start":76,"end":77,"cssClass":"pl-c1"},{"start":80,"end":81,"cssClass":"pl-c1"},{"start":83,"end":84,"cssClass":"pl-c1"},{"start":86,"end":87,"cssClass":"pl-c1"},{"start":90,"end":91,"cssClass":"pl-c1"},{"start":94,"end":95,"cssClass":"pl-c1"},{"start":98,"end":99,"cssClass":"pl-c1"},{"start":102,"end":103,"cssClass":"pl-c1"},{"start":107,"end":108,"cssClass":"pl-c1"},{"start":111,"end":112,"cssClass":"pl-c1"},{"start":116,"end":117,"cssClass":"pl-c1"},{"start":120,"end":121,"cssClass":"pl-c1"},{"start":124,"end":125,"cssClass":"pl-c1"},{"start":128,"end":129,"cssClass":"pl-c1"},{"start":132,"end":133,"cssClass":"pl-c1"},{"start":136,"end":137,"cssClass":"pl-c1"},{"start":139,"end":140,"cssClass":"pl-c1"},{"start":144,"end":145,"cssClass":"pl-c1"},{"start":148,"end":149,"cssClass":"pl-c1"},{"start":152,"end":153,"cssClass":"pl-c1"},{"start":156,"end":157,"cssClass":"pl-c1"},{"start":161,"end":162,"cssClass":"pl-c1"},{"start":164,"end":165,"cssClass":"pl-c1"},{"start":168,"end":169,"cssClass":"pl-c1"},{"start":172,"end":173,"cssClass":"pl-kos"},{"start":173,"end":174,"cssClass":"pl-cce"},{"start":174,"end":175,"cssClass":"pl-c1"},{"start":175,"end":176,"cssClass":"pl-kos"},{"start":176,"end":180,"cssClass":"pl-en"},{"start":180,"end":181,"cssClass":"pl-kos"},{"start":181,"end":185,"cssClass":"pl-s1"},{"start":185,"end":186,"cssClass":"pl-kos"},{"start":186,"end":197,"cssClass":"pl-en"},{"start":197,"end":198,"cssClass":"pl-kos"},{"start":198,"end":199,"cssClass":"pl-kos"},{"start":199,"end":200,"cssClass":"pl-kos"},{"start":200,"end":201,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":28,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":30,"cssClass":"pl-s"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":33,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":16,"cssClass":"pl-c1"},{"start":18,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-c1"},{"start":43,"end":51,"cssClass":"pl-s1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":56,"cssClass":"pl-s1"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":58,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":16,"cssClass":"pl-c1"},{"start":17,"end":19,"cssClass":"pl-c1"},{"start":20,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":35,"cssClass":"pl-c"}],[{"start":2,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":30,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":33,"end":55,"cssClass":"pl-s"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":64,"cssClass":"pl-c1"},{"start":65,"end":72,"cssClass":"pl-s1"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":74,"end":75,"cssClass":"pl-kos"},{"start":75,"end":79,"cssClass":"pl-en"},{"start":79,"end":80,"cssClass":"pl-kos"},{"start":80,"end":81,"cssClass":"pl-kos"},{"start":81,"end":82,"cssClass":"pl-kos"},{"start":82,"end":86,"cssClass":"pl-c1"},{"start":86,"end":87,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":11,"cssClass":"pl-v"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":3,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-s1"},{"start":32,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":40,"cssClass":"pl-c1"},{"start":41,"end":44,"cssClass":"pl-c1"},{"start":45,"end":52,"cssClass":"pl-s"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":55,"cssClass":"pl-kos"},{"start":55,"end":60,"cssClass":"pl-c1"},{"start":60,"end":61,"cssClass":"pl-kos"}],[{"start":3,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":3,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-s1"},{"start":34,"end":36,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-s1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":42,"cssClass":"pl-c1"},{"start":43,"end":46,"cssClass":"pl-c1"},{"start":47,"end":56,"cssClass":"pl-s"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":59,"cssClass":"pl-kos"},{"start":59,"end":64,"cssClass":"pl-c1"},{"start":64,"end":65,"cssClass":"pl-kos"}],[{"start":3,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-s1"},{"start":39,"end":41,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":47,"cssClass":"pl-c1"},{"start":48,"end":51,"cssClass":"pl-c1"},{"start":52,"end":67,"cssClass":"pl-s"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":68,"end":70,"cssClass":"pl-kos"},{"start":70,"end":75,"cssClass":"pl-c1"},{"start":76,"end":79,"cssClass":"pl-c1"},{"start":80,"end":86,"cssClass":"pl-s"},{"start":86,"end":87,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":4,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":3,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":3,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":3,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":3,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":48,"cssClass":"pl-c"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":2,"end":14,"cssClass":"pl-c"}],[{"start":2,"end":5,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":24,"cssClass":"pl-c1"},{"start":27,"end":41,"cssClass":"pl-s"},{"start":44,"end":62,"cssClass":"pl-s"},{"start":62,"end":63,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":24,"cssClass":"pl-c1"},{"start":27,"end":40,"cssClass":"pl-s"},{"start":43,"end":61,"cssClass":"pl-s"},{"start":61,"end":62,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":26,"cssClass":"pl-c1"},{"start":29,"end":49,"cssClass":"pl-s"},{"start":52,"end":72,"cssClass":"pl-s"},{"start":72,"end":73,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-en"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":1,"end":8,"cssClass":"pl-smi"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":21,"cssClass":"pl-s"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":22,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":11,"cssClass":"pl-k"},{"start":12,"end":15,"cssClass":"pl-s1"},{"start":16,"end":18,"cssClass":"pl-c1"},{"start":19,"end":27,"cssClass":"pl-s"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":26,"cssClass":"pl-s"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-k"},{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":18,"cssClass":"pl-k"},{"start":19,"end":22,"cssClass":"pl-s1"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":26,"end":34,"cssClass":"pl-s"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":27,"cssClass":"pl-s"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":33,"cssClass":"pl-s"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":21,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":3,"end":20,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":40,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-c1"},{"start":43,"end":49,"cssClass":"pl-v"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":60,"cssClass":"pl-s1"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":61,"end":62,"cssClass":"pl-c1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":64,"end":66,"cssClass":"pl-c1"},{"start":66,"end":83,"cssClass":"pl-s1"},{"start":84,"end":101,"cssClass":"pl-s1"},{"start":101,"end":102,"cssClass":"pl-kos"}],[{"start":3,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":37,"end":47,"cssClass":"pl-s1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":49,"cssClass":"pl-c1"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":51,"end":62,"cssClass":"pl-s1"},{"start":62,"end":63,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-en"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":3,"end":7,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":14,"cssClass":"pl-en"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":18,"cssClass":"pl-en"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":39,"cssClass":"pl-en"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":83,"cssClass":"pl-c"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":4,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-en"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":32,"cssClass":"pl-s"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":3,"end":7,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":14,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":53,"cssClass":"pl-c"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":9,"cssClass":"pl-v"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":26,"cssClass":"pl-c1"},{"start":27,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":38,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-c1"},{"start":43,"end":45,"cssClass":"pl-c1"},{"start":46,"end":50,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":52,"cssClass":"pl-c1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":68,"cssClass":"pl-en"},{"start":68,"end":69,"cssClass":"pl-kos"},{"start":69,"end":77,"cssClass":"pl-s"},{"start":77,"end":78,"cssClass":"pl-kos"},{"start":79,"end":81,"cssClass":"pl-c1"},{"start":82,"end":86,"cssClass":"pl-s1"},{"start":86,"end":87,"cssClass":"pl-kos"},{"start":87,"end":88,"cssClass":"pl-c1"},{"start":88,"end":89,"cssClass":"pl-kos"},{"start":89,"end":90,"cssClass":"pl-kos"},{"start":90,"end":104,"cssClass":"pl-en"},{"start":104,"end":105,"cssClass":"pl-kos"},{"start":105,"end":111,"cssClass":"pl-s"},{"start":111,"end":112,"cssClass":"pl-kos"},{"start":112,"end":113,"cssClass":"pl-kos"},{"start":113,"end":114,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":6,"cssClass":"pl-k"},{"start":7,"end":9,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":11,"end":16,"cssClass":"pl-v"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":32,"cssClass":"pl-c1"},{"start":32,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":51,"cssClass":"pl-en"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":60,"cssClass":"pl-s"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":61,"end":63,"cssClass":"pl-c1"},{"start":63,"end":68,"cssClass":"pl-v"},{"start":68,"end":69,"cssClass":"pl-kos"},{"start":69,"end":76,"cssClass":"pl-en"},{"start":76,"end":77,"cssClass":"pl-kos"},{"start":77,"end":81,"cssClass":"pl-s1"},{"start":81,"end":82,"cssClass":"pl-kos"},{"start":82,"end":88,"cssClass":"pl-c1"},{"start":88,"end":89,"cssClass":"pl-kos"},{"start":89,"end":90,"cssClass":"pl-kos"},{"start":90,"end":91,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":32,"cssClass":"pl-s1"},{"start":32,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":42,"cssClass":"pl-c1"},{"start":42,"end":44,"cssClass":"pl-c1"},{"start":44,"end":46,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":51,"cssClass":"pl-c1"},{"start":51,"end":54,"cssClass":"pl-c1"},{"start":54,"end":61,"cssClass":"pl-s"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":64,"cssClass":"pl-c1"},{"start":64,"end":65,"cssClass":"pl-c1"},{"start":65,"end":67,"cssClass":"pl-s1"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":68,"end":72,"cssClass":"pl-c1"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":74,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":1,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-s1"},{"start":30,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":40,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":51,"cssClass":"pl-c1"},{"start":51,"end":53,"cssClass":"pl-c1"},{"start":53,"end":55,"cssClass":"pl-s"},{"start":55,"end":56,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-c1"},{"start":5,"end":17,"cssClass":"pl-s1"},{"start":18,"end":20,"cssClass":"pl-c1"},{"start":21,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":2,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":31,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":20,"cssClass":"pl-s1"},{"start":21,"end":23,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":16,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":3,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":23,"cssClass":"pl-v"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":40,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-c"}],[{"start":3,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":27,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-s1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":45,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-c1"},{"start":14,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":27,"cssClass":"pl-c1"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":7,"cssClass":"pl-c1"},{"start":7,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":4,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":22,"cssClass":"pl-s"},{"start":23,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":8,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":4,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":19,"cssClass":"pl-s"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":3,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":26,"cssClass":"pl-s"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":2,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":3,"end":7,"cssClass":"pl-c1"},{"start":9,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":3,"end":9,"cssClass":"pl-c1"},{"start":11,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":35,"cssClass":"pl-s"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":39,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":50,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":57,"cssClass":"pl-en"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":61,"cssClass":"pl-s"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":65,"end":69,"cssClass":"pl-s1"},{"start":69,"end":70,"cssClass":"pl-kos"},{"start":70,"end":76,"cssClass":"pl-c1"},{"start":76,"end":77,"cssClass":"pl-kos"}],[{"start":3,"end":12,"cssClass":"pl-c1"},{"start":14,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":28,"cssClass":"pl-c1"},{"start":29,"end":31,"cssClass":"pl-c1"},{"start":32,"end":35,"cssClass":"pl-s"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":41,"cssClass":"pl-c"}],[{"start":3,"end":10,"cssClass":"pl-c1"},{"start":12,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":33,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":72,"cssClass":"pl-c"}],[{"start":3,"end":9,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":13,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":56,"cssClass":"pl-c"}],[{"start":3,"end":9,"cssClass":"pl-c1"},{"start":11,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":22,"cssClass":"pl-c1"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":3,"end":14,"cssClass":"pl-c1"},{"start":16,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":3,"end":11,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-c1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-c1"},{"start":11,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":23,"cssClass":"pl-c1"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":3,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":4,"end":9,"cssClass":"pl-k"},{"start":10,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":20,"cssClass":"pl-smi"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":37,"cssClass":"pl-en"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-s1"},{"start":40,"end":42,"cssClass":"pl-c1"},{"start":43,"end":47,"cssClass":"pl-s1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":58,"cssClass":"pl-en"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-s1"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":17,"cssClass":"pl-v"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":33,"cssClass":"pl-smi"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":40,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":44,"cssClass":"pl-s1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":57,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":4,"end":9,"cssClass":"pl-k"},{"start":10,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":25,"cssClass":"pl-en"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-smi"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":37,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":40,"end":44,"cssClass":"pl-smi"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":48,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":53,"cssClass":"pl-c1"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":57,"end":61,"cssClass":"pl-c1"},{"start":63,"end":67,"cssClass":"pl-smi"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":68,"end":77,"cssClass":"pl-en"},{"start":77,"end":78,"cssClass":"pl-kos"},{"start":78,"end":82,"cssClass":"pl-s1"},{"start":82,"end":83,"cssClass":"pl-kos"},{"start":83,"end":84,"cssClass":"pl-kos"},{"start":84,"end":91,"cssClass":"pl-c1"},{"start":92,"end":96,"cssClass":"pl-smi"},{"start":96,"end":97,"cssClass":"pl-kos"},{"start":97,"end":104,"cssClass":"pl-c1"},{"start":105,"end":106,"cssClass":"pl-kos"},{"start":106,"end":107,"cssClass":"pl-kos"},{"start":107,"end":108,"cssClass":"pl-kos"},{"start":108,"end":112,"cssClass":"pl-en"},{"start":112,"end":113,"cssClass":"pl-kos"},{"start":113,"end":114,"cssClass":"pl-kos"},{"start":114,"end":115,"cssClass":"pl-kos"}],[{"start":4,"end":24,"cssClass":"pl-c"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":5,"end":11,"cssClass":"pl-k"},{"start":12,"end":16,"cssClass":"pl-smi"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":28,"cssClass":"pl-c1"},{"start":31,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":47,"cssClass":"pl-c1"},{"start":50,"end":53,"cssClass":"pl-s1"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":58,"cssClass":"pl-c1"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":59,"end":64,"cssClass":"pl-c1"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":5,"end":12,"cssClass":"pl-smi"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":43,"cssClass":"pl-s"},{"start":30,"end":42,"cssClass":"pl-s1"},{"start":30,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"}],[{"start":5,"end":12,"cssClass":"pl-smi"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":5,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":18,"cssClass":"pl-c1"},{"start":19,"end":26,"cssClass":"pl-s"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":32,"cssClass":"pl-c1"},{"start":33,"end":37,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":47,"cssClass":"pl-en"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":51,"cssClass":"pl-s1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":22,"cssClass":"pl-smi"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":30,"end":34,"cssClass":"pl-s"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":35,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":23,"cssClass":"pl-c1"},{"start":24,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":40,"cssClass":"pl-c1"},{"start":41,"end":48,"cssClass":"pl-s1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-s1"},{"start":14,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":5,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":6,"end":11,"cssClass":"pl-k"},{"start":12,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":32,"cssClass":"pl-smi"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":39,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-c1"},{"start":42,"end":46,"cssClass":"pl-smi"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":50,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":55,"cssClass":"pl-c1"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":59,"end":63,"cssClass":"pl-c1"},{"start":65,"end":69,"cssClass":"pl-smi"},{"start":69,"end":70,"cssClass":"pl-kos"},{"start":70,"end":79,"cssClass":"pl-en"},{"start":79,"end":80,"cssClass":"pl-kos"},{"start":80,"end":84,"cssClass":"pl-s1"},{"start":84,"end":85,"cssClass":"pl-kos"},{"start":85,"end":86,"cssClass":"pl-kos"},{"start":86,"end":93,"cssClass":"pl-c1"},{"start":94,"end":98,"cssClass":"pl-smi"},{"start":98,"end":99,"cssClass":"pl-kos"},{"start":99,"end":106,"cssClass":"pl-c1"},{"start":107,"end":108,"cssClass":"pl-kos"},{"start":108,"end":109,"cssClass":"pl-kos"},{"start":109,"end":110,"cssClass":"pl-kos"},{"start":110,"end":114,"cssClass":"pl-en"},{"start":114,"end":115,"cssClass":"pl-kos"},{"start":115,"end":116,"cssClass":"pl-kos"},{"start":116,"end":117,"cssClass":"pl-kos"}],[{"start":6,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":17,"cssClass":"pl-smi"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":26,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":32,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":40,"cssClass":"pl-c1"},{"start":43,"end":46,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":51,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":57,"cssClass":"pl-c1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":59,"cssClass":"pl-c1"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":61,"cssClass":"pl-kos"}],[{"start":6,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":11,"end":15,"cssClass":"pl-smi"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":27,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":7,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":47,"cssClass":"pl-c"}],[{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":6,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":6,"end":12,"cssClass":"pl-k"},{"start":13,"end":17,"cssClass":"pl-s1"}],[{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":6,"end":12,"cssClass":"pl-k"},{"start":13,"end":17,"cssClass":"pl-s1"}],[{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":9,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":5,"end":11,"cssClass":"pl-k"},{"start":12,"end":16,"cssClass":"pl-s1"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":3,"end":11,"cssClass":"pl-en"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":26,"cssClass":"pl-k"},{"start":27,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":36,"cssClass":"pl-c1"},{"start":37,"end":40,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":31,"cssClass":"pl-c"}],[{"start":4,"end":66,"cssClass":"pl-c"}],[{"start":4,"end":22,"cssClass":"pl-c"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":15,"cssClass":"pl-smi"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":27,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":40,"cssClass":"pl-c1"},{"start":41,"end":44,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-c1"},{"start":46,"end":48,"cssClass":"pl-c1"},{"start":48,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":57,"cssClass":"pl-c1"},{"start":57,"end":60,"cssClass":"pl-c1"},{"start":60,"end":61,"cssClass":"pl-c1"},{"start":61,"end":63,"cssClass":"pl-c1"},{"start":63,"end":67,"cssClass":"pl-s1"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":68,"end":72,"cssClass":"pl-c1"},{"start":72,"end":75,"cssClass":"pl-c1"},{"start":75,"end":76,"cssClass":"pl-c1"},{"start":76,"end":77,"cssClass":"pl-kos"},{"start":80,"end":81,"cssClass":"pl-kos"},{"start":81,"end":85,"cssClass":"pl-s1"},{"start":85,"end":86,"cssClass":"pl-kos"},{"start":86,"end":90,"cssClass":"pl-c1"},{"start":91,"end":94,"cssClass":"pl-c1"},{"start":95,"end":96,"cssClass":"pl-c1"},{"start":96,"end":98,"cssClass":"pl-c1"},{"start":98,"end":102,"cssClass":"pl-s1"},{"start":102,"end":103,"cssClass":"pl-kos"},{"start":103,"end":107,"cssClass":"pl-c1"},{"start":107,"end":110,"cssClass":"pl-c1"},{"start":110,"end":111,"cssClass":"pl-c1"},{"start":111,"end":113,"cssClass":"pl-c1"},{"start":113,"end":117,"cssClass":"pl-s1"},{"start":117,"end":118,"cssClass":"pl-kos"},{"start":118,"end":122,"cssClass":"pl-c1"},{"start":123,"end":126,"cssClass":"pl-c1"},{"start":127,"end":128,"cssClass":"pl-c1"},{"start":128,"end":129,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":17,"cssClass":"pl-c1"},{"start":18,"end":21,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":5,"end":11,"cssClass":"pl-k"},{"start":12,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":9,"cssClass":"pl-k"},{"start":10,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":43,"cssClass":"pl-pds"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":17,"end":19,"cssClass":"pl-cce"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-cce"},{"start":42,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":46,"end":91,"cssClass":"pl-c"}],[{"start":4,"end":51,"cssClass":"pl-c"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":3,"end":9,"cssClass":"pl-en"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":18,"cssClass":"pl-smi"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":27,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":30,"cssClass":"pl-c1"},{"start":33,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":43,"cssClass":"pl-c1"},{"start":46,"end":50,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":60,"cssClass":"pl-c1"},{"start":60,"end":61,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":14,"cssClass":"pl-s1"},{"start":15,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":23,"cssClass":"pl-smi"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":32,"cssClass":"pl-en"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":41,"end":104,"cssClass":"pl-s"},{"start":107,"end":109,"cssClass":"pl-s"},{"start":109,"end":110,"cssClass":"pl-kos"},{"start":110,"end":111,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":4,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":27,"cssClass":"pl-s1"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":29,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":5,"end":8,"cssClass":"pl-k"},{"start":9,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":32,"cssClass":"pl-c1"},{"start":33,"end":35,"cssClass":"pl-c1"},{"start":36,"end":40,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":49,"cssClass":"pl-c1"},{"start":50,"end":52,"cssClass":"pl-c1"},{"start":53,"end":57,"cssClass":"pl-s1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":66,"cssClass":"pl-c1"},{"start":67,"end":69,"cssClass":"pl-c1"},{"start":70,"end":72,"cssClass":"pl-s"},{"start":72,"end":73,"cssClass":"pl-kos"}],[{"start":5,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":18,"cssClass":"pl-s"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":5,"end":7,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":6,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":25,"cssClass":"pl-en"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":29,"cssClass":"pl-s"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":6,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":6,"end":8,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":7,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":31,"cssClass":"pl-pds"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":35,"cssClass":"pl-s"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":6,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":35,"cssClass":"pl-pds"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":32,"end":34,"cssClass":"pl-cce"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":6,"end":10,"cssClass":"pl-s1"},{"start":11,"end":13,"cssClass":"pl-c1"},{"start":14,"end":17,"cssClass":"pl-s"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":5,"end":11,"cssClass":"pl-k"},{"start":12,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":5,"end":25,"cssClass":"pl-c"}],[{"start":5,"end":20,"cssClass":"pl-c"}],[{"start":5,"end":11,"cssClass":"pl-k"},{"start":12,"end":14,"cssClass":"pl-s"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":17,"cssClass":"pl-s"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-en"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":21,"cssClass":"pl-v"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":40,"cssClass":"pl-en"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":44,"cssClass":"pl-s1"},{"start":45,"end":47,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":2,"end":9,"cssClass":"pl-c1"},{"start":11,"end":46,"cssClass":"pl-s"},{"start":12,"end":18,"cssClass":"pl-s1"},{"start":12,"end":14,"cssClass":"pl-kos"},{"start":14,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":45,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-kos"},{"start":21,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":44,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":2,"end":11,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":2,"end":11,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-s"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":22,"cssClass":"pl-s"},{"start":24,"end":31,"cssClass":"pl-s"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":39,"cssClass":"pl-s"},{"start":41,"end":45,"cssClass":"pl-s"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":47,"end":54,"cssClass":"pl-s"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":61,"cssClass":"pl-s"},{"start":63,"end":69,"cssClass":"pl-s"},{"start":69,"end":70,"cssClass":"pl-kos"},{"start":71,"end":74,"cssClass":"pl-s"},{"start":76,"end":90,"cssClass":"pl-s"},{"start":90,"end":91,"cssClass":"pl-kos"},{"start":91,"end":92,"cssClass":"pl-kos"},{"start":93,"end":94,"cssClass":"pl-kos"},{"start":94,"end":97,"cssClass":"pl-s"},{"start":99,"end":105,"cssClass":"pl-s"},{"start":105,"end":106,"cssClass":"pl-kos"},{"start":107,"end":110,"cssClass":"pl-s"},{"start":112,"end":127,"cssClass":"pl-s"},{"start":127,"end":128,"cssClass":"pl-kos"},{"start":128,"end":129,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":7,"cssClass":"pl-s"},{"start":9,"end":15,"cssClass":"pl-s"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":20,"cssClass":"pl-s"},{"start":22,"end":34,"cssClass":"pl-s"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":41,"cssClass":"pl-s"},{"start":43,"end":49,"cssClass":"pl-s"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":51,"end":54,"cssClass":"pl-s"},{"start":56,"end":69,"cssClass":"pl-s"},{"start":69,"end":70,"cssClass":"pl-kos"},{"start":70,"end":71,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":7,"cssClass":"pl-s"},{"start":9,"end":15,"cssClass":"pl-s"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":20,"cssClass":"pl-s"},{"start":22,"end":36,"cssClass":"pl-s"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":43,"cssClass":"pl-s"},{"start":45,"end":51,"cssClass":"pl-s"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":53,"end":56,"cssClass":"pl-s"},{"start":58,"end":73,"cssClass":"pl-s"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":74,"end":75,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":7,"cssClass":"pl-s"},{"start":9,"end":15,"cssClass":"pl-s"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":20,"cssClass":"pl-s"},{"start":22,"end":36,"cssClass":"pl-s"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":43,"cssClass":"pl-s"},{"start":45,"end":51,"cssClass":"pl-s"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":53,"end":56,"cssClass":"pl-s"},{"start":58,"end":73,"cssClass":"pl-s"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":74,"end":75,"cssClass":"pl-kos"},{"start":75,"end":76,"cssClass":"pl-kos"},{"start":76,"end":79,"cssClass":"pl-s"},{"start":81,"end":84,"cssClass":"pl-s"},{"start":84,"end":85,"cssClass":"pl-kos"},{"start":86,"end":89,"cssClass":"pl-s"},{"start":91,"end":97,"cssClass":"pl-s"},{"start":97,"end":98,"cssClass":"pl-kos"},{"start":98,"end":99,"cssClass":"pl-kos"},{"start":99,"end":100,"cssClass":"pl-kos"},{"start":100,"end":101,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":9,"cssClass":"pl-s"},{"start":11,"end":17,"cssClass":"pl-s"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":25,"cssClass":"pl-s"},{"start":27,"end":33,"cssClass":"pl-s"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":42,"cssClass":"pl-s"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":49,"cssClass":"pl-s"},{"start":51,"end":55,"cssClass":"pl-s"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":57,"end":60,"cssClass":"pl-s"},{"start":62,"end":70,"cssClass":"pl-s"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":76,"cssClass":"pl-s"},{"start":78,"end":82,"cssClass":"pl-s"},{"start":82,"end":83,"cssClass":"pl-kos"},{"start":84,"end":87,"cssClass":"pl-s"},{"start":89,"end":94,"cssClass":"pl-s"},{"start":94,"end":95,"cssClass":"pl-kos"},{"start":95,"end":96,"cssClass":"pl-kos"},{"start":96,"end":97,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":1,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":2,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":21,"cssClass":"pl-s"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":32,"cssClass":"pl-s"},{"start":34,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":51,"cssClass":"pl-s"},{"start":53,"end":64,"cssClass":"pl-s1"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":65,"end":66,"cssClass":"pl-kos"},{"start":66,"end":67,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":28,"cssClass":"pl-s"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":41,"cssClass":"pl-s"},{"start":42,"end":45,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":105,"cssClass":"pl-s"},{"start":105,"end":106,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":38,"cssClass":"pl-c1"},{"start":40,"end":50,"cssClass":"pl-s1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":58,"cssClass":"pl-en"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":61,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":20,"cssClass":"pl-s"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":35,"cssClass":"pl-s"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":55,"cssClass":"pl-s"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":71,"cssClass":"pl-s"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-kos"}],[{"start":2,"end":17,"cssClass":"pl-c"}],[{"start":2,"end":6,"cssClass":"pl-s1"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-en"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":17,"cssClass":"pl-s1"},{"start":17,"end":19,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":13,"cssClass":"pl-en"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-c1"},{"start":13,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-c1"},{"start":11,"end":21,"cssClass":"pl-s"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":22,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-c1"},{"start":12,"end":72,"cssClass":"pl-s"},{"start":72,"end":73,"cssClass":"pl-kos"}],[{"start":4,"end":15,"cssClass":"pl-c1"},{"start":16,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":26,"cssClass":"pl-s"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":31,"cssClass":"pl-s"},{"start":33,"end":38,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":41,"cssClass":"pl-pds"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":44,"cssClass":"pl-s"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":39,"cssClass":"pl-en"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":44,"cssClass":"pl-s1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":25,"cssClass":"pl-en"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":29,"cssClass":"pl-s"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":33,"end":37,"cssClass":"pl-s1"},{"start":40,"end":44,"cssClass":"pl-s1"},{"start":45,"end":46,"cssClass":"pl-c1"},{"start":47,"end":50,"cssClass":"pl-s"},{"start":50,"end":51,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":7,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":16,"cssClass":"pl-s1"},{"start":17,"end":23,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":6,"cssClass":"pl-s1"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":11,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":2,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":5,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":13,"cssClass":"pl-en"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":18,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-c1"},{"start":14,"end":17,"cssClass":"pl-c1"},{"start":17,"end":24,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":26,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":8,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":22,"cssClass":"pl-c1"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":27,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":42,"cssClass":"pl-en"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":47,"cssClass":"pl-s1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":49,"end":51,"cssClass":"pl-c1"},{"start":52,"end":53,"cssClass":"pl-c1"},{"start":53,"end":59,"cssClass":"pl-s1"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":67,"cssClass":"pl-en"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":68,"end":72,"cssClass":"pl-s1"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":76,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":24,"cssClass":"pl-c"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":32,"cssClass":"pl-en"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":30,"cssClass":"pl-en"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":34,"cssClass":"pl-s"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":45,"cssClass":"pl-en"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-c1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-c1"},{"start":51,"end":55,"cssClass":"pl-s"},{"start":56,"end":57,"cssClass":"pl-c1"},{"start":58,"end":66,"cssClass":"pl-s1"},{"start":66,"end":67,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":18,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":40,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":49,"cssClass":"pl-en"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":54,"cssClass":"pl-s1"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":58,"end":61,"cssClass":"pl-s"},{"start":64,"end":66,"cssClass":"pl-s"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":67,"end":68,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":15,"cssClass":"pl-s1"},{"start":16,"end":19,"cssClass":"pl-c1"},{"start":20,"end":25,"cssClass":"pl-s"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-s1"},{"start":11,"end":13,"cssClass":"pl-c1"},{"start":14,"end":21,"cssClass":"pl-s"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-en"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-k"},{"start":9,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-s"},{"start":14,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":4,"end":14,"cssClass":"pl-s"},{"start":16,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":40,"cssClass":"pl-s"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":42,"end":44,"cssClass":"pl-s"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":56,"cssClass":"pl-en"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":60,"cssClass":"pl-s"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":62,"end":64,"cssClass":"pl-s"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":65,"end":66,"cssClass":"pl-kos"}],[{"start":4,"end":13,"cssClass":"pl-s"},{"start":15,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":4,"end":14,"cssClass":"pl-s"},{"start":16,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":4,"end":14,"cssClass":"pl-s"},{"start":16,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":4,"end":13,"cssClass":"pl-s"},{"start":15,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":30,"cssClass":"pl-en"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":39,"end":47,"cssClass":"pl-s"},{"start":50,"end":56,"cssClass":"pl-s"},{"start":56,"end":57,"cssClass":"pl-kos"}],[{"start":4,"end":17,"cssClass":"pl-s"},{"start":19,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":34,"cssClass":"pl-en"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":43,"end":49,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-c1"},{"start":52,"end":58,"cssClass":"pl-s"},{"start":61,"end":67,"cssClass":"pl-s1"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-smi"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":14,"cssClass":"pl-en"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-k"},{"start":9,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-c1"},{"start":14,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-c1"},{"start":12,"end":21,"cssClass":"pl-s"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":4,"end":15,"cssClass":"pl-c1"},{"start":17,"end":26,"cssClass":"pl-s"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-c1"},{"start":13,"end":94,"cssClass":"pl-s"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"}],[],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":20,"cssClass":"pl-c1"},{"start":21,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":30,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":44,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-c1"},{"start":47,"end":48,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":52,"end":77,"cssClass":"pl-c"}],[{"start":2,"end":173,"cssClass":"pl-c"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":11,"end":20,"cssClass":"pl-c"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":19,"cssClass":"pl-c1"},{"start":20,"end":23,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":39,"cssClass":"pl-en"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":47,"cssClass":"pl-s1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":3,"end":7,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":4,"end":17,"cssClass":"pl-c"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":37,"cssClass":"pl-s"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":41,"end":44,"cssClass":"pl-c1"},{"start":47,"end":48,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-c1"},{"start":52,"end":71,"cssClass":"pl-en"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":83,"cssClass":"pl-s1"},{"start":83,"end":84,"cssClass":"pl-kos"},{"start":84,"end":85,"cssClass":"pl-c1"},{"start":85,"end":86,"cssClass":"pl-kos"},{"start":86,"end":87,"cssClass":"pl-kos"},{"start":87,"end":95,"cssClass":"pl-c1"},{"start":95,"end":96,"cssClass":"pl-kos"},{"start":96,"end":97,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":37,"cssClass":"pl-s"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":41,"end":44,"cssClass":"pl-c1"},{"start":47,"end":48,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-c1"},{"start":52,"end":71,"cssClass":"pl-en"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":83,"cssClass":"pl-s1"},{"start":83,"end":84,"cssClass":"pl-kos"},{"start":84,"end":85,"cssClass":"pl-c1"},{"start":85,"end":86,"cssClass":"pl-kos"},{"start":86,"end":87,"cssClass":"pl-kos"},{"start":87,"end":95,"cssClass":"pl-c1"},{"start":95,"end":96,"cssClass":"pl-kos"},{"start":96,"end":97,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":17,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":41,"cssClass":"pl-c"}],[{"start":5,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":9,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":11,"end":20,"cssClass":"pl-c"}],[{"start":5,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":2,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":20,"cssClass":"pl-c1"},{"start":21,"end":23,"cssClass":"pl-c1"},{"start":24,"end":29,"cssClass":"pl-s"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":32,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":2,"end":39,"cssClass":"pl-c"}],[{"start":2,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":25,"cssClass":"pl-c1"},{"start":26,"end":28,"cssClass":"pl-c1"},{"start":29,"end":34,"cssClass":"pl-s"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":2,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":18,"cssClass":"pl-en"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":23,"cssClass":"pl-s1"},{"start":24,"end":26,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-k"},{"start":9,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":18,"cssClass":"pl-en"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-s1"},{"start":21,"end":23,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":4,"end":13,"cssClass":"pl-c"}],[{"start":4,"end":9,"cssClass":"pl-k"},{"start":10,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":33,"cssClass":"pl-en"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":50,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":52,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":14,"cssClass":"pl-c1"},{"start":15,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":5,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":4,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":15,"cssClass":"pl-c1"},{"start":16,"end":18,"cssClass":"pl-c1"},{"start":19,"end":24,"cssClass":"pl-s"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":4,"end":34,"cssClass":"pl-c"}],[{"start":4,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":20,"cssClass":"pl-c1"},{"start":21,"end":23,"cssClass":"pl-c1"},{"start":24,"end":29,"cssClass":"pl-s"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":6,"cssClass":"pl-s1"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":2,"end":21,"cssClass":"pl-c"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":30,"cssClass":"pl-s"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":37,"cssClass":"pl-en"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":48,"cssClass":"pl-en"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":52,"cssClass":"pl-s"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":32,"cssClass":"pl-s"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":39,"cssClass":"pl-en"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":39,"cssClass":"pl-s"},{"start":15,"end":21,"cssClass":"pl-s1"},{"start":15,"end":17,"cssClass":"pl-kos"},{"start":17,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":30,"end":38,"cssClass":"pl-s1"},{"start":30,"end":32,"cssClass":"pl-kos"},{"start":32,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":24,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":3,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":24,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":45,"cssClass":"pl-s1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-k"},{"start":8,"end":10,"cssClass":"pl-k"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":28,"cssClass":"pl-s"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":3,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":22,"cssClass":"pl-s"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":25,"cssClass":"pl-en"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":44,"cssClass":"pl-s"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":50,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":52,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-k"},{"start":8,"end":10,"cssClass":"pl-k"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":30,"cssClass":"pl-s"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":3,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":24,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":45,"cssClass":"pl-s1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-k"},{"start":8,"end":10,"cssClass":"pl-k"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":30,"cssClass":"pl-s"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":3,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":24,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":45,"cssClass":"pl-s1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-k"},{"start":8,"end":10,"cssClass":"pl-k"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":19,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":35,"cssClass":"pl-s"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":3,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":24,"cssClass":"pl-s"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-en"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":14,"cssClass":"pl-s"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":6,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":2,"end":65,"cssClass":"pl-c"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":17,"cssClass":"pl-s1"},{"start":17,"end":20,"cssClass":"pl-c1"},{"start":20,"end":26,"cssClass":"pl-s"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":46,"cssClass":"pl-s"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":52,"cssClass":"pl-s"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":25,"cssClass":"pl-s"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":26,"end":88,"cssClass":"pl-s"},{"start":31,"end":37,"cssClass":"pl-s1"},{"start":31,"end":33,"cssClass":"pl-kos"},{"start":33,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":51,"end":66,"cssClass":"pl-s1"},{"start":51,"end":53,"cssClass":"pl-kos"},{"start":53,"end":65,"cssClass":"pl-s1"},{"start":65,"end":66,"cssClass":"pl-kos"},{"start":76,"end":87,"cssClass":"pl-s1"},{"start":76,"end":78,"cssClass":"pl-kos"},{"start":78,"end":86,"cssClass":"pl-s1"},{"start":86,"end":87,"cssClass":"pl-kos"},{"start":88,"end":89,"cssClass":"pl-kos"},{"start":89,"end":90,"cssClass":"pl-kos"}],[{"start":1,"end":19,"cssClass":"pl-c"}],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-s"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":2,"end":13,"cssClass":"pl-s"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":2,"end":9,"cssClass":"pl-s"},{"start":11,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":2,"end":9,"cssClass":"pl-s"},{"start":11,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-s"},{"start":10,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":38,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":45,"end":49,"cssClass":"pl-c1"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":37,"cssClass":"pl-en"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":55,"cssClass":"pl-pds"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":53,"end":54,"cssClass":"pl-c1"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":58,"cssClass":"pl-s"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":65,"cssClass":"pl-en"},{"start":65,"end":66,"cssClass":"pl-kos"},{"start":66,"end":71,"cssClass":"pl-s"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":74,"cssClass":"pl-c1"},{"start":74,"end":75,"cssClass":"pl-kos"},{"start":75,"end":76,"cssClass":"pl-kos"},{"start":76,"end":77,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":23,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":18,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":2,"end":6,"cssClass":"pl-s1"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":14,"cssClass":"pl-en"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-s1"},{"start":17,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":16,"cssClass":"pl-c1"},{"start":17,"end":20,"cssClass":"pl-c1"},{"start":21,"end":27,"cssClass":"pl-s"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":30,"cssClass":"pl-en"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":48,"cssClass":"pl-pds"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":51,"cssClass":"pl-s"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":4,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":76,"cssClass":"pl-s"},{"start":23,"end":36,"cssClass":"pl-s1"},{"start":23,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":35,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":75,"cssClass":"pl-s1"},{"start":37,"end":39,"cssClass":"pl-kos"},{"start":39,"end":42,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":52,"cssClass":"pl-en"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":56,"cssClass":"pl-s1"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":64,"cssClass":"pl-en"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":65,"end":68,"cssClass":"pl-s"},{"start":68,"end":69,"cssClass":"pl-kos"},{"start":70,"end":71,"cssClass":"pl-c1"},{"start":72,"end":73,"cssClass":"pl-c1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":74,"end":75,"cssClass":"pl-kos"},{"start":76,"end":77,"cssClass":"pl-kos"},{"start":77,"end":78,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":27,"cssClass":"pl-s"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":35,"cssClass":"pl-en"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":38,"cssClass":"pl-s1"},{"start":38,"end":40,"cssClass":"pl-c1"},{"start":40,"end":42,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":37,"cssClass":"pl-c1"},{"start":38,"end":44,"cssClass":"pl-s1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":49,"cssClass":"pl-c1"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":13,"cssClass":"pl-s1"},{"start":14,"end":17,"cssClass":"pl-c1"},{"start":18,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-en"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":18,"cssClass":"pl-en"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":29,"cssClass":"pl-s"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":3,"end":11,"cssClass":"pl-s1"},{"start":11,"end":13,"cssClass":"pl-c1"},{"start":13,"end":18,"cssClass":"pl-s"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":3,"end":18,"cssClass":"pl-c"}],[{"start":3,"end":9,"cssClass":"pl-c1"},{"start":11,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":3,"end":11,"cssClass":"pl-c1"},{"start":13,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":3,"end":12,"cssClass":"pl-c1"},{"start":14,"end":19,"cssClass":"pl-s"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-c1"},{"start":12,"end":72,"cssClass":"pl-s"},{"start":72,"end":73,"cssClass":"pl-kos"}],[{"start":3,"end":14,"cssClass":"pl-c1"},{"start":16,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":3,"end":10,"cssClass":"pl-c1"},{"start":12,"end":20,"cssClass":"pl-s"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":3,"end":16,"cssClass":"pl-c1"},{"start":18,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":3,"end":15,"cssClass":"pl-c1"},{"start":17,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":34,"cssClass":"pl-en"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":38,"cssClass":"pl-s"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":3,"end":14,"cssClass":"pl-c1"},{"start":16,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":31,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":37,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":25,"cssClass":"pl-s"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":32,"cssClass":"pl-s"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":38,"cssClass":"pl-s1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":23,"cssClass":"pl-c1"},{"start":24,"end":35,"cssClass":"pl-s"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":45,"cssClass":"pl-c1"},{"start":47,"end":52,"cssClass":"pl-s"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":59,"cssClass":"pl-c1"},{"start":60,"end":69,"cssClass":"pl-s"},{"start":69,"end":70,"cssClass":"pl-kos"},{"start":70,"end":81,"cssClass":"pl-c1"},{"start":82,"end":91,"cssClass":"pl-s"},{"start":91,"end":92,"cssClass":"pl-kos"},{"start":92,"end":99,"cssClass":"pl-c1"},{"start":100,"end":192,"cssClass":"pl-s"},{"start":192,"end":193,"cssClass":"pl-kos"},{"start":193,"end":202,"cssClass":"pl-c1"},{"start":203,"end":204,"cssClass":"pl-s1"},{"start":204,"end":205,"cssClass":"pl-kos"},{"start":205,"end":212,"cssClass":"pl-c1"},{"start":212,"end":213,"cssClass":"pl-kos"},{"start":213,"end":225,"cssClass":"pl-c1"},{"start":227,"end":230,"cssClass":"pl-s1"},{"start":230,"end":231,"cssClass":"pl-kos"},{"start":231,"end":242,"cssClass":"pl-c1"},{"start":244,"end":248,"cssClass":"pl-s1"},{"start":248,"end":249,"cssClass":"pl-kos"},{"start":249,"end":250,"cssClass":"pl-kos"},{"start":250,"end":251,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":32,"cssClass":"pl-s"},{"start":34,"end":38,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":39,"cssClass":"pl-s"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":25,"cssClass":"pl-en"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":33,"cssClass":"pl-s"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-c1"},{"start":7,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":18,"cssClass":"pl-en"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":36,"cssClass":"pl-pds"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":39,"cssClass":"pl-s"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":37,"cssClass":"pl-s"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":32,"cssClass":"pl-s"},{"start":15,"end":21,"cssClass":"pl-s1"},{"start":15,"end":17,"cssClass":"pl-kos"},{"start":17,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":31,"cssClass":"pl-s1"},{"start":22,"end":24,"cssClass":"pl-kos"},{"start":24,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":39,"cssClass":"pl-en"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":39,"cssClass":"pl-s"},{"start":15,"end":24,"cssClass":"pl-s1"},{"start":15,"end":17,"cssClass":"pl-kos"},{"start":17,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":30,"end":37,"cssClass":"pl-s1"},{"start":30,"end":32,"cssClass":"pl-kos"},{"start":32,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":18,"cssClass":"pl-en"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":22,"cssClass":"pl-s"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":48,"cssClass":"pl-c"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":13,"cssClass":"pl-s1"},{"start":13,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":16,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":43,"cssClass":"pl-c"}],[{"start":3,"end":9,"cssClass":"pl-k"},{"start":10,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-k"},{"start":8,"end":10,"cssClass":"pl-k"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":78,"cssClass":"pl-c"}],[{"start":3,"end":15,"cssClass":"pl-c"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":27,"cssClass":"pl-s"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":34,"cssClass":"pl-en"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":45,"cssClass":"pl-en"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":49,"cssClass":"pl-s"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-c1"},{"start":51,"end":54,"cssClass":"pl-s"},{"start":54,"end":55,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":8,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-en"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":42,"cssClass":"pl-s"},{"start":19,"end":25,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-kos"},{"start":21,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":31,"end":41,"cssClass":"pl-s1"},{"start":31,"end":33,"cssClass":"pl-kos"},{"start":33,"end":40,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":41,"cssClass":"pl-en"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":49,"cssClass":"pl-s1"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-kos"}],[{"start":3,"end":9,"cssClass":"pl-k"},{"start":10,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":4,"end":8,"cssClass":"pl-k"},{"start":9,"end":11,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":29,"cssClass":"pl-c"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":25,"cssClass":"pl-en"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":31,"cssClass":"pl-s"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":42,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":57,"cssClass":"pl-en"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":61,"cssClass":"pl-s"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":63,"end":64,"cssClass":"pl-c1"},{"start":65,"end":66,"cssClass":"pl-c1"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":67,"end":68,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":30,"cssClass":"pl-s"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":4,"end":13,"cssClass":"pl-s1"},{"start":13,"end":15,"cssClass":"pl-c1"},{"start":15,"end":20,"cssClass":"pl-s"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-c1"},{"start":12,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-c1"},{"start":14,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":4,"end":13,"cssClass":"pl-c1"},{"start":15,"end":19,"cssClass":"pl-s"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-c1"},{"start":13,"end":73,"cssClass":"pl-s"},{"start":73,"end":74,"cssClass":"pl-kos"}],[{"start":4,"end":15,"cssClass":"pl-c1"},{"start":17,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":4,"end":17,"cssClass":"pl-c1"},{"start":19,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":4,"end":16,"cssClass":"pl-c1"},{"start":18,"end":26,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":32,"cssClass":"pl-s"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":35,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":4,"end":15,"cssClass":"pl-c1"},{"start":17,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":38,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-en"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":26,"cssClass":"pl-s"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-en"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":3,"end":9,"cssClass":"pl-k"},{"start":10,"end":14,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"}],[{"start":3,"end":9,"cssClass":"pl-k"},{"start":10,"end":14,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-en"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-k"},{"start":7,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":28,"cssClass":"pl-s"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":60,"cssClass":"pl-c"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":2,"end":9,"cssClass":"pl-s"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":2,"end":11,"cssClass":"pl-s"},{"start":13,"end":15,"cssClass":"pl-s"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":2,"end":64,"cssClass":"pl-c"}],[{"start":2,"end":7,"cssClass":"pl-s"},{"start":9,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":28,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":40,"cssClass":"pl-c1"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":16,"cssClass":"pl-c1"},{"start":17,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-k"},{"start":8,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":32,"cssClass":"pl-en"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":40,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":55,"cssClass":"pl-en"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":59,"cssClass":"pl-s"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":61,"end":62,"cssClass":"pl-c1"},{"start":63,"end":64,"cssClass":"pl-c1"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":65,"end":66,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":32,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":35,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":52,"cssClass":"pl-c1"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":21,"cssClass":"pl-s"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":10,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":21,"cssClass":"pl-s"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":22,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-c1"},{"start":5,"end":17,"cssClass":"pl-s1"},{"start":17,"end":19,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":20,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":3,"end":9,"cssClass":"pl-s"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":6,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-c1"},{"start":7,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":19,"cssClass":"pl-s"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":30,"cssClass":"pl-s1"},{"start":30,"end":32,"cssClass":"pl-c1"},{"start":32,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":39,"cssClass":"pl-en"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":47,"cssClass":"pl-en"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":51,"cssClass":"pl-s"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":26,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":43,"cssClass":"pl-s"},{"start":43,"end":44,"cssClass":"pl-c1"},{"start":44,"end":46,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-c1"},{"start":47,"end":54,"cssClass":"pl-s"},{"start":54,"end":55,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":3,"end":7,"cssClass":"pl-s1"},{"start":7,"end":9,"cssClass":"pl-c1"},{"start":9,"end":17,"cssClass":"pl-s"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":18,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":15,"cssClass":"pl-s"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":16,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":32,"cssClass":"pl-en"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":3,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":33,"cssClass":"pl-s"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":63,"cssClass":"pl-s"},{"start":15,"end":30,"cssClass":"pl-s1"},{"start":15,"end":17,"cssClass":"pl-kos"},{"start":17,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":42,"end":62,"cssClass":"pl-s1"},{"start":42,"end":44,"cssClass":"pl-kos"},{"start":44,"end":61,"cssClass":"pl-s1"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":64,"end":65,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":51,"cssClass":"pl-pds"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":20,"end":22,"cssClass":"pl-cce"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-cce"},{"start":50,"end":51,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":53,"end":62,"cssClass":"pl-c"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":18,"cssClass":"pl-s1"},{"start":18,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":32,"cssClass":"pl-s"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":4,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":12,"end":20,"cssClass":"pl-c"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":4,"end":9,"cssClass":"pl-en"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-s1"},{"start":7,"end":9,"cssClass":"pl-c1"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":26,"end":29,"cssClass":"pl-s"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":30,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":36,"end":46,"cssClass":"pl-s"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":14,"cssClass":"pl-s1"},{"start":14,"end":17,"cssClass":"pl-c1"},{"start":17,"end":22,"cssClass":"pl-s"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-s1"},{"start":7,"end":9,"cssClass":"pl-c1"},{"start":9,"end":16,"cssClass":"pl-s"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":3,"end":7,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-c1"},{"start":13,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":30,"cssClass":"pl-s"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-c1"},{"start":11,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-c1"},{"start":13,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":30,"end":36,"cssClass":"pl-s"},{"start":39,"end":47,"cssClass":"pl-s"},{"start":47,"end":48,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-c1"},{"start":12,"end":75,"cssClass":"pl-s"},{"start":75,"end":76,"cssClass":"pl-kos"}],[{"start":4,"end":15,"cssClass":"pl-c1"},{"start":16,"end":28,"cssClass":"pl-s1"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":2,"end":11,"cssClass":"pl-c"}],[{"start":2,"end":6,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":2,"end":7,"cssClass":"pl-en"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":3,"end":9,"cssClass":"pl-s"},{"start":11,"end":15,"cssClass":"pl-s1"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":7,"cssClass":"pl-s1"},{"start":8,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":11,"cssClass":"pl-s"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":18,"cssClass":"pl-s"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":7,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":37,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-s1"},{"start":5,"end":7,"cssClass":"pl-c1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":30,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":2,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":17,"cssClass":"pl-s"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-k"},{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":37,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-s1"},{"start":5,"end":7,"cssClass":"pl-c1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":2,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":17,"cssClass":"pl-s"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-k"},{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-s1"},{"start":5,"end":7,"cssClass":"pl-c1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":2,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":17,"cssClass":"pl-s"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-k"},{"start":8,"end":10,"cssClass":"pl-k"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":12,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":23,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-s1"},{"start":5,"end":7,"cssClass":"pl-c1"},{"start":8,"end":14,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":2,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":17,"cssClass":"pl-s"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":6,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":2,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-s"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":9,"cssClass":"pl-c"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":25,"cssClass":"pl-en"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":1,"end":13,"cssClass":"pl-c"}],[{"start":1,"end":6,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":28,"cssClass":"pl-s"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":1,"end":14,"cssClass":"pl-c"}],[{"start":1,"end":4,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-c1"},{"start":7,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":27,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":8,"cssClass":"pl-s1"},{"start":9,"end":12,"cssClass":"pl-c1"},{"start":13,"end":17,"cssClass":"pl-s"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":39,"end":46,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":53,"cssClass":"pl-en"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":59,"cssClass":"pl-s1"},{"start":60,"end":61,"cssClass":"pl-c1"},{"start":62,"end":63,"cssClass":"pl-c1"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":65,"end":66,"cssClass":"pl-c1"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":67,"end":68,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":6,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":38,"end":42,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":46,"end":50,"cssClass":"pl-v"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":54,"cssClass":"pl-en"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":55,"end":59,"cssClass":"pl-s1"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":66,"cssClass":"pl-c1"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":68,"end":72,"cssClass":"pl-s1"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":79,"cssClass":"pl-c1"},{"start":79,"end":80,"cssClass":"pl-kos"},{"start":80,"end":81,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":7,"cssClass":"pl-c"}],[{"start":0,"end":83,"cssClass":"pl-c"}],[{"start":0,"end":54,"cssClass":"pl-c"},{"start":3,"end":9,"cssClass":"pl-k"},{"start":19,"end":52,"cssClass":"pl-smi"}],[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":28,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-c1"},{"start":6,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":2,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":16,"cssClass":"pl-k"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":16,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-c1"},{"start":7,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-s1"},{"start":5,"end":6,"cssClass":"pl-c1"},{"start":7,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":30,"cssClass":"pl-c1"},{"start":31,"end":34,"cssClass":"pl-c1"},{"start":35,"end":41,"cssClass":"pl-s"}],[{"start":4,"end":5,"cssClass":"pl-c1"},{"start":5,"end":6,"cssClass":"pl-c1"}],[{"start":4,"end":5,"cssClass":"pl-c1"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":17,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"}],[],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":72,"cssClass":"pl-pds"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-cce"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-cce"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-cce"},{"start":47,"end":48,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-cce"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-c1"},{"start":60,"end":61,"cssClass":"pl-cce"},{"start":61,"end":62,"cssClass":"pl-c1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":67,"end":68,"cssClass":"pl-c1"},{"start":68,"end":69,"cssClass":"pl-kos"},{"start":69,"end":70,"cssClass":"pl-c1"},{"start":72,"end":73,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":28,"cssClass":"pl-pds"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-cce"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-cce"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":124,"cssClass":"pl-pds"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-cce"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":19,"cssClass":"pl-cce"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":27,"cssClass":"pl-cce"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":35,"cssClass":"pl-cce"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":43,"cssClass":"pl-cce"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-c1"},{"start":46,"end":48,"cssClass":"pl-cce"},{"start":48,"end":49,"cssClass":"pl-c1"},{"start":50,"end":52,"cssClass":"pl-cce"},{"start":52,"end":53,"cssClass":"pl-c1"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":55,"end":57,"cssClass":"pl-cce"},{"start":57,"end":58,"cssClass":"pl-c1"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":61,"end":63,"cssClass":"pl-cce"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":66,"end":67,"cssClass":"pl-c1"},{"start":67,"end":68,"cssClass":"pl-cce"},{"start":68,"end":70,"cssClass":"pl-cce"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":74,"end":75,"cssClass":"pl-kos"},{"start":75,"end":76,"cssClass":"pl-kos"},{"start":76,"end":78,"cssClass":"pl-cce"},{"start":78,"end":80,"cssClass":"pl-cce"},{"start":80,"end":81,"cssClass":"pl-kos"},{"start":81,"end":83,"cssClass":"pl-cce"},{"start":83,"end":84,"cssClass":"pl-kos"},{"start":87,"end":88,"cssClass":"pl-kos"},{"start":88,"end":89,"cssClass":"pl-kos"},{"start":89,"end":91,"cssClass":"pl-cce"},{"start":91,"end":93,"cssClass":"pl-cce"},{"start":93,"end":94,"cssClass":"pl-kos"},{"start":94,"end":96,"cssClass":"pl-cce"},{"start":96,"end":97,"cssClass":"pl-kos"},{"start":100,"end":101,"cssClass":"pl-kos"},{"start":101,"end":102,"cssClass":"pl-c1"},{"start":102,"end":103,"cssClass":"pl-cce"},{"start":103,"end":105,"cssClass":"pl-cce"},{"start":105,"end":106,"cssClass":"pl-c1"},{"start":108,"end":110,"cssClass":"pl-cce"},{"start":110,"end":111,"cssClass":"pl-c1"},{"start":112,"end":114,"cssClass":"pl-cce"},{"start":114,"end":115,"cssClass":"pl-c1"},{"start":117,"end":119,"cssClass":"pl-cce"},{"start":119,"end":120,"cssClass":"pl-kos"},{"start":121,"end":122,"cssClass":"pl-kos"},{"start":122,"end":123,"cssClass":"pl-kos"},{"start":123,"end":124,"cssClass":"pl-c1"},{"start":124,"end":125,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":28,"cssClass":"pl-pds"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-cce"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-cce"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":16,"cssClass":"pl-pds"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-cce"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"}],[],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":15,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":26,"cssClass":"pl-k"},{"start":27,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":42,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"}],[{"start":3,"end":6,"cssClass":"pl-k"},{"start":7,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":18,"cssClass":"pl-s"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":3,"end":9,"cssClass":"pl-k"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":32,"cssClass":"pl-c1"}],[{"start":5,"end":11,"cssClass":"pl-s1"}],[{"start":5,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"}],[],[{"start":2,"end":32,"cssClass":"pl-c"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":30,"cssClass":"pl-en"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":38,"cssClass":"pl-s"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":42,"cssClass":"pl-c1"},{"start":43,"end":45,"cssClass":"pl-s"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":30,"cssClass":"pl-en"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":38,"cssClass":"pl-s"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":42,"cssClass":"pl-c1"},{"start":43,"end":45,"cssClass":"pl-s"},{"start":45,"end":46,"cssClass":"pl-kos"}],[],[{"start":2,"end":19,"cssClass":"pl-c"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":33,"cssClass":"pl-s"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":42,"cssClass":"pl-en"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":48,"cssClass":"pl-pds"},{"start":43,"end":44,"cssClass":"pl-c1"},{"start":44,"end":46,"cssClass":"pl-cce"},{"start":46,"end":47,"cssClass":"pl-cce"},{"start":47,"end":48,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":52,"cssClass":"pl-s"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":61,"cssClass":"pl-en"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":67,"cssClass":"pl-pds"},{"start":62,"end":63,"cssClass":"pl-c1"},{"start":63,"end":64,"cssClass":"pl-cce"},{"start":64,"end":66,"cssClass":"pl-cce"},{"start":66,"end":67,"cssClass":"pl-c1"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":69,"end":71,"cssClass":"pl-s"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":78,"cssClass":"pl-en"},{"start":78,"end":79,"cssClass":"pl-kos"},{"start":79,"end":83,"cssClass":"pl-s"},{"start":83,"end":84,"cssClass":"pl-kos"},{"start":84,"end":85,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":23,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":33,"cssClass":"pl-s"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":42,"cssClass":"pl-en"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":48,"cssClass":"pl-pds"},{"start":43,"end":44,"cssClass":"pl-c1"},{"start":44,"end":46,"cssClass":"pl-cce"},{"start":46,"end":47,"cssClass":"pl-cce"},{"start":47,"end":48,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":52,"cssClass":"pl-s"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":61,"cssClass":"pl-en"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":67,"cssClass":"pl-pds"},{"start":62,"end":63,"cssClass":"pl-c1"},{"start":63,"end":64,"cssClass":"pl-cce"},{"start":64,"end":66,"cssClass":"pl-cce"},{"start":66,"end":67,"cssClass":"pl-c1"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":69,"end":71,"cssClass":"pl-s"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":78,"cssClass":"pl-en"},{"start":78,"end":79,"cssClass":"pl-kos"},{"start":79,"end":83,"cssClass":"pl-s"},{"start":83,"end":84,"cssClass":"pl-kos"},{"start":84,"end":85,"cssClass":"pl-kos"}],[],[{"start":2,"end":63,"cssClass":"pl-c"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":7,"cssClass":"pl-c1"},{"start":7,"end":8,"cssClass":"pl-s1"},{"start":9,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":16,"end":22,"cssClass":"pl-k"},{"start":23,"end":28,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":7,"cssClass":"pl-c1"},{"start":7,"end":8,"cssClass":"pl-s1"},{"start":9,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":15,"end":21,"cssClass":"pl-k"},{"start":22,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":7,"cssClass":"pl-s1"},{"start":8,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":15,"end":21,"cssClass":"pl-k"},{"start":22,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"}],[],[{"start":2,"end":35,"cssClass":"pl-c"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":36,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":40,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":47,"cssClass":"pl-c1"},{"start":48,"end":50,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-c1"},{"start":53,"end":55,"cssClass":"pl-c1"},{"start":56,"end":57,"cssClass":"pl-s1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":63,"cssClass":"pl-en"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":64,"end":67,"cssClass":"pl-s1"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":69,"end":71,"cssClass":"pl-c1"},{"start":72,"end":76,"cssClass":"pl-v"},{"start":76,"end":77,"cssClass":"pl-kos"},{"start":77,"end":82,"cssClass":"pl-en"},{"start":82,"end":83,"cssClass":"pl-kos"},{"start":83,"end":84,"cssClass":"pl-s1"},{"start":84,"end":85,"cssClass":"pl-kos"},{"start":85,"end":86,"cssClass":"pl-kos"},{"start":86,"end":87,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":27,"cssClass":"pl-en"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":36,"cssClass":"pl-c1"},{"start":37,"end":39,"cssClass":"pl-s1"},{"start":40,"end":42,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-s1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":50,"cssClass":"pl-en"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":54,"cssClass":"pl-s1"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":56,"end":58,"cssClass":"pl-c1"},{"start":59,"end":63,"cssClass":"pl-v"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":64,"end":69,"cssClass":"pl-en"},{"start":69,"end":70,"cssClass":"pl-kos"},{"start":70,"end":71,"cssClass":"pl-s1"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":73,"end":75,"cssClass":"pl-c1"},{"start":76,"end":80,"cssClass":"pl-c1"},{"start":80,"end":81,"cssClass":"pl-kos"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[],[{"start":2,"end":42,"cssClass":"pl-c"}],[{"start":2,"end":4,"cssClass":"pl-k"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":16,"end":22,"cssClass":"pl-k"},{"start":23,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":3,"end":7,"cssClass":"pl-k"},{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":27,"cssClass":"pl-k"},{"start":28,"end":35,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[],[{"start":2,"end":70,"cssClass":"pl-c"}],[{"start":2,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":10,"cssClass":"pl-k"},{"start":11,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":25,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":32,"cssClass":"pl-v"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":46,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":48,"end":50,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":57,"cssClass":"pl-c1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":60,"end":64,"cssClass":"pl-s1"},{"start":65,"end":66,"cssClass":"pl-c1"},{"start":67,"end":71,"cssClass":"pl-s1"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":73,"end":77,"cssClass":"pl-s1"},{"start":77,"end":79,"cssClass":"pl-c1"},{"start":79,"end":80,"cssClass":"pl-kos"},{"start":81,"end":82,"cssClass":"pl-kos"}],[],[{"start":3,"end":82,"cssClass":"pl-c"}],[{"start":3,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":26,"end":28,"cssClass":"pl-s"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":35,"cssClass":"pl-en"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":43,"cssClass":"pl-c1"},{"start":44,"end":54,"cssClass":"pl-en"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":55,"end":57,"cssClass":"pl-s1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":62,"cssClass":"pl-s1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":65,"end":67,"cssClass":"pl-c1"},{"start":68,"end":70,"cssClass":"pl-s1"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":71,"end":75,"cssClass":"pl-s1"},{"start":75,"end":76,"cssClass":"pl-kos"},{"start":77,"end":79,"cssClass":"pl-c1"},{"start":80,"end":81,"cssClass":"pl-c1"},{"start":81,"end":82,"cssClass":"pl-kos"}],[{"start":3,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":26,"end":28,"cssClass":"pl-s"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":35,"cssClass":"pl-en"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":43,"cssClass":"pl-c1"},{"start":44,"end":54,"cssClass":"pl-en"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":55,"end":57,"cssClass":"pl-s1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":62,"cssClass":"pl-s1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":65,"end":67,"cssClass":"pl-c1"},{"start":68,"end":70,"cssClass":"pl-s1"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":71,"end":75,"cssClass":"pl-s1"},{"start":75,"end":76,"cssClass":"pl-kos"},{"start":77,"end":79,"cssClass":"pl-c1"},{"start":80,"end":81,"cssClass":"pl-c1"},{"start":81,"end":82,"cssClass":"pl-kos"}],[],[{"start":3,"end":74,"cssClass":"pl-c"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":24,"cssClass":"pl-c1"},{"start":25,"end":30,"cssClass":"pl-en"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":46,"cssClass":"pl-k"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":53,"cssClass":"pl-en"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":60,"cssClass":"pl-s1"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":65,"end":72,"cssClass":"pl-c1"},{"start":75,"end":82,"cssClass":"pl-c1"},{"start":82,"end":83,"cssClass":"pl-kos"}],[],[{"start":3,"end":80,"cssClass":"pl-c"}],[{"start":3,"end":7,"cssClass":"pl-k"},{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":18,"cssClass":"pl-k"},{"start":19,"end":25,"cssClass":"pl-s1"},{"start":26,"end":29,"cssClass":"pl-c1"},{"start":30,"end":36,"cssClass":"pl-k"},{"start":37,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-s1"},{"start":11,"end":13,"cssClass":"pl-c1"},{"start":14,"end":16,"cssClass":"pl-s"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-s1"},{"start":11,"end":13,"cssClass":"pl-c1"},{"start":14,"end":16,"cssClass":"pl-s"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":30,"cssClass":"pl-k"},{"start":31,"end":38,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":3,"end":5,"cssClass":"pl-k"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":30,"cssClass":"pl-k"},{"start":31,"end":38,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":14,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":9,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":20,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":45,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-c1"},{"start":5,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":16,"cssClass":"pl-s1"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":6,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":14,"cssClass":"pl-s1"},{"start":14,"end":16,"cssClass":"pl-c1"},{"start":16,"end":21,"cssClass":"pl-s"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":30,"cssClass":"pl-c"}],[{"start":1,"end":16,"cssClass":"pl-c"}],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":32,"cssClass":"pl-en"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":37,"cssClass":"pl-c1"},{"start":39,"end":42,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":44,"end":49,"cssClass":"pl-c1"},{"start":51,"end":56,"cssClass":"pl-s1"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":70,"cssClass":"pl-c1"},{"start":71,"end":75,"cssClass":"pl-c1"},{"start":75,"end":76,"cssClass":"pl-kos"},{"start":76,"end":77,"cssClass":"pl-kos"},{"start":77,"end":78,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":16,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":31,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":12,"cssClass":"pl-k"},{"start":13,"end":17,"cssClass":"pl-v"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":35,"cssClass":"pl-en"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":20,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":45,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-c1"},{"start":6,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":16,"cssClass":"pl-s1"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":11,"cssClass":"pl-v"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":36,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-s1"},{"start":4,"end":5,"cssClass":"pl-c1"},{"start":6,"end":7,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-s1"},{"start":4,"end":5,"cssClass":"pl-c1"},{"start":6,"end":7,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":35,"cssClass":"pl-en"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":9,"cssClass":"pl-s1"},{"start":9,"end":12,"cssClass":"pl-c1"},{"start":12,"end":18,"cssClass":"pl-s"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-v"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":14,"cssClass":"pl-v"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":20,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":45,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-c1"},{"start":6,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":16,"cssClass":"pl-s1"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":4,"cssClass":"pl-k"},{"start":5,"end":11,"cssClass":"pl-v"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":36,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-s1"},{"start":4,"end":5,"cssClass":"pl-c1"},{"start":6,"end":7,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":2,"end":3,"cssClass":"pl-s1"},{"start":4,"end":5,"cssClass":"pl-c1"},{"start":6,"end":7,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":16,"cssClass":"pl-v"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":35,"cssClass":"pl-v"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":41,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":9,"cssClass":"pl-s1"},{"start":9,"end":12,"cssClass":"pl-c1"},{"start":12,"end":18,"cssClass":"pl-s"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-v"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":1,"end":2,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-k"},{"start":8,"end":14,"cssClass":"pl-v"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":0,"end":9,"cssClass":"pl-c"}],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":1,"end":5,"cssClass":"pl-c1"},{"start":7,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":1,"end":5,"cssClass":"pl-c1"},{"start":7,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":1,"end":8,"cssClass":"pl-c1"},{"start":10,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":1,"end":9,"cssClass":"pl-c1"},{"start":11,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-c1"},{"start":9,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":1,"end":5,"cssClass":"pl-c1"},{"start":7,"end":11,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":1,"end":7,"cssClass":"pl-c1"},{"start":9,"end":15,"cssClass":"pl-s1"}],[{"start":0,"end":1,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/hjdhnx/dr_py/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false,"repoAlertsPath":"/hjdhnx/dr_py/security/dependabot","repoSecurityAndAnalysisPath":"/hjdhnx/dr_py/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"alist.js","displayUrl":"https://github.com/hjdhnx/dr_py/blob/main/libs/alist.js?raw=true","headerInfo":{"blobSize":"24.3 KB","deleteInfo":{"deleteTooltip":"Fork this repository and delete the file"},"editInfo":{"editTooltip":"Fork this repository and edit the file"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"ae9bd44","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fhjdhnx%2Fdr_py%2Fblob%2Fmain%2Flibs%2Falist.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"819","truncatedSloc":"780"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","languageID":183,"large":false,"loggedIn":true,"newDiscussionPath":"/hjdhnx/dr_py/discussions/new","newIssuePath":"/hjdhnx/dr_py/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/hjdhnx/dr_py/blob/main/libs/alist.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/hjdhnx/dr_py/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"rawBlobUrl":"https://github.com/hjdhnx/dr_py/raw/main/libs/alist.js","renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"hjdhnx","repoName":"dr_py","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timedOut":false,"notAnalyzed":false,"symbols":[{"name":"rstrip","kind":"function","identStart":1101,"identEnd":1107,"extentStart":1084,"extentEnd":1201,"fullyQualifiedName":"rstrip","identUtf16":{"start":{"lineNumber":22,"utf16Col":17},"end":{"lineNumber":22,"utf16Col":23}},"extentUtf16":{"start":{"lineNumber":22,"utf16Col":0},"end":{"lineNumber":25,"utf16Col":1}}},{"name":"print","kind":"function","identStart":1619,"identEnd":1624,"extentStart":1610,"extentEnd":1986,"fullyQualifiedName":"print","identUtf16":{"start":{"lineNumber":39,"utf16Col":9},"end":{"lineNumber":39,"utf16Col":14}},"extentUtf16":{"start":{"lineNumber":39,"utf16Col":0},"end":{"lineNumber":54,"utf16Col":1}}},{"name":"getHome","kind":"function","identStart":2172,"identEnd":2179,"extentStart":2163,"extentEnd":2353,"fullyQualifiedName":"getHome","identUtf16":{"start":{"lineNumber":63,"utf16Col":9},"end":{"lineNumber":63,"utf16Col":16}},"extentUtf16":{"start":{"lineNumber":63,"utf16Col":0},"end":{"lineNumber":73,"utf16Col":1}}},{"name":"http","kind":"function","identStart":2361,"identEnd":2365,"extentStart":2361,"extentEnd":3296,"fullyQualifiedName":"http","identUtf16":{"start":{"lineNumber":75,"utf16Col":6},"end":{"lineNumber":75,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":75,"utf16Col":6},"end":{"lineNumber":109,"utf16Col":1}}},{"name":"json","kind":"function","identStart":3070,"identEnd":3074,"extentStart":3066,"extentEnd":3132,"fullyQualifiedName":"json","identUtf16":{"start":{"lineNumber":97,"utf16Col":6},"end":{"lineNumber":97,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":97,"utf16Col":2},"end":{"lineNumber":97,"utf16Col":68}}},{"name":"text","kind":"function","identStart":3140,"identEnd":3144,"extentStart":3136,"extentEnd":3186,"fullyQualifiedName":"text","identUtf16":{"start":{"lineNumber":98,"utf16Col":6},"end":{"lineNumber":98,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":98,"utf16Col":2},"end":{"lineNumber":98,"utf16Col":52}}},{"name":"json","kind":"method","identStart":3229,"identEnd":3233,"extentStart":3229,"extentEnd":3258,"fullyQualifiedName":"json","identUtf16":{"start":{"lineNumber":102,"utf16Col":3},"end":{"lineNumber":102,"utf16Col":7}},"extentUtf16":{"start":{"lineNumber":102,"utf16Col":3},"end":{"lineNumber":104,"utf16Col":4}}},{"name":"text","kind":"method","identStart":3260,"identEnd":3264,"extentStart":3260,"extentEnd":3287,"fullyQualifiedName":"text","identUtf16":{"start":{"lineNumber":104,"utf16Col":6},"end":{"lineNumber":104,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":104,"utf16Col":6},"end":{"lineNumber":106,"utf16Col":4}}},{"name":"isMedia","kind":"function","identStart":3508,"identEnd":3515,"extentStart":3499,"extentEnd":3726,"fullyQualifiedName":"isMedia","identUtf16":{"start":{"lineNumber":118,"utf16Col":9},"end":{"lineNumber":118,"utf16Col":16}},"extentUtf16":{"start":{"lineNumber":118,"utf16Col":0},"end":{"lineNumber":120,"utf16Col":1}}},{"name":"get_drives_path","kind":"function","identStart":3737,"identEnd":3752,"extentStart":3728,"extentEnd":3917,"fullyQualifiedName":"get_drives_path","identUtf16":{"start":{"lineNumber":122,"utf16Col":9},"end":{"lineNumber":122,"utf16Col":24}},"extentUtf16":{"start":{"lineNumber":122,"utf16Col":0},"end":{"lineNumber":127,"utf16Col":1}}},{"name":"get_drives","kind":"function","identStart":3928,"identEnd":3938,"extentStart":3919,"extentEnd":4862,"fullyQualifiedName":"get_drives","identUtf16":{"start":{"lineNumber":129,"utf16Col":9},"end":{"lineNumber":129,"utf16Col":19}},"extentUtf16":{"start":{"lineNumber":129,"utf16Col":0},"end":{"lineNumber":151,"utf16Col":1}}},{"name":"init","kind":"function","identStart":4873,"identEnd":4877,"extentStart":4864,"extentEnd":9480,"fullyQualifiedName":"init","identUtf16":{"start":{"lineNumber":153,"utf16Col":9},"end":{"lineNumber":153,"utf16Col":13}},"extentUtf16":{"start":{"lineNumber":153,"utf16Col":0},"end":{"lineNumber":293,"utf16Col":1}}},{"name":"getParams","kind":"method","identStart":7007,"identEnd":7016,"extentStart":7007,"extentEnd":7151,"fullyQualifiedName":"getParams","identUtf16":{"start":{"lineNumber":215,"utf16Col":3},"end":{"lineNumber":215,"utf16Col":12}},"extentUtf16":{"start":{"lineNumber":215,"utf16Col":3},"end":{"lineNumber":218,"utf16Col":4}}},{"name":"getPath","kind":"method","identStart":7156,"identEnd":7163,"extentStart":7156,"extentEnd":7563,"fullyQualifiedName":"getPath","identUtf16":{"start":{"lineNumber":219,"utf16Col":3},"end":{"lineNumber":219,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":219,"utf16Col":3},"end":{"lineNumber":229,"utf16Col":4}}},{"name":"getFile","kind":"method","identStart":7568,"identEnd":7575,"extentStart":7568,"extentEnd":8149,"fullyQualifiedName":"getFile","identUtf16":{"start":{"lineNumber":230,"utf16Col":3},"end":{"lineNumber":230,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":230,"utf16Col":3},"end":{"lineNumber":249,"utf16Col":4}}},{"name":"isFolder","kind":"method","identStart":8154,"identEnd":8162,"extentStart":8154,"extentEnd":8195,"fullyQualifiedName":"isFolder","identUtf16":{"start":{"lineNumber":250,"utf16Col":3},"end":{"lineNumber":250,"utf16Col":11}},"extentUtf16":{"start":{"lineNumber":250,"utf16Col":3},"end":{"lineNumber":250,"utf16Col":44}}},{"name":"isVideo","kind":"method","identStart":8200,"identEnd":8207,"extentStart":8200,"extentEnd":8495,"fullyQualifiedName":"isVideo","identUtf16":{"start":{"lineNumber":251,"utf16Col":3},"end":{"lineNumber":251,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":251,"utf16Col":3},"end":{"lineNumber":255,"utf16Col":4}}},{"name":"is_subt","kind":"method","identStart":8500,"identEnd":8507,"extentStart":8500,"extentEnd":8748,"fullyQualifiedName":"is_subt","identUtf16":{"start":{"lineNumber":256,"utf16Col":3},"end":{"lineNumber":256,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":256,"utf16Col":3},"end":{"lineNumber":263,"utf16Col":4}}},{"name":"getPic","kind":"method","identStart":8753,"identEnd":8759,"extentStart":8753,"extentEnd":8946,"fullyQualifiedName":"getPic","identUtf16":{"start":{"lineNumber":264,"utf16Col":3},"end":{"lineNumber":264,"utf16Col":9}},"extentUtf16":{"start":{"lineNumber":264,"utf16Col":3},"end":{"lineNumber":267,"utf16Col":4}}},{"name":"getTime","kind":"method","identStart":8951,"identEnd":8958,"extentStart":8951,"extentEnd":9439,"fullyQualifiedName":"getTime","identUtf16":{"start":{"lineNumber":268,"utf16Col":3},"end":{"lineNumber":268,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":268,"utf16Col":3},"end":{"lineNumber":288,"utf16Col":4}}},{"name":"home","kind":"function","identStart":9491,"identEnd":9495,"extentStart":9482,"extentEnd":10413,"fullyQualifiedName":"home","identUtf16":{"start":{"lineNumber":295,"utf16Col":9},"end":{"lineNumber":295,"utf16Col":13}},"extentUtf16":{"start":{"lineNumber":295,"utf16Col":0},"end":{"lineNumber":314,"utf16Col":1}}},{"name":"homeVod","kind":"function","identStart":10424,"identEnd":10431,"extentStart":10415,"extentEnd":11106,"fullyQualifiedName":"homeVod","identUtf16":{"start":{"lineNumber":316,"utf16Col":9},"end":{"lineNumber":316,"utf16Col":16}},"extentUtf16":{"start":{"lineNumber":316,"utf16Col":0},"end":{"lineNumber":336,"utf16Col":1}}},{"name":"category","kind":"function","identStart":11117,"identEnd":11125,"extentStart":11108,"extentEnd":15246,"fullyQualifiedName":"category","identUtf16":{"start":{"lineNumber":338,"utf16Col":9},"end":{"lineNumber":338,"utf16Col":17}},"extentUtf16":{"start":{"lineNumber":338,"utf16Col":0},"end":{"lineNumber":469,"utf16Col":1}}},{"name":"getAll","kind":"function","identStart":15257,"identEnd":15263,"extentStart":15248,"extentEnd":16675,"fullyQualifiedName":"getAll","identUtf16":{"start":{"lineNumber":471,"utf16Col":9},"end":{"lineNumber":471,"utf16Col":15}},"extentUtf16":{"start":{"lineNumber":471,"utf16Col":0},"end":{"lineNumber":511,"utf16Col":1}}},{"name":"detail","kind":"function","identStart":16686,"identEnd":16692,"extentStart":16677,"extentEnd":18431,"fullyQualifiedName":"detail","identUtf16":{"start":{"lineNumber":513,"utf16Col":9},"end":{"lineNumber":513,"utf16Col":15}},"extentUtf16":{"start":{"lineNumber":513,"utf16Col":0},"end":{"lineNumber":566,"utf16Col":1}}},{"name":"play","kind":"function","identStart":18442,"identEnd":18446,"extentStart":18433,"extentEnd":18973,"fullyQualifiedName":"play","identUtf16":{"start":{"lineNumber":568,"utf16Col":9},"end":{"lineNumber":568,"utf16Col":13}},"extentUtf16":{"start":{"lineNumber":568,"utf16Col":0},"end":{"lineNumber":584,"utf16Col":1}}},{"name":"search","kind":"function","identStart":18984,"identEnd":18990,"extentStart":18975,"extentEnd":20419,"fullyQualifiedName":"search","identUtf16":{"start":{"lineNumber":586,"utf16Col":9},"end":{"lineNumber":586,"utf16Col":15}},"extentUtf16":{"start":{"lineNumber":586,"utf16Col":0},"end":{"lineNumber":642,"utf16Col":1}}},{"name":"get_size","kind":"function","identStart":20430,"identEnd":20438,"extentStart":20421,"extentEnd":21172,"fullyQualifiedName":"get_size","identUtf16":{"start":{"lineNumber":644,"utf16Col":9},"end":{"lineNumber":644,"utf16Col":17}},"extentUtf16":{"start":{"lineNumber":644,"utf16Col":0},"end":{"lineNumber":675,"utf16Col":1}}},{"name":"levenshteinDistance","kind":"function","identStart":21202,"identEnd":21221,"extentStart":21193,"extentEnd":21319,"fullyQualifiedName":"levenshteinDistance","identUtf16":{"start":{"lineNumber":678,"utf16Col":9},"end":{"lineNumber":678,"utf16Col":28}},"extentUtf16":{"start":{"lineNumber":678,"utf16Col":0},"end":{"lineNumber":680,"utf16Col":1}}},{"name":"naturalSort","kind":"function","identStart":21509,"identEnd":21520,"extentStart":21500,"extentEnd":23887,"fullyQualifiedName":"naturalSort","identUtf16":{"start":{"lineNumber":687,"utf16Col":9},"end":{"lineNumber":687,"utf16Col":20}},"extentUtf16":{"start":{"lineNumber":687,"utf16Col":0},"end":{"lineNumber":762,"utf16Col":1}}},{"name":"normalize","kind":"function","identStart":22057,"identEnd":22066,"extentStart":22057,"extentEnd":22209,"fullyQualifiedName":"normalize","identUtf16":{"start":{"lineNumber":710,"utf16Col":6},"end":{"lineNumber":710,"utf16Col":15}},"extentUtf16":{"start":{"lineNumber":710,"utf16Col":6},"end":{"lineNumber":716,"utf16Col":3}}},{"name":"normalize","kind":"function","identStart":22078,"identEnd":22087,"extentStart":22069,"extentEnd":22209,"fullyQualifiedName":"normalize","identUtf16":{"start":{"lineNumber":710,"utf16Col":27},"end":{"lineNumber":710,"utf16Col":36}},"extentUtf16":{"start":{"lineNumber":710,"utf16Col":18},"end":{"lineNumber":716,"utf16Col":3}}},{"name":"sortListByName","kind":"function","identStart":23916,"identEnd":23930,"extentStart":23916,"extentEnd":24145,"fullyQualifiedName":"sortListByName","identUtf16":{"start":{"lineNumber":764,"utf16Col":6},"end":{"lineNumber":764,"utf16Col":20}},"extentUtf16":{"start":{"lineNumber":764,"utf16Col":6},"end":{"lineNumber":771,"utf16Col":1}}},{"name":"getTimeInt","kind":"function","identStart":24154,"identEnd":24164,"extentStart":24154,"extentEnd":24222,"fullyQualifiedName":"getTimeInt","identUtf16":{"start":{"lineNumber":773,"utf16Col":6},"end":{"lineNumber":773,"utf16Col":16}},"extentUtf16":{"start":{"lineNumber":773,"utf16Col":6},"end":{"lineNumber":775,"utf16Col":1}}},{"name":"sortListByTime","kind":"function","identStart":24241,"identEnd":24255,"extentStart":24241,"extentEnd":24488,"fullyQualifiedName":"sortListByTime","identUtf16":{"start":{"lineNumber":778,"utf16Col":6},"end":{"lineNumber":778,"utf16Col":20}},"extentUtf16":{"start":{"lineNumber":778,"utf16Col":6},"end":{"lineNumber":791,"utf16Col":1}}},{"name":"sortListBySize","kind":"function","identStart":24507,"identEnd":24521,"extentStart":24507,"extentEnd":24760,"fullyQualifiedName":"sortListBySize","identUtf16":{"start":{"lineNumber":794,"utf16Col":6},"end":{"lineNumber":794,"utf16Col":20}},"extentUtf16":{"start":{"lineNumber":794,"utf16Col":6},"end":{"lineNumber":807,"utf16Col":1}}}]}},"copilotInfo":{"documentationUrl":"https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot-for-individuals","notices":{"codeViewPopover":{"dismissed":false,"dismissPath":"/settings/dismiss-notice/code_view_copilot_popover"}},"userAccess":{"accessAllowed":false,"hasSubscriptionEnded":false,"orgHasCFBAccess":false,"userHasCFIAccess":false,"userHasOrgs":false,"userIsOrgAdmin":false,"userIsOrgMember":false,"business":null,"featureRequestInfo":null}},"csrf_tokens":{"/hjdhnx/dr_py/branches":{"post":"YTdoBjbeEmzrgxlS8fy_ins-nnJwIn5muQ_kMqm7AdI2OKCwhs30RP_sPNZuzmLwj5aSpFTbLB8hjAh7AoC6Uw"},"/repos/preferences":{"post":"PgLNRluxDEQ6TYSocKuXeJMtuNLKtoQbVjbht9ajHBTreWg0bYIJxHoYNK-QM_S-smTNacAeMP4ItsGMCtznfg"}}},"title":"dr_py/libs/alist.js at main · hjdhnx/dr_py","appPayload":{"helpUrl":"https://docs.github.com","findFileWorkerPath":"/assets-cdn/worker/find-file-worker-83d4418b406d.js","findInFileWorkerPath":"/assets-cdn/worker/find-in-file-worker-bcc43f789400.js","githubDevUrl":"https://github.dev/","enabled_features":{"code_nav_ui_events":false,"copilot_conversational_ux":false,"copilot_conversational_ux_streaming":false,"copilot_popover_file_editor_header":true,"copilot_smell_icebreaker_ux":false}}}</script>
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

