<template>
  <el-form
    v-if="model"
    ref="form"
    :label-width="labelWidth"
    :validate-on-rule-change="false"
    :model="model"
    :rules="rules"
    :inline="inline"
    v-bind="$attrs">
    <!-- https://element-plus.gitee.io/zh-CN/component/radio.html#%E5%8D%95%E9%80%89%E6%A1%86%E7%BB%84 -->
    <!-- radio, checkbox -->
    <!-- radio-group的label即是value -->
    <el-row>
      <el-col
        v-for="(item, index) in schemas"
        :key="index"
        :span="inline ? item?.span || -1 : 24">
        <el-form-item
          v-model="model"
          :prop="item.prop"
          :label="item.label"
          :class="item.class">
          <div
            v-if="item.component === 'innerText'"
            :class="item.class"
            :style="item.style">
            {{ item.value || model[item.prop] }}
          </div>
          <component
            :is="item.component"
            v-else-if="typeof item.component === 'object' || !isElemComp(item)"
            v-bind="item.attrs"
            v-on="item.events || {}"></component>
          <component
            :is="'el-' + item.component"
            v-else-if="
              typeof item.component === 'string' &&
              isElemComp(item) &&
              ['radio-group', 'checkbox-group'].includes(item.component)
            "
            v-model="model[item.prop]"
            v-bind="item.attrs"
            v-on="item.events || {}">
            <component
              :is="'el-' + radio.component"
              v-for="(radio, idx) in item.children"
              :key="idx"
              :label="radio.value">
              {{ radio.label }}
            </component>
          </component>
          <t-input
            v-else-if="item.component === 'input'"
            v-model="model[item.prop]"
            v-bind="item.attrs"
            v-on="item.events || {}">
            <!-- <template v-if="typeof item.itemSlot === 'string'" #[getSlotName(item)]>
                <slot v-if="item.slot" :name="item.slot"></slot>
              </template> -->
            <template
              v-for="(slotName, sIdx) in getSlotItemNames(item)"
              #[slotName]>
              <slot
                v-if="item.itemSlot && item.itemSlot[slotName]"
                :key="sIdx"
                :name="item.itemSlot[slotName]"></slot>
            </template>
          </t-input>

          <!-- TODO: 修复错误 -->
          <el-upload
            v-else-if="item.component === 'upload'"
            v-bind="item?.upload">
            <slot :name="item.slot ? item.slot + '-trigger' : 'trigger'"></slot>
            <slot :name="item.slot ? item.slot + 'tip' : 'tip'"></slot>
            <slot :name="item.slot ? item.slot + 'file' : 'file'"></slot>
            <template v-if="item.upload && item.upload.type" #trigger>
              <el-button
                v-if="item.upload?.type === 'button'"
                :type="item.upload.btnType || 'primary'"
                :class="item.upload.class">
                <slot
                  :name="item.slot ? item.slot + 'prefix' : 'prefix'"></slot>
                <slot>{{ item.upload.text }}</slot>
                <slot
                  :name="item.slot ? item.slot + 'suffix' : 'suffix'"></slot>
              </el-button>
              <app-icon
                v-else
                :icon="item.upload?.icon || 'ep:upload'"
                :class="item.upload?.class" />
            </template>
          </el-upload>
          <el-cascader
            v-else-if="item.component === 'cascader'"
            v-bind="item.attrs"
            v-model="model[item.prop]"
            :label="item.label">
            <template v-if="item.slot" #default="{ data }">
              <slot
                v-if="showSlot(item.slot)"
                :name="item.slot && item?.slot[0]"
                v-bind="data"></slot>
              <slot v-else :name="item.slot" v-bind="data"></slot>
            </template>
          </el-cascader>
          <component
            :is="'el-' + item.component"
            v-else
            v-model="model[item.prop]"
            v-bind="item.attrs"
            v-on="item.events || {}">
            <template v-if="item.children && item.children.length" #default>
              <component
                :is="'el-' + child.component"
                v-for="(child, i) in item.children"
                :key="i"
                :label="child.label"
                :value="child.value"
                v-bind="item.attrs"></component>
            </template>
            <template v-else-if="showSlot(item.slot)" #default>
              <slot
                v-for="(s, sIdx) in item.slot"
                :key="sIdx"
                :name="s"
                :scope="$scope"></slot>
            </template>
            <template v-else-if="item.itemSlot" #[getSlotName(item)]>
              <slot v-if="item.slot" :name="item.slot"></slot>
            </template>
            <template v-else #default>
              <slot v-if="item.slot" :name="item.slot"></slot>
            </template>
          </component>
        </el-form-item>
      </el-col>
    </el-row>
    <template v-if="action">
      <slot
        name="action"
        :form="form"
        :model="model"
        :validate="form && form.validate">
        <div :class="actionClass">
          <el-button type="primary" @click="submitForm">
            {{ submitText }}
          </el-button>
          <el-button @click="resetForm">{{ cancelText }}</el-button>
        </div>
      </slot>
    </template>
  </el-form>
</template>

<script lang="tsx">
import type { FormInstance, FormRules } from 'element-plus'
import { PropType } from 'vue'
import { FormSchema } from '@/types/form'
import { cloneDeep } from 'lodash-es'
import {
  ElInput,
  ElCascader,
  ElCheckbox,
  ElCheckboxGroup,
  ElCheckboxButton,
  ElColorPicker,
  ElDatePicker,
  ElInputNumber,
  ElRadio,
  ElRadioGroup,
  ElRadioButton,
  ElRate,
  ElSelect,
  ElOption,
  ElSlider,
  ElSwitch,
  ElTimePicker,
  ElTimeSelect,
  ElTransfer,
  ElUpload,
} from 'element-plus'
import { ValidateFieldsError } from '@/types/rule'
import { Arrayable } from 'element-plus/es/utils'
import { FormItemProp } from 'element-plus/lib/components'

export default defineComponent({
  name: 'DForm',
  components: {
    ElInput,
    ElCascader,
    ElCheckbox,
    ElCheckboxGroup,
    ElCheckboxButton,
    ElColorPicker,
    ElDatePicker,
    ElInputNumber,
    ElRadio,
    ElRadioButton,
    ElRate,
    ElRadioGroup,
    ElSelect,
    ElOption,
    ElSlider,
    ElSwitch,
    ElTimePicker,
    ElTimeSelect,
    ElTransfer,
    ElUpload,
  },
  props: {
    schemas: {
      type: Array as PropType<FormSchema[]>,
      default: () => [],
      required: true,
    },
    labelWidth: {
      type: String as PropType<string>,
      default: '80px',
    },
    action: {
      type: Boolean,
      default: true,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    actionClass: {
      type: String,
      default: '',
    },
    submitText: {
      type: String,
      default: '提交',
    },
    cancelText: {
      type: String,
      default: '重置',
    },
  },
  emits: ['change', 'submit', 'reset', 'error'],
  setup(props, { emit, expose }) {
    // console.log('🚀 ~ file: BasicForm.vue ~ line 224 ~ setup ~ props', props)
    const form = ref<FormInstance>()

    const rules = ref<FormRules>({
      ...cloneDeep(
        props.schemas.reduce((pre, cur) => {
          pre[cur.prop] = cur.rules
          return pre
        }, {}),
      ),
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const model = ref<any>({
      ...cloneDeep(
        props.schemas.reduce((pre, cur) => {
          pre[cur.prop] = cur.value
          return pre
        }, {}),
      ),
    })

    watch(
      () => model,
      () => {
        emit('change', model.value)
      },
      { deep: true },
    )

    const submitForm = () => {
      if (!form.value) return
      // emit('submit', model.value)
      form.value.validate((valid) => {
        if (valid) {
          emit('submit', model.value)
        } else {
          emit('error', model.value)
          return false
        }
      })
    }

    const resetForm = () => {
      if (!form.value) return
      form.value.resetFields()
      emit('reset', model.value)
    }

    const showSlot = (item: string | string[] | undefined): boolean => {
      return (
        !!item && typeof item !== 'string' && !!item.length && item.length > 0
      )
    }
    const getSlotName = (item: FormSchema): string => {
      return (typeof item?.itemSlot === 'string' && item?.itemSlot) || 'defalut'
    }

    const getSlotItemNames = (item: FormSchema): string[] => {
      let names: string[] = []
      if (typeof item?.itemSlot === 'object') {
        names = Object.keys(item.itemSlot)
      }
      return names
    }

    const isElemComp = (item: FormSchema): boolean => {
      const arr = [
        'cascader',
        'checkbox',
        'checkbox-group',
        'checkbox-button',
        'color-picker',
        'date-picker',
        'input',
        'input-number',
        'radio',
        'radio-group',
        'radio-button',
        'rate',
        'select',
        'option',
        'slider',
        'switch',
        'time-picker',
        'time-select',
        'transfer',
        'upload',
        'editor',
      ]
      if (typeof item.component === 'string' && arr.includes(item.component)) {
        return true
      }
      return false
    }

    expose({
      validate: async function (
        callback?: (
          isValid: boolean,
          invalidFields?: ValidateFieldsError,
        ) => void,
      ) {
        return form.value?.validate(callback)
      },
      validateField: function (
        props?: Arrayable<FormItemProp>,
        callback?: (
          isValid: boolean,
          invalidFields?: ValidateFieldsError,
        ) => void,
      ) {
        return form.value?.validateField(props, callback)
      },
      clearValidate: function (props?: Arrayable<FormItemProp>) {
        return form.value?.clearValidate(props)
      },
      scrollToField: function (prop: FormItemProp) {
        return form.value?.scrollToField(prop)
      },
    })

    return {
      model,
      rules,
      form,
      submitForm,
      resetForm,
      resetFields: resetForm,
      showSlot,
      getSlotName,
      getSlotItemNames,
      isElemComp,
      getFieldsValue: () => model.value,
      getFieldValue: (field) => model.value[field] || undefined,
    }
  },
})
</script>
