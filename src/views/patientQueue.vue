<template>
  <div id="social">
    <v-container grid-list-xl fluid>
      <v-toolbar color="indigo" dark>
        <v-toolbar-title>Daftar Antrian</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click.prevent="qrcodescanner=true" color="warning"> scan QR </v-btn>
      </v-toolbar>
      <v-layout row wrap>
        <v-flex lg3 sm12 v-for="(item, index) in users" :key="'mini' + index">
          <name-card mini v-bind="item"> </name-card>
        </v-flex>
      </v-layout>
    </v-container>
    
  <v-dialog v-model="qrcodescanner" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline" >Checkin</span>
        </v-card-title>
        <v-card-text>
              <!-- camera -->
               <vue-qr-reader ref="qr"
                    v-on:code-scanned="codeScanned"
                    :stop-on-scanned="stopscan"
                    :use-back-camera="true"
                    :draw-on-found="true"
                    line-color="#00FF00"
                    :line-width=20
                    :video-height=350
                    :video-width=450
                    :responsive="true" v-if="qrcodescanner">
                </vue-qr-reader>
              <!-- camera -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" @click="qrcodescanner = false;">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import VueQrReader from 'vue-qr-reader/dist/lib/vue-qr-reader.umd.js';
import NameCard from "@/components/widgets/card/NameCard";
export default {
  components: {
    NameCard,
    VueQrReader
  },
  data() {
    return {
      stopscan: true,
      qrcodescanner: false,
      scanned: null,
      status: 1,
      checkinArea: false,
      users: [
        {
          Status: "Belum Cekin",
          name: "Jo Vianto",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Belum Cekin",
          name: "Jo Vianto",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Belum Cekin",
          name: "Jo Vianto",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Belum Cekin",
          name: "Jo Vianto",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Belum Cekin",
          name: "Jo Vianto",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Belum Cekin",
          name: "Jo Vianto",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Belum Cekin",
          name: "Jo Vianto",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Belum Cekin",
          name: "Jo Vianto",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Belum Cekin",
          name: "Jo Vianto",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Belum Cekin",
          name: "Jo Vianto",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Belum Cekin",
          name: "Jo Vianto",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Belum Cekin",
          name: "Jo Vianto",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        }
      ]
    };
  },
  methods: {
    codeScanned (event) {
    }
  } 
}
</script>
