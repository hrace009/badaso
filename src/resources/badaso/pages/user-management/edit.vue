<template>
  <div>
    <badaso-breadcrumb-row> </badaso-breadcrumb-row>
    <vs-row v-if="$helper.isAllowed('edit_users')">
      <vs-col vs-lg="12">
        <vs-card>
          <div slot="header">
            <h3>{{ $t("user.edit.title") }}</h3>
          </div>
          <vs-row>
            <badaso-text
              v-model="user.name"
              size="6"
              :label="$t('user.edit.field.name.title')"
              :placeholder="$t('user.edit.field.name.placeholder')"
              :alert="errors.name"
            ></badaso-text>
            <badaso-text
              v-model="user.username"
              size="6"
              :label="$t('user.edit.field.username.title')"
              :placeholder="$t('user.edit.field.username.placeholder')"
              :alert="errors.username"
            ></badaso-text>
            <badaso-text
              v-model="user.email"
              size="6"
              :label="$t('user.edit.field.email.title')"
              :placeholder="$t('user.edit.field.email.placeholder')"
              :alert="errors.email"
            ></badaso-text>
            <badaso-password
              v-model="user.password"
              size="6"
              :label="$t('user.edit.field.password.title')"
              :placeholder="$t('user.edit.field.password.placeholder')"
              :alert="errors.password"
            ></badaso-password>
            <badaso-switch
              v-model="user.emailVerified"
              size="6"
              :label="$t('user.edit.field.emailVerified.title')"
              :placeholder="$t('user.edit.field.emailVerified.placeholder')"
              :alert="errors.emailVerified"
              onLabel="Yes"
              offLabel="No"
              :tooltip="$t('user.help.emailVerified')"
            ></badaso-switch>
            <badaso-upload-image
              v-model="user.avatar"
              size="12"
              :label="$t('user.edit.field.avatar.title')"
              :placeholder="$t('user.edit.field.avatar.placeholder')"
              :alert="errors.avatar"
            ></badaso-upload-image>
            <vs-col vs-lg="12">
              <badaso-code-editor
                v-model="user.additionalInfo"
                size="12"
                :label="$t('user.edit.field.additionalInfo.title')"
                :placeholder="$t('user.edit.field.additionalInfo.placeholder')"
                :alert="errors.additionalInfo"
              ></badaso-code-editor>
            </vs-col>
          </vs-row>
        </vs-card>
      </vs-col>
      <vs-col vs-lg="12">
        <vs-card class="action-card">
          <vs-row>
            <vs-col vs-lg="12">
              <vs-button color="primary" type="relief" @click="submitForm">
                <vs-icon icon="save"></vs-icon> {{ $t("user.edit.button") }}
              </vs-button>
            </vs-col>
          </vs-row>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "UserManagementEdit",
  components: {},
  data: () => ({
    errors: {},
    user: {
      email: "",
      name: "",
      username: "",
      avatar: "",
      password: "",
      emailVerified: false,
      additionalInfo: "",
    },
  }),
  computed: {
    loggedInUser: {
      get() {
        let user = this.$store.getters["badaso/getUser"];
        return user;
      },
    },
  },
  mounted() {
    this.getUserDetail();
  },
  methods: {
    getUserDetail() {
      this.$openLoader();
      this.$api.badasoUser
        .read({
          id: this.$route.params.id,
        })
        .then((response) => {
          this.$closeLoader();
          this.user = response.data.user;
          this.user.password = "";
          this.user.additionalInfo = this.user.additionalInfo
            ? JSON.parse(this.user.additionalInfo)
            : "";
        })
        .catch((error) => {
          this.$closeLoader();
          this.$vs.notify({
            title: this.$t("alert.danger"),
            text: error.message,
            color: "danger",
          });
        });
    },
    submitForm() {
      this.errors = {};
      this.$openLoader();
      this.$api.badasoUser
        .edit({
          id: this.$route.params.id,
          email: this.user.email,
          name: this.user.name,
          username: this.user.username,
          avatar: this.user.avatar ? this.user.avatar.base64 : null,
          password: this.user.password,
          emailVerified: this.user.emailVerified,
          additionalInfo: JSON.stringify(this.user.additionalInfo),
        })
        .then((response) => {
          if (this.loggedInUser.id == this.user.id) {
            this.$store.commit("badaso/FETCH_USER");
          }
          this.$closeLoader();
          this.$router.push({ name: "UserManagementBrowse" });
        })
        .catch((error) => {
          this.errors = error.errors;
          this.$closeLoader();
          this.$vs.notify({
            title: this.$t("alert.danger"),
            text: error.message,
            color: "danger",
          });
        });
    },
  },
};
</script>
