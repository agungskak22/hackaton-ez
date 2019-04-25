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
                  <td>
                    <v-avatar size="32">
                      <img :src="props.item.avatar" alt="" />
                    </v-avatar>
                  </td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.nik }}</td>
                  <td>{{ props.item.AlamatLahir }}</td>
                  <td>{{ props.item.Alamat }}</td>
                  <td>{{ props.item.dateOfBirth }}</td>
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
                            <v-icon>edit</v-icon>
                          </v-list-tile-action>
                          <v-list-tile-content>
                            <v-list-tile-title>Edit</v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile rel="noopener" ripple="ripple">
                          <v-list-tile-action>
                            <v-icon>delete</v-icon>
                          </v-list-tile-action>
                          <v-list-tile-content>
                            <v-list-tile-title>Hapus Data</v-list-tile-title>
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
              <h4>Tambah Data User</h4>
            </v-card-title>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6>
                  <v-text-field
                    prepend-inner-icon="perm_contact_calendar"
                    required
                    label="NIK"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    prepend-inner-icon="keyboard_arrow_down"
                    required
                    label="Tempat Lahir"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    prepend-inner-icon="text_rotation_none"
                    required
                    label="Nama"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
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
                        label="Tanggal Lahir"
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
                  <v-text-field
                    prepend-inner-icon="room"
                    required
                    label="Alamat"
                  ></v-text-field>
                </v-flex>
                <v-flex xs4>
                  <v-text-field
                    prepend-inner-icon="group"
                    required
                    label="RT/RW"
                  ></v-text-field>
                </v-flex>
                <v-flex xs4>
                  <v-text-field
                    prepend-inner-icon="contacts"
                    required
                    label="Kel/Desa"
                  ></v-text-field>
                </v-flex>
                <v-flex xs4>
                  <v-text-field
                    prepend-inner-icon="contact_mail"
                    required
                    label="Kecamatan"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    prepend-inner-icon="contact_mail"
                    required
                    label="Agama"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                <v-autocomplete
                  prepend-inner-icon="nature_people"
                  :items="['Belum Kawin','Sudah Kawin']"
                  label="Status Kawin"
                  multiple
                ></v-autocomplete>
              </v-flex>
                <v-flex xs12>
                <v-autocomplete
                  prepend-inner-icon="landscape"
                  :items="['Wni','Wna']"
                  label="Kependudukan"
                  multiple
                ></v-autocomplete>
              </v-flex>
                <v-flex xs12>
                  <form id="file-upload-form" class="uploader">
                    <input
                      id="file-upload"
                      type="file"
                      name="fileUpload"
                      accept="image/*"
                    />
                    <label for="file-upload" id="file-drag">
                      <img
                        id="file-image"
                        src="#"
                        alt="Preview"
                        class="hidden"
                      />
                      <div id="start">
                        <i class="fa fa-download" aria-hidden="true"></i>
                        <div>Pilih Gambar Atau Drag</div>
                        <div id="notimage" class="hidden">
                          Please select an image
                        </div>
                        <span id="file-upload-btn" class="btn btn-primary"
                          >Select a file</span
                        >
                      </div>
                      <div id="response" class="hidden">
                        <div id="messages"></div>
                        <progress class="progress" id="file-progress" value="0">
                          <span>0</span>%
                        </progress>
                      </div>
                    </label>
                  </form>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="indigo darken-1" @click="dialog = false" flat
              >Simpan</v-btn
            >
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
            text: "Foto",
            value: "avatar"
          },
          {
            text: "Nama Pasien",
            value: "name"
          },
          {
            text: "NIK",
            value: "nik"
          },
          {
            text: "Tempat Lahir",
            value: "Alamat"
          },
          {
            text: "Alamat",
            value: "AlamatLahir"
          },
          {
            text: "Tanggal Lahir",
            value: "dateOfBirth"
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

<style>
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);
@import url("https://fonts.googleapis.com/css?family=Roboto");
h2 {
  font-family: "Roboto", sans-serif;
  font-size: 26px;
  line-height: 1;
  color: #454cad;
  margin-bottom: 0;
}

p {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #5f6982;
}

.uploader {
  display: block;
  clear: both;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
}
.uploader label {
  float: left;
  clear: both;
  width: 100%;
  padding: 2rem 1.5rem;
  text-align: center;
  background: #fff;
  border-radius: 7px;
  border: 3px solid #eee;
  transition: all 0.2s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.uploader label:hover {
  border-color: #454cad;
}
.uploader label.hover {
  border: 3px solid #454cad;
  box-shadow: inset 0 0 0 6px #eee;
}
.uploader label.hover #start i.fa {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0.3;
}
.uploader #start {
  float: left;
  clear: both;
  width: 100%;
}
.uploader #start.hidden {
  display: none;
}
.uploader #start i.fa {
  font-size: 50px;
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
}
.uploader #response {
  float: left;
  clear: both;
  width: 100%;
}
.uploader #response.hidden {
  display: none;
}
.uploader #response #messages {
  margin-bottom: 0.5rem;
}
.uploader #file-image {
  display: inline;
  margin: 0 auto 0.5rem auto;
  width: auto;
  height: auto;
  max-width: 180px;
}
.uploader #file-image.hidden {
  display: none;
}
.uploader #notimage {
  display: block;
  float: left;
  clear: both;
  width: 100%;
}
.uploader #notimage.hidden {
  display: none;
}
.uploader progress,
.uploader .progress {
  display: inline;
  clear: both;
  margin: 0 auto;
  width: 100%;
  max-width: 180px;
  height: 8px;
  border: 0;
  border-radius: 4px;
  background-color: #eee;
  overflow: hidden;
}
.uploader .progress[value]::-webkit-progress-bar {
  border-radius: 4px;
  background-color: #eee;
}
.uploader .progress[value]::-webkit-progress-value {
  background: linear-gradient(to right, #393f90 0%, #454cad 50%);
  border-radius: 4px;
}
.uploader .progress[value]::-moz-progress-bar {
  background: linear-gradient(to right, #393f90 0%, #454cad 50%);
  border-radius: 4px;
}
.uploader input[type="file"] {
  display: none;
}
.uploader div {
  margin: 0 0 0.5rem 0;
  color: #5f6982;
}
.uploader .btn {
  display: inline-block;
  margin: 0.5rem 0.5rem 1rem 0.5rem;
  clear: both;
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  text-transform: initial;
  border: none;
  border-radius: 0.2rem;
  outline: none;
  padding: 0 1rem;
  height: 36px;
  line-height: 36px;
  color: #fff;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  background: #454cad;
  border-color: #454cad;
  cursor: pointer;
}
</style>
