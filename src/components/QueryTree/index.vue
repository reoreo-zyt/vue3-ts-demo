<template>
  <div>
    <el-tree
      ref="tree"
      :data="treeData"
      :node-key="nodeKey"
      :props="treeProps"
      :expand-on-click-node="false"
      :highlight-current="true"
      :default-expanded-keys="expandedKeys"
      :default-checked-keys="checkedKeys"
      :filter-node-method="filterNode"
      :show-checkbox="showCheckbox"
      :current-node-key="currentNodeKey"
      :lazy="lazy"
      :load="loadNode"
      draggable
      @node-click="handleNodeClick"
      @check="handleCheck"
      @node-contextmenu="onContextMenu"
      @node-drag-end="handleDrag">
      <!--
        @node-expand="handleExpand"
        @node-collapse="handleCollapse" -->
      <template v-slot="{ data, node }">
        <div class="tree-node">
          <div :title="`${node.label}`" class="node-label">
            <span class="label-span">
              <i
                v-if="data.type === 'scheme'"
                class="el-icon-cpu label-span-icon"></i>
              <i
                v-if="data.nodeType === 'UNIT' && data.type === 'ORG'"
                class="el-icon-office-building label-span-icon"></i>
              <i
                v-if="data.nodeType === 'DEPARMENT' && data.type === 'ORG'"
                class="el-icon-office-house label-span-icon"></i>
              {{ node.label }}
            </span>
            <el-tag
              v-if="node.data.gross"
              class="label-tag"
              type="info"
              size="small"
              effet="plain"
              :title="`内含${node.data.gross}个数据`">
              {{ `(${node.data.gross})` }}
            </el-tag>
          </div>
          <div v-if="showContextmenu" class="node-setting">
            <i
              class="el-icon-setting"
              @click="handleClickSetting(node, data)"></i>
          </div>
        </div>
      </template>
    </el-tree>
  </div>
</template>

<script lang="ts" setup>
// TODO: 看下别人的代码以及 typescript 官网完善下类型
import TreeItem from '@/types/tree'

const emits = defineEmits([
  'node-click',
  'node-check',
  'node-contextmenu',
  'node-drap',
])

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  treeData: {
    type: Array,
    default: () => [],
  },
  // 节点 id
  nodeKey: {
    type: String,
    default: '',
  },
  treeProps: {
    type: Object,
    default: () => {
      return {
        label: 'displayName',
        children: 'children',
        isLeaf: 'isLeaf',
      }
    },
  },
  // 默认展开节点
  expandedKeys: {
    type: Array<string | number>,
    default: () => [],
  },
  // 默认选中的节点
  checkedKeys: {
    type: Array<string | number>,
    default: () => [],
  },
  // TODO:
  // 不能将类型“Function”分配给类型“FilterNodeMethodFunction”。
  // 如何定义ts类型的函数？

  // 节点搜索
  // filterNode: {
  //   type: Function,
  //   default: () => {},
  // },
  // loadNode: {
  //   type: Function,
  //   default: () => {},
  // },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  // 当前选中的节点
  currentNodeKey: {
    type: String,
    default: '',
  },
  lazy: {
    type: Boolean,
    default: false,
  },
  showContextmenu: {
    type: Boolean,
    default: true,
  },
})

// 树节点点击事件

function handleNodeClick(data: TreeItem, node) {
  emits('node-click', { data, node })
}

// 树节点选中

function handleCheck(data: TreeItem, node) {
  emits('node-check', { node: node, data: data })
}

// 右键

function onContextMenu(event, data: TreeItem, node) {
  emits('node-contextmenu', { event: event, node: node, data: data })
}

// 树节点拖拽
function handleDrag(draggingNode, dropNode, dropType, _event) {
  emits('node-drap', {
    draggingNode: draggingNode,
    dropNode: dropNode,
    dropType: dropType,
    _event: _event,
  })
}

// 树节点-展开
// function handleExpand(data) {
//   let flag = false
//   props.expandedKeys.some((item) => {
//     if (item === data[props.nodeKey]) {
//       flag = true
//       return true
//     }
//   })
//   if (!flag) {
//     props.expandedKeys.push(data.name)
//   }
// }

// // 树节点-收起
// function handleCollapse(data) {
//   props.expandedKeys.some((item, i) => {
//     if (item === data[props.nodeKey]) {
//       props.expandedKeys.length = i
//     }
//   })
// }

function handleClickSetting(node, data: TreeItem) {
  emits('node-contextmenu', { data, node })
}

function filterNode(): boolean {
  return false
}

function loadNode() {}
</script>

<style lang="scss" scoped>
.tree-node {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .node-label {
    display: flex;
    align-items: center;
    width: 100%;

    .label-span {
      display: inline-block;
      overflow: hidden;
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;

      .label-span-icon {
        margin-right: 2px;
        color: #13a2f4;
      }
    }

    .label-tag {
      font-size: 14px;
      border: 0;
    }
  }

  .node-setting {
    display: none;
    margin: 0 16px;
    color: rgb(45 140 240);
  }

  &:hover .node-setting {
    display: flex;
  }
}
</style>
