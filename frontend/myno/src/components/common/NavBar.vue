<template>
  <header class="main-nav close_icon">
    <div class="sidebar-user text-center">
      <a class="setting-primary" @click="$router.push({ name: 'usermodify' })"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-settings"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
          ></path></svg></a
      ><img
        class="img-90 rounded-circle"
        src="/assets/images/dashboard/1.png"
        alt=""
      />
      <div class="badge-bottom">
        <span class="badge badge-primary">Level 10</span>
      </div>
      <a href="user-profile.html"> <h6 class="mt-3 f-14 f-w-600">Name</h6></a>
      <p class="mb-0 font-roboto">Reader</p>
      <ul>
        <li>
          <span><span class="counter">19.8</span>k</span>
          <p>Follow</p>
        </li>
        <li>
          <span>2 year</span>
          <p>Experince</p>
        </li>
        <li>
          <span><span class="counter">95.2</span>k</span>
          <p>Follower</p>
        </li>
      </ul>
    </div>
    <nav>
      <div class="main-navbar">
        <div class="left-arrow disabled" id="left-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </div>
        <div id="mainnav">
          <ul class="nav-menu custom-scrollbar" style="display: block">
            <li class="back-btn">
              <div class="mobile-back text-end">
                <span>Back</span
                ><i class="fa fa-angle-right ps-2" aria-hidden="true"></i>
              </div>
            </li>

            <li class="dropdown">
              <a class="nav-link menu-title active" href="javascript:void(0)"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home"
                >
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  ></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline></svg
                ><span>Dashboard</span>
                <div class="according-menu">
                  <i class="fa fa-angle-down"></i></div
              ></a>
              <ul class="nav-submenu menu-content" style="display: block">
                <li><a href="index.html" class="active">Default</a></li>
                <li><a href="dashboard-02.html">Ecommerce</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="nav-link menu-title" href="javascript:void(0)"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-airplay"
                >
                  <path
                    d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
                  ></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon></svg
                ><span>Widgets</span>
                <div class="according-menu">
                  <i class="fa fa-angle-right"></i></div
              ></a>
              <ul class="nav-submenu menu-content" style="display: none">
                <li><a href="general-widget.html">General</a></li>
                <li><a href="chart-widget.html">Chart</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="nav-link menu-title" href="javascript:void(0)"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-layout"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line></svg
                ><span>Page layout</span>
                <div class="according-menu">
                  <i class="fa fa-angle-right"></i></div
              ></a>
              <ul class="nav-submenu menu-content" style="display: none">
                <li><a href="box-layout.html">Boxed</a></li>
                <li><a href="layout-rtl.html">RTL</a></li>
                <li><a href="layout-dark.html">Dark</a></li>
                <li><a href="footer-light.html">Footer Light</a></li>
                <li><a href="footer-dark.html">Footer Dark</a></li>
                <li><a href="footer-fixed.html">Footer Fixed</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="right-arrow" id="right-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
