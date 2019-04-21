<template>
  <div id="social">
    <v-container grid-list-xl fluid>
        <v-toolbar
      color="indigo"
      dark
    >
      <v-toolbar-title>Daftar Antrian</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="warning"> scan QR
      </v-btn>
    </v-toolbar>
        <v-layout row wrap>
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'mini' + index">
            <name-card
              mini
              v-bind="item"
            >
            </name-card>
          </v-flex>         
        </v-layout>
      </v-container>
  </div>
</template>

<script>
import NameCard from '@/components/widgets/card/NameCard';
export default {
  components: {
    NameCard,
  },
  data () {
    return {
      users: [
        {
          Status: 'Belum Cekin',
          name: 'Jo Vianto',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          },  
        },
        {
          Status: 'Belum Cekin',
          name: 'Jo Vianto',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          },  
        },
        {
          Status: 'Belum Cekin',
          name: 'Jo Vianto',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          },  
        },
        {
          Status: 'Belum Cekin',
          name: 'Jo Vianto',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          },  
        },
        {
          Status: 'Belum Cekin',
          name: 'Jo Vianto',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          },  
        },
        {
          Status: 'Belum Cekin',
          name: 'Jo Vianto',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          },  
        },
        {
          Status: 'Belum Cekin',
          name: 'Jo Vianto',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          },  
        },
        {
          Status: 'Belum Cekin',
          name: 'Jo Vianto',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          },  
        },
        {
          Status: 'Belum Cekin',
          name: 'Jo Vianto',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          },  
        },
        {
          Status: 'Belum Cekin',
          name: 'Jo Vianto',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          },  
        },
        {
          Status: 'Belum Cekin',
          name: 'Jo Vianto',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          },  
        },
        {
          Status: 'Belum Cekin',
          name: 'Jo Vianto',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          },  
        }, 
      ]
    };
  },
};
</script>