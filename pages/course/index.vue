<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部课程</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">课程类别</span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li>
                  <a title="全部" href="#">全部</a>
                </li>
                <li v-for="(subject,index) in data.subjects" :key="index">
                  <a title="数据库" href="#" @click.prevent="gotoPage(1)">{{subject.title}}</a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="c-999 fsize14"></span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li>
                  <a title="职称英语" href="#">职称英语</a>
                </li>
                <li>
                  <a title="英语四级" href="#">英语四级</a>
                </li>
                <li>
                  <a title="英语六级" href="#">英语六级</a>
                </li>
              </ul>
            </dd>
          </dl>
          <div class="clear"></div>
        </section>
        <div class="js-wrap">
          <section class="fr">
            <span class="c-ccc">
              <i class="c-master f-fM">1</i>/
              <i class="c-666 f-fM">1</i>
            </span>
          </section>
          <section class="fl">
            <ol class="js-tap clearfix">
              <li>
                <a title="关注度" href="#">关注度</a>
              </li>
              <li>
                <a title="最新" href="#">最新</a>
              </li>
              <li class="current bg-orange">
                <a title="价格" href="#">价格&nbsp;
                  <span>↓</span>
                </a>
              </li>
            </ol>
          </section>
        </div>
        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="data.courses.length === 0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article class="comm-course-list">
            <ul class="of" id="bna">
              <li v-for="(course,index) in data.courses">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img src="~/assets/photo/course/1442295592705.jpg" class="img-responsive" alt="听力口语">
                    <div class="cc-mask">
                      <a :href="'/course/' + course.id" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a :href="'/course/' + course.id" :title="course.title" class="course-title fsize18 c-333">{{course.title}}</a>
                  </h3>
                  <section class="mt10 hLh20 of">
                    <span class="fr jgTag bg-green">
                      <i class="c-fff fsize12 f-fA">{{course.price}} 元</i>
                    </span>
                    <span class="fl jgAttr c-ccc f-fA">
                      <i class="c-999 f-fA">{{course.buyCount}}</i>
                      |
                      <i class="c-999 f-fA">{{course.viewCount}}</i>
                    </span>
                  </section>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <a :class="{undisable:data.current == 1}" title @click.prevent="gotoPage(1)">首</a>
            <a id="backpage" v-if="data.current != 1" href="#" title @click.prevent="gotoPage(data.current - 1)">&lt;</a>
            <a href="#" title :class="{current:data.current == page}" v-for="page in data.pages" :key="page" @click.prevent="gotoPage(page)">{{page}}</a>
            <a id="nextpage" v-if="data.current != data.pages" href="#" title @click.prevent="gotoPage(data.current + 1)">&gt;</a>
            <a href="#" title @click.prevent="gotoPage(data.pages)">末</a>
            <div class="clear"></div>
          </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template>
<script>
  import course from "../../api/course";
  export default {
    asyncData({params, error}){
      return course.pageList(1,8)
        .then(response => {
          return {data: response.data.data}
        })
    },
    methods: {
      gotoPage(page){
        course.pageList(page,8)
          .then(response => {
            this.data = response.data.data
          })
      }
    }
  }
</script>
