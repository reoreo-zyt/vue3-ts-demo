<template>
  <!-- TODO: 修复错误 -->
  <el-input
    v-bind="$attrs"
    ref="myInput"
    v-model="value"
    class="t-input"
    @change="(e) => handleEvent('change', e)"
    @input="(e) => handleEvent('input', e)"
    @blur="(e) => handleEvent('blur', e)"
    @clear="() => handleEvent('clear')"
    @focus="(e) => handleEvent('focus', e)">
    <template v-if="showSlots('prefix') || prefixIcon" #prefix>
      <slot name="prefix">
        <app-icon
          :icon="
            prefixIcon.indexOf(':') > -1
              ? prefixIcon
              : 'ep:' + toLine(prefixIcon)
          "
          v-bind="prefixIconProps" />
      </slot>
    </template>
    <template v-if="showSlots('suffix') || suffixIcon" #suffix>
      <slot name="suffix">
        <app-icon :icon="suffixIcon" v-bind="suffixIconProps" />
      </slot>
    </template>
    <template v-if="showSlots('append')" #append>
      <slot name="append"></slot>
    </template>
    <template v-if="showSlots('prepend')" #prepend>
      <slot name="prepend"></slot>
    </template>
  </el-input>
</template>

<script lang="ts">
import { toLine } from '@/utils'
import { IconProps } from '@/types/tInput'

export type InputEventType = 'input' | 'clear' | 'blur' | 'change' | 'focus'

export default defineComponent({
  name: 'TInput',
  props: {
    modelValue: {
      type: [String, Number, Object],
      default: '',
    },
    prefixIcon: {
      type: String,
      default: '',
    },
    suffixIcon: {
      type: String,
      default: '',
    },
    suffixIconProps: {
      type: Object as PropType<IconProps>,
      default: () => {},
    },
    prefixIconProps: {
      type: Object as PropType<IconProps>,
      default: () => {},
    },
  },
  emits: ['change', 'input', 'clear', 'blur', 'focus'],
  // 用于父组件来调用子组件的ref方法
  expose: ['focus', 'blur', 'select'],
  setup(_props, { emit, slots }) {
    const myInput = ref<HTMLInputElement>()
    // const a = slots?.default && slots.default()
    const prepend = slots?.prepend && slots.prepend()
    const append = slots?.append && slots.append()
    const { modelValue } = toRefs(_props)

    const localValue = ref(modelValue.value)

    watch(
      () => modelValue.value,
      (val) => {
        localValue.value = val
      },
    )

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleEvent = (type: InputEventType, e: any = null) => {
      emit(type, e)
      if (['change', 'input'].includes(type)) {
        localValue.value = e
      }
    }

    const focusHandler = () => {
      myInput.value?.focus()
    }

    const blurHandler = () => {
      myInput.value?.blur()
    }

    const selectHandler = () => {
      myInput.value?.select()
    }

    const showSlots = (name: string): boolean => {
      const slot = slots[name]
      return !!(slot && slot())
    }

    return {
      showPrepend: !!prepend,
      showAppend: !!append,
      value: localValue,
      handleEvent,
      focus: focusHandler,
      blur: blurHandler,
      select: selectHandler,
      myInput,
      showSlots,
      toLine,
    }
  },
})
</script>

<style scoped lang="scss">
.t-input {
  :deep(.el-input__prefix-inner) {
    @apply flex items-center;
  }

  :deep(.el-input__suffix-inner) {
    @apply flex items-center;
  }
}
</style>
