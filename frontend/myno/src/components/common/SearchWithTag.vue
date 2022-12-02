<template>
  <!--태그와 함께 검색어를 가짐 (store로 관리)-->
  <div class="left-menu-header col">
    <ul>
      <li>
        <form class="form-inline search-form">
          <div class="search-bg">
            <i class="fa fa-search"></i>
            <input
              class="form-control-plaintext"
              placeholder="Search here....."
              data-bs-original-title=""
              title=""
            />
          </div>
        </form>
        <span class="d-sm-none mobile-search search-bg"
          ><i class="fa fa-search"></i
        ></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
