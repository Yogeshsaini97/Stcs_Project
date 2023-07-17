<script>
import { ref, onMounted, computed, inject } from "vue";

import { ChangeDateFormat, fetchData } from "../../Utils/Utils";
import ProjectTabs from "../Views/ProjectTabs.ce.vue"
import HeaderList from "./HeaderList.ce.vue";

export default {
    props: {
        keyName: {
            type: Object,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        childVariable: {
            type: String,
            required: true,
        },
        totalItems: {
            type: Number,
            required: true,
        },
        itemsPerPage: {
            type: Number,
            default: 10,
        },
        maxDisplayedPages: {
            type: Number,
            default: 5,
        },
    },
    setup(props, context) {
        const userList = ref([]);
        const searchTerm = ref("");
        const pageSize = ref(6);
        const currentPage = ref(1);
        const hostUrl = props.url;
        const keyName = props.keyName;
        const openRiskList = hostUrl.split("/").includes("risksandissues");

        const breadcrumbs = inject('breadcrumbs');
        const ChangePage = inject("ChangePage");
        const ProjectApiId = inject("ProjectApiId");



        onMounted(async () => {
            try {
                const response = await fetchData(hostUrl + `&pageSize=${pageSize.value}`);
                userList.value = response.items;
            }
            catch (error) {
                console.error(error);
            }
        });
       
        async function handleSearch() {
            const response = await fetchData(hostUrl + `&search=${searchTerm.value}`);
            userList.value = response.items;
        }
        // ------------------
        const totalPages = computed(() => Math.ceil(20 / 2));
        async function urlEmbed(CurrentPage) {
            const response = await fetchData(hostUrl + `&page=${CurrentPage}&pageSize=${pageSize.value}&search=${searchTerm.value}`);
            userList.value = response.items;
        }
        const displayedPages = computed(() => {
            const pages = [];
            if (totalPages.value <= props.maxDisplayedPages) {
                // If the total number of pages is less than or equal to the max displayed pages,
                // display all pages without any dots
                for (let page = 1; page <= totalPages.value; page++) {
                    pages.push(page);
                }
            }
            else {
                // Calculate the start and end page based on the current page and maxDisplayedPages
                let startPage = Math.max(1, currentPage.value - Math.floor(props.maxDisplayedPages / 2));
                let endPage = Math.min(totalPages.value, startPage + props.maxDisplayedPages - 1);
                // Adjust the start and end page to include dots if necessary
                if (endPage - startPage + 1 < props.maxDisplayedPages) {
                    if (currentPage.value <= Math.ceil(props.maxDisplayedPages / 2)) {
                        endPage = props.maxDisplayedPages;
                    }
                    else if (currentPage.value >=
                        totalPages.value - Math.floor(props.maxDisplayedPages / 2)) {
                        startPage = totalPages.value - props.maxDisplayedPages + 1;
                    }
                    else {
                        startPage =
                            currentPage.value - Math.floor(props.maxDisplayedPages / 2);
                        endPage =
                            currentPage.value + Math.floor(props.maxDisplayedPages / 2);
                    }
                }
                // Add the page numbers and dots to the array
                for (let page = startPage; page <= endPage; page++) {
                    pages.push(page);
                }
                if (startPage > 1) {
                    pages.unshift("...");
                }
                if (endPage < totalPages.value) {
                    pages.push("...");
                }
            }
            return pages;
        });
        async function changePage(page) {
            if (page >= 1 && page <= totalPages.value) {
                currentPage.value = page;
                //   const response = await fetchData(
                //     `/o/c/projects/?p_auth=${Liferay.authToken}&page=${currentPage.value}&pageSize=${pageSize.value}&search=${searchTerm.value}`
                //   );
                //   userList.value = response.items;
                // }
                urlEmbed(currentPage.value);
            }
        }
        async function previousPage() {
            if (currentPage.value > 1) {
                currentPage.value--;
                // const response = await fetchData(
                //   `/o/c/projects/?p_auth=${Liferay.authToken}&page=${currentPage.value}&pageSize=${pageSize.value}&search=${searchTerm.value}`
                // );
                // userList.value = response.items;
                urlEmbed(currentPage.value);
            }
        }
        async function nextPage() {
            if (currentPage.value < totalPages.value) {
                currentPage.value++;
                // const response = await fetchData(
                //   `/o/c/projects/?p_auth=${Liferay.authToken}&page=${currentPage.value}&pageSize=${pageSize.value}&search=${searchTerm.value}`
                // );
                // userList.value = response.items;
                urlEmbed(currentPage.value);
            }
        }
        // -----------
        return {
            userList,
            searchTerm,
            ChangeDateFormat,
            handleSearch,
            currentPage,
            totalPages,
            displayedPages,
            changePage,
            previousPage,
            nextPage,
            keyName,
            ChangePage,
            ProjectTabs,
            ProjectApiId,
            openRiskList,
            HeaderList,
            breadcrumbs
        };
    },
    components: { HeaderList }
};
</script>


<template>
  <div>
         <div class="List-head">
        <div class="Searchbar">
          <input type="text" v-model="searchTerm" @input="handleSearch" placeholder="Search..." class="search-input" />
        </div>
        <div class="table-border">
          <div class="container-fluid my-3 mnh-375p">
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">

                  <!-- --------- table for  project list-  -->
                  
                  <table class="table font-weight-600" v-if="!openRiskList">
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Program title & ID</th>
                        <th>Progress (actual vs planned)</th>
                        <th>Issues</th>
                        <th>Risks</th>
                        <th>Started</th>
                        <th>Expected completion</th>
                        <th></th>
                      </tr>
                    </thead>
                   
                    <tbody v-if="userList.length > 0">
                      <tr v-for="item in userList" :key="item.id">
                        <td><span class="badge rounded-pill bg-light-success font-10"><i
                              class='fa-solid fa-circle font-5 align-middle mr-2'></i>{{ item.statusActive }}</span></td>
                        <td>{{ item.projectTitle }}<br /><span class="font-weight-400">STCS - {{ item.id }}</span></td>
                        <td>
                          <div class="row">
                            <div class="col-6">
                              <p class="mb-0 font-10">Actual<span class="ml-2 text-danger">{{ item.progressActual }}%</span>
                              </p>
                            </div>
                            <div class="col-6">
                              <p class="mb-0 text-right font-10">Planned<span class="ml-2 text-success">{{
                                item.progressPlanned }}%</span></p>
                            </div>
                            <div class="col-12">
                              <div class="progress h-5p">
                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="10"
                                  :style="{ width: `${item.progressActual}%` }"></div>
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="40"
                                :style="{ width: `${item.progressPlanned}%` }"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                         <td>{{ item.issues }}</td>
                        <td>{{ item.risks }}</td>
                        <td>{{ ChangeDateFormat(item.startedDate) }}</td>
                        <td>{{ ChangeDateFormat(item.expectedCompletion) }}</td>
                        <td><a href="javascript:void(0)"><img src="../../assets/images/arrow-up.svg" alt="img"
                              @click="() => {ChangePage({ fileName: ProjectTabs, key: 'ProjectTabs' }); ProjectApiId = item.id;breadcrumbs.push({label:'stcs-5943'}) }" /></a>
                        </td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr>
                        <td colspan="7">End of Data</td>
                      </tr>
                    </tbody>
                  </table>
                    <!-- --------- table for  risk & Issues  list-  -->
                  <table class="table font-weight-600" v-else>
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Severity</th>
                        <th>Title & ID</th>
                        <th>Requested by</th>
                        <th>Raised on</th>
                        <th></th>
                      </tr>
                    </thead>
                   
                    <tbody v-if="userList.length > 0">
                      <tr v-for="item in userList" :key="item.id">
                        <td><span class="badge rounded-pill bg-light-success font-10"><i
                              class='fa-solid fa-circle font-5 align-middle mr-2'></i>{{ item.rIskStatus }}</span></td>
                        <td  class="font-weight-800">{{ item.type }}<br /></td>
                       
                         <td>{{ item.severity }}</td>
                         <td>{{ item.title }}<br /><span class="font-weight-400">STCS - {{ item.id }}</span></td>
                         <td>{{ item.requestedBy }}</td>
                        <td>{{ ChangeDateFormat(item.raisedOn) }}</td>
                       
                        <td><a href="javascript:void(0)"><img src="../../assets/images/arrow-up.svg" alt="img"
                              @click="() => {ChangePage({ fileName: ProjectTabs, key: 'ProjectTabs' }); ProjectApiId = item.id}" /></a>
                        </td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr>
                        <td colspan="7">End of Data</td>
                      </tr>
                    </tbody>
                  </table>
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <!-- -------------------- -->

        


      </div>

      <!-- '''''' pagination  -->

    
      <div class="pagination">
        <button @click="previousPage" :disabled="currentPage === 1">
          Previous
        </button>
        <div v-for="page in displayedPages" :key="page">
          <template v-if="page === '...'">
            <span class="dots">...</span>
          </template>
          <template v-else>
            <button @click="changePage(page)" :class="{ active: currentPage === page }">
              {{ page }}
            </button>
          </template>
        </div>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          Next
        </button>
      </div>
    </div>
      
   
</template>
