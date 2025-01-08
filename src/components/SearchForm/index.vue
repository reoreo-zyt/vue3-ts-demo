<template>
	<div class="card table-search" v-if="columns.length">
		<!-- <el-form ref="formRef" :model="searchParam"> -->
		<el-row class="demo-autocomplete">
			<el-col :span="8">
				<div style="display: flex; align-items: center">
					<el-autocomplete
						v-model="queryString"
						:fetch-suggestions="querySearch"
						:trigger-on-focus="false"
						popper-class="my-autocomplete"
						placeholder="请输入想搜索的内容"
						@select="handleSelect"
						style="width: 90%"
						@keyup.enter="searchData"
					>
						<template #suffix>
							<el-icon class="el-input__icon" @click="handleIconClick">
								<Close />
							</el-icon>
						</template>
						<template #default="{ item }">
							<div class="value">{{ item.subjectId }}</div>
						</template>
					</el-autocomplete>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="operation">
					<el-button type="primary" :icon="Search" @click="searchData">搜索</el-button>
					<el-button :icon="Refresh" @click="resetData">重置</el-button>
				</div>
			</el-col>
		</el-row>
		<!-- </el-form> -->
	</div>
</template>
<script setup lang="ts" name="SearchForm">
import { type ProTableProps } from "../ProTable/interface";
import { Search, Refresh } from "@element-plus/icons-vue";

interface LinkItem {
	accName: string;
	OrgBal: string;
	AmountAccCredit: string;
	AmountAccDebit: string;
	ifBorrow: string;
	subjectId: string;
}

// 默认值
const props = withDefaults(defineProps<ProTableProps>(), {
	columns: () => [],
	searchParam: () => ({}),
	data: () => []
});
const { data, columns } = toRefs(props);
// const state = ref('')
const links = ref<LinkItem[]>([]);
const loadAll = data.value;
const emit = defineEmits(["queryString", "toReset"]);
const searchData = () => {
	emit("queryString", queryString.value);
};
const resetData = () => {
	queryString.value = "";
	emit("toReset");
};
onMounted(() => {
	links.value = loadAll;
});
const queryString = ref("");
const querySearch = (queryString: string, cb: any) => {
	const results = queryString ? links.value.filter(createFilter(queryString)) : links.value;
	// call callback function to return suggestion objects
	cb(results);
};
const createFilter = (queryString: string) => {
	return (restaurant: LinkItem) => {
		return restaurant.subjectId.toLowerCase().indexOf(queryString?.toLowerCase()) === 0;
	};
};
const handleSelect = (item: LinkItem) => {
	queryString.value = item.subjectId;
};
const handleIconClick = () => {
	queryString.value = "";
};

defineExpose({ queryString });
</script>

<style scoped>
.my-autocomplete li {
	padding: 7px;
	line-height: normal;
}
.my-autocomplete li .name {
	overflow: hidden;
	text-overflow: ellipsis;
}
.my-autocomplete li .addr {
	font-size: 12px;
	color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
	color: #dddddd;
}
</style>
