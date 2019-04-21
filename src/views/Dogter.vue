<template>
  <div id="social">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg3 sm12 v-for="(item, index) in users" :key="'basic' + index">
          <name-card v-bind="item"> </name-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import NameCard from "@/components/widgets/card/NameCard";
export default {
  components: {
    NameCard
  },
  data() {
    return {
      users: [
        {
          Status: "Hadir",
          name: "dr. Rio Gunawan",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Hadir",
          name: "dr. Rio Gunawan",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Hadir",
          name: "dr. Rio Gunawan",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Hadir",
          name: "dr. Rio Gunawan",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Hadir",
          name: "dr. Rio Gunawan",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Hadir",
          name: "dr. Rio Gunawan",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Hadir",
          name: "dr. Rio Gunawan",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          Status: "Hadir",
          name: "dr. Rio Gunawan",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        }
      ]
    };
  }
};
</script>
