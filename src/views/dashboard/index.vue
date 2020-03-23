<template>
  <div class="dashboard-container">
    <div class="dashboard-main">
      <div class="cluster-overview">集群概览</div>
      <div class="cluster-detail">
        <div class="name">集群名称: <span>-</span></div>
        <div class="desc">集群简介: <span>-</span></div>
      </div>
      <div class="cluster-server-pod">
        <div class="container-split">
          <div class="server">
            <div class="layer1"><span>节点</span><span>全部节点</span></div>
            <div class="layer2">
              <span>总数</span><span>健康数</span><span>不健康数</span>
            </div>
            <div class="layer3">
              <span>10</span><span>10</span><span>0</span>
            </div>
          </div>
        </div>
        <div class="container-split">
          <div class="container">
            <div class="layer1"><span>容器</span><span>全部容器</span></div>
            <div class="layer2">
              <span>总数</span><span>健康数</span><span>不健康数</span>
            </div>
            <div class="layer3">
              <span>10</span><span>10</span><span>0</span>
            </div>
          </div>
        </div>
      </div>
      <div class="cluster-resources">
        <div>
<!--          http://www.mamicode.com/info-detail-2239289.html-->
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="400">
            <g id="circle">
              <text x="115" y="115" font-size="36px" fill="#000" text-anchor="middle" transform="translate(0,18)">50%</text>
              <circle r="100" cx="115" cy="115" fill="none" stroke-width="10" stroke="rgb(135,206,250)" />
              <circle cx="115" cy="115" r="90" fill="none" stroke="white" />
              <path d="M 25,115 C 67.5,74 162.5,156 205,115 A 90,90 0 0,1 25,115 z" fill="rgba(135,206,250,.8)">
                <animate
                  attributeName="d"
                  attributeType="XML"
                  dur="3s"
                  repeatCount="indefinite"
                  values="
               M 25,115 C 67.5,74 162.5,156 205,115 A 90,90 0 0,1 25,115 z;
               M 25,115 C 67.5,115 162.5,115 205,115 A 90,90 0 0,1 25,115 z;
               M 25,115 C 67.5,156 162.5,74 205,115 A 90,90 0 0,1 25,115 z;
               M 25,115 C 67.5,115 162.5,115 205,115 A 90,90 0 0,1 25,115 z;
               M 25,115 C 67.5,74 162.5,156 205,115 A 90,90 0 0,1 25,115 z;"></animate>
              </path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
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
    .cluster-detail {
      padding: 15px 0;
      height: 60px;
      .name,.desc {
        float: left;
        height: 30px;
        line-height: 30px;
        span {
          padding-left: 8px;
        }
      }
      .desc {
        width: 60%;
      }
      .name {
        width: 40%;
      }
    }
    .cluster-server-pod {
      height: 152px;
      margin-bottom: 20px;
      .container-split {
        width: 50%;
        float: left;
        .server {
          margin-right: 8px;
        }
        .container {
          margin-left: 8px;
        }
        .server,.container {
          border: 1px solid #e6ebf5;
          padding: 20px;
          .layer1,.layer2,.layer3 {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 30px;
            line-height: 30px;
            span {
              min-width: 70px;
            }
          }
          .layer1 {
            margin-bottom: 20px;
          }
          .layer3 {
            span {
              font-size: 30px;
            }
          }
        }
      }
    }
    .cluster-resources {
      border: 1px solid #e6ebf5;
      padding: 20px;
    }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
