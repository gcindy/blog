<template>
  <div class="about">
    <div @click="changeMutations('gyb')">{{ text }}</div>
    <div>
      <div v-for="item in name" :key="item.id">
        {{ item.name }}
      </div>
      <div>{{ count }}</div>
      <div>{{ getname }}</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      getname: ""
    };
  },
  created() {
    this.getName();
    this.setInfo();
  },

  computed: {
    ...mapState(["text"]),
    ...mapGetters({
      name: "getArray",
      count: "getArrayCount"
    })
  },

  methods: {
    getName() {
      this.getname = this.$store.getters.getArrayName("龚铱白");
    },
    // 直接更改文本信息
    setInfo() {
      this.$store.commit("setMessage", 10);
      this.$store.commit("setMessage", {
        text: 10
      });
      this.$store.commit({
        type: "setMessage",
        text: 10
      });
      this.$store.dispatch("changeMutations", "啦啦啦啦拉拉阿拉啦1");
    },
    ...mapMutations(["setMessage"]),
    ...mapActions(["changeMutations"])
  }
};
</script>
