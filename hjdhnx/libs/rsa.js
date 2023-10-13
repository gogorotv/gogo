





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
  <script type="text/javascript" nonce="babf6eea3d5847129172b8eb214" src="//local.adguard.org?ts=1697152839730&amp;type=content-script&amp;dmn=github.com&amp;url=https%3A%2F%2Fgithub.com%2Fhjdhnx%2Fdr_py%2Fblob%2Fmain%2Flibs%2Frsa.js&amp;app=chrome.exe&amp;css=2&amp;js=1&amp;rel=1&amp;rji=1&amp;sbe=1&amp;stealth=1&amp;st-dnt"></script>
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


  <title>dr_py/libs/rsa.js at main · hjdhnx/dr_py</title>



  <meta name="route-pattern" content="/:user_id/:repository/blob/*name(/*path)">

    
  <meta name="current-catalog-service-hash" content="82c569b93da5c18ed649ebd4c2c79437db4611a6a1373e805a3cb001c64130b7">


  <meta name="request-id" content="149E:31F30:2B0B20:2EC02E:65289347" data-turbo-transient="true" /><meta name="html-safe-nonce" content="c9670496bb2e309eb36063b3c920cb16f539ca725f10be5e34eb4aa5642c5c12" data-turbo-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9oamRobngvZHJfcHkvdHJlZS9tYWluL2xpYnMiLCJyZXF1ZXN0X2lkIjoiMTQ5RTozMUYzMDoyQjBCMjA6MkVDMDJFOjY1Mjg5MzQ3IiwidmlzaXRvcl9pZCI6Ijg4MDU1NDA1NzMyNjYxMDk3NTAiLCJyZWdpb25fZWRnZSI6ImphcGFuZWFzdCIsInJlZ2lvbl9yZW5kZXIiOiJpYWQifQ==" data-turbo-transient="true" /><meta name="visitor-hmac" content="647d97d939ac951984d1e83ebef3dea3e7446f24c61c70a2959da238c29d26a1" data-turbo-transient="true" />


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
    
      <meta name="description" content="A webServer convert web and x5 movie sites to cms api data - dr_py/libs/rsa.js at main · hjdhnx/dr_py">
      <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <meta property="fb:app_id" content="1401488693436528">
    <meta name="apple-itunes-app" content="app-id=1477376905, app-argument=https://github.com/hjdhnx/dr_py/blob/main/libs/rsa.js" />
      <meta name="twitter:image:src" content="https://opengraph.githubassets.com/f6a30d397de96d17b6808619b1718f66b00400b77ff8d6a2178977198fd57158/hjdhnx/dr_py" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="dr_py/libs/rsa.js at main · hjdhnx/dr_py" /><meta name="twitter:description" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" />
      <meta property="og:image" content="https://opengraph.githubassets.com/f6a30d397de96d17b6808619b1718f66b00400b77ff8d6a2178977198fd57158/hjdhnx/dr_py" /><meta property="og:image:alt" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="600" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="dr_py/libs/rsa.js at main · hjdhnx/dr_py" /><meta property="og:url" content="https://github.com/hjdhnx/dr_py/blob/main/libs/rsa.js" /><meta property="og:description" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" />
      

      <link rel="shared-web-socket" href="wss://alive.github.com/_sockets/u/139020806/ws?session=eyJ2IjoiVjMiLCJ1IjoxMzkwMjA4MDYsInMiOjEyMjE1NzQ0NzAsImMiOjE5ODkwMjI3NzQsInQiOjE2OTcxNTc5NzB9--c9c616b9b5ef976ce71ea3219eb7e617391db2ab68b6581e656a46d25edaf0c0" data-refresh-url="/_alive" data-session-id="b901c9b8379b94b0262d68dba8a5f5afb2b3e5767167059fbd5009fa1e7b15b7">
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
      
  <button aria-label="Open global navigation menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-052ab286-d1fa-4921-8bb8-46ed9837b4a0" id="dialog-show-dialog-052ab286-d1fa-4921-8bb8-46ed9837b4a0" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-bg-transparent p-0 color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-three-bars Button-visual">
    <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
</svg>
</button>  

<div class="Overlay--hidden Overlay-backdrop--side Overlay-backdrop--placement-left" data-modal-dialog-overlay>
  <modal-dialog data-target="deferred-side-panel.panel" role="dialog" id="dialog-052ab286-d1fa-4921-8bb8-46ed9837b4a0" aria-modal="true" aria-disabled="true" aria-labelledby="dialog-052ab286-d1fa-4921-8bb8-46ed9837b4a0-title" aria-describedby="dialog-052ab286-d1fa-4921-8bb8-46ed9837b4a0-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade SidePanel">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-052ab286-d1fa-4921-8bb8-46ed9837b4a0-title">
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
      <button data-close-dialog-id="dialog-052ab286-d1fa-4921-8bb8-46ed9837b4a0" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body d-flex flex-column height-full px-2">      <nav aria-label="Site navigation" data-view-component="true" class="ActionList">
  
  <nav-list>
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-hotkey="g d" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;HOME&quot;,&quot;label&quot;:null}" id="item-d524f15e-221f-4dc3-8ffd-05af1f3c7d09" href="/dashboard" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES&quot;,&quot;label&quot;:null}" id="item-710800b8-cf93-43a8-b6d2-3c631ba9ff36" href="/issues" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS&quot;,&quot;label&quot;:null}" id="item-acee1a39-e184-470a-8f92-789d78266616" href="/pulls" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DISCUSSIONS&quot;,&quot;label&quot;:null}" id="item-eb7a4344-0754-49bb-a906-1841a4868b75" href="/discussions" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;CODESPACES&quot;,&quot;label&quot;:null}" id="item-61c9d946-ace5-41c3-8379-4b998b4903c5" href="https://github.com/codespaces" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;EXPLORE&quot;,&quot;label&quot;:null}" id="item-9a9fb16a-347c-40c9-896a-a0f959d4a9b1" href="/explore" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;MARKETPLACE&quot;,&quot;label&quot;:null}" id="item-88853383-6a9b-441d-8d2f-ebc24692a027" href="/marketplace" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;FEEDBACK&quot;,&quot;label&quot;:null}" id="item-f8463774-50d4-44e4-a5b9-964aea48bd9a" href="https://gh.io/navigation-update" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
              


<qbsearch-input class="search-input" data-scope="repo:hjdhnx/dr_py" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="WP8sKQvY6NiDO8fHdjPmSacmUTUWod7QKFtG9idLRDmvhpLrAgq-38YTz517VciXjemkbp7ZfSUnj5zNFYE4Vg" data-max-custom-scopes="10" data-header-redesign-enabled="true" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="hjdhnx/dr_py" data-current-org="" data-current-owner="hjdhnx" data-logged-in="true">
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

      <tool-tip id="tooltip-b732b564-06db-4f4b-8db8-427a78e612e5" for="AppHeader-commandPalette-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Command palette</tool-tip>
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
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-210405ed-69af-4473-ad04-b46159710fc2" data-target="query-builder.input" data-action="
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
      <div class="FormControl-inlineValidation" id="validation-210405ed-69af-4473-ad04-b46159710fc2" hidden="hidden">
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
      <div data-view-component="true" class="Overlay-body">        <!-- '"` --><!-- </textarea></xmp> --></option></form><form id="code-search-feedback-form" data-turbo="false" action="/search/feedback" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="FQKTqlBA8M8oo9QbRBJ4mtehs4830VI3du3XCOq3ROQg9O8J_ycJ6_wnxRLrtCzLVv_XVkT0j9N8ssVdrD6G8A" />
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form id="custom-scopes-dialog-form" data-turbo="false" action="/search/custom_scopes" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="wT0wBa_bDlt1cire3SjB7wLcWYjeV8kvbuXFzA8mYCf1tm0-hNDbZ-s3LqKyMZ4MCVu75WMrsMmLaYJukBYx0A" />
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
              <input type="hidden" value="jVbycGqKG_Q0jvXa9UD5mjSqEYd7B_T68IaR5ueEy7OFdR-bdJTZXTvFxtLDDtCJAU2_9iNbr7Xbh8VpYA1YGA" data-csrf="true" />
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
</qbsearch-input><input type="hidden" value="OaaWSxkgs0LSxUaYRLljEuVIs9pZiUxafEmEbl5570ilQ3bzw9V-4OfFW6XM3rCfuF_HokIu1NxES7L8JBZPGw" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />

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
</button>  <tool-tip id="tooltip-7a4c4739-8080-4634-950f-f20233ed5a8d" for="global-create-menu-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Create new...</tool-tip>
</div>

<anchored-position id="global-create-menu-overlay" anchor="global-create-menu-button" align="end" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      
        <div data-view-component="true">
  <ul aria-labelledby="global-create-menu-button" id="global-create-menu-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new repository&quot;}" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="/new" tabindex="-1" id="item-9c60b869-c782-4276-a76f-6a33d450cf0a" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="/new/import" tabindex="-1" id="item-5ea93203-74cb-4847-8b8d-1b5a6fa6b430" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="/codespaces/new" tabindex="-1" id="item-679d36ca-bad9-4571-8674-5cc74ec456a2" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="https://gist.github.com/" tabindex="-1" id="item-11768ede-3f47-4e47-ac98-65acb54a39ba" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="/account/organizations/new" tabindex="-1" id="item-f5cd1bf8-bc0b-44ae-9754-eff616641c49" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
  <a href="/issues" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-500f66cf-9ddc-45c4-a17c-a0e067d8c408" aria-labelledby="tooltip-c42b8dbf-edba-49ed-9e31-21c25ffa8ebd" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened Button-visual">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
</a>  <tool-tip id="tooltip-c42b8dbf-edba-49ed-9e31-21c25ffa8ebd" for="icon-button-500f66cf-9ddc-45c4-a17c-a0e067d8c408" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Issues</tool-tip>
</div>
          <div data-view-component="true" class="Button-withTooltip">
  <a href="/pulls" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-3ec789a2-5918-484d-8854-a9700b7ec10a" aria-labelledby="tooltip-bb44a26b-67ad-4448-8b83-b0bf6d74b837" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request Button-visual">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
</a>  <tool-tip id="tooltip-bb44a26b-67ad-4448-8b83-b0bf6d74b837" for="icon-button-3ec789a2-5918-484d-8854-a9700b7ec10a" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Pull requests</tool-tip>
</div>
          
        </div>

        

<notification-indicator data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTM5MDIwODA2IiwidCI6MTY5NzE1Nzk3MH0=--7b4ab45c267475a277b337cf561f553f61b6dfaeb59968e47650e19ae58e4231" data-indicator-mode="none" data-tooltip-global="You have unread notifications" data-tooltip-unavailable="Notifications are unavailable at the moment." data-tooltip-none="You have no unread notifications" data-header-redesign-enabled="true" data-fetch-indicator-src="/notifications/indicator" data-fetch-indicator-enabled="true" data-view-component="true" class="js-socket-channel">
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

    <tool-tip data-target="notification-indicator.tooltip" id="tooltip-8e028ada-260b-4d04-8041-f1f5e606d3b0" for="AppHeader-notifications-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Notifications</tool-tip>
</notification-indicator>

        

        <div class="AppHeader-user">
          <deferred-side-panel data-url="/_side-panels/user?memex_enabled=true&amp;repository=dr_py&amp;user=gogorotv&amp;user_can_create_organizations=true&amp;user_id=139020806">
  <include-fragment data-target="deferred-side-panel.fragment">
      <user-drawer-side-panel>
      <button aria-label="Open user account menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-14393882-c8c8-4560-b3ac-b2062bc4fc96" id="dialog-show-dialog-14393882-c8c8-4560-b3ac-b2062bc4fc96" type="button" data-view-component="true" class="AppHeader-logo Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0">    <span class="Button-content">
      <span class="Button-label"><img src="https://avatars.githubusercontent.com/u/139020806?v=4" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle" /></span>
    </span>
</button>  

<div class="Overlay--hidden Overlay-backdrop--side Overlay-backdrop--placement-right" data-modal-dialog-overlay>
  <modal-dialog data-target="deferred-side-panel.panel" role="dialog" id="dialog-14393882-c8c8-4560-b3ac-b2062bc4fc96" aria-modal="true" aria-disabled="true" aria-labelledby="dialog-14393882-c8c8-4560-b3ac-b2062bc4fc96-title" aria-describedby="dialog-14393882-c8c8-4560-b3ac-b2062bc4fc96-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade SidePanel">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-14393882-c8c8-4560-b3ac-b2062bc4fc96-title">
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
      <button data-close-dialog-id="dialog-14393882-c8c8-4560-b3ac-b2062bc4fc96" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body d-flex flex-column height-full px-2">      <nav aria-label="User navigation" data-view-component="true" class="ActionList">
  
  <nav-list>
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-02e33a55-2ef3-49c0-851f-ef98eda4b64d" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PROFILE&quot;,&quot;label&quot;:null}" id="item-5cf5f848-fb41-4925-bef6-ca79779b5049" href="https://github.com/gogorotv" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-8732402c-13b0-4c91-8859-b7930da0709d" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_REPOSITORIES&quot;,&quot;label&quot;:null}" id="item-20197589-2dbb-4c9e-8fa2-ff423d5ed232" href="/gogorotv?tab=repositories" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_PROJECTS&quot;,&quot;label&quot;:null}" id="item-4197951d-537d-43d5-95ab-e403ddea196a" href="/gogorotv?tab=projects" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-473c8465-97cc-47e9-95be-eea80333b24a" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_STARS&quot;,&quot;label&quot;:null}" id="item-59c93339-a132-4b63-b9ca-93f1a24a5d89" href="/gogorotv?tab=stars" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SPONSORS&quot;,&quot;label&quot;:null}" id="item-3010ffa5-c78d-4027-ba23-9c4204b53743" href="/sponsors/accounts" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_GISTS&quot;,&quot;label&quot;:null}" id="item-58d78d17-5fb9-41aa-bd5f-491b564eab98" href="https://gist.github.com/mine" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-16d63434-957b-480b-8d05-c5952a156640" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-079a4afa-816e-4c75-a622-1525f5949cbb" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-9cbb64e3-c553-4bcf-ba77-f4f206373b19" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SETTINGS&quot;,&quot;label&quot;:null}" id="item-c48a1a6f-4134-432d-b196-14d5ed6dd1ef" href="/settings/profile" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DOCS&quot;,&quot;label&quot;:null}" id="item-15d38628-0e5f-4a4d-a5bd-5fb5b02ad67b" href="https://docs.github.com" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SUPPORT&quot;,&quot;label&quot;:null}" id="item-612278c4-1eaf-4ce6-8794-628736bc91db" href="https://support.github.com" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;LOGOUT&quot;,&quot;label&quot;:null}" id="item-6aef607b-dd15-4022-a1d3-cd539bb010a1" href="/logout" data-view-component="true" class="ActionListContent">
      
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
  <button id="icon-button-e3d3d2e5-bdcb-47c6-8044-8089aaf5a21f" aria-labelledby="tooltip-52b91047-e873-4829-812b-47cd86d9b2fa" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium js-flash-close">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button>  <tool-tip id="tooltip-52b91047-e873-4829-812b-47cd86d9b2fa" for="icon-button-e3d3d2e5-bdcb-47c6-8044-8089aaf5a21f" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Dismiss alert</tool-tip>
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


    
    <notification-shelf-watcher data-base-url="https://github.com/notifications/beta/shelf" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTM5MDIwODA2IiwidCI6MTY5NzE1Nzk3MH0=--7b4ab45c267475a277b337cf561f553f61b6dfaeb59968e47650e19ae58e4231" data-view-component="true" class="js-socket-channel"></notification-shelf-watcher>
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
      return-to=/hjdhnx/dr_py/blob/main/libs/rsa.js
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
</button>    <tool-tip id="tooltip-a8d69442-5ecb-4977-b3cc-cb404d9b964b" for="command-palette-clear-button" popover="manual" data-direction="w" data-type="label" data-view-component="true" class="sr-only position-absolute">Clear Command Palette</tool-tip>
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
  initial-path="/hjdhnx/dr_py/blob/main/libs/rsa.js"
  style="min-height: calc(100vh - 62px)"
  data-ssr="false"
  data-lazy="false"
  data-alternate="false"
>
  
  <script type="application/json" data-target="react-app.embeddedData">{"payload":{"allShortcutsEnabled":true,"fileTree":{"libs":{"items":[{"name":"jar","path":"libs/jar","contentType":"directory"},{"name":"parse","path":"libs/parse","contentType":"directory"},{"name":"alist.js","path":"libs/alist.js","contentType":"file"},{"name":"alist.min.js","path":"libs/alist.min.js","contentType":"file"},{"name":"atob.js","path":"libs/atob.js","contentType":"file"},{"name":"base64.js","path":"libs/base64.js","contentType":"file"},{"name":"base64.min.js","path":"libs/base64.min.js","contentType":"file"},{"name":"cat_index.js","path":"libs/cat_index.js","contentType":"file"},{"name":"cheerio.min.js","path":"libs/cheerio.min.js","contentType":"file"},{"name":"cheerio.min.jsd","path":"libs/cheerio.min.jsd","contentType":"file"},{"name":"crypto-hiker.js","path":"libs/crypto-hiker.js","contentType":"file"},{"name":"crypto-js.js","path":"libs/crypto-js.js","contentType":"file"},{"name":"drT.js","path":"libs/drT.js","contentType":"file"},{"name":"drpy-ym.js","path":"libs/drpy-ym.js","contentType":"file"},{"name":"drpy.js","path":"libs/drpy.js","contentType":"file"},{"name":"drpy.min.js","path":"libs/drpy.min.js","contentType":"file"},{"name":"drpy.ym.js","path":"libs/drpy.ym.js","contentType":"file"},{"name":"drpy2-2838.js","path":"libs/drpy2-2838.js","contentType":"file"},{"name":"drpy2.js","path":"libs/drpy2.js","contentType":"file"},{"name":"drpy2.min.js","path":"libs/drpy2.min.js","contentType":"file"},{"name":"es6py.js","path":"libs/es6py.js","contentType":"file"},{"name":"exRegExp.js","path":"libs/exRegExp.js","contentType":"file"},{"name":"gbk.js","path":"libs/gbk.js","contentType":"file"},{"name":"gbk2.js","path":"libs/gbk2.js","contentType":"file"},{"name":"live2cms.js","path":"libs/live2cms.js","contentType":"file"},{"name":"live2mv.js","path":"libs/live2mv.js","contentType":"file"},{"name":"maomi_aes.js","path":"libs/maomi_aes.js","contentType":"file"},{"name":"mod.js","path":"libs/mod.js","contentType":"file"},{"name":"nameOrder.js","path":"libs/nameOrder.js","contentType":"file"},{"name":"pdf.js","path":"libs/pdf.js","contentType":"file"},{"name":"pinyin_getFirstLetterList.js","path":"libs/pinyin_getFirstLetterList.js","contentType":"file"},{"name":"pre.js","path":"libs/pre.js","contentType":"file"},{"name":"rsa.js","path":"libs/rsa.js","contentType":"file"},{"name":"searchFilter.js","path":"libs/searchFilter.js","contentType":"file"},{"name":"sortName.js","path":"libs/sortName.js","contentType":"file"},{"name":"underscore-esm-min.js","path":"libs/underscore-esm-min.js","contentType":"file"},{"name":"uri.min.js","path":"libs/uri.min.js","contentType":"file"},{"name":"util.ym.js","path":"libs/util.ym.js","contentType":"file"}],"totalCount":38},"":{"items":[{"name":".idea","path":".idea","contentType":"directory"},{"name":"base","path":"base","contentType":"directory"},{"name":"controllers","path":"controllers","contentType":"directory"},{"name":"doc","path":"doc","contentType":"directory"},{"name":"docker","path":"docker","contentType":"directory"},{"name":"images","path":"images","contentType":"directory"},{"name":"jiexi","path":"jiexi","contentType":"directory"},{"name":"js","path":"js","contentType":"directory"},{"name":"libs","path":"libs","contentType":"directory"},{"name":"logs","path":"logs","contentType":"directory"},{"name":"models","path":"models","contentType":"directory"},{"name":"py","path":"py","contentType":"directory"},{"name":"static","path":"static","contentType":"directory"},{"name":"super","path":"super","contentType":"directory"},{"name":"templates","path":"templates","contentType":"directory"},{"name":"test","path":"test","contentType":"directory"},{"name":"txt","path":"txt","contentType":"directory"},{"name":"utils","path":"utils","contentType":"directory"},{"name":"whl","path":"whl","contentType":"directory"},{"name":"zhengban","path":"zhengban","contentType":"directory"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"404.jpg","path":"404.jpg","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"app.py","path":"app.py","contentType":"file"},{"name":"app.sh","path":"app.sh","contentType":"file"},{"name":"commands.txt","path":"commands.txt","contentType":"file"},{"name":"dockerfile","path":"dockerfile","contentType":"file"},{"name":"dockerfile_arm64.txt","path":"dockerfile_arm64.txt","contentType":"file"},{"name":"dockerfile_armv7.txt","path":"dockerfile_armv7.txt","contentType":"file"},{"name":"drpy_js_rule.js","path":"drpy_js_rule.js","contentType":"file"},{"name":"readme.md","path":"readme.md","contentType":"file"},{"name":"requirements.txt","path":"requirements.txt","contentType":"file"},{"name":"sources.list","path":"sources.list","contentType":"file"},{"name":"start.sh","path":"start.sh","contentType":"file"}],"totalCount":34}},"fileTreeProcessingTime":7.460311,"foldersToFetch":[],"reducedMotionEnabled":"system","repo":{"id":533565455,"defaultBranch":"main","name":"dr_py","ownerLogin":"hjdhnx","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2022-09-07T09:54:07.000+08:00","ownerAvatar":"https://avatars.githubusercontent.com/u/49803097?v=4","public":true,"private":false,"isOrgOwned":false},"symbolsExpanded":false,"treeExpanded":true,"refInfo":{"name":"main","listCacheKey":"v0:1696329988.0","canEdit":true,"refType":"branch","currentOid":"fde84cfa7523179df20601cfc560c55fcbe9f5de"},"path":"libs/rsa.js","currentUser":{"id":139020806,"login":"gogorotv","userEmail":"gogoro2024@gmail.com"},"blob":{"rawLines":["/*"," * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\")."," * This devtool is neither made for production nor for readable output files."," * It uses \"eval()\" calls to create a separate source file in the browser devtools."," * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)"," * or disable the default devtool with \"devtool: false\"."," * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/)."," */","(function webpackUniversalModuleDefinition(root, factory) {","\tif(typeof exports === 'object'){","        // CommonJS","\t\tmodule.exports = exports = factory();","    } else if(typeof define === 'function' \u0026\u0026 define.amd){","\t\tdefine([], factory);","    } else{","        globalThis.JSEncrypt = factory();","    }","})(this, () =\u003e {","return /******/ (() =\u003e { // webpackBootstrap","/******/ \tvar __webpack_modules__ = ({","","/***/ \"./lib/JSEncrypt.js\":","/*!**************************!*\\","  !*** ./lib/JSEncrypt.js ***!","  \\**************************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"JSEncrypt\\\": () =\u003e (/* binding */ JSEncrypt)\\n/* harmony export */ });\\n/* harmony import */ var _lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/jsbn/base64 */ \\\"./lib/lib/jsbn/base64.js\\\");\\n/* harmony import */ var _JSEncryptRSAKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JSEncryptRSAKey */ \\\"./lib/JSEncryptRSAKey.js\\\");\\n/* provided dependency */ var process = __webpack_require__(/*! process/browser */ \\\"./node_modules/process/browser.js\\\");\\nvar _a;\\n\\n\\nvar version = typeof process !== 'undefined'\\n    ? (_a = process.env) === null || _a === void 0 ? void 0 : \\\"3.3.2\\\"\\n    : undefined;\\n/**\\n *\\n * @param {Object} [options = {}] - An object to customize JSEncrypt behaviour\\n * possible parameters are:\\n * - default_key_size        {number}  default: 1024 the key size in bit\\n * - default_public_exponent {string}  default: '010001' the hexadecimal representation of the public exponent\\n * - log                     {boolean} default: false whether log warn/error or not\\n * @constructor\\n */\\nvar JSEncrypt = /** @class */ (function () {\\n    function JSEncrypt(options) {\\n        if (options === void 0) { options = {}; }\\n        options = options || {};\\n        this.default_key_size = options.default_key_size\\n            ? parseInt(options.default_key_size, 10)\\n            : 1024;\\n        this.default_public_exponent = options.default_public_exponent || \\\"010001\\\"; // 65537 default openssl public exponent for rsa key type\\n        this.log = options.log || false;\\n        // The private and public key.\\n        this.key = null;\\n    }\\n    /**\\n     * Method to set the rsa key parameter (one method is enough to set both the public\\n     * and the private key, since the private key contains the public key paramenters)\\n     * Log a warning if logs are enabled\\n     * @param {Object|string} key the pem encoded string or an object (with or without header/footer)\\n     * @public\\n     */\\n    JSEncrypt.prototype.setKey = function (key) {\\n        if (this.log \u0026\u0026 this.key) {\\n            console.warn(\\\"A key was already set, overriding existing.\\\");\\n        }\\n        this.key = new _JSEncryptRSAKey__WEBPACK_IMPORTED_MODULE_1__.JSEncryptRSAKey(key);\\n    };\\n    /**\\n     * Proxy method for setKey, for api compatibility\\n     * @see setKey\\n     * @public\\n     */\\n    JSEncrypt.prototype.setPrivateKey = function (privkey) {\\n        // Create the key.\\n        this.setKey(privkey);\\n    };\\n    /**\\n     * Proxy method for setKey, for api compatibility\\n     * @see setKey\\n     * @public\\n     */\\n    JSEncrypt.prototype.setPublicKey = function (pubkey) {\\n        // Sets the public key.\\n        this.setKey(pubkey);\\n    };\\n    /**\\n     * Proxy method for RSAKey object's decrypt, decrypt the string using the private\\n     * components of the rsa key object. Note that if the object was not set will be created\\n     * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor\\n     * @param {string} str base64 encoded crypted string to decrypt\\n     * @return {string} the decrypted string\\n     * @public\\n     */\\n    JSEncrypt.prototype.decrypt = function (str) {\\n        // Return the decrypted string.\\n        try {\\n            return this.getKey().decrypt((0,_lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__.b64tohex)(str));\\n        }\\n        catch (ex) {\\n            return false;\\n        }\\n    };\\n    /**\\n     * Proxy method for RSAKey object's encrypt, encrypt the string using the public\\n     * components of the rsa key object. Note that if the object was not set will be created\\n     * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor\\n     * @param {string} str the string to encrypt\\n     * @return {string} the encrypted string encoded in base64\\n     * @public\\n     */\\n    JSEncrypt.prototype.encrypt = function (str) {\\n        // Return the encrypted string.\\n        try {\\n            return (0,_lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__.hex2b64)(this.getKey().encrypt(str));\\n        }\\n        catch (ex) {\\n            return false;\\n        }\\n    };\\n    /**\\n     * Proxy method for RSAKey object's sign.\\n     * @param {string} str the string to sign\\n     * @param {function} digestMethod hash method\\n     * @param {string} digestName the name of the hash algorithm\\n     * @return {string} the signature encoded in base64\\n     * @public\\n     */\\n    JSEncrypt.prototype.sign = function (str, digestMethod, digestName) {\\n        // return the RSA signature of 'str' in 'hex' format.\\n        try {\\n            return (0,_lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__.hex2b64)(this.getKey().sign(str, digestMethod, digestName));\\n        }\\n        catch (ex) {\\n            return false;\\n        }\\n    };\\n    /**\\n     * Proxy method for RSAKey object's verify.\\n     * @param {string} str the string to verify\\n     * @param {string} signature the signature encoded in base64 to compare the string to\\n     * @param {function} digestMethod hash method\\n     * @return {boolean} whether the data and signature match\\n     * @public\\n     */\\n    JSEncrypt.prototype.verify = function (str, signature, digestMethod) {\\n        // Return the decrypted 'digest' of the signature.\\n        try {\\n            return this.getKey().verify(str, (0,_lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__.b64tohex)(signature), digestMethod);\\n        }\\n        catch (ex) {\\n            return false;\\n        }\\n    };\\n    /**\\n     * Getter for the current JSEncryptRSAKey object. If it doesn't exists a new object\\n     * will be created and returned\\n     * @param {callback} [cb] the callback to be called if we want the key to be generated\\n     * in an async fashion\\n     * @returns {JSEncryptRSAKey} the JSEncryptRSAKey object\\n     * @public\\n     */\\n    JSEncrypt.prototype.getKey = function (cb) {\\n        // Only create new if it does not exist.\\n        if (!this.key) {\\n            // Get a new private key.\\n            this.key = new _JSEncryptRSAKey__WEBPACK_IMPORTED_MODULE_1__.JSEncryptRSAKey();\\n            if (cb \u0026\u0026 {}.toString.call(cb) === \\\"[object Function]\\\") {\\n                this.key.generateAsync(this.default_key_size, this.default_public_exponent, cb);\\n                return;\\n            }\\n            // Generate the key.\\n            this.key.generate(this.default_key_size, this.default_public_exponent);\\n        }\\n        return this.key;\\n    };\\n    /**\\n     * Returns the pem encoded representation of the private key\\n     * If the key doesn't exists a new key will be created\\n     * @returns {string} pem encoded representation of the private key WITH header and footer\\n     * @public\\n     */\\n    JSEncrypt.prototype.getPrivateKey = function () {\\n        // Return the private representation of this key.\\n        return this.getKey().getPrivateKey();\\n    };\\n    /**\\n     * Returns the pem encoded representation of the private key\\n     * If the key doesn't exists a new key will be created\\n     * @returns {string} pem encoded representation of the private key WITHOUT header and footer\\n     * @public\\n     */\\n    JSEncrypt.prototype.getPrivateKeyB64 = function () {\\n        // Return the private representation of this key.\\n        return this.getKey().getPrivateBaseKeyB64();\\n    };\\n    /**\\n     * Returns the pem encoded representation of the public key\\n     * If the key doesn't exists a new key will be created\\n     * @returns {string} pem encoded representation of the public key WITH header and footer\\n     * @public\\n     */\\n    JSEncrypt.prototype.getPublicKey = function () {\\n        // Return the private representation of this key.\\n        return this.getKey().getPublicKey();\\n    };\\n    /**\\n     * Returns the pem encoded representation of the public key\\n     * If the key doesn't exists a new key will be created\\n     * @returns {string} pem encoded representation of the public key WITHOUT header and footer\\n     * @public\\n     */\\n    JSEncrypt.prototype.getPublicKeyB64 = function () {\\n        // Return the private representation of this key.\\n        return this.getKey().getPublicBaseKeyB64();\\n    };\\n    JSEncrypt.version = version;\\n    return JSEncrypt;\\n}());\\n\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/JSEncrypt.js?\");","","/***/ }),","","/***/ \"./lib/JSEncryptRSAKey.js\":","/*!********************************!*\\","  !*** ./lib/JSEncryptRSAKey.js ***!","  \\********************************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"JSEncryptRSAKey\\\": () =\u003e (/* binding */ JSEncryptRSAKey)\\n/* harmony export */ });\\n/* harmony import */ var _lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/jsbn/base64 */ \\\"./lib/lib/jsbn/base64.js\\\");\\n/* harmony import */ var _lib_asn1js_hex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/asn1js/hex */ \\\"./lib/lib/asn1js/hex.js\\\");\\n/* harmony import */ var _lib_asn1js_base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/asn1js/base64 */ \\\"./lib/lib/asn1js/base64.js\\\");\\n/* harmony import */ var _lib_asn1js_asn1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/asn1js/asn1 */ \\\"./lib/lib/asn1js/asn1.js\\\");\\n/* harmony import */ var _lib_jsbn_rsa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/jsbn/rsa */ \\\"./lib/lib/jsbn/rsa.js\\\");\\n/* harmony import */ var _lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/jsbn/jsbn */ \\\"./lib/lib/jsbn/jsbn.js\\\");\\n/* harmony import */ var _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/jsrsasign/asn1-1.0 */ \\\"./lib/lib/jsrsasign/asn1-1.0.js\\\");\\nvar __extends = (undefined \u0026\u0026 undefined.__extends) || (function () {\\n    var extendStatics = function (d, b) {\\n        extendStatics = Object.setPrototypeOf ||\\n            ({ __proto__: [] } instanceof Array \u0026\u0026 function (d, b) { d.__proto__ = b; }) ||\\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\\n        return extendStatics(d, b);\\n    };\\n    return function (d, b) {\\n        if (typeof b !== \\\"function\\\" \u0026\u0026 b !== null)\\n            throw new TypeError(\\\"Class extends value \\\" + String(b) + \\\" is not a constructor or null\\\");\\n        extendStatics(d, b);\\n        function __() { this.constructor = d; }\\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\\n    };\\n})();\\n\\n\\n\\n\\n\\n\\n\\n/**\\n * Create a new JSEncryptRSAKey that extends Tom Wu's RSA key object.\\n * This object is just a decorator for parsing the key parameter\\n * @param {string|Object} key - The key in string format, or an object containing\\n * the parameters needed to build a RSAKey object.\\n * @constructor\\n */\\nvar JSEncryptRSAKey = /** @class */ (function (_super) {\\n    __extends(JSEncryptRSAKey, _super);\\n    function JSEncryptRSAKey(key) {\\n        var _this = _super.call(this) || this;\\n        // Call the super constructor.\\n        //  RSAKey.call(this);\\n        // If a key key was provided.\\n        if (key) {\\n            // If this is a string...\\n            if (typeof key === \\\"string\\\") {\\n                _this.parseKey(key);\\n            }\\n            else if (JSEncryptRSAKey.hasPrivateKeyProperty(key) ||\\n                JSEncryptRSAKey.hasPublicKeyProperty(key)) {\\n                // Set the values for the key.\\n                _this.parsePropertiesFrom(key);\\n            }\\n        }\\n        return _this;\\n    }\\n    /**\\n     * Method to parse a pem encoded string containing both a public or private key.\\n     * The method will translate the pem encoded string in a der encoded string and\\n     * will parse private key and public key parameters. This method accepts public key\\n     * in the rsaencryption pkcs #1 format (oid: 1.2.840.113549.1.1.1).\\n     *\\n     * @todo Check how many rsa formats use the same format of pkcs #1.\\n     *\\n     * The format is defined as:\\n     * PublicKeyInfo ::= SEQUENCE {\\n     *   algorithm       AlgorithmIdentifier,\\n     *   PublicKey       BIT STRING\\n     * }\\n     * Where AlgorithmIdentifier is:\\n     * AlgorithmIdentifier ::= SEQUENCE {\\n     *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm\\n     *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)\\n     * }\\n     * and PublicKey is a SEQUENCE encapsulated in a BIT STRING\\n     * RSAPublicKey ::= SEQUENCE {\\n     *   modulus           INTEGER,  -- n\\n     *   publicExponent    INTEGER   -- e\\n     * }\\n     * it's possible to examine the structure of the keys obtained from openssl using\\n     * an asn.1 dumper as the one used here to parse the components: http://lapo.it/asn1js/\\n     * @argument {string} pem the pem encoded string, can include the BEGIN/END header/footer\\n     * @private\\n     */\\n    JSEncryptRSAKey.prototype.parseKey = function (pem) {\\n        try {\\n            var modulus = 0;\\n            var public_exponent = 0;\\n            var reHex = /^\\\\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\\\\s*)+$/;\\n            var der = reHex.test(pem) ? _lib_asn1js_hex__WEBPACK_IMPORTED_MODULE_1__.Hex.decode(pem) : _lib_asn1js_base64__WEBPACK_IMPORTED_MODULE_2__.Base64.unarmor(pem);\\n            var asn1 = _lib_asn1js_asn1__WEBPACK_IMPORTED_MODULE_3__.ASN1.decode(der);\\n            // Fixes a bug with OpenSSL 1.0+ private keys\\n            if (asn1.sub.length === 3) {\\n                asn1 = asn1.sub[2].sub[0];\\n            }\\n            if (asn1.sub.length === 9) {\\n                // Parse the private key.\\n                modulus = asn1.sub[1].getHexStringValue(); // bigint\\n                this.n = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(modulus, 16);\\n                public_exponent = asn1.sub[2].getHexStringValue(); // int\\n                this.e = parseInt(public_exponent, 16);\\n                var private_exponent = asn1.sub[3].getHexStringValue(); // bigint\\n                this.d = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(private_exponent, 16);\\n                var prime1 = asn1.sub[4].getHexStringValue(); // bigint\\n                this.p = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(prime1, 16);\\n                var prime2 = asn1.sub[5].getHexStringValue(); // bigint\\n                this.q = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(prime2, 16);\\n                var exponent1 = asn1.sub[6].getHexStringValue(); // bigint\\n                this.dmp1 = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(exponent1, 16);\\n                var exponent2 = asn1.sub[7].getHexStringValue(); // bigint\\n                this.dmq1 = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(exponent2, 16);\\n                var coefficient = asn1.sub[8].getHexStringValue(); // bigint\\n                this.coeff = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(coefficient, 16);\\n            }\\n            else if (asn1.sub.length === 2) {\\n                if (asn1.sub[0].sub) {\\n                    // Parse ASN.1 SubjectPublicKeyInfo type as defined by X.509\\n                    var bit_string = asn1.sub[1];\\n                    var sequence = bit_string.sub[0];\\n                    modulus = sequence.sub[0].getHexStringValue();\\n                    this.n = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(modulus, 16);\\n                    public_exponent = sequence.sub[1].getHexStringValue();\\n                    this.e = parseInt(public_exponent, 16);\\n                }\\n                else {\\n                    // Parse ASN.1 RSAPublicKey type as defined by PKCS #1\\n                    modulus = asn1.sub[0].getHexStringValue();\\n                    this.n = (0,_lib_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_5__.parseBigInt)(modulus, 16);\\n                    public_exponent = asn1.sub[1].getHexStringValue();\\n                    this.e = parseInt(public_exponent, 16);\\n                }\\n            }\\n            else {\\n                return false;\\n            }\\n            return true;\\n        }\\n        catch (ex) {\\n            return false;\\n        }\\n    };\\n    /**\\n     * Translate rsa parameters in a hex encoded string representing the rsa key.\\n     *\\n     * The translation follow the ASN.1 notation :\\n     * RSAPrivateKey ::= SEQUENCE {\\n     *   version           Version,\\n     *   modulus           INTEGER,  -- n\\n     *   publicExponent    INTEGER,  -- e\\n     *   privateExponent   INTEGER,  -- d\\n     *   prime1            INTEGER,  -- p\\n     *   prime2            INTEGER,  -- q\\n     *   exponent1         INTEGER,  -- d mod (p1)\\n     *   exponent2         INTEGER,  -- d mod (q-1)\\n     *   coefficient       INTEGER,  -- (inverse of q) mod p\\n     * }\\n     * @returns {string}  DER Encoded String representing the rsa private key\\n     * @private\\n     */\\n    JSEncryptRSAKey.prototype.getPrivateBaseKey = function () {\\n        var options = {\\n            array: [\\n                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ int: 0 }),\\n                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.n }),\\n                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ int: this.e }),\\n                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.d }),\\n                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.p }),\\n                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.q }),\\n                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.dmp1 }),\\n                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.dmq1 }),\\n                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.coeff }),\\n            ],\\n        };\\n        var seq = new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERSequence(options);\\n        return seq.getEncodedHex();\\n    };\\n    /**\\n     * base64 (pem) encoded version of the DER encoded representation\\n     * @returns {string} pem encoded representation without header and footer\\n     * @public\\n     */\\n    JSEncryptRSAKey.prototype.getPrivateBaseKeyB64 = function () {\\n        return (0,_lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__.hex2b64)(this.getPrivateBaseKey());\\n    };\\n    /**\\n     * Translate rsa parameters in a hex encoded string representing the rsa public key.\\n     * The representation follow the ASN.1 notation :\\n     * PublicKeyInfo ::= SEQUENCE {\\n     *   algorithm       AlgorithmIdentifier,\\n     *   PublicKey       BIT STRING\\n     * }\\n     * Where AlgorithmIdentifier is:\\n     * AlgorithmIdentifier ::= SEQUENCE {\\n     *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm\\n     *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)\\n     * }\\n     * and PublicKey is a SEQUENCE encapsulated in a BIT STRING\\n     * RSAPublicKey ::= SEQUENCE {\\n     *   modulus           INTEGER,  -- n\\n     *   publicExponent    INTEGER   -- e\\n     * }\\n     * @returns {string} DER Encoded String representing the rsa public key\\n     * @private\\n     */\\n    JSEncryptRSAKey.prototype.getPublicBaseKey = function () {\\n        var first_sequence = new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERSequence({\\n            array: [\\n                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERObjectIdentifier({ oid: \\\"1.2.840.113549.1.1.1\\\" }),\\n                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERNull(),\\n            ],\\n        });\\n        var second_sequence = new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERSequence({\\n            array: [\\n                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ bigint: this.n }),\\n                new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERInteger({ int: this.e }),\\n            ],\\n        });\\n        var bit_string = new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERBitString({\\n            hex: \\\"00\\\" + second_sequence.getEncodedHex(),\\n        });\\n        var seq = new _lib_jsrsasign_asn1_1_0__WEBPACK_IMPORTED_MODULE_6__.KJUR.asn1.DERSequence({\\n            array: [first_sequence, bit_string],\\n        });\\n        return seq.getEncodedHex();\\n    };\\n    /**\\n     * base64 (pem) encoded version of the DER encoded representation\\n     * @returns {string} pem encoded representation without header and footer\\n     * @public\\n     */\\n    JSEncryptRSAKey.prototype.getPublicBaseKeyB64 = function () {\\n        return (0,_lib_jsbn_base64__WEBPACK_IMPORTED_MODULE_0__.hex2b64)(this.getPublicBaseKey());\\n    };\\n    /**\\n     * wrap the string in block of width chars. The default value for rsa keys is 64\\n     * characters.\\n     * @param {string} str the pem encoded string without header and footer\\n     * @param {Number} [width=64] - the length the string has to be wrapped at\\n     * @returns {string}\\n     * @private\\n     */\\n    JSEncryptRSAKey.wordwrap = function (str, width) {\\n        width = width || 64;\\n        if (!str) {\\n            return str;\\n        }\\n        var regex = \\\"(.{1,\\\" + width + \\\"})( +|$\\\\n?)|(.{1,\\\" + width + \\\"})\\\";\\n        return str.match(RegExp(regex, \\\"g\\\")).join(\\\"\\\\n\\\");\\n    };\\n    /**\\n     * Retrieve the pem encoded private key\\n     * @returns {string} the pem encoded private key with header/footer\\n     * @public\\n     */\\n    JSEncryptRSAKey.prototype.getPrivateKey = function () {\\n        var key = \\\"-----BEGIN RSA PRIVATE KEY-----\\\\n\\\";\\n        key += JSEncryptRSAKey.wordwrap(this.getPrivateBaseKeyB64()) + \\\"\\\\n\\\";\\n        key += \\\"-----END RSA PRIVATE KEY-----\\\";\\n        return key;\\n    };\\n    /**\\n     * Retrieve the pem encoded public key\\n     * @returns {string} the pem encoded public key with header/footer\\n     * @public\\n     */\\n    JSEncryptRSAKey.prototype.getPublicKey = function () {\\n        var key = \\\"-----BEGIN PUBLIC KEY-----\\\\n\\\";\\n        key += JSEncryptRSAKey.wordwrap(this.getPublicBaseKeyB64()) + \\\"\\\\n\\\";\\n        key += \\\"-----END PUBLIC KEY-----\\\";\\n        return key;\\n    };\\n    /**\\n     * Check if the object contains the necessary parameters to populate the rsa modulus\\n     * and public exponent parameters.\\n     * @param {Object} [obj={}] - An object that may contain the two public key\\n     * parameters\\n     * @returns {boolean} true if the object contains both the modulus and the public exponent\\n     * properties (n and e)\\n     * @todo check for types of n and e. N should be a parseable bigInt object, E should\\n     * be a parseable integer number\\n     * @private\\n     */\\n    JSEncryptRSAKey.hasPublicKeyProperty = function (obj) {\\n        obj = obj || {};\\n        return obj.hasOwnProperty(\\\"n\\\") \u0026\u0026 obj.hasOwnProperty(\\\"e\\\");\\n    };\\n    /**\\n     * Check if the object contains ALL the parameters of an RSA key.\\n     * @param {Object} [obj={}] - An object that may contain nine rsa key\\n     * parameters\\n     * @returns {boolean} true if the object contains all the parameters needed\\n     * @todo check for types of the parameters all the parameters but the public exponent\\n     * should be parseable bigint objects, the public exponent should be a parseable integer number\\n     * @private\\n     */\\n    JSEncryptRSAKey.hasPrivateKeyProperty = function (obj) {\\n        obj = obj || {};\\n        return (obj.hasOwnProperty(\\\"n\\\") \u0026\u0026\\n            obj.hasOwnProperty(\\\"e\\\") \u0026\u0026\\n            obj.hasOwnProperty(\\\"d\\\") \u0026\u0026\\n            obj.hasOwnProperty(\\\"p\\\") \u0026\u0026\\n            obj.hasOwnProperty(\\\"q\\\") \u0026\u0026\\n            obj.hasOwnProperty(\\\"dmp1\\\") \u0026\u0026\\n            obj.hasOwnProperty(\\\"dmq1\\\") \u0026\u0026\\n            obj.hasOwnProperty(\\\"coeff\\\"));\\n    };\\n    /**\\n     * Parse the properties of obj in the current rsa object. Obj should AT LEAST\\n     * include the modulus and public exponent (n, e) parameters.\\n     * @param {Object} obj - the object containing rsa parameters\\n     * @private\\n     */\\n    JSEncryptRSAKey.prototype.parsePropertiesFrom = function (obj) {\\n        this.n = obj.n;\\n        this.e = obj.e;\\n        if (obj.hasOwnProperty(\\\"d\\\")) {\\n            this.d = obj.d;\\n            this.p = obj.p;\\n            this.q = obj.q;\\n            this.dmp1 = obj.dmp1;\\n            this.dmq1 = obj.dmq1;\\n            this.coeff = obj.coeff;\\n        }\\n    };\\n    return JSEncryptRSAKey;\\n}(_lib_jsbn_rsa__WEBPACK_IMPORTED_MODULE_4__.RSAKey));\\n\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/JSEncryptRSAKey.js?\");","","/***/ }),","","/***/ \"./lib/index.js\":","/*!**********************!*\\","  !*** ./lib/index.js ***!","  \\**********************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"JSEncrypt\\\": () =\u003e (/* reexport safe */ _JSEncrypt__WEBPACK_IMPORTED_MODULE_0__.JSEncrypt),\\n/* harmony export */   \\\"default\\\": () =\u003e (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\n/* harmony import */ var _JSEncrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSEncrypt */ \\\"./lib/JSEncrypt.js\\\");\\n\\n\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_JSEncrypt__WEBPACK_IMPORTED_MODULE_0__.JSEncrypt);\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/index.js?\");","","/***/ }),","","/***/ \"./lib/lib/asn1js/asn1.js\":","/*!********************************!*\\","  !*** ./lib/lib/asn1js/asn1.js ***!","  \\********************************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"ASN1\\\": () =\u003e (/* binding */ ASN1),\\n/* harmony export */   \\\"ASN1Tag\\\": () =\u003e (/* binding */ ASN1Tag),\\n/* harmony export */   \\\"Stream\\\": () =\u003e (/* binding */ Stream)\\n/* harmony export */ });\\n/* harmony import */ var _int10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./int10 */ \\\"./lib/lib/asn1js/int10.js\\\");\\n// ASN.1 JavaScript decoder\\n// Copyright (c) 2008-2014 Lapo Luchini \u003clapo@lapo.it\u003e\\n// Permission to use, copy, modify, and/or distribute this software for any\\n// purpose with or without fee is hereby granted, provided that the above\\n// copyright notice and this permission notice appear in all copies.\\n//\\n// THE SOFTWARE IS PROVIDED \\\"AS IS\\\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES\\n// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF\\n// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR\\n// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES\\n// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN\\n// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF\\n// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.\\n/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */\\n/*global oids */\\n\\nvar ellipsis = \\\"\\\\u2026\\\";\\nvar reTimeS = /^(\\\\d\\\\d)(0[1-9]|1[0-2])(0[1-9]|[12]\\\\d|3[01])([01]\\\\d|2[0-3])(?:([0-5]\\\\d)(?:([0-5]\\\\d)(?:[.,](\\\\d{1,3}))?)?)?(Z|[-+](?:[0]\\\\d|1[0-2])([0-5]\\\\d)?)?$/;\\nvar reTimeL = /^(\\\\d\\\\d\\\\d\\\\d)(0[1-9]|1[0-2])(0[1-9]|[12]\\\\d|3[01])([01]\\\\d|2[0-3])(?:([0-5]\\\\d)(?:([0-5]\\\\d)(?:[.,](\\\\d{1,3}))?)?)?(Z|[-+](?:[0]\\\\d|1[0-2])([0-5]\\\\d)?)?$/;\\nfunction stringCut(str, len) {\\n    if (str.length \u003e len) {\\n        str = str.substring(0, len) + ellipsis;\\n    }\\n    return str;\\n}\\nvar Stream = /** @class */ (function () {\\n    function Stream(enc, pos) {\\n        this.hexDigits = \\\"0123456789ABCDEF\\\";\\n        if (enc instanceof Stream) {\\n            this.enc = enc.enc;\\n            this.pos = enc.pos;\\n        }\\n        else {\\n            // enc should be an array or a binary string\\n            this.enc = enc;\\n            this.pos = pos;\\n        }\\n    }\\n    Stream.prototype.get = function (pos) {\\n        if (pos === undefined) {\\n            pos = this.pos++;\\n        }\\n        if (pos \u003e= this.enc.length) {\\n            throw new Error(\\\"Requesting byte offset \\\".concat(pos, \\\" on a stream of length \\\").concat(this.enc.length));\\n        }\\n        return (\\\"string\\\" === typeof this.enc) ? this.enc.charCodeAt(pos) : this.enc[pos];\\n    };\\n    Stream.prototype.hexByte = function (b) {\\n        return this.hexDigits.charAt((b \u003e\u003e 4) \u0026 0xF) + this.hexDigits.charAt(b \u0026 0xF);\\n    };\\n    Stream.prototype.hexDump = function (start, end, raw) {\\n        var s = \\\"\\\";\\n        for (var i = start; i \u003c end; ++i) {\\n            s += this.hexByte(this.get(i));\\n            if (raw !== true) {\\n                switch (i \u0026 0xF) {\\n                    case 0x7:\\n                        s += \\\"  \\\";\\n                        break;\\n                    case 0xF:\\n                        s += \\\"\\\\n\\\";\\n                        break;\\n                    default:\\n                        s += \\\" \\\";\\n                }\\n            }\\n        }\\n        return s;\\n    };\\n    Stream.prototype.isASCII = function (start, end) {\\n        for (var i = start; i \u003c end; ++i) {\\n            var c = this.get(i);\\n            if (c \u003c 32 || c \u003e 176) {\\n                return false;\\n            }\\n        }\\n        return true;\\n    };\\n    Stream.prototype.parseStringISO = function (start, end) {\\n        var s = \\\"\\\";\\n        for (var i = start; i \u003c end; ++i) {\\n            s += String.fromCharCode(this.get(i));\\n        }\\n        return s;\\n    };\\n    Stream.prototype.parseStringUTF = function (start, end) {\\n        var s = \\\"\\\";\\n        for (var i = start; i \u003c end;) {\\n            var c = this.get(i++);\\n            if (c \u003c 128) {\\n                s += String.fromCharCode(c);\\n            }\\n            else if ((c \u003e 191) \u0026\u0026 (c \u003c 224)) {\\n                s += String.fromCharCode(((c \u0026 0x1F) \u003c\u003c 6) | (this.get(i++) \u0026 0x3F));\\n            }\\n            else {\\n                s += String.fromCharCode(((c \u0026 0x0F) \u003c\u003c 12) | ((this.get(i++) \u0026 0x3F) \u003c\u003c 6) | (this.get(i++) \u0026 0x3F));\\n            }\\n        }\\n        return s;\\n    };\\n    Stream.prototype.parseStringBMP = function (start, end) {\\n        var str = \\\"\\\";\\n        var hi;\\n        var lo;\\n        for (var i = start; i \u003c end;) {\\n            hi = this.get(i++);\\n            lo = this.get(i++);\\n            str += String.fromCharCode((hi \u003c\u003c 8) | lo);\\n        }\\n        return str;\\n    };\\n    Stream.prototype.parseTime = function (start, end, shortYear) {\\n        var s = this.parseStringISO(start, end);\\n        var m = (shortYear ? reTimeS : reTimeL).exec(s);\\n        if (!m) {\\n            return \\\"Unrecognized time: \\\" + s;\\n        }\\n        if (shortYear) {\\n            // to avoid querying the timer, use the fixed range [1970, 2069]\\n            // it will conform with ITU X.400 [-10, +40] sliding this until 2030\\n            m[1] = +m[1];\\n            m[1] += (+m[1] \u003c 70) ? 2000 : 1900;\\n        }\\n        s = m[1] + \\\"-\\\" + m[2] + \\\"-\\\" + m[3] + \\\" \\\" + m[4];\\n        if (m[5]) {\\n            s += \\\":\\\" + m[5];\\n            if (m[6]) {\\n                s += \\\":\\\" + m[6];\\n                if (m[7]) {\\n                    s += \\\".\\\" + m[7];\\n                }\\n            }\\n        }\\n        if (m[8]) {\\n            s += \\\" UTC\\\";\\n            if (m[8] != \\\"Z\\\") {\\n                s += m[8];\\n                if (m[9]) {\\n                    s += \\\":\\\" + m[9];\\n                }\\n            }\\n        }\\n        return s;\\n    };\\n    Stream.prototype.parseInteger = function (start, end) {\\n        var v = this.get(start);\\n        var neg = (v \u003e 127);\\n        var pad = neg ? 255 : 0;\\n        var len;\\n        var s = \\\"\\\";\\n        // skip unuseful bits (not allowed in DER)\\n        while (v == pad \u0026\u0026 ++start \u003c end) {\\n            v = this.get(start);\\n        }\\n        len = end - start;\\n        if (len === 0) {\\n            return neg ? -1 : 0;\\n        }\\n        // show bit length of huge integers\\n        if (len \u003e 4) {\\n            s = v;\\n            len \u003c\u003c= 3;\\n            while (((+s ^ pad) \u0026 0x80) == 0) {\\n                s = +s \u003c\u003c 1;\\n                --len;\\n            }\\n            s = \\\"(\\\" + len + \\\" bit)\\\\n\\\";\\n        }\\n        // decode the integer\\n        if (neg) {\\n            v = v - 256;\\n        }\\n        var n = new _int10__WEBPACK_IMPORTED_MODULE_0__.Int10(v);\\n        for (var i = start + 1; i \u003c end; ++i) {\\n            n.mulAdd(256, this.get(i));\\n        }\\n        return s + n.toString();\\n    };\\n    Stream.prototype.parseBitString = function (start, end, maxLength) {\\n        var unusedBit = this.get(start);\\n        var lenBit = ((end - start - 1) \u003c\u003c 3) - unusedBit;\\n        var intro = \\\"(\\\" + lenBit + \\\" bit)\\\\n\\\";\\n        var s = \\\"\\\";\\n        for (var i = start + 1; i \u003c end; ++i) {\\n            var b = this.get(i);\\n            var skip = (i == end - 1) ? unusedBit : 0;\\n            for (var j = 7; j \u003e= skip; --j) {\\n                s += (b \u003e\u003e j) \u0026 1 ? \\\"1\\\" : \\\"0\\\";\\n            }\\n            if (s.length \u003e maxLength) {\\n                return intro + stringCut(s, maxLength);\\n            }\\n        }\\n        return intro + s;\\n    };\\n    Stream.prototype.parseOctetString = function (start, end, maxLength) {\\n        if (this.isASCII(start, end)) {\\n            return stringCut(this.parseStringISO(start, end), maxLength);\\n        }\\n        var len = end - start;\\n        var s = \\\"(\\\" + len + \\\" byte)\\\\n\\\";\\n        maxLength /= 2; // we work in bytes\\n        if (len \u003e maxLength) {\\n            end = start + maxLength;\\n        }\\n        for (var i = start; i \u003c end; ++i) {\\n            s += this.hexByte(this.get(i));\\n        }\\n        if (len \u003e maxLength) {\\n            s += ellipsis;\\n        }\\n        return s;\\n    };\\n    Stream.prototype.parseOID = function (start, end, maxLength) {\\n        var s = \\\"\\\";\\n        var n = new _int10__WEBPACK_IMPORTED_MODULE_0__.Int10();\\n        var bits = 0;\\n        for (var i = start; i \u003c end; ++i) {\\n            var v = this.get(i);\\n            n.mulAdd(128, v \u0026 0x7F);\\n            bits += 7;\\n            if (!(v \u0026 0x80)) { // finished\\n                if (s === \\\"\\\") {\\n                    n = n.simplify();\\n                    if (n instanceof _int10__WEBPACK_IMPORTED_MODULE_0__.Int10) {\\n                        n.sub(80);\\n                        s = \\\"2.\\\" + n.toString();\\n                    }\\n                    else {\\n                        var m = n \u003c 80 ? n \u003c 40 ? 0 : 1 : 2;\\n                        s = m + \\\".\\\" + (n - m * 40);\\n                    }\\n                }\\n                else {\\n                    s += \\\".\\\" + n.toString();\\n                }\\n                if (s.length \u003e maxLength) {\\n                    return stringCut(s, maxLength);\\n                }\\n                n = new _int10__WEBPACK_IMPORTED_MODULE_0__.Int10();\\n                bits = 0;\\n            }\\n        }\\n        if (bits \u003e 0) {\\n            s += \\\".incomplete\\\";\\n        }\\n        return s;\\n    };\\n    return Stream;\\n}());\\n\\nvar ASN1 = /** @class */ (function () {\\n    function ASN1(stream, header, length, tag, sub) {\\n        if (!(tag instanceof ASN1Tag)) {\\n            throw new Error(\\\"Invalid tag value.\\\");\\n        }\\n        this.stream = stream;\\n        this.header = header;\\n        this.length = length;\\n        this.tag = tag;\\n        this.sub = sub;\\n    }\\n    ASN1.prototype.typeName = function () {\\n        switch (this.tag.tagClass) {\\n            case 0: // universal\\n                switch (this.tag.tagNumber) {\\n                    case 0x00:\\n                        return \\\"EOC\\\";\\n                    case 0x01:\\n                        return \\\"BOOLEAN\\\";\\n                    case 0x02:\\n                        return \\\"INTEGER\\\";\\n                    case 0x03:\\n                        return \\\"BIT_STRING\\\";\\n                    case 0x04:\\n                        return \\\"OCTET_STRING\\\";\\n                    case 0x05:\\n                        return \\\"NULL\\\";\\n                    case 0x06:\\n                        return \\\"OBJECT_IDENTIFIER\\\";\\n                    case 0x07:\\n                        return \\\"ObjectDescriptor\\\";\\n                    case 0x08:\\n                        return \\\"EXTERNAL\\\";\\n                    case 0x09:\\n                        return \\\"REAL\\\";\\n                    case 0x0A:\\n                        return \\\"ENUMERATED\\\";\\n                    case 0x0B:\\n                        return \\\"EMBEDDED_PDV\\\";\\n                    case 0x0C:\\n                        return \\\"UTF8String\\\";\\n                    case 0x10:\\n                        return \\\"SEQUENCE\\\";\\n                    case 0x11:\\n                        return \\\"SET\\\";\\n                    case 0x12:\\n                        return \\\"NumericString\\\";\\n                    case 0x13:\\n                        return \\\"PrintableString\\\"; // ASCII subset\\n                    case 0x14:\\n                        return \\\"TeletexString\\\"; // aka T61String\\n                    case 0x15:\\n                        return \\\"VideotexString\\\";\\n                    case 0x16:\\n                        return \\\"IA5String\\\"; // ASCII\\n                    case 0x17:\\n                        return \\\"UTCTime\\\";\\n                    case 0x18:\\n                        return \\\"GeneralizedTime\\\";\\n                    case 0x19:\\n                        return \\\"GraphicString\\\";\\n                    case 0x1A:\\n                        return \\\"VisibleString\\\"; // ASCII subset\\n                    case 0x1B:\\n                        return \\\"GeneralString\\\";\\n                    case 0x1C:\\n                        return \\\"UniversalString\\\";\\n                    case 0x1E:\\n                        return \\\"BMPString\\\";\\n                }\\n                return \\\"Universal_\\\" + this.tag.tagNumber.toString();\\n            case 1:\\n                return \\\"Application_\\\" + this.tag.tagNumber.toString();\\n            case 2:\\n                return \\\"[\\\" + this.tag.tagNumber.toString() + \\\"]\\\"; // Context\\n            case 3:\\n                return \\\"Private_\\\" + this.tag.tagNumber.toString();\\n        }\\n    };\\n    ASN1.prototype.content = function (maxLength) {\\n        if (this.tag === undefined) {\\n            return null;\\n        }\\n        if (maxLength === undefined) {\\n            maxLength = Infinity;\\n        }\\n        var content = this.posContent();\\n        var len = Math.abs(this.length);\\n        if (!this.tag.isUniversal()) {\\n            if (this.sub !== null) {\\n                return \\\"(\\\" + this.sub.length + \\\" elem)\\\";\\n            }\\n            return this.stream.parseOctetString(content, content + len, maxLength);\\n        }\\n        switch (this.tag.tagNumber) {\\n            case 0x01: // BOOLEAN\\n                return (this.stream.get(content) === 0) ? \\\"false\\\" : \\\"true\\\";\\n            case 0x02: // INTEGER\\n                return this.stream.parseInteger(content, content + len);\\n            case 0x03: // BIT_STRING\\n                return this.sub ? \\\"(\\\" + this.sub.length + \\\" elem)\\\" :\\n                    this.stream.parseBitString(content, content + len, maxLength);\\n            case 0x04: // OCTET_STRING\\n                return this.sub ? \\\"(\\\" + this.sub.length + \\\" elem)\\\" :\\n                    this.stream.parseOctetString(content, content + len, maxLength);\\n            // case 0x05: // NULL\\n            case 0x06: // OBJECT_IDENTIFIER\\n                return this.stream.parseOID(content, content + len, maxLength);\\n            // case 0x07: // ObjectDescriptor\\n            // case 0x08: // EXTERNAL\\n            // case 0x09: // REAL\\n            // case 0x0A: // ENUMERATED\\n            // case 0x0B: // EMBEDDED_PDV\\n            case 0x10: // SEQUENCE\\n            case 0x11: // SET\\n                if (this.sub !== null) {\\n                    return \\\"(\\\" + this.sub.length + \\\" elem)\\\";\\n                }\\n                else {\\n                    return \\\"(no elem)\\\";\\n                }\\n            case 0x0C: // UTF8String\\n                return stringCut(this.stream.parseStringUTF(content, content + len), maxLength);\\n            case 0x12: // NumericString\\n            case 0x13: // PrintableString\\n            case 0x14: // TeletexString\\n            case 0x15: // VideotexString\\n            case 0x16: // IA5String\\n            // case 0x19: // GraphicString\\n            case 0x1A: // VisibleString\\n                // case 0x1B: // GeneralString\\n                // case 0x1C: // UniversalString\\n                return stringCut(this.stream.parseStringISO(content, content + len), maxLength);\\n            case 0x1E: // BMPString\\n                return stringCut(this.stream.parseStringBMP(content, content + len), maxLength);\\n            case 0x17: // UTCTime\\n            case 0x18: // GeneralizedTime\\n                return this.stream.parseTime(content, content + len, (this.tag.tagNumber == 0x17));\\n        }\\n        return null;\\n    };\\n    ASN1.prototype.toString = function () {\\n        return this.typeName() + \\\"@\\\" + this.stream.pos + \\\"[header:\\\" + this.header + \\\",length:\\\" + this.length + \\\",sub:\\\" + ((this.sub === null) ? \\\"null\\\" : this.sub.length) + \\\"]\\\";\\n    };\\n    ASN1.prototype.toPrettyString = function (indent) {\\n        if (indent === undefined) {\\n            indent = \\\"\\\";\\n        }\\n        var s = indent + this.typeName() + \\\" @\\\" + this.stream.pos;\\n        if (this.length \u003e= 0) {\\n            s += \\\"+\\\";\\n        }\\n        s += this.length;\\n        if (this.tag.tagConstructed) {\\n            s += \\\" (constructed)\\\";\\n        }\\n        else if ((this.tag.isUniversal() \u0026\u0026 ((this.tag.tagNumber == 0x03) || (this.tag.tagNumber == 0x04))) \u0026\u0026 (this.sub !== null)) {\\n            s += \\\" (encapsulates)\\\";\\n        }\\n        s += \\\"\\\\n\\\";\\n        if (this.sub !== null) {\\n            indent += \\\"  \\\";\\n            for (var i = 0, max = this.sub.length; i \u003c max; ++i) {\\n                s += this.sub[i].toPrettyString(indent);\\n            }\\n        }\\n        return s;\\n    };\\n    ASN1.prototype.posStart = function () {\\n        return this.stream.pos;\\n    };\\n    ASN1.prototype.posContent = function () {\\n        return this.stream.pos + this.header;\\n    };\\n    ASN1.prototype.posEnd = function () {\\n        return this.stream.pos + this.header + Math.abs(this.length);\\n    };\\n    ASN1.prototype.toHexString = function () {\\n        return this.stream.hexDump(this.posStart(), this.posEnd(), true);\\n    };\\n    ASN1.decodeLength = function (stream) {\\n        var buf = stream.get();\\n        var len = buf \u0026 0x7F;\\n        if (len == buf) {\\n            return len;\\n        }\\n        // no reason to use Int10, as it would be a huge buffer anyways\\n        if (len \u003e 6) {\\n            throw new Error(\\\"Length over 48 bits not supported at position \\\" + (stream.pos - 1));\\n        }\\n        if (len === 0) {\\n            return null;\\n        } // undefined\\n        buf = 0;\\n        for (var i = 0; i \u003c len; ++i) {\\n            buf = (buf * 256) + stream.get();\\n        }\\n        return buf;\\n    };\\n    /**\\n     * Retrieve the hexadecimal value (as a string) of the current ASN.1 element\\n     * @returns {string}\\n     * @public\\n     */\\n    ASN1.prototype.getHexStringValue = function () {\\n        var hexString = this.toHexString();\\n        var offset = this.header * 2;\\n        var length = this.length * 2;\\n        return hexString.substr(offset, length);\\n    };\\n    ASN1.decode = function (str) {\\n        var stream;\\n        if (!(str instanceof Stream)) {\\n            stream = new Stream(str, 0);\\n        }\\n        else {\\n            stream = str;\\n        }\\n        var streamStart = new Stream(stream);\\n        var tag = new ASN1Tag(stream);\\n        var len = ASN1.decodeLength(stream);\\n        var start = stream.pos;\\n        var header = start - streamStart.pos;\\n        var sub = null;\\n        var getSub = function () {\\n            var ret = [];\\n            if (len !== null) {\\n                // definite length\\n                var end = start + len;\\n                while (stream.pos \u003c end) {\\n                    ret[ret.length] = ASN1.decode(stream);\\n                }\\n                if (stream.pos != end) {\\n                    throw new Error(\\\"Content size is not correct for container starting at offset \\\" + start);\\n                }\\n            }\\n            else {\\n                // undefined length\\n                try {\\n                    for (;;) {\\n                        var s = ASN1.decode(stream);\\n                        if (s.tag.isEOC()) {\\n                            break;\\n                        }\\n                        ret[ret.length] = s;\\n                    }\\n                    len = start - stream.pos; // undefined lengths are represented as negative values\\n                }\\n                catch (e) {\\n                    throw new Error(\\\"Exception while decoding undefined length content: \\\" + e);\\n                }\\n            }\\n            return ret;\\n        };\\n        if (tag.tagConstructed) {\\n            // must have valid content\\n            sub = getSub();\\n        }\\n        else if (tag.isUniversal() \u0026\u0026 ((tag.tagNumber == 0x03) || (tag.tagNumber == 0x04))) {\\n            // sometimes BitString and OctetString are used to encapsulate ASN.1\\n            try {\\n                if (tag.tagNumber == 0x03) {\\n                    if (stream.get() != 0) {\\n                        throw new Error(\\\"BIT STRINGs with unused bits cannot encapsulate.\\\");\\n                    }\\n                }\\n                sub = getSub();\\n                for (var i = 0; i \u003c sub.length; ++i) {\\n                    if (sub[i].tag.isEOC()) {\\n                        throw new Error(\\\"EOC is not supposed to be actual content.\\\");\\n                    }\\n                }\\n            }\\n            catch (e) {\\n                // but silently ignore when they don't\\n                sub = null;\\n            }\\n        }\\n        if (sub === null) {\\n            if (len === null) {\\n                throw new Error(\\\"We can't skip over an invalid tag with undefined length at offset \\\" + start);\\n            }\\n            stream.pos = start + Math.abs(len);\\n        }\\n        return new ASN1(streamStart, header, len, tag, sub);\\n    };\\n    return ASN1;\\n}());\\n\\nvar ASN1Tag = /** @class */ (function () {\\n    function ASN1Tag(stream) {\\n        var buf = stream.get();\\n        this.tagClass = buf \u003e\u003e 6;\\n        this.tagConstructed = ((buf \u0026 0x20) !== 0);\\n        this.tagNumber = buf \u0026 0x1F;\\n        if (this.tagNumber == 0x1F) { // long tag\\n            var n = new _int10__WEBPACK_IMPORTED_MODULE_0__.Int10();\\n            do {\\n                buf = stream.get();\\n                n.mulAdd(128, buf \u0026 0x7F);\\n            } while (buf \u0026 0x80);\\n            this.tagNumber = n.simplify();\\n        }\\n    }\\n    ASN1Tag.prototype.isUniversal = function () {\\n        return this.tagClass === 0x00;\\n    };\\n    ASN1Tag.prototype.isEOC = function () {\\n        return this.tagClass === 0x00 \u0026\u0026 this.tagNumber === 0x00;\\n    };\\n    return ASN1Tag;\\n}());\\n\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/lib/asn1js/asn1.js?\");","","/***/ }),","","/***/ \"./lib/lib/asn1js/base64.js\":","/*!**********************************!*\\","  !*** ./lib/lib/asn1js/base64.js ***!","  \\**********************************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"Base64\\\": () =\u003e (/* binding */ Base64)\\n/* harmony export */ });\\n// Base64 JavaScript decoder\\n// Copyright (c) 2008-2013 Lapo Luchini \u003clapo@lapo.it\u003e\\n// Permission to use, copy, modify, and/or distribute this software for any\\n// purpose with or without fee is hereby granted, provided that the above\\n// copyright notice and this permission notice appear in all copies.\\n//\\n// THE SOFTWARE IS PROVIDED \\\"AS IS\\\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES\\n// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF\\n// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR\\n// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES\\n// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN\\n// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF\\n// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.\\n/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */\\nvar decoder;\\nvar Base64 = {\\n    decode: function (a) {\\n        var i;\\n        if (decoder === undefined) {\\n            var b64 = \\\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\\\";\\n            var ignore = \\\"= \\\\f\\\\n\\\\r\\\\t\\\\u00A0\\\\u2028\\\\u2029\\\";\\n            decoder = Object.create(null);\\n            for (i = 0; i \u003c 64; ++i) {\\n                decoder[b64.charAt(i)] = i;\\n            }\\n            decoder['-'] = 62; //+\\n            decoder['_'] = 63; //-\\n            for (i = 0; i \u003c ignore.length; ++i) {\\n                decoder[ignore.charAt(i)] = -1;\\n            }\\n        }\\n        var out = [];\\n        var bits = 0;\\n        var char_count = 0;\\n        for (i = 0; i \u003c a.length; ++i) {\\n            var c = a.charAt(i);\\n            if (c == \\\"=\\\") {\\n                break;\\n            }\\n            c = decoder[c];\\n            if (c == -1) {\\n                continue;\\n            }\\n            if (c === undefined) {\\n                throw new Error(\\\"Illegal character at offset \\\" + i);\\n            }\\n            bits |= c;\\n            if (++char_count \u003e= 4) {\\n                out[out.length] = (bits \u003e\u003e 16);\\n                out[out.length] = (bits \u003e\u003e 8) \u0026 0xFF;\\n                out[out.length] = bits \u0026 0xFF;\\n                bits = 0;\\n                char_count = 0;\\n            }\\n            else {\\n                bits \u003c\u003c= 6;\\n            }\\n        }\\n        switch (char_count) {\\n            case 1:\\n                throw new Error(\\\"Base64 encoding incomplete: at least 2 bits missing\\\");\\n            case 2:\\n                out[out.length] = (bits \u003e\u003e 10);\\n                break;\\n            case 3:\\n                out[out.length] = (bits \u003e\u003e 16);\\n                out[out.length] = (bits \u003e\u003e 8) \u0026 0xFF;\\n                break;\\n        }\\n        return out;\\n    },\\n    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\\\\/=\\\\s]+)-----END [^-]+-----|begin-base64[^\\\\n]+\\\\n([A-Za-z0-9+\\\\/=\\\\s]+)====/,\\n    unarmor: function (a) {\\n        var m = Base64.re.exec(a);\\n        if (m) {\\n            if (m[1]) {\\n                a = m[1];\\n            }\\n            else if (m[2]) {\\n                a = m[2];\\n            }\\n            else {\\n                throw new Error(\\\"RegExp out of sync\\\");\\n            }\\n        }\\n        return Base64.decode(a);\\n    }\\n};\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/lib/asn1js/base64.js?\");","","/***/ }),","","/***/ \"./lib/lib/asn1js/hex.js\":","/*!*******************************!*\\","  !*** ./lib/lib/asn1js/hex.js ***!","  \\*******************************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"Hex\\\": () =\u003e (/* binding */ Hex)\\n/* harmony export */ });\\n// Hex JavaScript decoder\\n// Copyright (c) 2008-2013 Lapo Luchini \u003clapo@lapo.it\u003e\\n// Permission to use, copy, modify, and/or distribute this software for any\\n// purpose with or without fee is hereby granted, provided that the above\\n// copyright notice and this permission notice appear in all copies.\\n//\\n// THE SOFTWARE IS PROVIDED \\\"AS IS\\\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES\\n// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF\\n// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR\\n// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES\\n// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN\\n// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF\\n// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.\\n/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */\\nvar decoder;\\nvar Hex = {\\n    decode: function (a) {\\n        var i;\\n        if (decoder === undefined) {\\n            var hex = \\\"0123456789ABCDEF\\\";\\n            var ignore = \\\" \\\\f\\\\n\\\\r\\\\t\\\\u00A0\\\\u2028\\\\u2029\\\";\\n            decoder = {};\\n            for (i = 0; i \u003c 16; ++i) {\\n                decoder[hex.charAt(i)] = i;\\n            }\\n            hex = hex.toLowerCase();\\n            for (i = 10; i \u003c 16; ++i) {\\n                decoder[hex.charAt(i)] = i;\\n            }\\n            for (i = 0; i \u003c ignore.length; ++i) {\\n                decoder[ignore.charAt(i)] = -1;\\n            }\\n        }\\n        var out = [];\\n        var bits = 0;\\n        var char_count = 0;\\n        for (i = 0; i \u003c a.length; ++i) {\\n            var c = a.charAt(i);\\n            if (c == \\\"=\\\") {\\n                break;\\n            }\\n            c = decoder[c];\\n            if (c == -1) {\\n                continue;\\n            }\\n            if (c === undefined) {\\n                throw new Error(\\\"Illegal character at offset \\\" + i);\\n            }\\n            bits |= c;\\n            if (++char_count \u003e= 2) {\\n                out[out.length] = bits;\\n                bits = 0;\\n                char_count = 0;\\n            }\\n            else {\\n                bits \u003c\u003c= 4;\\n            }\\n        }\\n        if (char_count) {\\n            throw new Error(\\\"Hex encoding incomplete: 4 bits missing\\\");\\n        }\\n        return out;\\n    }\\n};\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/lib/asn1js/hex.js?\");","","/***/ }),","","/***/ \"./lib/lib/asn1js/int10.js\":","/*!*********************************!*\\","  !*** ./lib/lib/asn1js/int10.js ***!","  \\*********************************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"Int10\\\": () =\u003e (/* binding */ Int10)\\n/* harmony export */ });\\n// Big integer base-10 printing library\\n// Copyright (c) 2014 Lapo Luchini \u003clapo@lapo.it\u003e\\n// Permission to use, copy, modify, and/or distribute this software for any\\n// purpose with or without fee is hereby granted, provided that the above\\n// copyright notice and this permission notice appear in all copies.\\n//\\n// THE SOFTWARE IS PROVIDED \\\"AS IS\\\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES\\n// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF\\n// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR\\n// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES\\n// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN\\n// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF\\n// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.\\n/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */\\nvar max = 10000000000000; // biggest integer that can still fit 2^53 when multiplied by 256\\nvar Int10 = /** @class */ (function () {\\n    function Int10(value) {\\n        this.buf = [+value || 0];\\n    }\\n    Int10.prototype.mulAdd = function (m, c) {\\n        // assert(m \u003c= 256)\\n        var b = this.buf;\\n        var l = b.length;\\n        var i;\\n        var t;\\n        for (i = 0; i \u003c l; ++i) {\\n            t = b[i] * m + c;\\n            if (t \u003c max) {\\n                c = 0;\\n            }\\n            else {\\n                c = 0 | (t / max);\\n                t -= c * max;\\n            }\\n            b[i] = t;\\n        }\\n        if (c \u003e 0) {\\n            b[i] = c;\\n        }\\n    };\\n    Int10.prototype.sub = function (c) {\\n        // assert(m \u003c= 256)\\n        var b = this.buf;\\n        var l = b.length;\\n        var i;\\n        var t;\\n        for (i = 0; i \u003c l; ++i) {\\n            t = b[i] - c;\\n            if (t \u003c 0) {\\n                t += max;\\n                c = 1;\\n            }\\n            else {\\n                c = 0;\\n            }\\n            b[i] = t;\\n        }\\n        while (b[b.length - 1] === 0) {\\n            b.pop();\\n        }\\n    };\\n    Int10.prototype.toString = function (base) {\\n        if ((base || 10) != 10) {\\n            throw new Error(\\\"only base 10 is supported\\\");\\n        }\\n        var b = this.buf;\\n        var s = b[b.length - 1].toString();\\n        for (var i = b.length - 2; i \u003e= 0; --i) {\\n            s += (max + b[i]).toString().substring(1);\\n        }\\n        return s;\\n    };\\n    Int10.prototype.valueOf = function () {\\n        var b = this.buf;\\n        var v = 0;\\n        for (var i = b.length - 1; i \u003e= 0; --i) {\\n            v = v * max + b[i];\\n        }\\n        return v;\\n    };\\n    Int10.prototype.simplify = function () {\\n        var b = this.buf;\\n        return (b.length == 1) ? b[0] : this;\\n    };\\n    return Int10;\\n}());\\n\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/lib/asn1js/int10.js?\");","","/***/ }),","","/***/ \"./lib/lib/jsbn/base64.js\":","/*!********************************!*\\","  !*** ./lib/lib/jsbn/base64.js ***!","  \\********************************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"b64toBA\\\": () =\u003e (/* binding */ b64toBA),\\n/* harmony export */   \\\"b64tohex\\\": () =\u003e (/* binding */ b64tohex),\\n/* harmony export */   \\\"hex2b64\\\": () =\u003e (/* binding */ hex2b64)\\n/* harmony export */ });\\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \\\"./lib/lib/jsbn/util.js\\\");\\n\\nvar b64map = \\\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\\\";\\nvar b64pad = \\\"=\\\";\\nfunction hex2b64(h) {\\n    var i;\\n    var c;\\n    var ret = \\\"\\\";\\n    for (i = 0; i + 3 \u003c= h.length; i += 3) {\\n        c = parseInt(h.substring(i, i + 3), 16);\\n        ret += b64map.charAt(c \u003e\u003e 6) + b64map.charAt(c \u0026 63);\\n    }\\n    if (i + 1 == h.length) {\\n        c = parseInt(h.substring(i, i + 1), 16);\\n        ret += b64map.charAt(c \u003c\u003c 2);\\n    }\\n    else if (i + 2 == h.length) {\\n        c = parseInt(h.substring(i, i + 2), 16);\\n        ret += b64map.charAt(c \u003e\u003e 2) + b64map.charAt((c \u0026 3) \u003c\u003c 4);\\n    }\\n    while ((ret.length \u0026 3) \u003e 0) {\\n        ret += b64pad;\\n    }\\n    return ret;\\n}\\n// convert a base64 string to hex\\nfunction b64tohex(s) {\\n    var ret = \\\"\\\";\\n    var i;\\n    var k = 0; // b64 state, 0-3\\n    var slop = 0;\\n    for (i = 0; i \u003c s.length; ++i) {\\n        if (s.charAt(i) == b64pad) {\\n            break;\\n        }\\n        var v = b64map.indexOf(s.charAt(i));\\n        if (v \u003c 0) {\\n            continue;\\n        }\\n        if (k == 0) {\\n            ret += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)(v \u003e\u003e 2);\\n            slop = v \u0026 3;\\n            k = 1;\\n        }\\n        else if (k == 1) {\\n            ret += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)((slop \u003c\u003c 2) | (v \u003e\u003e 4));\\n            slop = v \u0026 0xf;\\n            k = 2;\\n        }\\n        else if (k == 2) {\\n            ret += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)(slop);\\n            ret += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)(v \u003e\u003e 2);\\n            slop = v \u0026 3;\\n            k = 3;\\n        }\\n        else {\\n            ret += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)((slop \u003c\u003c 2) | (v \u003e\u003e 4));\\n            ret += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)(v \u0026 0xf);\\n            k = 0;\\n        }\\n    }\\n    if (k == 1) {\\n        ret += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)(slop \u003c\u003c 2);\\n    }\\n    return ret;\\n}\\n// convert a base64 string to a byte/number array\\nfunction b64toBA(s) {\\n    // piggyback on b64tohex for now, optimize later\\n    var h = b64tohex(s);\\n    var i;\\n    var a = [];\\n    for (i = 0; 2 * i \u003c h.length; ++i) {\\n        a[i] = parseInt(h.substring(2 * i, 2 * i + 2), 16);\\n    }\\n    return a;\\n}\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/lib/jsbn/base64.js?\");","","/***/ }),","","/***/ \"./lib/lib/jsbn/jsbn.js\":","/*!******************************!*\\","  !*** ./lib/lib/jsbn/jsbn.js ***!","  \\******************************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"BigInteger\\\": () =\u003e (/* binding */ BigInteger),\\n/* harmony export */   \\\"intAt\\\": () =\u003e (/* binding */ intAt),\\n/* harmony export */   \\\"nbi\\\": () =\u003e (/* binding */ nbi),\\n/* harmony export */   \\\"nbits\\\": () =\u003e (/* binding */ nbits),\\n/* harmony export */   \\\"nbv\\\": () =\u003e (/* binding */ nbv),\\n/* harmony export */   \\\"parseBigInt\\\": () =\u003e (/* binding */ parseBigInt)\\n/* harmony export */ });\\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \\\"./lib/lib/jsbn/util.js\\\");\\n// Copyright (c) 2005  Tom Wu\\n// All Rights Reserved.\\n// See \\\"LICENSE\\\" for details.\\n// Basic JavaScript BN library - subset useful for RSA encryption.\\n\\n// Bits per digit\\nvar dbits;\\n// JavaScript engine analysis\\nvar canary = 0xdeadbeefcafe;\\nvar j_lm = ((canary \u0026 0xffffff) == 0xefcafe);\\n//#region\\nvar lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];\\nvar lplim = (1 \u003c\u003c 26) / lowprimes[lowprimes.length - 1];\\n//#endregion\\n// (public) Constructor\\nvar BigInteger = /** @class */ (function () {\\n    function BigInteger(a, b, c) {\\n        if (a != null) {\\n            if (\\\"number\\\" == typeof a) {\\n                this.fromNumber(a, b, c);\\n            }\\n            else if (b == null \u0026\u0026 \\\"string\\\" != typeof a) {\\n                this.fromString(a, 256);\\n            }\\n            else {\\n                this.fromString(a, b);\\n            }\\n        }\\n    }\\n    //#region PUBLIC\\n    // BigInteger.prototype.toString = bnToString;\\n    // (public) return string representation in given radix\\n    BigInteger.prototype.toString = function (b) {\\n        if (this.s \u003c 0) {\\n            return \\\"-\\\" + this.negate().toString(b);\\n        }\\n        var k;\\n        if (b == 16) {\\n            k = 4;\\n        }\\n        else if (b == 8) {\\n            k = 3;\\n        }\\n        else if (b == 2) {\\n            k = 1;\\n        }\\n        else if (b == 32) {\\n            k = 5;\\n        }\\n        else if (b == 4) {\\n            k = 2;\\n        }\\n        else {\\n            return this.toRadix(b);\\n        }\\n        var km = (1 \u003c\u003c k) - 1;\\n        var d;\\n        var m = false;\\n        var r = \\\"\\\";\\n        var i = this.t;\\n        var p = this.DB - (i * this.DB) % k;\\n        if (i-- \u003e 0) {\\n            if (p \u003c this.DB \u0026\u0026 (d = this[i] \u003e\u003e p) \u003e 0) {\\n                m = true;\\n                r = (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)(d);\\n            }\\n            while (i \u003e= 0) {\\n                if (p \u003c k) {\\n                    d = (this[i] \u0026 ((1 \u003c\u003c p) - 1)) \u003c\u003c (k - p);\\n                    d |= this[--i] \u003e\u003e (p += this.DB - k);\\n                }\\n                else {\\n                    d = (this[i] \u003e\u003e (p -= k)) \u0026 km;\\n                    if (p \u003c= 0) {\\n                        p += this.DB;\\n                        --i;\\n                    }\\n                }\\n                if (d \u003e 0) {\\n                    m = true;\\n                }\\n                if (m) {\\n                    r += (0,_util__WEBPACK_IMPORTED_MODULE_0__.int2char)(d);\\n                }\\n            }\\n        }\\n        return m ? r : \\\"0\\\";\\n    };\\n    // BigInteger.prototype.negate = bnNegate;\\n    // (public) -this\\n    BigInteger.prototype.negate = function () {\\n        var r = nbi();\\n        BigInteger.ZERO.subTo(this, r);\\n        return r;\\n    };\\n    // BigInteger.prototype.abs = bnAbs;\\n    // (public) |this|\\n    BigInteger.prototype.abs = function () {\\n        return (this.s \u003c 0) ? this.negate() : this;\\n    };\\n    // BigInteger.prototype.compareTo = bnCompareTo;\\n    // (public) return + if this \u003e a, - if this \u003c a, 0 if equal\\n    BigInteger.prototype.compareTo = function (a) {\\n        var r = this.s - a.s;\\n        if (r != 0) {\\n            return r;\\n        }\\n        var i = this.t;\\n        r = i - a.t;\\n        if (r != 0) {\\n            return (this.s \u003c 0) ? -r : r;\\n        }\\n        while (--i \u003e= 0) {\\n            if ((r = this[i] - a[i]) != 0) {\\n                return r;\\n            }\\n        }\\n        return 0;\\n    };\\n    // BigInteger.prototype.bitLength = bnBitLength;\\n    // (public) return the number of bits in \\\"this\\\"\\n    BigInteger.prototype.bitLength = function () {\\n        if (this.t \u003c= 0) {\\n            return 0;\\n        }\\n        return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s \u0026 this.DM));\\n    };\\n    // BigInteger.prototype.mod = bnMod;\\n    // (public) this mod a\\n    BigInteger.prototype.mod = function (a) {\\n        var r = nbi();\\n        this.abs().divRemTo(a, null, r);\\n        if (this.s \u003c 0 \u0026\u0026 r.compareTo(BigInteger.ZERO) \u003e 0) {\\n            a.subTo(r, r);\\n        }\\n        return r;\\n    };\\n    // BigInteger.prototype.modPowInt = bnModPowInt;\\n    // (public) this^e % m, 0 \u003c= e \u003c 2^32\\n    BigInteger.prototype.modPowInt = function (e, m) {\\n        var z;\\n        if (e \u003c 256 || m.isEven()) {\\n            z = new Classic(m);\\n        }\\n        else {\\n            z = new Montgomery(m);\\n        }\\n        return this.exp(e, z);\\n    };\\n    // BigInteger.prototype.clone = bnClone;\\n    // (public)\\n    BigInteger.prototype.clone = function () {\\n        var r = nbi();\\n        this.copyTo(r);\\n        return r;\\n    };\\n    // BigInteger.prototype.intValue = bnIntValue;\\n    // (public) return value as integer\\n    BigInteger.prototype.intValue = function () {\\n        if (this.s \u003c 0) {\\n            if (this.t == 1) {\\n                return this[0] - this.DV;\\n            }\\n            else if (this.t == 0) {\\n                return -1;\\n            }\\n        }\\n        else if (this.t == 1) {\\n            return this[0];\\n        }\\n        else if (this.t == 0) {\\n            return 0;\\n        }\\n        // assumes 16 \u003c DB \u003c 32\\n        return ((this[1] \u0026 ((1 \u003c\u003c (32 - this.DB)) - 1)) \u003c\u003c this.DB) | this[0];\\n    };\\n    // BigInteger.prototype.byteValue = bnByteValue;\\n    // (public) return value as byte\\n    BigInteger.prototype.byteValue = function () {\\n        return (this.t == 0) ? this.s : (this[0] \u003c\u003c 24) \u003e\u003e 24;\\n    };\\n    // BigInteger.prototype.shortValue = bnShortValue;\\n    // (public) return value as short (assumes DB\u003e=16)\\n    BigInteger.prototype.shortValue = function () {\\n        return (this.t == 0) ? this.s : (this[0] \u003c\u003c 16) \u003e\u003e 16;\\n    };\\n    // BigInteger.prototype.signum = bnSigNum;\\n    // (public) 0 if this == 0, 1 if this \u003e 0\\n    BigInteger.prototype.signum = function () {\\n        if (this.s \u003c 0) {\\n            return -1;\\n        }\\n        else if (this.t \u003c= 0 || (this.t == 1 \u0026\u0026 this[0] \u003c= 0)) {\\n            return 0;\\n        }\\n        else {\\n            return 1;\\n        }\\n    };\\n    // BigInteger.prototype.toByteArray = bnToByteArray;\\n    // (public) convert to bigendian byte array\\n    BigInteger.prototype.toByteArray = function () {\\n        var i = this.t;\\n        var r = [];\\n        r[0] = this.s;\\n        var p = this.DB - (i * this.DB) % 8;\\n        var d;\\n        var k = 0;\\n        if (i-- \u003e 0) {\\n            if (p \u003c this.DB \u0026\u0026 (d = this[i] \u003e\u003e p) != (this.s \u0026 this.DM) \u003e\u003e p) {\\n                r[k++] = d | (this.s \u003c\u003c (this.DB - p));\\n            }\\n            while (i \u003e= 0) {\\n                if (p \u003c 8) {\\n                    d = (this[i] \u0026 ((1 \u003c\u003c p) - 1)) \u003c\u003c (8 - p);\\n                    d |= this[--i] \u003e\u003e (p += this.DB - 8);\\n                }\\n                else {\\n                    d = (this[i] \u003e\u003e (p -= 8)) \u0026 0xff;\\n                    if (p \u003c= 0) {\\n                        p += this.DB;\\n                        --i;\\n                    }\\n                }\\n                if ((d \u0026 0x80) != 0) {\\n                    d |= -256;\\n                }\\n                if (k == 0 \u0026\u0026 (this.s \u0026 0x80) != (d \u0026 0x80)) {\\n                    ++k;\\n                }\\n                if (k \u003e 0 || d != this.s) {\\n                    r[k++] = d;\\n                }\\n            }\\n        }\\n        return r;\\n    };\\n    // BigInteger.prototype.equals = bnEquals;\\n    BigInteger.prototype.equals = function (a) {\\n        return (this.compareTo(a) == 0);\\n    };\\n    // BigInteger.prototype.min = bnMin;\\n    BigInteger.prototype.min = function (a) {\\n        return (this.compareTo(a) \u003c 0) ? this : a;\\n    };\\n    // BigInteger.prototype.max = bnMax;\\n    BigInteger.prototype.max = function (a) {\\n        return (this.compareTo(a) \u003e 0) ? this : a;\\n    };\\n    // BigInteger.prototype.and = bnAnd;\\n    BigInteger.prototype.and = function (a) {\\n        var r = nbi();\\n        this.bitwiseTo(a, _util__WEBPACK_IMPORTED_MODULE_0__.op_and, r);\\n        return r;\\n    };\\n    // BigInteger.prototype.or = bnOr;\\n    BigInteger.prototype.or = function (a) {\\n        var r = nbi();\\n        this.bitwiseTo(a, _util__WEBPACK_IMPORTED_MODULE_0__.op_or, r);\\n        return r;\\n    };\\n    // BigInteger.prototype.xor = bnXor;\\n    BigInteger.prototype.xor = function (a) {\\n        var r = nbi();\\n        this.bitwiseTo(a, _util__WEBPACK_IMPORTED_MODULE_0__.op_xor, r);\\n        return r;\\n    };\\n    // BigInteger.prototype.andNot = bnAndNot;\\n    BigInteger.prototype.andNot = function (a) {\\n        var r = nbi();\\n        this.bitwiseTo(a, _util__WEBPACK_IMPORTED_MODULE_0__.op_andnot, r);\\n        return r;\\n    };\\n    // BigInteger.prototype.not = bnNot;\\n    // (public) ~this\\n    BigInteger.prototype.not = function () {\\n        var r = nbi();\\n        for (var i = 0; i \u003c this.t; ++i) {\\n            r[i] = this.DM \u0026 ~this[i];\\n        }\\n        r.t = this.t;\\n        r.s = ~this.s;\\n        return r;\\n    };\\n    // BigInteger.prototype.shiftLeft = bnShiftLeft;\\n    // (public) this \u003c\u003c n\\n    BigInteger.prototype.shiftLeft = function (n) {\\n        var r = nbi();\\n        if (n \u003c 0) {\\n            this.rShiftTo(-n, r);\\n        }\\n        else {\\n            this.lShiftTo(n, r);\\n        }\\n        return r;\\n    };\\n    // BigInteger.prototype.shiftRight = bnShiftRight;\\n    // (public) this \u003e\u003e n\\n    BigInteger.prototype.shiftRight = function (n) {\\n        var r = nbi();\\n        if (n \u003c 0) {\\n            this.lShiftTo(-n, r);\\n        }\\n        else {\\n            this.rShiftTo(n, r);\\n        }\\n        return r;\\n    };\\n    // BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;\\n    // (public) returns index of lowest 1-bit (or -1 if none)\\n    BigInteger.prototype.getLowestSetBit = function () {\\n        for (var i = 0; i \u003c this.t; ++i) {\\n            if (this[i] != 0) {\\n                return i * this.DB + (0,_util__WEBPACK_IMPORTED_MODULE_0__.lbit)(this[i]);\\n            }\\n        }\\n        if (this.s \u003c 0) {\\n            return this.t * this.DB;\\n        }\\n        return -1;\\n    };\\n    // BigInteger.prototype.bitCount = bnBitCount;\\n    // (public) return number of set bits\\n    BigInteger.prototype.bitCount = function () {\\n        var r = 0;\\n        var x = this.s \u0026 this.DM;\\n        for (var i = 0; i \u003c this.t; ++i) {\\n            r += (0,_util__WEBPACK_IMPORTED_MODULE_0__.cbit)(this[i] ^ x);\\n        }\\n        return r;\\n    };\\n    // BigInteger.prototype.testBit = bnTestBit;\\n    // (public) true iff nth bit is set\\n    BigInteger.prototype.testBit = function (n) {\\n        var j = Math.floor(n / this.DB);\\n        if (j \u003e= this.t) {\\n            return (this.s != 0);\\n        }\\n        return ((this[j] \u0026 (1 \u003c\u003c (n % this.DB))) != 0);\\n    };\\n    // BigInteger.prototype.setBit = bnSetBit;\\n    // (public) this | (1\u003c\u003cn)\\n    BigInteger.prototype.setBit = function (n) {\\n        return this.changeBit(n, _util__WEBPACK_IMPORTED_MODULE_0__.op_or);\\n    };\\n    // BigInteger.prototype.clearBit = bnClearBit;\\n    // (public) this \u0026 ~(1\u003c\u003cn)\\n    BigInteger.prototype.clearBit = function (n) {\\n        return this.changeBit(n, _util__WEBPACK_IMPORTED_MODULE_0__.op_andnot);\\n    };\\n    // BigInteger.prototype.flipBit = bnFlipBit;\\n    // (public) this ^ (1\u003c\u003cn)\\n    BigInteger.prototype.flipBit = function (n) {\\n        return this.changeBit(n, _util__WEBPACK_IMPORTED_MODULE_0__.op_xor);\\n    };\\n    // BigInteger.prototype.add = bnAdd;\\n    // (public) this + a\\n    BigInteger.prototype.add = function (a) {\\n        var r = nbi();\\n        this.addTo(a, r);\\n        return r;\\n    };\\n    // BigInteger.prototype.subtract = bnSubtract;\\n    // (public) this - a\\n    BigInteger.prototype.subtract = function (a) {\\n        var r = nbi();\\n        this.subTo(a, r);\\n        return r;\\n    };\\n    // BigInteger.prototype.multiply = bnMultiply;\\n    // (public) this * a\\n    BigInteger.prototype.multiply = function (a) {\\n        var r = nbi();\\n        this.multiplyTo(a, r);\\n        return r;\\n    };\\n    // BigInteger.prototype.divide = bnDivide;\\n    // (public) this / a\\n    BigInteger.prototype.divide = function (a) {\\n        var r = nbi();\\n        this.divRemTo(a, r, null);\\n        return r;\\n    };\\n    // BigInteger.prototype.remainder = bnRemainder;\\n    // (public) this % a\\n    BigInteger.prototype.remainder = function (a) {\\n        var r = nbi();\\n        this.divRemTo(a, null, r);\\n        return r;\\n    };\\n    // BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;\\n    // (public) [this/a,this%a]\\n    BigInteger.prototype.divideAndRemainder = function (a) {\\n        var q = nbi();\\n        var r = nbi();\\n        this.divRemTo(a, q, r);\\n        return [q, r];\\n    };\\n    // BigInteger.prototype.modPow = bnModPow;\\n    // (public) this^e % m (HAC 14.85)\\n    BigInteger.prototype.modPow = function (e, m) {\\n        var i = e.bitLength();\\n        var k;\\n        var r = nbv(1);\\n        var z;\\n        if (i \u003c= 0) {\\n            return r;\\n        }\\n        else if (i \u003c 18) {\\n            k = 1;\\n        }\\n        else if (i \u003c 48) {\\n            k = 3;\\n        }\\n        else if (i \u003c 144) {\\n            k = 4;\\n        }\\n        else if (i \u003c 768) {\\n            k = 5;\\n        }\\n        else {\\n            k = 6;\\n        }\\n        if (i \u003c 8) {\\n            z = new Classic(m);\\n        }\\n        else if (m.isEven()) {\\n            z = new Barrett(m);\\n        }\\n        else {\\n            z = new Montgomery(m);\\n        }\\n        // precomputation\\n        var g = [];\\n        var n = 3;\\n        var k1 = k - 1;\\n        var km = (1 \u003c\u003c k) - 1;\\n        g[1] = z.convert(this);\\n        if (k \u003e 1) {\\n            var g2 = nbi();\\n            z.sqrTo(g[1], g2);\\n            while (n \u003c= km) {\\n                g[n] = nbi();\\n                z.mulTo(g2, g[n - 2], g[n]);\\n                n += 2;\\n            }\\n        }\\n        var j = e.t - 1;\\n        var w;\\n        var is1 = true;\\n        var r2 = nbi();\\n        var t;\\n        i = nbits(e[j]) - 1;\\n        while (j \u003e= 0) {\\n            if (i \u003e= k1) {\\n                w = (e[j] \u003e\u003e (i - k1)) \u0026 km;\\n            }\\n            else {\\n                w = (e[j] \u0026 ((1 \u003c\u003c (i + 1)) - 1)) \u003c\u003c (k1 - i);\\n                if (j \u003e 0) {\\n                    w |= e[j - 1] \u003e\u003e (this.DB + i - k1);\\n                }\\n            }\\n            n = k;\\n            while ((w \u0026 1) == 0) {\\n                w \u003e\u003e= 1;\\n                --n;\\n            }\\n            if ((i -= n) \u003c 0) {\\n                i += this.DB;\\n                --j;\\n            }\\n            if (is1) { // ret == 1, don't bother squaring or multiplying it\\n                g[w].copyTo(r);\\n                is1 = false;\\n            }\\n            else {\\n                while (n \u003e 1) {\\n                    z.sqrTo(r, r2);\\n                    z.sqrTo(r2, r);\\n                    n -= 2;\\n                }\\n                if (n \u003e 0) {\\n                    z.sqrTo(r, r2);\\n                }\\n                else {\\n                    t = r;\\n                    r = r2;\\n                    r2 = t;\\n                }\\n                z.mulTo(r2, g[w], r);\\n            }\\n            while (j \u003e= 0 \u0026\u0026 (e[j] \u0026 (1 \u003c\u003c i)) == 0) {\\n                z.sqrTo(r, r2);\\n                t = r;\\n                r = r2;\\n                r2 = t;\\n                if (--i \u003c 0) {\\n                    i = this.DB - 1;\\n                    --j;\\n                }\\n            }\\n        }\\n        return z.revert(r);\\n    };\\n    // BigInteger.prototype.modInverse = bnModInverse;\\n    // (public) 1/this % m (HAC 14.61)\\n    BigInteger.prototype.modInverse = function (m) {\\n        var ac = m.isEven();\\n        if ((this.isEven() \u0026\u0026 ac) || m.signum() == 0) {\\n            return BigInteger.ZERO;\\n        }\\n        var u = m.clone();\\n        var v = this.clone();\\n        var a = nbv(1);\\n        var b = nbv(0);\\n        var c = nbv(0);\\n        var d = nbv(1);\\n        while (u.signum() != 0) {\\n            while (u.isEven()) {\\n                u.rShiftTo(1, u);\\n                if (ac) {\\n                    if (!a.isEven() || !b.isEven()) {\\n                        a.addTo(this, a);\\n                        b.subTo(m, b);\\n                    }\\n                    a.rShiftTo(1, a);\\n                }\\n                else if (!b.isEven()) {\\n                    b.subTo(m, b);\\n                }\\n                b.rShiftTo(1, b);\\n            }\\n            while (v.isEven()) {\\n                v.rShiftTo(1, v);\\n                if (ac) {\\n                    if (!c.isEven() || !d.isEven()) {\\n                        c.addTo(this, c);\\n                        d.subTo(m, d);\\n                    }\\n                    c.rShiftTo(1, c);\\n                }\\n                else if (!d.isEven()) {\\n                    d.subTo(m, d);\\n                }\\n                d.rShiftTo(1, d);\\n            }\\n            if (u.compareTo(v) \u003e= 0) {\\n                u.subTo(v, u);\\n                if (ac) {\\n                    a.subTo(c, a);\\n                }\\n                b.subTo(d, b);\\n            }\\n            else {\\n                v.subTo(u, v);\\n                if (ac) {\\n                    c.subTo(a, c);\\n                }\\n                d.subTo(b, d);\\n            }\\n        }\\n        if (v.compareTo(BigInteger.ONE) != 0) {\\n            return BigInteger.ZERO;\\n        }\\n        if (d.compareTo(m) \u003e= 0) {\\n            return d.subtract(m);\\n        }\\n        if (d.signum() \u003c 0) {\\n            d.addTo(m, d);\\n        }\\n        else {\\n            return d;\\n        }\\n        if (d.signum() \u003c 0) {\\n            return d.add(m);\\n        }\\n        else {\\n            return d;\\n        }\\n    };\\n    // BigInteger.prototype.pow = bnPow;\\n    // (public) this^e\\n    BigInteger.prototype.pow = function (e) {\\n        return this.exp(e, new NullExp());\\n    };\\n    // BigInteger.prototype.gcd = bnGCD;\\n    // (public) gcd(this,a) (HAC 14.54)\\n    BigInteger.prototype.gcd = function (a) {\\n        var x = (this.s \u003c 0) ? this.negate() : this.clone();\\n        var y = (a.s \u003c 0) ? a.negate() : a.clone();\\n        if (x.compareTo(y) \u003c 0) {\\n            var t = x;\\n            x = y;\\n            y = t;\\n        }\\n        var i = x.getLowestSetBit();\\n        var g = y.getLowestSetBit();\\n        if (g \u003c 0) {\\n            return x;\\n        }\\n        if (i \u003c g) {\\n            g = i;\\n        }\\n        if (g \u003e 0) {\\n            x.rShiftTo(g, x);\\n            y.rShiftTo(g, y);\\n        }\\n        while (x.signum() \u003e 0) {\\n            if ((i = x.getLowestSetBit()) \u003e 0) {\\n                x.rShiftTo(i, x);\\n            }\\n            if ((i = y.getLowestSetBit()) \u003e 0) {\\n                y.rShiftTo(i, y);\\n            }\\n            if (x.compareTo(y) \u003e= 0) {\\n                x.subTo(y, x);\\n                x.rShiftTo(1, x);\\n            }\\n            else {\\n                y.subTo(x, y);\\n                y.rShiftTo(1, y);\\n            }\\n        }\\n        if (g \u003e 0) {\\n            y.lShiftTo(g, y);\\n        }\\n        return y;\\n    };\\n    // BigInteger.prototype.isProbablePrime = bnIsProbablePrime;\\n    // (public) test primality with certainty \u003e= 1-.5^t\\n    BigInteger.prototype.isProbablePrime = function (t) {\\n        var i;\\n        var x = this.abs();\\n        if (x.t == 1 \u0026\u0026 x[0] \u003c= lowprimes[lowprimes.length - 1]) {\\n            for (i = 0; i \u003c lowprimes.length; ++i) {\\n                if (x[0] == lowprimes[i]) {\\n                    return true;\\n                }\\n            }\\n            return false;\\n        }\\n        if (x.isEven()) {\\n            return false;\\n        }\\n        i = 1;\\n        while (i \u003c lowprimes.length) {\\n            var m = lowprimes[i];\\n            var j = i + 1;\\n            while (j \u003c lowprimes.length \u0026\u0026 m \u003c lplim) {\\n                m *= lowprimes[j++];\\n            }\\n            m = x.modInt(m);\\n            while (i \u003c j) {\\n                if (m % lowprimes[i++] == 0) {\\n                    return false;\\n                }\\n            }\\n        }\\n        return x.millerRabin(t);\\n    };\\n    //#endregion PUBLIC\\n    //#region PROTECTED\\n    // BigInteger.prototype.copyTo = bnpCopyTo;\\n    // (protected) copy this to r\\n    BigInteger.prototype.copyTo = function (r) {\\n        for (var i = this.t - 1; i \u003e= 0; --i) {\\n            r[i] = this[i];\\n        }\\n        r.t = this.t;\\n        r.s = this.s;\\n    };\\n    // BigInteger.prototype.fromInt = bnpFromInt;\\n    // (protected) set from integer value x, -DV \u003c= x \u003c DV\\n    BigInteger.prototype.fromInt = function (x) {\\n        this.t = 1;\\n        this.s = (x \u003c 0) ? -1 : 0;\\n        if (x \u003e 0) {\\n            this[0] = x;\\n        }\\n        else if (x \u003c -1) {\\n            this[0] = x + this.DV;\\n        }\\n        else {\\n            this.t = 0;\\n        }\\n    };\\n    // BigInteger.prototype.fromString = bnpFromString;\\n    // (protected) set from string and radix\\n    BigInteger.prototype.fromString = function (s, b) {\\n        var k;\\n        if (b == 16) {\\n            k = 4;\\n        }\\n        else if (b == 8) {\\n            k = 3;\\n        }\\n        else if (b == 256) {\\n            k = 8;\\n            /* byte array */\\n        }\\n        else if (b == 2) {\\n            k = 1;\\n        }\\n        else if (b == 32) {\\n            k = 5;\\n        }\\n        else if (b == 4) {\\n            k = 2;\\n        }\\n        else {\\n            this.fromRadix(s, b);\\n            return;\\n        }\\n        this.t = 0;\\n        this.s = 0;\\n        var i = s.length;\\n        var mi = false;\\n        var sh = 0;\\n        while (--i \u003e= 0) {\\n            var x = (k == 8) ? (+s[i]) \u0026 0xff : intAt(s, i);\\n            if (x \u003c 0) {\\n                if (s.charAt(i) == \\\"-\\\") {\\n                    mi = true;\\n                }\\n                continue;\\n            }\\n            mi = false;\\n            if (sh == 0) {\\n                this[this.t++] = x;\\n            }\\n            else if (sh + k \u003e this.DB) {\\n                this[this.t - 1] |= (x \u0026 ((1 \u003c\u003c (this.DB - sh)) - 1)) \u003c\u003c sh;\\n                this[this.t++] = (x \u003e\u003e (this.DB - sh));\\n            }\\n            else {\\n                this[this.t - 1] |= x \u003c\u003c sh;\\n            }\\n            sh += k;\\n            if (sh \u003e= this.DB) {\\n                sh -= this.DB;\\n            }\\n        }\\n        if (k == 8 \u0026\u0026 ((+s[0]) \u0026 0x80) != 0) {\\n            this.s = -1;\\n            if (sh \u003e 0) {\\n                this[this.t - 1] |= ((1 \u003c\u003c (this.DB - sh)) - 1) \u003c\u003c sh;\\n            }\\n        }\\n        this.clamp();\\n        if (mi) {\\n            BigInteger.ZERO.subTo(this, this);\\n        }\\n    };\\n    // BigInteger.prototype.clamp = bnpClamp;\\n    // (protected) clamp off excess high words\\n    BigInteger.prototype.clamp = function () {\\n        var c = this.s \u0026 this.DM;\\n        while (this.t \u003e 0 \u0026\u0026 this[this.t - 1] == c) {\\n            --this.t;\\n        }\\n    };\\n    // BigInteger.prototype.dlShiftTo = bnpDLShiftTo;\\n    // (protected) r = this \u003c\u003c n*DB\\n    BigInteger.prototype.dlShiftTo = function (n, r) {\\n        var i;\\n        for (i = this.t - 1; i \u003e= 0; --i) {\\n            r[i + n] = this[i];\\n        }\\n        for (i = n - 1; i \u003e= 0; --i) {\\n            r[i] = 0;\\n        }\\n        r.t = this.t + n;\\n        r.s = this.s;\\n    };\\n    // BigInteger.prototype.drShiftTo = bnpDRShiftTo;\\n    // (protected) r = this \u003e\u003e n*DB\\n    BigInteger.prototype.drShiftTo = function (n, r) {\\n        for (var i = n; i \u003c this.t; ++i) {\\n            r[i - n] = this[i];\\n        }\\n        r.t = Math.max(this.t - n, 0);\\n        r.s = this.s;\\n    };\\n    // BigInteger.prototype.lShiftTo = bnpLShiftTo;\\n    // (protected) r = this \u003c\u003c n\\n    BigInteger.prototype.lShiftTo = function (n, r) {\\n        var bs = n % this.DB;\\n        var cbs = this.DB - bs;\\n        var bm = (1 \u003c\u003c cbs) - 1;\\n        var ds = Math.floor(n / this.DB);\\n        var c = (this.s \u003c\u003c bs) \u0026 this.DM;\\n        for (var i = this.t - 1; i \u003e= 0; --i) {\\n            r[i + ds + 1] = (this[i] \u003e\u003e cbs) | c;\\n            c = (this[i] \u0026 bm) \u003c\u003c bs;\\n        }\\n        for (var i = ds - 1; i \u003e= 0; --i) {\\n            r[i] = 0;\\n        }\\n        r[ds] = c;\\n        r.t = this.t + ds + 1;\\n        r.s = this.s;\\n        r.clamp();\\n    };\\n    // BigInteger.prototype.rShiftTo = bnpRShiftTo;\\n    // (protected) r = this \u003e\u003e n\\n    BigInteger.prototype.rShiftTo = function (n, r) {\\n        r.s = this.s;\\n        var ds = Math.floor(n / this.DB);\\n        if (ds \u003e= this.t) {\\n            r.t = 0;\\n            return;\\n        }\\n        var bs = n % this.DB;\\n        var cbs = this.DB - bs;\\n        var bm = (1 \u003c\u003c bs) - 1;\\n        r[0] = this[ds] \u003e\u003e bs;\\n        for (var i = ds + 1; i \u003c this.t; ++i) {\\n            r[i - ds - 1] |= (this[i] \u0026 bm) \u003c\u003c cbs;\\n            r[i - ds] = this[i] \u003e\u003e bs;\\n        }\\n        if (bs \u003e 0) {\\n            r[this.t - ds - 1] |= (this.s \u0026 bm) \u003c\u003c cbs;\\n        }\\n        r.t = this.t - ds;\\n        r.clamp();\\n    };\\n    // BigInteger.prototype.subTo = bnpSubTo;\\n    // (protected) r = this - a\\n    BigInteger.prototype.subTo = function (a, r) {\\n        var i = 0;\\n        var c = 0;\\n        var m = Math.min(a.t, this.t);\\n        while (i \u003c m) {\\n            c += this[i] - a[i];\\n            r[i++] = c \u0026 this.DM;\\n            c \u003e\u003e= this.DB;\\n        }\\n        if (a.t \u003c this.t) {\\n            c -= a.s;\\n            while (i \u003c this.t) {\\n                c += this[i];\\n                r[i++] = c \u0026 this.DM;\\n                c \u003e\u003e= this.DB;\\n            }\\n            c += this.s;\\n        }\\n        else {\\n            c += this.s;\\n            while (i \u003c a.t) {\\n                c -= a[i];\\n                r[i++] = c \u0026 this.DM;\\n                c \u003e\u003e= this.DB;\\n            }\\n            c -= a.s;\\n        }\\n        r.s = (c \u003c 0) ? -1 : 0;\\n        if (c \u003c -1) {\\n            r[i++] = this.DV + c;\\n        }\\n        else if (c \u003e 0) {\\n            r[i++] = c;\\n        }\\n        r.t = i;\\n        r.clamp();\\n    };\\n    // BigInteger.prototype.multiplyTo = bnpMultiplyTo;\\n    // (protected) r = this * a, r != this,a (HAC 14.12)\\n    // \\\"this\\\" should be the larger one if appropriate.\\n    BigInteger.prototype.multiplyTo = function (a, r) {\\n        var x = this.abs();\\n        var y = a.abs();\\n        var i = x.t;\\n        r.t = i + y.t;\\n        while (--i \u003e= 0) {\\n            r[i] = 0;\\n        }\\n        for (i = 0; i \u003c y.t; ++i) {\\n            r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);\\n        }\\n        r.s = 0;\\n        r.clamp();\\n        if (this.s != a.s) {\\n            BigInteger.ZERO.subTo(r, r);\\n        }\\n    };\\n    // BigInteger.prototype.squareTo = bnpSquareTo;\\n    // (protected) r = this^2, r != this (HAC 14.16)\\n    BigInteger.prototype.squareTo = function (r) {\\n        var x = this.abs();\\n        var i = r.t = 2 * x.t;\\n        while (--i \u003e= 0) {\\n            r[i] = 0;\\n        }\\n        for (i = 0; i \u003c x.t - 1; ++i) {\\n            var c = x.am(i, x[i], r, 2 * i, 0, 1);\\n            if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) \u003e= x.DV) {\\n                r[i + x.t] -= x.DV;\\n                r[i + x.t + 1] = 1;\\n            }\\n        }\\n        if (r.t \u003e 0) {\\n            r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);\\n        }\\n        r.s = 0;\\n        r.clamp();\\n    };\\n    // BigInteger.prototype.divRemTo = bnpDivRemTo;\\n    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)\\n    // r != q, this != m.  q or r may be null.\\n    BigInteger.prototype.divRemTo = function (m, q, r) {\\n        var pm = m.abs();\\n        if (pm.t \u003c= 0) {\\n            return;\\n        }\\n        var pt = this.abs();\\n        if (pt.t \u003c pm.t) {\\n            if (q != null) {\\n                q.fromInt(0);\\n            }\\n            if (r != null) {\\n                this.copyTo(r);\\n            }\\n            return;\\n        }\\n        if (r == null) {\\n            r = nbi();\\n        }\\n        var y = nbi();\\n        var ts = this.s;\\n        var ms = m.s;\\n        var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus\\n        if (nsh \u003e 0) {\\n            pm.lShiftTo(nsh, y);\\n            pt.lShiftTo(nsh, r);\\n        }\\n        else {\\n            pm.copyTo(y);\\n            pt.copyTo(r);\\n        }\\n        var ys = y.t;\\n        var y0 = y[ys - 1];\\n        if (y0 == 0) {\\n            return;\\n        }\\n        var yt = y0 * (1 \u003c\u003c this.F1) + ((ys \u003e 1) ? y[ys - 2] \u003e\u003e this.F2 : 0);\\n        var d1 = this.FV / yt;\\n        var d2 = (1 \u003c\u003c this.F1) / yt;\\n        var e = 1 \u003c\u003c this.F2;\\n        var i = r.t;\\n        var j = i - ys;\\n        var t = (q == null) ? nbi() : q;\\n        y.dlShiftTo(j, t);\\n        if (r.compareTo(t) \u003e= 0) {\\n            r[r.t++] = 1;\\n            r.subTo(t, r);\\n        }\\n        BigInteger.ONE.dlShiftTo(ys, t);\\n        t.subTo(y, y); // \\\"negative\\\" y so we can replace sub with am later\\n        while (y.t \u003c ys) {\\n            y[y.t++] = 0;\\n        }\\n        while (--j \u003e= 0) {\\n            // Estimate quotient digit\\n            var qd = (r[--i] == y0) ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);\\n            if ((r[i] += y.am(0, qd, r, j, 0, ys)) \u003c qd) { // Try it out\\n                y.dlShiftTo(j, t);\\n                r.subTo(t, r);\\n                while (r[i] \u003c --qd) {\\n                    r.subTo(t, r);\\n                }\\n            }\\n        }\\n        if (q != null) {\\n            r.drShiftTo(ys, q);\\n            if (ts != ms) {\\n                BigInteger.ZERO.subTo(q, q);\\n            }\\n        }\\n        r.t = ys;\\n        r.clamp();\\n        if (nsh \u003e 0) {\\n            r.rShiftTo(nsh, r);\\n        } // Denormalize remainder\\n        if (ts \u003c 0) {\\n            BigInteger.ZERO.subTo(r, r);\\n        }\\n    };\\n    // BigInteger.prototype.invDigit = bnpInvDigit;\\n    // (protected) return \\\"-1/this % 2^DB\\\"; useful for Mont. reduction\\n    // justification:\\n    //         xy == 1 (mod m)\\n    //         xy =  1+km\\n    //   xy(2-xy) = (1+km)(1-km)\\n    // x[y(2-xy)] = 1-k^2m^2\\n    // x[y(2-xy)] == 1 (mod m^2)\\n    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2\\n    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.\\n    // JS multiply \\\"overflows\\\" differently from C/C++, so care is needed here.\\n    BigInteger.prototype.invDigit = function () {\\n        if (this.t \u003c 1) {\\n            return 0;\\n        }\\n        var x = this[0];\\n        if ((x \u0026 1) == 0) {\\n            return 0;\\n        }\\n        var y = x \u0026 3; // y == 1/x mod 2^2\\n        y = (y * (2 - (x \u0026 0xf) * y)) \u0026 0xf; // y == 1/x mod 2^4\\n        y = (y * (2 - (x \u0026 0xff) * y)) \u0026 0xff; // y == 1/x mod 2^8\\n        y = (y * (2 - (((x \u0026 0xffff) * y) \u0026 0xffff))) \u0026 0xffff; // y == 1/x mod 2^16\\n        // last step - calculate inverse mod DV directly;\\n        // assumes 16 \u003c DB \u003c= 32 and assumes ability to handle 48-bit ints\\n        y = (y * (2 - x * y % this.DV)) % this.DV; // y == 1/x mod 2^dbits\\n        // we really want the negative inverse, and -DV \u003c y \u003c DV\\n        return (y \u003e 0) ? this.DV - y : -y;\\n    };\\n    // BigInteger.prototype.isEven = bnpIsEven;\\n    // (protected) true iff this is even\\n    BigInteger.prototype.isEven = function () {\\n        return ((this.t \u003e 0) ? (this[0] \u0026 1) : this.s) == 0;\\n    };\\n    // BigInteger.prototype.exp = bnpExp;\\n    // (protected) this^e, e \u003c 2^32, doing sqr and mul with \\\"r\\\" (HAC 14.79)\\n    BigInteger.prototype.exp = function (e, z) {\\n        if (e \u003e 0xffffffff || e \u003c 1) {\\n            return BigInteger.ONE;\\n        }\\n        var r = nbi();\\n        var r2 = nbi();\\n        var g = z.convert(this);\\n        var i = nbits(e) - 1;\\n        g.copyTo(r);\\n        while (--i \u003e= 0) {\\n            z.sqrTo(r, r2);\\n            if ((e \u0026 (1 \u003c\u003c i)) \u003e 0) {\\n                z.mulTo(r2, g, r);\\n            }\\n            else {\\n                var t = r;\\n                r = r2;\\n                r2 = t;\\n            }\\n        }\\n        return z.revert(r);\\n    };\\n    // BigInteger.prototype.chunkSize = bnpChunkSize;\\n    // (protected) return x s.t. r^x \u003c DV\\n    BigInteger.prototype.chunkSize = function (r) {\\n        return Math.floor(Math.LN2 * this.DB / Math.log(r));\\n    };\\n    // BigInteger.prototype.toRadix = bnpToRadix;\\n    // (protected) convert to radix string\\n    BigInteger.prototype.toRadix = function (b) {\\n        if (b == null) {\\n            b = 10;\\n        }\\n        if (this.signum() == 0 || b \u003c 2 || b \u003e 36) {\\n            return \\\"0\\\";\\n        }\\n        var cs = this.chunkSize(b);\\n        var a = Math.pow(b, cs);\\n        var d = nbv(a);\\n        var y = nbi();\\n        var z = nbi();\\n        var r = \\\"\\\";\\n        this.divRemTo(d, y, z);\\n        while (y.signum() \u003e 0) {\\n            r = (a + z.intValue()).toString(b).substr(1) + r;\\n            y.divRemTo(d, y, z);\\n        }\\n        return z.intValue().toString(b) + r;\\n    };\\n    // BigInteger.prototype.fromRadix = bnpFromRadix;\\n    // (protected) convert from radix string\\n    BigInteger.prototype.fromRadix = function (s, b) {\\n        this.fromInt(0);\\n        if (b == null) {\\n            b = 10;\\n        }\\n        var cs = this.chunkSize(b);\\n        var d = Math.pow(b, cs);\\n        var mi = false;\\n        var j = 0;\\n        var w = 0;\\n        for (var i = 0; i \u003c s.length; ++i) {\\n            var x = intAt(s, i);\\n            if (x \u003c 0) {\\n                if (s.charAt(i) == \\\"-\\\" \u0026\u0026 this.signum() == 0) {\\n                    mi = true;\\n                }\\n                continue;\\n            }\\n            w = b * w + x;\\n            if (++j \u003e= cs) {\\n                this.dMultiply(d);\\n                this.dAddOffset(w, 0);\\n                j = 0;\\n                w = 0;\\n            }\\n        }\\n        if (j \u003e 0) {\\n            this.dMultiply(Math.pow(b, j));\\n            this.dAddOffset(w, 0);\\n        }\\n        if (mi) {\\n            BigInteger.ZERO.subTo(this, this);\\n        }\\n    };\\n    // BigInteger.prototype.fromNumber = bnpFromNumber;\\n    // (protected) alternate constructor\\n    BigInteger.prototype.fromNumber = function (a, b, c) {\\n        if (\\\"number\\\" == typeof b) {\\n            // new BigInteger(int,int,RNG)\\n            if (a \u003c 2) {\\n                this.fromInt(1);\\n            }\\n            else {\\n                this.fromNumber(a, c);\\n                if (!this.testBit(a - 1)) {\\n                    // force MSB set\\n                    this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), _util__WEBPACK_IMPORTED_MODULE_0__.op_or, this);\\n                }\\n                if (this.isEven()) {\\n                    this.dAddOffset(1, 0);\\n                } // force odd\\n                while (!this.isProbablePrime(b)) {\\n                    this.dAddOffset(2, 0);\\n                    if (this.bitLength() \u003e a) {\\n                        this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);\\n                    }\\n                }\\n            }\\n        }\\n        else {\\n            // new BigInteger(int,RNG)\\n            var x = [];\\n            var t = a \u0026 7;\\n            x.length = (a \u003e\u003e 3) + 1;\\n            b.nextBytes(x);\\n            if (t \u003e 0) {\\n                x[0] \u0026= ((1 \u003c\u003c t) - 1);\\n            }\\n            else {\\n                x[0] = 0;\\n            }\\n            this.fromString(x, 256);\\n        }\\n    };\\n    // BigInteger.prototype.bitwiseTo = bnpBitwiseTo;\\n    // (protected) r = this op a (bitwise)\\n    BigInteger.prototype.bitwiseTo = function (a, op, r) {\\n        var i;\\n        var f;\\n        var m = Math.min(a.t, this.t);\\n        for (i = 0; i \u003c m; ++i) {\\n            r[i] = op(this[i], a[i]);\\n        }\\n        if (a.t \u003c this.t) {\\n            f = a.s \u0026 this.DM;\\n            for (i = m; i \u003c this.t; ++i) {\\n                r[i] = op(this[i], f);\\n            }\\n            r.t = this.t;\\n        }\\n        else {\\n            f = this.s \u0026 this.DM;\\n            for (i = m; i \u003c a.t; ++i) {\\n                r[i] = op(f, a[i]);\\n            }\\n            r.t = a.t;\\n        }\\n        r.s = op(this.s, a.s);\\n        r.clamp();\\n    };\\n    // BigInteger.prototype.changeBit = bnpChangeBit;\\n    // (protected) this op (1\u003c\u003cn)\\n    BigInteger.prototype.changeBit = function (n, op) {\\n        var r = BigInteger.ONE.shiftLeft(n);\\n        this.bitwiseTo(r, op, r);\\n        return r;\\n    };\\n    // BigInteger.prototype.addTo = bnpAddTo;\\n    // (protected) r = this + a\\n    BigInteger.prototype.addTo = function (a, r) {\\n        var i = 0;\\n        var c = 0;\\n        var m = Math.min(a.t, this.t);\\n        while (i \u003c m) {\\n            c += this[i] + a[i];\\n            r[i++] = c \u0026 this.DM;\\n            c \u003e\u003e= this.DB;\\n        }\\n        if (a.t \u003c this.t) {\\n            c += a.s;\\n            while (i \u003c this.t) {\\n                c += this[i];\\n                r[i++] = c \u0026 this.DM;\\n                c \u003e\u003e= this.DB;\\n            }\\n            c += this.s;\\n        }\\n        else {\\n            c += this.s;\\n            while (i \u003c a.t) {\\n                c += a[i];\\n                r[i++] = c \u0026 this.DM;\\n                c \u003e\u003e= this.DB;\\n            }\\n            c += a.s;\\n        }\\n        r.s = (c \u003c 0) ? -1 : 0;\\n        if (c \u003e 0) {\\n            r[i++] = c;\\n        }\\n        else if (c \u003c -1) {\\n            r[i++] = this.DV + c;\\n        }\\n        r.t = i;\\n        r.clamp();\\n    };\\n    // BigInteger.prototype.dMultiply = bnpDMultiply;\\n    // (protected) this *= n, this \u003e= 0, 1 \u003c n \u003c DV\\n    BigInteger.prototype.dMultiply = function (n) {\\n        this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);\\n        ++this.t;\\n        this.clamp();\\n    };\\n    // BigInteger.prototype.dAddOffset = bnpDAddOffset;\\n    // (protected) this += n \u003c\u003c w words, this \u003e= 0\\n    BigInteger.prototype.dAddOffset = function (n, w) {\\n        if (n == 0) {\\n            return;\\n        }\\n        while (this.t \u003c= w) {\\n            this[this.t++] = 0;\\n        }\\n        this[w] += n;\\n        while (this[w] \u003e= this.DV) {\\n            this[w] -= this.DV;\\n            if (++w \u003e= this.t) {\\n                this[this.t++] = 0;\\n            }\\n            ++this[w];\\n        }\\n    };\\n    // BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;\\n    // (protected) r = lower n words of \\\"this * a\\\", a.t \u003c= n\\n    // \\\"this\\\" should be the larger one if appropriate.\\n    BigInteger.prototype.multiplyLowerTo = function (a, n, r) {\\n        var i = Math.min(this.t + a.t, n);\\n        r.s = 0; // assumes a,this \u003e= 0\\n        r.t = i;\\n        while (i \u003e 0) {\\n            r[--i] = 0;\\n        }\\n        for (var j = r.t - this.t; i \u003c j; ++i) {\\n            r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);\\n        }\\n        for (var j = Math.min(a.t, n); i \u003c j; ++i) {\\n            this.am(0, a[i], r, i, 0, n - i);\\n        }\\n        r.clamp();\\n    };\\n    // BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;\\n    // (protected) r = \\\"this * a\\\" without lower n words, n \u003e 0\\n    // \\\"this\\\" should be the larger one if appropriate.\\n    BigInteger.prototype.multiplyUpperTo = function (a, n, r) {\\n        --n;\\n        var i = r.t = this.t + a.t - n;\\n        r.s = 0; // assumes a,this \u003e= 0\\n        while (--i \u003e= 0) {\\n            r[i] = 0;\\n        }\\n        for (i = Math.max(n - this.t, 0); i \u003c a.t; ++i) {\\n            r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);\\n        }\\n        r.clamp();\\n        r.drShiftTo(1, r);\\n    };\\n    // BigInteger.prototype.modInt = bnpModInt;\\n    // (protected) this % n, n \u003c 2^26\\n    BigInteger.prototype.modInt = function (n) {\\n        if (n \u003c= 0) {\\n            return 0;\\n        }\\n        var d = this.DV % n;\\n        var r = (this.s \u003c 0) ? n - 1 : 0;\\n        if (this.t \u003e 0) {\\n            if (d == 0) {\\n                r = this[0] % n;\\n            }\\n            else {\\n                for (var i = this.t - 1; i \u003e= 0; --i) {\\n                    r = (d * r + this[i]) % n;\\n                }\\n            }\\n        }\\n        return r;\\n    };\\n    // BigInteger.prototype.millerRabin = bnpMillerRabin;\\n    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)\\n    BigInteger.prototype.millerRabin = function (t) {\\n        var n1 = this.subtract(BigInteger.ONE);\\n        var k = n1.getLowestSetBit();\\n        if (k \u003c= 0) {\\n            return false;\\n        }\\n        var r = n1.shiftRight(k);\\n        t = (t + 1) \u003e\u003e 1;\\n        if (t \u003e lowprimes.length) {\\n            t = lowprimes.length;\\n        }\\n        var a = nbi();\\n        for (var i = 0; i \u003c t; ++i) {\\n            // Pick bases at random, instead of starting at 2\\n            a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);\\n            var y = a.modPow(r, this);\\n            if (y.compareTo(BigInteger.ONE) != 0 \u0026\u0026 y.compareTo(n1) != 0) {\\n                var j = 1;\\n                while (j++ \u003c k \u0026\u0026 y.compareTo(n1) != 0) {\\n                    y = y.modPowInt(2, this);\\n                    if (y.compareTo(BigInteger.ONE) == 0) {\\n                        return false;\\n                    }\\n                }\\n                if (y.compareTo(n1) != 0) {\\n                    return false;\\n                }\\n            }\\n        }\\n        return true;\\n    };\\n    // BigInteger.prototype.square = bnSquare;\\n    // (public) this^2\\n    BigInteger.prototype.square = function () {\\n        var r = nbi();\\n        this.squareTo(r);\\n        return r;\\n    };\\n    //#region ASYNC\\n    // Public API method\\n    BigInteger.prototype.gcda = function (a, callback) {\\n        var x = (this.s \u003c 0) ? this.negate() : this.clone();\\n        var y = (a.s \u003c 0) ? a.negate() : a.clone();\\n        if (x.compareTo(y) \u003c 0) {\\n            var t = x;\\n            x = y;\\n            y = t;\\n        }\\n        var i = x.getLowestSetBit();\\n        var g = y.getLowestSetBit();\\n        if (g \u003c 0) {\\n            callback(x);\\n            return;\\n        }\\n        if (i \u003c g) {\\n            g = i;\\n        }\\n        if (g \u003e 0) {\\n            x.rShiftTo(g, x);\\n            y.rShiftTo(g, y);\\n        }\\n        // Workhorse of the algorithm, gets called 200 - 800 times per 512 bit keygen.\\n        var gcda1 = function () {\\n            if ((i = x.getLowestSetBit()) \u003e 0) {\\n                x.rShiftTo(i, x);\\n            }\\n            if ((i = y.getLowestSetBit()) \u003e 0) {\\n                y.rShiftTo(i, y);\\n            }\\n            if (x.compareTo(y) \u003e= 0) {\\n                x.subTo(y, x);\\n                x.rShiftTo(1, x);\\n            }\\n            else {\\n                y.subTo(x, y);\\n                y.rShiftTo(1, y);\\n            }\\n            if (!(x.signum() \u003e 0)) {\\n                if (g \u003e 0) {\\n                    y.lShiftTo(g, y);\\n                }\\n                setTimeout(function () { callback(y); }, 0); // escape\\n            }\\n            else {\\n                setTimeout(gcda1, 0);\\n            }\\n        };\\n        setTimeout(gcda1, 10);\\n    };\\n    // (protected) alternate constructor\\n    BigInteger.prototype.fromNumberAsync = function (a, b, c, callback) {\\n        if (\\\"number\\\" == typeof b) {\\n            if (a \u003c 2) {\\n                this.fromInt(1);\\n            }\\n            else {\\n                this.fromNumber(a, c);\\n                if (!this.testBit(a - 1)) {\\n                    this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), _util__WEBPACK_IMPORTED_MODULE_0__.op_or, this);\\n                }\\n                if (this.isEven()) {\\n                    this.dAddOffset(1, 0);\\n                }\\n                var bnp_1 = this;\\n                var bnpfn1_1 = function () {\\n                    bnp_1.dAddOffset(2, 0);\\n                    if (bnp_1.bitLength() \u003e a) {\\n                        bnp_1.subTo(BigInteger.ONE.shiftLeft(a - 1), bnp_1);\\n                    }\\n                    if (bnp_1.isProbablePrime(b)) {\\n                        setTimeout(function () { callback(); }, 0); // escape\\n                    }\\n                    else {\\n                        setTimeout(bnpfn1_1, 0);\\n                    }\\n                };\\n                setTimeout(bnpfn1_1, 0);\\n            }\\n        }\\n        else {\\n            var x = [];\\n            var t = a \u0026 7;\\n            x.length = (a \u003e\u003e 3) + 1;\\n            b.nextBytes(x);\\n            if (t \u003e 0) {\\n                x[0] \u0026= ((1 \u003c\u003c t) - 1);\\n            }\\n            else {\\n                x[0] = 0;\\n            }\\n            this.fromString(x, 256);\\n        }\\n    };\\n    return BigInteger;\\n}());\\n\\n//#region REDUCERS\\n//#region NullExp\\nvar NullExp = /** @class */ (function () {\\n    function NullExp() {\\n    }\\n    // NullExp.prototype.convert = nNop;\\n    NullExp.prototype.convert = function (x) {\\n        return x;\\n    };\\n    // NullExp.prototype.revert = nNop;\\n    NullExp.prototype.revert = function (x) {\\n        return x;\\n    };\\n    // NullExp.prototype.mulTo = nMulTo;\\n    NullExp.prototype.mulTo = function (x, y, r) {\\n        x.multiplyTo(y, r);\\n    };\\n    // NullExp.prototype.sqrTo = nSqrTo;\\n    NullExp.prototype.sqrTo = function (x, r) {\\n        x.squareTo(r);\\n    };\\n    return NullExp;\\n}());\\n// Modular reduction using \\\"classic\\\" algorithm\\nvar Classic = /** @class */ (function () {\\n    function Classic(m) {\\n        this.m = m;\\n    }\\n    // Classic.prototype.convert = cConvert;\\n    Classic.prototype.convert = function (x) {\\n        if (x.s \u003c 0 || x.compareTo(this.m) \u003e= 0) {\\n            return x.mod(this.m);\\n        }\\n        else {\\n            return x;\\n        }\\n    };\\n    // Classic.prototype.revert = cRevert;\\n    Classic.prototype.revert = function (x) {\\n        return x;\\n    };\\n    // Classic.prototype.reduce = cReduce;\\n    Classic.prototype.reduce = function (x) {\\n        x.divRemTo(this.m, null, x);\\n    };\\n    // Classic.prototype.mulTo = cMulTo;\\n    Classic.prototype.mulTo = function (x, y, r) {\\n        x.multiplyTo(y, r);\\n        this.reduce(r);\\n    };\\n    // Classic.prototype.sqrTo = cSqrTo;\\n    Classic.prototype.sqrTo = function (x, r) {\\n        x.squareTo(r);\\n        this.reduce(r);\\n    };\\n    return Classic;\\n}());\\n//#endregion\\n//#region Montgomery\\n// Montgomery reduction\\nvar Montgomery = /** @class */ (function () {\\n    function Montgomery(m) {\\n        this.m = m;\\n        this.mp = m.invDigit();\\n        this.mpl = this.mp \u0026 0x7fff;\\n        this.mph = this.mp \u003e\u003e 15;\\n        this.um = (1 \u003c\u003c (m.DB - 15)) - 1;\\n        this.mt2 = 2 * m.t;\\n    }\\n    // Montgomery.prototype.convert = montConvert;\\n    // xR mod m\\n    Montgomery.prototype.convert = function (x) {\\n        var r = nbi();\\n        x.abs().dlShiftTo(this.m.t, r);\\n        r.divRemTo(this.m, null, r);\\n        if (x.s \u003c 0 \u0026\u0026 r.compareTo(BigInteger.ZERO) \u003e 0) {\\n            this.m.subTo(r, r);\\n        }\\n        return r;\\n    };\\n    // Montgomery.prototype.revert = montRevert;\\n    // x/R mod m\\n    Montgomery.prototype.revert = function (x) {\\n        var r = nbi();\\n        x.copyTo(r);\\n        this.reduce(r);\\n        return r;\\n    };\\n    // Montgomery.prototype.reduce = montReduce;\\n    // x = x/R mod m (HAC 14.32)\\n    Montgomery.prototype.reduce = function (x) {\\n        while (x.t \u003c= this.mt2) {\\n            // pad x so am has enough room later\\n            x[x.t++] = 0;\\n        }\\n        for (var i = 0; i \u003c this.m.t; ++i) {\\n            // faster way of calculating u0 = x[i]*mp mod DV\\n            var j = x[i] \u0026 0x7fff;\\n            var u0 = (j * this.mpl + (((j * this.mph + (x[i] \u003e\u003e 15) * this.mpl) \u0026 this.um) \u003c\u003c 15)) \u0026 x.DM;\\n            // use am to combine the multiply-shift-add into one call\\n            j = i + this.m.t;\\n            x[j] += this.m.am(0, u0, x, i, 0, this.m.t);\\n            // propagate carry\\n            while (x[j] \u003e= x.DV) {\\n                x[j] -= x.DV;\\n                x[++j]++;\\n            }\\n        }\\n        x.clamp();\\n        x.drShiftTo(this.m.t, x);\\n        if (x.compareTo(this.m) \u003e= 0) {\\n            x.subTo(this.m, x);\\n        }\\n    };\\n    // Montgomery.prototype.mulTo = montMulTo;\\n    // r = \\\"xy/R mod m\\\"; x,y != r\\n    Montgomery.prototype.mulTo = function (x, y, r) {\\n        x.multiplyTo(y, r);\\n        this.reduce(r);\\n    };\\n    // Montgomery.prototype.sqrTo = montSqrTo;\\n    // r = \\\"x^2/R mod m\\\"; x != r\\n    Montgomery.prototype.sqrTo = function (x, r) {\\n        x.squareTo(r);\\n        this.reduce(r);\\n    };\\n    return Montgomery;\\n}());\\n//#endregion Montgomery\\n//#region Barrett\\n// Barrett modular reduction\\nvar Barrett = /** @class */ (function () {\\n    function Barrett(m) {\\n        this.m = m;\\n        // setup Barrett\\n        this.r2 = nbi();\\n        this.q3 = nbi();\\n        BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);\\n        this.mu = this.r2.divide(m);\\n    }\\n    // Barrett.prototype.convert = barrettConvert;\\n    Barrett.prototype.convert = function (x) {\\n        if (x.s \u003c 0 || x.t \u003e 2 * this.m.t) {\\n            return x.mod(this.m);\\n        }\\n        else if (x.compareTo(this.m) \u003c 0) {\\n            return x;\\n        }\\n        else {\\n            var r = nbi();\\n            x.copyTo(r);\\n            this.reduce(r);\\n            return r;\\n        }\\n    };\\n    // Barrett.prototype.revert = barrettRevert;\\n    Barrett.prototype.revert = function (x) {\\n        return x;\\n    };\\n    // Barrett.prototype.reduce = barrettReduce;\\n    // x = x mod m (HAC 14.42)\\n    Barrett.prototype.reduce = function (x) {\\n        x.drShiftTo(this.m.t - 1, this.r2);\\n        if (x.t \u003e this.m.t + 1) {\\n            x.t = this.m.t + 1;\\n            x.clamp();\\n        }\\n        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);\\n        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);\\n        while (x.compareTo(this.r2) \u003c 0) {\\n            x.dAddOffset(1, this.m.t + 1);\\n        }\\n        x.subTo(this.r2, x);\\n        while (x.compareTo(this.m) \u003e= 0) {\\n            x.subTo(this.m, x);\\n        }\\n    };\\n    // Barrett.prototype.mulTo = barrettMulTo;\\n    // r = x*y mod m; x,y != r\\n    Barrett.prototype.mulTo = function (x, y, r) {\\n        x.multiplyTo(y, r);\\n        this.reduce(r);\\n    };\\n    // Barrett.prototype.sqrTo = barrettSqrTo;\\n    // r = x^2 mod m; x != r\\n    Barrett.prototype.sqrTo = function (x, r) {\\n        x.squareTo(r);\\n        this.reduce(r);\\n    };\\n    return Barrett;\\n}());\\n//#endregion\\n//#endregion REDUCERS\\n// return new, unset BigInteger\\nfunction nbi() { return new BigInteger(null); }\\nfunction parseBigInt(str, r) {\\n    return new BigInteger(str, r);\\n}\\n// am: Compute w_j += (x*this_i), propagate carries,\\n// c is initial carry, returns final carry.\\n// c \u003c 3*dvalue, x \u003c 2*dvalue, this_i \u003c dvalue\\n// We need to select the fastest one that works in this environment.\\nvar inBrowser = typeof navigator !== \\\"undefined\\\";\\nif (inBrowser \u0026\u0026 j_lm \u0026\u0026 (navigator.appName == \\\"Microsoft Internet Explorer\\\")) {\\n    // am2 avoids a big mult-and-extract completely.\\n    // Max digit bits should be \u003c= 30 because we do bitwise ops\\n    // on values up to 2*hdvalue^2-hdvalue-1 (\u003c 2^31)\\n    BigInteger.prototype.am = function am2(i, x, w, j, c, n) {\\n        var xl = x \u0026 0x7fff;\\n        var xh = x \u003e\u003e 15;\\n        while (--n \u003e= 0) {\\n            var l = this[i] \u0026 0x7fff;\\n            var h = this[i++] \u003e\u003e 15;\\n            var m = xh * l + h * xl;\\n            l = xl * l + ((m \u0026 0x7fff) \u003c\u003c 15) + w[j] + (c \u0026 0x3fffffff);\\n            c = (l \u003e\u003e\u003e 30) + (m \u003e\u003e\u003e 15) + xh * h + (c \u003e\u003e\u003e 30);\\n            w[j++] = l \u0026 0x3fffffff;\\n        }\\n        return c;\\n    };\\n    dbits = 30;\\n}\\nelse if (inBrowser \u0026\u0026 j_lm \u0026\u0026 (navigator.appName != \\\"Netscape\\\")) {\\n    // am1: use a single mult and divide to get the high bits,\\n    // max digit bits should be 26 because\\n    // max internal value = 2*dvalue^2-2*dvalue (\u003c 2^53)\\n    BigInteger.prototype.am = function am1(i, x, w, j, c, n) {\\n        while (--n \u003e= 0) {\\n            var v = x * this[i++] + w[j] + c;\\n            c = Math.floor(v / 0x4000000);\\n            w[j++] = v \u0026 0x3ffffff;\\n        }\\n        return c;\\n    };\\n    dbits = 26;\\n}\\nelse { // Mozilla/Netscape seems to prefer am3\\n    // Alternately, set max digit bits to 28 since some\\n    // browsers slow down when dealing with 32-bit numbers.\\n    BigInteger.prototype.am = function am3(i, x, w, j, c, n) {\\n        var xl = x \u0026 0x3fff;\\n        var xh = x \u003e\u003e 14;\\n        while (--n \u003e= 0) {\\n            var l = this[i] \u0026 0x3fff;\\n            var h = this[i++] \u003e\u003e 14;\\n            var m = xh * l + h * xl;\\n            l = xl * l + ((m \u0026 0x3fff) \u003c\u003c 14) + w[j] + c;\\n            c = (l \u003e\u003e 28) + (m \u003e\u003e 14) + xh * h;\\n            w[j++] = l \u0026 0xfffffff;\\n        }\\n        return c;\\n    };\\n    dbits = 28;\\n}\\nBigInteger.prototype.DB = dbits;\\nBigInteger.prototype.DM = ((1 \u003c\u003c dbits) - 1);\\nBigInteger.prototype.DV = (1 \u003c\u003c dbits);\\nvar BI_FP = 52;\\nBigInteger.prototype.FV = Math.pow(2, BI_FP);\\nBigInteger.prototype.F1 = BI_FP - dbits;\\nBigInteger.prototype.F2 = 2 * dbits - BI_FP;\\n// Digit conversions\\nvar BI_RC = [];\\nvar rr;\\nvar vv;\\nrr = \\\"0\\\".charCodeAt(0);\\nfor (vv = 0; vv \u003c= 9; ++vv) {\\n    BI_RC[rr++] = vv;\\n}\\nrr = \\\"a\\\".charCodeAt(0);\\nfor (vv = 10; vv \u003c 36; ++vv) {\\n    BI_RC[rr++] = vv;\\n}\\nrr = \\\"A\\\".charCodeAt(0);\\nfor (vv = 10; vv \u003c 36; ++vv) {\\n    BI_RC[rr++] = vv;\\n}\\nfunction intAt(s, i) {\\n    var c = BI_RC[s.charCodeAt(i)];\\n    return (c == null) ? -1 : c;\\n}\\n// return bigint initialized to value\\nfunction nbv(i) {\\n    var r = nbi();\\n    r.fromInt(i);\\n    return r;\\n}\\n// returns bit length of the integer x\\nfunction nbits(x) {\\n    var r = 1;\\n    var t;\\n    if ((t = x \u003e\u003e\u003e 16) != 0) {\\n        x = t;\\n        r += 16;\\n    }\\n    if ((t = x \u003e\u003e 8) != 0) {\\n        x = t;\\n        r += 8;\\n    }\\n    if ((t = x \u003e\u003e 4) != 0) {\\n        x = t;\\n        r += 4;\\n    }\\n    if ((t = x \u003e\u003e 2) != 0) {\\n        x = t;\\n        r += 2;\\n    }\\n    if ((t = x \u003e\u003e 1) != 0) {\\n        x = t;\\n        r += 1;\\n    }\\n    return r;\\n}\\n// \\\"constants\\\"\\nBigInteger.ZERO = nbv(0);\\nBigInteger.ONE = nbv(1);\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/lib/jsbn/jsbn.js?\");","","/***/ }),","","/***/ \"./lib/lib/jsbn/prng4.js\":","/*!*******************************!*\\","  !*** ./lib/lib/jsbn/prng4.js ***!","  \\*******************************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"Arcfour\\\": () =\u003e (/* binding */ Arcfour),\\n/* harmony export */   \\\"prng_newstate\\\": () =\u003e (/* binding */ prng_newstate),\\n/* harmony export */   \\\"rng_psize\\\": () =\u003e (/* binding */ rng_psize)\\n/* harmony export */ });\\n// prng4.js - uses Arcfour as a PRNG\\nvar Arcfour = /** @class */ (function () {\\n    function Arcfour() {\\n        this.i = 0;\\n        this.j = 0;\\n        this.S = [];\\n    }\\n    // Arcfour.prototype.init = ARC4init;\\n    // Initialize arcfour context from key, an array of ints, each from [0..255]\\n    Arcfour.prototype.init = function (key) {\\n        var i;\\n        var j;\\n        var t;\\n        for (i = 0; i \u003c 256; ++i) {\\n            this.S[i] = i;\\n        }\\n        j = 0;\\n        for (i = 0; i \u003c 256; ++i) {\\n            j = (j + this.S[i] + key[i % key.length]) \u0026 255;\\n            t = this.S[i];\\n            this.S[i] = this.S[j];\\n            this.S[j] = t;\\n        }\\n        this.i = 0;\\n        this.j = 0;\\n    };\\n    // Arcfour.prototype.next = ARC4next;\\n    Arcfour.prototype.next = function () {\\n        var t;\\n        this.i = (this.i + 1) \u0026 255;\\n        this.j = (this.j + this.S[this.i]) \u0026 255;\\n        t = this.S[this.i];\\n        this.S[this.i] = this.S[this.j];\\n        this.S[this.j] = t;\\n        return this.S[(t + this.S[this.i]) \u0026 255];\\n    };\\n    return Arcfour;\\n}());\\n\\n// Plug in your RNG constructor here\\nfunction prng_newstate() {\\n    return new Arcfour();\\n}\\n// Pool size must be a multiple of 4 and greater than 32.\\n// An array of bytes the size of the pool will be passed to init()\\nvar rng_psize = 256;\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/lib/jsbn/prng4.js?\");","","/***/ }),","","/***/ \"./lib/lib/jsbn/rng.js\":","/*!*****************************!*\\","  !*** ./lib/lib/jsbn/rng.js ***!","  \\*****************************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"SecureRandom\\\": () =\u003e (/* binding */ SecureRandom)\\n/* harmony export */ });\\n/* harmony import */ var _prng4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prng4 */ \\\"./lib/lib/jsbn/prng4.js\\\");\\n// Random number generator - requires a PRNG backend, e.g. prng4.js\\n\\nvar rng_state;\\nvar rng_pool = null;\\nvar rng_pptr;\\n// Initialize the pool with junk if needed.\\nif (rng_pool == null) {\\n    rng_pool = [];\\n    rng_pptr = 0;\\n    var t = void 0;\\n    if (typeof this !== 'undefined' \u0026\u0026 this.crypto \u0026\u0026 this.crypto.getRandomValues) {\\n        // Extract entropy (2048 bits) from RNG if available\\n        var z = new Uint32Array(256);\\n        this.crypto.getRandomValues(z);\\n        for (t = 0; t \u003c z.length; ++t) {\\n            rng_pool[rng_pptr++] = z[t] \u0026 255;\\n        }\\n    }\\n    // Use mouse events for entropy, if we do not have enough entropy by the time\\n    // we need it, entropy will be generated by Math.random.\\n    var count = 0;\\n    var onMouseMoveListener_1 = function (ev) {\\n        count = count || 0;\\n        if (count \u003e= 256 || rng_pptr \u003e= _prng4__WEBPACK_IMPORTED_MODULE_0__.rng_psize) {\\n            if (this.removeEventListener) {\\n                this.removeEventListener(\\\"mousemove\\\", onMouseMoveListener_1, false);\\n            }\\n            else if (this.detachEvent) {\\n                this.detachEvent(\\\"onmousemove\\\", onMouseMoveListener_1);\\n            }\\n            return;\\n        }\\n        try {\\n            var mouseCoordinates = ev.x + ev.y;\\n            rng_pool[rng_pptr++] = mouseCoordinates \u0026 255;\\n            count += 1;\\n        }\\n        catch (e) {\\n            // Sometimes Firefox will deny permission to access event properties for some reason. Ignore.\\n        }\\n    };\\n    if (typeof this !== 'undefined') {\\n        if (this.addEventListener) {\\n            this.addEventListener(\\\"mousemove\\\", onMouseMoveListener_1, false);\\n        }\\n        else if (this.attachEvent) {\\n            this.attachEvent(\\\"onmousemove\\\", onMouseMoveListener_1);\\n        }\\n    }\\n}\\nfunction rng_get_byte() {\\n    if (rng_state == null) {\\n        rng_state = (0,_prng4__WEBPACK_IMPORTED_MODULE_0__.prng_newstate)();\\n        // At this point, we may not have collected enough entropy.  If not, fall back to Math.random\\n        while (rng_pptr \u003c _prng4__WEBPACK_IMPORTED_MODULE_0__.rng_psize) {\\n            var random = Math.floor(65536 * Math.random());\\n            rng_pool[rng_pptr++] = random \u0026 255;\\n        }\\n        rng_state.init(rng_pool);\\n        for (rng_pptr = 0; rng_pptr \u003c rng_pool.length; ++rng_pptr) {\\n            rng_pool[rng_pptr] = 0;\\n        }\\n        rng_pptr = 0;\\n    }\\n    // TODO: allow reseeding after first request\\n    return rng_state.next();\\n}\\nvar SecureRandom = /** @class */ (function () {\\n    function SecureRandom() {\\n    }\\n    SecureRandom.prototype.nextBytes = function (ba) {\\n        for (var i = 0; i \u003c ba.length; ++i) {\\n            ba[i] = rng_get_byte();\\n        }\\n    };\\n    return SecureRandom;\\n}());\\n\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/lib/jsbn/rng.js?\");","","/***/ }),","","/***/ \"./lib/lib/jsbn/rsa.js\":","/*!*****************************!*\\","  !*** ./lib/lib/jsbn/rsa.js ***!","  \\*****************************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"RSAKey\\\": () =\u003e (/* binding */ RSAKey)\\n/* harmony export */ });\\n/* harmony import */ var _jsbn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsbn */ \\\"./lib/lib/jsbn/jsbn.js\\\");\\n/* harmony import */ var _rng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng */ \\\"./lib/lib/jsbn/rng.js\\\");\\n// Depends on jsbn.js and rng.js\\n// Version 1.1: support utf-8 encoding in pkcs1pad2\\n// convert a (hex) string to a bignum object\\n\\n\\n// function linebrk(s,n) {\\n//   var ret = \\\"\\\";\\n//   var i = 0;\\n//   while(i + n \u003c s.length) {\\n//     ret += s.substring(i,i+n) + \\\"\\\\n\\\";\\n//     i += n;\\n//   }\\n//   return ret + s.substring(i,s.length);\\n// }\\n// function byte2Hex(b) {\\n//   if(b \u003c 0x10)\\n//     return \\\"0\\\" + b.toString(16);\\n//   else\\n//     return b.toString(16);\\n// }\\nfunction pkcs1pad1(s, n) {\\n    if (n \u003c s.length + 22) {\\n        console.error(\\\"Message too long for RSA\\\");\\n        return null;\\n    }\\n    var len = n - s.length - 6;\\n    var filler = \\\"\\\";\\n    for (var f = 0; f \u003c len; f += 2) {\\n        filler += \\\"ff\\\";\\n    }\\n    var m = \\\"0001\\\" + filler + \\\"00\\\" + s;\\n    return (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(m, 16);\\n}\\n// PKCS#1 (type 2, random) pad input string s to n bytes, and return a bigint\\nfunction pkcs1pad2(s, n) {\\n    if (n \u003c s.length + 11) { // TODO: fix for utf-8\\n        console.error(\\\"Message too long for RSA\\\");\\n        return null;\\n    }\\n    var ba = [];\\n    var i = s.length - 1;\\n    while (i \u003e= 0 \u0026\u0026 n \u003e 0) {\\n        var c = s.charCodeAt(i--);\\n        if (c \u003c 128) { // encode using utf-8\\n            ba[--n] = c;\\n        }\\n        else if ((c \u003e 127) \u0026\u0026 (c \u003c 2048)) {\\n            ba[--n] = (c \u0026 63) | 128;\\n            ba[--n] = (c \u003e\u003e 6) | 192;\\n        }\\n        else {\\n            ba[--n] = (c \u0026 63) | 128;\\n            ba[--n] = ((c \u003e\u003e 6) \u0026 63) | 128;\\n            ba[--n] = (c \u003e\u003e 12) | 224;\\n        }\\n    }\\n    ba[--n] = 0;\\n    var rng = new _rng__WEBPACK_IMPORTED_MODULE_1__.SecureRandom();\\n    var x = [];\\n    while (n \u003e 2) { // random non-zero pad\\n        x[0] = 0;\\n        while (x[0] == 0) {\\n            rng.nextBytes(x);\\n        }\\n        ba[--n] = x[0];\\n    }\\n    ba[--n] = 2;\\n    ba[--n] = 0;\\n    return new _jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(ba);\\n}\\n// \\\"empty\\\" RSA key constructor\\nvar RSAKey = /** @class */ (function () {\\n    function RSAKey() {\\n        this.n = null;\\n        this.e = 0;\\n        this.d = null;\\n        this.p = null;\\n        this.q = null;\\n        this.dmp1 = null;\\n        this.dmq1 = null;\\n        this.coeff = null;\\n    }\\n    //#region PROTECTED\\n    // protected\\n    // RSAKey.prototype.doPublic = RSADoPublic;\\n    // Perform raw public operation on \\\"x\\\": return x^e (mod n)\\n    RSAKey.prototype.doPublic = function (x) {\\n        return x.modPowInt(this.e, this.n);\\n    };\\n    // RSAKey.prototype.doPrivate = RSADoPrivate;\\n    // Perform raw private operation on \\\"x\\\": return x^d (mod n)\\n    RSAKey.prototype.doPrivate = function (x) {\\n        if (this.p == null || this.q == null) {\\n            return x.modPow(this.d, this.n);\\n        }\\n        // TODO: re-calculate any missing CRT params\\n        var xp = x.mod(this.p).modPow(this.dmp1, this.p);\\n        var xq = x.mod(this.q).modPow(this.dmq1, this.q);\\n        while (xp.compareTo(xq) \u003c 0) {\\n            xp = xp.add(this.p);\\n        }\\n        return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);\\n    };\\n    //#endregion PROTECTED\\n    //#region PUBLIC\\n    // RSAKey.prototype.setPublic = RSASetPublic;\\n    // Set the public key fields N and e from hex strings\\n    RSAKey.prototype.setPublic = function (N, E) {\\n        if (N != null \u0026\u0026 E != null \u0026\u0026 N.length \u003e 0 \u0026\u0026 E.length \u003e 0) {\\n            this.n = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(N, 16);\\n            this.e = parseInt(E, 16);\\n        }\\n        else {\\n            console.error(\\\"Invalid RSA public key\\\");\\n        }\\n    };\\n    // RSAKey.prototype.encrypt = RSAEncrypt;\\n    // Return the PKCS#1 RSA encryption of \\\"text\\\" as an even-length hex string\\n    RSAKey.prototype.encrypt = function (text) {\\n        var maxLength = (this.n.bitLength() + 7) \u003e\u003e 3;\\n        var m = pkcs1pad2(text, maxLength);\\n        if (m == null) {\\n            return null;\\n        }\\n        var c = this.doPublic(m);\\n        if (c == null) {\\n            return null;\\n        }\\n        var h = c.toString(16);\\n        var length = h.length;\\n        // fix zero before result\\n        for (var i = 0; i \u003c maxLength * 2 - length; i++) {\\n            h = \\\"0\\\" + h;\\n        }\\n        return h;\\n    };\\n    // RSAKey.prototype.setPrivate = RSASetPrivate;\\n    // Set the private key fields N, e, and d from hex strings\\n    RSAKey.prototype.setPrivate = function (N, E, D) {\\n        if (N != null \u0026\u0026 E != null \u0026\u0026 N.length \u003e 0 \u0026\u0026 E.length \u003e 0) {\\n            this.n = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(N, 16);\\n            this.e = parseInt(E, 16);\\n            this.d = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(D, 16);\\n        }\\n        else {\\n            console.error(\\\"Invalid RSA private key\\\");\\n        }\\n    };\\n    // RSAKey.prototype.setPrivateEx = RSASetPrivateEx;\\n    // Set the private key fields N, e, d and CRT params from hex strings\\n    RSAKey.prototype.setPrivateEx = function (N, E, D, P, Q, DP, DQ, C) {\\n        if (N != null \u0026\u0026 E != null \u0026\u0026 N.length \u003e 0 \u0026\u0026 E.length \u003e 0) {\\n            this.n = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(N, 16);\\n            this.e = parseInt(E, 16);\\n            this.d = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(D, 16);\\n            this.p = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(P, 16);\\n            this.q = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(Q, 16);\\n            this.dmp1 = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(DP, 16);\\n            this.dmq1 = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(DQ, 16);\\n            this.coeff = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(C, 16);\\n        }\\n        else {\\n            console.error(\\\"Invalid RSA private key\\\");\\n        }\\n    };\\n    // RSAKey.prototype.generate = RSAGenerate;\\n    // Generate a new random private key B bits long, using public expt E\\n    RSAKey.prototype.generate = function (B, E) {\\n        var rng = new _rng__WEBPACK_IMPORTED_MODULE_1__.SecureRandom();\\n        var qs = B \u003e\u003e 1;\\n        this.e = parseInt(E, 16);\\n        var ee = new _jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(E, 16);\\n        for (;;) {\\n            for (;;) {\\n                this.p = new _jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(B - qs, 1, rng);\\n                if (this.p.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE).gcd(ee).compareTo(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE) == 0 \u0026\u0026 this.p.isProbablePrime(10)) {\\n                    break;\\n                }\\n            }\\n            for (;;) {\\n                this.q = new _jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(qs, 1, rng);\\n                if (this.q.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE).gcd(ee).compareTo(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE) == 0 \u0026\u0026 this.q.isProbablePrime(10)) {\\n                    break;\\n                }\\n            }\\n            if (this.p.compareTo(this.q) \u003c= 0) {\\n                var t = this.p;\\n                this.p = this.q;\\n                this.q = t;\\n            }\\n            var p1 = this.p.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE);\\n            var q1 = this.q.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE);\\n            var phi = p1.multiply(q1);\\n            if (phi.gcd(ee).compareTo(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE) == 0) {\\n                this.n = this.p.multiply(this.q);\\n                this.d = ee.modInverse(phi);\\n                this.dmp1 = this.d.mod(p1);\\n                this.dmq1 = this.d.mod(q1);\\n                this.coeff = this.q.modInverse(this.p);\\n                break;\\n            }\\n        }\\n    };\\n    // RSAKey.prototype.decrypt = RSADecrypt;\\n    // Return the PKCS#1 RSA decryption of \\\"ctext\\\".\\n    // \\\"ctext\\\" is an even-length hex string and the output is a plain string.\\n    RSAKey.prototype.decrypt = function (ctext) {\\n        var c = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(ctext, 16);\\n        var m = this.doPrivate(c);\\n        if (m == null) {\\n            return null;\\n        }\\n        return pkcs1unpad2(m, (this.n.bitLength() + 7) \u003e\u003e 3);\\n    };\\n    // Generate a new random private key B bits long, using public expt E\\n    RSAKey.prototype.generateAsync = function (B, E, callback) {\\n        var rng = new _rng__WEBPACK_IMPORTED_MODULE_1__.SecureRandom();\\n        var qs = B \u003e\u003e 1;\\n        this.e = parseInt(E, 16);\\n        var ee = new _jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(E, 16);\\n        var rsa = this;\\n        // These functions have non-descript names because they were originally for(;;) loops.\\n        // I don't know about cryptography to give them better names than loop1-4.\\n        var loop1 = function () {\\n            var loop4 = function () {\\n                if (rsa.p.compareTo(rsa.q) \u003c= 0) {\\n                    var t = rsa.p;\\n                    rsa.p = rsa.q;\\n                    rsa.q = t;\\n                }\\n                var p1 = rsa.p.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE);\\n                var q1 = rsa.q.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE);\\n                var phi = p1.multiply(q1);\\n                if (phi.gcd(ee).compareTo(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE) == 0) {\\n                    rsa.n = rsa.p.multiply(rsa.q);\\n                    rsa.d = ee.modInverse(phi);\\n                    rsa.dmp1 = rsa.d.mod(p1);\\n                    rsa.dmq1 = rsa.d.mod(q1);\\n                    rsa.coeff = rsa.q.modInverse(rsa.p);\\n                    setTimeout(function () { callback(); }, 0); // escape\\n                }\\n                else {\\n                    setTimeout(loop1, 0);\\n                }\\n            };\\n            var loop3 = function () {\\n                rsa.q = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.nbi)();\\n                rsa.q.fromNumberAsync(qs, 1, rng, function () {\\n                    rsa.q.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE).gcda(ee, function (r) {\\n                        if (r.compareTo(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE) == 0 \u0026\u0026 rsa.q.isProbablePrime(10)) {\\n                            setTimeout(loop4, 0);\\n                        }\\n                        else {\\n                            setTimeout(loop3, 0);\\n                        }\\n                    });\\n                });\\n            };\\n            var loop2 = function () {\\n                rsa.p = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.nbi)();\\n                rsa.p.fromNumberAsync(B - qs, 1, rng, function () {\\n                    rsa.p.subtract(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE).gcda(ee, function (r) {\\n                        if (r.compareTo(_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE) == 0 \u0026\u0026 rsa.p.isProbablePrime(10)) {\\n                            setTimeout(loop3, 0);\\n                        }\\n                        else {\\n                            setTimeout(loop2, 0);\\n                        }\\n                    });\\n                });\\n            };\\n            setTimeout(loop2, 0);\\n        };\\n        setTimeout(loop1, 0);\\n    };\\n    RSAKey.prototype.sign = function (text, digestMethod, digestName) {\\n        var header = getDigestHeader(digestName);\\n        var digest = header + digestMethod(text).toString();\\n        var m = pkcs1pad1(digest, this.n.bitLength() / 4);\\n        if (m == null) {\\n            return null;\\n        }\\n        var c = this.doPrivate(m);\\n        if (c == null) {\\n            return null;\\n        }\\n        var h = c.toString(16);\\n        if ((h.length \u0026 1) == 0) {\\n            return h;\\n        }\\n        else {\\n            return \\\"0\\\" + h;\\n        }\\n    };\\n    RSAKey.prototype.verify = function (text, signature, digestMethod) {\\n        var c = (0,_jsbn__WEBPACK_IMPORTED_MODULE_0__.parseBigInt)(signature, 16);\\n        var m = this.doPublic(c);\\n        if (m == null) {\\n            return null;\\n        }\\n        var unpadded = m.toString(16).replace(/^1f+00/, \\\"\\\");\\n        var digest = removeDigestHeader(unpadded);\\n        return digest == digestMethod(text).toString();\\n    };\\n    return RSAKey;\\n}());\\n\\n// Undo PKCS#1 (type 2, random) padding and, if valid, return the plaintext\\nfunction pkcs1unpad2(d, n) {\\n    var b = d.toByteArray();\\n    var i = 0;\\n    while (i \u003c b.length \u0026\u0026 b[i] == 0) {\\n        ++i;\\n    }\\n    if (b.length - i != n - 1 || b[i] != 2) {\\n        return null;\\n    }\\n    ++i;\\n    while (b[i] != 0) {\\n        if (++i \u003e= b.length) {\\n            return null;\\n        }\\n    }\\n    var ret = \\\"\\\";\\n    while (++i \u003c b.length) {\\n        var c = b[i] \u0026 255;\\n        if (c \u003c 128) { // utf-8 decode\\n            ret += String.fromCharCode(c);\\n        }\\n        else if ((c \u003e 191) \u0026\u0026 (c \u003c 224)) {\\n            ret += String.fromCharCode(((c \u0026 31) \u003c\u003c 6) | (b[i + 1] \u0026 63));\\n            ++i;\\n        }\\n        else {\\n            ret += String.fromCharCode(((c \u0026 15) \u003c\u003c 12) | ((b[i + 1] \u0026 63) \u003c\u003c 6) | (b[i + 2] \u0026 63));\\n            i += 2;\\n        }\\n    }\\n    return ret;\\n}\\n// https://tools.ietf.org/html/rfc3447#page-43\\nvar DIGEST_HEADERS = {\\n    md2: \\\"3020300c06082a864886f70d020205000410\\\",\\n    md5: \\\"3020300c06082a864886f70d020505000410\\\",\\n    sha1: \\\"3021300906052b0e03021a05000414\\\",\\n    sha224: \\\"302d300d06096086480165030402040500041c\\\",\\n    sha256: \\\"3031300d060960864801650304020105000420\\\",\\n    sha384: \\\"3041300d060960864801650304020205000430\\\",\\n    sha512: \\\"3051300d060960864801650304020305000440\\\",\\n    ripemd160: \\\"3021300906052b2403020105000414\\\"\\n};\\nfunction getDigestHeader(name) {\\n    return DIGEST_HEADERS[name] || \\\"\\\";\\n}\\nfunction removeDigestHeader(str) {\\n    for (var name_1 in DIGEST_HEADERS) {\\n        if (DIGEST_HEADERS.hasOwnProperty(name_1)) {\\n            var header = DIGEST_HEADERS[name_1];\\n            var len = header.length;\\n            if (str.substr(0, len) == header) {\\n                return str.substr(len);\\n            }\\n        }\\n    }\\n    return str;\\n}\\n// Return the PKCS#1 RSA encryption of \\\"text\\\" as a Base64-encoded string\\n// function RSAEncryptB64(text) {\\n//  var h = this.encrypt(text);\\n//  if(h) return hex2b64(h); else return null;\\n// }\\n// public\\n// RSAKey.prototype.encrypt_b64 = RSAEncryptB64;\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/lib/jsbn/rsa.js?\");","","/***/ }),","","/***/ \"./lib/lib/jsbn/util.js\":","/*!******************************!*\\","  !*** ./lib/lib/jsbn/util.js ***!","  \\******************************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"cbit\\\": () =\u003e (/* binding */ cbit),\\n/* harmony export */   \\\"int2char\\\": () =\u003e (/* binding */ int2char),\\n/* harmony export */   \\\"lbit\\\": () =\u003e (/* binding */ lbit),\\n/* harmony export */   \\\"op_and\\\": () =\u003e (/* binding */ op_and),\\n/* harmony export */   \\\"op_andnot\\\": () =\u003e (/* binding */ op_andnot),\\n/* harmony export */   \\\"op_or\\\": () =\u003e (/* binding */ op_or),\\n/* harmony export */   \\\"op_xor\\\": () =\u003e (/* binding */ op_xor)\\n/* harmony export */ });\\nvar BI_RM = \\\"0123456789abcdefghijklmnopqrstuvwxyz\\\";\\nfunction int2char(n) {\\n    return BI_RM.charAt(n);\\n}\\n//#region BIT_OPERATIONS\\n// (public) this \u0026 a\\nfunction op_and(x, y) {\\n    return x \u0026 y;\\n}\\n// (public) this | a\\nfunction op_or(x, y) {\\n    return x | y;\\n}\\n// (public) this ^ a\\nfunction op_xor(x, y) {\\n    return x ^ y;\\n}\\n// (public) this \u0026 ~a\\nfunction op_andnot(x, y) {\\n    return x \u0026 ~y;\\n}\\n// return index of lowest 1-bit in x, x \u003c 2^31\\nfunction lbit(x) {\\n    if (x == 0) {\\n        return -1;\\n    }\\n    var r = 0;\\n    if ((x \u0026 0xffff) == 0) {\\n        x \u003e\u003e= 16;\\n        r += 16;\\n    }\\n    if ((x \u0026 0xff) == 0) {\\n        x \u003e\u003e= 8;\\n        r += 8;\\n    }\\n    if ((x \u0026 0xf) == 0) {\\n        x \u003e\u003e= 4;\\n        r += 4;\\n    }\\n    if ((x \u0026 3) == 0) {\\n        x \u003e\u003e= 2;\\n        r += 2;\\n    }\\n    if ((x \u0026 1) == 0) {\\n        ++r;\\n    }\\n    return r;\\n}\\n// return number of 1 bits in x\\nfunction cbit(x) {\\n    var r = 0;\\n    while (x != 0) {\\n        x \u0026= x - 1;\\n        ++r;\\n    }\\n    return r;\\n}\\n//#endregion BIT_OPERATIONS\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/lib/jsbn/util.js?\");","","/***/ }),","","/***/ \"./lib/lib/jsrsasign/asn1-1.0.js\":","/*!***************************************!*\\","  !*** ./lib/lib/jsrsasign/asn1-1.0.js ***!","  \\***************************************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"KJUR\\\": () =\u003e (/* binding */ KJUR)\\n/* harmony export */ });\\n/* harmony import */ var _jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsbn/jsbn */ \\\"./lib/lib/jsbn/jsbn.js\\\");\\n/* harmony import */ var _yahoo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yahoo */ \\\"./lib/lib/jsrsasign/yahoo.js\\\");\\n/* asn1-1.0.13.js (c) 2013-2017 Kenji Urushima | kjur.github.com/jsrsasign/license\\n */\\n/*\\n * asn1.js - ASN.1 DER encoder classes\\n *\\n * Copyright (c) 2013-2017 Kenji Urushima (kenji.urushima@gmail.com)\\n *\\n * This software is licensed under the terms of the MIT License.\\n * https://kjur.github.io/jsrsasign/license\\n *\\n * The above copyright and license notice shall be\\n * included in all copies or substantial portions of the Software.\\n */\\n\\n\\n/**\\n * @fileOverview\\n * @name asn1-1.0.js\\n * @author Kenji Urushima kenji.urushima@gmail.com\\n * @version asn1 1.0.13 (2017-Jun-02)\\n * @since jsrsasign 2.1\\n * @license \u003ca href=\\\"https://kjur.github.io/jsrsasign/license/\\\"\u003eMIT License\u003c/a\u003e\\n */\\n/**\\n * kjur's class library name space\\n * \u003cp\u003e\\n * This name space provides following name spaces:\\n * \u003cul\u003e\\n * \u003cli\u003e{@link KJUR.asn1} - ASN.1 primitive hexadecimal encoder\u003c/li\u003e\\n * \u003cli\u003e{@link KJUR.asn1.x509} - ASN.1 structure for X.509 certificate and CRL\u003c/li\u003e\\n * \u003cli\u003e{@link KJUR.crypto} - Java Cryptographic Extension(JCE) style MessageDigest/Signature\\n * class and utilities\u003c/li\u003e\\n * \u003c/ul\u003e\\n * \u003c/p\u003e\\n * NOTE: Please ignore method summary and document of this namespace. This caused by a bug of jsdoc2.\\n * @name KJUR\\n * @namespace kjur's class library name space\\n */\\nvar KJUR = {};\\n/**\\n * kjur's ASN.1 class library name space\\n * \u003cp\u003e\\n * This is ITU-T X.690 ASN.1 DER encoder class library and\\n * class structure and methods is very similar to\\n * org.bouncycastle.asn1 package of\\n * well known BouncyCaslte Cryptography Library.\\n * \u003ch4\u003ePROVIDING ASN.1 PRIMITIVES\u003c/h4\u003e\\n * Here are ASN.1 DER primitive classes.\\n * \u003cul\u003e\\n * \u003cli\u003e0x01 {@link KJUR.asn1.DERBoolean}\u003c/li\u003e\\n * \u003cli\u003e0x02 {@link KJUR.asn1.DERInteger}\u003c/li\u003e\\n * \u003cli\u003e0x03 {@link KJUR.asn1.DERBitString}\u003c/li\u003e\\n * \u003cli\u003e0x04 {@link KJUR.asn1.DEROctetString}\u003c/li\u003e\\n * \u003cli\u003e0x05 {@link KJUR.asn1.DERNull}\u003c/li\u003e\\n * \u003cli\u003e0x06 {@link KJUR.asn1.DERObjectIdentifier}\u003c/li\u003e\\n * \u003cli\u003e0x0a {@link KJUR.asn1.DEREnumerated}\u003c/li\u003e\\n * \u003cli\u003e0x0c {@link KJUR.asn1.DERUTF8String}\u003c/li\u003e\\n * \u003cli\u003e0x12 {@link KJUR.asn1.DERNumericString}\u003c/li\u003e\\n * \u003cli\u003e0x13 {@link KJUR.asn1.DERPrintableString}\u003c/li\u003e\\n * \u003cli\u003e0x14 {@link KJUR.asn1.DERTeletexString}\u003c/li\u003e\\n * \u003cli\u003e0x16 {@link KJUR.asn1.DERIA5String}\u003c/li\u003e\\n * \u003cli\u003e0x17 {@link KJUR.asn1.DERUTCTime}\u003c/li\u003e\\n * \u003cli\u003e0x18 {@link KJUR.asn1.DERGeneralizedTime}\u003c/li\u003e\\n * \u003cli\u003e0x30 {@link KJUR.asn1.DERSequence}\u003c/li\u003e\\n * \u003cli\u003e0x31 {@link KJUR.asn1.DERSet}\u003c/li\u003e\\n * \u003c/ul\u003e\\n * \u003ch4\u003eOTHER ASN.1 CLASSES\u003c/h4\u003e\\n * \u003cul\u003e\\n * \u003cli\u003e{@link KJUR.asn1.ASN1Object}\u003c/li\u003e\\n * \u003cli\u003e{@link KJUR.asn1.DERAbstractString}\u003c/li\u003e\\n * \u003cli\u003e{@link KJUR.asn1.DERAbstractTime}\u003c/li\u003e\\n * \u003cli\u003e{@link KJUR.asn1.DERAbstractStructured}\u003c/li\u003e\\n * \u003cli\u003e{@link KJUR.asn1.DERTaggedObject}\u003c/li\u003e\\n * \u003c/ul\u003e\\n * \u003ch4\u003eSUB NAME SPACES\u003c/h4\u003e\\n * \u003cul\u003e\\n * \u003cli\u003e{@link KJUR.asn1.cades} - CAdES long term signature format\u003c/li\u003e\\n * \u003cli\u003e{@link KJUR.asn1.cms} - Cryptographic Message Syntax\u003c/li\u003e\\n * \u003cli\u003e{@link KJUR.asn1.csr} - Certificate Signing Request (CSR/PKCS#10)\u003c/li\u003e\\n * \u003cli\u003e{@link KJUR.asn1.tsp} - RFC 3161 Timestamping Protocol Format\u003c/li\u003e\\n * \u003cli\u003e{@link KJUR.asn1.x509} - RFC 5280 X.509 certificate and CRL\u003c/li\u003e\\n * \u003c/ul\u003e\\n * \u003c/p\u003e\\n * NOTE: Please ignore method summary and document of this namespace.\\n * This caused by a bug of jsdoc2.\\n * @name KJUR.asn1\\n * @namespace\\n */\\nif (typeof KJUR.asn1 == \\\"undefined\\\" || !KJUR.asn1)\\n    KJUR.asn1 = {};\\n/**\\n * ASN1 utilities class\\n * @name KJUR.asn1.ASN1Util\\n * @class ASN1 utilities class\\n * @since asn1 1.0.2\\n */\\nKJUR.asn1.ASN1Util = new function () {\\n    this.integerToByteHex = function (i) {\\n        var h = i.toString(16);\\n        if ((h.length % 2) == 1)\\n            h = '0' + h;\\n        return h;\\n    };\\n    this.bigIntToMinTwosComplementsHex = function (bigIntegerValue) {\\n        var h = bigIntegerValue.toString(16);\\n        if (h.substr(0, 1) != '-') {\\n            if (h.length % 2 == 1) {\\n                h = '0' + h;\\n            }\\n            else {\\n                if (!h.match(/^[0-7]/)) {\\n                    h = '00' + h;\\n                }\\n            }\\n        }\\n        else {\\n            var hPos = h.substr(1);\\n            var xorLen = hPos.length;\\n            if (xorLen % 2 == 1) {\\n                xorLen += 1;\\n            }\\n            else {\\n                if (!h.match(/^[0-7]/)) {\\n                    xorLen += 2;\\n                }\\n            }\\n            var hMask = '';\\n            for (var i = 0; i \u003c xorLen; i++) {\\n                hMask += 'f';\\n            }\\n            var biMask = new _jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(hMask, 16);\\n            var biNeg = biMask.xor(bigIntegerValue).add(_jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger.ONE);\\n            h = biNeg.toString(16).replace(/^-/, '');\\n        }\\n        return h;\\n    };\\n    /**\\n     * get PEM string from hexadecimal data and header string\\n     * @name getPEMStringFromHex\\n     * @memberOf KJUR.asn1.ASN1Util\\n     * @function\\n     * @param {String} dataHex hexadecimal string of PEM body\\n     * @param {String} pemHeader PEM header string (ex. 'RSA PRIVATE KEY')\\n     * @return {String} PEM formatted string of input data\\n     * @description\\n     * This method converts a hexadecimal string to a PEM string with\\n     * a specified header. Its line break will be CRLF(\\\"\\\\r\\\\n\\\").\\n     * @example\\n     * var pem  = KJUR.asn1.ASN1Util.getPEMStringFromHex('616161', 'RSA PRIVATE KEY');\\n     * // value of pem will be:\\n     * -----BEGIN PRIVATE KEY-----\\n     * YWFh\\n     * -----END PRIVATE KEY-----\\n     */\\n    this.getPEMStringFromHex = function (dataHex, pemHeader) {\\n        return hextopem(dataHex, pemHeader);\\n    };\\n    /**\\n     * generate ASN1Object specifed by JSON parameters\\n     * @name newObject\\n     * @memberOf KJUR.asn1.ASN1Util\\n     * @function\\n     * @param {Array} param JSON parameter to generate ASN1Object\\n     * @return {KJUR.asn1.ASN1Object} generated object\\n     * @since asn1 1.0.3\\n     * @description\\n     * generate any ASN1Object specified by JSON param\\n     * including ASN.1 primitive or structured.\\n     * Generally 'param' can be described as follows:\\n     * \u003cblockquote\u003e\\n     * {TYPE-OF-ASNOBJ: ASN1OBJ-PARAMETER}\\n     * \u003c/blockquote\u003e\\n     * 'TYPE-OF-ASN1OBJ' can be one of following symbols:\\n     * \u003cul\u003e\\n     * \u003cli\u003e'bool' - DERBoolean\u003c/li\u003e\\n     * \u003cli\u003e'int' - DERInteger\u003c/li\u003e\\n     * \u003cli\u003e'bitstr' - DERBitString\u003c/li\u003e\\n     * \u003cli\u003e'octstr' - DEROctetString\u003c/li\u003e\\n     * \u003cli\u003e'null' - DERNull\u003c/li\u003e\\n     * \u003cli\u003e'oid' - DERObjectIdentifier\u003c/li\u003e\\n     * \u003cli\u003e'enum' - DEREnumerated\u003c/li\u003e\\n     * \u003cli\u003e'utf8str' - DERUTF8String\u003c/li\u003e\\n     * \u003cli\u003e'numstr' - DERNumericString\u003c/li\u003e\\n     * \u003cli\u003e'prnstr' - DERPrintableString\u003c/li\u003e\\n     * \u003cli\u003e'telstr' - DERTeletexString\u003c/li\u003e\\n     * \u003cli\u003e'ia5str' - DERIA5String\u003c/li\u003e\\n     * \u003cli\u003e'utctime' - DERUTCTime\u003c/li\u003e\\n     * \u003cli\u003e'gentime' - DERGeneralizedTime\u003c/li\u003e\\n     * \u003cli\u003e'seq' - DERSequence\u003c/li\u003e\\n     * \u003cli\u003e'set' - DERSet\u003c/li\u003e\\n     * \u003cli\u003e'tag' - DERTaggedObject\u003c/li\u003e\\n     * \u003c/ul\u003e\\n     * @example\\n     * newObject({'prnstr': 'aaa'});\\n     * newObject({'seq': [{'int': 3}, {'prnstr': 'aaa'}]})\\n     * // ASN.1 Tagged Object\\n     * newObject({'tag': {'tag': 'a1',\\n     *                    'explicit': true,\\n     *                    'obj': {'seq': [{'int': 3}, {'prnstr': 'aaa'}]}}});\\n     * // more simple representation of ASN.1 Tagged Object\\n     * newObject({'tag': ['a1',\\n     *                    true,\\n     *                    {'seq': [\\n     *                      {'int': 3},\\n     *                      {'prnstr': 'aaa'}]}\\n     *                   ]});\\n     */\\n    this.newObject = function (param) {\\n        var _KJUR = KJUR, _KJUR_asn1 = _KJUR.asn1, _DERBoolean = _KJUR_asn1.DERBoolean, _DERInteger = _KJUR_asn1.DERInteger, _DERBitString = _KJUR_asn1.DERBitString, _DEROctetString = _KJUR_asn1.DEROctetString, _DERNull = _KJUR_asn1.DERNull, _DERObjectIdentifier = _KJUR_asn1.DERObjectIdentifier, _DEREnumerated = _KJUR_asn1.DEREnumerated, _DERUTF8String = _KJUR_asn1.DERUTF8String, _DERNumericString = _KJUR_asn1.DERNumericString, _DERPrintableString = _KJUR_asn1.DERPrintableString, _DERTeletexString = _KJUR_asn1.DERTeletexString, _DERIA5String = _KJUR_asn1.DERIA5String, _DERUTCTime = _KJUR_asn1.DERUTCTime, _DERGeneralizedTime = _KJUR_asn1.DERGeneralizedTime, _DERSequence = _KJUR_asn1.DERSequence, _DERSet = _KJUR_asn1.DERSet, _DERTaggedObject = _KJUR_asn1.DERTaggedObject, _newObject = _KJUR_asn1.ASN1Util.newObject;\\n        var keys = Object.keys(param);\\n        if (keys.length != 1)\\n            throw \\\"key of param shall be only one.\\\";\\n        var key = keys[0];\\n        if (\\\":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:\\\".indexOf(\\\":\\\" + key + \\\":\\\") == -1)\\n            throw \\\"undefined key: \\\" + key;\\n        if (key == \\\"bool\\\")\\n            return new _DERBoolean(param[key]);\\n        if (key == \\\"int\\\")\\n            return new _DERInteger(param[key]);\\n        if (key == \\\"bitstr\\\")\\n            return new _DERBitString(param[key]);\\n        if (key == \\\"octstr\\\")\\n            return new _DEROctetString(param[key]);\\n        if (key == \\\"null\\\")\\n            return new _DERNull(param[key]);\\n        if (key == \\\"oid\\\")\\n            return new _DERObjectIdentifier(param[key]);\\n        if (key == \\\"enum\\\")\\n            return new _DEREnumerated(param[key]);\\n        if (key == \\\"utf8str\\\")\\n            return new _DERUTF8String(param[key]);\\n        if (key == \\\"numstr\\\")\\n            return new _DERNumericString(param[key]);\\n        if (key == \\\"prnstr\\\")\\n            return new _DERPrintableString(param[key]);\\n        if (key == \\\"telstr\\\")\\n            return new _DERTeletexString(param[key]);\\n        if (key == \\\"ia5str\\\")\\n            return new _DERIA5String(param[key]);\\n        if (key == \\\"utctime\\\")\\n            return new _DERUTCTime(param[key]);\\n        if (key == \\\"gentime\\\")\\n            return new _DERGeneralizedTime(param[key]);\\n        if (key == \\\"seq\\\") {\\n            var paramList = param[key];\\n            var a = [];\\n            for (var i = 0; i \u003c paramList.length; i++) {\\n                var asn1Obj = _newObject(paramList[i]);\\n                a.push(asn1Obj);\\n            }\\n            return new _DERSequence({ 'array': a });\\n        }\\n        if (key == \\\"set\\\") {\\n            var paramList = param[key];\\n            var a = [];\\n            for (var i = 0; i \u003c paramList.length; i++) {\\n                var asn1Obj = _newObject(paramList[i]);\\n                a.push(asn1Obj);\\n            }\\n            return new _DERSet({ 'array': a });\\n        }\\n        if (key == \\\"tag\\\") {\\n            var tagParam = param[key];\\n            if (Object.prototype.toString.call(tagParam) === '[object Array]' \u0026\u0026\\n                tagParam.length == 3) {\\n                var obj = _newObject(tagParam[2]);\\n                return new _DERTaggedObject({ tag: tagParam[0],\\n                    explicit: tagParam[1],\\n                    obj: obj });\\n            }\\n            else {\\n                var newParam = {};\\n                if (tagParam.explicit !== undefined)\\n                    newParam.explicit = tagParam.explicit;\\n                if (tagParam.tag !== undefined)\\n                    newParam.tag = tagParam.tag;\\n                if (tagParam.obj === undefined)\\n                    throw \\\"obj shall be specified for 'tag'.\\\";\\n                newParam.obj = _newObject(tagParam.obj);\\n                return new _DERTaggedObject(newParam);\\n            }\\n        }\\n    };\\n    /**\\n     * get encoded hexadecimal string of ASN1Object specifed by JSON parameters\\n     * @name jsonToASN1HEX\\n     * @memberOf KJUR.asn1.ASN1Util\\n     * @function\\n     * @param {Array} param JSON parameter to generate ASN1Object\\n     * @return hexadecimal string of ASN1Object\\n     * @since asn1 1.0.4\\n     * @description\\n     * As for ASN.1 object representation of JSON object,\\n     * please see {@link newObject}.\\n     * @example\\n     * jsonToASN1HEX({'prnstr': 'aaa'});\\n     */\\n    this.jsonToASN1HEX = function (param) {\\n        var asn1Obj = this.newObject(param);\\n        return asn1Obj.getEncodedHex();\\n    };\\n};\\n/**\\n * get dot noted oid number string from hexadecimal value of OID\\n * @name oidHexToInt\\n * @memberOf KJUR.asn1.ASN1Util\\n * @function\\n * @param {String} hex hexadecimal value of object identifier\\n * @return {String} dot noted string of object identifier\\n * @since jsrsasign 4.8.3 asn1 1.0.7\\n * @description\\n * This static method converts from hexadecimal string representation of\\n * ASN.1 value of object identifier to oid number string.\\n * @example\\n * KJUR.asn1.ASN1Util.oidHexToInt('550406') \u0026rarr; \\\"2.5.4.6\\\"\\n */\\nKJUR.asn1.ASN1Util.oidHexToInt = function (hex) {\\n    var s = \\\"\\\";\\n    var i01 = parseInt(hex.substr(0, 2), 16);\\n    var i0 = Math.floor(i01 / 40);\\n    var i1 = i01 % 40;\\n    var s = i0 + \\\".\\\" + i1;\\n    var binbuf = \\\"\\\";\\n    for (var i = 2; i \u003c hex.length; i += 2) {\\n        var value = parseInt(hex.substr(i, 2), 16);\\n        var bin = (\\\"00000000\\\" + value.toString(2)).slice(-8);\\n        binbuf = binbuf + bin.substr(1, 7);\\n        if (bin.substr(0, 1) == \\\"0\\\") {\\n            var bi = new _jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(binbuf, 2);\\n            s = s + \\\".\\\" + bi.toString(10);\\n            binbuf = \\\"\\\";\\n        }\\n    }\\n    ;\\n    return s;\\n};\\n/**\\n * get hexadecimal value of object identifier from dot noted oid value\\n * @name oidIntToHex\\n * @memberOf KJUR.asn1.ASN1Util\\n * @function\\n * @param {String} oidString dot noted string of object identifier\\n * @return {String} hexadecimal value of object identifier\\n * @since jsrsasign 4.8.3 asn1 1.0.7\\n * @description\\n * This static method converts from object identifier value string.\\n * to hexadecimal string representation of it.\\n * @example\\n * KJUR.asn1.ASN1Util.oidIntToHex(\\\"2.5.4.6\\\") \u0026rarr; \\\"550406\\\"\\n */\\nKJUR.asn1.ASN1Util.oidIntToHex = function (oidString) {\\n    var itox = function (i) {\\n        var h = i.toString(16);\\n        if (h.length == 1)\\n            h = '0' + h;\\n        return h;\\n    };\\n    var roidtox = function (roid) {\\n        var h = '';\\n        var bi = new _jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(roid, 10);\\n        var b = bi.toString(2);\\n        var padLen = 7 - b.length % 7;\\n        if (padLen == 7)\\n            padLen = 0;\\n        var bPad = '';\\n        for (var i = 0; i \u003c padLen; i++)\\n            bPad += '0';\\n        b = bPad + b;\\n        for (var i = 0; i \u003c b.length - 1; i += 7) {\\n            var b8 = b.substr(i, 7);\\n            if (i != b.length - 7)\\n                b8 = '1' + b8;\\n            h += itox(parseInt(b8, 2));\\n        }\\n        return h;\\n    };\\n    if (!oidString.match(/^[0-9.]+$/)) {\\n        throw \\\"malformed oid string: \\\" + oidString;\\n    }\\n    var h = '';\\n    var a = oidString.split('.');\\n    var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);\\n    h += itox(i0);\\n    a.splice(0, 2);\\n    for (var i = 0; i \u003c a.length; i++) {\\n        h += roidtox(a[i]);\\n    }\\n    return h;\\n};\\n// ********************************************************************\\n//  Abstract ASN.1 Classes\\n// ********************************************************************\\n// ********************************************************************\\n/**\\n * base class for ASN.1 DER encoder object\\n * @name KJUR.asn1.ASN1Object\\n * @class base class for ASN.1 DER encoder object\\n * @property {Boolean} isModified flag whether internal data was changed\\n * @property {String} hTLV hexadecimal string of ASN.1 TLV\\n * @property {String} hT hexadecimal string of ASN.1 TLV tag(T)\\n * @property {String} hL hexadecimal string of ASN.1 TLV length(L)\\n * @property {String} hV hexadecimal string of ASN.1 TLV value(V)\\n * @description\\n */\\nKJUR.asn1.ASN1Object = function () {\\n    var isModified = true;\\n    var hTLV = null;\\n    var hT = '00';\\n    var hL = '00';\\n    var hV = '';\\n    /**\\n     * get hexadecimal ASN.1 TLV length(L) bytes from TLV value(V)\\n     * @name getLengthHexFromValue\\n     * @memberOf KJUR.asn1.ASN1Object#\\n     * @function\\n     * @return {String} hexadecimal string of ASN.1 TLV length(L)\\n     */\\n    this.getLengthHexFromValue = function () {\\n        if (typeof this.hV == \\\"undefined\\\" || this.hV == null) {\\n            throw \\\"this.hV is null or undefined.\\\";\\n        }\\n        if (this.hV.length % 2 == 1) {\\n            throw \\\"value hex must be even length: n=\\\" + hV.length + \\\",v=\\\" + this.hV;\\n        }\\n        var n = this.hV.length / 2;\\n        var hN = n.toString(16);\\n        if (hN.length % 2 == 1) {\\n            hN = \\\"0\\\" + hN;\\n        }\\n        if (n \u003c 128) {\\n            return hN;\\n        }\\n        else {\\n            var hNlen = hN.length / 2;\\n            if (hNlen \u003e 15) {\\n                throw \\\"ASN.1 length too long to represent by 8x: n = \\\" + n.toString(16);\\n            }\\n            var head = 128 + hNlen;\\n            return head.toString(16) + hN;\\n        }\\n    };\\n    /**\\n     * get hexadecimal string of ASN.1 TLV bytes\\n     * @name getEncodedHex\\n     * @memberOf KJUR.asn1.ASN1Object#\\n     * @function\\n     * @return {String} hexadecimal string of ASN.1 TLV\\n     */\\n    this.getEncodedHex = function () {\\n        if (this.hTLV == null || this.isModified) {\\n            this.hV = this.getFreshValueHex();\\n            this.hL = this.getLengthHexFromValue();\\n            this.hTLV = this.hT + this.hL + this.hV;\\n            this.isModified = false;\\n            //alert(\\\"first time: \\\" + this.hTLV);\\n        }\\n        return this.hTLV;\\n    };\\n    /**\\n     * get hexadecimal string of ASN.1 TLV value(V) bytes\\n     * @name getValueHex\\n     * @memberOf KJUR.asn1.ASN1Object#\\n     * @function\\n     * @return {String} hexadecimal string of ASN.1 TLV value(V) bytes\\n     */\\n    this.getValueHex = function () {\\n        this.getEncodedHex();\\n        return this.hV;\\n    };\\n    this.getFreshValueHex = function () {\\n        return '';\\n    };\\n};\\n// == BEGIN DERAbstractString ================================================\\n/**\\n * base class for ASN.1 DER string classes\\n * @name KJUR.asn1.DERAbstractString\\n * @class base class for ASN.1 DER string classes\\n * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})\\n * @property {String} s internal string of value\\n * @extends KJUR.asn1.ASN1Object\\n * @description\\n * \u003cbr/\u003e\\n * As for argument 'params' for constructor, you can specify one of\\n * following properties:\\n * \u003cul\u003e\\n * \u003cli\u003estr - specify initial ASN.1 value(V) by a string\u003c/li\u003e\\n * \u003cli\u003ehex - specify initial ASN.1 value(V) by a hexadecimal string\u003c/li\u003e\\n * \u003c/ul\u003e\\n * NOTE: 'params' can be omitted.\\n */\\nKJUR.asn1.DERAbstractString = function (params) {\\n    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);\\n    var s = null;\\n    var hV = null;\\n    /**\\n     * get string value of this string object\\n     * @name getString\\n     * @memberOf KJUR.asn1.DERAbstractString#\\n     * @function\\n     * @return {String} string value of this string object\\n     */\\n    this.getString = function () {\\n        return this.s;\\n    };\\n    /**\\n     * set value by a string\\n     * @name setString\\n     * @memberOf KJUR.asn1.DERAbstractString#\\n     * @function\\n     * @param {String} newS value by a string to set\\n     */\\n    this.setString = function (newS) {\\n        this.hTLV = null;\\n        this.isModified = true;\\n        this.s = newS;\\n        this.hV = stohex(this.s);\\n    };\\n    /**\\n     * set value by a hexadecimal string\\n     * @name setStringHex\\n     * @memberOf KJUR.asn1.DERAbstractString#\\n     * @function\\n     * @param {String} newHexString value by a hexadecimal string to set\\n     */\\n    this.setStringHex = function (newHexString) {\\n        this.hTLV = null;\\n        this.isModified = true;\\n        this.s = null;\\n        this.hV = newHexString;\\n    };\\n    this.getFreshValueHex = function () {\\n        return this.hV;\\n    };\\n    if (typeof params != \\\"undefined\\\") {\\n        if (typeof params == \\\"string\\\") {\\n            this.setString(params);\\n        }\\n        else if (typeof params['str'] != \\\"undefined\\\") {\\n            this.setString(params['str']);\\n        }\\n        else if (typeof params['hex'] != \\\"undefined\\\") {\\n            this.setStringHex(params['hex']);\\n        }\\n    }\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object);\\n// == END   DERAbstractString ================================================\\n// == BEGIN DERAbstractTime ==================================================\\n/**\\n * base class for ASN.1 DER Generalized/UTCTime class\\n * @name KJUR.asn1.DERAbstractTime\\n * @class base class for ASN.1 DER Generalized/UTCTime class\\n * @param {Array} params associative array of parameters (ex. {'str': '130430235959Z'})\\n * @extends KJUR.asn1.ASN1Object\\n * @description\\n * @see KJUR.asn1.ASN1Object - superclass\\n */\\nKJUR.asn1.DERAbstractTime = function (params) {\\n    KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);\\n    var s = null;\\n    var date = null;\\n    // --- PRIVATE METHODS --------------------\\n    this.localDateToUTC = function (d) {\\n        utc = d.getTime() + (d.getTimezoneOffset() * 60000);\\n        var utcDate = new Date(utc);\\n        return utcDate;\\n    };\\n    /*\\n     * format date string by Data object\\n     * @name formatDate\\n     * @memberOf KJUR.asn1.AbstractTime;\\n     * @param {Date} dateObject\\n     * @param {string} type 'utc' or 'gen'\\n     * @param {boolean} withMillis flag for with millisections or not\\n     * @description\\n     * 'withMillis' flag is supported from asn1 1.0.6.\\n     */\\n    this.formatDate = function (dateObject, type, withMillis) {\\n        var pad = this.zeroPadding;\\n        var d = this.localDateToUTC(dateObject);\\n        var year = String(d.getFullYear());\\n        if (type == 'utc')\\n            year = year.substr(2, 2);\\n        var month = pad(String(d.getMonth() + 1), 2);\\n        var day = pad(String(d.getDate()), 2);\\n        var hour = pad(String(d.getHours()), 2);\\n        var min = pad(String(d.getMinutes()), 2);\\n        var sec = pad(String(d.getSeconds()), 2);\\n        var s = year + month + day + hour + min + sec;\\n        if (withMillis === true) {\\n            var millis = d.getMilliseconds();\\n            if (millis != 0) {\\n                var sMillis = pad(String(millis), 3);\\n                sMillis = sMillis.replace(/[0]+$/, \\\"\\\");\\n                s = s + \\\".\\\" + sMillis;\\n            }\\n        }\\n        return s + \\\"Z\\\";\\n    };\\n    this.zeroPadding = function (s, len) {\\n        if (s.length \u003e= len)\\n            return s;\\n        return new Array(len - s.length + 1).join('0') + s;\\n    };\\n    // --- PUBLIC METHODS --------------------\\n    /**\\n     * get string value of this string object\\n     * @name getString\\n     * @memberOf KJUR.asn1.DERAbstractTime#\\n     * @function\\n     * @return {String} string value of this time object\\n     */\\n    this.getString = function () {\\n        return this.s;\\n    };\\n    /**\\n     * set value by a string\\n     * @name setString\\n     * @memberOf KJUR.asn1.DERAbstractTime#\\n     * @function\\n     * @param {String} newS value by a string to set such like \\\"130430235959Z\\\"\\n     */\\n    this.setString = function (newS) {\\n        this.hTLV = null;\\n        this.isModified = true;\\n        this.s = newS;\\n        this.hV = stohex(newS);\\n    };\\n    /**\\n     * set value by a Date object\\n     * @name setByDateValue\\n     * @memberOf KJUR.asn1.DERAbstractTime#\\n     * @function\\n     * @param {Integer} year year of date (ex. 2013)\\n     * @param {Integer} month month of date between 1 and 12 (ex. 12)\\n     * @param {Integer} day day of month\\n     * @param {Integer} hour hours of date\\n     * @param {Integer} min minutes of date\\n     * @param {Integer} sec seconds of date\\n     */\\n    this.setByDateValue = function (year, month, day, hour, min, sec) {\\n        var dateObject = new Date(Date.UTC(year, month - 1, day, hour, min, sec, 0));\\n        this.setByDate(dateObject);\\n    };\\n    this.getFreshValueHex = function () {\\n        return this.hV;\\n    };\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object);\\n// == END   DERAbstractTime ==================================================\\n// == BEGIN DERAbstractStructured ============================================\\n/**\\n * base class for ASN.1 DER structured class\\n * @name KJUR.asn1.DERAbstractStructured\\n * @class base class for ASN.1 DER structured class\\n * @property {Array} asn1Array internal array of ASN1Object\\n * @extends KJUR.asn1.ASN1Object\\n * @description\\n * @see KJUR.asn1.ASN1Object - superclass\\n */\\nKJUR.asn1.DERAbstractStructured = function (params) {\\n    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);\\n    var asn1Array = null;\\n    /**\\n     * set value by array of ASN1Object\\n     * @name setByASN1ObjectArray\\n     * @memberOf KJUR.asn1.DERAbstractStructured#\\n     * @function\\n     * @param {array} asn1ObjectArray array of ASN1Object to set\\n     */\\n    this.setByASN1ObjectArray = function (asn1ObjectArray) {\\n        this.hTLV = null;\\n        this.isModified = true;\\n        this.asn1Array = asn1ObjectArray;\\n    };\\n    /**\\n     * append an ASN1Object to internal array\\n     * @name appendASN1Object\\n     * @memberOf KJUR.asn1.DERAbstractStructured#\\n     * @function\\n     * @param {ASN1Object} asn1Object to add\\n     */\\n    this.appendASN1Object = function (asn1Object) {\\n        this.hTLV = null;\\n        this.isModified = true;\\n        this.asn1Array.push(asn1Object);\\n    };\\n    this.asn1Array = new Array();\\n    if (typeof params != \\\"undefined\\\") {\\n        if (typeof params['array'] != \\\"undefined\\\") {\\n            this.asn1Array = params['array'];\\n        }\\n    }\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object);\\n// ********************************************************************\\n//  ASN.1 Object Classes\\n// ********************************************************************\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER Boolean\\n * @name KJUR.asn1.DERBoolean\\n * @class class for ASN.1 DER Boolean\\n * @extends KJUR.asn1.ASN1Object\\n * @description\\n * @see KJUR.asn1.ASN1Object - superclass\\n */\\nKJUR.asn1.DERBoolean = function () {\\n    KJUR.asn1.DERBoolean.superclass.constructor.call(this);\\n    this.hT = \\\"01\\\";\\n    this.hTLV = \\\"0101ff\\\";\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER Integer\\n * @name KJUR.asn1.DERInteger\\n * @class class for ASN.1 DER Integer\\n * @extends KJUR.asn1.ASN1Object\\n * @description\\n * \u003cbr/\u003e\\n * As for argument 'params' for constructor, you can specify one of\\n * following properties:\\n * \u003cul\u003e\\n * \u003cli\u003eint - specify initial ASN.1 value(V) by integer value\u003c/li\u003e\\n * \u003cli\u003ebigint - specify initial ASN.1 value(V) by BigInteger object\u003c/li\u003e\\n * \u003cli\u003ehex - specify initial ASN.1 value(V) by a hexadecimal string\u003c/li\u003e\\n * \u003c/ul\u003e\\n * NOTE: 'params' can be omitted.\\n */\\nKJUR.asn1.DERInteger = function (params) {\\n    KJUR.asn1.DERInteger.superclass.constructor.call(this);\\n    this.hT = \\\"02\\\";\\n    /**\\n     * set value by Tom Wu's BigInteger object\\n     * @name setByBigInteger\\n     * @memberOf KJUR.asn1.DERInteger#\\n     * @function\\n     * @param {BigInteger} bigIntegerValue to set\\n     */\\n    this.setByBigInteger = function (bigIntegerValue) {\\n        this.hTLV = null;\\n        this.isModified = true;\\n        this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);\\n    };\\n    /**\\n     * set value by integer value\\n     * @name setByInteger\\n     * @memberOf KJUR.asn1.DERInteger\\n     * @function\\n     * @param {Integer} integer value to set\\n     */\\n    this.setByInteger = function (intValue) {\\n        var bi = new _jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(String(intValue), 10);\\n        this.setByBigInteger(bi);\\n    };\\n    /**\\n     * set value by integer value\\n     * @name setValueHex\\n     * @memberOf KJUR.asn1.DERInteger#\\n     * @function\\n     * @param {String} hexadecimal string of integer value\\n     * @description\\n     * \u003cbr/\u003e\\n     * NOTE: Value shall be represented by minimum octet length of\\n     * two's complement representation.\\n     * @example\\n     * new KJUR.asn1.DERInteger(123);\\n     * new KJUR.asn1.DERInteger({'int': 123});\\n     * new KJUR.asn1.DERInteger({'hex': '1fad'});\\n     */\\n    this.setValueHex = function (newHexString) {\\n        this.hV = newHexString;\\n    };\\n    this.getFreshValueHex = function () {\\n        return this.hV;\\n    };\\n    if (typeof params != \\\"undefined\\\") {\\n        if (typeof params['bigint'] != \\\"undefined\\\") {\\n            this.setByBigInteger(params['bigint']);\\n        }\\n        else if (typeof params['int'] != \\\"undefined\\\") {\\n            this.setByInteger(params['int']);\\n        }\\n        else if (typeof params == \\\"number\\\") {\\n            this.setByInteger(params);\\n        }\\n        else if (typeof params['hex'] != \\\"undefined\\\") {\\n            this.setValueHex(params['hex']);\\n        }\\n    }\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER encoded BitString primitive\\n * @name KJUR.asn1.DERBitString\\n * @class class for ASN.1 DER encoded BitString primitive\\n * @extends KJUR.asn1.ASN1Object\\n * @description\\n * \u003cbr/\u003e\\n * As for argument 'params' for constructor, you can specify one of\\n * following properties:\\n * \u003cul\u003e\\n * \u003cli\u003ebin - specify binary string (ex. '10111')\u003c/li\u003e\\n * \u003cli\u003earray - specify array of boolean (ex. [true,false,true,true])\u003c/li\u003e\\n * \u003cli\u003ehex - specify hexadecimal string of ASN.1 value(V) including unused bits\u003c/li\u003e\\n * \u003cli\u003eobj - specify {@link KJUR.asn1.ASN1Util.newObject}\\n * argument for \\\"BitString encapsulates\\\" structure.\u003c/li\u003e\\n * \u003c/ul\u003e\\n * NOTE1: 'params' can be omitted.\u003cbr/\u003e\\n * NOTE2: 'obj' parameter have been supported since\\n * asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).\u003cbr/\u003e\\n * @example\\n * // default constructor\\n * o = new KJUR.asn1.DERBitString();\\n * // initialize with binary string\\n * o = new KJUR.asn1.DERBitString({bin: \\\"1011\\\"});\\n * // initialize with boolean array\\n * o = new KJUR.asn1.DERBitString({array: [true,false,true,true]});\\n * // initialize with hexadecimal string (04 is unused bits)\\n * o = new KJUR.asn1.DEROctetString({hex: \\\"04bac0\\\"});\\n * // initialize with ASN1Util.newObject argument for encapsulated\\n * o = new KJUR.asn1.DERBitString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});\\n * // above generates a ASN.1 data like this:\\n * // BIT STRING, encapsulates {\\n * //   SEQUENCE {\\n * //     INTEGER 3\\n * //     PrintableString 'aaa'\\n * //     }\\n * //   }\\n */\\nKJUR.asn1.DERBitString = function (params) {\\n    if (params !== undefined \u0026\u0026 typeof params.obj !== \\\"undefined\\\") {\\n        var o = KJUR.asn1.ASN1Util.newObject(params.obj);\\n        params.hex = \\\"00\\\" + o.getEncodedHex();\\n    }\\n    KJUR.asn1.DERBitString.superclass.constructor.call(this);\\n    this.hT = \\\"03\\\";\\n    /**\\n     * set ASN.1 value(V) by a hexadecimal string including unused bits\\n     * @name setHexValueIncludingUnusedBits\\n     * @memberOf KJUR.asn1.DERBitString#\\n     * @function\\n     * @param {String} newHexStringIncludingUnusedBits\\n     */\\n    this.setHexValueIncludingUnusedBits = function (newHexStringIncludingUnusedBits) {\\n        this.hTLV = null;\\n        this.isModified = true;\\n        this.hV = newHexStringIncludingUnusedBits;\\n    };\\n    /**\\n     * set ASN.1 value(V) by unused bit and hexadecimal string of value\\n     * @name setUnusedBitsAndHexValue\\n     * @memberOf KJUR.asn1.DERBitString#\\n     * @function\\n     * @param {Integer} unusedBits\\n     * @param {String} hValue\\n     */\\n    this.setUnusedBitsAndHexValue = function (unusedBits, hValue) {\\n        if (unusedBits \u003c 0 || 7 \u003c unusedBits) {\\n            throw \\\"unused bits shall be from 0 to 7: u = \\\" + unusedBits;\\n        }\\n        var hUnusedBits = \\\"0\\\" + unusedBits;\\n        this.hTLV = null;\\n        this.isModified = true;\\n        this.hV = hUnusedBits + hValue;\\n    };\\n    /**\\n     * set ASN.1 DER BitString by binary string\u003cbr/\u003e\\n     * @name setByBinaryString\\n     * @memberOf KJUR.asn1.DERBitString#\\n     * @function\\n     * @param {String} binaryString binary value string (i.e. '10111')\\n     * @description\\n     * Its unused bits will be calculated automatically by length of\\n     * 'binaryValue'. \u003cbr/\u003e\\n     * NOTE: Trailing zeros '0' will be ignored.\\n     * @example\\n     * o = new KJUR.asn1.DERBitString();\\n     * o.setByBooleanArray(\\\"01011\\\");\\n     */\\n    this.setByBinaryString = function (binaryString) {\\n        binaryString = binaryString.replace(/0+$/, '');\\n        var unusedBits = 8 - binaryString.length % 8;\\n        if (unusedBits == 8)\\n            unusedBits = 0;\\n        for (var i = 0; i \u003c= unusedBits; i++) {\\n            binaryString += '0';\\n        }\\n        var h = '';\\n        for (var i = 0; i \u003c binaryString.length - 1; i += 8) {\\n            var b = binaryString.substr(i, 8);\\n            var x = parseInt(b, 2).toString(16);\\n            if (x.length == 1)\\n                x = '0' + x;\\n            h += x;\\n        }\\n        this.hTLV = null;\\n        this.isModified = true;\\n        this.hV = '0' + unusedBits + h;\\n    };\\n    /**\\n     * set ASN.1 TLV value(V) by an array of boolean\u003cbr/\u003e\\n     * @name setByBooleanArray\\n     * @memberOf KJUR.asn1.DERBitString#\\n     * @function\\n     * @param {array} booleanArray array of boolean (ex. [true, false, true])\\n     * @description\\n     * NOTE: Trailing falses will be ignored in the ASN.1 DER Object.\\n     * @example\\n     * o = new KJUR.asn1.DERBitString();\\n     * o.setByBooleanArray([false, true, false, true, true]);\\n     */\\n    this.setByBooleanArray = function (booleanArray) {\\n        var s = '';\\n        for (var i = 0; i \u003c booleanArray.length; i++) {\\n            if (booleanArray[i] == true) {\\n                s += '1';\\n            }\\n            else {\\n                s += '0';\\n            }\\n        }\\n        this.setByBinaryString(s);\\n    };\\n    /**\\n     * generate an array of falses with specified length\u003cbr/\u003e\\n     * @name newFalseArray\\n     * @memberOf KJUR.asn1.DERBitString\\n     * @function\\n     * @param {Integer} nLength length of array to generate\\n     * @return {array} array of boolean falses\\n     * @description\\n     * This static method may be useful to initialize boolean array.\\n     * @example\\n     * o = new KJUR.asn1.DERBitString();\\n     * o.newFalseArray(3) \u0026rarr; [false, false, false]\\n     */\\n    this.newFalseArray = function (nLength) {\\n        var a = new Array(nLength);\\n        for (var i = 0; i \u003c nLength; i++) {\\n            a[i] = false;\\n        }\\n        return a;\\n    };\\n    this.getFreshValueHex = function () {\\n        return this.hV;\\n    };\\n    if (typeof params != \\\"undefined\\\") {\\n        if (typeof params == \\\"string\\\" \u0026\u0026 params.toLowerCase().match(/^[0-9a-f]+$/)) {\\n            this.setHexValueIncludingUnusedBits(params);\\n        }\\n        else if (typeof params['hex'] != \\\"undefined\\\") {\\n            this.setHexValueIncludingUnusedBits(params['hex']);\\n        }\\n        else if (typeof params['bin'] != \\\"undefined\\\") {\\n            this.setByBinaryString(params['bin']);\\n        }\\n        else if (typeof params['array'] != \\\"undefined\\\") {\\n            this.setByBooleanArray(params['array']);\\n        }\\n    }\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER OctetString\u003cbr/\u003e\\n * @name KJUR.asn1.DEROctetString\\n * @class class for ASN.1 DER OctetString\\n * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})\\n * @extends KJUR.asn1.DERAbstractString\\n * @description\\n * This class provides ASN.1 OctetString simple type.\u003cbr/\u003e\\n * Supported \\\"params\\\" attributes are:\\n * \u003cul\u003e\\n * \u003cli\u003estr - to set a string as a value\u003c/li\u003e\\n * \u003cli\u003ehex - to set a hexadecimal string as a value\u003c/li\u003e\\n * \u003cli\u003eobj - to set a encapsulated ASN.1 value by JSON object\\n * which is defined in {@link KJUR.asn1.ASN1Util.newObject}\u003c/li\u003e\\n * \u003c/ul\u003e\\n * NOTE: A parameter 'obj' have been supported\\n * for \\\"OCTET STRING, encapsulates\\\" structure.\\n * since asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).\\n * @see KJUR.asn1.DERAbstractString - superclass\\n * @example\\n * // default constructor\\n * o = new KJUR.asn1.DEROctetString();\\n * // initialize with string\\n * o = new KJUR.asn1.DEROctetString({str: \\\"aaa\\\"});\\n * // initialize with hexadecimal string\\n * o = new KJUR.asn1.DEROctetString({hex: \\\"616161\\\"});\\n * // initialize with ASN1Util.newObject argument\\n * o = new KJUR.asn1.DEROctetString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});\\n * // above generates a ASN.1 data like this:\\n * // OCTET STRING, encapsulates {\\n * //   SEQUENCE {\\n * //     INTEGER 3\\n * //     PrintableString 'aaa'\\n * //     }\\n * //   }\\n */\\nKJUR.asn1.DEROctetString = function (params) {\\n    if (params !== undefined \u0026\u0026 typeof params.obj !== \\\"undefined\\\") {\\n        var o = KJUR.asn1.ASN1Util.newObject(params.obj);\\n        params.hex = o.getEncodedHex();\\n    }\\n    KJUR.asn1.DEROctetString.superclass.constructor.call(this, params);\\n    this.hT = \\\"04\\\";\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER Null\\n * @name KJUR.asn1.DERNull\\n * @class class for ASN.1 DER Null\\n * @extends KJUR.asn1.ASN1Object\\n * @description\\n * @see KJUR.asn1.ASN1Object - superclass\\n */\\nKJUR.asn1.DERNull = function () {\\n    KJUR.asn1.DERNull.superclass.constructor.call(this);\\n    this.hT = \\\"05\\\";\\n    this.hTLV = \\\"0500\\\";\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER ObjectIdentifier\\n * @name KJUR.asn1.DERObjectIdentifier\\n * @class class for ASN.1 DER ObjectIdentifier\\n * @param {Array} params associative array of parameters (ex. {'oid': '2.5.4.5'})\\n * @extends KJUR.asn1.ASN1Object\\n * @description\\n * \u003cbr/\u003e\\n * As for argument 'params' for constructor, you can specify one of\\n * following properties:\\n * \u003cul\u003e\\n * \u003cli\u003eoid - specify initial ASN.1 value(V) by a oid string (ex. 2.5.4.13)\u003c/li\u003e\\n * \u003cli\u003ehex - specify initial ASN.1 value(V) by a hexadecimal string\u003c/li\u003e\\n * \u003c/ul\u003e\\n * NOTE: 'params' can be omitted.\\n */\\nKJUR.asn1.DERObjectIdentifier = function (params) {\\n    var itox = function (i) {\\n        var h = i.toString(16);\\n        if (h.length == 1)\\n            h = '0' + h;\\n        return h;\\n    };\\n    var roidtox = function (roid) {\\n        var h = '';\\n        var bi = new _jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(roid, 10);\\n        var b = bi.toString(2);\\n        var padLen = 7 - b.length % 7;\\n        if (padLen == 7)\\n            padLen = 0;\\n        var bPad = '';\\n        for (var i = 0; i \u003c padLen; i++)\\n            bPad += '0';\\n        b = bPad + b;\\n        for (var i = 0; i \u003c b.length - 1; i += 7) {\\n            var b8 = b.substr(i, 7);\\n            if (i != b.length - 7)\\n                b8 = '1' + b8;\\n            h += itox(parseInt(b8, 2));\\n        }\\n        return h;\\n    };\\n    KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);\\n    this.hT = \\\"06\\\";\\n    /**\\n     * set value by a hexadecimal string\\n     * @name setValueHex\\n     * @memberOf KJUR.asn1.DERObjectIdentifier#\\n     * @function\\n     * @param {String} newHexString hexadecimal value of OID bytes\\n     */\\n    this.setValueHex = function (newHexString) {\\n        this.hTLV = null;\\n        this.isModified = true;\\n        this.s = null;\\n        this.hV = newHexString;\\n    };\\n    /**\\n     * set value by a OID string\u003cbr/\u003e\\n     * @name setValueOidString\\n     * @memberOf KJUR.asn1.DERObjectIdentifier#\\n     * @function\\n     * @param {String} oidString OID string (ex. 2.5.4.13)\\n     * @example\\n     * o = new KJUR.asn1.DERObjectIdentifier();\\n     * o.setValueOidString(\\\"2.5.4.13\\\");\\n     */\\n    this.setValueOidString = function (oidString) {\\n        if (!oidString.match(/^[0-9.]+$/)) {\\n            throw \\\"malformed oid string: \\\" + oidString;\\n        }\\n        var h = '';\\n        var a = oidString.split('.');\\n        var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);\\n        h += itox(i0);\\n        a.splice(0, 2);\\n        for (var i = 0; i \u003c a.length; i++) {\\n            h += roidtox(a[i]);\\n        }\\n        this.hTLV = null;\\n        this.isModified = true;\\n        this.s = null;\\n        this.hV = h;\\n    };\\n    /**\\n     * set value by a OID name\\n     * @name setValueName\\n     * @memberOf KJUR.asn1.DERObjectIdentifier#\\n     * @function\\n     * @param {String} oidName OID name (ex. 'serverAuth')\\n     * @since 1.0.1\\n     * @description\\n     * OID name shall be defined in 'KJUR.asn1.x509.OID.name2oidList'.\\n     * Otherwise raise error.\\n     * @example\\n     * o = new KJUR.asn1.DERObjectIdentifier();\\n     * o.setValueName(\\\"serverAuth\\\");\\n     */\\n    this.setValueName = function (oidName) {\\n        var oid = KJUR.asn1.x509.OID.name2oid(oidName);\\n        if (oid !== '') {\\n            this.setValueOidString(oid);\\n        }\\n        else {\\n            throw \\\"DERObjectIdentifier oidName undefined: \\\" + oidName;\\n        }\\n    };\\n    this.getFreshValueHex = function () {\\n        return this.hV;\\n    };\\n    if (params !== undefined) {\\n        if (typeof params === \\\"string\\\") {\\n            if (params.match(/^[0-2].[0-9.]+$/)) {\\n                this.setValueOidString(params);\\n            }\\n            else {\\n                this.setValueName(params);\\n            }\\n        }\\n        else if (params.oid !== undefined) {\\n            this.setValueOidString(params.oid);\\n        }\\n        else if (params.hex !== undefined) {\\n            this.setValueHex(params.hex);\\n        }\\n        else if (params.name !== undefined) {\\n            this.setValueName(params.name);\\n        }\\n    }\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER Enumerated\\n * @name KJUR.asn1.DEREnumerated\\n * @class class for ASN.1 DER Enumerated\\n * @extends KJUR.asn1.ASN1Object\\n * @description\\n * \u003cbr/\u003e\\n * As for argument 'params' for constructor, you can specify one of\\n * following properties:\\n * \u003cul\u003e\\n * \u003cli\u003eint - specify initial ASN.1 value(V) by integer value\u003c/li\u003e\\n * \u003cli\u003ehex - specify initial ASN.1 value(V) by a hexadecimal string\u003c/li\u003e\\n * \u003c/ul\u003e\\n * NOTE: 'params' can be omitted.\\n * @example\\n * new KJUR.asn1.DEREnumerated(123);\\n * new KJUR.asn1.DEREnumerated({int: 123});\\n * new KJUR.asn1.DEREnumerated({hex: '1fad'});\\n */\\nKJUR.asn1.DEREnumerated = function (params) {\\n    KJUR.asn1.DEREnumerated.superclass.constructor.call(this);\\n    this.hT = \\\"0a\\\";\\n    /**\\n     * set value by Tom Wu's BigInteger object\\n     * @name setByBigInteger\\n     * @memberOf KJUR.asn1.DEREnumerated#\\n     * @function\\n     * @param {BigInteger} bigIntegerValue to set\\n     */\\n    this.setByBigInteger = function (bigIntegerValue) {\\n        this.hTLV = null;\\n        this.isModified = true;\\n        this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);\\n    };\\n    /**\\n     * set value by integer value\\n     * @name setByInteger\\n     * @memberOf KJUR.asn1.DEREnumerated#\\n     * @function\\n     * @param {Integer} integer value to set\\n     */\\n    this.setByInteger = function (intValue) {\\n        var bi = new _jsbn_jsbn__WEBPACK_IMPORTED_MODULE_0__.BigInteger(String(intValue), 10);\\n        this.setByBigInteger(bi);\\n    };\\n    /**\\n     * set value by integer value\\n     * @name setValueHex\\n     * @memberOf KJUR.asn1.DEREnumerated#\\n     * @function\\n     * @param {String} hexadecimal string of integer value\\n     * @description\\n     * \u003cbr/\u003e\\n     * NOTE: Value shall be represented by minimum octet length of\\n     * two's complement representation.\\n     */\\n    this.setValueHex = function (newHexString) {\\n        this.hV = newHexString;\\n    };\\n    this.getFreshValueHex = function () {\\n        return this.hV;\\n    };\\n    if (typeof params != \\\"undefined\\\") {\\n        if (typeof params['int'] != \\\"undefined\\\") {\\n            this.setByInteger(params['int']);\\n        }\\n        else if (typeof params == \\\"number\\\") {\\n            this.setByInteger(params);\\n        }\\n        else if (typeof params['hex'] != \\\"undefined\\\") {\\n            this.setValueHex(params['hex']);\\n        }\\n    }\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DEREnumerated, KJUR.asn1.ASN1Object);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER UTF8String\\n * @name KJUR.asn1.DERUTF8String\\n * @class class for ASN.1 DER UTF8String\\n * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})\\n * @extends KJUR.asn1.DERAbstractString\\n * @description\\n * @see KJUR.asn1.DERAbstractString - superclass\\n */\\nKJUR.asn1.DERUTF8String = function (params) {\\n    KJUR.asn1.DERUTF8String.superclass.constructor.call(this, params);\\n    this.hT = \\\"0c\\\";\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER NumericString\\n * @name KJUR.asn1.DERNumericString\\n * @class class for ASN.1 DER NumericString\\n * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})\\n * @extends KJUR.asn1.DERAbstractString\\n * @description\\n * @see KJUR.asn1.DERAbstractString - superclass\\n */\\nKJUR.asn1.DERNumericString = function (params) {\\n    KJUR.asn1.DERNumericString.superclass.constructor.call(this, params);\\n    this.hT = \\\"12\\\";\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER PrintableString\\n * @name KJUR.asn1.DERPrintableString\\n * @class class for ASN.1 DER PrintableString\\n * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})\\n * @extends KJUR.asn1.DERAbstractString\\n * @description\\n * @see KJUR.asn1.DERAbstractString - superclass\\n */\\nKJUR.asn1.DERPrintableString = function (params) {\\n    KJUR.asn1.DERPrintableString.superclass.constructor.call(this, params);\\n    this.hT = \\\"13\\\";\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER TeletexString\\n * @name KJUR.asn1.DERTeletexString\\n * @class class for ASN.1 DER TeletexString\\n * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})\\n * @extends KJUR.asn1.DERAbstractString\\n * @description\\n * @see KJUR.asn1.DERAbstractString - superclass\\n */\\nKJUR.asn1.DERTeletexString = function (params) {\\n    KJUR.asn1.DERTeletexString.superclass.constructor.call(this, params);\\n    this.hT = \\\"14\\\";\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER IA5String\\n * @name KJUR.asn1.DERIA5String\\n * @class class for ASN.1 DER IA5String\\n * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})\\n * @extends KJUR.asn1.DERAbstractString\\n * @description\\n * @see KJUR.asn1.DERAbstractString - superclass\\n */\\nKJUR.asn1.DERIA5String = function (params) {\\n    KJUR.asn1.DERIA5String.superclass.constructor.call(this, params);\\n    this.hT = \\\"16\\\";\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER UTCTime\\n * @name KJUR.asn1.DERUTCTime\\n * @class class for ASN.1 DER UTCTime\\n * @param {Array} params associative array of parameters (ex. {'str': '130430235959Z'})\\n * @extends KJUR.asn1.DERAbstractTime\\n * @description\\n * \u003cbr/\u003e\\n * As for argument 'params' for constructor, you can specify one of\\n * following properties:\\n * \u003cul\u003e\\n * \u003cli\u003estr - specify initial ASN.1 value(V) by a string (ex.'130430235959Z')\u003c/li\u003e\\n * \u003cli\u003ehex - specify initial ASN.1 value(V) by a hexadecimal string\u003c/li\u003e\\n * \u003cli\u003edate - specify Date object.\u003c/li\u003e\\n * \u003c/ul\u003e\\n * NOTE: 'params' can be omitted.\\n * \u003ch4\u003eEXAMPLES\u003c/h4\u003e\\n * @example\\n * d1 = new KJUR.asn1.DERUTCTime();\\n * d1.setString('130430125959Z');\\n *\\n * d2 = new KJUR.asn1.DERUTCTime({'str': '130430125959Z'});\\n * d3 = new KJUR.asn1.DERUTCTime({'date': new Date(Date.UTC(2015, 0, 31, 0, 0, 0, 0))});\\n * d4 = new KJUR.asn1.DERUTCTime('130430125959Z');\\n */\\nKJUR.asn1.DERUTCTime = function (params) {\\n    KJUR.asn1.DERUTCTime.superclass.constructor.call(this, params);\\n    this.hT = \\\"17\\\";\\n    /**\\n     * set value by a Date object\u003cbr/\u003e\\n     * @name setByDate\\n     * @memberOf KJUR.asn1.DERUTCTime#\\n     * @function\\n     * @param {Date} dateObject Date object to set ASN.1 value(V)\\n     * @example\\n     * o = new KJUR.asn1.DERUTCTime();\\n     * o.setByDate(new Date(\\\"2016/12/31\\\"));\\n     */\\n    this.setByDate = function (dateObject) {\\n        this.hTLV = null;\\n        this.isModified = true;\\n        this.date = dateObject;\\n        this.s = this.formatDate(this.date, 'utc');\\n        this.hV = stohex(this.s);\\n    };\\n    this.getFreshValueHex = function () {\\n        if (typeof this.date == \\\"undefined\\\" \u0026\u0026 typeof this.s == \\\"undefined\\\") {\\n            this.date = new Date();\\n            this.s = this.formatDate(this.date, 'utc');\\n            this.hV = stohex(this.s);\\n        }\\n        return this.hV;\\n    };\\n    if (params !== undefined) {\\n        if (params.str !== undefined) {\\n            this.setString(params.str);\\n        }\\n        else if (typeof params == \\\"string\\\" \u0026\u0026 params.match(/^[0-9]{12}Z$/)) {\\n            this.setString(params);\\n        }\\n        else if (params.hex !== undefined) {\\n            this.setStringHex(params.hex);\\n        }\\n        else if (params.date !== undefined) {\\n            this.setByDate(params.date);\\n        }\\n    }\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER GeneralizedTime\\n * @name KJUR.asn1.DERGeneralizedTime\\n * @class class for ASN.1 DER GeneralizedTime\\n * @param {Array} params associative array of parameters (ex. {'str': '20130430235959Z'})\\n * @property {Boolean} withMillis flag to show milliseconds or not\\n * @extends KJUR.asn1.DERAbstractTime\\n * @description\\n * \u003cbr/\u003e\\n * As for argument 'params' for constructor, you can specify one of\\n * following properties:\\n * \u003cul\u003e\\n * \u003cli\u003estr - specify initial ASN.1 value(V) by a string (ex.'20130430235959Z')\u003c/li\u003e\\n * \u003cli\u003ehex - specify initial ASN.1 value(V) by a hexadecimal string\u003c/li\u003e\\n * \u003cli\u003edate - specify Date object.\u003c/li\u003e\\n * \u003cli\u003emillis - specify flag to show milliseconds (from 1.0.6)\u003c/li\u003e\\n * \u003c/ul\u003e\\n * NOTE1: 'params' can be omitted.\\n * NOTE2: 'withMillis' property is supported from asn1 1.0.6.\\n */\\nKJUR.asn1.DERGeneralizedTime = function (params) {\\n    KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, params);\\n    this.hT = \\\"18\\\";\\n    this.withMillis = false;\\n    /**\\n     * set value by a Date object\\n     * @name setByDate\\n     * @memberOf KJUR.asn1.DERGeneralizedTime#\\n     * @function\\n     * @param {Date} dateObject Date object to set ASN.1 value(V)\\n     * @example\\n     * When you specify UTC time, use 'Date.UTC' method like this:\u003cbr/\u003e\\n     * o1 = new DERUTCTime();\\n     * o1.setByDate(date);\\n     *\\n     * date = new Date(Date.UTC(2015, 0, 31, 23, 59, 59, 0)); #2015JAN31 23:59:59\\n     */\\n    this.setByDate = function (dateObject) {\\n        this.hTLV = null;\\n        this.isModified = true;\\n        this.date = dateObject;\\n        this.s = this.formatDate(this.date, 'gen', this.withMillis);\\n        this.hV = stohex(this.s);\\n    };\\n    this.getFreshValueHex = function () {\\n        if (this.date === undefined \u0026\u0026 this.s === undefined) {\\n            this.date = new Date();\\n            this.s = this.formatDate(this.date, 'gen', this.withMillis);\\n            this.hV = stohex(this.s);\\n        }\\n        return this.hV;\\n    };\\n    if (params !== undefined) {\\n        if (params.str !== undefined) {\\n            this.setString(params.str);\\n        }\\n        else if (typeof params == \\\"string\\\" \u0026\u0026 params.match(/^[0-9]{14}Z$/)) {\\n            this.setString(params);\\n        }\\n        else if (params.hex !== undefined) {\\n            this.setStringHex(params.hex);\\n        }\\n        else if (params.date !== undefined) {\\n            this.setByDate(params.date);\\n        }\\n        if (params.millis === true) {\\n            this.withMillis = true;\\n        }\\n    }\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER Sequence\\n * @name KJUR.asn1.DERSequence\\n * @class class for ASN.1 DER Sequence\\n * @extends KJUR.asn1.DERAbstractStructured\\n * @description\\n * \u003cbr/\u003e\\n * As for argument 'params' for constructor, you can specify one of\\n * following properties:\\n * \u003cul\u003e\\n * \u003cli\u003earray - specify array of ASN1Object to set elements of content\u003c/li\u003e\\n * \u003c/ul\u003e\\n * NOTE: 'params' can be omitted.\\n */\\nKJUR.asn1.DERSequence = function (params) {\\n    KJUR.asn1.DERSequence.superclass.constructor.call(this, params);\\n    this.hT = \\\"30\\\";\\n    this.getFreshValueHex = function () {\\n        var h = '';\\n        for (var i = 0; i \u003c this.asn1Array.length; i++) {\\n            var asn1Obj = this.asn1Array[i];\\n            h += asn1Obj.getEncodedHex();\\n        }\\n        this.hV = h;\\n        return this.hV;\\n    };\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER Set\\n * @name KJUR.asn1.DERSet\\n * @class class for ASN.1 DER Set\\n * @extends KJUR.asn1.DERAbstractStructured\\n * @description\\n * \u003cbr/\u003e\\n * As for argument 'params' for constructor, you can specify one of\\n * following properties:\\n * \u003cul\u003e\\n * \u003cli\u003earray - specify array of ASN1Object to set elements of content\u003c/li\u003e\\n * \u003cli\u003esortflag - flag for sort (default: true). ASN.1 BER is not sorted in 'SET OF'.\u003c/li\u003e\\n * \u003c/ul\u003e\\n * NOTE1: 'params' can be omitted.\u003cbr/\u003e\\n * NOTE2: sortflag is supported since 1.0.5.\\n */\\nKJUR.asn1.DERSet = function (params) {\\n    KJUR.asn1.DERSet.superclass.constructor.call(this, params);\\n    this.hT = \\\"31\\\";\\n    this.sortFlag = true; // item shall be sorted only in ASN.1 DER\\n    this.getFreshValueHex = function () {\\n        var a = new Array();\\n        for (var i = 0; i \u003c this.asn1Array.length; i++) {\\n            var asn1Obj = this.asn1Array[i];\\n            a.push(asn1Obj.getEncodedHex());\\n        }\\n        if (this.sortFlag == true)\\n            a.sort();\\n        this.hV = a.join('');\\n        return this.hV;\\n    };\\n    if (typeof params != \\\"undefined\\\") {\\n        if (typeof params.sortflag != \\\"undefined\\\" \u0026\u0026\\n            params.sortflag == false)\\n            this.sortFlag = false;\\n    }\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured);\\n// ********************************************************************\\n/**\\n * class for ASN.1 DER TaggedObject\\n * @name KJUR.asn1.DERTaggedObject\\n * @class class for ASN.1 DER TaggedObject\\n * @extends KJUR.asn1.ASN1Object\\n * @description\\n * \u003cbr/\u003e\\n * Parameter 'tagNoNex' is ASN.1 tag(T) value for this object.\\n * For example, if you find '[1]' tag in a ASN.1 dump,\\n * 'tagNoHex' will be 'a1'.\\n * \u003cbr/\u003e\\n * As for optional argument 'params' for constructor, you can specify *ANY* of\\n * following properties:\\n * \u003cul\u003e\\n * \u003cli\u003eexplicit - specify true if this is explicit tag otherwise false\\n *     (default is 'true').\u003c/li\u003e\\n * \u003cli\u003etag - specify tag (default is 'a0' which means [0])\u003c/li\u003e\\n * \u003cli\u003eobj - specify ASN1Object which is tagged\u003c/li\u003e\\n * \u003c/ul\u003e\\n * @example\\n * d1 = new KJUR.asn1.DERUTF8String({'str':'a'});\\n * d2 = new KJUR.asn1.DERTaggedObject({'obj': d1});\\n * hex = d2.getEncodedHex();\\n */\\nKJUR.asn1.DERTaggedObject = function (params) {\\n    KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);\\n    this.hT = \\\"a0\\\";\\n    this.hV = '';\\n    this.isExplicit = true;\\n    this.asn1Object = null;\\n    /**\\n     * set value by an ASN1Object\\n     * @name setString\\n     * @memberOf KJUR.asn1.DERTaggedObject#\\n     * @function\\n     * @param {Boolean} isExplicitFlag flag for explicit/implicit tag\\n     * @param {Integer} tagNoHex hexadecimal string of ASN.1 tag\\n     * @param {ASN1Object} asn1Object ASN.1 to encapsulate\\n     */\\n    this.setASN1Object = function (isExplicitFlag, tagNoHex, asn1Object) {\\n        this.hT = tagNoHex;\\n        this.isExplicit = isExplicitFlag;\\n        this.asn1Object = asn1Object;\\n        if (this.isExplicit) {\\n            this.hV = this.asn1Object.getEncodedHex();\\n            this.hTLV = null;\\n            this.isModified = true;\\n        }\\n        else {\\n            this.hV = null;\\n            this.hTLV = asn1Object.getEncodedHex();\\n            this.hTLV = this.hTLV.replace(/^../, tagNoHex);\\n            this.isModified = false;\\n        }\\n    };\\n    this.getFreshValueHex = function () {\\n        return this.hV;\\n    };\\n    if (typeof params != \\\"undefined\\\") {\\n        if (typeof params['tag'] != \\\"undefined\\\") {\\n            this.hT = params['tag'];\\n        }\\n        if (typeof params['explicit'] != \\\"undefined\\\") {\\n            this.isExplicit = params['explicit'];\\n        }\\n        if (typeof params['obj'] != \\\"undefined\\\") {\\n            this.asn1Object = params['obj'];\\n            this.setASN1Object(this.isExplicit, this.hT, this.asn1Object);\\n        }\\n    }\\n};\\n_yahoo__WEBPACK_IMPORTED_MODULE_1__.YAHOO.lang.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/lib/jsrsasign/asn1-1.0.js?\");","","/***/ }),","","/***/ \"./lib/lib/jsrsasign/yahoo.js\":","/*!************************************!*\\","  !*** ./lib/lib/jsrsasign/yahoo.js ***!","  \\************************************/","/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) =\u003e {","","\"use strict\";","eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"YAHOO\\\": () =\u003e (/* binding */ YAHOO)\\n/* harmony export */ });\\n/*!\\nCopyright (c) 2011, Yahoo! Inc. All rights reserved.\\nCode licensed under the BSD License:\\nhttp://developer.yahoo.com/yui/license.html\\nversion: 2.9.0\\n*/\\nvar YAHOO = {};\\nYAHOO.lang = {\\n    /**\\n     * Utility to set up the prototype, constructor and superclass properties to\\n     * support an inheritance strategy that can chain constructors and methods.\\n     * Static members will not be inherited.\\n     *\\n     * @method extend\\n     * @static\\n     * @param {Function} subc   the object to modify\\n     * @param {Function} superc the object to inherit\\n     * @param {Object} overrides  additional properties/methods to add to the\\n     *                              subclass prototype.  These will override the\\n     *                              matching items obtained from the superclass\\n     *                              if present.\\n     */\\n    extend: function (subc, superc, overrides) {\\n        if (!superc || !subc) {\\n            throw new Error(\\\"YAHOO.lang.extend failed, please check that \\\" +\\n                \\\"all dependencies are included.\\\");\\n        }\\n        var F = function () { };\\n        F.prototype = superc.prototype;\\n        subc.prototype = new F();\\n        subc.prototype.constructor = subc;\\n        subc.superclass = superc.prototype;\\n        if (superc.prototype.constructor == Object.prototype.constructor) {\\n            superc.prototype.constructor = superc;\\n        }\\n        if (overrides) {\\n            var i;\\n            for (i in overrides) {\\n                subc.prototype[i] = overrides[i];\\n            }\\n            /*\\n             * IE will not enumerate native functions in a derived object even if the\\n             * function was overridden.  This is a workaround for specific functions\\n             * we care about on the Object prototype.\\n             * @property _IEEnumFix\\n             * @param {Function} r  the object to receive the augmentation\\n             * @param {Function} s  the object that supplies the properties to augment\\n             * @static\\n             * @private\\n             */\\n            var _IEEnumFix = function () { }, ADD = [\\\"toString\\\", \\\"valueOf\\\"];\\n            try {\\n                if (/MSIE/.test(navigator.userAgent)) {\\n                    _IEEnumFix = function (r, s) {\\n                        for (i = 0; i \u003c ADD.length; i = i + 1) {\\n                            var fname = ADD[i], f = s[fname];\\n                            if (typeof f === 'function' \u0026\u0026 f != Object.prototype[fname]) {\\n                                r[fname] = f;\\n                            }\\n                        }\\n                    };\\n                }\\n            }\\n            catch (ex) { }\\n            ;\\n            _IEEnumFix(subc.prototype, overrides);\\n        }\\n    }\\n};\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./lib/lib/jsrsasign/yahoo.js?\");","","/***/ }),","","/***/ \"./node_modules/process/browser.js\":","/*!*****************************************!*\\","  !*** ./node_modules/process/browser.js ***!","  \\*****************************************/","/***/ ((module) =\u003e {","","eval(\"// shim for using process in browser\\nvar process = module.exports = {};\\n\\n// cached from whatever global is present so that test runners that stub it\\n// don't break things.  But we need to wrap it in a try catch in case it is\\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\\n// function because try/catches deoptimize in certain engines.\\n\\nvar cachedSetTimeout;\\nvar cachedClearTimeout;\\n\\nfunction defaultSetTimout() {\\n    throw new Error('setTimeout has not been defined');\\n}\\nfunction defaultClearTimeout () {\\n    throw new Error('clearTimeout has not been defined');\\n}\\n(function () {\\n    try {\\n        if (typeof setTimeout === 'function') {\\n            cachedSetTimeout = setTimeout;\\n        } else {\\n            cachedSetTimeout = defaultSetTimout;\\n        }\\n    } catch (e) {\\n        cachedSetTimeout = defaultSetTimout;\\n    }\\n    try {\\n        if (typeof clearTimeout === 'function') {\\n            cachedClearTimeout = clearTimeout;\\n        } else {\\n            cachedClearTimeout = defaultClearTimeout;\\n        }\\n    } catch (e) {\\n        cachedClearTimeout = defaultClearTimeout;\\n    }\\n} ())\\nfunction runTimeout(fun) {\\n    if (cachedSetTimeout === setTimeout) {\\n        //normal enviroments in sane situations\\n        return setTimeout(fun, 0);\\n    }\\n    // if setTimeout wasn't available but was latter defined\\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) \u0026\u0026 setTimeout) {\\n        cachedSetTimeout = setTimeout;\\n        return setTimeout(fun, 0);\\n    }\\n    try {\\n        // when when somebody has screwed with setTimeout but no I.E. maddness\\n        return cachedSetTimeout(fun, 0);\\n    } catch(e){\\n        try {\\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\\n            return cachedSetTimeout.call(null, fun, 0);\\n        } catch(e){\\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\\n            return cachedSetTimeout.call(this, fun, 0);\\n        }\\n    }\\n\\n\\n}\\nfunction runClearTimeout(marker) {\\n    if (cachedClearTimeout === clearTimeout) {\\n        //normal enviroments in sane situations\\n        return clearTimeout(marker);\\n    }\\n    // if clearTimeout wasn't available but was latter defined\\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) \u0026\u0026 clearTimeout) {\\n        cachedClearTimeout = clearTimeout;\\n        return clearTimeout(marker);\\n    }\\n    try {\\n        // when when somebody has screwed with setTimeout but no I.E. maddness\\n        return cachedClearTimeout(marker);\\n    } catch (e){\\n        try {\\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\\n            return cachedClearTimeout.call(null, marker);\\n        } catch (e){\\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\\n            return cachedClearTimeout.call(this, marker);\\n        }\\n    }\\n\\n\\n\\n}\\nvar queue = [];\\nvar draining = false;\\nvar currentQueue;\\nvar queueIndex = -1;\\n\\nfunction cleanUpNextTick() {\\n    if (!draining || !currentQueue) {\\n        return;\\n    }\\n    draining = false;\\n    if (currentQueue.length) {\\n        queue = currentQueue.concat(queue);\\n    } else {\\n        queueIndex = -1;\\n    }\\n    if (queue.length) {\\n        drainQueue();\\n    }\\n}\\n\\nfunction drainQueue() {\\n    if (draining) {\\n        return;\\n    }\\n    var timeout = runTimeout(cleanUpNextTick);\\n    draining = true;\\n\\n    var len = queue.length;\\n    while(len) {\\n        currentQueue = queue;\\n        queue = [];\\n        while (++queueIndex \u003c len) {\\n            if (currentQueue) {\\n                currentQueue[queueIndex].run();\\n            }\\n        }\\n        queueIndex = -1;\\n        len = queue.length;\\n    }\\n    currentQueue = null;\\n    draining = false;\\n    runClearTimeout(timeout);\\n}\\n\\nprocess.nextTick = function (fun) {\\n    var args = new Array(arguments.length - 1);\\n    if (arguments.length \u003e 1) {\\n        for (var i = 1; i \u003c arguments.length; i++) {\\n            args[i - 1] = arguments[i];\\n        }\\n    }\\n    queue.push(new Item(fun, args));\\n    if (queue.length === 1 \u0026\u0026 !draining) {\\n        runTimeout(drainQueue);\\n    }\\n};\\n\\n// v8 likes predictible objects\\nfunction Item(fun, array) {\\n    this.fun = fun;\\n    this.array = array;\\n}\\nItem.prototype.run = function () {\\n    this.fun.apply(null, this.array);\\n};\\nprocess.title = 'browser';\\nprocess.browser = true;\\nprocess.env = {};\\nprocess.argv = [];\\nprocess.version = ''; // empty string to avoid regexp issues\\nprocess.versions = {};\\n\\nfunction noop() {}\\n\\nprocess.on = noop;\\nprocess.addListener = noop;\\nprocess.once = noop;\\nprocess.off = noop;\\nprocess.removeListener = noop;\\nprocess.removeAllListeners = noop;\\nprocess.emit = noop;\\nprocess.prependListener = noop;\\nprocess.prependOnceListener = noop;\\n\\nprocess.listeners = function (name) { return [] }\\n\\nprocess.binding = function (name) {\\n    throw new Error('process.binding is not supported');\\n};\\n\\nprocess.cwd = function () { return '/' };\\nprocess.chdir = function (dir) {\\n    throw new Error('process.chdir is not supported');\\n};\\nprocess.umask = function() { return 0; };\\n\\n\\n//# sourceURL=webpack://JSEncrypt/./node_modules/process/browser.js?\");","","/***/ })","","/******/ \t});","/************************************************************************/","/******/ \t// The module cache","/******/ \tvar __webpack_module_cache__ = {};","/******/","/******/ \t// The require function","/******/ \tfunction __webpack_require__(moduleId) {","/******/ \t\t// Check if module is in cache","/******/ \t\tvar cachedModule = __webpack_module_cache__[moduleId];","/******/ \t\tif (cachedModule !== undefined) {","/******/ \t\t\treturn cachedModule.exports;","/******/ \t\t}","/******/ \t\t// Create a new module (and put it into the cache)","/******/ \t\tvar module = __webpack_module_cache__[moduleId] = {","/******/ \t\t\t// no module.id needed","/******/ \t\t\t// no module.loaded needed","/******/ \t\t\texports: {}","/******/ \t\t};","/******/","/******/ \t\t// Execute the module function","/******/ \t\t__webpack_modules__[moduleId](module, module.exports, __webpack_require__);","/******/","/******/ \t\t// Return the exports of the module","/******/ \t\treturn module.exports;","/******/ \t}","/******/","/************************************************************************/","/******/ \t/* webpack/runtime/define property getters */","/******/ \t(() =\u003e {","/******/ \t\t// define getter functions for harmony exports","/******/ \t\t__webpack_require__.d = (exports, definition) =\u003e {","/******/ \t\t\tfor(var key in definition) {","/******/ \t\t\t\tif(__webpack_require__.o(definition, key) \u0026\u0026 !__webpack_require__.o(exports, key)) {","/******/ \t\t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });","/******/ \t\t\t\t}","/******/ \t\t\t}","/******/ \t\t};","/******/ \t})();","/******/","/******/ \t/* webpack/runtime/hasOwnProperty shorthand */","/******/ \t(() =\u003e {","/******/ \t\t__webpack_require__.o = (obj, prop) =\u003e (Object.prototype.hasOwnProperty.call(obj, prop))","/******/ \t})();","/******/","/******/ \t/* webpack/runtime/make namespace object */","/******/ \t(() =\u003e {","/******/ \t\t// define __esModule on exports","/******/ \t\t__webpack_require__.r = (exports) =\u003e {","/******/ \t\t\tif(typeof Symbol !== 'undefined' \u0026\u0026 Symbol.toStringTag) {","/******/ \t\t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });","/******/ \t\t\t}","/******/ \t\t\tObject.defineProperty(exports, '__esModule', { value: true });","/******/ \t\t};","/******/ \t})();","/******/","/************************************************************************/","/******/","/******/ \t// startup","/******/ \t// Load entry module and return exports","/******/ \t// This entry module can't be inlined because the eval devtool is used.","/******/ \tvar __webpack_exports__ = __webpack_require__(\"./lib/index.js\");","/******/ \t__webpack_exports__ = __webpack_exports__[\"default\"];","/******/","/******/ \treturn __webpack_exports__;","/******/ })()",";","});"],"stylingDirectives":[[{"start":0,"end":2,"cssClass":"pl-c"}],[{"start":0,"end":89,"cssClass":"pl-c"}],[{"start":0,"end":77,"cssClass":"pl-c"}],[{"start":0,"end":83,"cssClass":"pl-c"}],[{"start":0,"end":120,"cssClass":"pl-c"}],[{"start":0,"end":56,"cssClass":"pl-c"}],[{"start":0,"end":125,"cssClass":"pl-c"}],[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":9,"cssClass":"pl-k"},{"start":10,"end":42,"cssClass":"pl-en"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":47,"cssClass":"pl-s1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":49,"end":56,"cssClass":"pl-s1"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":58,"end":59,"cssClass":"pl-kos"}],[{"start":1,"end":3,"cssClass":"pl-k"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":18,"cssClass":"pl-s1"},{"start":19,"end":22,"cssClass":"pl-c1"},{"start":23,"end":31,"cssClass":"pl-s"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":8,"end":19,"cssClass":"pl-c"}],[{"start":2,"end":8,"cssClass":"pl-smi"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":26,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":10,"cssClass":"pl-k"},{"start":11,"end":13,"cssClass":"pl-k"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":20,"cssClass":"pl-k"},{"start":21,"end":27,"cssClass":"pl-s1"},{"start":28,"end":31,"cssClass":"pl-c1"},{"start":32,"end":42,"cssClass":"pl-s"},{"start":43,"end":45,"cssClass":"pl-c1"},{"start":46,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":56,"cssClass":"pl-c1"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":58,"cssClass":"pl-kos"}],[{"start":2,"end":8,"cssClass":"pl-en"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":13,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":10,"cssClass":"pl-k"},{"start":10,"end":11,"cssClass":"pl-kos"}],[{"start":8,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":38,"cssClass":"pl-s1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":7,"cssClass":"pl-smi"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":12,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":0,"end":6,"cssClass":"pl-k"},{"start":7,"end":15,"cssClass":"pl-c"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":25,"end":44,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":13,"cssClass":"pl-k"},{"start":14,"end":33,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":26,"cssClass":"pl-s"}],[{"start":0,"end":32,"cssClass":"pl-c"}],[{"start":0,"end":30,"cssClass":"pl-c"}],[{"start":0,"end":30,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":8489,"cssClass":"pl-s"},{"start":8489,"end":8490,"cssClass":"pl-kos"},{"start":8490,"end":8491,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":32,"cssClass":"pl-s"}],[{"start":0,"end":38,"cssClass":"pl-c"}],[{"start":0,"end":36,"cssClass":"pl-c"}],[{"start":0,"end":36,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":16502,"cssClass":"pl-s"},{"start":16502,"end":16503,"cssClass":"pl-kos"},{"start":16503,"end":16504,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":22,"cssClass":"pl-s"}],[{"start":0,"end":28,"cssClass":"pl-c"}],[{"start":0,"end":26,"cssClass":"pl-c"}],[{"start":0,"end":26,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":642,"cssClass":"pl-s"},{"start":642,"end":643,"cssClass":"pl-kos"},{"start":643,"end":644,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":32,"cssClass":"pl-s"}],[{"start":0,"end":38,"cssClass":"pl-c"}],[{"start":0,"end":36,"cssClass":"pl-c"}],[{"start":0,"end":36,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":21729,"cssClass":"pl-s"},{"start":21729,"end":21730,"cssClass":"pl-kos"},{"start":21730,"end":21731,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":34,"cssClass":"pl-s"}],[{"start":0,"end":40,"cssClass":"pl-c"}],[{"start":0,"end":38,"cssClass":"pl-c"}],[{"start":0,"end":38,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":3545,"cssClass":"pl-s"},{"start":3545,"end":3546,"cssClass":"pl-kos"},{"start":3546,"end":3547,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":31,"cssClass":"pl-s"}],[{"start":0,"end":37,"cssClass":"pl-c"}],[{"start":0,"end":35,"cssClass":"pl-c"}],[{"start":0,"end":35,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":2644,"cssClass":"pl-s"},{"start":2644,"end":2645,"cssClass":"pl-kos"},{"start":2645,"end":2646,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":33,"cssClass":"pl-s"}],[{"start":0,"end":39,"cssClass":"pl-c"}],[{"start":0,"end":37,"cssClass":"pl-c"}],[{"start":0,"end":37,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":3138,"cssClass":"pl-s"},{"start":3138,"end":3139,"cssClass":"pl-kos"},{"start":3139,"end":3140,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":32,"cssClass":"pl-s"}],[{"start":0,"end":38,"cssClass":"pl-c"}],[{"start":0,"end":36,"cssClass":"pl-c"}],[{"start":0,"end":36,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":2843,"cssClass":"pl-s"},{"start":2843,"end":2844,"cssClass":"pl-kos"},{"start":2844,"end":2845,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":30,"cssClass":"pl-s"}],[{"start":0,"end":36,"cssClass":"pl-c"}],[{"start":0,"end":34,"cssClass":"pl-c"}],[{"start":0,"end":34,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":55690,"cssClass":"pl-s"},{"start":55690,"end":55691,"cssClass":"pl-kos"},{"start":55691,"end":55692,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":31,"cssClass":"pl-s"}],[{"start":0,"end":37,"cssClass":"pl-c"}],[{"start":0,"end":35,"cssClass":"pl-c"}],[{"start":0,"end":35,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":1796,"cssClass":"pl-s"},{"start":1796,"end":1797,"cssClass":"pl-kos"},{"start":1797,"end":1798,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":29,"cssClass":"pl-s"}],[{"start":0,"end":35,"cssClass":"pl-c"}],[{"start":0,"end":33,"cssClass":"pl-c"}],[{"start":0,"end":33,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":3236,"cssClass":"pl-s"},{"start":3236,"end":3237,"cssClass":"pl-kos"},{"start":3237,"end":3238,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":29,"cssClass":"pl-s"}],[{"start":0,"end":35,"cssClass":"pl-c"}],[{"start":0,"end":33,"cssClass":"pl-c"}],[{"start":0,"end":33,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":14993,"cssClass":"pl-s"},{"start":14993,"end":14994,"cssClass":"pl-kos"},{"start":14994,"end":14995,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":30,"cssClass":"pl-s"}],[{"start":0,"end":36,"cssClass":"pl-c"}],[{"start":0,"end":34,"cssClass":"pl-c"}],[{"start":0,"end":34,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":1738,"cssClass":"pl-s"},{"start":1738,"end":1739,"cssClass":"pl-kos"},{"start":1739,"end":1740,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":39,"cssClass":"pl-s"}],[{"start":0,"end":45,"cssClass":"pl-c"}],[{"start":0,"end":43,"cssClass":"pl-c"}],[{"start":0,"end":43,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":59782,"cssClass":"pl-s"},{"start":59782,"end":59783,"cssClass":"pl-kos"},{"start":59783,"end":59784,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":36,"cssClass":"pl-s"}],[{"start":0,"end":42,"cssClass":"pl-c"}],[{"start":0,"end":40,"cssClass":"pl-c"}],[{"start":0,"end":40,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":52,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":75,"end":77,"cssClass":"pl-c1"},{"start":78,"end":79,"cssClass":"pl-kos"}],[],[{"start":0,"end":12,"cssClass":"pl-s"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":3081,"cssClass":"pl-s"},{"start":3081,"end":3082,"cssClass":"pl-kos"},{"start":3082,"end":3083,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":41,"cssClass":"pl-s"}],[{"start":0,"end":47,"cssClass":"pl-c"}],[{"start":0,"end":45,"cssClass":"pl-c"}],[{"start":0,"end":45,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":16,"end":18,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-kos"}],[],[{"start":0,"end":4,"cssClass":"pl-en"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":5681,"cssClass":"pl-s"},{"start":5681,"end":5682,"cssClass":"pl-kos"},{"start":5682,"end":5683,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-c"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":74,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":29,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":13,"cssClass":"pl-k"},{"start":14,"end":38,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":33,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":18,"cssClass":"pl-k"},{"start":19,"end":38,"cssClass":"pl-en"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":47,"cssClass":"pl-s1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":41,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":14,"cssClass":"pl-k"},{"start":15,"end":27,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":30,"end":54,"cssClass":"pl-s1"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":55,"end":63,"cssClass":"pl-s1"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":64,"end":65,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":13,"cssClass":"pl-k"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":27,"cssClass":"pl-s1"},{"start":28,"end":31,"cssClass":"pl-c1"},{"start":32,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":12,"end":18,"cssClass":"pl-k"},{"start":19,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":61,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":14,"cssClass":"pl-k"},{"start":15,"end":21,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":48,"cssClass":"pl-s1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":57,"cssClass":"pl-s1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-c1"},{"start":61,"end":62,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":12,"end":34,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":12,"end":38,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":12,"end":19,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":41,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":47,"cssClass":"pl-s1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":49,"end":55,"cssClass":"pl-s1"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":63,"cssClass":"pl-c1"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":65,"end":84,"cssClass":"pl-s1"},{"start":84,"end":85,"cssClass":"pl-kos"},{"start":85,"end":86,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":46,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":17,"cssClass":"pl-k"},{"start":18,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":11,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"}],[{"start":0,"end":74,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":55,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":57,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-en"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":45,"end":55,"cssClass":"pl-s1"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":57,"end":59,"cssClass":"pl-c1"},{"start":60,"end":61,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":12,"end":15,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":19,"cssClass":"pl-k"},{"start":20,"end":23,"cssClass":"pl-s1"},{"start":24,"end":26,"cssClass":"pl-k"},{"start":27,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":13,"end":15,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-en"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":48,"cssClass":"pl-s1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":53,"cssClass":"pl-s1"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":55,"end":57,"cssClass":"pl-c1"},{"start":58,"end":59,"cssClass":"pl-c1"},{"start":59,"end":78,"cssClass":"pl-s1"},{"start":78,"end":79,"cssClass":"pl-kos"},{"start":79,"end":80,"cssClass":"pl-en"},{"start":80,"end":81,"cssClass":"pl-kos"},{"start":81,"end":88,"cssClass":"pl-s1"},{"start":88,"end":89,"cssClass":"pl-kos"},{"start":90,"end":93,"cssClass":"pl-s1"},{"start":93,"end":94,"cssClass":"pl-kos"},{"start":94,"end":95,"cssClass":"pl-kos"},{"start":96,"end":97,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":14,"end":20,"cssClass":"pl-v"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":35,"cssClass":"pl-en"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":45,"end":48,"cssClass":"pl-s1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":52,"end":62,"cssClass":"pl-c1"},{"start":64,"end":68,"cssClass":"pl-c1"},{"start":68,"end":69,"cssClass":"pl-kos"},{"start":70,"end":73,"cssClass":"pl-c1"},{"start":75,"end":85,"cssClass":"pl-s1"},{"start":85,"end":86,"cssClass":"pl-kos"},{"start":86,"end":89,"cssClass":"pl-s1"},{"start":89,"end":90,"cssClass":"pl-kos"},{"start":91,"end":92,"cssClass":"pl-kos"},{"start":92,"end":93,"cssClass":"pl-kos"},{"start":93,"end":94,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":56,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-en"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":45,"cssClass":"pl-s1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":47,"end":49,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":57,"cssClass":"pl-v"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":67,"cssClass":"pl-c1"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":68,"end":82,"cssClass":"pl-c1"},{"start":82,"end":83,"cssClass":"pl-kos"},{"start":83,"end":87,"cssClass":"pl-en"},{"start":87,"end":88,"cssClass":"pl-kos"},{"start":88,"end":91,"cssClass":"pl-s1"},{"start":91,"end":92,"cssClass":"pl-kos"},{"start":93,"end":97,"cssClass":"pl-s1"},{"start":97,"end":98,"cssClass":"pl-kos"},{"start":98,"end":99,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":53,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":42,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-en"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":45,"end":47,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":12,"end":14,"cssClass":"pl-k"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":21,"cssClass":"pl-k"},{"start":22,"end":28,"cssClass":"pl-v"},{"start":29,"end":32,"cssClass":"pl-c1"},{"start":33,"end":44,"cssClass":"pl-s"},{"start":45,"end":47,"cssClass":"pl-c1"},{"start":48,"end":54,"cssClass":"pl-v"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":55,"end":66,"cssClass":"pl-c1"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":68,"end":69,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":13,"end":19,"cssClass":"pl-v"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":34,"cssClass":"pl-en"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":42,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":44,"end":50,"cssClass":"pl-v"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":62,"cssClass":"pl-c1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":66,"end":71,"cssClass":"pl-c1"},{"start":73,"end":81,"cssClass":"pl-s"},{"start":82,"end":83,"cssClass":"pl-kos"},{"start":83,"end":84,"cssClass":"pl-kos"},{"start":84,"end":85,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":12,"end":18,"cssClass":"pl-v"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":33,"cssClass":"pl-en"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":55,"cssClass":"pl-s"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":59,"end":64,"cssClass":"pl-c1"},{"start":66,"end":70,"cssClass":"pl-c1"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":74,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"}],[{"start":0,"end":74,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":20,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":49,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":81,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":13,"cssClass":"pl-k"},{"start":14,"end":33,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":55,"cssClass":"pl-en"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":72,"cssClass":"pl-s"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":73,"end":74,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":29,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":32,"end":51,"cssClass":"pl-s1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":61,"cssClass":"pl-s"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":10,"end":16,"cssClass":"pl-k"},{"start":17,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-c"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/hjdhnx/dr_py/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false,"repoAlertsPath":"/hjdhnx/dr_py/security/dependabot","repoSecurityAndAnalysisPath":"/hjdhnx/dr_py/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"rsa.js","displayUrl":"https://github.com/hjdhnx/dr_py/blob/main/libs/rsa.js?raw=true","headerInfo":{"blobSize":"208 KB","deleteInfo":{"deleteTooltip":"Fork this repository and delete the file"},"editInfo":{"editTooltip":"Fork this repository and edit the file"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"d56e841","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fhjdhnx%2Fdr_py%2Fblob%2Fmain%2Flibs%2Frsa.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"263","truncatedSloc":"214"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","languageID":183,"large":false,"loggedIn":true,"newDiscussionPath":"/hjdhnx/dr_py/discussions/new","newIssuePath":"/hjdhnx/dr_py/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/hjdhnx/dr_py/blob/main/libs/rsa.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/hjdhnx/dr_py/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"rawBlobUrl":"https://github.com/hjdhnx/dr_py/raw/main/libs/rsa.js","renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"hjdhnx","repoName":"dr_py","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timedOut":false,"notAnalyzed":false,"symbols":[{"name":"webpackUniversalModuleDefinition","kind":"function","identStart":573,"identEnd":605,"extentStart":564,"extentEnd":860,"fullyQualifiedName":"webpackUniversalModuleDefinition","identUtf16":{"start":{"lineNumber":8,"utf16Col":10},"end":{"lineNumber":8,"utf16Col":42}},"extentUtf16":{"start":{"lineNumber":8,"utf16Col":1},"end":{"lineNumber":17,"utf16Col":1}}},{"name":"__webpack_require__","kind":"function","identStart":210734,"identEnd":210753,"extentStart":210725,"extentEnd":211449,"fullyQualifiedName":"__webpack_require__","identUtf16":{"start":{"lineNumber":202,"utf16Col":19},"end":{"lineNumber":202,"utf16Col":38}},"extentUtf16":{"start":{"lineNumber":202,"utf16Col":10},"end":{"lineNumber":220,"utf16Col":11}}},{"name":"d","kind":"function","identStart":211698,"identEnd":211699,"extentStart":211678,"extentEnd":212004,"fullyQualifiedName":"d","identUtf16":{"start":{"lineNumber":226,"utf16Col":31},"end":{"lineNumber":226,"utf16Col":32}},"extentUtf16":{"start":{"lineNumber":226,"utf16Col":11},"end":{"lineNumber":232,"utf16Col":12}}},{"name":"o","kind":"function","identStart":212138,"identEnd":212139,"extentStart":212118,"extentEnd":212206,"fullyQualifiedName":"o","identUtf16":{"start":{"lineNumber":237,"utf16Col":31},"end":{"lineNumber":237,"utf16Col":32}},"extentUtf16":{"start":{"lineNumber":237,"utf16Col":11},"end":{"lineNumber":237,"utf16Col":99}}},{"name":"r","kind":"function","identStart":212379,"identEnd":212380,"extentStart":212359,"extentEnd":212655,"fullyQualifiedName":"r","identUtf16":{"start":{"lineNumber":243,"utf16Col":31},"end":{"lineNumber":243,"utf16Col":32}},"extentUtf16":{"start":{"lineNumber":243,"utf16Col":11},"end":{"lineNumber":248,"utf16Col":12}}}]}},"copilotInfo":{"documentationUrl":"https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot-for-individuals","notices":{"codeViewPopover":{"dismissed":false,"dismissPath":"/settings/dismiss-notice/code_view_copilot_popover"}},"userAccess":{"accessAllowed":false,"hasSubscriptionEnded":false,"orgHasCFBAccess":false,"userHasCFIAccess":false,"userHasOrgs":false,"userIsOrgAdmin":false,"userIsOrgMember":false,"business":null,"featureRequestInfo":null}},"csrf_tokens":{"/hjdhnx/dr_py/branches":{"post":"dpRzGmuLNdKtKvvZ_QJ1XgrVfEMNm54dcShN0YC82Ushm7us25jT-rlF3l1iMKgk_n1wlSlizGTpq6GYK4diyg"},"/repos/preferences":{"post":"bi4nAVwnl00hF1AqndX9TRe04sjV4nIw2-Xn1UqUOii7VYJzahSSzWFC4C19TZ6LNv2Xc99KxtWFZcfuluvBQg"}}},"title":"dr_py/libs/rsa.js at main · hjdhnx/dr_py","appPayload":{"helpUrl":"https://docs.github.com","findFileWorkerPath":"/assets-cdn/worker/find-file-worker-83d4418b406d.js","findInFileWorkerPath":"/assets-cdn/worker/find-in-file-worker-bcc43f789400.js","githubDevUrl":"https://github.dev/","enabled_features":{"code_nav_ui_events":false,"copilot_conversational_ux":false,"copilot_conversational_ux_streaming":false,"copilot_popover_file_editor_header":true,"copilot_smell_icebreaker_ux":false}}}</script>
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

