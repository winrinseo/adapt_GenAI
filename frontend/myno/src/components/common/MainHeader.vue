<template>
  <div class="page-main-header close_icon">
    <div class="main-header-right row m-0">
      <div class="main-header-left">
        <div class="dark-logo-wrapper">
          <a href="index.html" data-bs-original-title="" title=""
            ><img
              class="img-fluid"
              :src="$logoUrl"
              alt=""
              style="width: 70%; height: 70%"
          /></a>
        </div>
        <div class="toggle-sidebar">
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
            class="feather feather-align-center status_toggle middle"
            id="sidebar-toggle"
          >
            <line x1="18" y1="10" x2="6" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="18" y1="18" x2="6" y2="18"></line>
          </svg>
        </div>
      </div>
      <search-with-tag></search-with-tag>
      <div class="nav-right col pull-right right-menu p-0">
        <ul class="nav-menus">
          <li>
            <a
              class="text-dark"
              href="#!"
              onclick="javascript:toggleFullScreen()"
              data-bs-original-title=""
              title=""
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
                class="feather feather-maximize"
              >
                <path
                  d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                ></path></svg
            ></a>
          </li>
          <li class="onhover-dropdown">
            <div class="bookmark-box">
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
                class="feather feather-star"
              >
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                ></polygon>
              </svg>
            </div>
            <div class="bookmark-dropdown onhover-show-div">
              <div class="form-group mb-0">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"
                      ><i class="fa fa-search"></i
                    ></span>
                  </div>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Search for bookmark..."
                    data-bs-original-title=""
                    title=""
                  />
                </div>
              </div>
              <ul class="m-t-5">
                <li class="add-to-bookmark">
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
                    class="feather feather-inbox bookmark-icon"
                  >
                    <polyline
                      points="22 12 16 12 14 15 10 15 8 12 2 12"
                    ></polyline>
                    <path
                      d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                    ></path></svg
                  >Email<span class="pull-right"
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
                      class="feather feather-star"
                    >
                      <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      ></polygon></svg
                  ></span>
                </li>
                <li class="add-to-bookmark">
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
                    class="feather feather-message-square bookmark-icon"
                  >
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path></svg
                  >Chat<span class="pull-right"
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
                      class="feather feather-star"
                    >
                      <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      ></polygon></svg
                  ></span>
                </li>
                <li class="add-to-bookmark">
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
                    class="feather feather-command bookmark-icon"
                  >
                    <path
                      d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                    ></path></svg
                  >Feather Icon<span class="pull-right"
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
                      class="feather feather-star"
                    >
                      <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      ></polygon></svg
                  ></span>
                </li>
                <li class="add-to-bookmark">
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
                    class="feather feather-airplay bookmark-icon"
                  >
                    <path
                      d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
                    ></path>
                    <polygon points="12 15 17 21 7 21 12 15"></polygon></svg
                  >Widgets<span class="pull-right"
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
                      class="feather feather-star"
                    >
                      <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      ></polygon></svg
                  ></span>
                </li>
              </ul>
            </div>
          </li>
          <li class="onhover-dropdown">
            <div class="notification-box">
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
                class="feather feather-bell"
              >
                <path
                  d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"
                ></path></svg
              ><span class="dot-animated"></span>
            </div>
            <ul class="notification-dropdown onhover-show-div">
              <li>
                <p class="f-w-700 mb-0">
                  You have 3 Notifications<span
                    class="pull-right badge badge-primary badge-pill"
                    >4</span
                  >
                </p>
              </li>
              <li class="noti-primary">
                <div class="media">
                  <span class="notification-bg bg-light-primary"
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
                      class="feather feather-activity"
                    >
                      <polyline
                        points="22 12 18 12 15 21 9 3 6 12 2 12"
                      ></polyline></svg
                  ></span>
                  <div class="media-body">
                    <p>Delivery processing</p>
                    <span>10 minutes ago</span>
                  </div>
                </div>
              </li>
              <li class="noti-secondary">
                <div class="media">
                  <span class="notification-bg bg-light-secondary"
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
                      class="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline></svg
                  ></span>
                  <div class="media-body">
                    <p>Order Complete</p>
                    <span>1 hour ago</span>
                  </div>
                </div>
              </li>
              <li class="noti-success">
                <div class="media">
                  <span class="notification-bg bg-light-success"
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
                      class="feather feather-file-text"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                      ></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline></svg
                  ></span>
                  <div class="media-body">
                    <p>Tickets Generated</p>
                    <span>3 hour ago</span>
                  </div>
                </div>
              </li>
              <li class="noti-danger">
                <div class="media">
                  <span class="notification-bg bg-light-danger"
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
                      class="feather feather-user-check"
                    >
                      <path
                        d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <polyline points="17 11 19 13 23 9"></polyline></svg
                  ></span>
                  <div class="media-body">
                    <p>Delivery Complete</p>
                    <span>6 hour ago</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <div class="mode"><i class="fa fa-moon-o"></i></div>
          </li>
          <li class="onhover-dropdown">
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
              class="feather feather-message-square"
            >
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              ></path>
            </svg>
            <ul class="chat-dropdown onhover-show-div">
              <li>
                <div class="media">
                  <img
                    class="img-fluid rounded-circle me-3"
                    src="/assets/images/user/4.jpg"
                    alt=""
                  />
                  <div class="media-body">
                    <span>Ain Chavez</span>
                    <p class="f-12 light-font">
                      Lorem Ipsum is simply dummy...
                    </p>
                  </div>
                  <p class="f-12">32 mins ago</p>
                </div>
              </li>
              <li>
                <div class="media">
                  <img
                    class="img-fluid rounded-circle me-3"
                    src="/assets/images/user/1.jpg"
                    alt=""
                  />
                  <div class="media-body">
                    <span>Erica Hughes</span>
                    <p class="f-12 light-font">
                      Lorem Ipsum is simply dummy...
                    </p>
                  </div>
                  <p class="f-12">58 mins ago</p>
                </div>
              </li>
              <li>
                <div class="media">
                  <img
                    class="img-fluid rounded-circle me-3"
                    src="/assets/images/user/2.jpg"
                    alt=""
                  />
                  <div class="media-body">
                    <span>Kori Thomas</span>
                    <p class="f-12 light-font">
                      Lorem Ipsum is simply dummy...
                    </p>
                  </div>
                  <p class="f-12">1 hr ago</p>
                </div>
              </li>
              <li class="text-center">
                <a
                  class="f-w-700"
                  href="javascript:void(0)"
                  data-bs-original-title=""
                  title=""
                  >See All
                </a>
              </li>
            </ul>
          </li>
          <li class="onhover-dropdown p-0">
            <button
              class="btn btn-primary-light"
              type="button"
              data-bs-original-title=""
              title=""
            >
              <a href="login_two.html" data-bs-original-title="" title=""
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
                  class="feather feather-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line></svg
                >Log out</a
              >
            </button>
          </li>
        </ul>
      </div>
      <div class="d-lg-none mobile-toggle pull-right w-auto">
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
          class="feather feather-more-horizontal"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import SearchWithTag from "./SearchWithTag.vue";
export default {
  components: {
    SearchWithTag,
  },
};
</script>

<style></style>
