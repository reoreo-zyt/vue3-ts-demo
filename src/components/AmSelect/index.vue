<template>
  <!-- 注意使用 setup 语法糖后，使用 elementUI 作为动态组件需要引入，自动引入插件不生效 -->
  <!-- !报错：Cannot destructure property 'queryChange' of 'toRaw(...)' as it is undefined. -->
  <!-- <component :is="!useVirtual ? 'el-select' : 'el-select-v2'"></component> -->
  <!-- TODO: 虚拟列表样式问题 -->
  <component
    :is="!useVirtual ? ElSelect : ElSelectV2"
    popper-class="am_select"
    v-model="childSelectedValue"
    :options="!useVirtual ? null : optionSource"
    :style="{ width: width || '100%' }"
    v-bind="{
      clearable: true,
      filterable: true,
      ...$attrs,
    }"
    :multiple="multiple">
    <template v-for="(index, name) in slots" v-slot:[name]="data">
      <slot :name="name" v-bind="data" />
    </template>
    <el-checkbox
      v-if="multiple"
      v-model="selectChecked"
      @change="selectAll"
      class="all_checkbox">
      全选
    </el-checkbox>
    <template v-if="!useVirtual">
      <el-option
        v-for="(item, index) in optionSource"
        :key="index"
        :label="customLabel ? customLabelHandler(item) : item[labelKey]"
        :value="item[valueKey]"></el-option>
      <div class="am_select__pagination" v-if="isShowPagination">
        <el-pagination
          v-model:current-page="paginationOptionData.currentPage"
          v-model:page-size="paginationOptionData.pageSize"
          :layout="
            paginationOptionData.layout || 'total, prev, pager, next, jumper'
          "
          :pager-count="paginationOptionData.pagerCount"
          :total="paginationOptionData.total"
          v-bind="{
            small: true,
            background: true,
            ...$attrs,
            ...paginationOptionData.bind,
          }" />
      </div>
    </template>
  </component>
</template>

<script setup lang="ts">
import { ElSelect, ElSelectV2 } from 'element-plus'

const props = defineProps({
  /** select 绑定的值 */
  modelValue: {
    type: [String, Number, Array],
  },
  /** 是否多选 */
  multiple: {
    type: Boolean,
    default: false,
  },
  /** 选择框宽度 */
  width: {
    type: String,
  },
  /** 传入的option数组中，要作为最终选择项的键值key */
  valueKey: {
    type: String,
    default: 'key',
  },
  /** 传入的option数组中，要作为显示项的键值名称 */
  labelKey: {
    type: String,
    default: 'label',
  },
  /** 是否自定义设置下拉label */
  customLabel: {
    type: String,
  },
  /** 下拉框组件数据源 */
  optionSource: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: Array<any>,
    default: () => [],
  },
  /** 是否显示分页 */
  isShowPagination: {
    type: Boolean,
    default: false,
  },
  /** 分页配置 */
  paginationOption: {
    type: Object,
    default: () => {
      return {
        pageSize: 6, // 每页显示条数
        currentPage: 1, // 当前页
        pagerCount: 5, // 按钮数，超过时会折叠
        total: 0, // 总条数
      }
    },
  },
  /** 是否开启虚拟列表 */
  useVirtual: {
    type: Boolean,
    default: false,
  },
})
const slots = useSlots()
// 抛出事件
const emits = defineEmits(['update:modelValue'])
// vue3 v-model简写
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let childSelectedValue: any = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    // console.log(777, val)
    emits('update:modelValue', val)
  },
})
// 设置全选
const selectChecked = computed({
  get() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _deval: any = props.modelValue
    return _deval?.length === props.optionSource.length
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  set(val: any) {
    return val?.length === props.optionSource.length
  },
})
// !分页参数会改变值，数据单向下行，prop 值不应该改变
const paginationOptionData = computed(() => props.paginationOption)
// 点击全选
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectAll = (val: any) => {
  const options = JSON.parse(JSON.stringify(props.optionSource))
  if (val) {
    const selectedAllValue = options.map((item) => {
      return item[props.valueKey]
    })
    emits('update:modelValue', selectedAllValue)
  } else {
    emits('update:modelValue', null)
  }
}
// 自定义label显示
const customLabelHandler = (item) => {
  console.log(item)
  return eval(String(props.customLabel))
}
</script>
<style lang="scss" scoped>
.am_select {
  .el-select-dropdown {
    .all_checkbox {
      margin-left: 20px;
    }
  }
}

// TODO: 修改下分页的样式
// .am_select__pagination {
// }
</style>
