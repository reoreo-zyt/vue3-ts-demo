<template>
	<component :is="renderLoop(column)"></component>
</template>

<script lang="tsx" setup name="TableColumn">
import { type ColumnProps } from "@/components/ProTable/interface";
import { filterEnum, formatValue, handleRowAccordingToProp } from "@/utils/index";

defineProps<{ column: ColumnProps }>();

const slots = useSlots();

const enumMap = inject("enumMap", ref(new Map()));

// 渲染表格数据
const renderCellData = (item: ColumnProps, scope: { [key: string]: any }) => {
	return enumMap.value.get(item.prop) && item.isFilterEnum
		? filterEnum(handleRowAccordingToProp(scope.row, item.prop!), enumMap.value.get(item.prop)!, item.fieldNames)
		: formatValue(handleRowAccordingToProp(scope.row, item.prop!));
};

// 获取 tag 类型
const getTagType = (item: ColumnProps, scope: { [key: string]: any }) => {
	return filterEnum(handleRowAccordingToProp(scope.row, item.prop!), enumMap.value.get(item.prop), item.fieldNames, "tag") as any;
};

const renderLoop = (item: ColumnProps) => {
	return (
		<>
			{item.isShow && (
				<el-table-column
					{...item}
					align={item.align ?? "center"}
					showOverflowTooltip={item.showOverflowTooltip ?? item.prop !== "operation"}
				>
					{{
						default: (scope: any) => {
							if (item._children) return item._children.map(child => renderLoop(child));
							if (item.render) return item.render(scope);
              {/* @ts-ignore */}
							if (slots[item.prop!]) return slots[item.prop!]!(scope);
							if (item.tag) return <el-tag type={getTagType(item, scope)}>{renderCellData(item, scope)}</el-tag>;
							return renderCellData(item, scope);
						},
						header: () => {
							if (item.headerRender) return item.headerRender(item as any);
               {/* @ts-ignore */}
							if (slots[`${item.prop}Header`]) return slots[`${item.prop}Header`]!({ row: item });
							return item.label;
						}
					}}
				</el-table-column>
			)}
		</>
	);
};
</script>
<style scoped lang="scss">
.item {
	width: 100%;
	background-color: transparent;
	border: none;

	/* 调整elementUI中样式 如果不需要调整请忽略 */
}
.el-input__inner {
	height: 30px !important;
	background-color: transparent;
	border: none;
}
.box:deep(.el-input__inner) {
	text-align: right;
}
.box:deep(.el-input__wrapper) {
	cursor: default;
	background-color: transparent;
	box-shadow: 0 0 0 0 var(--el-input-border-color, var(--el-border-color)) inset;
}
</style>
