





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
  <script type="text/javascript" nonce="babf6eea3d5847129172b8eb214" src="//local.adguard.org?ts=1697152839730&amp;type=content-script&amp;dmn=github.com&amp;url=https%3A%2F%2Fgithub.com%2Fhjdhnx%2Fdr_py%2Fblob%2Fmain%2Flibs%2Fgbk2.js&amp;app=chrome.exe&amp;css=2&amp;js=1&amp;rel=1&amp;rji=1&amp;sbe=1&amp;stealth=1&amp;st-dnt"></script>
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


  <title>dr_py/libs/gbk2.js at main · hjdhnx/dr_py</title>



  <meta name="route-pattern" content="/:user_id/:repository/blob/*name(/*path)">

    
  <meta name="current-catalog-service-hash" content="82c569b93da5c18ed649ebd4c2c79437db4611a6a1373e805a3cb001c64130b7">


  <meta name="request-id" content="149E:31F30:2AD7D4:2E8A47:65289319" data-turbo-transient="true" /><meta name="html-safe-nonce" content="c9670496bb2e309eb36063b3c920cb16f539ca725f10be5e34eb4aa5642c5c12" data-turbo-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9oamRobngvZHJfcHkvdHJlZS9tYWluL2xpYnMiLCJyZXF1ZXN0X2lkIjoiMTQ5RTozMUYzMDoyQUQ3RDQ6MkU4QTQ3OjY1Mjg5MzE5IiwidmlzaXRvcl9pZCI6Ijg4MDU1NDA1NzMyNjYxMDk3NTAiLCJyZWdpb25fZWRnZSI6ImphcGFuZWFzdCIsInJlZ2lvbl9yZW5kZXIiOiJpYWQifQ==" data-turbo-transient="true" /><meta name="visitor-hmac" content="340e43de492461dbd7fd336d6b9c695e83f9ee893b6a74ab088131d1d5acfe11" data-turbo-transient="true" />


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
    
      <meta name="description" content="A webServer convert web and x5 movie sites to cms api data - dr_py/libs/gbk2.js at main · hjdhnx/dr_py">
      <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <meta property="fb:app_id" content="1401488693436528">
    <meta name="apple-itunes-app" content="app-id=1477376905, app-argument=https://github.com/hjdhnx/dr_py/blob/main/libs/gbk2.js" />
      <meta name="twitter:image:src" content="https://opengraph.githubassets.com/f6a30d397de96d17b6808619b1718f66b00400b77ff8d6a2178977198fd57158/hjdhnx/dr_py" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="dr_py/libs/gbk2.js at main · hjdhnx/dr_py" /><meta name="twitter:description" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" />
      <meta property="og:image" content="https://opengraph.githubassets.com/f6a30d397de96d17b6808619b1718f66b00400b77ff8d6a2178977198fd57158/hjdhnx/dr_py" /><meta property="og:image:alt" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="600" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="dr_py/libs/gbk2.js at main · hjdhnx/dr_py" /><meta property="og:url" content="https://github.com/hjdhnx/dr_py/blob/main/libs/gbk2.js" /><meta property="og:description" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" />
      

      <link rel="shared-web-socket" href="wss://alive.github.com/_sockets/u/139020806/ws?session=eyJ2IjoiVjMiLCJ1IjoxMzkwMjA4MDYsInMiOjEyMjE1NzQ0NzAsImMiOjI0NzM3NDYwNywidCI6MTY5NzE1NzkxN30=--2c24ed8d02b07de8bfa9ce8e0c62f16271ca5dbe79fc4c22622caac0dc959e88" data-refresh-url="/_alive" data-session-id="b901c9b8379b94b0262d68dba8a5f5afb2b3e5767167059fbd5009fa1e7b15b7">
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
      
  <button aria-label="Open global navigation menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-d66c88ad-af09-404f-8d80-829c650fd09e" id="dialog-show-dialog-d66c88ad-af09-404f-8d80-829c650fd09e" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-bg-transparent p-0 color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-three-bars Button-visual">
    <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
</svg>
</button>  

<div class="Overlay--hidden Overlay-backdrop--side Overlay-backdrop--placement-left" data-modal-dialog-overlay>
  <modal-dialog data-target="deferred-side-panel.panel" role="dialog" id="dialog-d66c88ad-af09-404f-8d80-829c650fd09e" aria-modal="true" aria-disabled="true" aria-labelledby="dialog-d66c88ad-af09-404f-8d80-829c650fd09e-title" aria-describedby="dialog-d66c88ad-af09-404f-8d80-829c650fd09e-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade SidePanel">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-d66c88ad-af09-404f-8d80-829c650fd09e-title">
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
      <button data-close-dialog-id="dialog-d66c88ad-af09-404f-8d80-829c650fd09e" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body d-flex flex-column height-full px-2">      <nav aria-label="Site navigation" data-view-component="true" class="ActionList">
  
  <nav-list>
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-hotkey="g d" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;HOME&quot;,&quot;label&quot;:null}" id="item-729f0b6e-a4f4-450d-984b-a636a9d49e80" href="/dashboard" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES&quot;,&quot;label&quot;:null}" id="item-923376f7-bec3-4cb9-bb31-2c767a0c0716" href="/issues" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS&quot;,&quot;label&quot;:null}" id="item-576e5646-2866-4edb-8247-4e1f64c24ac9" href="/pulls" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DISCUSSIONS&quot;,&quot;label&quot;:null}" id="item-54afaa70-0193-4939-8aac-f783178a7532" href="/discussions" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;CODESPACES&quot;,&quot;label&quot;:null}" id="item-5c90a3a2-b3b0-4bd3-9659-c44862f384e5" href="https://github.com/codespaces" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;EXPLORE&quot;,&quot;label&quot;:null}" id="item-8c96cd89-69ea-412a-8f2f-797968094533" href="/explore" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;MARKETPLACE&quot;,&quot;label&quot;:null}" id="item-b76e33ea-aefd-4e76-a096-7e90f24ade2b" href="/marketplace" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;FEEDBACK&quot;,&quot;label&quot;:null}" id="item-3a0912b7-042b-4c14-880a-5b133581d8b2" href="https://gh.io/navigation-update" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
              


<qbsearch-input class="search-input" data-scope="repo:hjdhnx/dr_py" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="O4IHjr9516wfYCclM7PbhEmFAF8U1G719jMpG7yEbJHM-7lMtquBq1pIL38-1fVaY0r1BJyszQD55_Mgjk4Q_g" data-max-custom-scopes="10" data-header-redesign-enabled="true" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="hjdhnx/dr_py" data-current-org="" data-current-owner="hjdhnx" data-logged-in="true">
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

      <tool-tip id="tooltip-49ba0b80-e113-435f-8369-a22bf80759a1" for="AppHeader-commandPalette-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Command palette</tool-tip>
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
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-269a0f0b-c745-4d70-998b-a9f97f1206b4" data-target="query-builder.input" data-action="
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
      <div class="FormControl-inlineValidation" id="validation-269a0f0b-c745-4d70-998b-a9f97f1206b4" hidden="hidden">
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
      <div data-view-component="true" class="Overlay-body">        <!-- '"` --><!-- </textarea></xmp> --></option></form><form id="code-search-feedback-form" data-turbo="false" action="/search/feedback" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="2Rvv43rcDQSVBBB5YXiVy_PTzG-oI3zD3YRvsX23vRvs7ZNA1bv0IEGAAXDO3sGaco2ottsGoSfX233kOz5_Dw" />
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form id="custom-scopes-dialog-form" data-turbo="false" action="/search/custom_scopes" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="yyJT0-Lq_MKJKbsb1EMNBV70rkNjEPu2BY5qdo-hFMf_qQ7oyeEp_hdsv2e7WlLmVXNMLt5sglDgAi3UEJFFMA" />
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
              <input type="hidden" value="P38Hl7PEKdfTBCdIjifSHUjEBZtZJavpq5GD4ZZY12A3XOp8rdrrftxPFEC4afsOfSOr6gF58KaAkNduEdFEyw" data-csrf="true" />
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
</qbsearch-input><input type="hidden" value="IdRiySd1mRR36ORS2vuTGmYTbyDavWi_SYOOGe9Uqa69MYJx_YBUtkLo-W9SnECXOwQbWMEa8DlxgbiLlTsJ_Q" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />

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
</button>  <tool-tip id="tooltip-3c0fcbb2-b584-4690-909f-b741721eb1ea" for="global-create-menu-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Create new...</tool-tip>
</div>

<anchored-position id="global-create-menu-overlay" anchor="global-create-menu-button" align="end" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      
        <div data-view-component="true">
  <ul aria-labelledby="global-create-menu-button" id="global-create-menu-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new repository&quot;}" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="/new" tabindex="-1" id="item-450d3dec-7f38-4d13-8820-44632be83e47" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="/new/import" tabindex="-1" id="item-2075487b-035f-48d9-a143-7519b4db5ceb" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="/codespaces/new" tabindex="-1" id="item-66d0593d-340f-4485-b18a-501736d1ffb9" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="https://gist.github.com/" tabindex="-1" id="item-716783df-1bc7-4e2b-9338-c58a4b0cd213" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="/account/organizations/new" tabindex="-1" id="item-82fc7603-84fd-45d6-8e17-f98b097dd003" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
  <a href="/issues" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-22f4c1eb-4446-43e1-a57c-3c3f2b07caac" aria-labelledby="tooltip-9bf7f589-755c-4b94-bebc-d70fe95ab348" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened Button-visual">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
</a>  <tool-tip id="tooltip-9bf7f589-755c-4b94-bebc-d70fe95ab348" for="icon-button-22f4c1eb-4446-43e1-a57c-3c3f2b07caac" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Issues</tool-tip>
</div>
          <div data-view-component="true" class="Button-withTooltip">
  <a href="/pulls" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-99fa76f6-9fc4-4c95-8a14-608c2654bc95" aria-labelledby="tooltip-97e30ef7-9746-4b67-bb08-2d3a2a7b74f7" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request Button-visual">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
</a>  <tool-tip id="tooltip-97e30ef7-9746-4b67-bb08-2d3a2a7b74f7" for="icon-button-99fa76f6-9fc4-4c95-8a14-608c2654bc95" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Pull requests</tool-tip>
</div>
          
        </div>

        

<notification-indicator data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTM5MDIwODA2IiwidCI6MTY5NzE1NzkxN30=--a1925744336d57193f30ea1a9be747085f392d304f835b2691f9658786732554" data-indicator-mode="none" data-tooltip-global="You have unread notifications" data-tooltip-unavailable="Notifications are unavailable at the moment." data-tooltip-none="You have no unread notifications" data-header-redesign-enabled="true" data-fetch-indicator-src="/notifications/indicator" data-fetch-indicator-enabled="true" data-view-component="true" class="js-socket-channel">
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

    <tool-tip data-target="notification-indicator.tooltip" id="tooltip-8c6102e6-321e-43f5-9f10-394fe3f25934" for="AppHeader-notifications-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Notifications</tool-tip>
</notification-indicator>

        

        <div class="AppHeader-user">
          <deferred-side-panel data-url="/_side-panels/user?memex_enabled=true&amp;repository=dr_py&amp;user=gogorotv&amp;user_can_create_organizations=true&amp;user_id=139020806">
  <include-fragment data-target="deferred-side-panel.fragment">
      <user-drawer-side-panel>
      <button aria-label="Open user account menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-0ab66cb0-d175-407e-80d5-9e11b6f7884d" id="dialog-show-dialog-0ab66cb0-d175-407e-80d5-9e11b6f7884d" type="button" data-view-component="true" class="AppHeader-logo Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0">    <span class="Button-content">
      <span class="Button-label"><img src="https://avatars.githubusercontent.com/u/139020806?v=4" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle" /></span>
    </span>
</button>  

<div class="Overlay--hidden Overlay-backdrop--side Overlay-backdrop--placement-right" data-modal-dialog-overlay>
  <modal-dialog data-target="deferred-side-panel.panel" role="dialog" id="dialog-0ab66cb0-d175-407e-80d5-9e11b6f7884d" aria-modal="true" aria-disabled="true" aria-labelledby="dialog-0ab66cb0-d175-407e-80d5-9e11b6f7884d-title" aria-describedby="dialog-0ab66cb0-d175-407e-80d5-9e11b6f7884d-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade SidePanel">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-0ab66cb0-d175-407e-80d5-9e11b6f7884d-title">
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
      <button data-close-dialog-id="dialog-0ab66cb0-d175-407e-80d5-9e11b6f7884d" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body d-flex flex-column height-full px-2">      <nav aria-label="User navigation" data-view-component="true" class="ActionList">
  
  <nav-list>
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-d80cfb44-65e0-4e63-9a02-c13c47a738b2" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PROFILE&quot;,&quot;label&quot;:null}" id="item-5c5bd30e-efc9-4164-ae07-1e347be09b50" href="https://github.com/gogorotv" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-246bb7cd-b3b9-4fd5-86eb-6df41a870643" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_REPOSITORIES&quot;,&quot;label&quot;:null}" id="item-78915b60-e1e7-4186-878b-8f050122c7d1" href="/gogorotv?tab=repositories" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_PROJECTS&quot;,&quot;label&quot;:null}" id="item-ad0d6366-4770-461e-ade8-68ed82e5ec59" href="/gogorotv?tab=projects" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-d9ae6552-db38-42d1-accd-9f81412a254d" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_STARS&quot;,&quot;label&quot;:null}" id="item-50316d8c-8545-416c-91cc-e5f3cdcba538" href="/gogorotv?tab=stars" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SPONSORS&quot;,&quot;label&quot;:null}" id="item-28f62117-89d0-481d-8d60-c051b07c069f" href="/sponsors/accounts" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_GISTS&quot;,&quot;label&quot;:null}" id="item-62875433-4232-45ba-bd12-d8f3ba6fabce" href="https://gist.github.com/mine" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-7b8882d5-2691-4c58-957f-b605b51fae6d" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-b78d5fd2-af50-40f5-8860-90e5a6c0afa2" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-d6a4552c-ceca-4078-b277-806533b397f2" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SETTINGS&quot;,&quot;label&quot;:null}" id="item-815468aa-d104-4721-9c76-36fb023a577d" href="/settings/profile" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DOCS&quot;,&quot;label&quot;:null}" id="item-844fe279-be73-4e19-98f5-34be4514bb4c" href="https://docs.github.com" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SUPPORT&quot;,&quot;label&quot;:null}" id="item-7bc7ccaa-cd1a-4648-aec0-8ab3493ca472" href="https://support.github.com" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;LOGOUT&quot;,&quot;label&quot;:null}" id="item-0130c320-448d-4875-8bb1-88f3318dcb77" href="/logout" data-view-component="true" class="ActionListContent">
      
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
  <button id="icon-button-ec265aae-3f2b-4744-9081-14addfcc7915" aria-labelledby="tooltip-dc798903-2e0d-45ed-b479-b54a64e2289a" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium js-flash-close">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button>  <tool-tip id="tooltip-dc798903-2e0d-45ed-b479-b54a64e2289a" for="icon-button-ec265aae-3f2b-4744-9081-14addfcc7915" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Dismiss alert</tool-tip>
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


    
    <notification-shelf-watcher data-base-url="https://github.com/notifications/beta/shelf" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTM5MDIwODA2IiwidCI6MTY5NzE1NzkxN30=--a1925744336d57193f30ea1a9be747085f392d304f835b2691f9658786732554" data-view-component="true" class="js-socket-channel"></notification-shelf-watcher>
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
      return-to=/hjdhnx/dr_py/blob/main/libs/gbk2.js
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
</button>    <tool-tip id="tooltip-4148de65-aa4d-4d35-a0d8-60ee7206b62a" for="command-palette-clear-button" popover="manual" data-direction="w" data-type="label" data-view-component="true" class="sr-only position-absolute">Clear Command Palette</tool-tip>
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
  initial-path="/hjdhnx/dr_py/blob/main/libs/gbk2.js"
  style="min-height: calc(100vh - 62px)"
  data-ssr="false"
  data-lazy="false"
  data-alternate="false"
>
  
  <script type="application/json" data-target="react-app.embeddedData">{"payload":{"allShortcutsEnabled":true,"fileTree":{"libs":{"items":[{"name":"jar","path":"libs/jar","contentType":"directory"},{"name":"parse","path":"libs/parse","contentType":"directory"},{"name":"alist.js","path":"libs/alist.js","contentType":"file"},{"name":"alist.min.js","path":"libs/alist.min.js","contentType":"file"},{"name":"atob.js","path":"libs/atob.js","contentType":"file"},{"name":"base64.js","path":"libs/base64.js","contentType":"file"},{"name":"base64.min.js","path":"libs/base64.min.js","contentType":"file"},{"name":"cat_index.js","path":"libs/cat_index.js","contentType":"file"},{"name":"cheerio.min.js","path":"libs/cheerio.min.js","contentType":"file"},{"name":"cheerio.min.jsd","path":"libs/cheerio.min.jsd","contentType":"file"},{"name":"crypto-hiker.js","path":"libs/crypto-hiker.js","contentType":"file"},{"name":"crypto-js.js","path":"libs/crypto-js.js","contentType":"file"},{"name":"drT.js","path":"libs/drT.js","contentType":"file"},{"name":"drpy-ym.js","path":"libs/drpy-ym.js","contentType":"file"},{"name":"drpy.js","path":"libs/drpy.js","contentType":"file"},{"name":"drpy.min.js","path":"libs/drpy.min.js","contentType":"file"},{"name":"drpy.ym.js","path":"libs/drpy.ym.js","contentType":"file"},{"name":"drpy2-2838.js","path":"libs/drpy2-2838.js","contentType":"file"},{"name":"drpy2.js","path":"libs/drpy2.js","contentType":"file"},{"name":"drpy2.min.js","path":"libs/drpy2.min.js","contentType":"file"},{"name":"es6py.js","path":"libs/es6py.js","contentType":"file"},{"name":"exRegExp.js","path":"libs/exRegExp.js","contentType":"file"},{"name":"gbk.js","path":"libs/gbk.js","contentType":"file"},{"name":"gbk2.js","path":"libs/gbk2.js","contentType":"file"},{"name":"live2cms.js","path":"libs/live2cms.js","contentType":"file"},{"name":"live2mv.js","path":"libs/live2mv.js","contentType":"file"},{"name":"maomi_aes.js","path":"libs/maomi_aes.js","contentType":"file"},{"name":"mod.js","path":"libs/mod.js","contentType":"file"},{"name":"nameOrder.js","path":"libs/nameOrder.js","contentType":"file"},{"name":"pdf.js","path":"libs/pdf.js","contentType":"file"},{"name":"pinyin_getFirstLetterList.js","path":"libs/pinyin_getFirstLetterList.js","contentType":"file"},{"name":"pre.js","path":"libs/pre.js","contentType":"file"},{"name":"rsa.js","path":"libs/rsa.js","contentType":"file"},{"name":"searchFilter.js","path":"libs/searchFilter.js","contentType":"file"},{"name":"sortName.js","path":"libs/sortName.js","contentType":"file"},{"name":"underscore-esm-min.js","path":"libs/underscore-esm-min.js","contentType":"file"},{"name":"uri.min.js","path":"libs/uri.min.js","contentType":"file"},{"name":"util.ym.js","path":"libs/util.ym.js","contentType":"file"}],"totalCount":38},"":{"items":[{"name":".idea","path":".idea","contentType":"directory"},{"name":"base","path":"base","contentType":"directory"},{"name":"controllers","path":"controllers","contentType":"directory"},{"name":"doc","path":"doc","contentType":"directory"},{"name":"docker","path":"docker","contentType":"directory"},{"name":"images","path":"images","contentType":"directory"},{"name":"jiexi","path":"jiexi","contentType":"directory"},{"name":"js","path":"js","contentType":"directory"},{"name":"libs","path":"libs","contentType":"directory"},{"name":"logs","path":"logs","contentType":"directory"},{"name":"models","path":"models","contentType":"directory"},{"name":"py","path":"py","contentType":"directory"},{"name":"static","path":"static","contentType":"directory"},{"name":"super","path":"super","contentType":"directory"},{"name":"templates","path":"templates","contentType":"directory"},{"name":"test","path":"test","contentType":"directory"},{"name":"txt","path":"txt","contentType":"directory"},{"name":"utils","path":"utils","contentType":"directory"},{"name":"whl","path":"whl","contentType":"directory"},{"name":"zhengban","path":"zhengban","contentType":"directory"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"404.jpg","path":"404.jpg","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"app.py","path":"app.py","contentType":"file"},{"name":"app.sh","path":"app.sh","contentType":"file"},{"name":"commands.txt","path":"commands.txt","contentType":"file"},{"name":"dockerfile","path":"dockerfile","contentType":"file"},{"name":"dockerfile_arm64.txt","path":"dockerfile_arm64.txt","contentType":"file"},{"name":"dockerfile_armv7.txt","path":"dockerfile_armv7.txt","contentType":"file"},{"name":"drpy_js_rule.js","path":"drpy_js_rule.js","contentType":"file"},{"name":"readme.md","path":"readme.md","contentType":"file"},{"name":"requirements.txt","path":"requirements.txt","contentType":"file"},{"name":"sources.list","path":"sources.list","contentType":"file"},{"name":"start.sh","path":"start.sh","contentType":"file"}],"totalCount":34}},"fileTreeProcessingTime":8.065711,"foldersToFetch":[],"reducedMotionEnabled":"system","repo":{"id":533565455,"defaultBranch":"main","name":"dr_py","ownerLogin":"hjdhnx","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2022-09-07T09:54:07.000+08:00","ownerAvatar":"https://avatars.githubusercontent.com/u/49803097?v=4","public":true,"private":false,"isOrgOwned":false},"symbolsExpanded":false,"treeExpanded":true,"refInfo":{"name":"main","listCacheKey":"v0:1696329988.0","canEdit":true,"refType":"branch","currentOid":"fde84cfa7523179df20601cfc560c55fcbe9f5de"},"path":"libs/gbk2.js","currentUser":{"id":139020806,"login":"gogorotv","userEmail":"gogoro2024@gmail.com"},"blob":{"rawLines":["/*!"," * gbk.js v0.3.0"," * Homepage https://github.com/cnwhy/GBK.js"," * License MIT"," * GBK.URI.encodeURI(str)"," */","","(function(global, factory) {","    typeof exports === 'object' \u0026\u0026 typeof module !== 'undefined' ? module.exports = factory() :","        typeof define === 'function' \u0026\u0026 define.amd ? define(factory) :","        (global.GBK = factory());","}(this, (function() {","    'use strict';","","    var GBK = function(gbk_us) {","        var arr_index = 0x8140; //33088;","        var gbk = {","            decode: function(arr) {","                var str = \"\";","                for (var n = 0, max = arr.length; n \u003c max; n++) {","                    var code = arr[n] \u0026 0xff;","                    if (code \u003e 0x80 \u0026\u0026 n + 1 \u003c max) {","                        var code1 = arr[n + 1] \u0026 0xff;","                        if (code1 \u003e= 0x40) {","                            code = gbk_us[(code \u003c\u003c 8 | code1) - arr_index];","                            n++;","                        }","                    }","                    str += String.fromCharCode(code);","                }","                return str;","            },","            encode: function(str) {","                str += '';","                var gbk = [];","                var wh = '?'.charCodeAt(0); //gbk中没有的字符的替换符","                for (var i = 0; i \u003c str.length; i++) {","                    var charcode = str.charCodeAt(i);","                    if (charcode \u003c 0x80) gbk.push(charcode);","                    else {","                        var gcode = gbk_us.indexOf(charcode);","                        if (~gcode) {","                            gcode += arr_index;","                            gbk.push(0xFF \u0026 (gcode \u003e\u003e 8), 0xFF \u0026 gcode);","                        } else {","                            gbk.push(wh);","                        }","                    }","                }","                return gbk;","            }","        };","        return gbk;","    };","    var gbk = GBK;","","    var URI = function(GBK) {","        var passChars = '!\\'()*-._~';","        var otherPassChars = '#$\u0026+,/:;=?@';","","        function getModue(passChars) {","            var passBits = passChars.split('').sort();","            var isPass = function(s) {","                return ~passChars.indexOf(s) || /[0-9a-zA-Z]/.test(s)","            };","            return {","                encode: function(str) {","                    return (str + '').replace(/./g, function(v) {","                        if (isPass(v)) return v;","                        var bitArr = GBK.encode(v);","                        for (var i = 0; i \u003c bitArr.length; i++) {","                            bitArr[i] = '%' + ('0' + bitArr[i].toString(16)).substr(-2).toUpperCase();","                        }","                        return bitArr.join('');","                    })","                },","                decode: function(enstr) {","                    enstr = String(enstr);","                    var outStr = '';","                    for (var i = 0; i \u003c enstr.length; i++) {","                        var char = enstr.charAt(i);","                        if (char === '%' \u0026\u0026 i + 2 \u003c enstr.length) {","                            var code1 = parseInt(enstr.substr(i + 1, 2), 16);","                            if (!isNaN(code1)) {","                                var _i = i + 2;","                                if (code1 \u003e 0x80) {","                                    var code2;","                                    if (enstr.charAt(_i + 1) === '%') {","                                        code2 = parseInt(enstr.substr(_i + 2, 2), 16);","                                        _i += 3;","                                    } else {","                                        code2 = enstr.charCodeAt(_i + 1);","                                        _i += 1;","                                    }","                                    if (code2 \u003e= 0x40) {","                                        i = _i;","                                        outStr += GBK.decode([code1, code2]);","                                        continue;","                                    }","                                } else {","                                    i += 2;","                                    outStr += String.fromCharCode(code1);","                                    continue;","                                }","                            }","                        }","                        outStr += char;","                    }","                    return outStr;","","                }","            }","        }","","        var URIComponent = getModue(passChars);","        var URI = getModue(passChars + otherPassChars);","","        return {","            encodeURI: URI.encode,","            decodeURI: URI.decode,","            encodeURIComponent: URIComponent.encode,","            decodeURIComponent: URIComponent.decode","        }","    };","","    var src = function(gbk_us) {","        var gbk$$1 = gbk(gbk_us);","        gbk$$1.URI = URI(gbk$$1);","        return gbk$$1;","    };","","    // 多进制转换后的数字还原函数 构建时会替换占位符","    var Fn_Hex_decode = function decode() {","        var n = 0,","            str = arguments[0];","        for (var i = 0, w = str.length; i \u003c w; i++) {","            var code = str.charCodeAt(i);","            if (code \u003c 38 || code \u003e 126) return NaN;","            n += (code - 38) * Math.pow(89, w - i - 1);","        }","        return n;","    };","","    // 解压Unicode编码字符串函数 构建时会替换占位符","    var Fn_unzip = function unZip() {","        return arguments[0].replace(/\\x23(\\d+)\\x24/g, function(a, b) {","                return Array(+b + 4).join(\"#\");","            })","            .replace(/[\\x26-\\x7e]\\x25[\\x26-\\x7e]/g, function(a) {","                var b = a.substr(0, 1).charCodeAt(0),","                    e = a.substr(2).charCodeAt(0),","                    str = String.fromCharCode(b);","                while (b++ \u003c e) {","                    str += String.fromCharCode(b);","                }","                return str;","            })","            .replace(/\\x23/g, \"###\")","            .replace(/([\\x26-\\x7e]{2})\\x21([\\x26-\\x7e\\x23]+)(?:\\x20|$)/g, function(all, hd, dt) {","                return dt.replace(/./g, function(a) {","                    if (a != \"#\") {","                        return hd + a;","                    } else {","                        return a;","                    }","                });","            })","            .match(/.../g);","    };","","    function gbkArray(gbkArr) {","        var data = [];","        for (var i = 0x81, k = 0; i \u003c= 0xfe; i++) {","            if (data.length \u003e 0) {","                data.length += 0x40 + 1;","            }","            for (var j = 0x40; j \u003c= 0xfe; j++) {","                if (","                    (j == 0x7f) ||","                    ((0xa1 \u003c= i \u0026\u0026 i \u003c= 0xa7) \u0026\u0026 j \u003c= 0xa0) ||","                    ((0xaa \u003c= i \u0026\u0026 i \u003c= 0xaf) \u0026\u0026 j \u003e= 0xa1) ||","                    (0xf8 \u003c= i \u0026\u0026 j \u003e= 0xa1)","                ) {","                    data.push(undefined);","                    continue;","                }","                var hex = gbkArr[k++];","                var key = Fn_Hex_decode(hex);","                data.push(key ? key : undefined);","            }","        }","        return data;","    }","    var GBK$1 = function() {","        // 生成按GBk编码顺数排列的编码映射数组  构建时会替换 zipData 的占位符","        var gbk_us = gbkArray(Fn_unzip(\"(T!HJ%LUX]e%gilotuwy{} (U!)-%/137\u003eBDGHO%RTUW%\\\\_a%jl%rtw} (V!*+-0%27\u003eC%EHJ%MP%R\\\\`cdfn%ptvz{} (W!()*,/3%579;=%CFGM%QWX\\\\^cdg%ilnprtvy%} (X!\u0026')%.468CDHJLMOPSTWY%\\\\_b%dg%ilnprtuwxz%|~ (Y!'(*+-469%=?%GI%KO%RT%V[%_bdikmnptuy{}~ (Z!\u0026')+%-/%;\u003e@ACE%GKMNPR%TW[_%ikmo%rt%vy%{} ([!'(%+-%024%;=%BD%LO%QSTX%[]^`%ce%y{} (\\\\!()+%/1%7:%LN%SU%WY%cf%im%prt%xz%~ (]!\u0026'%*-%/1%68%EG%cgloqs%uwx|%~ (^!')%-/02356;\u003eFJKOPRSVWZ%]_`dfi%kmor%vyz (_!'+%-124%68;=@ACE%MOQRUVX%]_adegjqwx|~ (`!\u0026)*-%/689;%=?%ADFIKLNOVX^%cehilmoq%uwyz|%~ (a!'),%/124%=?AD%HJ%PRSU%[]e%ho%qu%~ (b!()*,%.024%79;%=?A%FH%KM%WY%`c%ei%loq%tvy%| (c!'*+-.1346%8:%\u003c\u003e%GKLOQSUZ%\\\\_cghjltwy{| (d!(,/1%4679=\u003e@D%JLMOQRTVWZ]`%ce%km%pr%tvy%} (e!+,-/0279%;\u003e?DQW[%]_bdhqu%wy (f!\u0026().47:;\u003eACEFHIKMP%SU^a%egikm%tx}~ (g!)*,.02%58\u003c\u003eBCGI%MPY[]`%bdeginpuv (h!(*-2%6=\u003eA%CF%KMPRT%WZ\\\\%`deg%ln%qswxz{} (i!\u0026+-%/1%469;\u003e@AD%HJ%MP%TV%Y[\\\\abdh%mrsvx~ (j!\u0026,%.0235%7:;\u003e@%FH%PRTVXZ\\\\_%cf%hjkn%puw%{~ (k!').04578;=?%CFI%NQRTW%^`acdg%ilmo%ru%wz|~ (l!\u0026(*%,.%9=%ACDHIK%OQS%U[%^`%ce%hk%ru%{~ (m!\u0026')%79%CE%KM%PR%^`%hjkmnqxz%~ (n!\u0026(*+./2%478\u003c%\u003eACG%WYZ\\\\%^`%cgmnp%txy{} (o!\u0026'%)+,.5%9;\u003cEFHJOQS%UWX[%]`%dj%mp%tw%} (p!\u0026'%)/2469%;=?%AC%KN%TVWZ[]`aefhk%mo%vxz%} (q!\u0026'(,-/024%69%;=?%AC%EG%IK%NPSTV%Z\\\\%`b%eg%tv%| (r!\u0026'(*+-%/1%57%\u003c\u003e%BE%UWZ\\\\^%`b%il%ps%ux%~ (s!\u0026)%:\u003c%?A%CE%OQ%SU%bd%ilnpqstvwy%~ (t!\u0026')+,.%246%9=\u003eACDF%ILNRVXY[\\\\ac%fiklprsvxy (u!\u0026(%,.013%?BDG%IK%MRVXY[%^abeg%jl%ostyz}~ (v!'(%,.013%9;%=@%CIJMOR%VXZ[]%_a%lnp%rtv~ (w!\u0026(%+-/%24%689\u003c=?A%CE%KNPR%VX%Z\\\\%`bcf%oq%tv%|~ (x!\u0026'(*+-%5:;=%@B%SU%[^%km%svxy{%~ (y!\u0026(),%1346%:\u003c\u003e@B%DF%HKMNPQSU%Y[%qs%~ (z!()%ACEFH%OQ%_bfnpqwx{}~ ({!\u0026)+-%023569=ADEG%IKMV^%`c%fhinq%swxz (|!\u0026'%)+%-/2%:\u003e@ADEG%KMO%U[\\\\^`acefi%lnpquwy|%~ (}!\u0026(+-%02%578:%\u003cHIKLQRW%Y[%]_%bdgil%ruw%} (~!'(%*,/%35%7:;\u003e?AI%MP%TVZ%\\\\^`be%hjlnoq%vx%} )\u0026!\u0026'%+-%356:\u003c\u003e?ABD%MO%TWX[%`b%fhj%mopr%vx{}~ )'!\u0026)%-/%69%@BCG%QSTVX%bdghj%mo%{}~ )(!\u0026'%9;%=?%WY%eg%mo%{} ))!'(+,2458=\u003e@%DGHLOQ%SUVZ[_f%mp%twxz%~ )*!()-%025%:\u003c%BE%IKLNOR%`dfhmp%rtwx{%} )+!(.137%:\u003e%BD%HJP%SU%^a%fjkm%pr%} ),!\u0026(%02568%:B%DFI%KMOQSVWY%[^%aehikmo%uxz%|~ )-!\u0026'%358=%@B%DGIKLORSVX%Z\\\\^a%cgjq%suwxz~ ).!\u0026(%+-%2467:%?AC%FI%MRSUVY^%`e%gijmnpqstwz{}~ )/!\u0026()+,.9%;=\u003eBCEIJLPQT%V^%`b%fh%loprv%|~ )0!'(*,-/%1457%:\u003e?GJKMNPWY%[^%acdg%jlnp%ruwz{}~ )1!')*.035%79:=%DG%IL%PR%TVWY[^a%ejqruwx{%~ )2!\u0026)%,.1%37%;=%@B%EHILO%QS%eg%nprtvwy%{}~ )3!\u0026'%*,%/1%47%=?%BDF%XZ[]%ac%jl%txy{%~ )4!\u0026'%+-%24%68%\u003c\u003eA%EHJ%Z\\\\%ik%su%z|~ )5!/058%:\u003c?B%EGIK%NQRT%X^`%bfklq%suvx%~ )6!'(+4578:;=\u003e@D%FH%KN%SW\\\\_%afijlmp%su%wy%{} )7!(*+-59;?GHJKNTUZ\\\\_b%ejm%pt%wyz|%~ )8!\u0026(%*-78:=%?ABD%ILMO%RUXY[b%eg%nqu%wy{%} )9!'(*%-014%79;%\u003eCEIK%MOQ%WY\\\\^cgijmnqsuw%{} ):!\u0026')%+02%46%\u003c\u003eAC%GJKM%PRTVX%[]bce%ilmpqt%y|~ );!()%+-%/14%9;%?ABDFHIOQ%WY[%]_%ce%lnp%rt%} )\u003c!()%.035%=@ADEG%JL%PR%UWX\\\\^%acfhj%lnpqs%y|~ )=!'(%*-%13%579;%SU%\\\\^%eg%km%xz%~ )\u003e!'(+%.2578;%?ABEFHIKM%ORSUWZ%\\\\_`b%eh%jlnpqs%~ )?!\u0026'(*%,/%146%8:\u003c?@BDEHJLNPS%Z\\\\]`%bdi%lorsu%wz%~ )@!\u0026'(*,-34;%\u003eABD%HJMNP%RTVY%[_%ac%egj%mor%uwy{| )A!'(%+-/024%:=\u003e@AHIK%NPRSUWY%]a%cehik%mo%qsuvx%{}~ )B!\u0026')%,/%35%=@%DF%JL%OQ%TV%oqu%|~ )C!\u0026(%-/34689;?%EJLMO%QTV%XZ\\\\^%ceglnpqt%wyz|} )D!\u0026)*,/0279:\u003c%@BG%IKLPQSVY[]%`beghjkmoq%tv%y{~ )E!'+%-0258:=\u003e@E%LNQ%Za%cgkmopr%tvwyz~ )F!()%/14%79@CEGHK%OQ%SU%[^%dg%imnrz~ )G!'),0%9DF%MOR%Z\\\\^a%hj%ln%pr%{}~ )H!\u0026*%-/2357%@BD%IKMO%RTUWXZ\\\\%`bce%nps%uw%y|~ )I!\u0026'(*%,.%2479;%FI%KM%TVWY%[]%`b%dfhik%{}~ )J!'(*+.01346%9;\u003c\u003e?A%EIJL%NPRTY%[]%befhil%uxy{}~ )K!\u0026()+,.%02%68%?ACEG%IK%PR%TW%bd%gi%rtv%~ )L!\u0026(%36%;=?%DFH%KMO%QS%Y\\\\%`bce%ln%twy%} )M!\u0026'(*%46%\u003c\u003e?A%CE%GI%QSV%Z\\\\%ce%lnq%~ )N!\u0026'%~ )O!\u0026'%178:%CE%HJM%OQ%TVWZ\\\\]_%jl%sz{}~ )P!\u0026'%136%9\u003eAEG%JMNP%RU%Y[%bd%koq%wy|} )Q!\u0026'%*,.018:\u003c%@B%IL%NP%RTV%XZ%\\\\^%dh%lnrw|%~ )R!'*,2%48:=\u003e@%CEFJ%LOR%VX%Z]_%aijl%nr%vxz|~ )S!\u0026(%*-.2589;\u003c?@C%FHJ%LNPVZ]^b%ehn%qt%vy{%} )T!\u0026'-%/1249;\u003c\u003eABGINTUWXZ[]%_bd%fh%kmqrt%y{}~ )U!()+,02%46;\u003c\u003e@EHLQ%TWY[]^`acdg%il%oqru%wy%} )V!\u0026')*-.02359%=?EHOPSTVWYZ\\\\%ad%fk%mp%su%xz}~ )W!\u0026),-/1%479:\u003c\u003e%@BDG%NP%SUY\\\\]_bcefhilp%rtvxz{} )X!\u0026'(*,%36%=@%CFHJKM%OQ%[]^`%nq%suxy{%~ )Y!\u0026)%/1%35689;\u003c\u003e@AC%FHKMPQTV%X[%^`%bd%fhjnpqs%u{ )Z!\u0026)%24%79%@B%DFGI%MO%QU%^`%bd%gkmoqstv%|~ )[!\u0026'%+.%024%=?%ACE%GI%KM%RU%WY[%]_ac%ik%mpqu%~ )\\\\!\u0026'(*%-/%35%?ABDEG%LNP%UW%]`%jlo%z}~ )]!\u0026'%DF%MP%VX%hj%ln%~ )^!\u0026()+%8:%EIL%ORT%VX\\\\%_a%cf%hj%lnrsuvy%~ )_!\u0026'%,246%8\u003c@AF%IKM%Y\\\\^%`b%eglpr%xz|%~ )`!'(%14%8:;=@D%NP%W[%^`%mo%rtvx%~ )a!\u0026'%+-/%359%=?%AD%GIKLN%SU%Y[%^`%ce%gj%nq%wy%{}~ )b!\u0026'%)+-%/1%9;%DF%JM%VX%[]_%df%oq%|~ )c!\u0026'%:\u003c%EGIK%MP%RXZ\\\\^%dg%il%oq%suvxz|~ )d!()*-/%25689;%=@%BGHJ%NQSUVX%ce%psv%xz )e!\u0026'%,1%35%8;=?%BDFG 'W!,-. \u0026(+\u0026.'\u0026-~\u0026'u'W!/1 ')\u003e.\u003cV')!@PBCFG 'W!@A4%;BC\u003c= \u0026'~\u0026(!Kk '/!J;\u003c '.!~| '/!\u003e= '.u'/!K. '0`'/!94 '1t'0T'/!?Bu`\\\\Q1t '0!)* '/!xy2IH ';!*( \u0026'}')!\\\\] '+{.;U\u0026'q.\u003e!\u0026' ')Z\u0026't',5':!GF '9!eiha`;:ML ')e'-!XVWY 'W?'-!67%?#3$ '6!-.%@ '5!rs%~ '6!\u0026'%, '5!^_%g## ']!67%?## '-!\u0026'%1## .;!RST .\u003e+.;!VW%~ .\u003c!\u0026'%U .\u003e)'W!mn%~ 'X!\u0026'%f#8$t%~ 'Y!\u0026'%p#5$ \u00260!=\u003e%MO%U#5$]%mo%u#4$ .9!89\u003c=BC@AD%G##\u003e?:;4#67#6$ \u00261!cd%hTi%~ \u00262!\u0026'%)#12$*%/K0%I#10$ \u0026.!()7 ')!=?O_ '+}',('-!\\\\]%_ '/!)37fz{ '0z'8!CD%ft%~ '9!\u0026'%)-%/VW|%~ ':!\u0026J '0P'W!\u003eIJ#8$ \u0026(!uU \u0026+7\u0026(T\u0026).\u0026(]\u0026)6\u0026(\\\\\u0026)F\u0026(a\u0026+9\u0026(`\u0026)h\u0026(g\u0026+;\u0026(f\u0026*-\u0026(n\u0026+=\u0026(m\u0026+!?ACE \u0026(!p^ \u0026,a-Qc\u0026)!_c -Qd\u0026,q#1$'Z!\u0026'%J#18$ 'W!MN%U '^`'a!@AN%PSv 'b!'*+. .93.\u003e!(*# ',@']G#'):#0$'Yv'X!no 'Y!wx 'W2'X!pq .9!LM%UW%Z\\\\%ik%n -R!*+%6 'W3#10$'7!LM%~ '8!\u0026'%\u003e#12$ )e!HIKN%SVWabei%lnp%uw%y{%~ )f!'+%-23679%;@BCEFHIM%PS%_abdf%ik%rt%~ )g!(*%79%=?@BDFGIJL%OQ%TV%XZ[]%bdfgkn%prsv%y{}~ )h!\u0026'(,-/3%9;%\u003e@B%EGIK%MO%RT%cehil%or%z}~ )i!\u0026'%)+,/13579:?%CE%HJ%\\\\^`eh%tvwy%} )j!'(%,.13%57%9;\u003c\u003e@%JLN%UY%hj%~ )k!\u0026')%1357;=%CF%IKN%TV%Y[%bdfhj%mqstv%z|} )l!'+1369:\u003c\u003e%ACDFGJM%PR%UZ%ad%fh%npr%tw%{}~ )m!\u0026()+%.0%2479\u003c?@BFJ%NQZ[^_c%ejopr%uw{}~ )n!'(*%,047%:=\u003e@%CEFHIMOQ%TVX%Z\\\\%_aeg%ilnrswyz|} )o!()+%-/346%=@%EGI%MOQ%TV%\\\\^%`b%iklnq%suw{|~ )p!\u0026()+-.013%\u003c\u003e%FHILN%WYZ\\\\ (iC*r5(pM)89(gy(h[(gk)p*)o\u003e*A;)s|*9E)ui)cO*s5*ux)R/({@(Z*)7s)B.(~d*4~)F{*42)@K)pg(_l)\u003eQ)a|*2'*Jb(\\\\0(u2)4?)\\\\@*9t)8])5n(eJ(f+)|s(^7)mH))\u003c)7\u003e*Yr*ua)6M*2O(o@*t|*0J)cV)oo)E[)op);L(XR*W~)7F)z6)?3)hN);2)66*8L*xa)Dd)cf)61)76(Wo)k9(cY(a_*.d*b,))v)G`)Jk*6R*.k)HS)vH*E'*oR([d*U/*:L*4b(bm*L\u003e(a\u0026)p!]`bdelnrsu%wy%} )q!\u0026'%-035%7:;=?@BCEFJLN%X[%^ac%egj%lnp%ty{}~ )r!\u0026)+%-/%69%@C *B**t=(Yf(qR*{F({T)6!th )BK*V+++A)b})DT)um)12(c!`\u0026 *^r*4P*Wv*mT(Z=)e4(t-)1k)`B*K0(tz*:])Cj)}\u003c)\u0026|*/8)l*)TJ*[[*`!0t +3')Q4*cF)}()-`)v**@.*A\u003c)Q!596 ))I)*v)nD*q\u003c)\u003eX),G).P*_0(s@*7;*a^*rQ*v?*_J*/W*X,)5](YH(e5(cm*_!9:\u003c *a,)F:)-N*6j*JF+,1)3Y(`E)nu)-P)?.)\\\\_)Z'({u);N(^!A| )EP(T_)yA*{Q)_5)r!DE%GKNPQT%_a%ch%jm%rvwz%~ )s!\u0026'%,/12469;%=?@BD%HJLN%Z\\\\%df%hk%or )mi)*e)gu*=C)\u003cZ)7R*mh)T7(ci(b+):n*mu)~O(Wj))c*8V*5A*6\\\\)Wn)Sx*~=)8f(ck(hL*JC(pj(TS))K)Ow*'H*bn)/H)=:)f/*KF)D5)5i*W{)rS*Zw*eB)-M*=?*@y*z\u003e(dx*E0)PD)1!mh )^Z*:;*8Q(Vg)SU*Bu)\u003cz*)0)Ks)C7*;^(dK)}j(Y0(^X)UG(}G*[b):1(e\u0026*;!AK )Eq)v7);C(|=(~@))6*TK)70)F'*V,):_)9r*G2*{`*T{*/a*nL(V;*q_*y+)@U)f))s!tvx}~ )t!\u0026')*,.%18%=?@C%EHJNPSU%WY]_`cdf%hjkrtv%y{}~ )u!\u0026')+-/04%8:%EK%RT%WY%_ (nv(|{)*'*p'([V*3}(d8)\u003eY)lB(i*(ZQ*Y,)6G*mQ)C[(ky)[T))*(f9)^m*^P)62)\u003cQ)9[)-_)[n*bz*7\\\\*_A(|v)AX).|)S7*r\u003e*Y(*JJ)\u003c\u003e)yh(pX)Lv)5,(fL(UE)z*)1i)[j*T\u003e)6B*`V*~U)y\\\\(e`)n?)7k(c()Rg*_p),X*~:*2q+3k(Xj(}?*Xd*1T)?G)_?(]j(^~*D_)\u0026Z({W)7'*d@)lq*ZZ)z?)2()~4(V[*/9)rl(TW*7f(`7(_m)M5(d^*[|*n^*sl)YY*rZ)J))u!`abdfgklnp%ruyz|~ )v!')+%28%;=%@BCE%GI%KO%RT%VY%[]%jl%np%tvxy{|~ )w!\u0026'%*,%.0%6 )tu(\\\\\u0026)se):o*N`(t*):B)(~){E)Ie(W[*8Y(j8(Tx)mR){])*!Qy *q\u003e(`5(f=)^e)9.*n~(oe)@n)Ig*d[(hY)W=*.I*IY)5O*/1)mY*;=)vD*si*_/)2o)kM*T1)Ov(`T*XP)O3*3G*\u003e{(n-(bn(Vb(Ta(_D*(G*d_*\u0026i(YL*[t*\u0026C){b);m)\u0026g(\\\\**51)nL*(i)W6*1o)D6(zh(|V)vN)\u003c[):r)9b)8\u003c*ns);3*_O)}h)nt)5o(tM(fJ)P2([z)5P))n)P?(Vw*X7*Ji)-i*`f)w!78%\u003c\u003e%GI%MO%]_%cgil%oqt%|~ )x!\u0026)*2457:%=?A%GJL%PSTW%Z\\\\%_a%c )/R*2s)7/(U\u0026(cd*b~)9p*4J)@/)R5(X()1n)W+*TB),v*Ef)-7)82(^\u0026*;v)G=(_s)8t*[=(ZB(~G)xH(|Z(`J)zZ)1\u003c*a2)pp).B)-{)ov*[a)^J)om)}])s8(_f*ar(qU(X0)Z3*_{)\u003eG)}/)e0)VG*1n(yJ)6x)++(nl*?3)}@))e),\\\\*`J*/U*y')9:)Y_)ut)_;(^D*uF(p5)l2(W~)l5)+-)1f(u-)Vc)Px)ue(eY*sr(_!\u003et )9A(eg*mF*Tg*Ys)cW)u{*G_*_~*Tq(e=)x!de%jl%wy%~ )y!\u0026'%*,%047:\u003c=?@BDF%HKLNOQ%VX%Z]`bdfi%oqrtvwy|} )z!\u0026'%)+.%24578:; (TG)q/(eK*m\u003c*xV+2S*o.({Q*S_(T!hb (^x*\u003em)47(ai)F\u003e(Xy)0D(_.)Ts(^()6Y)?9*rW*UQ*`O)m|*c*)rJ)Q2)dO)eX*T_(qf)r`*XL)DA*oA*3w)+\u003c)Wk(u_)|\\\\)s{*o\u003c)Pn)?O*/O(q7(]v*qn(|W(s((f,*[g)\u003ea*x_(my*mP)q\u003e*`y)9?(gq(t!@` (o~*\\\\N)Cs*ZH*8U(`[)1p(qF*F@)\u0026;+0\u003c(YM*x}*Sv(w@)0O(d:)6?*a.*c/*{T)0B*2B(]d*2i(|r*{J)U-(Uy)z!\u003c\u003e@AC%QS%UWY]_%df%oq%uw%~ ){!\u0026'%57%9;A%DHKMO%RT%VYZ_%adgh *X0(e.*0B)}c(WK(U\u003c*qO)T*)h1*C6))N)lg*21)L')t3*mE*-4(_T)_h(e**_e*:q*X))dt*{B)T0(o-*9z)?[*4.)5[*r((uu(W:*S|*.T)\u003e9*=U*uI(iZ*ye*4)(c9*Ta(e}*4\u003e)+5)Sf*X9*9s*d.(f-)Q{(_y*.Q(oB)`C)S,*(9(tq(W8)/1)2K*(Z(Tv(|_)E7*FD)\u0026C*ne*yU)mS)`\u0026*`Z(^{*/^*Sz(to(_W(X=(f*(tQ)\u003er*4(({,)69)7,*^z)*4)R\u0026)}:(WJ(Ya)CK){!ijmo%qt%xz%~ )|!\u0026'%+-%79%BDEG%JNOQT%Y[]%ehikm%ortvy%{} )}!\u0026'*%,.0135%7;=A )Uj)VM)x`*K6),T)l()6]*^o(Yx*eW)?I*5!Z| )+2*5{*Xt(a0*MY*XK(t3([\\\\(Vl*qk)cT*6K*Wx(|**S`*r:(uT*/[(g;(ld(kU*TI)\u003e4)JQ*mL)po)Xz)*a)kn)D+)E])|l*3z*Xv)2F)y\u003e)\u003e]*Xc(^T(`4*mU*/y*3x*.L(~C)Wy)DE*\u0026;)o}+\u0026I*6a*0|*),):}*oQ)z^(fN(h7)O^):`)4}+04*4w)m=(a3*uT*\u003ee)Fo*F\u0026*qP*s1*nF(Tp(ea*.s)Fl*Z-*2K)C2)+0*1H)}!CDFH%KMOQS%XZ\\\\^abgikmprsuw%~ )~!\u0026'(*+./13578:\u003c%?A%GIJL%NQS%VY%[^%`i%kmnp%rt%{}~ *\u0026\u0026(pL*2u)Gq))-)\u003e6(a`)0F+4-(X}*\\\\H(^8({b),P))1)Re)7[*Wz(^=*m\\\\(bf)SM*:M)eC(p,)Di*X-(tE*_-*=*(g@)~H(Wk)Sk(zt(vE+2X(eA*Ee*~r*UB*3~)\u003e@*x^(n6*sd(`H)k2(`j(|?)7l*L.(UC)7:)/\\\\)H{(^?({O(^l*N\u003c)~\\\\*{[*08)1o)^'*X/(]n)*n*`S)ix*N\u003e(ni)tz)-6+42*qI*^R+'T*TE)oj)Fu)Eh*Z8*X5(`W*^t)Yr)HN*n_*bs(n9)E(*K~*_X(gs*\u0026!'*%-/%246%:=\u003e@%BD%FI%KM%OQRT%XZ%]_a%hj%lopr%wy%~ *'!\u0026')%.124%@B%GK +\u0026)(zy)Us)R-(V9({j*~Q*d7)3v*b5*v{(f/)VX(|0(_p(j**0=*2\u0026)\u003ci)8^)@:)43)0f)`3)R!^P (tU)DR*8J(sT(l|*Uu)QK*bc(uJ*2M(eT)Ue(fy(j=*\u003c3*=2)Fk)y6(g7(X7(ee)pk*V;*qQ)Sa)V[*Xk*L\u003c+0[*X:(l-+1o)my)-l)eL)0A(hN(V\u003c)LG*J?)0+*^Z(go)_Z*Dm+06)U\u0026({F),U*.\u003c(j)(Y8)fG(f@(dP(ZI(ek(g'(U;)//)ib(su*\u003eu*4e*G])e\u003c*(z)XG*'!LM%UW%{~ *(!\u0026'%*.%8:%@CDFI%KPQSV%Y[%]_`d%hjk ),d*DB(h~)6g(V\u0026)SX)5S*9x(h)(c])fQ)Yi)l8(`,(b~*TA)KF)-n)/2)W8(o2)O4)gi)G-*_i*/T)8s)0|(hv)n5*Um)`\u003e)VF({])*j*;g)2s+1b)v}*G@*'0)oy(_c)1v)`u)A3)*;)0\u0026*Tr)^K)86*^s).H)0;*Eo(ms)Pz)0m)35(cX)1`)AV*X?)yu(WU)_k)RN*Sp*TV*.r*;y)@X(wu+'Z)UM)WA*UL)U7(WT)^F*\u003cs)52)1Q*tQ*X')xI(_n(nz(q+)Cx)lu)z\\\\)yg)~P*(!opr%tvy{~ *)!\u0026'%+/12458%\u003e@%EG%NPQS%`b%vxz%} **!\u0026'(*%,.%4 *3i*{:*`1)\\\\M*Sb+/q(v`*/!*J (ef)Df)HY*^{*'V*sc(e')/W)mb)Ry(d)(y2*.A)85(_S*55))9*@7)6C(^L(zs(WI)x\u003e(`\\\\)18)UJ({!{y *S!^m )@+).W*r;(u`*/(*.D(kP)EC(t_(XU({m(aa*;o*xj*X\u003e)l/*mq(Zw)z[(W2)EB*~H(y*)P5)pj(o=(|t)}N*qC)`w(^H*4-*97(uE*/E*;\u003c)HA)Ex)v4)uS)7M)8r)~;(Yv(a+(_B*;e)KQ*g=*ZC*X1*N;*o/)~h(W1**!56%km%tv%~ *+!\u0026'%= ([\u003c*8P(`k*{D)WZ)Xv)VJ),7(\\\\s(vP(|d)UB)Rf)m**?\u003c)GB(t|*So(c/*dE*rC*AH)I:)w+)`O*4z(V8*bP)UC*~N(v{(mQ):d*nJ)sy(Y.*5E)eM*NL*{O*/u*.x(a@)\u003eT*dI*^!im (eH){\\\\):L)9])ox)yp*J5*r,)5F(al*9I)G.)DU)9/)rR)|Z)TV*.m*N](vD)5.*Bo*9l)lI(ZO(V_)mI*TO(}O))F)}_)?F*eL(V^)Tz*M2*)~*o'(VY*U3*_l*u^)A;)xR*_b)_n)Ut*+!\u003e?%JL%RT%~ *,!\u0026'%F (}B(as*;[(^.*:|)rB)Af++l(V@)1J*(!nc *.i(V)*R|)A_*xh*uD(r[)\u003eg*o])-h)mm*uA)|!LK (_3)_1){^):I){\u003c*.:)gP*w\u0026(U2)^S(UJ*d\u0026(d_)\u003eL)@0*7!u~ (g9(}6)m\u003e*v2)7B)eE)ma(}J*~C*=-(}E(g+)sw(U+)S\\\\*37)7\u003c)9\u0026))0(^C*Z!+l *o0(Yz(eB)1g)_.(a()8a+0:(w:(ZV)qw(d-*.|)\u003c2)\u003e\u0026)6L)9P(ZD)cS*NC(_\u0026*S}*.w(o**=/*mZ(^g(ex)\u0026N*,!GH%~ *-!\u0026'%-/%35%9;%P (YS)|P)UV*bg*~Y(iy(gA(cp(gZ),=):H)JF(_b)36(_}(q[(b@(o1)tB)qK)+M)3E*)7)5w)6Z(V6)^p*29)7a)_f*uK(oZ*:I)E{)Hv)vX*xw)yI(sr(g^(eL)W~(]p(`U({Y*Tb*43(i\u003c(p0)0L(o4(f1){@)0)(zd)9_)6c(e@)6\u0026({~)E;(h?){e*:T*dK)+)*Ki(t^(p8)7x*Z6*4s(o:)~2(Y2).v({t)OP(c0)}d)e.)Fy)t4)qv)@@(_((U|)pm(~k){k*?\u0026(tt+'Y([W*-!QR%tv%~ *.!\u0026'%46%8HNUVp~ */!-:KQ_xz|%~ *0!\u0026'%)+.%7:; *{])2N)Xt(oG)@O)8W(n,)7V)6,)+i*qc(of)73(j'*Fc*5u*_4(i_*\u003cm)DJ*XV*@5(x,)FB)7P*\u0026P*q`(^\u003c)\\\\)*U;):\\\\*NB)4G*/G)_D)Y})hf)Jc)eh)+`*bT)CU)Uf)8o(at)d'*27(XN(vY*d\u003e)_[)V@(b:(U=*t;*on*A})vM**-(]F(ou)\u003co*3h*(+)T?)Hr)J-(_*(dN)H))dF+1l*\u0026S)ed)y3)ZR)hg)D3*eG++X)wf*\u003cE*;i(el)FJ(U*(d?(ar)ts(d\u003c(`C([_(Xm(YY*0!\u003eAC%FHK%OS%UWX[]%`b%eghj%qsuw%{}~ *1!\u0026'(*+/12457%=@B%FIJMOQ%SU%XZ\\\\^%befh%mqr )n-)|8*(B)SS*sS(a\\\\)j2(h;(Yr*31*\u003cn*_o*oq)+_)/N)VB))`)\u003eV*5c*nX)/})_\u003e*.]*(^(_\u003c)G[*(a*96(Tj*^p*eJ)An(VB*Ti)\u003cV*3'(\\\\X)m;)bE(|C*_N)[L(Us)\u003c/*od)+l)?;(`1*KG)_J(ad)ez)i;)D|)vz*tZ(Tz*bA+,9)Vn(_N*XA(ez)78)gl*=T*t:+3p*mv(Wq*1)(_?)^P*rk(~Y*xf(eC(Vx)Y4)hj)K*)uG*{d)lV(`2)no)U=)F\u0026(^9+4,*3((gD)}P)|,*1!svwy%|~ *2!(*%03%58=%@DEGIPQS%UWYZa%fhjoprtvwz{}~ *3!\u0026+%.02%468%EH%MO%Z *r|(og)7L*r=)JK(vx):a*\u00265)ZN*rA*9m(cq*xe)+\u0026)^d)9k(cs*DC++5+11)uh*tv*Z=*XB+0v)[D)xU)-9*r\u003c)5J*~\u003e(er*n7(Y,)?g(}!jf */V*DE)R6)-o)gA)Y|*/@)\u00269)8,(zz)Y~(d+(U^)9X)lb)6d*^X(Wa(Ve)ST*.P*Sw*\u003e'*HJ*0?*`s*n})~d*~k*K}*\u003eG)Tp*~P*.v(uU+1Y)gU)t6*Dv*~!6L (kb(et(pU(U]+1D(ce*_Y*54)ry*{g*F0)Yy*@k)C:)30)Zj*3![^_begj%oqrtv{ *4!'*%,0479:\u003c=?IK%OS%Y\\\\cdfgjry{} *5!\u0026)%,.%02367@BDF%HJ%VXY[^%`bd%hj *U4*9Y*;@)q2)Qs).d*\u003cy)f\u003e*:s*nt)Q;)si*my(c~*:p(^^)*,*V\u003e*X8(U5)ge)E\u0026)G_*dJ*tM)a4)SO)qI(xT*oB)Q/*0v)@p(|.(v-(x\\\\*q!7F (W'*=o*?J)Mp)px*o1)f.)H'(zo)qo*dn*uL*)3*`/*U'),b*'|)yP*N?)Sz*F^({})*1)HJ)q`*/6(^a(]r(b1(wD*/F*uM*:E):.)rk*Bv)yJ)X+)+/(uf*@i)^H)Qq)7))pX)\u003eJ)1/*qL)@W*H/+/s*nG(ej(g(*U7);~*5!kl%prtx%z} *6!()*-%13%68:\u003c%\u003eADEG%JSU%Y[]%`bd%iklp%tvwy{}~ *7!\u0026'%+-%25%8=\u003e@%BDF%L )\u003c\u0026*C^)L\u003e*6n)vk);o+'l)6|)Ci*\u003cg(s'+1v)SY)Z_(|\u003c*rB*To)c})E\\\\)71)d\u0026(V=(v:)Q-(rk)BE)*D(bG)2|)Cf)q.)rM)d,)ze)7i(h\u003c(fT*mS*b)(w7*.M)Qv(U0(uC*2F(tn(cf)l4*s[(m_)81*5\u003c)0U*qH)Vy(ff*{V(^Q(yR*5((u{*tW(ZZ)T:(}A)7I(XB(cN*6M*`\u003e)YR*A*)72)*c)vA)\u003cb)93)/'(w3*dS+/o(}D)8`*2x({4(ig*o!KN )V()1()El)eJ(_P({8*7!MN%[]%_abdg%kn%svx| *8!'(%+./135%:=@D%GINRZ\\\\]_%cefhjl%np%wy{%~ *9!'(%.0 )7Q)T3)cy)60*ma*.W*5\u003e)UO(^h),A(uA(ak)/D(u@)B-*DD)mC)8;)4[*)F*T^(h8)O9+/u)Pm*B{(fY([M)SR(ic*Y[)cJ))])/G)i\u003e)77)9J)cj)-|)X4)U:)=T)[\u003e)pq)vS)q\u003c)lQ(`\u003e(e8(U@)+4)?c*2`*4Z)6^(g1(`B)_0*Jk*Yx)T6(f|*4^(q**Ky*XT*r`*cz(XK)SI(jW)p_)te)6k)_{)[t)-Q*@D)H[)uX*\u0026Y*6z)CI+0F)8x)v3(oR)tG*t})6!\u003cn (aI)i=)Q7*9!12%48\u003c%?BCGHJL%NPSWZ%]abegijny|} *:!()*-.01347\u003eDGHKPU%XZ%\\\\^`acdfhj%nxy{~ *;!'(+-.2%;\u003e?CEGLPR (i]*5i)mV)pG(cH)n)(\\\\y(}F*S)*\u0026)([\u0026)ce*~a*y_)ZA)k8)x9)\u003c4)s3)7f*xq*X+(gl*35(U?(oM*:g*=p)*b(_`)kL*T((}T(oD)TQ*xg(wa)ti+'\\\\*_|*(E(`p)5m*nT(VZ*\u003cB*\u003ek*=L*?c(p^)Cr(n?)A^)Ub*U\u003c)Bt)]E)C])OL)FI)56(v/(TI(_7)ZE)E^)S=(^B)HL(tm)Oy)lc)\u0026a*5;+3\u003c)?y)w!rk *~[*Xw(~.(UK(W\u003c(f3(tw)tA(lV)Qt*_U),@)S+)T8*Sh)9H*;!STVWYZ]_%chj%nrw *\u003c!,-%256:%@CDF%IK%MP%SUVY[]%ch%kqwz{~ *=!\u0026')+,.013%68:\u003c%\u003eAE%GI%KN%P )0I)U9)d:)6)*m!Ax (cR*_R)~9(Vs*U1(Uk+1r*m!df (`g)[B*aB)UA*U?(qB)'F)O!2[ )E6(f_*6\u0026*0t(rq*A6),w)6e)Ld*o:)\u003em)0])G?)s5(UA(Y1))/*v*)\u003cY*1g)\u0026@(YX){S(_z*:r(TZ)/a){I*mY(Y\u003e(VF)y^)i\u003c(bL*:')=\u0026)y5(|;)S/*u=*^e)R)(Zn(d5)WO)\u003c{)Ad)R7)1E*xW*T[)*u)iD){=)yC(T^*b7)hd)RI(mo*cx)Ss*Y2(cI*Ea)C0*\\\\K(}M*~;)Wj*=!QRV%Z]%_a%cehj%msu%z|%~ *\u003e!()%-3%:\u003c%AC%EH%OQ%Z\\\\%`bg%jln%rtx%z|~ *?!(*,- (e3(wQ+3w*YJ(dq(nD*y.)D(*do)Sw(^4)mn)7])dq(`R(a^*/{)^o)o*(d*+0A)K-)uJ*s]*K^*13)`_)b:(^U)E_)k:(sc)=l(mL*Sf*{K)63*.o)1y)_o(sk(V!UN ).X*vy(W6*Sa(_v(uW*.E)5p(Va)@.)5**;M*?z*;x*Gv)ad)YN({p*.l(^c):()E`*3f*;N*IL(]7({1(uO*_B(U`)Rd(^1*LQ*^Y*q}*AI)if*nj*q?)VI*:S),n)\u003c?)Tg*\u003e2*6@++w(r6*X[(TO(dw*?!./%24%7;\u003e@%GIKLN%QS%_abdf%hlmoqstv%y|} *@!\u0026'*,-/%469:\u003c?%CE%GI%SUVX%Z (WY)\u003e^)G+(js(Tm):s*~d)6.(y+)ig*99)VL)Ho(\\\\e*\u003cJ)t7)C~(`S)SG*.K(\\\\9(i^)a.)}o)AB)h+*:Y)D.(}v(`:)aM*JI*q9*rK)\u003cr*Xa*7,(i})R\\\\)5c*/o(rj(W_(i?*XO)A\u003c(TP(|x*Kx)G|)8_)z,)_i*9T(bb*w/(|o(h:*b;*.g(u/*XJ*Eb*8!,- *Xf);J(|b)2x)V,)wh*S{)tl)l0(g\u0026(Ws*\\\\G)W;(w;*._)x/)S6({X(x8)kp*4B)2u)Wa(so)k!u{ )d7(cV*/4*@![\\\\%ce%hjl%npqs%vxz%~ *A!\u0026'%),%5=%AC%FJ%TVWY%\\\\^%bd%fh%prt%w{|~ *B!\u0026' )qA)pt(a**4`(n_))P(tW)eZ)?_)Xp*T;(}=*De(cP)t()7h)@?(VT*yf*Dt({U*T*(eO)sp(Xa(}S*~@(v?),L)wd(sj(T\\\\)F2(Ux)7W*P[*`U(b')@x(j|(lZ*`:(Vi(Xo*eE*{E)Qo))J)/u({[*N@*T9)\u003e1)5g*{k({?(|])9@(i'(e4)nq(^I*A+)E.)H4)PC)6U*^}(e1*82)Vt)m3(US*XN({')ao*BU)B!(p *0Z*FB+1k+2e(}c)Cm*`()FD)DD)5))|C(r])+L)\u003ek)Zp*B!(),.%46%@C%IK%MOQ%SW%\\\\^`%fh%np%twxz|%~ *C!\u0026'(*%02%57%E )0.(`Q*2C);Z*JN)l\u0026))M)FF)7^*t`(e))c[*Te)R;)rH)z-(f2)s:*xZ*8\u003c*TX)u1)CR)_C)?Q)\u003cB(k})/O)y9(eU(Tc)P4*3c(|X(k*(mp(W!uw *{G));)Dc*2n)/4*xb*`9({B*Sy*TY):{*8x)=2(kD*:=*d9(Y`*)w*`W*(O(\\\\q(r))YG({v*T-*3`*dL*?M)~R*Dq*s!(, */\u0026+\u0026D)uj(~-)zv*`z*sD)x0(zi)8p)|x*@))H.(hX*/j)hq*)y*n[)5\\\\(q}(Vj({:(uF(r,*C!FGI%KM%QS%]_%bd%suw%~ *D!\u0026'%+-%/1%@FGI%MO%QS%UW%^ )g')8/*[@*Z]*4R*:B)6o(eM)TE*d2(tP)/3)Rw(o0);P*X*)nv)Z((o\u003e)MD)n;)[S*U8*Tl(oI)QO*Jp)v6)9Z(eV)_/)Rk(r0);0(q3)Ha*6m(hb*)-(ZH*\\\\V)Vo*YF)_m)9G)V\u003e)Yl*/'*=g)Fv*`;)V{*rl*Se(t})d\u003e*C1*6P)m`*PR)H0(`n*Zp*nk):/*xx*[9(iu(X5)C=(l})1U)V8(`](}N(tO)WE(rC)l-)kr)0E*84*5q)7{)DF*_s)qz*ZA*X4*mt))^(d;(f0)_E*D!acdf%lw%} *E!)*%-/1%69%=@AFHIMNR%TV%Z\\\\%^`cghmnp%ruwx{%~ *F!'(%*,%.17%9\u003c%?ACF%HMNP%SVX )RG),4([3(VA)+C)8K*8g*`R)G**dB)sA(ei*n6)-H)|R)GP)8V)}f*.y)n\u0026([N)6X(tZ*`G(_k)y;){G(n:)-v*`L)U~(}e(n[(em(]y)X\u003e(mw)9`*xs*6Q*FW*LV*`8(e{(}t*79)7@)5t*5\\\\+0,*r6*~!8F )IU(ur)7=(i7)8'(gr*Et)U8(vw)k\u003c*Jz)O|(t\u003c*UW),l)Xo)gc*x](T~)_y({C)us)8N)AJ)p/)1K({R(wd(TM*6')Rq)gE(V5)Dn*09)-d)@C)CY).c(uQ(vu*F![]_abfh%jl%oqrtuwxz%|~ *G!\u0026)%/3468%;=%?AC%HJKO%VXZ%\\\\^`%ch%jmoprsuw%{}~ *H!\u0026(%.0%4 )(n).9(d'*vx*_n)Fx(n0(i()1_(U')[3*/5*:5*=q(vH(W!Ze (}C*.F)Ch*@r(fw)lL*4G(i{+'g(X/)Ww*Tw(|g)3\u003e(cz)nj)Ws*D~)?)*qJ*.S(f?)zR*)a*q=(k(*1P)kD)8.*FY)VD){c)5-)?C(cv):@)S1))3(f`*m[(U9)Rh*TP(}P)@)*9c)H((f!B8 )Q+)Ox(V()8S(cW*8\u003e(WH(Y7(oA)5\u0026*tB)AT)d.(bg(ab)0x*TS)@])ai)Du*MR)u.)t2)A`(l)(f\u003c*n{)d?*H!5679:\u003e@%BDF%IKLNOQ%UW%Y\\\\%`d%jl%oq%tv%y{%} *I!\u0026'%/1%46%9;%@B%IKN%QS%WZ )yx)0H))T)0b*6o(t;)1\\\\)aT)_q)YB)RW)dE)MH*K2))u(UM(xu(j\u003c*n=)Tl*)R*s6)5+*.`)ru*Dr(c2*tb*_')Aw)\u00264(Y))eY(TQ(d\\\\(t5(ep)98*o)(]m(Vm++P*.\u003e(gc*W}*J2*8W*qA)V1),c(y5)A.*r_)gj)fA(du*6L*{Z*10({a*r!mF *.Y)q8(dX*ow*{n)~l*Lp)XI(UN*1c)x6*TJ)1s(gx(V?*xY))?)L~(\\\\M(en*Ul*\u003e1)u9*tH(`d(h@(m8*nZ)V+({l)Vi)AC*I![\\\\%hj%oqrt%vx%z}~ *J!\u0026'%),%13468%\u003eDEHKMOQ%TV%Z^adeghjl%oq%su%y{%~ *K!\u0026(*%/ (|m(zm)FT*3s(iq)|~)\u003eC)I|(V/)OY*G7*uv(c^)80);@*b0)?\u003e*4E*Tt(^e)H1(d.*I0)4=)Sr)TP*U-(}V*BP*9v*nf)O5*_,)?R)/-).N(Yj*I|)@h*67)f\u003c)1z(^@(`+(on)-F*b(*J**df)*g)D4)/Y(vG(]i(_i*4|(bp)S'*sa)aZ(WL(Yw*1-)C{(je*nb)y8*Jt*.}(rw)5(*tD*DN(k_*x[)-t*Su*?u*d+(e6)@6)*~)lY)0=**l(xA*/!+. *^S(jG({Z)1,)?m)g\u003e*K!13%57%;=%@B%EHILMO%RT%VX[\\\\_%cefkln%twz%| *L!\u0026')+%-/%57%;=@%DH%LN%PR%UX%[]%_ac *`A)oU)qi*.t*u_*BA(zv){:*t.*Iw(b3)a_).5)@5*TF(|Y*~9))))PB)Rb*S!jl *`B*_V(dA)7\u0026+/!v} (fD(Tq*:+)cw*E7)\u0026i*J7)VR*sb(g|(V.*Ss)`2(gh*qX)_a)WC)pi(Tk)tI*FT(~U),3*Nz*x|*q])^i)Sm(tj)9a)q|*J+)ZS*9:(qa)bL(dB)tO*s^(hS)-J)`Y({k*T~*~V)P\u003c(tT+0\u0026)y_)DM)6/(XQ)mE*0r)T`*r))R.(W+)mv(^G)Fj)Z}*a_*6B(uc)i~*L!de%lnoq%~ *M!\u0026'%03%8:%MO%QSUWXZ%t );M(},*aD){W*U.(vN(gW*7y*\u003c+*MT*26)IX(l\u003c*2l)cU*eI(_)(UL*xU)9N(T`(eS)C1*5v(tB)VU(TF(sx(cJ):5*nK(Y\u0026(WE*JA*xp(t]*a6)ys(V~*4t)m5)S0({S(v\\\\)-A)I-*Du(ZJ)):(UF)sq(Vy*9A)6T)@\\\\*ap(}~(VS)-]*7?*`p*3a)mO(V:*KY)26)P~).Q(U6)pc)Y:*TG*Sk*T!n5 ),?*22*1[*.h*;J*\u003c'(mu)Pp*w,*r*(vo(e|*nP)W5({|*{C(}\u003e),R*s-*M!uv%~ *N!\u0026'%:=GM%OQ%SUWY%\\\\^a%df%hj%ln%y{%~ *O!\u0026')%\u003e (d\u0026*:_)LN(x6+0g)+**/i*\u003cu*\u003e!./ *;|*G0*__*Xb)pa)-U*xv)uH)@i(h1)7O(XE*7\u003c)ml)+N*sj*ZX*F;(g:)TH)V/)R?)0X(b/)k~)*l(WS)0y).r(}))l.*b4*ms)d~)Sg)X)*cv)CG(e!(P (X3*eD*TU(d~)*k*_S)W.(U{)p[)JU*DR)2A*8\u0026(X;(Yg*`v++0)20)W!g^ *r{(Uu(wL*t,(TT(~+)y1({\u003e*TQ*1L)gC(pi*9R*bG(e^*a\u0026(j[)\u0026=).,)2/)OD)e]*46*PQ*O!?@%^`%hj%~ *P!\u0026'%@B%H )Up(|1*KZ*xd*Uv*~7+0*)WT(^p(]h(p-*J_(dU):S*_\u0026(n)(f\\\\(nB)fR)Y(*/Y*_m*:?)2f)/Z*rX)C.*.@*Y!1j *mX(~_*(T)CF)1\u0026*qT*2N(U~*bm(bh*r^(]f*_a*As*d1)AE*w.(ze(c,)tm)D')Fp(gt)^Y({g*^g(^Y(nd(g\\\\)=f)Ar*X!^C *5:*\u003ev*aL*)6(_r*CH)E/)@2)\\\\.*E?*[v(lX*`X)ot)^Q)b\\\\*W|)7S(`3)TR*X\u003c)/@(rv)3\\\\)C\u003c*X`)5j(jS)Wm)Ck*^Q*P!IJ%PS%Z\\\\%~ *Q!\u0026'%R *n;*qG)qh)F8)Jw(g6(U:)_:*T,);^)?-({\u003c){J(Zj(|F)sI)QA*PA*(H)Sl)ph)?K*_()''(}Z*D,)F;(co)54)|F)XL*/\u003e)L\u003c)|M)-T)Zr),])9D)VK)D;(TN))X*X\u0026(Vk*4D)o\u0026*s9)7E)@v)6A)Sj*Xu)a7*0Q(]k*3d(eI*aM)6[(hD*F2*_**2;*nq*@o*_j)UU)h.)?A)q_)kZ)t\\\\*7t*Ww*m;(Y/)Dz)m]*T.*tK)8@*oH*r+*?i)84)r()-e)e\\\\(Uv)/F)\u003eo)7Y)Ou)\u003e:*Q!ST%uw%~ *R!\u0026'%;=%[ ))o)mk*bW*S~*9d)E))\u003e*(f5*FZ)ss*4\u0026*5-)RH(U8*.a*3))q4)I5)PO)6*(Zl(Xf(n|)7q)Ot*Ye(eG)@1*.R).b)8+)9o*7!lm *0V))d)\u0026,(`P)Aj)ya)z9*X()^t)mx)Yv)Si){X(Ts)p^).k*mR*JU*.b)yE*4C*eH(W!-R *8?(fl))\u0026)U.*T0*(U*^^*3u))b(g=)pJ({P)A,*~n)hA)F]*Ev)Co)f=*T!\\\\? *`H)|f)_])a\u003e)7.)s7(kx(U(*\u003ea)E}(aj*E[*X.*nR)}e*R!\\\\]%{}~ *S!\u0026'(*%\\\\inx *T!+4Nm *U)(X1)T=)x.*~E)6V)cH)7g(TY)tK*^V)\u003c]*XZ*\u0026()GC)*s*KJ(uS)\u003cK(sm)d{)I6*o\u0026*`5*XX(oC*/A*Tj(_9)8Z)7C(cb)G\u0026)i**:o*cy(i=)r')^W)UF(^E(gS*XD(vs)Yc)Vg(zl**)(Vh*(-)Yk(z`*7c)WW(zg+\u0026t)HV*Zx({N*/=)/m*.O*b?*Xp(tu):,)yW*YZ(ca)?q)x'*T)*r1*.^*mn*-u(k{*d])C\u003e*0R(|h*aT)@q)).(X2)Ej([1(X\u003e(o3)+=#2$*U!CD%KM%PSUVX%_a%df%kn%tw%} *V!\u0026'%)-%3568%:=?%EG%IK%_ (Uz(TR(]e(TV),\u003c(cT(T[(V,(Td+'J(z|(lW(Tn)y2(U,(b}(U4(tS)cY(c})Qp(mt*4h*{l)Q3)re+2\\\\(T|(V3+2U(U!IV (V'*9O(zk(ie(kV(VX(d!CSY[d *uP*X](c)(eR(c!5=M *X\\\\(c!ur (_!u{ (`!(GMYZfx{v *?`(a!\u003eCBQT (^N*0\u003c(V!OW]V|u (W\u0026(Vr(W!V.] (XF(W!0`bDf (X!@I )\u003e3(X!\u003c? *V!`a%~ *W!\u0026'%f (X!A9 (W!mx (X!XVskeq`] (Y3(X^(Y5(Xv(Y!oqsNcleZh (Z!(Y| (Y|(Z!\\\\?^].L\u003cUX ([U(Zs([,(Z!x~ ([!CR|~ (\\\\!'8T (]+(\\\\!kjdl (]!,0 (Vq)RD(X!:G (YW+43)RM*'}(^:))E+1g*{m(^M(t:(b!au *O((bx(_^(t?(]z(V4(]{(VG*JL*K)(VI*5?*KW)xQ(zD*I:*1G(^!w} (_!0/ *W!gh%uy *X!QRW_eh%jlnoqrx%~ *Y!\u0026')*-%03%79:\u003c%EG%IK%WY]^`bdg%iln%qtwy%{ (_:(^!bnq *S!]cdgqrt *T!\u0026'/326%8:\u003c=@CDHLMRTWZ]`cdfhkpsuvx%z} *U\u0026*T|*U!(*%,02569:=\u003e@A (cx(d0*q!lqp *r'*qy*r!328?JU]bhj~ *s!*4M *a!vz|x *b!2':9\u003c@ *Y|*Z!\u0026'*.%03%57;\u003c\u003e%@BDJL%RT%VY[\\\\^%ac%jnor%vy{~ *[!'()+%-01348:;A%EH%MO%Z\\\\]_`cf *b!\u003e6UKDVJMYlhb]aqu *c!+1OKP^\\\\fps (`'(th(a!cmn (b\u0026(hQ(b!8\u003eX (e\u003c)be)s[),1(_!ho +'G(dl),\u003e)lW))7(o/(p!3+ (rV(s!;DP (n!ehfoujk (o?(n!w~ (o!LhNi_^KPYV (p!7. (oo(p!\u003cY1\u003e (ov(p!*_bdc\\\\B~y (q)(p!ng *[!hjl%prsuw%y{}~ *\\\\!\u0026'%*-%/1%79;%FIJLMO%UW%ik%~ *]!\u0026' (q!\u003c\u003e. (pw(q!1OJuQ (r!=DYarX *{}+2^)4t*9!@DFVQoKUX^`r *:!\u0026, *9w*:!68Q *9!_~u *:!9:/ *9!p{hqf *:!2\u003c *9k*:!OweR}uJb@FziA *;!\u0026/ *:t*;!)* *:!NC *;!1fpq *:v*\u003cN*;!QIF *\u003cW*;!sDd\\\\XtU,uBOH{z *]!()%~ *^!\u0026'%. *;!}0~ *\u003c!(\u0026)*l4op\\\\fOXA8re9t7TZdvx} *=!dH; (q8*=!{n@`9 *\u003e!\u0026B *=!ti7Brf[\\\\M( *\u003c|*\u003e0*=!SD *\u003e!f[dc} *?!89+:) *\u003e!FPs *?!'=? *\u003e!;w *?!r~ *@!(\u003e *?n*@+*?!{pk *@8*?!RjeH *@!=;d )kc*A7*@H*A8*@w*A9*^!/0%OTjv| *_!.1%35%8;=%@C%FHIK%MPQTWZ%^`cghkqrtx} *`!')*,%.2%467?@DFKMP *A!U: *@!WT *A!XGgc]y )s0*A!Bqz *B!JN-5 *Ax*B!TB+_]Vyg *C!)LtRvc *D0),!;E (t!bg *2m(t{(u'(t~(bw(}!'*19 )5h)6!-b~ )7!4DAX )83)7`)8!J\\\\T )9e):U)9!)2Fl )8~)9!dB )8z)9!ft ):!QW?^ )9|):!=- );X)9!~v );!KG ):!jz );\u0026):k);!,'d )\u003c1);s)\u003cC*`!QT[%]_%dh%loqruwx{}~ *a!'(%+-3%589;%@CEFH%KN%RU%[]`c%fhik%oqsuwy{}~ *b!\u0026*+-%/138=BCEF )\u003c!'deFgm} )=!+86]y )\u003e)),H).])ko),N(cn(e!NZFEXosc (f!OV%XZG (e~(f![]'6 (g!-? (f!{uh (g!EF/ (f!zj (g!H{Xm_}RQ~ (h\u0026(fv(gN(h'(g!fjw (h!+,. (g!TUO (h/(gz(h!0m9rOfEtuacy| (i`(j!/U (i!Bf:N8I5 *b!HILNOQ%SXZ%\\\\^%`d%fi%koprtv%y{%} *c!\u0026'%),%.02%EG%JL%NQ%[]_%eg%oq (i!0On%p,)U (j!+r (i|(j!QY( (iz(j?(iw(j!v1 (it(k\u0026(j!]^49 (k!1\u003e (ji(kf(jq(k!23 (jt(k-(j!}d (k!6,9: (j!lm (k!/\u003c+ *^~(k!eOSHkjEGnt (l!F'E (ks(l!;PGJ:BtR_Yijs (m!(Dilrv (n!1'5;@FEX ))!Wa\\\\Yy )*!*+ *c!rtu~ *d!'(%*,-/034:%\u003c?AGN%PT%XZ\\\\^bcg%mp%ux%} *e!\u0026'+%.1%46%ACFKM%VX%` )*!\u00263CJMP (~!8\u00269\u003cB4DE=FHaNiXW]Omcp~ )\u00267(~w)\u0026!8UVzy )'()\u0026!wqYn )'!R8.7fUiWeEDcn| )(!:\u003e *U~)(!Xf )-!W[fkmpy} ).!'38@G *J@)-E)d!ruy|} )e!/-:9\u003eT[U^`cm_of *e!ab%~ *f!\u0026'%g )eg)f!*\u00264 )ev)f!10(5L8?KDc`js )g!\u0026)8 *8;(tK*yn(t!J( *{!8\u003c%AILRUY\\\\_befh%j )*o)+')*z)+!,;6OKTI *XS)+!hgq~ ),'*73).!OTaZ )/5).y)/6).!lo )/!078 ).!ux )/!*KgXMA?[]\u003cqS )0!QRTS )/t*f!hi%~ *g!\u0026'%\u003c\u003e%VX%p )0!CVos )1-)0!v\\\\ket )1!l;1]XFZ4 )2!GM\u003cJ )1t)2!'5Rq )3!Czbu )4!,Ij ).h*sP*q!8:@BDEKMRSUWY%\\\\^ad%fhi (Tr)c])51)R!\u003c[cQ )S!Q3\u003eB: )R!op{} )S!4W~ )T))S[)T!LMF, )S`)T!5+O@C )S_)T!(DS *g!qr%vx%~ *h!\u0026'%79%y )U5)T!|a )U!?D )T!\\\\Ync )U!'I*1 )To)U!KNP/ )V4)Uk)V!AC )UZ)V!67 )U!X\\\\x_ )Wd)V!jh )W!(X )Vb)W!*[0' )V|)W`)VN)WV)VQ)Wu)X!_?\\\\ )YJ)X!PwDE )W!|o )X5)Y!wI0x )Zl)Y!z=?USOoLg'Z7 )[!H,- )Z!cT8nu )[!1Z )Z!iHh )[!osr^Xb` )\\\\^*h!z{%~ *i!\u0026'%TV%~ *j!\u0026') )\\\\!V4FCOn{km| )]!NWOmi )^!*9 ({!7;LJ\\\\o )l,*~h);:(|!BL *L\\\\(|N*[\u003c*Qv*_!Gdfv *`\u0026*_!uzw *`+*_y*`!=\u003cC^IENYmneg| *a!01/G7A: )BP*a!S\\\\agbj )-!4;:\u003c (}@(gV(}!U^ ({((}!hk *1K),!gfj *9;),y+'S(}s(u!NPZvwp *j!*+%LN%~ *k!\u0026'%.0%2 (ud(v\u003e(u!xkq (v!F\u0026 (u|(v!K2yzQ|WLm (w'(v}(w!MO,\u003e.[ (x)(w!epW} (x7*4p(x!l]9\u003c (y!'T (xt(y!;= (xz(y!ILZ?OAEr (z!'\u0026BGP (|!sz (z!ju ({*(z!acr *~!?ABDIGJKORTZ\\\\]`be%gijlmoq *.!9;=?BC *k!34%:\u003c%~ *l!\u0026'%: *.!GJXZ%\\\\cefjnquz{ */!),/023N7;\u003c?B%DHILMPRSXZ]\\\\`b%hk%np%tv )*i)l|)(|)l;*at)g!HKh\\\\Y )h0)g|)h2)g!qmz )h!*)F: *x\\\\)h!kJH? )gt)h!Sp )i!2c.-0864 *l!;\u003c%IK%vx%~ *m!\u0026'%7DIKz *n!)-.4@Uvz )h!|{ )i!Id_]a )j\u0026)iu)j!-K=/06:MWX?V )k()ji*v!|}~ )D!18C-N )E1)D!lOX} )E3)DZ)E!4*9 )D!p\\\\a )E|)F\u003c)Ed)F=)E!u\u003c )F?)E!eAf?i )F3)E!ODn )FA)EM)F!0ef )G!:;(\u003c )Fw)G!\u003e] )FP)G!/@ )Ft)GA)F!sq}|\\\\ )H6)G!iNQmE )HC)J=)H})I!GH )Hz*o!(4\u003eDILV[aouvx%~ *p!\u0026(%s )IL)Hq)I!3) )J\u0026)Hd)I8)J@)Ia)J/)Ij)J!,S:OgG )I\\\\)KB)J!VW )KD)J!X52Hjv )K1)J!z| )K!J'7@U )Jd)KV)J\\\\)Ku)LL)Kc)L!45 )M))Kh)L!a[ )Md)L!mxR )M!R= )L!ZEu )M!@UTm[o )f!Je )P!:;@=KLFSTZc *^!UW[%]_`bacdfhklnqu *p!tu%~ *q!\u0026'%6;NVbgjmor%xz%|~ *r!\u0026-%0479@DEG%IL%PR%TVY[\\\\ac%gin%z} *s!\u0026' *^!wxy *_!)+ *\\\\j)5!'37;\u003e=A@H *7`)k!EJUegi )\u003e/)@!789Sb )DW)@!L^I )^`)C5)@!f}z )A\u0026)@~*2\u003c)A!OD1?FQGgt| )B!\u003e4Urs} )C'*X!236;=@EFHIGMUY *N!AD%FH%K )d!3d )c{)d!+4CDIPRTW )7r)8C)9h*s!)+.%02378:%CE%LNOQRTUWX\\\\_`eghmnpqs%|~ *t!\u0026'%+/%24%689\u003c\u003e%ACFGIN%PT%VXY[%_acd );E)=,*2:)Q!JS]UYegfmux%z )R!(0+19 )\u003e!0Pf )c!kptN *DV(`0*3!|yp *4@)CH*4!A5/18;k%n_FH]Q[ )CN*4!aouxq *5!89 *4v*5')CS*5=*Ue*5!aIWC]sw~ *6!F+,C2;NO?9 (q~(xw*6!ZTc )Ym*6!u| *7E)Cd*7!C4 *t!ef%moprsuw%{~ *u!\u0026'(*%\u003c?@BCEGHJNOQ%SU%]`b%fh%oq%uwy%{~ *v!'()+%/ *7:*6x)O!6IKUXk *y!XYZ\\\\`a )Pl),})P{*Nm)?2+3=)?!5^hfenptx )^![wqx )_!=B9-3jL )`!9\u003c?XZ )a!C,8 )`n)aB)`s)a!HJh )b!*, )a!xp )b!WK^p )c!;F )^G)`A)a6)b0)5!ZY_de )w!ejps )x!,- )w})x!+3(1@8KV[kx )y+).!\\\\[ *v!01346%\u003c\u003e@BCEG%wz *w!'(%+-0%G )/n)0!63@ )/s)0!2\u003c )1+)2!-4 )3!+wk )4!@F{ *3!]\\\\ )SA)TK)WF)t!+-5\u003eLMF )?M)t!bQRn%pTqZaX^ )u!*I23 )t[)u,)t|)u!(Fwovcx} )v!\u00265\u003c(W\\\\Lou )w/)vw)w!=NH^ +4.+2!\u003e@A )q!1DM9GHZbYmfux )r!78.*AO *w!HI%~ *x!\u0026'%N )r!ILftdgsx )s!-.\u003eCK )l!7=KHEXov )m'*0!@IG *Oi*0!P\\\\Yaif )p!f~ *Ii*m!89:\u003e=?@BCGJHM%OVW^]`_bcegi%moprw{%~ *n!\u0026'(*%,/%13258%:\u003c\u003e?ABD *x!OP%Tknruy *y!*/%TVW[]^b%dg%mp%~ *z!\u0026'%5 *n!CEHIM%OQSVWY]\\\\`acdg%il%pruw%y| *o!+,*-2357%9=?@C6E%GJMOPS%UW%Z\\\\_`^bce%mpr%t; )s!uz *sf)y!Me[c~ )'A)y!{z )z!=3 *z!67%:\u003c=?%[]%~ *{!\u0026'(+%79;HMNPSWX^ )z!XVp +1m*{z){6)oz)p!',2= )k!46 )l)+/!prx%| +0!)(-/.01589;=%@BCEHLNQ%SUZ]%chdj )m!68:DAPGWX\\\\hUTgfzq )n!.31/62N\u003cGJ[KPWbUpc`d *{!aco%y{|~ *|!\u0026'%u )nf)o.)n!mk )o2)n!x{ )o!1'50 )n~)o!?PFNH]a *1Y)|S){!\u003e?FLN[lfrnsy *J!BGP[]` *K!'K\u003cANgShjv *L!F( *Km*L**Ku*L!ME?G6`Wbm *M!9N )m/*4i)p!KM )sj*2!HJLRVX[%]_^gAky| *3!*/FN *MV*x!X`c *|!vw%~ *}!\u0026'%| *x!ilmotz{~ *y!\u0026(),- *D!AH`bsnpo *E!C(\u0026G8B\u003eE.DQ_PiKULJdjO *F!+34/5 *Ek*FU*Ey*F6*E!zsl *F!EI:JLOKe}`gp\\\\ *G!'1 *F!vsky *G!(k *Fd*G!fgdIY5Wt\u003cLeMBN| *H!?8b *}!}~ *~!\u0026'%5\u003cMSWX^_cps%y|%~ +\u0026!\u0026*,.%0457%;\u003e%ACE%HJ%OQS%VX%[]_a%ikm%su%w *HV*G!qn *H!=' *Gl*H!;u\u003cEC[cMaPZkzp~ *I!MJ5ARXps */w*0!*,- *80)|!gjupq )}))|w)}?)||)}![L\u003e-BE498GR2lnY )~0)}!`qt )~!)6 )}v)~!-,KabsgXc@eW]fo *\u00263)~|*\u0026!.?\u003cGHLn`^qxm +\u0026!xz%~ +'!\u0026(%*,%68%:\u003c%FHIK%RU%X^b%dfhjkm%~ +(!\u0026'%: *'!(3/AJI *7!wz{}e *I{*8!ABCMOHKX[ST^dikoz *9!\u0026/ *J!\\\\cf *K!]d *M1*1!,.6\u003e?A *(,)\u003eD*(!AMLNRblmqw|}xu *)!.? *95)B?*1!N]dtpux} *2)*)O**u*+!KS *-:*.5+1!VR *Xs*Y!+;8X *X!gm *U!RT *c!w}{| *d8+(!;\u003c%~ +)!\u0026'%A *d!65D=CQRFHM`Ydaevw~ *e!()*0/5 *U`+0u*Y_*Z!9S *[!N^ *Y!\\\\fcak}~ *Z!(, *Y!uv *Z)*Ym*Z!:EF1GI2WKbkmz|q} *[!/5.*2\u0026\u003e67FG?ekqdiz *\\\\!+0,8: *V!*4\u003c7JF )?=*N!PXTV +)!BC%~ +*!\u0026'%H *N!_ei *O_*R\u003c*u\u003e*t!-73JELSRnqt *u)+3!loq%vx +2!CPR *s!VYZko )sM*s}*g!Ww *h8*iU*j(*k/*jM*l!Jw ++!369%\u003c )zB++!?BD%FHINOR%WY%]_abd%kn%qx%{~ +,\u0026+*!IJ%~ ++!\u0026'%/12478=\u003e@CGJ%MQ^`cmr%v|} +,!,-56;\u003c'%+.%02%478:= *u!gp|} *v!\u0026A=5DF *~!{z +\u0026(+0O+\u0026!'+-2163\u003c=B +'!][_a`ei *yo*z!;\\\\ *{!*) +\u0026!PRW`\\\\l^jy +'!'+7; +1![\\\\ *-.+0!y~ +1!\u0026)0 *k;+1!;=y%{~} +2!'.,*/4gqt~| +3!)*0 +,!\u003e?%~ +-!\u0026'%~ +.!\u0026'%~ +/!\u0026'%ntw~ +0!'+237DGI%KMPTV%Y\\\\efik%twxz%} +1!'(*%/2%:\u003c\u003e%CE%QS%UWXZ]%ac%fh%jnpqs%uwx| +2!\u0026()+-0%35%=?BD%OQTVWY%[]_%dfh%prsu%{} +3!\u0026(+%/1%;\u003e%jmny%~ +4!\u0026'%+/%14%8 .*f.+!Zv .,!oy .-!;\u003c%\u003e@BCGN%PRSV%X -R!XY%~ -S!\u0026'%N\"));","        var gbk = src(gbk_us);","        return gbk;","    }();","","    var gbk_build = GBK$1;","","    return gbk_build;","","})));"],"stylingDirectives":[[{"start":0,"end":3,"cssClass":"pl-c"}],[{"start":0,"end":16,"cssClass":"pl-c"}],[{"start":0,"end":43,"cssClass":"pl-c"}],[{"start":0,"end":14,"cssClass":"pl-c"}],[{"start":0,"end":25,"cssClass":"pl-c"}],[{"start":0,"end":3,"cssClass":"pl-c"}],[],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":9,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":18,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":18,"cssClass":"pl-s1"},{"start":19,"end":22,"cssClass":"pl-c1"},{"start":23,"end":31,"cssClass":"pl-s"},{"start":32,"end":34,"cssClass":"pl-c1"},{"start":35,"end":41,"cssClass":"pl-k"},{"start":42,"end":48,"cssClass":"pl-smi"},{"start":49,"end":52,"cssClass":"pl-c1"},{"start":53,"end":64,"cssClass":"pl-s"},{"start":67,"end":73,"cssClass":"pl-smi"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":74,"end":81,"cssClass":"pl-c1"},{"start":82,"end":83,"cssClass":"pl-c1"},{"start":84,"end":91,"cssClass":"pl-s1"},{"start":91,"end":92,"cssClass":"pl-kos"},{"start":92,"end":93,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":21,"cssClass":"pl-s1"},{"start":22,"end":25,"cssClass":"pl-c1"},{"start":26,"end":36,"cssClass":"pl-s"},{"start":37,"end":39,"cssClass":"pl-c1"},{"start":40,"end":46,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":50,"cssClass":"pl-c1"},{"start":53,"end":59,"cssClass":"pl-en"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":67,"cssClass":"pl-s1"},{"start":67,"end":68,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":6,"cssClass":"pl-smi"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":17,"cssClass":"pl-k"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":4,"end":16,"cssClass":"pl-s"},{"start":16,"end":17,"cssClass":"pl-kos"}],[],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":22,"cssClass":"pl-k"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":21,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":40,"cssClass":"pl-c"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":12,"end":18,"cssClass":"pl-en"},{"start":20,"end":28,"cssClass":"pl-k"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":16,"end":19,"cssClass":"pl-k"},{"start":20,"end":23,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":28,"cssClass":"pl-s"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":16,"end":19,"cssClass":"pl-k"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":24,"cssClass":"pl-k"},{"start":25,"end":26,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":35,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":38,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":48,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-s1"},{"start":52,"end":53,"cssClass":"pl-c1"},{"start":54,"end":57,"cssClass":"pl-s1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-s1"},{"start":60,"end":62,"cssClass":"pl-c1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":64,"end":65,"cssClass":"pl-kos"}],[{"start":20,"end":23,"cssClass":"pl-k"},{"start":24,"end":28,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":40,"end":44,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-kos"}],[{"start":20,"end":22,"cssClass":"pl-k"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":28,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":35,"cssClass":"pl-c1"},{"start":36,"end":38,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-c1"},{"start":47,"end":50,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":24,"end":27,"cssClass":"pl-k"},{"start":28,"end":33,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-c1"},{"start":49,"end":53,"cssClass":"pl-c1"},{"start":53,"end":54,"cssClass":"pl-kos"}],[{"start":24,"end":26,"cssClass":"pl-k"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":33,"cssClass":"pl-s1"},{"start":34,"end":36,"cssClass":"pl-c1"},{"start":37,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":28,"end":32,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":35,"end":41,"cssClass":"pl-s1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":47,"cssClass":"pl-s1"},{"start":48,"end":50,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-c1"},{"start":53,"end":54,"cssClass":"pl-c1"},{"start":55,"end":60,"cssClass":"pl-s1"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-c1"},{"start":64,"end":73,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":74,"end":75,"cssClass":"pl-kos"}],[{"start":28,"end":29,"cssClass":"pl-s1"},{"start":29,"end":31,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":20,"end":23,"cssClass":"pl-s1"},{"start":24,"end":26,"cssClass":"pl-c1"},{"start":27,"end":33,"cssClass":"pl-v"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":46,"cssClass":"pl-en"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":51,"cssClass":"pl-s1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":16,"end":22,"cssClass":"pl-k"},{"start":23,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":12,"end":18,"cssClass":"pl-en"},{"start":20,"end":28,"cssClass":"pl-k"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":16,"end":19,"cssClass":"pl-s1"},{"start":20,"end":22,"cssClass":"pl-c1"},{"start":23,"end":25,"cssClass":"pl-s"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":16,"end":19,"cssClass":"pl-k"},{"start":20,"end":23,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":16,"end":19,"cssClass":"pl-k"},{"start":20,"end":22,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-s"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":39,"cssClass":"pl-en"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":44,"end":59,"cssClass":"pl-c"}],[{"start":16,"end":19,"cssClass":"pl-k"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":24,"cssClass":"pl-k"},{"start":25,"end":26,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":46,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":48,"end":49,"cssClass":"pl-s1"},{"start":49,"end":51,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"}],[{"start":20,"end":23,"cssClass":"pl-k"},{"start":24,"end":32,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":35,"end":38,"cssClass":"pl-s1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":49,"cssClass":"pl-en"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-s1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":20,"end":22,"cssClass":"pl-k"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":32,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":35,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":44,"cssClass":"pl-s1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":49,"cssClass":"pl-en"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":58,"cssClass":"pl-s1"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-kos"}],[{"start":20,"end":24,"cssClass":"pl-k"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":24,"end":27,"cssClass":"pl-k"},{"start":28,"end":33,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":42,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":50,"cssClass":"pl-en"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":59,"cssClass":"pl-s1"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":61,"cssClass":"pl-kos"}],[{"start":24,"end":26,"cssClass":"pl-k"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":29,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":28,"end":33,"cssClass":"pl-s1"},{"start":34,"end":36,"cssClass":"pl-c1"},{"start":37,"end":46,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":28,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":41,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":50,"cssClass":"pl-s1"},{"start":51,"end":53,"cssClass":"pl-c1"},{"start":54,"end":55,"cssClass":"pl-c1"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":58,"end":62,"cssClass":"pl-c1"},{"start":63,"end":64,"cssClass":"pl-c1"},{"start":65,"end":70,"cssClass":"pl-s1"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":71,"end":72,"cssClass":"pl-kos"}],[{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-k"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":28,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":16,"end":22,"cssClass":"pl-k"},{"start":23,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"}],[],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":22,"cssClass":"pl-k"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":26,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":21,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":36,"cssClass":"pl-s"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":26,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":42,"cssClass":"pl-s"},{"start":42,"end":43,"cssClass":"pl-kos"}],[],[{"start":8,"end":16,"cssClass":"pl-k"},{"start":17,"end":25,"cssClass":"pl-en"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":12,"end":15,"cssClass":"pl-k"},{"start":16,"end":24,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":42,"cssClass":"pl-en"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":45,"cssClass":"pl-s"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":51,"cssClass":"pl-en"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-kos"}],[{"start":12,"end":15,"cssClass":"pl-k"},{"start":16,"end":22,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":33,"cssClass":"pl-k"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":16,"end":22,"cssClass":"pl-k"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":24,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":41,"cssClass":"pl-en"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":45,"end":47,"cssClass":"pl-c1"},{"start":48,"end":61,"cssClass":"pl-pds"},{"start":48,"end":49,"cssClass":"pl-c1"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":61,"cssClass":"pl-c1"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":66,"cssClass":"pl-en"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":67,"end":68,"cssClass":"pl-s1"},{"start":68,"end":69,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":12,"end":18,"cssClass":"pl-k"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":16,"end":22,"cssClass":"pl-en"},{"start":24,"end":32,"cssClass":"pl-k"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":20,"end":26,"cssClass":"pl-k"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":31,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":34,"end":36,"cssClass":"pl-s"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":45,"cssClass":"pl-en"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":50,"cssClass":"pl-pds"},{"start":46,"end":47,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":52,"end":60,"cssClass":"pl-k"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":61,"end":62,"cssClass":"pl-s1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":64,"end":65,"cssClass":"pl-kos"}],[{"start":24,"end":26,"cssClass":"pl-k"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":34,"cssClass":"pl-en"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":45,"cssClass":"pl-k"},{"start":46,"end":47,"cssClass":"pl-s1"},{"start":47,"end":48,"cssClass":"pl-kos"}],[{"start":24,"end":27,"cssClass":"pl-k"},{"start":28,"end":34,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":37,"end":40,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":47,"cssClass":"pl-en"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":49,"cssClass":"pl-s1"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-kos"}],[{"start":24,"end":27,"cssClass":"pl-k"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":32,"cssClass":"pl-k"},{"start":33,"end":34,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-c1"},{"start":44,"end":50,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":51,"end":57,"cssClass":"pl-c1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-s1"},{"start":60,"end":62,"cssClass":"pl-c1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":64,"end":65,"cssClass":"pl-kos"}],[{"start":28,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":40,"end":43,"cssClass":"pl-s"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":50,"cssClass":"pl-s"},{"start":51,"end":52,"cssClass":"pl-c1"},{"start":53,"end":59,"cssClass":"pl-s1"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":61,"cssClass":"pl-s1"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":71,"cssClass":"pl-en"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":74,"cssClass":"pl-c1"},{"start":74,"end":75,"cssClass":"pl-kos"},{"start":75,"end":76,"cssClass":"pl-kos"},{"start":76,"end":77,"cssClass":"pl-kos"},{"start":77,"end":83,"cssClass":"pl-en"},{"start":83,"end":84,"cssClass":"pl-kos"},{"start":84,"end":85,"cssClass":"pl-c1"},{"start":85,"end":86,"cssClass":"pl-c1"},{"start":86,"end":87,"cssClass":"pl-kos"},{"start":87,"end":88,"cssClass":"pl-kos"},{"start":88,"end":99,"cssClass":"pl-en"},{"start":99,"end":100,"cssClass":"pl-kos"},{"start":100,"end":101,"cssClass":"pl-kos"},{"start":101,"end":102,"cssClass":"pl-kos"}],[{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":24,"end":30,"cssClass":"pl-k"},{"start":31,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":42,"cssClass":"pl-en"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":45,"cssClass":"pl-s"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":16,"end":22,"cssClass":"pl-en"},{"start":24,"end":32,"cssClass":"pl-k"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":38,"cssClass":"pl-s1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":20,"end":25,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":34,"cssClass":"pl-v"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":40,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":20,"end":23,"cssClass":"pl-k"},{"start":24,"end":30,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":33,"end":35,"cssClass":"pl-s"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":20,"end":23,"cssClass":"pl-k"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":28,"cssClass":"pl-k"},{"start":29,"end":30,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-s1"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":40,"end":45,"cssClass":"pl-s1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":52,"cssClass":"pl-c1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":55,"cssClass":"pl-s1"},{"start":55,"end":57,"cssClass":"pl-c1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-kos"}],[{"start":24,"end":27,"cssClass":"pl-k"},{"start":28,"end":32,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":35,"end":40,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":47,"cssClass":"pl-en"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":49,"cssClass":"pl-s1"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-kos"}],[{"start":24,"end":26,"cssClass":"pl-k"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":32,"cssClass":"pl-s1"},{"start":33,"end":36,"cssClass":"pl-c1"},{"start":37,"end":40,"cssClass":"pl-s"},{"start":41,"end":43,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-c1"},{"start":52,"end":57,"cssClass":"pl-s1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":64,"cssClass":"pl-c1"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":66,"end":67,"cssClass":"pl-kos"}],[{"start":28,"end":31,"cssClass":"pl-k"},{"start":32,"end":37,"cssClass":"pl-s1"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":40,"end":48,"cssClass":"pl-en"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":54,"cssClass":"pl-s1"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":55,"end":61,"cssClass":"pl-en"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-s1"},{"start":64,"end":65,"cssClass":"pl-c1"},{"start":66,"end":67,"cssClass":"pl-c1"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":69,"end":70,"cssClass":"pl-c1"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":73,"end":75,"cssClass":"pl-c1"},{"start":75,"end":76,"cssClass":"pl-kos"},{"start":76,"end":77,"cssClass":"pl-kos"}],[{"start":28,"end":30,"cssClass":"pl-k"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":33,"end":38,"cssClass":"pl-en"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":44,"cssClass":"pl-s1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"}],[{"start":32,"end":35,"cssClass":"pl-k"},{"start":36,"end":38,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":32,"end":34,"cssClass":"pl-k"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":41,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-c1"},{"start":44,"end":48,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-kos"}],[{"start":36,"end":39,"cssClass":"pl-k"},{"start":40,"end":45,"cssClass":"pl-s1"},{"start":45,"end":46,"cssClass":"pl-kos"}],[{"start":36,"end":38,"cssClass":"pl-k"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":45,"cssClass":"pl-s1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":52,"cssClass":"pl-en"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":55,"cssClass":"pl-s1"},{"start":56,"end":57,"cssClass":"pl-c1"},{"start":58,"end":59,"cssClass":"pl-c1"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":61,"end":64,"cssClass":"pl-c1"},{"start":65,"end":68,"cssClass":"pl-s"},{"start":68,"end":69,"cssClass":"pl-kos"},{"start":70,"end":71,"cssClass":"pl-kos"}],[{"start":40,"end":45,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-c1"},{"start":48,"end":56,"cssClass":"pl-en"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":62,"cssClass":"pl-s1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":69,"cssClass":"pl-en"},{"start":69,"end":70,"cssClass":"pl-kos"},{"start":70,"end":72,"cssClass":"pl-s1"},{"start":73,"end":74,"cssClass":"pl-c1"},{"start":75,"end":76,"cssClass":"pl-c1"},{"start":76,"end":77,"cssClass":"pl-kos"},{"start":78,"end":79,"cssClass":"pl-c1"},{"start":79,"end":80,"cssClass":"pl-kos"},{"start":80,"end":81,"cssClass":"pl-kos"},{"start":82,"end":84,"cssClass":"pl-c1"},{"start":84,"end":85,"cssClass":"pl-kos"},{"start":85,"end":86,"cssClass":"pl-kos"}],[{"start":40,"end":42,"cssClass":"pl-s1"},{"start":43,"end":45,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-c1"},{"start":47,"end":48,"cssClass":"pl-kos"}],[{"start":36,"end":37,"cssClass":"pl-kos"},{"start":38,"end":42,"cssClass":"pl-k"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":40,"end":45,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-c1"},{"start":48,"end":53,"cssClass":"pl-s1"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":64,"cssClass":"pl-en"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":65,"end":67,"cssClass":"pl-s1"},{"start":68,"end":69,"cssClass":"pl-c1"},{"start":70,"end":71,"cssClass":"pl-c1"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-kos"}],[{"start":40,"end":42,"cssClass":"pl-s1"},{"start":43,"end":45,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-c1"},{"start":47,"end":48,"cssClass":"pl-kos"}],[{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":36,"end":38,"cssClass":"pl-k"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":45,"cssClass":"pl-s1"},{"start":46,"end":48,"cssClass":"pl-c1"},{"start":49,"end":53,"cssClass":"pl-c1"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":55,"end":56,"cssClass":"pl-kos"}],[{"start":40,"end":41,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-c1"},{"start":44,"end":46,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":40,"end":46,"cssClass":"pl-s1"},{"start":47,"end":49,"cssClass":"pl-c1"},{"start":50,"end":53,"cssClass":"pl-c1"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":60,"cssClass":"pl-en"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":67,"cssClass":"pl-s1"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":69,"end":74,"cssClass":"pl-s1"},{"start":74,"end":75,"cssClass":"pl-kos"},{"start":75,"end":76,"cssClass":"pl-kos"},{"start":76,"end":77,"cssClass":"pl-kos"}],[{"start":40,"end":48,"cssClass":"pl-k"},{"start":48,"end":49,"cssClass":"pl-kos"}],[{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":38,"cssClass":"pl-k"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":36,"end":37,"cssClass":"pl-s1"},{"start":38,"end":40,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-kos"}],[{"start":36,"end":42,"cssClass":"pl-s1"},{"start":43,"end":45,"cssClass":"pl-c1"},{"start":46,"end":52,"cssClass":"pl-v"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":65,"cssClass":"pl-en"},{"start":65,"end":66,"cssClass":"pl-kos"},{"start":66,"end":71,"cssClass":"pl-s1"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-kos"}],[{"start":36,"end":44,"cssClass":"pl-k"},{"start":44,"end":45,"cssClass":"pl-kos"}],[{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":24,"end":30,"cssClass":"pl-s1"},{"start":31,"end":33,"cssClass":"pl-c1"},{"start":34,"end":38,"cssClass":"pl-s1"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":20,"end":26,"cssClass":"pl-k"},{"start":27,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"}],[],[{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":24,"cssClass":"pl-v"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":35,"cssClass":"pl-en"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":45,"cssClass":"pl-s1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":36,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":39,"end":53,"cssClass":"pl-s1"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":55,"cssClass":"pl-kos"}],[],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":12,"end":21,"cssClass":"pl-c1"},{"start":23,"end":26,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":33,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":12,"end":21,"cssClass":"pl-c1"},{"start":23,"end":26,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":33,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":12,"end":30,"cssClass":"pl-c1"},{"start":32,"end":44,"cssClass":"pl-v"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":51,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-kos"}],[{"start":12,"end":30,"cssClass":"pl-c1"},{"start":32,"end":44,"cssClass":"pl-v"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":51,"cssClass":"pl-c1"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":11,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":22,"cssClass":"pl-k"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":18,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":18,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[],[{"start":4,"end":30,"cssClass":"pl-c"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":21,"cssClass":"pl-v"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":32,"cssClass":"pl-k"},{"start":33,"end":39,"cssClass":"pl-en"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":12,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":27,"cssClass":"pl-smi"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":16,"cssClass":"pl-k"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":38,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-s1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-s1"},{"start":48,"end":50,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":12,"end":15,"cssClass":"pl-k"},{"start":16,"end":20,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":37,"cssClass":"pl-en"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-s1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":12,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":20,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":26,"end":28,"cssClass":"pl-c1"},{"start":29,"end":33,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":47,"cssClass":"pl-k"},{"start":48,"end":51,"cssClass":"pl-v"},{"start":51,"end":52,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":22,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":27,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":35,"cssClass":"pl-v"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":39,"cssClass":"pl-en"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":42,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-s1"},{"start":46,"end":47,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-c1"},{"start":52,"end":53,"cssClass":"pl-c1"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":55,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[],[{"start":4,"end":33,"cssClass":"pl-c"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":16,"cssClass":"pl-v"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":27,"cssClass":"pl-k"},{"start":28,"end":33,"cssClass":"pl-en"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":24,"cssClass":"pl-smi"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":35,"cssClass":"pl-en"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":52,"cssClass":"pl-pds"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":37,"end":39,"cssClass":"pl-cce"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":44,"cssClass":"pl-cce"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":48,"cssClass":"pl-cce"},{"start":50,"end":51,"cssClass":"pl-c1"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":62,"cssClass":"pl-k"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":64,"cssClass":"pl-s1"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":66,"end":67,"cssClass":"pl-s1"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":69,"end":70,"cssClass":"pl-kos"}],[{"start":16,"end":22,"cssClass":"pl-k"},{"start":23,"end":28,"cssClass":"pl-v"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":41,"cssClass":"pl-en"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":45,"cssClass":"pl-s"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":50,"cssClass":"pl-pds"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-cce"},{"start":28,"end":30,"cssClass":"pl-cce"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":35,"cssClass":"pl-cce"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":40,"cssClass":"pl-cce"},{"start":43,"end":45,"cssClass":"pl-cce"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":49,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":52,"end":60,"cssClass":"pl-k"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":61,"end":62,"cssClass":"pl-s1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":64,"end":65,"cssClass":"pl-kos"}],[{"start":16,"end":19,"cssClass":"pl-k"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":32,"cssClass":"pl-en"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":49,"cssClass":"pl-en"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":20,"end":21,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":32,"cssClass":"pl-en"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":46,"cssClass":"pl-en"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":20,"end":23,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":32,"cssClass":"pl-v"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":45,"cssClass":"pl-en"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-s1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":49,"cssClass":"pl-kos"}],[{"start":16,"end":21,"cssClass":"pl-k"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-s1"},{"start":24,"end":26,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":20,"end":23,"cssClass":"pl-s1"},{"start":24,"end":26,"cssClass":"pl-c1"},{"start":27,"end":33,"cssClass":"pl-v"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":46,"cssClass":"pl-en"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-s1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":16,"end":22,"cssClass":"pl-k"},{"start":23,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":28,"cssClass":"pl-pds"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":22,"end":24,"cssClass":"pl-cce"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":35,"cssClass":"pl-s"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":72,"cssClass":"pl-pds"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":26,"cssClass":"pl-cce"},{"start":29,"end":31,"cssClass":"pl-cce"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":40,"cssClass":"pl-cce"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":46,"cssClass":"pl-cce"},{"start":49,"end":51,"cssClass":"pl-cce"},{"start":53,"end":55,"cssClass":"pl-cce"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":59,"cssClass":"pl-c1"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":63,"cssClass":"pl-kos"},{"start":63,"end":65,"cssClass":"pl-cce"},{"start":67,"end":68,"cssClass":"pl-c1"},{"start":68,"end":69,"cssClass":"pl-cce"},{"start":69,"end":70,"cssClass":"pl-kos"},{"start":70,"end":71,"cssClass":"pl-c1"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":74,"end":82,"cssClass":"pl-k"},{"start":82,"end":83,"cssClass":"pl-kos"},{"start":83,"end":86,"cssClass":"pl-s1"},{"start":86,"end":87,"cssClass":"pl-kos"},{"start":88,"end":90,"cssClass":"pl-s1"},{"start":90,"end":91,"cssClass":"pl-kos"},{"start":92,"end":94,"cssClass":"pl-s1"},{"start":94,"end":95,"cssClass":"pl-kos"},{"start":96,"end":97,"cssClass":"pl-kos"}],[{"start":16,"end":22,"cssClass":"pl-k"},{"start":23,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":33,"cssClass":"pl-en"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":38,"cssClass":"pl-pds"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":48,"cssClass":"pl-k"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":52,"end":53,"cssClass":"pl-kos"}],[{"start":20,"end":22,"cssClass":"pl-k"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-s1"},{"start":26,"end":28,"cssClass":"pl-c1"},{"start":29,"end":32,"cssClass":"pl-s"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":24,"end":30,"cssClass":"pl-k"},{"start":31,"end":33,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":26,"cssClass":"pl-k"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":24,"end":30,"cssClass":"pl-k"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":18,"cssClass":"pl-en"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":25,"cssClass":"pl-pds"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[],[{"start":4,"end":12,"cssClass":"pl-k"},{"start":13,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":28,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":16,"cssClass":"pl-k"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-s1"},{"start":36,"end":38,"cssClass":"pl-c1"},{"start":39,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-s1"},{"start":46,"end":48,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-kos"}],[{"start":12,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":16,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":27,"cssClass":"pl-c1"},{"start":28,"end":30,"cssClass":"pl-c1"},{"start":31,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":12,"end":15,"cssClass":"pl-k"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":20,"cssClass":"pl-k"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":33,"end":35,"cssClass":"pl-c1"},{"start":36,"end":40,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-s1"},{"start":43,"end":45,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"}],[{"start":16,"end":18,"cssClass":"pl-k"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":26,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":34,"cssClass":"pl-c1"}],[{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":26,"cssClass":"pl-c1"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-s1"},{"start":32,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-s1"},{"start":37,"end":39,"cssClass":"pl-c1"},{"start":40,"end":44,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":46,"end":48,"cssClass":"pl-c1"},{"start":49,"end":50,"cssClass":"pl-s1"},{"start":51,"end":53,"cssClass":"pl-c1"},{"start":54,"end":58,"cssClass":"pl-c1"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":60,"end":62,"cssClass":"pl-c1"}],[{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":26,"cssClass":"pl-c1"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-s1"},{"start":32,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-s1"},{"start":37,"end":39,"cssClass":"pl-c1"},{"start":40,"end":44,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":46,"end":48,"cssClass":"pl-c1"},{"start":49,"end":50,"cssClass":"pl-s1"},{"start":51,"end":53,"cssClass":"pl-c1"},{"start":54,"end":58,"cssClass":"pl-c1"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":60,"end":62,"cssClass":"pl-c1"}],[{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":25,"cssClass":"pl-c1"},{"start":26,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-s1"},{"start":31,"end":33,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-s1"},{"start":36,"end":38,"cssClass":"pl-c1"},{"start":39,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":20,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":20,"end":28,"cssClass":"pl-k"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":16,"end":19,"cssClass":"pl-k"},{"start":20,"end":23,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-s1"},{"start":34,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":16,"end":19,"cssClass":"pl-k"},{"start":20,"end":23,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-c1"},{"start":26,"end":39,"cssClass":"pl-v"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"}],[{"start":16,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":25,"cssClass":"pl-en"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":29,"cssClass":"pl-s1"},{"start":32,"end":35,"cssClass":"pl-s1"},{"start":38,"end":47,"cssClass":"pl-c1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":49,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":13,"cssClass":"pl-v"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":24,"cssClass":"pl-k"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":8,"end":51,"cssClass":"pl-c"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":18,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":38,"cssClass":"pl-v"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":39,"end":26827,"cssClass":"pl-s"},{"start":26827,"end":26828,"cssClass":"pl-kos"},{"start":26828,"end":26829,"cssClass":"pl-kos"},{"start":26829,"end":26830,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":28,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-kos"}],[],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":25,"cssClass":"pl-v"},{"start":25,"end":26,"cssClass":"pl-kos"}],[],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"},{"start":4,"end":5,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/hjdhnx/dr_py/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false,"repoAlertsPath":"/hjdhnx/dr_py/security/dependabot","repoSecurityAndAnalysisPath":"/hjdhnx/dr_py/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"gbk2.js","displayUrl":"https://github.com/hjdhnx/dr_py/blob/main/libs/gbk2.js?raw=true","headerInfo":{"blobSize":"33.4 KB","deleteInfo":{"deleteTooltip":"Fork this repository and delete the file"},"editInfo":{"editTooltip":"Fork this repository and edit the file"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"3dd1aa8","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fhjdhnx%2Fdr_py%2Fblob%2Fmain%2Flibs%2Fgbk2.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"205","truncatedSloc":"191"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","languageID":183,"large":false,"loggedIn":true,"newDiscussionPath":"/hjdhnx/dr_py/discussions/new","newIssuePath":"/hjdhnx/dr_py/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/hjdhnx/dr_py/blob/main/libs/gbk2.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/hjdhnx/dr_py/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"rawBlobUrl":"https://github.com/hjdhnx/dr_py/raw/main/libs/gbk2.js","renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"hjdhnx","repoName":"dr_py","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timedOut":false,"notAnalyzed":false,"symbols":[{"name":"GBK","kind":"function","identStart":390,"identEnd":393,"extentStart":390,"extentEnd":1890,"fullyQualifiedName":"GBK","identUtf16":{"start":{"lineNumber":14,"utf16Col":8},"end":{"lineNumber":14,"utf16Col":11}},"extentUtf16":{"start":{"lineNumber":14,"utf16Col":8},"end":{"lineNumber":53,"utf16Col":5}}},{"name":"decode","kind":"function","identStart":488,"identEnd":494,"extentStart":488,"extentEnd":1078,"fullyQualifiedName":"decode","identUtf16":{"start":{"lineNumber":17,"utf16Col":12},"end":{"lineNumber":17,"utf16Col":18}},"extentUtf16":{"start":{"lineNumber":17,"utf16Col":12},"end":{"lineNumber":31,"utf16Col":13}}},{"name":"encode","kind":"function","identStart":1092,"identEnd":1098,"extentStart":1092,"extentEnd":1853,"fullyQualifiedName":"encode","identUtf16":{"start":{"lineNumber":32,"utf16Col":12},"end":{"lineNumber":32,"utf16Col":18}},"extentUtf16":{"start":{"lineNumber":32,"utf16Col":12},"end":{"lineNumber":50,"utf16Col":13}}},{"name":"URI","kind":"function","identStart":1920,"identEnd":1923,"extentStart":1920,"extentEnd":4766,"fullyQualifiedName":"URI","identUtf16":{"start":{"lineNumber":56,"utf16Col":8},"end":{"lineNumber":56,"utf16Col":11}},"extentUtf16":{"start":{"lineNumber":56,"utf16Col":8},"end":{"lineNumber":123,"utf16Col":5}}},{"name":"getModue","kind":"function","identStart":2042,"identEnd":2050,"extentStart":2033,"extentEnd":4452,"fullyQualifiedName":"getModue","identUtf16":{"start":{"lineNumber":60,"utf16Col":17},"end":{"lineNumber":60,"utf16Col":25}},"extentUtf16":{"start":{"lineNumber":60,"utf16Col":8},"end":{"lineNumber":112,"utf16Col":9}}},{"name":"isPass","kind":"function","identStart":2135,"identEnd":2141,"extentStart":2135,"extentEnd":2241,"fullyQualifiedName":"isPass","identUtf16":{"start":{"lineNumber":62,"utf16Col":16},"end":{"lineNumber":62,"utf16Col":22}},"extentUtf16":{"start":{"lineNumber":62,"utf16Col":16},"end":{"lineNumber":64,"utf16Col":13}}},{"name":"encode","kind":"function","identStart":2280,"identEnd":2286,"extentStart":2280,"extentEnd":2754,"fullyQualifiedName":"encode","identUtf16":{"start":{"lineNumber":66,"utf16Col":16},"end":{"lineNumber":66,"utf16Col":22}},"extentUtf16":{"start":{"lineNumber":66,"utf16Col":16},"end":{"lineNumber":75,"utf16Col":17}}},{"name":"decode","kind":"function","identStart":2772,"identEnd":2778,"extentStart":2772,"extentEnd":4428,"fullyQualifiedName":"decode","identUtf16":{"start":{"lineNumber":76,"utf16Col":16},"end":{"lineNumber":76,"utf16Col":22}},"extentUtf16":{"start":{"lineNumber":76,"utf16Col":16},"end":{"lineNumber":110,"utf16Col":17}}},{"name":"src","kind":"function","identStart":4777,"identEnd":4780,"extentStart":4777,"extentEnd":4898,"fullyQualifiedName":"src","identUtf16":{"start":{"lineNumber":125,"utf16Col":8},"end":{"lineNumber":125,"utf16Col":11}},"extentUtf16":{"start":{"lineNumber":125,"utf16Col":8},"end":{"lineNumber":129,"utf16Col":5}}},{"name":"Fn_Hex_decode","kind":"function","identStart":4984,"identEnd":4997,"extentStart":4984,"extentEnd":5309,"fullyQualifiedName":"Fn_Hex_decode","identUtf16":{"start":{"lineNumber":132,"utf16Col":8},"end":{"lineNumber":132,"utf16Col":21}},"extentUtf16":{"start":{"lineNumber":132,"utf16Col":8},"end":{"lineNumber":141,"utf16Col":5}}},{"name":"decode","kind":"function","identStart":5009,"identEnd":5015,"extentStart":5000,"extentEnd":5309,"fullyQualifiedName":"decode","identUtf16":{"start":{"lineNumber":132,"utf16Col":33},"end":{"lineNumber":132,"utf16Col":39}},"extentUtf16":{"start":{"lineNumber":132,"utf16Col":24},"end":{"lineNumber":141,"utf16Col":5}}},{"name":"Fn_unzip","kind":"function","identStart":5390,"identEnd":5398,"extentStart":5390,"extentEnd":6338,"fullyQualifiedName":"Fn_unzip","identUtf16":{"start":{"lineNumber":144,"utf16Col":8},"end":{"lineNumber":144,"utf16Col":16}},"extentUtf16":{"start":{"lineNumber":144,"utf16Col":8},"end":{"lineNumber":168,"utf16Col":5}}},{"name":"unZip","kind":"function","identStart":5410,"identEnd":5415,"extentStart":5401,"extentEnd":6338,"fullyQualifiedName":"unZip","identUtf16":{"start":{"lineNumber":144,"utf16Col":28},"end":{"lineNumber":144,"utf16Col":33}},"extentUtf16":{"start":{"lineNumber":144,"utf16Col":19},"end":{"lineNumber":168,"utf16Col":5}}},{"name":"gbkArray","kind":"function","identStart":6354,"identEnd":6362,"extentStart":6345,"extentEnd":7109,"fullyQualifiedName":"gbkArray","identUtf16":{"start":{"lineNumber":170,"utf16Col":13},"end":{"lineNumber":170,"utf16Col":21}},"extentUtf16":{"start":{"lineNumber":170,"utf16Col":4},"end":{"lineNumber":192,"utf16Col":5}}}]}},"copilotInfo":{"documentationUrl":"https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot-for-individuals","notices":{"codeViewPopover":{"dismissed":false,"dismissPath":"/settings/dismiss-notice/code_view_copilot_popover"}},"userAccess":{"accessAllowed":false,"hasSubscriptionEnded":false,"orgHasCFBAccess":false,"userHasCFIAccess":false,"userHasOrgs":false,"userIsOrgAdmin":false,"userIsOrgMember":false,"business":null,"featureRequestInfo":null}},"csrf_tokens":{"/hjdhnx/dr_py/branches":{"post":"tAVPxN-HAh8fJa0KtHJlUtdM-U4p68Fm7VlBpuquok_jCodyb5TkNwtKiI4rQLgoI-T1mA0Skx912q3vQZUZzg"},"/repos/preferences":{"post":"BwBaWfkmydobnDcD0yl7Q4tA-TZHwrpyYMOz2dRkSHDSe_8rzxXMWlvJhwQzsRiFqgmMjU1qDpc-Q5PiCBuzGg"}}},"title":"dr_py/libs/gbk2.js at main · hjdhnx/dr_py","appPayload":{"helpUrl":"https://docs.github.com","findFileWorkerPath":"/assets-cdn/worker/find-file-worker-83d4418b406d.js","findInFileWorkerPath":"/assets-cdn/worker/find-in-file-worker-bcc43f789400.js","githubDevUrl":"https://github.dev/","enabled_features":{"code_nav_ui_events":false,"copilot_conversational_ux":false,"copilot_conversational_ux_streaming":false,"copilot_popover_file_editor_header":true,"copilot_smell_icebreaker_ux":false}}}</script>
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

