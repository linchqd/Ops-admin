<template>
  <div class="dashboard-container">
    <div class="dashboard-main">
      <div class="cluster-overview">集群概览</div>
      <div class="cluster-info">
        <div class="cluster-info-name">集群名称: <span>-</span></div>
        <div class="cluster-info-desc">集群简介: <span>-</span></div>
      </div>
      <div class="cluster-assert">
        <div>
          <div class="cluster-assert-server">
            <div class="cluster-assert-main">
              <div class="all">
                <div><span>节点</span></div>
                <div><span>全部节点</span></div>
              </div>
              <div class="check">
                <div>
                  <div><span>总数</span></div>
                  <div><span class="total">10</span></div>
                </div>
                <div>
                  <div><span>健康数</span></div>
                  <div><span class="health">10</span></div>
                </div>
                <div>
                  <div><span>不健康数</span></div>
                  <div><span class="un_health">0</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="cluster-assert-container">
            <div class="cluster-assert-main">
              <div class="all">
                <div><span>容器</span></div>
                <div><span>全部容器</span></div>
              </div>
              <div class="check">
                <div>
                  <div><span>总数</span></div>
                  <div><span class="total">10</span></div>
                </div>
                <div>
                  <div><span>健康数</span></div>
                  <div><span class="health">10</span></div>
                </div>
                <div>
                  <div><span>不健康数</span></div>
                  <div><span class="un_health">0</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="clear: both"></div>
      <div class="cluster-resources">
        <div><circle-progress id="1" width="150" percent="0.5" title="CPU使用率" strokewidth="4" /></div>
        <div><circle-progress id="2" width="150" percent="0.2" title="内存使用率" strokewidth="4" /></div>
        <div><circle-progress id="3" width="150" percent="0.9" title="磁盘使用率" strokewidth="4" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CircleProgress from '@/components/CircleProgress/'

export default {
  name: 'Dashboard',
  components: {
    CircleProgress
  },
  computed: {
    ...mapGetters([
      'user_info'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    background-color: #f0f2f5;
    padding: 20px;
  }
  &-main {
    background-color: #fff;
    min-height: calc(100vh - 90px);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border: 1px solid #e6ebf5;
    transition: .3s;
    padding: 40px;
    .cluster-overview {
      border-bottom: 1px solid #e6ebf5;
      padding-bottom: 8px;
      font-size: 20px;
    }
    .cluster-info {
      padding: 15px 0;
      height: 60px;
      &-name,&-desc {
        float: left;
        height: 30px;
        line-height: 30px;
        span {
          padding-left: 8px;
        }
      }
      &-desc {
        width: 60%;
      }
      &-name {
        width: 40%;
      }
    }
    .cluster-assert {
      > div {
        width: 50%;
        float: left;
      }
      &-server {
        margin-right: 8px;
        border: 1px solid #e6ebf5;
      }
      &-container {
        margin-left: 8px;
        border: 1px solid #e6ebf5;
      }
      &-main {
        padding: 20px;
        > div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .all > div, .check > div > div {
          height: 30px;
          line-height: 30px;
        }
        .total, .health, .un_health {
          font-size: 24px;
        }
        .health {
          color: green;
        }
        .un_health {
          color: red;
        }
      }
    }
    .cluster-resources {
      border: 1px solid #e6ebf5;
      padding: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
