<template>
  <div class="param-info" v-if="Object.keys(itemParams).length !== 0">
    <table v-for="(table, index) in itemParams.rule.tables" :key="index" class="params-info">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">
          {{ td }}
        </td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item, index) in itemParams.info.set">
        <td>{{ item.key }}</td>
        <td class="value">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "params",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.params-info {
  width: 100%;
  text-align: center;
}


.info-param td {
  padding-left: 27px;
}

.value {
  color: pink;
}

tr {
  padding: 20px 0 20px 0;
  display: flex;
  border-bottom: 1px #F8F6F8 solid;
}

td {
  flex: 1;
}
</style>