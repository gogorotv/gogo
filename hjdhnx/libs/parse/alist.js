





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
  <script type="text/javascript" nonce="babf6eea3d5847129172b8eb214" src="//local.adguard.org?ts=1697152839730&amp;type=content-script&amp;dmn=github.com&amp;url=https%3A%2F%2Fgithub.com%2Fhjdhnx%2Fdr_py%2Fblob%2Fmain%2Flibs%2Fparse%2Fgetck_vqq.js&amp;app=chrome.exe&amp;css=2&amp;js=1&amp;rel=1&amp;rji=1&amp;sbe=1&amp;stealth=1&amp;st-dnt"></script>
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


  <title>dr_py/libs/parse/getck_vqq.js at main · hjdhnx/dr_py</title>



  <meta name="route-pattern" content="/:user_id/:repository/blob/*name(/*path)">

    
  <meta name="current-catalog-service-hash" content="82c569b93da5c18ed649ebd4c2c79437db4611a6a1373e805a3cb001c64130b7">


  <meta name="request-id" content="149E:31F30:2C0ABA:2FCCD0:6528943D" data-turbo-transient="true" /><meta name="html-safe-nonce" content="c9670496bb2e309eb36063b3c920cb16f539ca725f10be5e34eb4aa5642c5c12" data-turbo-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9oamRobngvZHJfcHkvdHJlZS9tYWluL2xpYnMvcGFyc2UiLCJyZXF1ZXN0X2lkIjoiMTQ5RTozMUYzMDoyQzBBQkE6MkZDQ0QwOjY1Mjg5NDNEIiwidmlzaXRvcl9pZCI6Ijg4MDU1NDA1NzMyNjYxMDk3NTAiLCJyZWdpb25fZWRnZSI6ImphcGFuZWFzdCIsInJlZ2lvbl9yZW5kZXIiOiJpYWQifQ==" data-turbo-transient="true" /><meta name="visitor-hmac" content="9e507340a295d0211a3a93d2dc37891a7576be4f25fc9775f363f33d13fd258f" data-turbo-transient="true" />


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
    
      <meta name="description" content="A webServer convert web and x5 movie sites to cms api data - dr_py/libs/parse/getck_vqq.js at main · hjdhnx/dr_py">
      <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <meta property="fb:app_id" content="1401488693436528">
    <meta name="apple-itunes-app" content="app-id=1477376905, app-argument=https://github.com/hjdhnx/dr_py/blob/main/libs/parse/getck_vqq.js" />
      <meta name="twitter:image:src" content="https://opengraph.githubassets.com/f6a30d397de96d17b6808619b1718f66b00400b77ff8d6a2178977198fd57158/hjdhnx/dr_py" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="dr_py/libs/parse/getck_vqq.js at main · hjdhnx/dr_py" /><meta name="twitter:description" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" />
      <meta property="og:image" content="https://opengraph.githubassets.com/f6a30d397de96d17b6808619b1718f66b00400b77ff8d6a2178977198fd57158/hjdhnx/dr_py" /><meta property="og:image:alt" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="600" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="dr_py/libs/parse/getck_vqq.js at main · hjdhnx/dr_py" /><meta property="og:url" content="https://github.com/hjdhnx/dr_py/blob/main/libs/parse/getck_vqq.js" /><meta property="og:description" content="A webServer convert web and x5 movie sites to cms api data - hjdhnx/dr_py" />
      

      <link rel="shared-web-socket" href="wss://alive.github.com/_sockets/u/139020806/ws?session=eyJ2IjoiVjMiLCJ1IjoxMzkwMjA4MDYsInMiOjEyMjE1NzQ0NzAsImMiOjU0OTI2ODA5NSwidCI6MTY5NzE1ODIyNX0=--5cfda238f1a172f912a2985569fb7872106171bab986934997eeab0d76427e15" data-refresh-url="/_alive" data-session-id="b901c9b8379b94b0262d68dba8a5f5afb2b3e5767167059fbd5009fa1e7b15b7">
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
      
  <button aria-label="Open global navigation menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-ff006761-debf-485b-8f70-0e9c0920f97d" id="dialog-show-dialog-ff006761-debf-485b-8f70-0e9c0920f97d" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-bg-transparent p-0 color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-three-bars Button-visual">
    <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
</svg>
</button>  

<div class="Overlay--hidden Overlay-backdrop--side Overlay-backdrop--placement-left" data-modal-dialog-overlay>
  <modal-dialog data-target="deferred-side-panel.panel" role="dialog" id="dialog-ff006761-debf-485b-8f70-0e9c0920f97d" aria-modal="true" aria-disabled="true" aria-labelledby="dialog-ff006761-debf-485b-8f70-0e9c0920f97d-title" aria-describedby="dialog-ff006761-debf-485b-8f70-0e9c0920f97d-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade SidePanel">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-ff006761-debf-485b-8f70-0e9c0920f97d-title">
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
      <button data-close-dialog-id="dialog-ff006761-debf-485b-8f70-0e9c0920f97d" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body d-flex flex-column height-full px-2">      <nav aria-label="Site navigation" data-view-component="true" class="ActionList">
  
  <nav-list>
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <a data-hotkey="g d" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;HOME&quot;,&quot;label&quot;:null}" id="item-8f3d8a86-10a6-4471-9645-fa23b47a87de" href="/dashboard" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES&quot;,&quot;label&quot;:null}" id="item-8448a5ba-a6f1-426b-9258-3966ecc1e35f" href="/issues" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS&quot;,&quot;label&quot;:null}" id="item-6e115c9c-bb16-42de-b0eb-8b620ee13591" href="/pulls" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DISCUSSIONS&quot;,&quot;label&quot;:null}" id="item-90a18b88-f7dc-4f36-bd68-f17047a49405" href="/discussions" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;CODESPACES&quot;,&quot;label&quot;:null}" id="item-eaad55f6-6b8d-45eb-8f71-f55d43e4ce5a" href="https://github.com/codespaces" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;EXPLORE&quot;,&quot;label&quot;:null}" id="item-8d9b423e-bf8b-4995-bb9a-b44a3e5a4d66" href="/explore" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;MARKETPLACE&quot;,&quot;label&quot;:null}" id="item-e12b0464-1ad5-486d-9d8b-f366cd7aefed" href="/marketplace" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;FEEDBACK&quot;,&quot;label&quot;:null}" id="item-832163db-8994-4a4c-b0c9-d058d6161857" href="https://gh.io/navigation-update" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
              


<qbsearch-input class="search-input" data-scope="repo:hjdhnx/dr_py" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="iLy_5wg_yESxu_im8JWIYh97dXD1B417eoUxhvZIOIl_xQElAe2eQ_ST8Pz986a8NbSAK31_Lo51Ueu9xIJE5g" data-max-custom-scopes="10" data-header-redesign-enabled="true" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="hjdhnx/dr_py" data-current-org="" data-current-owner="hjdhnx" data-logged-in="true">
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

      <tool-tip id="tooltip-9109cba8-86c4-4a0c-b6fb-62b89de058a4" for="AppHeader-commandPalette-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Command palette</tool-tip>
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
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-2f9a93b0-dcc2-4efa-aa54-ef99f4ad1214" data-target="query-builder.input" data-action="
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
      <div class="FormControl-inlineValidation" id="validation-2f9a93b0-dcc2-4efa-aa54-ef99f4ad1214" hidden="hidden">
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
      <div data-view-component="true" class="Overlay-body">        <!-- '"` --><!-- </textarea></xmp> --></option></form><form id="code-search-feedback-form" data-turbo="false" action="/search/feedback" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="FGA4W-IawFBzj0bMimlhEzfFTe8mgUbqhh3fUTswEHYhlkT4TX05dKcLV8UlzzVCtpspNlWkmw6MQs0EfbnSYg" />
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form id="custom-scopes-dialog-form" data-turbo="false" action="/search/custom_scopes" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="B8qPxhksAvuyFjeubMrJ_uMQYOHwu85bmr6Vf7F0N2gzQdL9MifXxyxTM9ID05Yd6JeCjE3Ht71_MtLdLkRmnw" />
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
              <input type="hidden" value="SJp579LwMQxnhRr6mmPbvvAjPTyAI146XKur3XKbOf9AuZQEzO7zpWjOKfKsLfKtxcSTTdh_BXV3qv9S9RKqVA" data-csrf="true" />
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
</qbsearch-input><input type="hidden" value="f4E_fUXJ2V6P9vRcwUTkWbTm4qePjZCLBvpSgHnJzDnjZN_FnzwU_Lr26WFJIzfU6fGW35QqCA0--GQSA6Zsag" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />

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
</button>  <tool-tip id="tooltip-ba7fb5e9-7b07-450b-ab2c-0a9bec420488" for="global-create-menu-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Create new...</tool-tip>
</div>

<anchored-position id="global-create-menu-overlay" anchor="global-create-menu-button" align="end" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      
        <div data-view-component="true">
  <ul aria-labelledby="global-create-menu-button" id="global-create-menu-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new repository&quot;}" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="/new" tabindex="-1" id="item-bc600ad0-36e8-45a9-a5c4-47cd08cc0061" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="/new/import" tabindex="-1" id="item-09460c57-76e8-4dc4-9796-3b4222b483e5" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="/codespaces/new" tabindex="-1" id="item-10cf71f5-ef03-4ab4-b1b7-3859555306b3" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="https://gist.github.com/" tabindex="-1" id="item-aebdd311-4ca3-44d2-a6b0-e220dea96422" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a href="/account/organizations/new" tabindex="-1" id="item-9962c705-ab3c-40ba-972b-011d32e5eb31" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
  <a href="/issues" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-9d17ad0e-db5a-4fdf-b73b-8a51a9be5aa9" aria-labelledby="tooltip-e33c2052-b115-40bb-aca1-c43ed84f5a31" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened Button-visual">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
</a>  <tool-tip id="tooltip-e33c2052-b115-40bb-aca1-c43ed84f5a31" for="icon-button-9d17ad0e-db5a-4fdf-b73b-8a51a9be5aa9" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Issues</tool-tip>
</div>
          <div data-view-component="true" class="Button-withTooltip">
  <a href="/pulls" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-ccaa27b6-bb13-40db-93cc-839485b3f37e" aria-labelledby="tooltip-3344ec0c-0d90-42cb-8530-b086de502038" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request Button-visual">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
</a>  <tool-tip id="tooltip-3344ec0c-0d90-42cb-8530-b086de502038" for="icon-button-ccaa27b6-bb13-40db-93cc-839485b3f37e" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Pull requests</tool-tip>
</div>
          
        </div>

        

<notification-indicator data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTM5MDIwODA2IiwidCI6MTY5NzE1ODIyNX0=--a9de8e8c94ce3abdf4edc1dc3783e85258e34872ba5ffca4d64ec8857535cb84" data-indicator-mode="none" data-tooltip-global="You have unread notifications" data-tooltip-unavailable="Notifications are unavailable at the moment." data-tooltip-none="You have no unread notifications" data-header-redesign-enabled="true" data-fetch-indicator-src="/notifications/indicator" data-fetch-indicator-enabled="true" data-view-component="true" class="js-socket-channel">
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

    <tool-tip data-target="notification-indicator.tooltip" id="tooltip-c1dfb0ad-eca8-46c8-b83b-b2b1200c4a2d" for="AppHeader-notifications-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">Notifications</tool-tip>
</notification-indicator>

        

        <div class="AppHeader-user">
          <deferred-side-panel data-url="/_side-panels/user?memex_enabled=true&amp;repository=dr_py&amp;user=gogorotv&amp;user_can_create_organizations=true&amp;user_id=139020806">
  <include-fragment data-target="deferred-side-panel.fragment">
      <user-drawer-side-panel>
      <button aria-label="Open user account menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-a702b201-7602-4896-a30e-edc563439af9" id="dialog-show-dialog-a702b201-7602-4896-a30e-edc563439af9" type="button" data-view-component="true" class="AppHeader-logo Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0">    <span class="Button-content">
      <span class="Button-label"><img src="https://avatars.githubusercontent.com/u/139020806?v=4" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle" /></span>
    </span>
</button>  

<div class="Overlay--hidden Overlay-backdrop--side Overlay-backdrop--placement-right" data-modal-dialog-overlay>
  <modal-dialog data-target="deferred-side-panel.panel" role="dialog" id="dialog-a702b201-7602-4896-a30e-edc563439af9" aria-modal="true" aria-disabled="true" aria-labelledby="dialog-a702b201-7602-4896-a30e-edc563439af9-title" aria-describedby="dialog-a702b201-7602-4896-a30e-edc563439af9-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade SidePanel">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-a702b201-7602-4896-a30e-edc563439af9-title">
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
      <button data-close-dialog-id="dialog-a702b201-7602-4896-a30e-edc563439af9" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <div data-view-component="true" class="Overlay-body d-flex flex-column height-full px-2">      <nav aria-label="User navigation" data-view-component="true" class="ActionList">
  
  <nav-list>
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    <button id="item-65187b03-8eca-47c4-bf64-06772bb5a2e2" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PROFILE&quot;,&quot;label&quot;:null}" id="item-4524dec2-047f-49f1-988f-3a0045b23541" href="https://github.com/gogorotv" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-07dc613f-5adb-4ace-aaab-acd3405a55d1" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_REPOSITORIES&quot;,&quot;label&quot;:null}" id="item-47699705-5ed4-4207-b83d-b41e425b4501" href="/gogorotv?tab=repositories" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_PROJECTS&quot;,&quot;label&quot;:null}" id="item-9b171074-b9dc-4b5b-adef-3ab5b927a9fb" href="/gogorotv?tab=projects" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-451e8d66-2657-4327-b1d2-5c8dcf0b6758" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_STARS&quot;,&quot;label&quot;:null}" id="item-7cefab24-edc2-4fea-8f6e-bab969fffe48" href="/gogorotv?tab=stars" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SPONSORS&quot;,&quot;label&quot;:null}" id="item-e417de07-a37e-4fa6-bcc0-4fbd619efd9a" href="/sponsors/accounts" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_GISTS&quot;,&quot;label&quot;:null}" id="item-6a65586a-dd2f-4e29-8d64-7f455abf5013" href="https://gist.github.com/mine" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-5a5c2005-ee58-484c-9e85-b94ea4c212fa" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-712158c3-bc5b-44a7-a1c2-e9be57e67a3f" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <button id="item-de20b2f1-1c53-4cb6-8763-1a199f8fe08e" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SETTINGS&quot;,&quot;label&quot;:null}" id="item-5265ebf2-f97a-4790-82f8-3c968df026ce" href="/settings/profile" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DOCS&quot;,&quot;label&quot;:null}" id="item-16d87b68-5e5c-4369-999b-e47db4c75c3e" href="https://docs.github.com" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SUPPORT&quot;,&quot;label&quot;:null}" id="item-0c56d259-7e8e-4450-864e-b2f5284c696d" href="https://support.github.com" data-view-component="true" class="ActionListContent ActionListContent--visual16">
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
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;LOGOUT&quot;,&quot;label&quot;:null}" id="item-4b6c575c-f0f0-4099-8f7f-4cba4fbb4f47" href="/logout" data-view-component="true" class="ActionListContent">
      
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
  <button id="icon-button-7590de4a-dc3b-4a80-89a1-2ef0d3345a18" aria-labelledby="tooltip-a0e210db-c106-4d9e-9254-9f4e81cde25e" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium js-flash-close">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button>  <tool-tip id="tooltip-a0e210db-c106-4d9e-9254-9f4e81cde25e" for="icon-button-7590de4a-dc3b-4a80-89a1-2ef0d3345a18" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Dismiss alert</tool-tip>
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


    
    <notification-shelf-watcher data-base-url="https://github.com/notifications/beta/shelf" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTM5MDIwODA2IiwidCI6MTY5NzE1ODIyNX0=--a9de8e8c94ce3abdf4edc1dc3783e85258e34872ba5ffca4d64ec8857535cb84" data-view-component="true" class="js-socket-channel"></notification-shelf-watcher>
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
      return-to=/hjdhnx/dr_py/blob/main/libs/parse/getck_vqq.js
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
</button>    <tool-tip id="tooltip-50e0de2a-f849-4fc8-8fbf-adcfac2e395f" for="command-palette-clear-button" popover="manual" data-direction="w" data-type="label" data-view-component="true" class="sr-only position-absolute">Clear Command Palette</tool-tip>
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
  initial-path="/hjdhnx/dr_py/blob/main/libs/parse/getck_vqq.js"
  style="min-height: calc(100vh - 62px)"
  data-ssr="false"
  data-lazy="false"
  data-alternate="false"
>
  
  <script type="application/json" data-target="react-app.embeddedData">{"payload":{"allShortcutsEnabled":true,"fileTree":{"libs/parse":{"items":[{"name":"getck_vqq.js","path":"libs/parse/getck_vqq.js","contentType":"file"}],"totalCount":1},"libs":{"items":[{"name":"jar","path":"libs/jar","contentType":"directory"},{"name":"parse","path":"libs/parse","contentType":"directory"},{"name":"alist.js","path":"libs/alist.js","contentType":"file"},{"name":"alist.min.js","path":"libs/alist.min.js","contentType":"file"},{"name":"atob.js","path":"libs/atob.js","contentType":"file"},{"name":"base64.js","path":"libs/base64.js","contentType":"file"},{"name":"base64.min.js","path":"libs/base64.min.js","contentType":"file"},{"name":"cat_index.js","path":"libs/cat_index.js","contentType":"file"},{"name":"cheerio.min.js","path":"libs/cheerio.min.js","contentType":"file"},{"name":"cheerio.min.jsd","path":"libs/cheerio.min.jsd","contentType":"file"},{"name":"crypto-hiker.js","path":"libs/crypto-hiker.js","contentType":"file"},{"name":"crypto-js.js","path":"libs/crypto-js.js","contentType":"file"},{"name":"drT.js","path":"libs/drT.js","contentType":"file"},{"name":"drpy-ym.js","path":"libs/drpy-ym.js","contentType":"file"},{"name":"drpy.js","path":"libs/drpy.js","contentType":"file"},{"name":"drpy.min.js","path":"libs/drpy.min.js","contentType":"file"},{"name":"drpy.ym.js","path":"libs/drpy.ym.js","contentType":"file"},{"name":"drpy2-2838.js","path":"libs/drpy2-2838.js","contentType":"file"},{"name":"drpy2.js","path":"libs/drpy2.js","contentType":"file"},{"name":"drpy2.min.js","path":"libs/drpy2.min.js","contentType":"file"},{"name":"es6py.js","path":"libs/es6py.js","contentType":"file"},{"name":"exRegExp.js","path":"libs/exRegExp.js","contentType":"file"},{"name":"gbk.js","path":"libs/gbk.js","contentType":"file"},{"name":"gbk2.js","path":"libs/gbk2.js","contentType":"file"},{"name":"live2cms.js","path":"libs/live2cms.js","contentType":"file"},{"name":"live2mv.js","path":"libs/live2mv.js","contentType":"file"},{"name":"maomi_aes.js","path":"libs/maomi_aes.js","contentType":"file"},{"name":"mod.js","path":"libs/mod.js","contentType":"file"},{"name":"nameOrder.js","path":"libs/nameOrder.js","contentType":"file"},{"name":"pdf.js","path":"libs/pdf.js","contentType":"file"},{"name":"pinyin_getFirstLetterList.js","path":"libs/pinyin_getFirstLetterList.js","contentType":"file"},{"name":"pre.js","path":"libs/pre.js","contentType":"file"},{"name":"rsa.js","path":"libs/rsa.js","contentType":"file"},{"name":"searchFilter.js","path":"libs/searchFilter.js","contentType":"file"},{"name":"sortName.js","path":"libs/sortName.js","contentType":"file"},{"name":"underscore-esm-min.js","path":"libs/underscore-esm-min.js","contentType":"file"},{"name":"uri.min.js","path":"libs/uri.min.js","contentType":"file"},{"name":"util.ym.js","path":"libs/util.ym.js","contentType":"file"}],"totalCount":38},"":{"items":[{"name":".idea","path":".idea","contentType":"directory"},{"name":"base","path":"base","contentType":"directory"},{"name":"controllers","path":"controllers","contentType":"directory"},{"name":"doc","path":"doc","contentType":"directory"},{"name":"docker","path":"docker","contentType":"directory"},{"name":"images","path":"images","contentType":"directory"},{"name":"jiexi","path":"jiexi","contentType":"directory"},{"name":"js","path":"js","contentType":"directory"},{"name":"libs","path":"libs","contentType":"directory"},{"name":"logs","path":"logs","contentType":"directory"},{"name":"models","path":"models","contentType":"directory"},{"name":"py","path":"py","contentType":"directory"},{"name":"static","path":"static","contentType":"directory"},{"name":"super","path":"super","contentType":"directory"},{"name":"templates","path":"templates","contentType":"directory"},{"name":"test","path":"test","contentType":"directory"},{"name":"txt","path":"txt","contentType":"directory"},{"name":"utils","path":"utils","contentType":"directory"},{"name":"whl","path":"whl","contentType":"directory"},{"name":"zhengban","path":"zhengban","contentType":"directory"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"404.jpg","path":"404.jpg","contentType":"file"},{"name":"LICENSE","path":"LICENSE","contentType":"file"},{"name":"app.py","path":"app.py","contentType":"file"},{"name":"app.sh","path":"app.sh","contentType":"file"},{"name":"commands.txt","path":"commands.txt","contentType":"file"},{"name":"dockerfile","path":"dockerfile","contentType":"file"},{"name":"dockerfile_arm64.txt","path":"dockerfile_arm64.txt","contentType":"file"},{"name":"dockerfile_armv7.txt","path":"dockerfile_armv7.txt","contentType":"file"},{"name":"drpy_js_rule.js","path":"drpy_js_rule.js","contentType":"file"},{"name":"readme.md","path":"readme.md","contentType":"file"},{"name":"requirements.txt","path":"requirements.txt","contentType":"file"},{"name":"sources.list","path":"sources.list","contentType":"file"},{"name":"start.sh","path":"start.sh","contentType":"file"}],"totalCount":34}},"fileTreeProcessingTime":22.417309,"foldersToFetch":[],"reducedMotionEnabled":"system","repo":{"id":533565455,"defaultBranch":"main","name":"dr_py","ownerLogin":"hjdhnx","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2022-09-07T09:54:07.000+08:00","ownerAvatar":"https://avatars.githubusercontent.com/u/49803097?v=4","public":true,"private":false,"isOrgOwned":false},"symbolsExpanded":false,"treeExpanded":true,"refInfo":{"name":"main","listCacheKey":"v0:1696329988.0","canEdit":true,"refType":"branch","currentOid":"fde84cfa7523179df20601cfc560c55fcbe9f5de"},"path":"libs/parse/getck_vqq.js","currentUser":{"id":139020806,"login":"gogorotv","userEmail":"gogoro2024@gmail.com"},"blob":{"rawLines":["var document = {","    URL: \"https://v.qq.com/x/cover/bzfkv5se8qaqel2/j002024w2wg.html\",","    referrer: \"\"","","}","","var window = {","    document: document,","    navigator: {","        userAgent: \"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36\",","        appCodeName: \"Mozilla\",","        appName: \"Netscape\",","        platform: \"Win32\"","    },","","","};","","","","function w() {","    Fa = new Int8Array(Ea),","        Ha = new Int16Array(Ea),","        Ja = new Int32Array(Ea),","        Ga = new Uint8Array(Ea),","        Ia = new Uint16Array(Ea),","        Ka = new Uint32Array(Ea),","        La = new Float32Array(Ea),","        Ma = new Float64Array(Ea);","}","function d(a) {","    var b = Oa;","    return Oa = Oa + a + 15 \u0026 -16,","        b","}","function e(a, b) {","    b || (b = Da);","    var c = a = Math.ceil(a / b) * b;","    return c","}","function i(a, b, c, d, e){","    function f(a) {","        return \"string\" === b ? k(a) : \"boolean\" === b ? Boolean(a) : a","    }","    var i = wasmobject.exports._getckey //h(a)","        , j = []","        , l = 0;","    // if (g(\"array\" !== b, 'Return type should not be \"array\".'),","    //     d)","    if (d)","        for (var m = 0; m \u003c d.length; m++) {","            var n = $a[c[m]];","            // n ? (0 === l \u0026\u0026 (l = Ub()),","            n ? (0 === l \u0026\u0026 (l = Ub()),","                j[m] = n(d[m])) : j[m] = d[m]","        }","    var o = i.apply(null, j);","    return o = f(o),","    0 !== l \u0026\u0026 Tb(l),","        o","","}","","function k(a, b) {","    if (0 === b || !a)","        return \"\";","    for (var c, d = 0, e = 0; ; ) {","        // if (g(a + e \u003c db),","        if (","            c = Ga[a + e \u003e\u003e 0],","                d |= c,","            0 == c \u0026\u0026 !b)","            break;","        if (e++,","        b \u0026\u0026 e == b)","            break","    }","    b || (b = e);","    var f = \"\";","    if (d \u003c 128) {","        for (var h, i = 1024; b \u003e 0; )","            h = String.fromCharCode.apply(String, Ga.subarray(a, a + Math.min(b, i))),","                f = f ? f + h : h,","                a += i,","                b -= i;","        return f","    }","    return m(a)","}","function o(a, b, c) {","    return n(a, Ga, b, c)","}","function n(a, b, c, d) {","    if (!(d \u003e 0))","        return 0;","    for (var e = c, f = c + d - 1, g = 0; g \u003c a.length; ++g) {","        var h = a.charCodeAt(g);","        if (h \u003e= 55296 \u0026\u0026 h \u003c= 57343) {","            var i = a.charCodeAt(++g);","            h = 65536 + ((1023 \u0026 h) \u003c\u003c 10) | 1023 \u0026 i","        }","        if (h \u003c= 127) {","            if (c \u003e= f)","                break;","            b[c++] = h","        } else if (h \u003c= 2047) {","            if (c + 1 \u003e= f)","                break;","            b[c++] = 192 | h \u003e\u003e 6,","                b[c++] = 128 | 63 \u0026 h","        } else if (h \u003c= 65535) {","            if (c + 2 \u003e= f)","                break;","            b[c++] = 224 | h \u003e\u003e 12,","                b[c++] = 128 | h \u003e\u003e 6 \u0026 63,","                b[c++] = 128 | 63 \u0026 h","        } else if (h \u003c= 2097151) {","            if (c + 3 \u003e= f)","                break;","            b[c++] = 240 | h \u003e\u003e 18,","                b[c++] = 128 | h \u003e\u003e 12 \u0026 63,","                b[c++] = 128 | h \u003e\u003e 6 \u0026 63,","                b[c++] = 128 | 63 \u0026 h","        } else if (h \u003c= 67108863) {","            if (c + 4 \u003e= f)","                break;","            b[c++] = 248 | h \u003e\u003e 24,","                b[c++] = 128 | h \u003e\u003e 18 \u0026 63,","                b[c++] = 128 | h \u003e\u003e 12 \u0026 63,","                b[c++] = 128 | h \u003e\u003e 6 \u0026 63,","                b[c++] = 128 | 63 \u0026 h","        } else {","            if (c + 5 \u003e= f)","                break;","            b[c++] = 252 | h \u003e\u003e 30,","                b[c++] = 128 | h \u003e\u003e 24 \u0026 63,","                b[c++] = 128 | h \u003e\u003e 18 \u0026 63,","                b[c++] = 128 | h \u003e\u003e 12 \u0026 63,","                b[c++] = 128 | h \u003e\u003e 6 \u0026 63,","                b[c++] = 128 | 63 \u0026 h","        }","    }","    return b[c] = 0,","    c - e","}","function Tb(){","    return wasmobject.exports.stackRestore.apply(null, arguments)","","}","function Ub(){","    return wasmobject.exports.stackSave.apply(null, arguments)","","}","function Sb(){","    return wasmobject.exports.stackAlloc.apply(null, arguments)","","}","function Pb(){","    return wasmobject.exports._malloc.apply(null, arguments)","}","function P() {      // function 20( )","    function p(a) {","        for (var b = 0, c = 0; c \u003c a.length; ++c) {","            var d = a.charCodeAt(c);","            d \u003e= 55296 \u0026\u0026 d \u003c= 57343 \u0026\u0026 (d = 65536 + ((1023 \u0026 d) \u003c\u003c 10) | 1023 \u0026 a.charCodeAt(++c)),","                d \u003c= 127 ? ++b : b += d \u003c= 2047 ? 2 : d \u003c= 65535 ? 3 : d \u003c= 2097151 ? 4 : d \u003c= 67108863 ? 5 : 6","        }","        return b","    }","    function a(a) {","        return a ? a.length \u003e 48 ? a.substr(0, 48) : a : \"\"","    }","    function b() {","        var b = document.URL","            , c = window.navigator.userAgent.toLowerCase()","            , d = \"\";","        document.referrer.length \u003e 0 \u0026\u0026 (d = document.referrer);","        try {","            0 == d.length \u0026\u0026 opener.location.href.length \u003e 0 \u0026\u0026 (d = opener.location.href)","        } catch (e) {}","        var f = window.navigator.appCodeName","            , g = window.navigator.appName","            , h = window.navigator.platform;","        return b = a(b),","            d = a(d),","            c = a(c),","        b + \"|\" + c + \"|\" + d + \"|\" + f + \"|\" + g + \"|\" + h","    }","    var c = b()","        , d = p(c) + 1","        , e = Pb(d);","    return o(c, e, d + 1),","        e","}","function C() {","    return db","}","","var $a = {","    string: function(a) {","        var b = 0;","        if (null !== a \u0026\u0026 void 0 !== a \u0026\u0026 0 !== a) {","            var c = (a.length \u003c\u003c 2) + 1;","            b = Sb(c),","                o(a, b, c)","        }","        return b","    },","    array: function(a) {","        var b = Sb(a.length);","        return K(a, b),","            b","    },","};","","","","","//////////////////////////////// init global var","","var Da = 16;","","var Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va = {","    \"f64-rem\": function(a, b) {","        return a % b","    },","    \"debugger\": function() {}","}, Wa = (new Array(0), 1024) ;","","Na = Oa = Qa = Ra = Sa = Ta = Ua = 0,","    Pa = !1;","var cb = 5242880 , db = 16777216, ab = 65536;","","","var wasmMemory = new WebAssembly.Memory({","    initial: db / ab,","    maximum: db / ab","});","Ea = wasmMemory.buffer;","","w();","Ja[0] = 1668509029;","Ha[1] = 25459;","","var eb = []","    , fb = []","    , gb = []","    , hb = []","    , ib = !1","    , jb = !1;","","Na = Wa,","    Oa = Na + 6928,","    fb.push();","","Oa += 16;","","Ua = d(4),","Qa = Ra = e(Oa),","Sa = Qa + cb,","Ta = e(Sa),","Ja[Ua \u003e\u003e 2] = Ta,","Pa = !0;","","////////////////////////////////// wasm env ///////////////////////////////////////","","var fun_ = function(){};","","wasm_env = {","    abort: fun_,","    assert: fun_,","    enlargeMemory: fun_,","    getTotalMemory: C,","    abortOnCannotGrowMemory: fun_,","    abortStackOverflow: fun_,","    nullFunc_ii: fun_,","    nullFunc_iiii: fun_,","    nullFunc_v: fun_,","    nullFunc_vi: fun_,","    nullFunc_viiii: fun_,","    nullFunc_viiiii: fun_,","    nullFunc_viiiiii: fun_,","    invoke_ii: fun_,","    invoke_iiii: fun_,","    invoke_v: fun_,","    invoke_vi: fun_,","    invoke_viiii: fun_,","    invoke_viiiii: fun_,","    invoke_viiiiii: fun_,","    __ZSt18uncaught_exceptionv: fun_,","    ___cxa_find_matching_catch: fun_,","    ___gxx_personality_v0: fun_,","    ___lock: fun_,","    ___resumeException: fun_,","    ___setErrNo: fun_,","    ___syscall140: fun_,","    ___syscall146: fun_,","    ___syscall54: fun_,","    ___syscall6: fun_,","    ___unlock: fun_,","    _abort: fun_,","    _emscripten_memcpy_big: fun_,","    _get_unicode_str: P,              // function 20( ) =\u003e P( )","    flush_NO_FILESYSTEM: fun_,","    DYNAMICTOP_PTR: 7968,               //Ua","    tempDoublePtr: 7952,                //rb","    STACKTOP: 7984,                     //Ra","    STACK_MAX: 5250864,                 //Sa","","    memoryBase: 1024,","    tableBase: 0,","    memory: wasmMemory,","    table: new WebAssembly.Table({","        initial: 99,","        maximum: 99,","        element: \"anyfunc\"","    })","};","","var importObject = {","    'env': wasm_env,","    'asm2wasm': {","        \"f64-rem\": function(a, b) {","            return a % b","        },","        \"debugger\": function() {}","    },","    'global': {","        NaN: NaN,","        Infinity: 1 / 0","    },","    \"global.Math\": Math,","    // \"parent\": {};","","};","","","","","","///////////////////////////////// load wasm ///////////////////////////////////////","const fs = require('fs');","var wasm_data = fs.readFileSync('./js/tx-ckey.wasm')","var buffer = new Uint8Array(wasm_data);","","var wasmobject = new WebAssembly.Instance(new WebAssembly.Module(buffer), importObject);","","","","// function setnavigator(URL, referrer, userAgent, appCodeName, appName, platform){","//     navigator = {","//         userAgent: \"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36\",","//         appCodeName: \"Mozilla\",","//         appName: \"Netscape\",","//         platform: \"Win32\"","//     };","//     window.navigator = navigator;","//","// }","","","function setdocument(URL, referrer){","    document.URL = URL;","    document.referrer = referrer;","}","","// encryptVer = \"9.1\"","function getckey(platform, appVer, vid, empty_str=\"\", guid, tm){","    var _args = [platform, appVer, vid, empty_str=\"\", guid, tm];","    var c = ['number', 'string', 'string', 'string', 'string', 'number'];","    return i('getckey', 'string', c, _args, undefined)","","}","","","//  playerID, guid","function createGUID(a) {","    a = a || 32;","    for (var b = \"\", c = 1; c \u003c= a; c++) {","        var d = Math.floor(16 * Math.random()).toString(16);","        b += d","    }","    return b","}"],"stylingDirectives":[[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-c1"},{"start":9,"end":68,"cssClass":"pl-s"},{"start":68,"end":69,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-c1"},{"start":14,"end":16,"cssClass":"pl-s"}],[],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-c1"},{"start":14,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":4,"end":13,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":8,"end":17,"cssClass":"pl-c1"},{"start":19,"end":130,"cssClass":"pl-s"},{"start":130,"end":131,"cssClass":"pl-kos"}],[{"start":8,"end":19,"cssClass":"pl-c1"},{"start":21,"end":30,"cssClass":"pl-s"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":8,"end":15,"cssClass":"pl-c1"},{"start":17,"end":27,"cssClass":"pl-s"},{"start":27,"end":28,"cssClass":"pl-kos"}],[{"start":8,"end":16,"cssClass":"pl-c1"},{"start":18,"end":25,"cssClass":"pl-s"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[],[],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[],[],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-v"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":12,"cssClass":"pl-k"},{"start":13,"end":22,"cssClass":"pl-v"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":25,"cssClass":"pl-v"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":8,"end":10,"cssClass":"pl-v"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-k"},{"start":17,"end":27,"cssClass":"pl-v"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":30,"cssClass":"pl-v"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":8,"end":10,"cssClass":"pl-v"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-k"},{"start":17,"end":27,"cssClass":"pl-v"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":30,"cssClass":"pl-v"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":8,"end":10,"cssClass":"pl-v"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-k"},{"start":17,"end":27,"cssClass":"pl-v"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":30,"cssClass":"pl-v"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":8,"end":10,"cssClass":"pl-v"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-k"},{"start":17,"end":28,"cssClass":"pl-v"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":31,"cssClass":"pl-v"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":8,"end":10,"cssClass":"pl-v"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-k"},{"start":17,"end":28,"cssClass":"pl-v"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":31,"cssClass":"pl-v"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":8,"end":10,"cssClass":"pl-v"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-k"},{"start":17,"end":29,"cssClass":"pl-v"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":32,"cssClass":"pl-v"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":8,"end":10,"cssClass":"pl-v"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-k"},{"start":17,"end":29,"cssClass":"pl-v"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":32,"cssClass":"pl-v"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":14,"cssClass":"pl-v"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":13,"cssClass":"pl-v"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":18,"cssClass":"pl-v"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":31,"end":33,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-s1"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-s1"},{"start":6,"end":8,"cssClass":"pl-c1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":16,"cssClass":"pl-v"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":20,"cssClass":"pl-v"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":25,"cssClass":"pl-en"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-s1"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-k"},{"start":13,"end":14,"cssClass":"pl-en"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":23,"cssClass":"pl-s"},{"start":24,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-en"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":39,"end":48,"cssClass":"pl-s"},{"start":49,"end":52,"cssClass":"pl-c1"},{"start":53,"end":54,"cssClass":"pl-s1"},{"start":57,"end":64,"cssClass":"pl-v"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":65,"end":66,"cssClass":"pl-s1"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":70,"end":71,"cssClass":"pl-s1"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":30,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":39,"cssClass":"pl-c1"},{"start":40,"end":46,"cssClass":"pl-c"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":4,"end":66,"cssClass":"pl-c"}],[{"start":4,"end":13,"cssClass":"pl-c"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":16,"cssClass":"pl-k"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-s1"},{"start":39,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":12,"end":15,"cssClass":"pl-k"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":12,"end":42,"cssClass":"pl-c"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":22,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-s1"},{"start":25,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-s1"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":33,"end":35,"cssClass":"pl-v"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-s1"},{"start":44,"end":45,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":27,"cssClass":"pl-s1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-c1"},{"start":6,"end":9,"cssClass":"pl-c1"},{"start":10,"end":11,"cssClass":"pl-s1"},{"start":12,"end":14,"cssClass":"pl-c1"},{"start":15,"end":17,"cssClass":"pl-v"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-s1"}],[],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":16,"end":18,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":17,"cssClass":"pl-s"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":12,"cssClass":"pl-k"},{"start":13,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":8,"end":29,"cssClass":"pl-c"}],[{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":18,"cssClass":"pl-v"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-s1"},{"start":25,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":12,"end":17,"cssClass":"pl-k"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":13,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-s1"},{"start":15,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":12,"end":17,"cssClass":"pl-k"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-s1"},{"start":6,"end":8,"cssClass":"pl-c1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":14,"cssClass":"pl-s"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":16,"cssClass":"pl-k"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":28,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":22,"cssClass":"pl-v"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":35,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":41,"cssClass":"pl-en"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":48,"cssClass":"pl-v"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":52,"cssClass":"pl-v"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":53,"end":61,"cssClass":"pl-en"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-s1"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":65,"end":66,"cssClass":"pl-s1"},{"start":67,"end":68,"cssClass":"pl-c1"},{"start":69,"end":73,"cssClass":"pl-v"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":74,"end":77,"cssClass":"pl-en"},{"start":77,"end":78,"cssClass":"pl-kos"},{"start":78,"end":79,"cssClass":"pl-s1"},{"start":79,"end":80,"cssClass":"pl-kos"},{"start":81,"end":82,"cssClass":"pl-s1"},{"start":82,"end":83,"cssClass":"pl-kos"},{"start":83,"end":84,"cssClass":"pl-kos"},{"start":84,"end":85,"cssClass":"pl-kos"},{"start":85,"end":86,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-s1"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":16,"end":18,"cssClass":"pl-v"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-en"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":12,"cssClass":"pl-k"},{"start":13,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":42,"end":43,"cssClass":"pl-s1"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":46,"end":47,"cssClass":"pl-s1"},{"start":47,"end":48,"cssClass":"pl-kos"},{"start":48,"end":54,"cssClass":"pl-c1"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":56,"end":58,"cssClass":"pl-c1"},{"start":58,"end":59,"cssClass":"pl-s1"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":61,"end":62,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":16,"cssClass":"pl-c1"},{"start":17,"end":22,"cssClass":"pl-c1"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-s1"},{"start":28,"end":30,"cssClass":"pl-c1"},{"start":31,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"}],[{"start":12,"end":15,"cssClass":"pl-k"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":32,"cssClass":"pl-en"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":35,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":21,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":38,"cssClass":"pl-c1"},{"start":39,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":44,"cssClass":"pl-c1"},{"start":45,"end":49,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-c1"},{"start":52,"end":53,"cssClass":"pl-s1"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":16,"cssClass":"pl-c1"},{"start":17,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":12,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":16,"end":21,"cssClass":"pl-k"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":15,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-s1"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-k"},{"start":15,"end":17,"cssClass":"pl-k"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-s1"},{"start":21,"end":23,"cssClass":"pl-c1"},{"start":24,"end":28,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":12,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":16,"end":21,"cssClass":"pl-k"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":15,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-s1"},{"start":29,"end":31,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":33,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-s1"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-k"},{"start":15,"end":17,"cssClass":"pl-k"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-s1"},{"start":21,"end":23,"cssClass":"pl-c1"},{"start":24,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":12,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":16,"end":21,"cssClass":"pl-k"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":15,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-s1"},{"start":29,"end":31,"cssClass":"pl-c1"},{"start":32,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":33,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":40,"end":42,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":33,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-s1"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-k"},{"start":15,"end":17,"cssClass":"pl-k"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-s1"},{"start":21,"end":23,"cssClass":"pl-c1"},{"start":24,"end":31,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":12,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":16,"end":21,"cssClass":"pl-k"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":15,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-s1"},{"start":29,"end":31,"cssClass":"pl-c1"},{"start":32,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":33,"end":35,"cssClass":"pl-c1"},{"start":36,"end":38,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":41,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":33,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":40,"end":42,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":33,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-s1"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-k"},{"start":15,"end":17,"cssClass":"pl-k"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-s1"},{"start":21,"end":23,"cssClass":"pl-c1"},{"start":24,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":12,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":16,"end":21,"cssClass":"pl-k"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":15,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-s1"},{"start":29,"end":31,"cssClass":"pl-c1"},{"start":32,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":33,"end":35,"cssClass":"pl-c1"},{"start":36,"end":38,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":41,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":33,"end":35,"cssClass":"pl-c1"},{"start":36,"end":38,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":41,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":33,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":40,"end":42,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":33,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-s1"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":12,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":16,"end":21,"cssClass":"pl-k"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":15,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-s1"},{"start":29,"end":31,"cssClass":"pl-c1"},{"start":32,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":33,"end":35,"cssClass":"pl-c1"},{"start":36,"end":38,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":41,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":33,"end":35,"cssClass":"pl-c1"},{"start":36,"end":38,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":41,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":33,"end":35,"cssClass":"pl-c1"},{"start":36,"end":38,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-c1"},{"start":41,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":33,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":40,"end":42,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":28,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-c1"},{"start":31,"end":33,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-s1"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-s1"},{"start":6,"end":7,"cssClass":"pl-c1"},{"start":8,"end":9,"cssClass":"pl-s1"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":11,"cssClass":"pl-v"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":42,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":43,"end":48,"cssClass":"pl-en"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":53,"cssClass":"pl-c1"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":55,"end":64,"cssClass":"pl-smi"},{"start":64,"end":65,"cssClass":"pl-kos"}],[],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":11,"cssClass":"pl-v"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":45,"cssClass":"pl-en"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":50,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":52,"end":61,"cssClass":"pl-smi"},{"start":61,"end":62,"cssClass":"pl-kos"}],[],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":11,"cssClass":"pl-v"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":40,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":46,"cssClass":"pl-en"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":51,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":53,"end":62,"cssClass":"pl-smi"},{"start":62,"end":63,"cssClass":"pl-kos"}],[],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":11,"cssClass":"pl-v"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":37,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":43,"cssClass":"pl-en"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":48,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":59,"cssClass":"pl-smi"},{"start":59,"end":60,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-v"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":20,"end":37,"cssClass":"pl-c"}],[{"start":4,"end":12,"cssClass":"pl-k"},{"start":13,"end":14,"cssClass":"pl-en"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":16,"cssClass":"pl-k"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-s1"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":45,"end":47,"cssClass":"pl-c1"},{"start":47,"end":48,"cssClass":"pl-s1"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":50,"end":51,"cssClass":"pl-kos"}],[{"start":12,"end":15,"cssClass":"pl-k"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":32,"cssClass":"pl-en"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":16,"cssClass":"pl-c1"},{"start":17,"end":22,"cssClass":"pl-c1"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-s1"},{"start":28,"end":30,"cssClass":"pl-c1"},{"start":31,"end":36,"cssClass":"pl-c1"},{"start":37,"end":39,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-c1"},{"start":45,"end":50,"cssClass":"pl-c1"},{"start":51,"end":52,"cssClass":"pl-c1"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":55,"end":59,"cssClass":"pl-c1"},{"start":60,"end":61,"cssClass":"pl-c1"},{"start":62,"end":63,"cssClass":"pl-s1"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":65,"end":67,"cssClass":"pl-c1"},{"start":68,"end":70,"cssClass":"pl-c1"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-c1"},{"start":74,"end":78,"cssClass":"pl-c1"},{"start":79,"end":80,"cssClass":"pl-c1"},{"start":81,"end":82,"cssClass":"pl-s1"},{"start":82,"end":83,"cssClass":"pl-kos"},{"start":83,"end":93,"cssClass":"pl-en"},{"start":93,"end":94,"cssClass":"pl-kos"},{"start":94,"end":96,"cssClass":"pl-c1"},{"start":96,"end":97,"cssClass":"pl-s1"},{"start":97,"end":98,"cssClass":"pl-kos"},{"start":98,"end":99,"cssClass":"pl-kos"},{"start":99,"end":100,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":20,"cssClass":"pl-c1"},{"start":21,"end":24,"cssClass":"pl-c1"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":29,"end":30,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-s1"},{"start":35,"end":37,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-s1"},{"start":40,"end":42,"cssClass":"pl-c1"},{"start":43,"end":47,"cssClass":"pl-c1"},{"start":50,"end":51,"cssClass":"pl-c1"},{"start":54,"end":55,"cssClass":"pl-s1"},{"start":56,"end":58,"cssClass":"pl-c1"},{"start":59,"end":64,"cssClass":"pl-c1"},{"start":67,"end":68,"cssClass":"pl-c1"},{"start":71,"end":72,"cssClass":"pl-s1"},{"start":73,"end":75,"cssClass":"pl-c1"},{"start":76,"end":83,"cssClass":"pl-c1"},{"start":86,"end":87,"cssClass":"pl-c1"},{"start":90,"end":91,"cssClass":"pl-s1"},{"start":92,"end":94,"cssClass":"pl-c1"},{"start":95,"end":103,"cssClass":"pl-c1"},{"start":106,"end":107,"cssClass":"pl-c1"},{"start":110,"end":111,"cssClass":"pl-c1"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-s1"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-k"},{"start":13,"end":14,"cssClass":"pl-en"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":30,"end":32,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-s1"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":43,"cssClass":"pl-en"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-c1"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":47,"end":49,"cssClass":"pl-c1"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":53,"end":54,"cssClass":"pl-s1"},{"start":57,"end":59,"cssClass":"pl-s"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-k"},{"start":13,"end":14,"cssClass":"pl-en"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":28,"cssClass":"pl-c1"}],[{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":44,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":56,"cssClass":"pl-en"},{"start":56,"end":57,"cssClass":"pl-kos"},{"start":57,"end":58,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":20,"cssClass":"pl-s"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":8,"end":16,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":26,"end":32,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":37,"end":39,"cssClass":"pl-c1"},{"start":40,"end":41,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-c1"},{"start":45,"end":53,"cssClass":"pl-s1"},{"start":53,"end":54,"cssClass":"pl-kos"},{"start":54,"end":62,"cssClass":"pl-c1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":64,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":25,"cssClass":"pl-c1"},{"start":26,"end":28,"cssClass":"pl-c1"},{"start":29,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":44,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":49,"cssClass":"pl-c1"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":50,"end":56,"cssClass":"pl-c1"},{"start":57,"end":58,"cssClass":"pl-c1"},{"start":59,"end":60,"cssClass":"pl-c1"},{"start":61,"end":63,"cssClass":"pl-c1"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":65,"end":66,"cssClass":"pl-s1"},{"start":67,"end":68,"cssClass":"pl-c1"},{"start":69,"end":75,"cssClass":"pl-s1"},{"start":75,"end":76,"cssClass":"pl-kos"},{"start":76,"end":84,"cssClass":"pl-c1"},{"start":84,"end":85,"cssClass":"pl-kos"},{"start":85,"end":89,"cssClass":"pl-c1"},{"start":89,"end":90,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":15,"cssClass":"pl-k"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":44,"cssClass":"pl-c1"}],[{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":42,"cssClass":"pl-c1"}],[{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":43,"cssClass":"pl-c1"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":15,"cssClass":"pl-s"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":25,"cssClass":"pl-s"},{"start":26,"end":27,"cssClass":"pl-c1"},{"start":28,"end":29,"cssClass":"pl-s1"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":32,"end":35,"cssClass":"pl-s"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-s1"},{"start":40,"end":41,"cssClass":"pl-c1"},{"start":42,"end":45,"cssClass":"pl-s"},{"start":46,"end":47,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-s1"},{"start":50,"end":51,"cssClass":"pl-c1"},{"start":52,"end":55,"cssClass":"pl-s"},{"start":56,"end":57,"cssClass":"pl-c1"},{"start":58,"end":59,"cssClass":"pl-s1"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-en"},{"start":13,"end":14,"cssClass":"pl-kos"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-c1"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":16,"cssClass":"pl-v"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-s1"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":10,"cssClass":"pl-v"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":13,"cssClass":"pl-s1"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":6,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-en"},{"start":12,"end":20,"cssClass":"pl-k"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":16,"cssClass":"pl-c1"},{"start":17,"end":20,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":23,"end":25,"cssClass":"pl-c1"},{"start":26,"end":30,"cssClass":"pl-k"},{"start":31,"end":32,"cssClass":"pl-c1"},{"start":33,"end":36,"cssClass":"pl-c1"},{"start":37,"end":38,"cssClass":"pl-s1"},{"start":39,"end":41,"cssClass":"pl-c1"},{"start":42,"end":43,"cssClass":"pl-c1"},{"start":44,"end":47,"cssClass":"pl-c1"},{"start":48,"end":49,"cssClass":"pl-s1"},{"start":49,"end":50,"cssClass":"pl-kos"},{"start":51,"end":52,"cssClass":"pl-kos"}],[{"start":12,"end":15,"cssClass":"pl-k"},{"start":16,"end":17,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":29,"cssClass":"pl-c1"},{"start":30,"end":32,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-c1"},{"start":38,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":18,"cssClass":"pl-v"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-s1"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":4,"end":9,"cssClass":"pl-en"},{"start":11,"end":19,"cssClass":"pl-k"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":18,"cssClass":"pl-v"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":27,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-v"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-s1"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[],[],[],[],[{"start":0,"end":48,"cssClass":"pl-c"}],[],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":6,"cssClass":"pl-v"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":11,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-kos"}],[],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":6,"cssClass":"pl-v"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":8,"end":10,"cssClass":"pl-v"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":12,"end":14,"cssClass":"pl-v"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":16,"end":18,"cssClass":"pl-v"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":20,"end":22,"cssClass":"pl-v"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":26,"cssClass":"pl-v"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":30,"cssClass":"pl-v"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":34,"cssClass":"pl-v"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":38,"cssClass":"pl-v"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":42,"cssClass":"pl-v"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":44,"end":46,"cssClass":"pl-v"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":48,"end":50,"cssClass":"pl-v"},{"start":50,"end":51,"cssClass":"pl-kos"},{"start":52,"end":54,"cssClass":"pl-v"},{"start":54,"end":55,"cssClass":"pl-kos"},{"start":56,"end":58,"cssClass":"pl-v"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":60,"end":62,"cssClass":"pl-v"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":64,"end":66,"cssClass":"pl-v"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":68,"end":70,"cssClass":"pl-v"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":72,"end":74,"cssClass":"pl-v"},{"start":75,"end":76,"cssClass":"pl-c1"},{"start":77,"end":78,"cssClass":"pl-kos"}],[{"start":4,"end":13,"cssClass":"pl-s"},{"start":15,"end":23,"cssClass":"pl-k"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-s1"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":30,"end":31,"cssClass":"pl-kos"}],[{"start":8,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-s1"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":4,"end":14,"cssClass":"pl-s"},{"start":16,"end":24,"cssClass":"pl-k"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"},{"start":3,"end":5,"cssClass":"pl-v"},{"start":6,"end":7,"cssClass":"pl-c1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":12,"cssClass":"pl-k"},{"start":13,"end":18,"cssClass":"pl-v"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":27,"cssClass":"pl-c1"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"}],[],[{"start":0,"end":2,"cssClass":"pl-v"},{"start":3,"end":4,"cssClass":"pl-c1"},{"start":5,"end":7,"cssClass":"pl-v"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":12,"cssClass":"pl-v"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":17,"cssClass":"pl-v"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":22,"cssClass":"pl-v"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":27,"cssClass":"pl-v"},{"start":28,"end":29,"cssClass":"pl-c1"},{"start":30,"end":32,"cssClass":"pl-v"},{"start":33,"end":34,"cssClass":"pl-c1"},{"start":35,"end":36,"cssClass":"pl-c1"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-v"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":6,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":19,"end":21,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":36,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-c1"},{"start":39,"end":44,"cssClass":"pl-c1"},{"start":44,"end":45,"cssClass":"pl-kos"}],[],[],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":20,"cssClass":"pl-k"},{"start":21,"end":32,"cssClass":"pl-v"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":40,"end":41,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-c1"},{"start":13,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":20,"cssClass":"pl-s1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-c1"},{"start":13,"end":15,"cssClass":"pl-s1"},{"start":16,"end":17,"cssClass":"pl-c1"},{"start":18,"end":20,"cssClass":"pl-s1"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"}],[{"start":0,"end":2,"cssClass":"pl-v"},{"start":3,"end":4,"cssClass":"pl-c1"},{"start":5,"end":15,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[],[{"start":0,"end":1,"cssClass":"pl-en"},{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-kos"}],[{"start":0,"end":2,"cssClass":"pl-v"},{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-c1"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":7,"cssClass":"pl-c1"},{"start":8,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":0,"end":2,"cssClass":"pl-v"},{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":4,"cssClass":"pl-c1"},{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":7,"cssClass":"pl-c1"},{"start":8,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"}],[],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":6,"cssClass":"pl-s1"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-kos"}],[],[{"start":0,"end":2,"cssClass":"pl-v"},{"start":3,"end":4,"cssClass":"pl-c1"},{"start":5,"end":7,"cssClass":"pl-v"},{"start":7,"end":8,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-v"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":9,"end":11,"cssClass":"pl-v"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":4,"end":6,"cssClass":"pl-s1"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":11,"cssClass":"pl-en"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":14,"cssClass":"pl-kos"}],[],[{"start":0,"end":2,"cssClass":"pl-v"},{"start":3,"end":5,"cssClass":"pl-c1"},{"start":6,"end":8,"cssClass":"pl-c1"},{"start":8,"end":9,"cssClass":"pl-kos"}],[],[{"start":0,"end":2,"cssClass":"pl-v"},{"start":3,"end":4,"cssClass":"pl-c1"},{"start":5,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":8,"cssClass":"pl-c1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":0,"end":2,"cssClass":"pl-v"},{"start":3,"end":4,"cssClass":"pl-c1"},{"start":5,"end":7,"cssClass":"pl-v"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":11,"cssClass":"pl-en"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":14,"cssClass":"pl-v"},{"start":14,"end":15,"cssClass":"pl-kos"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":0,"end":2,"cssClass":"pl-v"},{"start":3,"end":4,"cssClass":"pl-c1"},{"start":5,"end":7,"cssClass":"pl-v"},{"start":8,"end":9,"cssClass":"pl-c1"},{"start":10,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":0,"end":2,"cssClass":"pl-v"},{"start":3,"end":4,"cssClass":"pl-c1"},{"start":5,"end":6,"cssClass":"pl-en"},{"start":6,"end":7,"cssClass":"pl-kos"},{"start":7,"end":9,"cssClass":"pl-v"},{"start":9,"end":10,"cssClass":"pl-kos"},{"start":10,"end":11,"cssClass":"pl-kos"}],[{"start":0,"end":2,"cssClass":"pl-v"},{"start":2,"end":3,"cssClass":"pl-kos"},{"start":3,"end":5,"cssClass":"pl-v"},{"start":6,"end":8,"cssClass":"pl-c1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":10,"end":11,"cssClass":"pl-kos"},{"start":12,"end":13,"cssClass":"pl-c1"},{"start":14,"end":16,"cssClass":"pl-v"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":0,"end":2,"cssClass":"pl-v"},{"start":3,"end":4,"cssClass":"pl-c1"},{"start":5,"end":6,"cssClass":"pl-c1"},{"start":6,"end":7,"cssClass":"pl-c1"},{"start":7,"end":8,"cssClass":"pl-kos"}],[],[{"start":0,"end":83,"cssClass":"pl-c"}],[],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":8,"cssClass":"pl-en"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":19,"cssClass":"pl-k"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":12,"cssClass":"pl-kos"}],[{"start":4,"end":9,"cssClass":"pl-c1"},{"start":11,"end":15,"cssClass":"pl-en"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-c1"},{"start":12,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":4,"end":17,"cssClass":"pl-c1"},{"start":19,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":4,"end":18,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-v"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":4,"end":27,"cssClass":"pl-c1"},{"start":29,"end":33,"cssClass":"pl-en"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":4,"end":22,"cssClass":"pl-c1"},{"start":24,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":4,"end":15,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":4,"end":17,"cssClass":"pl-c1"},{"start":19,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":4,"end":14,"cssClass":"pl-c1"},{"start":16,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":4,"end":15,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":4,"end":18,"cssClass":"pl-c1"},{"start":20,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":4,"end":19,"cssClass":"pl-c1"},{"start":21,"end":25,"cssClass":"pl-en"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":4,"end":20,"cssClass":"pl-c1"},{"start":22,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"}],[{"start":4,"end":13,"cssClass":"pl-c1"},{"start":15,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":4,"end":15,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-c1"},{"start":14,"end":18,"cssClass":"pl-en"},{"start":18,"end":19,"cssClass":"pl-kos"}],[{"start":4,"end":13,"cssClass":"pl-c1"},{"start":15,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":4,"end":16,"cssClass":"pl-c1"},{"start":18,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":4,"end":17,"cssClass":"pl-c1"},{"start":19,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":4,"end":18,"cssClass":"pl-c1"},{"start":20,"end":24,"cssClass":"pl-en"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":4,"end":30,"cssClass":"pl-c1"},{"start":32,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":4,"end":30,"cssClass":"pl-c1"},{"start":32,"end":36,"cssClass":"pl-en"},{"start":36,"end":37,"cssClass":"pl-kos"}],[{"start":4,"end":25,"cssClass":"pl-c1"},{"start":27,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"}],[{"start":4,"end":11,"cssClass":"pl-c1"},{"start":13,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"}],[{"start":4,"end":22,"cssClass":"pl-c1"},{"start":24,"end":28,"cssClass":"pl-en"},{"start":28,"end":29,"cssClass":"pl-kos"}],[{"start":4,"end":15,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":4,"end":17,"cssClass":"pl-c1"},{"start":19,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":4,"end":17,"cssClass":"pl-c1"},{"start":19,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":4,"end":16,"cssClass":"pl-c1"},{"start":18,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":4,"end":15,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-en"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":4,"end":13,"cssClass":"pl-c1"},{"start":15,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-c1"},{"start":12,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":4,"end":26,"cssClass":"pl-c1"},{"start":28,"end":32,"cssClass":"pl-en"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":4,"end":20,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-v"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":38,"end":63,"cssClass":"pl-c"}],[{"start":4,"end":23,"cssClass":"pl-c1"},{"start":25,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"}],[{"start":4,"end":18,"cssClass":"pl-c1"},{"start":20,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":40,"end":44,"cssClass":"pl-c"}],[{"start":4,"end":17,"cssClass":"pl-c1"},{"start":19,"end":23,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":40,"end":44,"cssClass":"pl-c"}],[{"start":4,"end":12,"cssClass":"pl-c1"},{"start":14,"end":18,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":40,"end":44,"cssClass":"pl-c"}],[{"start":4,"end":13,"cssClass":"pl-c1"},{"start":15,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":40,"end":44,"cssClass":"pl-c"}],[],[{"start":4,"end":14,"cssClass":"pl-c1"},{"start":16,"end":20,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-kos"}],[{"start":4,"end":13,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-c1"},{"start":12,"end":22,"cssClass":"pl-s1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":4,"end":9,"cssClass":"pl-c1"},{"start":11,"end":14,"cssClass":"pl-k"},{"start":15,"end":26,"cssClass":"pl-v"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":32,"cssClass":"pl-c1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":34,"cssClass":"pl-kos"}],[{"start":8,"end":15,"cssClass":"pl-c1"},{"start":17,"end":19,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":8,"end":15,"cssClass":"pl-c1"},{"start":17,"end":19,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":8,"end":15,"cssClass":"pl-c1"},{"start":17,"end":26,"cssClass":"pl-s"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":16,"cssClass":"pl-s1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":4,"end":9,"cssClass":"pl-s"},{"start":11,"end":19,"cssClass":"pl-s1"},{"start":19,"end":20,"cssClass":"pl-kos"}],[{"start":4,"end":14,"cssClass":"pl-s"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":8,"end":17,"cssClass":"pl-s"},{"start":19,"end":27,"cssClass":"pl-k"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":12,"end":18,"cssClass":"pl-k"},{"start":19,"end":20,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-c1"},{"start":23,"end":24,"cssClass":"pl-s1"}],[{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":10,"cssClass":"pl-kos"}],[{"start":8,"end":18,"cssClass":"pl-s"},{"start":20,"end":28,"cssClass":"pl-k"},{"start":28,"end":29,"cssClass":"pl-kos"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-s"},{"start":14,"end":15,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-v"},{"start":16,"end":17,"cssClass":"pl-kos"}],[{"start":8,"end":16,"cssClass":"pl-c1"},{"start":18,"end":19,"cssClass":"pl-c1"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-c1"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":5,"end":6,"cssClass":"pl-kos"}],[{"start":4,"end":17,"cssClass":"pl-s"},{"start":19,"end":23,"cssClass":"pl-v"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":4,"end":20,"cssClass":"pl-c"}],[],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[],[],[],[],[],[{"start":0,"end":83,"cssClass":"pl-c"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":8,"cssClass":"pl-s1"},{"start":9,"end":10,"cssClass":"pl-c1"},{"start":11,"end":18,"cssClass":"pl-en"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":23,"cssClass":"pl-s"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":18,"cssClass":"pl-s1"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":51,"cssClass":"pl-s"},{"start":51,"end":52,"cssClass":"pl-kos"}],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":10,"cssClass":"pl-s1"},{"start":11,"end":12,"cssClass":"pl-c1"},{"start":13,"end":16,"cssClass":"pl-k"},{"start":17,"end":27,"cssClass":"pl-v"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":38,"end":39,"cssClass":"pl-kos"}],[],[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":20,"cssClass":"pl-k"},{"start":21,"end":32,"cssClass":"pl-v"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":33,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":42,"end":45,"cssClass":"pl-k"},{"start":46,"end":57,"cssClass":"pl-v"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":64,"cssClass":"pl-c1"},{"start":64,"end":65,"cssClass":"pl-kos"},{"start":65,"end":71,"cssClass":"pl-s1"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-kos"},{"start":74,"end":86,"cssClass":"pl-s1"},{"start":86,"end":87,"cssClass":"pl-kos"},{"start":87,"end":88,"cssClass":"pl-kos"}],[],[],[],[{"start":0,"end":83,"cssClass":"pl-c"}],[{"start":0,"end":20,"cssClass":"pl-c"}],[{"start":0,"end":134,"cssClass":"pl-c"}],[{"start":0,"end":34,"cssClass":"pl-c"}],[{"start":0,"end":31,"cssClass":"pl-c"}],[{"start":0,"end":28,"cssClass":"pl-c"}],[{"start":0,"end":9,"cssClass":"pl-c"}],[{"start":0,"end":36,"cssClass":"pl-c"}],[{"start":0,"end":2,"cssClass":"pl-c"}],[{"start":0,"end":4,"cssClass":"pl-c"}],[],[],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":20,"cssClass":"pl-en"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":24,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":16,"cssClass":"pl-c1"},{"start":17,"end":18,"cssClass":"pl-c1"},{"start":19,"end":22,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-kos"}],[{"start":4,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":21,"cssClass":"pl-c1"},{"start":22,"end":23,"cssClass":"pl-c1"},{"start":24,"end":32,"cssClass":"pl-s1"},{"start":32,"end":33,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":0,"end":21,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":38,"cssClass":"pl-s1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":49,"cssClass":"pl-s1"},{"start":49,"end":50,"cssClass":"pl-c1"},{"start":50,"end":52,"cssClass":"pl-s"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":58,"cssClass":"pl-s1"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":60,"end":62,"cssClass":"pl-s1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":64,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":25,"cssClass":"pl-s1"},{"start":25,"end":26,"cssClass":"pl-kos"},{"start":27,"end":33,"cssClass":"pl-s1"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":35,"end":38,"cssClass":"pl-s1"},{"start":38,"end":39,"cssClass":"pl-kos"},{"start":40,"end":49,"cssClass":"pl-s1"},{"start":49,"end":50,"cssClass":"pl-c1"},{"start":50,"end":52,"cssClass":"pl-s"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":58,"cssClass":"pl-s1"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":60,"end":62,"cssClass":"pl-s1"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":64,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":11,"cssClass":"pl-c1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":21,"cssClass":"pl-s"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":31,"cssClass":"pl-s"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":33,"end":41,"cssClass":"pl-s"},{"start":41,"end":42,"cssClass":"pl-kos"},{"start":43,"end":51,"cssClass":"pl-s"},{"start":51,"end":52,"cssClass":"pl-kos"},{"start":53,"end":61,"cssClass":"pl-s"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":63,"end":71,"cssClass":"pl-s"},{"start":71,"end":72,"cssClass":"pl-kos"},{"start":72,"end":73,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-en"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":22,"cssClass":"pl-s"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":24,"end":32,"cssClass":"pl-s"},{"start":32,"end":33,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-s1"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":37,"end":42,"cssClass":"pl-s1"},{"start":42,"end":43,"cssClass":"pl-kos"},{"start":44,"end":53,"cssClass":"pl-c1"},{"start":53,"end":54,"cssClass":"pl-kos"}],[],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[],[{"start":0,"end":18,"cssClass":"pl-c"}],[{"start":0,"end":8,"cssClass":"pl-k"},{"start":9,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-s1"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":23,"end":24,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-s1"},{"start":6,"end":7,"cssClass":"pl-c1"},{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":12,"cssClass":"pl-c1"},{"start":13,"end":15,"cssClass":"pl-c1"},{"start":15,"end":16,"cssClass":"pl-kos"}],[{"start":4,"end":7,"cssClass":"pl-k"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":12,"cssClass":"pl-k"},{"start":13,"end":14,"cssClass":"pl-s1"},{"start":15,"end":16,"cssClass":"pl-c1"},{"start":17,"end":19,"cssClass":"pl-s"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":21,"end":22,"cssClass":"pl-s1"},{"start":23,"end":24,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-c1"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":28,"end":29,"cssClass":"pl-s1"},{"start":30,"end":32,"cssClass":"pl-c1"},{"start":33,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":36,"end":37,"cssClass":"pl-s1"},{"start":37,"end":39,"cssClass":"pl-c1"},{"start":39,"end":40,"cssClass":"pl-kos"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":8,"end":11,"cssClass":"pl-k"},{"start":12,"end":13,"cssClass":"pl-s1"},{"start":14,"end":15,"cssClass":"pl-c1"},{"start":16,"end":20,"cssClass":"pl-v"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":26,"cssClass":"pl-en"},{"start":26,"end":27,"cssClass":"pl-kos"},{"start":27,"end":29,"cssClass":"pl-c1"},{"start":30,"end":31,"cssClass":"pl-c1"},{"start":32,"end":36,"cssClass":"pl-v"},{"start":36,"end":37,"cssClass":"pl-kos"},{"start":37,"end":43,"cssClass":"pl-en"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":44,"end":45,"cssClass":"pl-kos"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":55,"cssClass":"pl-en"},{"start":55,"end":56,"cssClass":"pl-kos"},{"start":56,"end":58,"cssClass":"pl-c1"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":59,"end":60,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-s1"},{"start":10,"end":12,"cssClass":"pl-c1"},{"start":13,"end":14,"cssClass":"pl-s1"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":4,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-s1"}],[{"start":0,"end":1,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/hjdhnx/dr_py/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false,"repoAlertsPath":"/hjdhnx/dr_py/security/dependabot","repoSecurityAndAnalysisPath":"/hjdhnx/dr_py/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"getck_vqq.js","displayUrl":"https://github.com/hjdhnx/dr_py/blob/main/libs/parse/getck_vqq.js?raw=true","headerInfo":{"blobSize":"9.14 KB","deleteInfo":{"deleteTooltip":"Fork this repository and delete the file"},"editInfo":{"editTooltip":"Fork this repository and edit the file"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"ca58b6c","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fhjdhnx%2Fdr_py%2Fblob%2Fmain%2Flibs%2Fparse%2Fgetck_vqq.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"384","truncatedSloc":"336"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","languageID":183,"large":false,"loggedIn":true,"newDiscussionPath":"/hjdhnx/dr_py/discussions/new","newIssuePath":"/hjdhnx/dr_py/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/hjdhnx/dr_py/blob/main/libs/parse/getck_vqq.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/hjdhnx/dr_py/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"rawBlobUrl":"https://github.com/hjdhnx/dr_py/raw/main/libs/parse/getck_vqq.js","renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"hjdhnx","repoName":"dr_py","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timedOut":false,"notAnalyzed":false,"symbols":[{"name":"w","kind":"function","identStart":407,"identEnd":408,"extentStart":398,"extentEnd":679,"fullyQualifiedName":"w","identUtf16":{"start":{"lineNumber":20,"utf16Col":9},"end":{"lineNumber":20,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":20,"utf16Col":0},"end":{"lineNumber":29,"utf16Col":1}}},{"name":"d","kind":"function","identStart":689,"identEnd":690,"extentStart":680,"extentEnd":758,"fullyQualifiedName":"d","identUtf16":{"start":{"lineNumber":30,"utf16Col":9},"end":{"lineNumber":30,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":30,"utf16Col":0},"end":{"lineNumber":34,"utf16Col":1}}},{"name":"e","kind":"function","identStart":768,"identEnd":769,"extentStart":759,"extentEnd":849,"fullyQualifiedName":"e","identUtf16":{"start":{"lineNumber":35,"utf16Col":9},"end":{"lineNumber":35,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":35,"utf16Col":0},"end":{"lineNumber":39,"utf16Col":1}}},{"name":"i","kind":"function","identStart":859,"identEnd":860,"extentStart":850,"extentEnd":1447,"fullyQualifiedName":"i","identUtf16":{"start":{"lineNumber":40,"utf16Col":9},"end":{"lineNumber":40,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":40,"utf16Col":0},"end":{"lineNumber":61,"utf16Col":1}}},{"name":"f","kind":"function","identStart":890,"identEnd":891,"extentStart":881,"extentEnd":974,"fullyQualifiedName":"f","identUtf16":{"start":{"lineNumber":41,"utf16Col":13},"end":{"lineNumber":41,"utf16Col":14}},"extentUtf16":{"start":{"lineNumber":41,"utf16Col":4},"end":{"lineNumber":43,"utf16Col":5}}},{"name":"k","kind":"function","identStart":1458,"identEnd":1459,"extentStart":1449,"extentEnd":2054,"fullyQualifiedName":"k","identUtf16":{"start":{"lineNumber":63,"utf16Col":9},"end":{"lineNumber":63,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":63,"utf16Col":0},"end":{"lineNumber":88,"utf16Col":1}}},{"name":"o","kind":"function","identStart":2064,"identEnd":2065,"extentStart":2055,"extentEnd":2104,"fullyQualifiedName":"o","identUtf16":{"start":{"lineNumber":89,"utf16Col":9},"end":{"lineNumber":89,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":89,"utf16Col":0},"end":{"lineNumber":91,"utf16Col":1}}},{"name":"n","kind":"function","identStart":2114,"identEnd":2115,"extentStart":2105,"extentEnd":3770,"fullyQualifiedName":"n","identUtf16":{"start":{"lineNumber":92,"utf16Col":9},"end":{"lineNumber":92,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":92,"utf16Col":0},"end":{"lineNumber":144,"utf16Col":1}}},{"name":"Tb","kind":"function","identStart":3780,"identEnd":3782,"extentStart":3771,"extentEnd":3854,"fullyQualifiedName":"Tb","identUtf16":{"start":{"lineNumber":145,"utf16Col":9},"end":{"lineNumber":145,"utf16Col":11}},"extentUtf16":{"start":{"lineNumber":145,"utf16Col":0},"end":{"lineNumber":148,"utf16Col":1}}},{"name":"Ub","kind":"function","identStart":3864,"identEnd":3866,"extentStart":3855,"extentEnd":3935,"fullyQualifiedName":"Ub","identUtf16":{"start":{"lineNumber":149,"utf16Col":9},"end":{"lineNumber":149,"utf16Col":11}},"extentUtf16":{"start":{"lineNumber":149,"utf16Col":0},"end":{"lineNumber":152,"utf16Col":1}}},{"name":"Sb","kind":"function","identStart":3945,"identEnd":3947,"extentStart":3936,"extentEnd":4017,"fullyQualifiedName":"Sb","identUtf16":{"start":{"lineNumber":153,"utf16Col":9},"end":{"lineNumber":153,"utf16Col":11}},"extentUtf16":{"start":{"lineNumber":153,"utf16Col":0},"end":{"lineNumber":156,"utf16Col":1}}},{"name":"Pb","kind":"function","identStart":4027,"identEnd":4029,"extentStart":4018,"extentEnd":4095,"fullyQualifiedName":"Pb","identUtf16":{"start":{"lineNumber":157,"utf16Col":9},"end":{"lineNumber":157,"utf16Col":11}},"extentUtf16":{"start":{"lineNumber":157,"utf16Col":0},"end":{"lineNumber":159,"utf16Col":1}}},{"name":"P","kind":"function","identStart":4105,"identEnd":4106,"extentStart":4096,"extentEnd":5263,"fullyQualifiedName":"P","identUtf16":{"start":{"lineNumber":160,"utf16Col":9},"end":{"lineNumber":160,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":160,"utf16Col":0},"end":{"lineNumber":193,"utf16Col":1}}},{"name":"p","kind":"function","identStart":4147,"identEnd":4148,"extentStart":4138,"extentEnd":4488,"fullyQualifiedName":"p","identUtf16":{"start":{"lineNumber":161,"utf16Col":13},"end":{"lineNumber":161,"utf16Col":14}},"extentUtf16":{"start":{"lineNumber":161,"utf16Col":4},"end":{"lineNumber":168,"utf16Col":5}}},{"name":"a","kind":"function","identStart":4502,"identEnd":4503,"extentStart":4493,"extentEnd":4574,"fullyQualifiedName":"a","identUtf16":{"start":{"lineNumber":169,"utf16Col":13},"end":{"lineNumber":169,"utf16Col":14}},"extentUtf16":{"start":{"lineNumber":169,"utf16Col":4},"end":{"lineNumber":171,"utf16Col":5}}},{"name":"b","kind":"function","identStart":4588,"identEnd":4589,"extentStart":4579,"extentEnd":5164,"fullyQualifiedName":"b","identUtf16":{"start":{"lineNumber":172,"utf16Col":13},"end":{"lineNumber":172,"utf16Col":14}},"extentUtf16":{"start":{"lineNumber":172,"utf16Col":4},"end":{"lineNumber":187,"utf16Col":5}}},{"name":"C","kind":"function","identStart":5273,"identEnd":5274,"extentStart":5264,"extentEnd":5294,"fullyQualifiedName":"C","identUtf16":{"start":{"lineNumber":194,"utf16Col":9},"end":{"lineNumber":194,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":194,"utf16Col":0},"end":{"lineNumber":196,"utf16Col":1}}},{"name":"string","kind":"function","identStart":5311,"identEnd":5317,"extentStart":5311,"extentEnd":5528,"fullyQualifiedName":"string","identUtf16":{"start":{"lineNumber":199,"utf16Col":4},"end":{"lineNumber":199,"utf16Col":10}},"extentUtf16":{"start":{"lineNumber":199,"utf16Col":4},"end":{"lineNumber":207,"utf16Col":5}}},{"name":"array","kind":"function","identStart":5534,"identEnd":5539,"extentStart":5534,"extentEnd":5628,"fullyQualifiedName":"array","identUtf16":{"start":{"lineNumber":208,"utf16Col":4},"end":{"lineNumber":208,"utf16Col":9}},"extentUtf16":{"start":{"lineNumber":208,"utf16Col":4},"end":{"lineNumber":212,"utf16Col":5}}},{"name":"fun_","kind":"function","identStart":6467,"identEnd":6471,"extentStart":6467,"extentEnd":6486,"fullyQualifiedName":"fun_","identUtf16":{"start":{"lineNumber":266,"utf16Col":4},"end":{"lineNumber":266,"utf16Col":8}},"extentUtf16":{"start":{"lineNumber":266,"utf16Col":4},"end":{"lineNumber":266,"utf16Col":23}}},{"name":"setdocument","kind":"function","identStart":8781,"identEnd":8792,"extentStart":8772,"extentEnd":8868,"fullyQualifiedName":"setdocument","identUtf16":{"start":{"lineNumber":361,"utf16Col":9},"end":{"lineNumber":361,"utf16Col":20}},"extentUtf16":{"start":{"lineNumber":361,"utf16Col":0},"end":{"lineNumber":364,"utf16Col":1}}},{"name":"getckey","kind":"function","identStart":8901,"identEnd":8908,"extentStart":8892,"extentEnd":9153,"fullyQualifiedName":"getckey","identUtf16":{"start":{"lineNumber":367,"utf16Col":9},"end":{"lineNumber":367,"utf16Col":16}},"extentUtf16":{"start":{"lineNumber":367,"utf16Col":0},"end":{"lineNumber":372,"utf16Col":1}}},{"name":"createGUID","kind":"function","identStart":9184,"identEnd":9194,"extentStart":9175,"extentEnd":9356,"fullyQualifiedName":"createGUID","identUtf16":{"start":{"lineNumber":376,"utf16Col":9},"end":{"lineNumber":376,"utf16Col":19}},"extentUtf16":{"start":{"lineNumber":376,"utf16Col":0},"end":{"lineNumber":384,"utf16Col":0}}}]}},"copilotInfo":{"documentationUrl":"https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot-for-individuals","notices":{"codeViewPopover":{"dismissed":false,"dismissPath":"/settings/dismiss-notice/code_view_copilot_popover"}},"userAccess":{"accessAllowed":false,"hasSubscriptionEnded":false,"orgHasCFBAccess":false,"userHasCFIAccess":false,"userHasOrgs":false,"userIsOrgAdmin":false,"userIsOrgMember":false,"business":null,"featureRequestInfo":null}},"csrf_tokens":{"/hjdhnx/dr_py/branches":{"post":"OA7ZqvX-N1Pm7mD_TPFkrgphwdfB4he7Y67pRhyBh8FvAREcRe3Re_KBRXvTw7nU_snNAeUbRcL7LQUPt7o8QA"},"/repos/preferences":{"post":"IYKfNFT9HtTY2AaNpXotEFFj1raj4hZngdfDuZCCdij0-TpGYs4bVJiNtopF4k7WcCqjDalKooLfV-OCTP2NQg"}}},"title":"dr_py/libs/parse/getck_vqq.js at main · hjdhnx/dr_py","appPayload":{"helpUrl":"https://docs.github.com","findFileWorkerPath":"/assets-cdn/worker/find-file-worker-83d4418b406d.js","findInFileWorkerPath":"/assets-cdn/worker/find-in-file-worker-bcc43f789400.js","githubDevUrl":"https://github.dev/","enabled_features":{"code_nav_ui_events":false,"copilot_conversational_ux":false,"copilot_conversational_ux_streaming":false,"copilot_popover_file_editor_header":true,"copilot_smell_icebreaker_ux":false}}}</script>
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

