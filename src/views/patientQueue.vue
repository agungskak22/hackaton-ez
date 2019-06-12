<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
                flat
                solo
                prepend-icon="search"
                placeholder="Type something"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
              ></v-text-field>
              <v-btn icon @click="dialog = true">
                <v-icon>add</v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="complex.headers"
                :search="search"
                :items="complex.items"
                :rows-per-page-items="[
                  5,
                  10,
                  25,
                  50,
                  { text: 'All', value: -1 }
                ]"
                class="elevation-1"
                item-key="name"
                select-all
                v-model="complex.selected"
              >
                <template slot="items" slot-scope="props">
                  <td>
                    <v-checkbox
                      primary
                      hide-details
                      v-model="props.selected"
                    ></v-checkbox>
                  </td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.nik }}</td>
                  <td>{{ props.item.konsentrasi1 }}</td>
                  <td>{{ props.item.pembimbing1 }}</td>
                  <td>{{ props.item.konsentrasi2 }}</td>
                  <td>{{ props.item.judul }}</td>
                  <td>
                    <v-chip color="cyan" text-color="white">{{ props.item.statusYudisium }}</v-chip>
                    </td>
                  <td class="text-xs-left">
                    <v-menu bottom left>
                      <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                          <v-icon>more_vert</v-icon>
                        </v-btn>
                      </template>
                      <v-list class="pa-0">
                        <v-list-tile rel="noopener" ripple="ripple">
                          <v-list-tile-action>
                            <v-icon>done</v-icon>
                          </v-list-tile-action>
                          <v-list-tile-content>
                            <v-list-tile-title>Verifikasi</v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </v-list>
                    </v-menu>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-form>
          <v-card-text>
            <v-card-title>
              <h4>Form Usulan Ujian Seminar Proposal</h4>
            </v-card-title>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6>
                <v-autocomplete
                  prepend-inner-icon="nature_people"
                  :items="['Agung','Hendi','daud']"
                  label="Nama Mahasiswa"
                  multiple
                ></v-autocomplete>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  prepend-inner-icon="nature_people"
                  :items="['160709001','160709002','160709002','160709004','160709005','160709006']"
                  label="NPM"
                  multiple
                ></v-autocomplete>
              </v-flex>
                <v-flex xs12>
                <v-text-field
                    label="Konsentrasi"
                    prepend-inner-icon="place"
                  ></v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-autocomplete
                  prepend-inner-icon="nature_people"
                  :items="['Agung','Hendi','daud']"
                  label="Pembimbing 1"
                  multiple
                ></v-autocomplete>
              </v-flex>
              <v-flex xs12 sm4>
                <v-autocomplete
                  prepend-inner-icon="nature_people"
                  :items="['Agung','Hendi','daud']"
                  label="Pembimbing 2"
                  multiple
                ></v-autocomplete>
              </v-flex>
              <v-flex xs12 sm4>
                  <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    full-width
                    max-width="290"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        prepend-inner-icon="date_range"
                        :value="computedDateFormattedMomentjs"
                        clearable
                        label="Tanggal Ujian"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @change="menu1 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex xs12>
                   <v-textarea
                    outline
                    name="input-7-4"
                    label="Judul"
                    placeholder="Judul Tesis"
                  ></v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" @click="dialog = false" dark
              >Cancel</v-btn>
              <v-btn color="indigo darken-1" @click="dialog = false" dark
              >Simpan</v-btn>
              
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { Items as Users } from "@/api/user";
import moment from "moment";
export default {
  data() {
    return {
      opsiKawin: "Belum Kawin",
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
      search: "",
      complex: {
        selected: [],
        headers: [
          {
            text: "Nama Pasien",
            value: "name"
          },
          {
            text: "NPM",
            value: "nik"
          },
          {
            text: "Konsentrasi",
            value: "pembimbing1"
          },
          {
            text: "Pembimbing 1",
            value: "konsentrasi1"
          },
          {
            text: "Pembimbing 2",
            value: "konsentrasi2"
          },
          {
            text: "Status",
            value: "statusYudisium"
          },
          {
            text: "Judul",
            value: "judul"
          },
          {
            text: "Delete/Hapus",
            value: ""
          }
        ],
        items: Users
      }
    };
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format("dddd, MMMM Do YYYY") : "";
    },
    computedDateFormattedDatefns() {
      return this.date ? format(this.date, "dddd, MMMM Do YYYY") : "";
    }
  }
};
</script>