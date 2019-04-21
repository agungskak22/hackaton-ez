<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="fa fa-wheelchair"
            title="1000"
            sub-title="Pengunjung"
            color="indigo"      
          >
          </mini-statistic>  
        </v-flex>
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="trending_down"
            title="150"
            sub-title="Belum Scan"
            color="red darken-4"      
          >
          </mini-statistic>           
        </v-flex>          
        <v-flex lg4 sm6 xs12>
          <mini-statistic
            icon="trending_up"
            title="200"
            sub-title="Sudah Scan"
            color="blue darken-3"      
          >
          </mini-statistic>            
        </v-flex>          
        <!-- mini statistic  end -->   
        <v-flex lg8 sm12 xs12>
          <v-widget title="Pengunjung Perbulan" content-bg="white">
            <v-btn icon slot="widget-header-action">
              <v-icon class="text--secondary">refresh</v-icon>
            </v-btn>
            <div slot="widget-content">
                <e-chart 
                :path-option="[
                  ['dataset.source', TrafficConsumer],
                  ['color', [color.lightBlue.darken1, color.indigo.base]],
                  ['legend.show', true],
                  ['xAxis.axisLabel.show', true],
                  ['yAxis.axisLabel.show', true],
                  ['grid.left', '2%'],
                  ['grid.bottom', '5%'],
                  ['grid.right', '3%'],
                  ['series[0].type', 'bar'],
                  ['series[0].areaStyle', {}],
                  ['series[0].smooth', true],
                  ['series[1].smooth', true],
                  ['series[1].type', 'bar'],
                  ['series[1].areaStyle', {}],
                ]"
                height="400px"
                width="100%"
                >
                </e-chart>     
            </div>
          </v-widget>  
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <v-widget title="Penyakit Populer" content-bg="white">
            <div slot="widget-content">
                <e-chart 
                :path-option="[
                  ['dataset.source', Penyakit],
                  ['legend.bottom', '0'],
                  ['color', [color.amber.base, color.indigo.base, color.purple.base, color.lightBlue.darken4, color.deepOrange.base, color.teal.base]],
                  ['xAxis.show', false],
                  ['yAxis.show', false],
                  ['series[0].type', 'pie'],
                  ['series[0].avoidLabelOverlap', true],         
                  ['series[0].radius', ['50%', '70%']],                      
                ]"
                height="400px"
                width="100%"
                >
                </e-chart>     
            </div>
          </v-widget>  
        </v-flex>            
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import API from '@/api';
import EChart from '@/components/chart/echart';
import MiniStatistic from '@/components/widgets/statistic/MiniStatistic';
import VWidget from '@/components/VWidget';
import Material from 'vuetify/es5/util/colors';
export default {
  components: {
    VWidget,
    MiniStatistic,
    EChart,
  },
  data: () => ({
    color: Material,
    selectedTab: 'tab-1',
  }),
  computed: {
    TrafficConsumer () {
      return API.getMonthVisit;
    },
    Penyakit () {
      return API.getPenyakit;
    }
  }

};
</script>
